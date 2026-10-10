import{F as Wn,v as I,y as ct,O as Hn,l as Yn,e as tn,P as Jn,L as Xn,i as Zn,G as ht,S as er,h as tr,M as nr,r as Ct}from"./index.esm2017-6U-0NL8E.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}S.UNAUTHENTICATED=new S(null),S.GOOGLE_CREDENTIALS=new S("google-credentials-uid"),S.FIRST_PARTY=new S("first-party-uid"),S.MOCK_USER=new S("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let le="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Xn("@firebase/firestore");function ci(n){G.setLogLevel(n)}function K(n,...e){if(G.logLevel<=ht.DEBUG){const t=e.map(dt);G.debug(`Firestore (${le}): ${n}`,...t)}}function Be(n,...e){if(G.logLevel<=ht.ERROR){const t=e.map(dt);G.error(`Firestore (${le}): ${n}`,...t)}}function nn(n,...e){if(G.logLevel<=ht.WARN){const t=e.map(dt);G.warn(`Firestore (${le}): ${n}`,...t)}}function dt(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(n="Unexpected state"){const e=`FIRESTORE (${le}) INTERNAL ASSERTION FAILED: `+n;throw Be(e),new Error(e)}function F(n,e){n||_()}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="ok",ft="cancelled",oe="unknown",d="invalid-argument",rn="deadline-exceeded",mt="not-found",rr="already-exists",sn="permission-denied",Ne="unauthenticated",on="resource-exhausted",U="failed-precondition",pt="aborted",an="out-of-range",_t="unimplemented",un="internal",ln="unavailable",ir="data-loss";class c extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(S.UNAUTHENTICATED))}shutdown(){}}class or{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ar{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(F(typeof e.accessToken=="string"),new cn(e.accessToken,new S(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ur{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=S.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class lr{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new ur(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(S.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hr{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(F(typeof e.token=="string"),new cr(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,r,i,s,o,a,u,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class pe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new pe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pe&&e.projectId===this.projectId&&e.database===this.database}}class _e{constructor(e,t,r){t===void 0?t=0:t>e.length&&_(),r===void 0?r=e.length-t:r>e.length-t&&_(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _e.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _e?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class y extends _e{construct(e,t,r){return new y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new c(d,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new y(t)}static emptyPath(){return new y([])}}const fr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class k extends _e{construct(e,t,r){return new k(e,t,r)}static isValidIdentifier(e){return fr.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),k.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new k(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new c(d,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new c(d,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new c(d,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new c(d,"Unterminated ` in path: "+e);return new k(t)}static emptyPath(){return new k([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(y.fromString(e))}static fromName(e){return new E(y.fromString(e).popFirst(5))}static empty(){return new E(y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,e,t){if(!t)throw new c(d,`Function ${n}() cannot be called with an empty ${e}.`)}function Mt(n){if(!E.isDocumentKey(n))throw new c(d,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ut(n){if(E.isDocumentKey(n))throw new c(d,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function je(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_()}function O(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new c(d,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=je(n);throw new c(d,`Expected type '${e.name}', but it was: ${t}`)}}return n}function hn(n,e){if(e<=0)throw new c(d,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke=null;function mr(){return ke===null?ke=function(){return 268435456+Math.round(2147483648*Math.random())}():ke++,"0x"+ke.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){return n==null}function xe(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $t,p;function Bt(n){if(n===void 0)return Be("RPC_ERROR","HTTP error has no status"),oe;switch(n){case 200:return Lt;case 400:return U;case 401:return Ne;case 403:return sn;case 404:return mt;case 409:return pt;case 416:return an;case 429:return on;case 499:return ft;case 500:return oe;case 501:return _t;case 503:return ln;case 504:return rn;default:return n>=200&&n<300?Lt:n>=400&&n<500?U:n>=500&&n<600?un:oe}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(p=$t||($t={}))[p.OK=0]="OK",p[p.CANCELLED=1]="CANCELLED",p[p.UNKNOWN=2]="UNKNOWN",p[p.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",p[p.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",p[p.NOT_FOUND=5]="NOT_FOUND",p[p.ALREADY_EXISTS=6]="ALREADY_EXISTS",p[p.PERMISSION_DENIED=7]="PERMISSION_DENIED",p[p.UNAUTHENTICATED=16]="UNAUTHENTICATED",p[p.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",p[p.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",p[p.ABORTED=10]="ABORTED",p[p.OUT_OF_RANGE=11]="OUT_OF_RANGE",p[p.UNIMPLEMENTED=12]="UNIMPLEMENTED",p[p.INTERNAL=13]="INTERNAL",p[p.UNAVAILABLE=14]="UNAVAILABLE",p[p.DATA_LOSS=15]="DATA_LOSS";class _r extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(t,r,i,s,o){const a=mr(),u=this.V(t,r.toUriEncodedString());K("RestConnection",`Sending RPC '${t}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(l,s,o),this.p(t,u,l,i).then(h=>(K("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw nn("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}g(t,r,i,s,o,a){return this.P(t,r,i,s,o)}I(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+le}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}V(t,r){const i=pr[t];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(u){const l=u;throw new c(Bt(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let u=await a.json();Array.isArray(u)&&(u=u[0]);const l=(s=u==null?void 0:u.error)===null||s===void 0?void 0:s.message;throw new c(Bt(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yr(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function A(n,e){return n<e?-1:n>e?1:0}function wt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ae(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tr("Invalid base64 string: "+s):s}}(e);return new $(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return A(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$.EMPTY_BYTE_STRING=new $("");const Er=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(n){if(F(!!n),typeof n=="string"){let e=0;const t=Er.exec(n);if(F(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:T(n.seconds),nanos:T(n.nanos)}}function T(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ge(n){return typeof n=="string"?$.fromBase64String(n):$.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new c(d,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new c(d,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new c(d,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new c(d,"Timestamp seconds out of range: "+e)}static now(){return N.fromMillis(Date.now())}static fromDate(e){return N.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new N(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?A(this.nanoseconds,e.nanoseconds):A(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function mn(n){const e=n.mapValue.fields.__previous_value__;return Tt(e)?mn(e):e}function ye(n){const e=H(n.mapValue.fields.__local_write_time__.timestampValue);return new N(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe={};function Y(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Tt(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:function(t){var r,i;return((i=(((r=t==null?void 0:t.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}(n)?10:11:_()}function ae(n,e){if(n===e)return!0;const t=Y(n);if(t!==Y(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ye(n).isEqual(ye(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=H(i.timestampValue),a=H(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ge(i.bytesValue).isEqual(ge(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return T(i.geoPointValue.latitude)===T(s.geoPointValue.latitude)&&T(i.geoPointValue.longitude)===T(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return T(i.integerValue)===T(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=T(i.doubleValue),a=T(s.doubleValue);return o===a?xe(o)===xe(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return wt(n.arrayValue.values||[],e.arrayValue.values||[],ae);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(jt(o)!==jt(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ae(o[u],a[u])))return!1;return!0}(n,e);default:return _()}}function we(n,e){return(n.values||[]).find(t=>ae(t,e))!==void 0}function qe(n,e){if(n===e)return 0;const t=Y(n),r=Y(e);if(t!==r)return A(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return A(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=T(s.integerValue||s.doubleValue),u=T(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,e);case 3:return zt(n.timestampValue,e.timestampValue);case 4:return zt(ye(n),ye(e));case 5:return A(n.stringValue,e.stringValue);case 6:return function(s,o){const a=ge(s),u=ge(o);return a.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const h=A(a[l],u[l]);if(h!==0)return h}return A(a.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=A(T(s.latitude),T(o.latitude));return a!==0?a:A(T(s.longitude),T(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Qt(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,l,h;const m=s.fields||{},f=o.fields||{},g=(a=m.value)===null||a===void 0?void 0:a.arrayValue,v=(u=f.value)===null||u===void 0?void 0:u.arrayValue,b=A(((l=g==null?void 0:g.values)===null||l===void 0?void 0:l.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:Qt(g,v)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Fe&&o===Fe)return 0;if(s===Fe)return 1;if(o===Fe)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},h=Object.keys(l);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const f=A(u[m],h[m]);if(f!==0)return f;const g=qe(a[u[m]],l[h[m]]);if(g!==0)return g}return A(u.length,h.length)}(n.mapValue,e.mapValue);default:throw _()}}function zt(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return A(n,e);const t=H(n),r=H(e),i=A(t.seconds,r.seconds);return i!==0?i:A(t.nanos,r.nanos)}function Qt(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=qe(t[i],r[i]);if(s)return s}return A(t.length,r.length)}function Oe(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function pn(n){return!!n&&"arrayValue"in n}function Gt(n){return!!n&&"nullValue"in n}function Kt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nt(n){return!!n&&"mapValue"in n}function de(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ae(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=de(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=de(n.arrayValue.values[t]);return e}return Object.assign({},n)}class Ce{constructor(e,t){this.position=e,this.inclusive=t}}function Wt(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ae(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{}class x extends _n{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vr(e,t,r):t==="array-contains"?new Vr(e,r):t==="in"?new Pr(e,r):t==="not-in"?new Rr(e,r):t==="array-contains-any"?new br(e,r):new x(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ar(e,r):new Ir(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qe(t,this.value)):t!==null&&Y(this.value)===Y(t)&&this.matchesComparison(qe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class J extends _n{constructor(e,t){super(),this.filters=e,this.op=t,this.D=null}static create(e,t){return new J(e,t)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}function gn(n,e){return n instanceof x?function(r,i){return i instanceof x&&r.op===i.op&&r.field.isEqual(i.field)&&ae(r.value,i.value)}(n,e):n instanceof J?function(r,i){return i instanceof J&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&gn(o,i.filters[a]),!0):!1}(n,e):void _()}class vr extends x{constructor(e,t,r){super(e,t,r),this.key=E.fromName(r.referenceValue)}matches(e){const t=E.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ar extends x{constructor(e,t){super(e,"in",t),this.keys=yn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ir extends x{constructor(e,t){super(e,"not-in",t),this.keys=yn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yn(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>E.fromName(r.referenceValue))}class Vr extends x{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pn(t)&&we(t.arrayValue,this.value)}}class Pr extends x{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&we(this.value.arrayValue,t)}}class Rr extends x{constructor(e,t){super(e,"not-in",t)}matches(e){if(we(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!we(this.value.arrayValue,t)}}class br extends x{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>we(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sr(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.timestamp=e}static fromTimestamp(e){return new w(e)}static min(){return new w(new N(0,0))}static max(){return new w(new N(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){this.comparator=e,this.root=t||P.EMPTY}insert(e,t){return new Me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,P.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,P.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new De(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new De(this.root,e,this.comparator,!1)}getReverseIterator(){return new De(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new De(this.root,e,this.comparator,!0)}}class De{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class P{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??P.RED,this.left=i??P.EMPTY,this.right=s??P.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new P(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return P.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return P.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,P.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,P.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}P.EMPTY=null,P.RED=!0,P.BLACK=!1;P.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(e,t,r,i,s){return this}insert(e,t,r){return new P(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ht(this.data.getIterator())}getIteratorFrom(e){return new Ht(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class Ht{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.fields=e,e.sort(k.comparator)}static empty(){return new X([])}unionWith(e){let t=new Te(k.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new X(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.value=e}static empty(){return new D({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!nt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=de(t)}setAll(e){let t=k.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=de(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());nt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ae(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];nt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ae(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new D(de(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new M(e,0,w.min(),w.min(),w.min(),D.empty(),0)}static newFoundDocument(e,t,r,i){return new M(e,1,t,w.min(),r,i,0)}static newNoDocument(e,t){return new M(e,2,t,w.min(),w.min(),D.empty(),0)}static newUnknownDocument(e,t){return new M(e,3,t,w.min(),w.min(),D.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=D.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=D.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof M&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new M(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Yt(n,e=null,t=[],r=[],i=null,s=null,o=null){return new kr(n,e,t,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function wn(n){return n.collectionGroup!==null}function Tn(n){const e=W(n);if(e.S===null){e.S=[];const t=new Set;for(const s of e.explicitOrderBy)e.S.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Te(k.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.S.push(new Le(s,r))}),t.has(k.keyField().canonicalString())||e.S.push(new Le(k.keyField(),r))}return e.S}function it(n){const e=W(n);return e.N||(e.N=En(e,Tn(n))),e.N}function En(n,e){if(n.limitType==="F")return Yt(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Le(i.field,s)});const t=n.endAt?new Ce(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ce(n.startAt.position,n.startAt.inclusive):null;return Yt(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function st(n,e){const t=n.filters.concat([e]);return new ee(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fr(n,e){return function(r,i){if(r.limit!==i.limit||r.orderBy.length!==i.orderBy.length)return!1;for(let s=0;s<r.orderBy.length;s++)if(!Sr(r.orderBy[s],i.orderBy[s]))return!1;if(r.filters.length!==i.filters.length)return!1;for(let s=0;s<r.filters.length;s++)if(!gn(r.filters[s],i.filters[s]))return!1;return r.collectionGroup===i.collectionGroup&&!!r.path.isEqual(i.path)&&!!Wt(r.startAt,i.startAt)&&Wt(r.endAt,i.endAt)}(it(n),it(e))&&n.limitType===e.limitType}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xe(e)?"-0":e}}function An(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!xe(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):vn(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this._=void 0}}class In extends ze{}class Vn extends ze{constructor(e){super(),this.elements=e}}class Pn extends ze{constructor(e){super(),this.elements=e}}class Rn extends ze{constructor(e,t){super(),this.serializer=e,this.q=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.field=e,this.transform=t}}class R{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new R}static exists(e){return new R(void 0,e)}static updateTime(e){return new R(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ge{}class bn extends Ge{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Et extends Ge{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Ke extends Ge{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sn extends Ge{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr={asc:"ASCENDING",desc:"DESCENDING"},Nr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xr={and:"AND",or:"OR"};class qr{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ot(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Or(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Cr(n,e){return ot(n,e.toTimestamp())}function fe(n){return F(!!n),w.fromTimestamp(function(t){const r=H(t);return new N(r.seconds,r.nanos)}(n))}function vt(n,e){return at(n,e).canonicalString()}function at(n,e){const t=function(i){return new y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ue(n,e){return vt(n.databaseId,e.path)}function ut(n,e){const t=function(i){const s=y.fromString(i);return F(Dn(s)),s}(e);if(t.get(1)!==n.databaseId.projectId)throw new c(d,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new c(d,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new E(function(i){return F(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(t))}function Jt(n,e,t){return{name:Ue(n,e),fields:t.value.mapValue.fields}}function Lr(n,e){return"found"in e?function(r,i){F(!!i.found),i.found.name,i.found.updateTime;const s=ut(r,i.found.name),o=fe(i.found.updateTime),a=i.found.createTime?fe(i.found.createTime):w.min(),u=new D({mapValue:{fields:i.found.fields}});return M.newFoundDocument(s,o,a,u)}(n,e):"missing"in e?function(r,i){F(!!i.missing),F(!!i.readTime);const s=ut(r,i.missing),o=fe(i.readTime);return M.newNoDocument(s,o)}(n,e):_()}function Mr(n,e){let t;if(e instanceof bn)t={update:Jt(n,e.key,e.value)};else if(e instanceof Ke)t={delete:Ue(n,e.key)};else if(e instanceof Et)t={update:Jt(n,e.key,e.data),updateMask:jr(e.fieldMask)};else{if(!(e instanceof Sn))return _();t={verify:Ue(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof In)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rn)return{fieldPath:o.field.canonicalString(),increment:a.q};throw _()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Cr(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_()}(n,e.precondition)),t}function kn(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=function(l,h){return vt(l.databaseId,h)}(n,i);const s=function(l){if(l.length!==0)return Fn(J.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(l){if(l.length!==0)return l.map(h=>function(f){return{field:z(f.field),direction:Ur(f.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=function(l,h){return l.useProto3Json||fn(h)?h:{value:h}}(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{B:t,parent:i}}function Ur(n){return Dr[n]}function $r(n){return Nr[n]}function Br(n){return xr[n]}function z(n){return{fieldPath:n.canonicalString()}}function Fn(n){return n instanceof x?function(t){if(t.op==="=="){if(Kt(t.value))return{unaryFilter:{field:z(t.field),op:"IS_NAN"}};if(Gt(t.value))return{unaryFilter:{field:z(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Kt(t.value))return{unaryFilter:{field:z(t.field),op:"IS_NOT_NAN"}};if(Gt(t.value))return{unaryFilter:{field:z(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:z(t.field),op:$r(t.op),value:t.value}}}(n):n instanceof J?function(t){const r=t.getFilters().map(i=>Fn(i));return r.length===1?r[0]:{compositeFilter:{op:Br(t.op),filters:r}}}(n):_()}function jr(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dn(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){return new qr(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,r=1e3,i=1.5,s=6e4){this.$=e,this.timerId=t,this.L=r,this.M=i,this.k=s,this.U=0,this.j=null,this.W=Date.now(),this.reset()}reset(){this.U=0}K(){this.U=this.k}G(e){this.cancel();const t=Math.floor(this.U+this.H()),r=Math.max(0,Date.now()-this.W),i=Math.max(0,t-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.U} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.j=this.$.enqueueAfterDelay(this.timerId,i,()=>(this.W=Date.now(),e())),this.U*=this.M,this.U<this.L&&(this.U=this.L),this.U>this.k&&(this.U=this.k)}J(){this.j!==null&&(this.j.skipDelay(),this.j=null)}cancel(){this.j!==null&&(this.j.cancel(),this.j=null)}H(){return(Math.random()-.5)*this.U}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new c(U,"The client has already been terminated.")}P(e,t,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,at(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Ne&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new c(oe,s.toString())})}g(e,t,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,at(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Ne&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new c(oe,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function ce(n,e){const t=W(n),r={writes:e.map(i=>Mr(t.serializer,i))};await t.P("Commit",t.serializer.databaseId,y.emptyPath(),r)}async function xn(n,e){const t=W(n),r={documents:e.map(a=>Ue(t.serializer,a))},i=await t.g("BatchGetDocuments",t.serializer.databaseId,y.emptyPath(),r,e.length),s=new Map;i.forEach(a=>{const u=Lr(t.serializer,a);s.set(u.key.toString(),u)});const o=[];return e.forEach(a=>{const u=s.get(a.toString());F(!!u),o.push(u)}),o}async function Qr(n,e){const t=W(n),{B:r,parent:i}=kn(t.serializer,it(e));return(await t.g("RunQuery",t.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,u,l){const h=ut(a,u.name),m=fe(u.updateTime),f=u.createTime?fe(u.createTime):w.min(),g=new D({mapValue:{fields:u.fields}}),v=M.newFoundDocument(h,m,f,g);return l?v.setHasCommittedMutations():v}(t.serializer,s.document,void 0))}async function Gr(n,e,t){var r;const i=W(n),{request:s,X:o,parent:a}=function(m,f,g,v){const{B:b,parent:L}=kn(m,f),Re={},be=[];let Kn=0;return g.forEach(se=>{const Se="aggregate_"+Kn++;Re[Se]=se.alias,se.aggregateType==="count"?be.push({alias:Se,count:{}}):se.aggregateType==="avg"?be.push({alias:Se,avg:{field:z(se.fieldPath)}}):se.aggregateType==="sum"&&be.push({alias:Se,sum:{field:z(se.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:be,structuredQuery:b.structuredQuery},parent:b.parent},X:Re,parent:L}}(i.serializer,function(m){const f=W(m);return f.O||(f.O=En(f,m.explicitOrderBy)),f.O}(e),t);i.connection.R||delete s.parent;const u=(await i.g("RunAggregationQuery",i.serializer.databaseId,a,s,1)).filter(h=>!!h.result);F(u.length===1);const l=(r=u[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(l).reduce((h,m)=>(h[o[m]]=l[m],h),{})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Map;function B(n){if(n._terminated)throw new c(U,"The client has already been terminated.");if(!me.has(n)){K("ComponentProvider","Initializing Datastore");const e=function(s){return new _r(s,fetch.bind(null))}(function(s,o,a,u){return new dr(s,o,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dn(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=At(n._databaseId),r=function(s,o,a,u){return new zr(s,o,a,u)}(n._authCredentials,n._appCheckCredentials,e,t);me.set(n,r)}return me.get(n)}class Xt{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new c(d,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new c(d,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,u){if(o===!0&&u===!0)throw new c(d,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dn((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new c(d,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new c(d,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new c(d,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class j{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xt({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new c(U,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new c(U,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xt(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sr;switch(r.type){case"firstParty":return new lr(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new c(d,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=me.get(t);r&&(K("ComponentProvider","Removing Datastore"),me.delete(t),r.terminate())}(this),Promise.resolve()}}function mi(n,e,t){t||(t="(default)");const r=tn(n,"firestore/lite");if(r.isInitialized(t))throw new c(U,"Firestore can only be initialized once per app.");return r.initialize({options:e,instanceIdentifier:t})}function pi(n,e){const t=typeof n=="object"?n:Yn(),r=typeof n=="string"?n:e||"(default)",i=tn(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Jn("firestore");s&&Kr(i,...s)}return i}function Kr(n,e,t,r={}){var i;const s=(n=O(n,j))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=S.MOCK_USER;else{a=Hn(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new c(d,"mockUserToken must contain 'sub' or 'user_id' field!");u=new S(l)}n._authCredentials=new or(new cn(a,u))}}function _i(n){return n=O(n,j),Zn(n.app,"firestore/lite"),n._delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Wr{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new q(this.firestore,e,this._query)}}class V{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new C(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new V(this.firestore,e,this._key)}}class C extends q{constructor(e,t,r){super(e,t,function(s){return new ee(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new V(this.firestore,null,new E(e))}withConverter(e){return new C(this.firestore,e,this._path)}}function gi(n,e,...t){if(n=I(n),yt("collection","path",e),n instanceof j){const r=y.fromString(e,...t);return Ut(r),new C(n,null,r)}{if(!(n instanceof V||n instanceof C))throw new c(d,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(e,...t));return Ut(r),new C(n.firestore,null,r)}}function yi(n,e){if(n=O(n,j),yt("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new c(d,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new q(n,null,function(r){return new ee(y.emptyPath(),r)}(e))}function Hr(n,e,...t){if(n=I(n),arguments.length===1&&(e=wr.newId()),yt("doc","path",e),n instanceof j){const r=y.fromString(e,...t);return Mt(r),new V(n,null,new E(r))}{if(!(n instanceof V||n instanceof C))throw new c(d,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(y.fromString(e,...t));return Mt(r),new V(n.firestore,n instanceof C?n.converter:null,new E(r))}}function wi(n,e){return n=I(n),e=I(e),(n instanceof V||n instanceof C)&&(e instanceof V||e instanceof C)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function qn(n,e){return n=I(n),e=I(e),n instanceof q&&e instanceof q&&n.firestore===e.firestore&&Fr(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ue($.fromBase64String(e))}catch(t){throw new c(d,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ue($.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new c(d,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new k(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ti(){return new te("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new c(d,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new c(d,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return A(this._lat,e._lat)||A(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=/^__.*__$/;class Jr{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Et(e,this.data,this.fieldMask,t,this.fieldTransforms):new bn(e,this.data,t,this.fieldTransforms)}}class On{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Et(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cn(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class He{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new He(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return $e(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Cn(this.et)&&Yr.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Xr{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||At(e)}ht(e,t,r,i=!1){return new He({et:e,methodName:t,lt:r,path:k.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function re(n){const e=n._freezeSettings(),t=At(n._databaseId);return new Xr(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ye(n,e,t,r,i,s={}){const o=n.ht(s.merge||s.mergeFields?2:0,e,t,i);Ft("Data must be an object, but it was:",o,r);const a=Un(r,o);let u,l;if(s.merge)u=new X(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const m of s.mergeFields){const f=ve(e,m,t);if(!o.contains(f))throw new c(d,`Field '${f}' is specified in your field mask but missing from your input data.`);Bn(h,f)||h.push(f)}u=new X(h),l=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,l=o.fieldTransforms;return new Jr(new D(a),u,l)}class Ie extends ne{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ie}}function Ln(n,e,t){return new He({et:3,lt:e.settings.lt,methodName:n._methodName,it:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vt extends ne{_toFieldTransform(e){return new Qe(e.path,new In)}isEqual(e){return e instanceof Vt}}class Pt extends ne{constructor(e,t){super(e),this.dt=t}_toFieldTransform(e){const t=Ln(this,e,!0),r=this.dt.map(s=>ie(s,t)),i=new Vn(r);return new Qe(e.path,i)}isEqual(e){return e instanceof Pt&&ct(this.dt,e.dt)}}class Rt extends ne{constructor(e,t){super(e),this.dt=t}_toFieldTransform(e){const t=Ln(this,e,!0),r=this.dt.map(s=>ie(s,t)),i=new Pn(r);return new Qe(e.path,i)}isEqual(e){return e instanceof Rt&&ct(this.dt,e.dt)}}class bt extends ne{constructor(e,t){super(e),this.ft=t}_toFieldTransform(e){const t=new Rn(e.serializer,An(e.serializer,this.ft));return new Qe(e.path,t)}isEqual(e){return e instanceof bt&&this.ft===e.ft}}function St(n,e,t,r){const i=n.ht(1,e,t);Ft("Data must be an object, but it was:",i,r);const s=[],o=D.empty();Ae(r,(u,l)=>{const h=Dt(e,u,t);l=I(l);const m=i.ot(h);if(l instanceof Ie)s.push(h);else{const f=ie(l,m);f!=null&&(s.push(h),o.set(h,f))}});const a=new X(s);return new On(o,a,i.fieldTransforms)}function kt(n,e,t,r,i,s){const o=n.ht(1,e,t),a=[ve(e,r,t)],u=[i];if(s.length%2!=0)throw new c(d,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(ve(e,s[f])),u.push(s[f+1]);const l=[],h=D.empty();for(let f=a.length-1;f>=0;--f)if(!Bn(l,a[f])){const g=a[f];let v=u[f];v=I(v);const b=o.ot(g);if(v instanceof Ie)l.push(g);else{const L=ie(v,b);L!=null&&(l.push(g),h.set(g,L))}}const m=new X(l);return new On(h,m,o.fieldTransforms)}function Mn(n,e,t,r=!1){return ie(t,n.ht(r?4:3,e))}function ie(n,e){if($n(n=I(n)))return Ft("Unsupported field value:",e,n),Un(n,e);if(n instanceof ne)return function(r,i){if(!Cn(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ie(a,i.ut(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=I(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return An(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=N.fromDate(r);return{timestampValue:ot(i.serializer,s)}}if(r instanceof N){const s=new N(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ot(i.serializer,s)}}if(r instanceof It)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ue)return{bytesValue:Or(i.serializer,r._byteString)};if(r instanceof V){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vt(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof We)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a._t("VectorValues must only contain numeric values.");return vn(a.serializer,u)})}}}}}}(r,i);throw i._t(`Unsupported field value: ${je(r)}`)}(n,e)}function Un(n,e){const t={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ae(n,(r,i)=>{const s=ie(i,e.nt(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function $n(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof N||n instanceof It||n instanceof ue||n instanceof V||n instanceof ne||n instanceof We)}function Ft(n,e,t){if(!$n(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=je(t);throw r==="an object"?e._t(n+" a custom object"):e._t(n+" "+r)}}function ve(n,e,t){if((e=I(e))instanceof te)return e._internalPath;if(typeof e=="string")return Dt(n,e);throw $e("Field path arguments must be of type string or ",n,!1,void 0,t)}const Zr=new RegExp("[~\\*/\\[\\]]");function Dt(n,e,t){if(e.search(Zr)>=0)throw $e(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new te(...e.split("."))._internalPath}catch{throw $e(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function $e(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new c(d,a+n+u)}function Bn(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new V(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Nt("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jn extends Z{data(){return super.data()}}class lt{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,t){this._docs.forEach(e,t)}}function ei(n,e){return n=I(n),e=I(e),n instanceof Z&&e instanceof Z?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof lt&&e instanceof lt&&qn(n.query,e.query)&&wt(n.docs,e.docs,ei)}function Nt(n,e){return typeof e=="string"?Dt(n,e):e instanceof te?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{}class Ve extends xt{}function Ei(n,e,...t){let r=[];e instanceof xt&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof he).length,a=s.filter(u=>u instanceof Pe).length;if(o>1||o>0&&a>0)throw new c(d,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Pe extends Ve{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Pe(e,t,r)}_apply(e){const t=this._parse(e);return Qn(e._query,t),new q(e.firestore,e.converter,st(e._query,t))}_parse(e){const t=re(e.firestore);return function(s,o,a,u,l,h,m){let f;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new c(d,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){en(m,h);const g=[];for(const v of m)g.push(Zt(u,s,v));f={arrayValue:{values:g}}}else f=Zt(u,s,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||en(m,h),f=Mn(a,o,m,h==="in"||h==="not-in");return x.create(l,h,f)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vi(n,e,t){const r=e,i=Nt("where",n);return Pe._create(i,r,t)}class he extends xt{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new he(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:J.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)Qn(o,u),o=st(o,u)}(e._query,t),new q(e.firestore,e.converter,st(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ai(...n){return n.forEach(e=>Gn("or",e)),he._create("or",n)}function Ii(...n){return n.forEach(e=>Gn("and",e)),he._create("and",n)}class qt extends Ve{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new qt(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new c(d,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new c(d,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Le(s,o)}(e._query,this._field,this._direction);return new q(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ee(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Vi(n,e="asc"){const t=e,r=Nt("orderBy",n);return qt._create(r,t)}class Je extends Ve{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Je(e,t,r)}_apply(e){return new q(e.firestore,e.converter,function(r,i,s){return new ee(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)}(e._query,this._limit,this._limitType))}}function Pi(n){return hn("limit",n),Je._create("limit",n,"F")}function Ri(n){return hn("limitToLast",n),Je._create("limitToLast",n,"L")}class Xe extends Ve{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xe(e,t,r)}_apply(e){const t=zn(e,this.type,this._docOrFields,this._inclusive);return new q(e.firestore,e.converter,function(i,s){return new ee(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function bi(...n){return Xe._create("startAt",n,!0)}function Si(...n){return Xe._create("startAfter",n,!1)}class Ze extends Ve{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ze(e,t,r)}_apply(e){const t=zn(e,this.type,this._docOrFields,this._inclusive);return new q(e.firestore,e.converter,function(i,s){return new ee(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function ki(...n){return Ze._create("endBefore",n,!1)}function Fi(...n){return Ze._create("endAt",n,!0)}function zn(n,e,t,r){if(t[0]=I(t[0]),t[0]instanceof Z)return function(s,o,a,u,l){if(!u)throw new c(mt,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const m of Tn(s))if(m.field.isKeyField())h.push(Oe(o,u.key));else{const f=u.data.field(m.field);if(Tt(f))throw new c(d,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const g=m.field.canonicalString();throw new c(d,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(f)}return new Ce(h,l)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=re(n.firestore);return function(o,a,u,l,h,m){const f=o.explicitOrderBy;if(h.length>f.length)throw new c(d,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let v=0;v<h.length;v++){const b=h[v];if(f[v].field.isKeyField()){if(typeof b!="string")throw new c(d,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof b}`);if(!wn(o)&&b.indexOf("/")!==-1)throw new c(d,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${b}' contains a slash.`);const L=o.path.child(y.fromString(b));if(!E.isDocumentKey(L))throw new c(d,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const Re=new E(L);g.push(Oe(a,Re))}else{const L=Mn(u,l,b);g.push(L)}}return new Ce(g,m)}(n._query,n.firestore._databaseId,i,e,t,r)}}function Zt(n,e,t){if(typeof(t=I(t))=="string"){if(t==="")throw new c(d,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wn(e)&&t.indexOf("/")!==-1)throw new c(d,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(y.fromString(t));if(!E.isDocumentKey(r))throw new c(d,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oe(n,new E(r))}if(t instanceof V)return Oe(n,t._key);throw new c(d,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${je(t)}.`)}function en(n,e){if(!Array.isArray(n)||n.length===0)throw new c(d,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qn(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new c(d,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new c(d,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Gn(n,e){if(!(e instanceof Pe||e instanceof he))throw new c(d,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class tt extends class{convertValue(t,r="none"){switch(Y(t)){case 0:return null;case 1:return t.booleanValue;case 2:return T(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw _()}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){const i={};return Ae(t,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertVectorValue(t){var r,i,s;const o=(s=(i=(r=t.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>T(a.doubleValue));return new We(o)}convertGeoPoint(t){return new It(T(t.latitude),T(t.longitude))}convertArray(t,r){return(t.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(t,r){switch(r){case"previous":const i=mn(t);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(ye(t));default:return null}}convertTimestamp(t){const r=H(t);return new N(r.seconds,r.nanos)}convertDocumentKey(t,r){const i=y.fromString(t);F(Dn(i));const s=new pe(i.get(1),i.get(3)),o=new E(i.popFirst(5));return s.isEqual(r)||Be(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ue(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new V(this.firestore,null,t)}}function Ni(n){const e=B((n=O(n,V)).firestore),t=new tt(n.firestore);return xn(e,[n._key]).then(r=>{F(r.length===1);const i=r[0];return new Z(n.firestore,t,n._key,i.isFoundDocument()?i:null,n.converter)})}function xi(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new c(_t,"limitToLast() queries require specifying at least one orderBy() clause")})((n=O(n,q))._query);const e=B(n.firestore),t=new tt(n.firestore);return Qr(e,n._query).then(r=>{const i=r.map(s=>new jn(n.firestore,t,s.key,s,n.converter));return n._query.limitType==="L"&&i.reverse(),new lt(n,i)})}function qi(n,e,t){const r=et((n=O(n,V)).converter,e,t),i=Ye(re(n.firestore),"setDoc",n._key,r,n.converter!==null,t);return ce(B(n.firestore),[i.toMutation(n._key,R.none())])}function Oi(n,e,t,...r){const i=re((n=O(n,V)).firestore);let s;return s=typeof(e=I(e))=="string"||e instanceof te?kt(i,"updateDoc",n._key,e,t,r):St(i,"updateDoc",n._key,e),ce(B(n.firestore),[s.toMutation(n._key,R.exists(!0))])}function Ci(n){return ce(B((n=O(n,V)).firestore),[new Ke(n._key,R.none())])}function Li(n,e){const t=Hr(n=O(n,C)),r=et(n.converter,e),i=Ye(re(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return ce(B(n.firestore),[i.toMutation(t._key,R.exists(!1))]).then(()=>t)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){return ti(n,{count:ni()})}function ti(n,e){const t=O(n.firestore,j),r=B(t),i=function(o,a){const u=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&u.push(a(o[l],l,o));return u}(e,(s,o)=>new gr(o,s.aggregateType,s._internalFieldPath));return Gr(r,n._query,i).then(s=>function(a,u,l){const h=new tt(a);return new Wr(u,h,l)}(t,n,s))}function Ui(n){return new Ee("sum",ve("sum",n))}function $i(n){return new Ee("avg",ve("average",n))}function ni(){return new Ee("count")}function Bi(n,e){var t,r;return n instanceof Ee&&e instanceof Ee&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function ji(n,e){return qn(n.query,e.query)&&ct(n.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return new Ie("deleteField")}function Qi(){return new Vt("serverTimestamp")}function Gi(...n){return new Pt("arrayUnion",n)}function Ki(...n){return new Rt("arrayRemove",n)}function Wi(n){return new bt("increment",n)}function Hi(n){return new We(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=re(e)}set(e,t,r){this._verifyNotCommitted();const i=Q(e,this._firestore),s=et(i.converter,t,r),o=Ye(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,R.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Q(e,this._firestore);let o;return o=typeof(t=I(t))=="string"||t instanceof te?kt(this._dataReader,"WriteBatch.update",s._key,t,r,i):St(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,R.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Q(e,this._firestore);return this._mutations=this._mutations.concat(new Ke(t._key,R.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new c(U,"A write batch can no longer be used after commit() has been called.")}}function Q(n,e){if((n=I(n)).firestore!==e)throw new c(d,"Provided document reference is from a different Firestore instance.");return n}function Yi(n){const e=B(n=O(n,j));return new ri(n,t=>ce(e,t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new c(d,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await xn(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ke(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=E.fromPath(r);this.mutations.push(new Sn(i,this.precondition(i)))}),await ce(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw _();t=w.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new c(pt,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(w.min())?R.exists(!1):R.updateTime(t):R.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(w.min()))throw new c(d,"Can't update a document that doesn't exist.");return R.updateTime(t)}return R.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Et=r.maxAttempts,this.At=new Nn(this.asyncQueue,"transaction_retry")}Tt(){this.Et-=1,this.Rt()}Rt(){this.At.G(async()=>{const e=new ii(this.datastore),t=this.Pt(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Vt(i)}))}).catch(r=>{this.Vt(r)})})}Pt(e){try{const t=this.updateFunction(e);return!fn(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Vt(e){this.Et>0&&this.It(e)?(this.Et-=1,this.asyncQueue.enqueueAndForget(()=>(this.Rt(),Promise.resolve()))):this.deferred.reject(e)}It(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!function(i){switch(i){default:return _();case ft:case oe:case rn:case on:case un:case ln:case Ne:return!1;case d:case mt:case rr:case sn:case U:case pt:case an:case _t:case ir:return!0}}(t)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Ot(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new c(ft,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e=Promise.resolve()){this.yt=[],this.wt=!1,this.gt=[],this.Ft=null,this.vt=!1,this.Dt=!1,this.bt=[],this.At=new Nn(this,"async_queue_retry"),this.Ct=()=>{const r=rt();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.At.J()},this.St=e;const t=rt();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ct)}get isShuttingDown(){return this.wt}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Nt(),this.Ot(e)}enterRestrictedMode(e){if(!this.wt){this.wt=!0,this.Dt=e||!1;const t=rt();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ct)}}enqueue(e){if(this.Nt(),this.wt)return new Promise(()=>{});const t=new gt;return this.Ot(()=>this.wt&&this.Dt?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.yt.push(e),this.qt()))}async qt(){if(this.yt.length!==0){try{await this.yt[0](),this.yt.shift(),this.At.reset()}catch(e){if(!function(r){return r.name==="IndexedDbTransactionError"}(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.yt.length>0&&this.At.G(()=>this.qt())}}Ot(e){const t=this.St.then(()=>(this.vt=!0,e().catch(r=>{this.Ft=r,this.vt=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.vt=!1,r))));return this.St=t,t}enqueueAfterDelay(e,t,r){this.Nt(),this.bt.indexOf(e)>-1&&(t=0);const i=Ot.createAndSchedule(this,e,t,r,s=>this.Bt(s));return this.gt.push(i),i}Nt(){this.Ft&&_()}verifyOperationInProgress(){}async $t(){let e;do e=this.St,await e;while(e!==this.St)}Qt(e){for(const t of this.gt)if(t.timerId===e)return!0;return!1}Lt(e){return this.$t().then(()=>{this.gt.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.gt)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.$t()})}Mt(e){this.bt.push(e)}Bt(e){const t=this.gt.indexOf(e);this.gt.splice(t,1)}}class ui{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=re(e)}get(e){const t=Q(e,this._firestore),r=new tt(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return _();const s=i[0];if(s.isFoundDocument())return new Z(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Z(this._firestore,r,t._key,null,t.converter);throw _()})}set(e,t,r){const i=Q(e,this._firestore),s=et(i.converter,t,r),o=Ye(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Q(e,this._firestore);let o;return o=typeof(t=I(t))=="string"||t instanceof te?kt(this._dataReader,"Transaction.update",s._key,t,r,i):St(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Q(e,this._firestore);return this._transaction.delete(t._key),this}}function Ji(n,e,t){const r=B(n=O(n,j)),i=Object.assign(Object.assign({},si),t);(function(a){if(a.maxAttempts<1)throw new c(d,"Max attempts must be at least 1")})(i);const s=new gt;return new oi(function(){return new ai}(),r,i,o=>e(new ui(n,o)),s).Tt(),s.promise}(function(){(function(t){le=t})(`${er}_lite`),tr(new nr("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new j(new ar(e.getProvider("auth-internal")),new hr(e.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new c(d,'"projectId" not provided in firebase.initializeApp.');return new pe(a.options.projectId,u)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ct("firestore-lite","4.7.3",""),Ct("firestore-lite","4.7.3","esm2017")})();export{Ee as AggregateField,Wr as AggregateQuerySnapshot,ue as Bytes,C as CollectionReference,V as DocumentReference,Z as DocumentSnapshot,te as FieldPath,ne as FieldValue,j as Firestore,c as FirestoreError,It as GeoPoint,q as Query,he as QueryCompositeFilterConstraint,Ve as QueryConstraint,jn as QueryDocumentSnapshot,Ze as QueryEndAtConstraint,Pe as QueryFieldFilterConstraint,Je as QueryLimitConstraint,qt as QueryOrderByConstraint,lt as QuerySnapshot,Xe as QueryStartAtConstraint,N as Timestamp,ui as Transaction,We as VectorValue,ri as WriteBatch,Li as addDoc,Bi as aggregateFieldEqual,ji as aggregateQuerySnapshotEqual,Ii as and,Ki as arrayRemove,Gi as arrayUnion,$i as average,gi as collection,yi as collectionGroup,Kr as connectFirestoreEmulator,ni as count,Ci as deleteDoc,zi as deleteField,Hr as doc,Ti as documentId,Fi as endAt,ki as endBefore,ti as getAggregate,Mi as getCount,Ni as getDoc,xi as getDocs,pi as getFirestore,Wi as increment,mi as initializeFirestore,Pi as limit,Ri as limitToLast,Ai as or,Vi as orderBy,Ei as query,qn as queryEqual,wi as refEqual,Ji as runTransaction,Qi as serverTimestamp,qi as setDoc,ci as setLogLevel,ei as snapshotEqual,Si as startAfter,bi as startAt,Ui as sum,_i as terminate,Oi as updateDoc,Hi as vector,vi as where,Yi as writeBatch};
