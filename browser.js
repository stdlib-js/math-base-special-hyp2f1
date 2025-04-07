// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function o(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,u,f,c,s,l,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(u)?String(t.arg):N(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=U.exec(r);t;)(e=r.slice(i,U.lastIndex-t[0].length)).length&&n.push(e),n.push(j(t)),i=U.lastIndex,t=U.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return S.apply(null,e)}var I=Object.prototype,F=I.toString,O=I.__defineGetter__,T=I.__defineSetter__,V=I.__lookupGetter__,$=I.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,u;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=I,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,u="set"in n,i&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,n.get),u&&T&&T.call(r,e,n.set),r};function P(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return W&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,R="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof R?R.toStringTag:"",X=C()?function(r){var e,n,t,i,a;if(null==r)return L.call(r);n=r[Z],a=Z,e=null!=(i=r)&&M.call(i,a);try{r[Z]=void 0}catch(e){return L.call(r)}return t=L.call(r),e?r[Z]=n:delete r[Z],t}:function(r){return L.call(r)},Y=Number,q=Y.prototype.toString,z=C();function B(r){return"object"==typeof r&&(r instanceof Y||(z?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function D(r){return H(r)||B(r)}function J(r){return r!=r}function K(r){return H(r)&&J(r)}function Q(r){return B(r)&&J(r.valueOf())}function rr(r){return K(r)||Q(r)}P(D,"isPrimitive",H),P(D,"isObject",B),P(rr,"isPrimitive",K),P(rr,"isObject",Q);var er=Number.POSITIVE_INFINITY,nr=Math.round,tr=Math.floor;function ir(r){return tr(r)===r}var ar=Y.NEGATIVE_INFINITY;function ur(r){return Math.abs(r)}var or,fr=2147483647,cr=2146435072,sr="function"==typeof Uint32Array,lr="function"==typeof Uint32Array?Uint32Array:null,pr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(sr&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var vr,yr=or,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;vr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr([1,3.14,-3.14,NaN]),n=e,r=(gr&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr,br=vr,mr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Nr)return!1;try{e=new Nr(e=[1,3.14,-3.14,256,257]),n=e,r=(mr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er=wr,Sr="function"==typeof Uint16Array,Ur="function"==typeof Uint16Array?Uint16Array:null,jr="function"==typeof Uint16Array?Uint16Array:void 0;_r=function(){var r,e,n;if("function"!=typeof Ur)return!1;try{e=new Ur(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Sr&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var kr,xr={uint16:_r,uint8:Er};(kr=new xr.uint16(1))[0]=4660;var Ir=52===new xr.uint8(kr.buffer)[0],Fr=!0===Ir?1:0,Or=new br(1),Tr=new yr(Or.buffer);function Vr(r){return Or[0]=r,Tr[Fr]}function $r(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Gr=-.16666666666666632,Pr=.00833333333332249,Hr=-.0001984126982985795,Wr=27557313707070068e-22,Cr=-2.5050760253406863e-8,Lr=1.58969099521155e-10;function Mr(r,e){var n,t,i;return n=Pr+(i=r*r)*(Hr+i*Wr)+i*(i*i)*(Cr+i*Lr),t=i*r,0===e?r+t*(Gr+i*n):r-(i*(.5*e-t*n)-e-t*Gr)}var Rr,Zr,Xr=1048575,Yr=!0===Ir?0:1,qr=new br(1),zr=new yr(qr.buffer);!0===Ir?(Rr=1,Zr=0):(Rr=0,Zr=1);var Br={HIGH:Rr,LOW:Zr},Dr=new br(1),Jr=new yr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function re(r,e){return Jr[Kr]=r,Jr[Qr]=e,Dr[0]}var ee=1023,ne=1023,te=-1023,ie=-1074;function ae(r){return r===er||r===ar}var ue,oe,fe=2147483648;!0===Ir?(ue=1,oe=0):(ue=0,oe=1);var ce={HIGH:ue,LOW:oe},se=new br(1),le=new yr(se.buffer),pe=ce.HIGH,ve=ce.LOW;function ye(r,e,n,t){return se[0]=r,e[t]=le[pe],e[t+n]=le[ve],e}function ge(r){return ye(r,[0,0],1,0)}P(ge,"assign",ye);var de=[0,0];function he(r,e){var n,t;return ge.assign(r,de,1,0),n=de[0],n&=fr,t=Vr(e),re(n|=t&=fe,de[1])}var we=22250738585072014e-324,be=4503599627370496;function me(r,e,n,t){return J(r)||ae(r)?(e[t]=r,e[t+n]=0,e):0!==r&&ur(r)<we?(e[t]=r*be,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}P((function(r){return me(r,[0,0],1,0)}),"assign",me);var Ne=2220446049250313e-31,Ae=2148532223,_e=[0,0],Ee=[0,0];function Se(r,e){var n,t;return 0===e||0===r||J(r)||ae(r)?r:(me(r,_e,1,0),r=_e[0],e+=_e[1],e+=function(r){var e=Vr(r);return(e=(e&cr)>>>20)-ee|0}(r),e<ie?he(0,r):e>ne?r<0?ar:er:(e<=te?(e+=52,t=Ne):t=1,ge.assign(r,Ee,1,0),n=Ee[0],n&=Ae,t*re(n|=e+ee<<20,Ee[1])))}function Ue(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var je=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ke=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xe=16777216,Ie=5.960464477539063e-8,Fe=Ue(20),Oe=Ue(20),Te=Ue(20),Ve=Ue(20);function $e(r,e,n,t,i,a,u,o,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=Ie*h|0,Ve[v]=h-xe*s|0,h=t[d-1]+s,d-=1;if(h=Se(h,i),h-=8*tr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Ve[n-1]>>24-i,Ve[n-1]-=v<<24-i,l=Ve[n-1]>>23-i):0===i?l=Ve[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<n;v++)d=Ve[v],0===c?0!==d&&(c=1,Ve[v]=16777216-d):Ve[v]=16777215-d;if(i>0)switch(i){case 1:Ve[n-1]&=8388607;break;case 2:Ve[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Se(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Ve[v];if(0===d){for(y=1;0===Ve[a-y];y++);for(v=n+1;v<=n+y;v++){for(f[o+v]=je[u+v],s=0,d=0;d<=o;d++)s+=r[d]*f[o+(v-d)];t[v]=s}return $e(r,e,n+=y,t,i,a,u,o,f)}}if(0===h)for(n-=1,i-=24;0===Ve[n];)n-=1,i-=24;else(h=Se(h,-i))>=xe?(s=Ie*h|0,Ve[n]=h-xe*s|0,i+=24,Ve[n+=1]=s):Ve[n]=0|h;for(s=Se(1,i),v=n;v>=0;v--)t[v]=s*Ve[v],s*=Ie;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=ke[y]*t[v+y];Te[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Te[v];for(e[0]=0===l?s:-s,s=Te[0]-s,v=1;v<=n;v++)s+=Te[v];return e[1]=0===l?s:-s,7&g}function Ge(r,e,n,t){var i,a,u,o,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),o=n-24*(a+1),c=a-(u=t-1),s=u+4,f=0;f<=s;f++)Fe[f]=c<0?0:je[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*Fe[u+(f-c)];Oe[f]=i}return $e(r,e,4,Oe,o,4,a,u,Fe)}var Pe=Math.round,He=.6366197723675814,We=1.5707963267341256,Ce=6077100506506192e-26,Le=6077100506303966e-26,Me=20222662487959506e-37,Re=20222662487111665e-37,Ze=84784276603689e-45,Xe=2047;function Ye(r,e,n){var t,i,a,u,o;return a=r-(t=Pe(r*He))*We,u=t*Ce,o=e>>20|0,n[0]=a-u,o-(Vr(n[0])>>20&Xe)>16&&(u=t*Me-((i=a)-(a=i-(u=t*Le))-u),n[0]=a-u,o-(Vr(n[0])>>20&Xe)>49&&(u=t*Ze-((i=a)-(a=i-(u=t*Re))-u),n[0]=a-u)),n[1]=a-n[0]-u,t}var qe=0,ze=16777216,Be=1.5707963267341256,De=6077100506506192e-26,Je=2*De,Ke=3*De,Qe=4*De,rn=598523,en=1072243195,nn=1073928572,tn=1074752122,an=1074977148,un=1075183036,on=1075388923,fn=1075594811,cn=1094263291,sn=[0,0,0],ln=[0,0];function pn(r,e){var n,t,i,a,u,o,f;if((i=Vr(r)&fr|0)<=en)return e[0]=r,e[1]=0,0;if(i<=tn)return(i&Xr)===rn?Ye(r,i,e):i<=nn?r>0?(f=r-Be,e[0]=f-De,e[1]=f-e[0]-De,1):(f=r+Be,e[0]=f+De,e[1]=f-e[0]+De,-1):r>0?(f=r-2*Be,e[0]=f-Je,e[1]=f-e[0]-Je,2):(f=r+2*Be,e[0]=f+Je,e[1]=f-e[0]+Je,-2);if(i<=fn)return i<=un?i===an?Ye(r,i,e):r>0?(f=r-3*Be,e[0]=f-Ke,e[1]=f-e[0]-Ke,3):(f=r+3*Be,e[0]=f+Ke,e[1]=f-e[0]+Ke,-3):i===on?Ye(r,i,e):r>0?(f=r-4*Be,e[0]=f-Qe,e[1]=f-e[0]-Qe,4):(f=r+4*Be,e[0]=f+Qe,e[1]=f-e[0]+Qe,-4);if(i<cn)return Ye(r,i,e);if(i>=cr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return qr[0]=r,zr[Yr]}(r),f=re(i-((t=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)sn[u]=0|f,f=(f-sn[u])*ze;for(sn[2]=f,a=3;sn[a-1]===qe;)a-=1;return o=Ge(sn,ln,t,a),r<0?(e[0]=-ln[0],e[1]=-ln[1],-o):(e[0]=ln[0],e[1]=ln[1],o)}var vn=1072243195,yn=1045430272,gn=[0,0];function dn(r){var e;if(e=Vr(r),(e&=fr)<=vn)return e<yn?r:Mr(r,0);if(e>=cr)return NaN;switch(3&pn(r,gn)){case 0:return Mr(gn[0],gn[1]);case 1:return $r(gn[0],gn[1]);case 2:return-Mr(gn[0],gn[1]);default:return-$r(gn[0],gn[1])}}var hn=3.141592653589793,wn=2.5066282746310007;function bn(r){return ir(r/2)}function mn(r){return bn(r>0?r-1:r+1)}var Nn=Math.sqrt,An=!0===Ir?0:1,_n=new br(1),En=new yr(_n.buffer);function Sn(r,e){return _n[0]=r,En[An]=e>>>0,_n[0]}function Un(r){return 0|r}var jn=1072693247,kn=1e300,xn=1e-300,In=!0===Ir?1:0,Fn=new br(1),On=new yr(Fn.buffer);function Tn(r,e){return Fn[0]=r,On[In]=e>>>0,Fn[0]}var Vn=1048575,$n=1048576,Gn=1072693248,Pn=536870912,Hn=524288,Wn=20,Cn=9007199254740992,Ln=.9617966939259756,Mn=.9617967009544373,Rn=-7.028461650952758e-9,Zn=[1,1.5],Xn=[0,.5849624872207642],Yn=[0,1.350039202129749e-8],qn=1.4426950408889634,zn=1.4426950216293335,Bn=1.9259629911266175e-8,Dn=.6931471805599453,Jn=1048576,Kn=1071644672,Qn=20,rt=.6931471824645996,et=-1.904654299957768e-9,nt=1072693247,tt=1105199104,it=1139802112,at=1083179008,ut=1072693248,ot=1083231232,ft=3230714880,ct=31,st=1e300,lt=1e-300,pt=8008566259537294e-32,vt=[0,0],yt=[0,0];function gt(r,e){var n,t,i,a,u,o,f,c,s,l,p,v,y,g;if(J(r)||J(e))return NaN;if(ge.assign(e,vt,1,0),u=vt[0],0===vt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Nn(r);if(-.5===e)return 1/Nn(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(ae(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ur(r)<1==(e===er)?0:er}(r,e)}if(ge.assign(r,vt,1,0),a=vt[0],0===vt[1]){if(0===a)return function(r,e){return e===ar?er:e===er?0:e>0?mn(e)?r:0:mn(e)?he(er,r):er}(r,e);if(1===r)return 1;if(-1===r&&mn(e))return-1;if(ae(r))return r===ar?gt(-0,-e):e<0?0:er}if(r<0&&!1===ir(e))return(r-r)/(r-r);if(i=ur(r),n=a&fr|0,t=u&fr|0,f=u>>>ct|0,o=(o=a>>>ct|0)&&mn(e)?-1:1,t>tt){if(t>it)return function(r,e){return(Vr(r)&fr)<=jn?e<0?kn*kn:xn*xn:e>0?kn*kn:xn*xn}(r,e);if(n<nt)return 1===f?o*st*st:o*lt*lt;if(n>ut)return 0===f?o*st*st:o*lt*lt;p=function(r,e){var n,t,i,a,u,o,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(o=i*Bn-a*qn)-((t=Sn(t=(u=zn*i)+o,0))-u),r[0]=t,r[1]=n,r}(yt,i)}else p=function(r,e,n){var t,i,a,u,o,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,n<$n&&(m-=53,n=Vr(e*=Cn)),m+=(n>>Wn)-ee|0,n=(N=n&Vn|0)|Gn|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=$n),u=Sn(i=(w=(e=Tn(e,n))-(c=Zn[A]))*(b=1/(e+c)),0),t=(n>>1|Pn)+Hn,f=Tn(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Sn(f=3+(a=u*u)+(h+=(o=b*(w-u*f-u*(e-(f-c))))*(u+i)),0),l=Sn(l=(w=u*f)+(b=o*f+(h-(f-3-a))*i),0),p=Mn*l,g=(v=Rn*l+(b-(l-w))*Ln+Yn[A])-((y=Sn(y=p+v+(s=Xn[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(yt,i,n);if(v=(l=(e-(c=Sn(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ge.assign(v,vt,1,0),y=Un(vt[0]),g=Un(vt[1]),y>=at){if(0!=(y-at|g))return o*st*st;if(l+pt>v-s)return o*st*st}else if((y&fr)>=ot){if(0!=(y-ft|g))return o*lt*lt;if(l<=v-s)return o*lt*lt}return v=function(r,e,n){var t,i,a,u,o,f,c,s,l,p;return l=((s=r&fr|0)>>Qn)-ee|0,c=0,s>Kn&&(i=Tn(0,((c=r+(Jn>>l+1)>>>0)&~(Xr>>(l=((c&fr)>>Qn)-ee|0)))>>>0),c=(c&Xr|Jn)>>Qn-l>>>0,r<0&&(c=-c),e-=i),r=Un(r=Vr(f=1-((f=(a=(i=Sn(i=n+e,0))*rt)+(u=(n-(i-e))*Dn+i*et))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=u-(f-a))+f*o)-f))),(r+=c<<Qn>>>0)>>Qn<=0?Se(f,c):Tn(f,r)}(y,s,l),o*v}var dt=Math.ceil;function ht(r){return r<0?dt(r):tr(r)}var wt=.6931471803691238,bt=1.9082149292705877e-10,mt=1.4426950408889634,Nt=709.782712893384,At=-745.1332191019411,_t=1/(1<<28),Et=-_t;function St(r){var e;return J(r)||r===er?r:r===ar?0:r>Nt?er:r<At?0:r>Et&&r<_t?1+r:function(r,e,n){var t,i,a,u;return Se(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=ht(r<0?mt*r-.5:mt*r+.5))*wt,e*bt,e)}var Ut=143.01608;function jt(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=St(r),n=r>Ut?(t=gt(r,.5*r-.25))*(t/n):gt(r,r-.5)/n,wn*n*e}var kt=.5772156649015329;function xt(r,e){return e/((1+kt*r)*r)}function It(r){var e,n,t,i;if(ir(r)&&r<0||r===ar||J(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===ar}(r)?ar:er;if(r>171.61447887182297)return er;if(r<-170.5674972726612)return 0;if((n=ur(r))>33)return r>=0?jt(r):(e=0==(1&(t=tr(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*dn(hn*i),e*hn/(ur(i)*jt(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return xt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return xt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var Ft=11102230246251565e-32,Ot=1e-13,Tt=1e-12,Vt=1e4,$t=Ot;function Gt(r){var e,n;return e=ur(r-(n=nr(r))),n<=0&&e<$t}var Pt=Ot;function Ht(r){return ur(r-nr(r))<Pt}var Wt=Ft,Ct=Ot,Lt=Vt;function Mt(r,e,n,t,i){var a,u,o,f,c,s,l,p,v,y;if(a=0,ur(e)>ur(r)&&(o=e,e=r,r=o),Gt(e)&&ur(e)<ur(r)&&(o=e,e=r,r=o,a=1),(ur(r)>ur(n)+1||a)&&ur(n-r)>2&&ur(r)>2)return function(r,e,n,t,i){var a,u,o,f,c,s,l,p,v;if(i=0,f=0,p=r-(c=nr(n<0&&r<=n||n>=0&&r>=n?r-n:r)),ur(c)>Lt)return{value:NaN,error:i=1};if(c<0)for(a=0,i+=(s=Mt(p,e,n,t,f)).error,i+=(l=Mt(p-1,e,n,t,f=s.error)).error,p-=1,u=s.value,o=l.value,v=1;v<-c;v++)a=u,o=-((2*p-n-p*t+e*t)*(u=o)+p*(t-1)*a)/(n-p),p-=1;else for(a=0,i+=(s=Mt(p,e,n,t,f)).error,i+=(l=Mt(p+1,e,n,t,f=s.error)).error,p+=1,u=s.value,o=l.value,v=1;v<c;v++)a=u,o=-((2*p-n-p*t+e*t)*(u=o)+(n-p)*a)/(p*(t-1)),p+=1;return{value:o,error:i}}(r,e,n,t,i);y=0,u=0,o=r,f=e,c=n,p=1,v=1,s=0;do{if(ur(c)<Ct)return{value:er,error:i=1};if(p+=v*=(o+s)*(f+s)*t/((c+s)*(l=s+1)),(s=ur(v))>u&&(u=s),s=l,(y+=1)>Lt)return{value:p,error:i=1}}while(0===p||ur(v/p)>Wt);return{value:p,error:i=Wt*u/ur(p)+Wt*y}}function Rt(r,e){return J(r)||J(e)?NaN:r===er||e===er?er:r===e&&0===r?function(r){return 0===r&&1/r===er}(r)?r:e:r>e?r:e}var Zt=.6931471803691238,Xt=1.9082149292705877e-10,Yt=0x40000000000000,qt=.3333333333333333,zt=1048575,Bt=2146435072,Dt=1048576,Jt=1072693248;function Kt(r){var e,n,t,i,a,u,o,f,c,s,l,p;return 0===r?ar:J(r)||r<0?NaN:(a=0,(n=Vr(r))<Dt&&(a-=54,n=Vr(r*=Yt)),n>=Bt?r+r:(a+=(n>>20)-ee|0,a+=(f=614244+(n&=zt)&1048576|0)>>20|0,o=(r=Tn(r,n|f^Jt))-1,(zt&2+n)<3?0===o?0===a?0:a*Zt+a*Xt:(u=o*o*(.5-qt*o),0===a?o-u:a*Zt-(u-a*Xt-o)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=t+i,(f|=c)>0?(e=.5*o*o,0===a?o-(e-s*(e+u)):a*Zt-(e-(s*(e+u)+a*Xt)-o)):0===a?o-s*(o-u):a*Zt-(s*(o-u)-a*Xt-o))))}var Qt=[0,0],ri=2147483647,ei=1072243195,ni=1044381696,ti=2146435072;function ii(r){var e;if(e=Vr(r),(e&=ri)<=ei)return e<ni?1:$r(r,0);if(e>=ti)return NaN;switch(3&pn(r,Qt)){case 0:return $r(Qt[0],Qt[1]);case 1:return-Mr(Qt[0],Qt[1]);case 2:return-$r(Qt[0],Qt[1]);default:return Mr(Qt[0],Qt[1])}}var ai=.07721566490153287,ui=.3224670334241136,oi=1,fi=-.07721566490153287,ci=.48383612272381005,si=-.1475877229945939,li=.06462494023913339,pi=-.07721566490153287,vi=1,yi=.4189385332046727,gi=1.4616321449683622,di=4503599627370496,hi=0x400000000000000,wi=8470329472543003e-37,bi=1.4616321449683622,mi=-.12148629053584961,Ni=-3638676997039505e-33;function Ai(r){var e,n,t,i,a,u,o,f,c,s,l,p,v;if(J(r)||ae(r))return r;if(0===r)return er;if(r<0?(e=!0,r=-r):e=!1,r<wi)return-Kt(r);if(e){if(r>=di)return er;if(c=function(r){var e,n;return J(r)||ae(r)?NaN:0===(e=ur(n=r%2))||1===e?he(0,n):e<.25?dn(hn*n):e<.75?he(ii(hn*(e=.5-e)),n):e<1.25?(n=he(1,n)-n,dn(hn*n)):e<1.75?-he(ii(hn*(e-=1.5)),n):(n-=he(2,n),dn(hn*n))}(r),0===c)return er;n=Kt(hn/ur(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Kt(r),r>=gi-1+.27?(l=1-r,t=0):r>=gi-1-.27?(l=r-(bi-1),t=1):(l=r,t=2)):(v=0,r>=gi+.27?(l=2-r,t=0):r>=gi-.27?(l=r-bi,t=1):(l=r-1,t=2)),t){case 0:u=ai+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(ui+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(o=l*u+a)-.5*l;break;case 1:u=ci+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=si+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=li+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=mi+(o=p*u-(Ni-s*(a+l*i)));break;case 2:u=l*(pi+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=vi+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+u/a}else if(r<8)switch(o=(l=r-(t=ht(r)))*(fi+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=oi+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+o/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Kt(p*=l+2)}else r<hi?(c=Kt(r),s=yi+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Kt(r)-1);return e&&(v=n-v),v}function _i(r){var e;return J(r)?r:r>0?1:r===(e=tr(r))?0:(e/=2)===tr(e)?1:-1}var Ei=.7853981633974483,Si=3061616997868383e-32,Ui=.3333333333333341,ji=2147483647;function ki(r,e,n){var t,i,a,u,o,f,c,s,l;return(i=(t=Vr(r))&ji|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=Ei-r)+(s=Si-e),e=0),u=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),u=e+l*((o=l*r)*(u+c)+e),s=r+(u+=Ui*o),i>=1072010280?(1-(t>>30&2))*((c=n)-2*(r-(s*s/(s+c)-u))):1===n?s:(c=u-((l=Sn(s,0))-r),(f=Sn(a=-1/s,0))+a*((o=1+f*l)+f*c))}var xi=[0,0],Ii=2147483647,Fi=1072243195,Oi=2146435072,Ti=1044381696,Vi=1.4616321446374059,$i=3.309564688275257e-10,Gi=9.016312093258695e-20,Pi=.9955816268920898,Hi=10;function Wi(r){var e,n;if(J(r)||0===r)return NaN;if(r<=-1){if((e=(r=1-r)-tr(r))>.5&&(e-=1),0===e)return NaN;n=hn/function(r){var e,n;return e=Vr(r),(e&=Ii)<=Fi?e<Ti?r:ki(r,0,1):e>=Oi?NaN:(n=pn(r,xi),ki(xi[0],xi[1],1-((1&n)<<1)))}(hn*e)}else n=0;if(r>=Hi)return n+=function(r){var e;return Kt(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(r),n;for(;r>2;)n+=1/(r-=1);for(;r<1;)n-=1/r,r+=1;return n+=function(r){var e,n;return e=r-Vi,e-=$i,e-=Gi,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),e*Pi+e*n}(r),n}var Ci=Ft,Li=Ot,Mi=Tt,Ri=Vt;function Zi(r,e,n,t,i){var a,u,o,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_,E,S,U,j,k;if(a=Gt(r),u=Gt(e),l=0,s=0,k=1-t,t<-.5&&!a&&!u)return e>r?(E=Mt(r,n-e,n,-t/k,l),p=gt(k,-r)*E.value):(E=Mt(n-r,e,n,-t/k,l),p=gt(k,-e)*E.value),{value:p,error:E.error};if(g=nr(U=n-r-e),t>.9&&!a&&!u){if(!1===Ht(U)){if((E=Mt(r,e,n,t,l)).error<Mi)return E;o=(N=Mt(r,e,1-U,k,l=E.error)).value,l=N.error,c=1,S=Ai(U),c*=_i(U),S-=Ai(n-r),c*=_i(n-r),S-=Ai(n-e),o*=(c*=_i(n-e))*St(S),s=(A=Mt(n-r,n-e,U+1,k,s)).error,f=gt(k,U)*A.value,c=1,S=Ai(-U),c*=_i(-U),S-=Ai(r),c*=_i(r),S-=Ai(e),E=o+(f*=(c*=_i(e))*St(S)),l+=s+Ci*Rt(ur(o),ur(f))/E,E*=It(n)}else{g>=0?(j=U,d=U,h=0,v=g):(j=-U,d=0,h=U,v=-g),y=Kt(k),E=Wi(1)+Wi(1+j)-Wi(r+d)-Wi(e+d)-y,E/=It(j+1),m=(r+d)*(e+d)*k/It(j+2),_=1;do{if(E+=N=m*(A=Wi(1+_)+Wi(1+_+j)-Wi(r+_+d)-Wi(e+_+d)-y),m*=k*(r+_+d)/(_+1),m*=(e+_+d)/(_+1+j),(_+=1)>Ri)return{value:NaN,error:1}}while(0===E||ur(N/E)>Li);if(0===g)return{value:E*=It(n)/(It(r)*It(e)),error:l};if(w=1,1!==v)for(_=0,m=1,b=1;b<v;b++)m*=k*(r+_+h)*(e+_+h)/(A=1-j+_),w+=m/=_+=1;m=It(n),w*=It(j)*m/(It(r+d)*It(e+d)),E*=m/(It(r+h)*It(e+h)),v%2!=0&&(E=-E),N=gt(k,g),E=g>0?E*N:w*N,E+=w}return{value:E,error:l}}return E=Mt(r,e,n,t,l)}var Xi=Tt;return function r(e,n,t,i){var a,u,o,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_,E,S,U,j,k;if(l=0,S=1-i,U=t-e-n,p=ur(i),h=nr(e),w=nr(n),g=nr(U),d=nr(t),f=Gt(e),o=Gt(n),u=Gt(t),c=Ht(U),b=ur(n-e),rr(e)||rr(n)||rr(t)||rr(i))return NaN;if(0===i)return 1;if((0===e||0===n)&&0!==t)return 1;if(U<=-1&&(c||!(S<0))&&!f&&!o)return gt(S,U)*r(t-e,t-n,t,i);if(U<=0&&1===i&&!f&&!o)return er;if(p<1||-1===i){if(n===t)return gt(S,-e);if(e===t)return gt(S,-n)}if(u)return f&&h>d||o&&w>d?(j=Zi(e,n,t,i)).value:er;if(f||o)return(j=Zi(e,n,t,i)).value;if(i<-2&&!Ht(b))return _=r(e,1-t+e,1-n+e,1/i),N=r(n,1-t+n,1-e+n,1/i),_*=gt(-i,-e),N*=gt(-i,-n),(S=(b=It(t))*It(n-e)/(It(n)*It(t-e)))*_+(j=b*It(e-n)/(It(e)*It(t-n)))*N;if(i<-1)return ur(e)<ur(n)?gt(S,-e)*r(e,t-n,t,i/(i-1)):gt(S,-n)*r(n,t-e,t,i/(i-1));if(p>1)return er;if(A=t-n,a=Gt(_=t-e)||Gt(A),1===p){if(i>0)return a?U>=0?(j=Mt(t-e,t-n,t,i,l),gt(S,U)*j.value):er:U<=0?er:It(t)*It(U)/(It(_)*It(A));if(U<=-1)return er}if(U<0){if((j=Zi(e,n,t,i)).error<Xi)return j.value;for(j=j.value,l=0,v=r(e,n,E=t+(s=2-g),i),y=r(e,n,E+1,i),N=e+n+1,k=0;k<s;k++)m=(A=E-1)-(2*E-N)*i,j=((m*=E)*v+(E-e)*(E-n)*i*y)/(E*A*S),E=A,y=v,v=j;return j}return a?(j=Mt(t-e,t-n,t,i,l),gt(S,U)*j.value):(j=Zi(e,n,t,i)).value}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).hyp2f1=e();
//# sourceMappingURL=browser.js.map
