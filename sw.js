// トレ韓 service worker — network-first for pages, cache-first for built assets (the newest 150 kept).
const CACHE = 'torekan-v5';
// built files have new names on every deploy: keep only the most recent ones so the cache does not grow forever
const MAX_ENTRIES = 150;
const trim = (c) => c.keys().then((keys) => Promise.all(keys.slice(0, Math.max(0, keys.length - MAX_ENTRIES)).map((k) => c.delete(k))));
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', './icon-192.png'])));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE && !k.startsWith('torekan-audio')).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // fonts, firebase: let the browser handle them
  // recordings: the offline audio cache first (saved from マイページ), then the network
  if (url.pathname.includes('/audio/')) {
    e.respondWith(caches.open('torekan-audio-v1').then((c) => c.match(req)).then((hit) => hit || fetch(req)));
    return;
  }
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((r) => { caches.open(CACHE).then((c) => c.put(req, r.clone())); return r; }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(req, copy).then(() => trim(c))); } return r; })));
});

// 学習リマインダー (web push, sent once a day by scripts/send-reminders.ts): show it, and open the app when it is tapped
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { /* a push without a readable body still shows the default line */ }
  e.waitUntil(self.registration.showNotification(d.title || 'トレ韓', {
    body: d.body || 'きょうも5分だけ、やってみよう。',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: 'torekan-reminder',
    data: { path: typeof d.path === 'string' && d.path.startsWith('/') ? d.path : '/' },
  }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = self.registration.scope + '#' + ((e.notification.data && e.notification.data.path) || '/');
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    const open = list.find((c) => c.url.startsWith(self.registration.scope));
    if (open) return open.navigate(url).catch(() => null).then(() => open.focus());
    return self.clients.openWindow(url);
  }));
});
