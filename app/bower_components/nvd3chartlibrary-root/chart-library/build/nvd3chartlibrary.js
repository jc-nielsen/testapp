!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var a=n[o]={exports:{}};t[o][0].call(a.exports,function(n){var r=t[o][1][n];return s(r?r:n)},a,a.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(t,n,r){(function(n){"use strict";function define(t,n,e){t[n]||Object[r](t,n,{writable:!0,configurable:!0,value:e})}if(t(295),t(296),t(2),n._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");n._babelPolyfill=!0;var r="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&define(Array,t,Function.call.bind([][t]))})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2,295:295,296:296}],2:[function(t,n,r){t(119),n.exports=t(23).RegExp.escape},{119:119,23:23}],3:[function(t,n,r){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],4:[function(t,n,r){var e=t(18);n.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},{18:18}],5:[function(t,n,r){var e=t(117)("unscopables"),i=Array.prototype;void 0==i[e]&&t(40)(i,e,{}),n.exports=function(t){i[e][t]=!0}},{117:117,40:40}],6:[function(t,n,r){n.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},{}],7:[function(t,n,r){var e=t(49);n.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},{49:49}],8:[function(t,n,r){"use strict";var e=t(109),i=t(105),o=t(108);n.exports=[].copyWithin||function copyWithin(t,n){var r=e(this),u=o(r.length),c=i(t,u),f=i(n,u),a=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===a?u:i(a,u))-f,u-c),l=1;for(f<c&&c<f+s&&(l=-1,f+=s-1,c+=s-1);s-- >0;)f in r?r[c]=r[f]:delete r[c],c+=l,f+=l;return r}},{105:105,108:108,109:109}],9:[function(t,n,r){"use strict";var e=t(109),i=t(105),o=t(108);n.exports=function fill(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),f=u>2?arguments[2]:void 0,a=void 0===f?r:i(f,r);a>c;)n[c++]=t;return n}},{105:105,108:108,109:109}],10:[function(t,n,r){var e=t(37);n.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},{37:37}],11:[function(t,n,r){var e=t(107),i=t(108),o=t(105);n.exports=function(t){return function(n,r,u){var c,f=e(n),a=i(f.length),s=o(u,a);if(t&&r!=r){for(;a>s;)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},{105:105,107:107,108:108}],12:[function(t,n,r){var e=t(25),i=t(45),o=t(109),u=t(108),c=t(15);n.exports=function(t,n){var r=1==t,f=2==t,a=3==t,s=4==t,l=6==t,h=5==t||l,v=n||c;return function(n,c,p){for(var d,y,g=o(n),b=i(g),x=e(c,p,3),m=u(b.length),w=0,S=r?v(n,m):f?v(n,0):void 0;m>w;w++)if((h||w in b)&&(d=b[w],y=x(d,w,g),t))if(r)S[w]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:S.push(d)}else if(s)return!1;return l?-1:a||s?s:S}}},{108:108,109:109,15:15,25:25,45:45}],13:[function(t,n,r){var e=t(3),i=t(109),o=t(45),u=t(108);n.exports=function(t,n,r,c,f){e(n);var a=i(t),s=o(a),l=u(a.length),h=f?l-1:0,v=f?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=v;break}if(h+=v,f?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;f?h>=0:l>h;h+=v)h in s&&(c=n(c,s[h],h,a));return c}},{108:108,109:109,3:3,45:45}],14:[function(t,n,r){var e=t(49),i=t(47),o=t(117)("species");n.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&(n=n[o],null===n&&(n=void 0))),void 0===n?Array:n}},{117:117,47:47,49:49}],15:[function(t,n,r){var e=t(14);n.exports=function(t,n){return new(e(t))(n)}},{14:14}],16:[function(t,n,r){"use strict";var e=t(3),i=t(49),o=t(44),u=[].slice,c={},f=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};n.exports=Function.bind||function bind(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?f(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},{3:3,44:44,49:49}],17:[function(t,n,r){var e=t(18),i=t(117)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};n.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},{117:117,18:18}],18:[function(t,n,r){var e={}.toString;n.exports=function(t){return e.call(t).slice(8,-1)}},{}],19:[function(t,n,r){"use strict";var e=t(67).f,i=t(66),o=t(86),u=t(25),c=t(6),f=t(27),a=t(37),s=t(53),l=t(55),h=t(91),v=t(28),p=t(62).fastKey,d=v?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};n.exports={getConstructor:function(t,n,r,s){var l=t(function(t,e){c(t,l,n,"_i"),t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[s],t)});return o(l.prototype,{clear:function clear(){for(var t=this,n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=this,r=y(n,t);if(r){var e=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=e),e&&(e.p=i),n._f==r&&(n._f=e),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function forEach(t){c(this,l,"forEach");for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function has(t){return!!y(this,t)}}),v&&e(l.prototype,"size",{get:function(){return f(this[d])}}),l},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){s(t,n,function(t,n){this._t=t,this._k=n,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?l(0,r.k):"values"==n?l(0,r.v):l(0,[r.k,r.v]):(t._t=void 0,l(1))},r?"entries":"values",!r,!0),h(n)}}},{25:25,27:27,28:28,37:37,53:53,55:55,6:6,62:62,66:66,67:67,86:86,91:91}],20:[function(t,n,r){var e=t(17),i=t(10);n.exports=function(t){return function toJSON(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},{10:10,17:17}],21:[function(t,n,r){"use strict";var e=t(86),i=t(62).getWeak,o=t(7),u=t(49),c=t(6),f=t(37),a=t(12),s=t(39),l=a(5),h=a(6),v=0,p=function(t){return t._l||(t._l=new d)},d=function(){this.a=[]},y=function(t,n){return l(t.a,function(t){return t[0]===n})};d.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,r,o){var a=t(function(t,e){c(t,a,n,"_i"),t._i=v++,t._l=void 0,void 0!=e&&f(e,r,t[o],t)});return e(a.prototype,{delete:function(t){if(!u(t))return!1;var n=i(t);return n===!0?p(this).delete(t):n&&s(n,this._i)&&delete n[this._i]},has:function has(t){if(!u(t))return!1;var n=i(t);return n===!0?p(this).has(t):n&&s(n,this._i)}}),a},def:function(t,n,r){var e=i(o(n),!0);return e===!0?p(t).set(n,r):e[t._i]=r,t},ufstore:p}},{12:12,37:37,39:39,49:49,6:6,62:62,7:7,86:86}],22:[function(t,n,r){"use strict";var e=t(38),i=t(32),o=t(87),u=t(86),c=t(62),f=t(37),a=t(6),s=t(49),l=t(34),h=t(54),v=t(92),p=t(43);n.exports=function(t,n,r,d,y,g){var b=e[t],x=b,m=y?"set":"add",w=x&&x.prototype,S={},_=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof x&&(g||w.forEach&&!l(function(){(new x).entries().next()}))){var E=new x,O=E[m](g?{}:-0,1)!=E,F=l(function(){E.has(1)}),P=h(function(t){new x(t)}),M=!g&&l(function(){for(var t=new x,n=5;n--;)t[m](n,n);return!t.has(-0)});P||(x=n(function(n,r){a(n,x,t);var e=p(new b,n,x);return void 0!=r&&f(r,y,e[m],e),e}),x.prototype=w,w.constructor=x),(F||M)&&(_("delete"),_("has"),y&&_("get")),(M||O)&&_(m),g&&w.clear&&delete w.clear}else x=d.getConstructor(n,t,y,m),u(x.prototype,r),c.NEED=!0;return v(x,t),S[t]=x,i(i.G+i.W+i.F*(x!=b),S),g||d.setStrong(x,t,y),x}},{32:32,34:34,37:37,38:38,43:43,49:49,54:54,6:6,62:62,86:86,87:87,92:92}],23:[function(t,n,r){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},{}],24:[function(t,n,r){"use strict";var e=t(67),i=t(85);n.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},{67:67,85:85}],25:[function(t,n,r){var e=t(3);n.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},{3:3}],26:[function(t,n,r){"use strict";var e=t(7),i=t(110),o="number";n.exports=function(t){if("string"!==t&&t!==o&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),t!=o)}},{110:110,7:7}],27:[function(t,n,r){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],28:[function(t,n,r){n.exports=!t(34)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{34:34}],29:[function(t,n,r){var e=t(49),i=t(38).document,o=e(i)&&e(i.createElement);n.exports=function(t){return o?i.createElement(t):{}}},{38:38,49:49}],30:[function(t,n,r){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],31:[function(t,n,r){var e=t(76),i=t(73),o=t(77);n.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),f=o.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},{73:73,76:76,77:77}],32:[function(t,n,r){var e=t(38),i=t(23),o=t(40),u=t(87),c=t(25),f="prototype",a=function(t,n,r){var s,l,h,v,p=t&a.F,d=t&a.G,y=t&a.S,g=t&a.P,b=t&a.B,x=d?e:y?e[n]||(e[n]={}):(e[n]||{})[f],m=d?i:i[n]||(i[n]={}),w=m[f]||(m[f]={});d&&(r=n);for(s in r)l=!p&&x&&void 0!==x[s],h=(l?x:r)[s],v=b&&l?c(h,e):g&&"function"==typeof h?c(Function.call,h):h,x&&u(x,s,h,t&a.U),m[s]!=h&&o(m,s,v),g&&w[s]!=h&&(w[s]=h)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},{23:23,25:25,38:38,40:40,87:87}],33:[function(t,n,r){var e=t(117)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},{117:117}],34:[function(t,n,r){n.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],35:[function(t,n,r){"use strict";var e=t(40),i=t(87),o=t(34),u=t(27),c=t(117);n.exports=function(t,n,r){var f=c(t),a=r(u,f,""[t]),s=a[0],l=a[1];o(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,f,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},{117:117,27:27,34:34,40:40,87:87}],36:[function(t,n,r){"use strict";var e=t(7);n.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{7:7}],37:[function(t,n,r){var e=t(25),i=t(51),o=t(46),u=t(7),c=t(108),f=t(118),a={},s={},r=n.exports=function(t,n,r,l,h){var v,p,d,y,g=h?function(){return t}:f(t),b=e(r,l,n?2:1),x=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(v=c(t.length);v>x;x++)if(y=n?b(u(p=t[x])[0],p[1]):b(t[x]),y===a||y===s)return y}else for(d=g.call(t);!(p=d.next()).done;)if(y=i(d,b,p.value,n),y===a||y===s)return y};r.BREAK=a,r.RETURN=s},{108:108,118:118,25:25,46:46,51:51,7:7}],38:[function(t,n,r){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],39:[function(t,n,r){var e={}.hasOwnProperty;n.exports=function(t,n){return e.call(t,n)}},{}],40:[function(t,n,r){var e=t(67),i=t(85);n.exports=t(28)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},{28:28,67:67,85:85}],41:[function(t,n,r){n.exports=t(38).document&&document.documentElement},{38:38}],42:[function(t,n,r){n.exports=!t(28)&&!t(34)(function(){return 7!=Object.defineProperty(t(29)("div"),"a",{get:function(){return 7}}).a})},{28:28,29:29,34:34}],43:[function(t,n,r){var e=t(49),i=t(90).set;n.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},{49:49,90:90}],44:[function(t,n,r){n.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},{}],45:[function(t,n,r){var e=t(18);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},{18:18}],46:[function(t,n,r){var e=t(56),i=t(117)("iterator"),o=Array.prototype;n.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},{117:117,56:56}],47:[function(t,n,r){var e=t(18);n.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},{18:18}],48:[function(t,n,r){var e=t(49),i=Math.floor;n.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},{49:49}],49:[function(t,n,r){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],50:[function(t,n,r){var e=t(49),i=t(18),o=t(117)("match");n.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},{117:117,18:18,49:49}],51:[function(t,n,r){var e=t(7);n.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},{7:7}],52:[function(t,n,r){"use strict";var e=t(66),i=t(85),o=t(92),u={};t(40)(u,t(117)("iterator"),function(){return this}),n.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},{117:117,40:40,66:66,85:85,92:92}],53:[function(t,n,r){"use strict";var e=t(58),i=t(32),o=t(87),u=t(40),c=t(39),f=t(56),a=t(52),s=t(92),l=t(74),h=t(117)("iterator"),v=!([].keys&&"next"in[].keys()),p="@@iterator",d="keys",y="values",g=function(){return this};n.exports=function(t,n,r,b,x,m,w){a(r,n,b);var S,_,E,O=function(t){if(!v&&t in A)return A[t];switch(t){case d:return function keys(){return new r(this,t)};case y:return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},F=n+" Iterator",P=x==y,M=!1,A=t.prototype,I=A[h]||A[p]||x&&A[x],j=I||O(x),N=x?P?O("entries"):j:void 0,k="Array"==n?A.entries||I:I;if(k&&(E=l(k.call(new t)),E!==Object.prototype&&(s(E,F,!0),e||c(E,h)||u(E,h,g))),P&&I&&I.name!==y&&(M=!0,j=function values(){return I.call(this)}),e&&!w||!v&&!M&&A[h]||u(A,h,j),f[n]=j,f[F]=g,x)if(S={values:P?j:O(y),keys:m?j:O(d),entries:N},w)for(_ in S)_ in A||o(A,_,S[_]);else i(i.P+i.F*(v||M),n,S);return S}},{117:117,32:32,39:39,40:40,52:52,56:56,58:58,74:74,87:87,92:92}],54:[function(t,n,r){var e=t(117)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}n.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},{117:117}],55:[function(t,n,r){n.exports=function(t,n){return{value:n,done:!!t}}},{}],56:[function(t,n,r){n.exports={}},{}],57:[function(t,n,r){var e=t(76),i=t(107);n.exports=function(t,n){for(var r,o=i(t),u=e(o),c=u.length,f=0;c>f;)if(o[r=u[f++]]===n)return r}},{107:107,76:76}],58:[function(t,n,r){n.exports=!1},{}],59:[function(t,n,r){var e=Math.expm1;n.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||e(-2e-17)!=-2e-17?function expm1(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},{}],60:[function(t,n,r){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},{}],61:[function(t,n,r){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},{}],62:[function(t,n,r){var e=t(114)("meta"),i=t(49),o=t(39),u=t(67).f,c=0,f=Object.isExtensible||function(){return!0},a=!t(34)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},h=function(t,n){if(!o(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},v=function(t){return a&&p.NEED&&f(t)&&!o(t,e)&&s(t),t},p=n.exports={KEY:e,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},{114:114,34:34,39:39,49:49,67:67}],63:[function(t,n,r){var e=t(149),i=t(32),o=t(94)("metadata"),u=o.store||(o.store=new(t(255))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o},f=function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},a=function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},s=function(t,n,r,e){c(r,e,!0).set(t,n)},l=function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},h=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},v=function(t){i(i.S,"Reflect",t)};n.exports={store:u,map:c,has:f,get:a,set:s,keys:l,key:h,exp:v}},{149:149,255:255,32:32,94:94}],64:[function(t,n,r){var e=t(38),i=t(104).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,f="process"==t(18)(u);n.exports=function(){var t,n,r,a=function(){var e,i;for(f&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(f)r=function(){u.nextTick(a)};else if(o){var s=!0,l=document.createTextNode("");new o(a).observe(l,{characterData:!0}),r=function(){l.data=s=!s}}else if(c&&c.resolve){var h=c.resolve();r=function(){h.then(a)}}else r=function(){i.call(e,a)};return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},{104:104,18:18,38:38}],65:[function(t,n,r){"use strict";var e=t(76),i=t(73),o=t(77),u=t(109),c=t(45),f=Object.assign;n.exports=!f||t(34)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=f({},t)[r]||Object.keys(f({},n)).join("")!=e})?function assign(t,n){for(var r=u(t),f=arguments.length,a=1,s=i.f,l=o.f;f>a;)for(var h,v=c(arguments[a++]),p=s?e(v).concat(s(v)):e(v),d=p.length,y=0;d>y;)l.call(v,h=p[y++])&&(r[h]=v[h]);return r}:f},{109:109,34:34,45:45,73:73,76:76,77:77}],66:[function(t,n,r){var e=t(7),i=t(68),o=t(30),u=t(93)("IE_PROTO"),c=function(){},f="prototype",a=function(){var n,r=t(29)("iframe"),e=o.length,i="<",u=">";for(r.style.display="none",t(41).appendChild(r),r.src="javascript:",n=r.contentWindow.document,n.open(),n.write(i+"script"+u+"document.F=Object"+i+"/script"+u),n.close(),a=n.F;e--;)delete a[f][o[e]];return a()};n.exports=Object.create||function create(t,n){var r;return null!==t?(c[f]=e(t),r=new c,c[f]=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},{29:29,30:30,41:41,68:68,7:7,93:93}],67:[function(t,n,r){var e=t(7),i=t(42),o=t(110),u=Object.defineProperty;r.f=t(28)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},{110:110,28:28,42:42,7:7}],68:[function(t,n,r){var e=t(67),i=t(7),o=t(76);n.exports=t(28)?Object.defineProperties:function defineProperties(t,n){i(t);for(var r,u=o(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},{28:28,67:67,7:7,76:76}],69:[function(t,n,r){n.exports=t(58)||!t(34)(function(){var n=Math.random();__defineSetter__.call(null,n,function(){}),delete t(38)[n]})},{34:34,38:38,58:58}],70:[function(t,n,r){var e=t(77),i=t(85),o=t(107),u=t(110),c=t(39),f=t(42),a=Object.getOwnPropertyDescriptor;r.f=t(28)?a:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},{107:107,110:110,28:28,39:39,42:42,77:77,85:85}],71:[function(t,n,r){var e=t(107),i=t(72).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};n.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},{107:107,72:72}],72:[function(t,n,r){var e=t(75),i=t(30).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},{30:30,75:75}],73:[function(t,n,r){r.f=Object.getOwnPropertySymbols},{}],74:[function(t,n,r){var e=t(39),i=t(109),o=t(93)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},{109:109,39:39,93:93}],75:[function(t,n,r){var e=t(39),i=t(107),o=t(11)(!1),u=t(93)("IE_PROTO");n.exports=function(t,n){var r,c=i(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~o(a,r)||a.push(r));return a}},{107:107,11:11,39:39,93:93}],76:[function(t,n,r){var e=t(75),i=t(30);n.exports=Object.keys||function keys(t){return e(t,i)}},{30:30,75:75}],77:[function(t,n,r){r.f={}.propertyIsEnumerable},{}],78:[function(t,n,r){var e=t(32),i=t(23),o=t(34);n.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},{23:23,32:32,34:34}],79:[function(t,n,r){var e=t(76),i=t(107),o=t(77).f;n.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),f=c.length,a=0,s=[];f>a;)o.call(u,r=c[a++])&&s.push(t?[r,u[r]]:u[r]);return s}}},{107:107,76:76,77:77}],80:[function(t,n,r){var e=t(72),i=t(73),o=t(7),u=t(38).Reflect;n.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},{38:38,7:7,72:72,73:73}],81:[function(t,n,r){var e=t(38).parseFloat,i=t(102).trim;n.exports=1/e(t(103)+"-0")!==-(1/0)?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},{102:102,103:103,38:38}],82:[function(t,n,r){var e=t(38).parseInt,i=t(102).trim,o=t(103),u=/^[\-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},{102:102,103:103,38:38}],83:[function(t,n,r){"use strict";var e=t(84),i=t(44),o=t(3);n.exports=function(){for(var t=o(this),n=arguments.length,r=Array(n),u=0,c=e._,f=!1;n>u;)(r[u]=arguments[u++])===c&&(f=!0);return function(){var e,o=this,u=arguments.length,a=0,s=0;if(!f&&!u)return i(t,r,o);if(e=r.slice(),f)for(;n>a;a++)e[a]===c&&(e[a]=arguments[s++]);for(;u>s;)e.push(arguments[s++]);return i(t,e,o)}}},{3:3,44:44,84:84}],84:[function(t,n,r){n.exports=t(38)},{38:38}],85:[function(t,n,r){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],86:[function(t,n,r){var e=t(87);n.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},{87:87}],87:[function(t,n,r){var e=t(38),i=t(40),o=t(39),u=t(114)("src"),c="toString",f=Function[c],a=(""+f).split(c);t(23).inspectSource=function(t){return f.call(t)},(n.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,c,function toString(){return"function"==typeof this&&this[u]||f.call(this)})},{114:114,23:23,38:38,39:39,40:40}],88:[function(t,n,r){n.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},{}],89:[function(t,n,r){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},{}],90:[function(t,n,r){var e=t(49),i=t(7),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,r,e){try{e=t(25)(Function.call,t(70).f(Object.prototype,"__proto__").set,2),e(n,[]),r=!(n instanceof Array)}catch(t){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:o}},{25:25,49:49,7:7,70:70}],91:[function(t,n,r){"use strict";var e=t(38),i=t(67),o=t(28),u=t(117)("species");n.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},{117:117,28:28,38:38,67:67}],92:[function(t,n,r){var e=t(67).f,i=t(39),o=t(117)("toStringTag");n.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},{117:117,39:39,67:67}],93:[function(t,n,r){var e=t(94)("keys"),i=t(114);n.exports=function(t){return e[t]||(e[t]=i(t))}},{114:114,94:94}],94:[function(t,n,r){var e=t(38),i="__core-js_shared__",o=e[i]||(e[i]={});n.exports=function(t){return o[t]||(o[t]={})}},{38:38}],95:[function(t,n,r){var e=t(7),i=t(3),o=t(117)("species");n.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},{117:117,3:3,7:7}],96:[function(t,n,r){var e=t(34);n.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},{34:34}],97:[function(t,n,r){var e=t(106),i=t(27);n.exports=function(t){return function(n,r){var o,u,c=String(i(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(o=c.charCodeAt(f),o<55296||o>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):o:t?c.slice(f,f+2):(o-55296<<10)+(u-56320)+65536)}}},{106:106,27:27}],98:[function(t,n,r){var e=t(50),i=t(27);n.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},{27:27,50:50}],99:[function(t,n,r){var e=t(32),i=t(34),o=t(27),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};n.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},{27:27,32:32,34:34}],100:[function(t,n,r){var e=t(108),i=t(101),o=t(27);n.exports=function(t,n,r,u){var c=String(o(t)),f=c.length,a=void 0===r?" ":String(r),s=e(n);if(s<=f||""==a)return c;var l=s-f,h=i.call(a,Math.ceil(l/a.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{101:101,108:108,27:27}],101:[function(t,n,r){"use strict";var e=t(106),i=t(27);n.exports=function repeat(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},{106:106,27:27}],102:[function(t,n,r){var e=t(32),i=t(27),o=t(34),u=t(103),c="["+u+"]",f="​",a=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(t,n,r){var i={},c=o(function(){return!!u[t]()||f[t]()!=f}),a=i[t]=c?n(h):u[t];r&&(i[r]=a),e(e.P+e.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(a,"")),2&n&&(t=t.replace(s,"")),t};n.exports=l},{103:103,27:27,32:32,34:34}],103:[function(t,n,r){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},{}],104:[function(t,n,r){var e,i,o,u=t(25),c=t(44),f=t(41),a=t(29),s=t(38),l=s.process,h=s.setImmediate,v=s.clearImmediate,p=s.MessageChannel,d=0,y={},g="onreadystatechange",b=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){b.call(t.data)};h&&v||(h=function setImmediate(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++d]=function(){c("function"==typeof t?t:Function(t),n)},e(d),d},v=function clearImmediate(t){delete y[t]},"process"==t(18)(l)?e=function(t){l.nextTick(u(b,t,1))}:p?(i=new p,o=i.port2,i.port1.onmessage=x,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",x,!1)):e=g in a("script")?function(t){f.appendChild(a("script"))[g]=function(){f.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),n.exports={set:h,clear:v}},{18:18,25:25,29:29,38:38,41:41,44:44}],105:[function(t,n,r){var e=t(106),i=Math.max,o=Math.min;n.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},{106:106}],106:[function(t,n,r){var e=Math.ceil,i=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},{}],107:[function(t,n,r){var e=t(45),i=t(27);n.exports=function(t){return e(i(t))}},{27:27,45:45}],108:[function(t,n,r){var e=t(106),i=Math.min;n.exports=function(t){return t>0?i(e(t),9007199254740991):0}},{106:106}],109:[function(t,n,r){var e=t(27);n.exports=function(t){return Object(e(t))}},{27:27}],110:[function(t,n,r){var e=t(49);n.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},{49:49}],111:[function(t,n,r){"use strict";if(t(28)){var e=t(58),i=t(38),o=t(34),u=t(32),c=t(113),f=t(112),a=t(25),s=t(6),l=t(85),h=t(40),v=t(86),p=t(106),d=t(108),y=t(105),g=t(110),b=t(39),x=t(89),m=t(17),w=t(49),S=t(109),_=t(46),E=t(66),O=t(74),F=t(72).f,P=t(118),M=t(114),A=t(117),I=t(12),j=t(11),N=t(95),k=t(130),R=t(56),T=t(54),L=t(91),C=t(9),U=t(8),G=t(67),D=t(70),W=G.f,B=D.f,V=i.RangeError,z=i.TypeError,K=i.Uint8Array,J="ArrayBuffer",Y="Shared"+J,q="BYTES_PER_ELEMENT",X="prototype",$=Array[X],H=f.ArrayBuffer,Z=f.DataView,Q=I(0),tt=I(2),nt=I(3),rt=I(4),et=I(5),it=I(6),ot=j(!0),ut=j(!1),ct=k.values,ft=k.keys,at=k.entries,st=$.lastIndexOf,lt=$.reduce,ht=$.reduceRight,vt=$.join,pt=$.sort,dt=$.slice,yt=$.toString,gt=$.toLocaleString,bt=A("iterator"),xt=A("toStringTag"),mt=M("typed_constructor"),wt=M("def_constructor"),St=c.CONSTR,_t=c.TYPED,Et=c.VIEW,Ot="Wrong length!",Ft=I(1,function(t,n){return Nt(N(t,t[wt]),n)}),Pt=o(function(){return 1===new K(new Uint16Array([1]).buffer)[0]}),Mt=!!K&&!!K[X].set&&o(function(){new K(1).set({})}),At=function(t,n){if(void 0===t)throw z(Ot);var r=+t,e=d(t);if(n&&!x(r,e))throw V(Ot);return e},It=function(t,n){var r=p(t);if(r<0||r%n)throw V("Wrong offset!");return r},jt=function(t){if(w(t)&&_t in t)return t;throw z(t+" is not a typed array!")},Nt=function(t,n){if(!(w(t)&&mt in t))throw z("It is not a typed array constructor!");return new t(n)},kt=function(t,n){return Rt(N(t,t[wt]),n)},Rt=function(t,n){for(var r=0,e=n.length,i=Nt(t,e);e>r;)i[r]=n[r++];return i},Tt=function(t,n,r){W(t,n,{get:function(){return this._d[r]}})},Lt=function from(t){var n,r,e,i,o,u,c=S(t),f=arguments.length,s=f>1?arguments[1]:void 0,l=void 0!==s,h=P(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&f>2&&(s=a(s,arguments[2],2)),n=0,r=d(c.length),i=Nt(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},Ct=function of(){for(var t=0,n=arguments.length,r=Nt(this,n);n>t;)r[t]=arguments[t++];return r},Ut=!!K&&o(function(){gt.call(new K(1))}),Gt=function toLocaleString(){return gt.apply(Ut?dt.call(jt(this)):jt(this),arguments)},Dt={copyWithin:function copyWithin(t,n){return U.call(jt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function every(t){return rt(jt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function fill(t){return C.apply(jt(this),arguments)},filter:function filter(t){return kt(this,tt(jt(this),t,arguments.length>1?arguments[1]:void 0))},find:function find(t){return et(jt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function findIndex(t){
return it(jt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function forEach(t){Q(jt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function indexOf(t){return ut(jt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function includes(t){return ot(jt(this),t,arguments.length>1?arguments[1]:void 0)},join:function join(t){return vt.apply(jt(this),arguments)},lastIndexOf:function lastIndexOf(t){return st.apply(jt(this),arguments)},map:function map(t){return Ft(jt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function reduce(t){return lt.apply(jt(this),arguments)},reduceRight:function reduceRight(t){return ht.apply(jt(this),arguments)},reverse:function reverse(){for(var t,n=this,r=jt(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return nt(jt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function sort(t){return pt.call(jt(this),t)},subarray:function subarray(t,n){var r=jt(this),e=r.length,i=y(t,e);return new(N(r,r[wt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:y(n,e))-i))}},Wt=function slice(t,n){return kt(this,dt.call(jt(this),t,n))},Bt=function set(t){jt(this);var n=It(arguments[1],1),r=this.length,e=S(t),i=d(e.length),o=0;if(i+n>r)throw V(Ot);for(;o<i;)this[n+o]=e[o++]},Vt={entries:function entries(){return at.call(jt(this))},keys:function keys(){return ft.call(jt(this))},values:function values(){return ct.call(jt(this))}},zt=function(t,n){return w(t)&&t[_t]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Kt=function getOwnPropertyDescriptor(t,n){return zt(t,n=g(n,!0))?l(2,t[n]):B(t,n)},Jt=function defineProperty(t,n,r){return!(zt(t,n=g(n,!0))&&w(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?W(t,n,r):(t[n]=r.value,t)};St||(D.f=Kt,G.f=Jt),u(u.S+u.F*!St,"Object",{getOwnPropertyDescriptor:Kt,defineProperty:Jt}),o(function(){yt.call({})})&&(yt=gt=function toString(){return vt.call(this)});var Yt=v({},Dt);v(Yt,Vt),h(Yt,bt,Vt.values),v(Yt,{slice:Wt,set:Bt,constructor:function(){},toString:yt,toLocaleString:Gt}),Tt(Yt,"buffer","b"),Tt(Yt,"byteOffset","o"),Tt(Yt,"byteLength","l"),Tt(Yt,"length","e"),W(Yt,xt,{get:function(){return this[_t]}}),n.exports=function(t,n,r,f){f=!!f;var a=t+(f?"Clamped":"")+"Array",l="Uint8Array"!=a,v="get"+t,p="set"+t,y=i[a],g=y||{},b=y&&O(y),x=!y||!c.ABV,S={},_=y&&y[X],P=function(t,r){var e=t._d;return e.v[v](r*n+e.o,Pt)},M=function(t,r,e){var i=t._d;f&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,Pt)},A=function(t,n){W(t,n,{get:function(){return P(this,n)},set:function(t){return M(this,n,t)},enumerable:!0})};x?(y=r(function(t,r,e,i){s(t,y,a,"_d");var o,u,c,f,l=0,v=0;if(w(r)){if(!(r instanceof H||(f=m(r))==J||f==Y))return _t in r?Rt(y,r):Lt.call(y,r);o=r,v=It(e,n);var p=r.byteLength;if(void 0===i){if(p%n)throw V(Ot);if(u=p-v,u<0)throw V(Ot)}else if(u=d(i)*n,u+v>p)throw V(Ot);c=u/n}else c=At(r,!0),u=c*n,o=new H(u);for(h(t,"_d",{b:o,o:v,l:u,e:c,v:new Z(o)});l<c;)A(t,l++)}),_=y[X]=E(Yt),h(_,"constructor",y)):T(function(t){new y(null),new y(t)},!0)||(y=r(function(t,r,e,i){s(t,y,a);var o;return w(r)?r instanceof H||(o=m(r))==J||o==Y?void 0!==i?new g(r,It(e,n),i):void 0!==e?new g(r,It(e,n)):new g(r):_t in r?Rt(y,r):Lt.call(y,r):new g(At(r,l))}),Q(b!==Function.prototype?F(g).concat(F(b)):F(g),function(t){t in y||h(y,t,g[t])}),y[X]=_,e||(_.constructor=y));var I=_[bt],j=!!I&&("values"==I.name||void 0==I.name),N=Vt.values;h(y,mt,!0),h(_,_t,a),h(_,Et,!0),h(_,wt,y),(f?new y(1)[xt]==a:xt in _)||W(_,xt,{get:function(){return a}}),S[a]=y,u(u.G+u.W+u.F*(y!=g),S),u(u.S,a,{BYTES_PER_ELEMENT:n,from:Lt,of:Ct}),q in _||h(_,q,n),u(u.P,a,Dt),L(a),u(u.P+u.F*Mt,a,{set:Bt}),u(u.P+u.F*!j,a,Vt),u(u.P+u.F*(_.toString!=yt),a,{toString:yt}),u(u.P+u.F*o(function(){new y(1).slice()}),a,{slice:Wt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new y([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),a,{toLocaleString:Gt}),R[a]=j?I:N,e||j||h(_,bt,N)}}else n.exports=function(){}},{105:105,106:106,108:108,109:109,11:11,110:110,112:112,113:113,114:114,117:117,118:118,12:12,130:130,17:17,25:25,28:28,32:32,34:34,38:38,39:39,40:40,46:46,49:49,54:54,56:56,58:58,6:6,66:66,67:67,70:70,72:72,74:74,8:8,85:85,86:86,89:89,9:9,91:91,95:95}],112:[function(t,n,r){"use strict";var e=t(38),i=t(28),o=t(58),u=t(113),c=t(40),f=t(86),a=t(34),s=t(6),l=t(106),h=t(108),v=t(72).f,p=t(67).f,d=t(9),y=t(92),g="ArrayBuffer",b="DataView",x="prototype",m="Wrong length!",w="Wrong index!",S=e[g],_=e[b],E=e.Math,O=e.RangeError,F=e.Infinity,P=S,M=E.abs,A=E.pow,I=E.floor,j=E.log,N=E.LN2,k="buffer",R="byteLength",T="byteOffset",L=i?"_b":k,C=i?"_l":R,U=i?"_o":T,G=function(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,f=(1<<c)-1,a=f>>1,s=23===n?A(2,-24)-A(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=M(t),t!=t||t===F?(i=t!=t?1:0,e=f):(e=I(j(t)/N),t*(o=A(2,-e))<1&&(e--,o*=2),t+=e+a>=1?s/o:s*A(2,1-a),t*o>=2&&(e++,o/=2),e+a>=f?(i=0,e=f):e+a>=1?(i=(t*o-1)*A(2,n),e+=a):(i=t*A(2,a-1)*A(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u},D=function(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,f=r-1,a=t[f--],s=127&a;for(a>>=7;c>0;s=256*s+t[f],f--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[f],f--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:a?-F:F;e+=A(2,n),s-=u}return(a?-1:1)*e*A(2,s-n)},W=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},B=function(t){return[255&t]},V=function(t){return[255&t,t>>8&255]},z=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},K=function(t){return G(t,52,8)},J=function(t){return G(t,23,4)},Y=function(t,n,r){p(t[x],n,{get:function(){return this[r]}})},q=function(t,n,r,e){var i=+r,o=l(i);if(i!=o||o<0||o+n>t[C])throw O(w);var u=t[L]._b,c=o+t[U],f=u.slice(c,c+n);return e?f:f.reverse()},X=function(t,n,r,e,i,o){var u=+r,c=l(u);if(u!=c||c<0||c+n>t[C])throw O(w);for(var f=t[L]._b,a=c+t[U],s=e(+i),h=0;h<n;h++)f[a+h]=s[o?h:n-h-1]},$=function(t,n){s(t,S,g);var r=+n,e=h(r);if(r!=e)throw O(m);return e};if(u.ABV){if(!a(function(){new S})||!a(function(){new S(.5)})){S=function ArrayBuffer(t){return new P($(this,t))};for(var H,Z=S[x]=P[x],Q=v(P),tt=0;Q.length>tt;)(H=Q[tt++])in S||c(S,H,P[H]);o||(Z.constructor=S)}var nt=new _(new S(2)),rt=_[x].setInt8;nt.setInt8(0,2147483648),nt.setInt8(1,2147483649),!nt.getInt8(0)&&nt.getInt8(1)||f(_[x],{setInt8:function setInt8(t,n){rt.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){rt.call(this,t,n<<24>>24)}},!0)}else S=function ArrayBuffer(t){var n=$(this,t);this._b=d.call(Array(n),0),this[C]=n},_=function DataView(t,n,r){s(this,_,b),s(t,S,b);var e=t[C],i=l(n);if(i<0||i>e)throw O("Wrong offset!");if(r=void 0===r?e-i:h(r),i+r>e)throw O(m);this[L]=t,this[U]=i,this[C]=r},i&&(Y(S,R,"_l"),Y(_,k,"_b"),Y(_,R,"_l"),Y(_,T,"_o")),f(_[x],{getInt8:function getInt8(t){return q(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return q(this,1,t)[0]},getInt16:function getInt16(t){var n=q(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=q(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return W(q(this,4,t,arguments[1]))},getUint32:function getUint32(t){return W(q(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return D(q(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return D(q(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){X(this,1,t,B,n)},setUint8:function setUint8(t,n){X(this,1,t,B,n)},setInt16:function setInt16(t,n){X(this,2,t,V,n,arguments[2])},setUint16:function setUint16(t,n){X(this,2,t,V,n,arguments[2])},setInt32:function setInt32(t,n){X(this,4,t,z,n,arguments[2])},setUint32:function setUint32(t,n){X(this,4,t,z,n,arguments[2])},setFloat32:function setFloat32(t,n){X(this,4,t,J,n,arguments[2])},setFloat64:function setFloat64(t,n){X(this,8,t,K,n,arguments[2])}});y(S,g),y(_,b),c(_[x],u.VIEW,!0),r[g]=S,r[b]=_},{106:106,108:108,113:113,28:28,34:34,38:38,40:40,58:58,6:6,67:67,72:72,86:86,9:9,92:92}],113:[function(t,n,r){for(var e,i=t(38),o=t(40),u=t(114),c=u("typed_array"),f=u("view"),a=!(!i.ArrayBuffer||!i.DataView),s=a,l=0,h=9,v="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<h;)(e=i[v[l++]])?(o(e.prototype,c,!0),o(e.prototype,f,!0)):s=!1;n.exports={ABV:a,CONSTR:s,TYPED:c,VIEW:f}},{114:114,38:38,40:40}],114:[function(t,n,r){var e=0,i=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},{}],115:[function(t,n,r){var e=t(38),i=t(23),o=t(58),u=t(116),c=t(67).f;n.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},{116:116,23:23,38:38,58:58,67:67}],116:[function(t,n,r){r.f=t(117)},{117:117}],117:[function(t,n,r){var e=t(94)("wks"),i=t(114),o=t(38).Symbol,u="function"==typeof o,c=n.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))};c.store=e},{114:114,38:38,94:94}],118:[function(t,n,r){var e=t(17),i=t(117)("iterator"),o=t(56);n.exports=t(23).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},{117:117,17:17,23:23,56:56}],119:[function(t,n,r){var e=t(32),i=t(88)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function escape(t){return i(t)}})},{32:32,88:88}],120:[function(t,n,r){var e=t(32);e(e.P,"Array",{copyWithin:t(8)}),t(5)("copyWithin")},{32:32,5:5,8:8}],121:[function(t,n,r){"use strict";var e=t(32),i=t(12)(4);e(e.P+e.F*!t(96)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],122:[function(t,n,r){var e=t(32);e(e.P,"Array",{fill:t(9)}),t(5)("fill")},{32:32,5:5,9:9}],123:[function(t,n,r){"use strict";var e=t(32),i=t(12)(2);e(e.P+e.F*!t(96)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],124:[function(t,n,r){"use strict";var e=t(32),i=t(12)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,32:32,5:5}],125:[function(t,n,r){"use strict";var e=t(32),i=t(12)(5),o="find",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{find:function find(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)(o)},{12:12,32:32,5:5}],126:[function(t,n,r){"use strict";var e=t(32),i=t(12)(0),o=t(96)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],127:[function(t,n,r){"use strict";var e=t(25),i=t(32),o=t(109),u=t(51),c=t(46),f=t(108),a=t(24),s=t(118);i(i.S+i.F*!t(54)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,i,l,h=o(t),v="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,y=void 0!==d,g=0,b=s(h);if(y&&(d=e(d,p>2?arguments[2]:void 0,2)),void 0==b||v==Array&&c(b))for(n=f(h.length),r=new v(n);n>g;g++)a(r,g,y?d(h[g],g):h[g]);else for(l=b.call(h),r=new v;!(i=l.next()).done;g++)a(r,g,y?u(l,d,[i.value,g],!0):i.value);return r.length=g,r}})},{108:108,109:109,118:118,24:24,25:25,32:32,46:46,51:51,54:54}],128:[function(t,n,r){"use strict";var e=t(32),i=t(11)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!t(96)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},{11:11,32:32,96:96}],129:[function(t,n,r){var e=t(32);e(e.S,"Array",{isArray:t(47)})},{32:32,47:47}],130:[function(t,n,r){"use strict";var e=t(5),i=t(55),o=t(56),u=t(107);n.exports=t(53)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},{107:107,5:5,53:53,55:55,56:56}],131:[function(t,n,r){"use strict";var e=t(32),i=t(107),o=[].join;e(e.P+e.F*(t(45)!=Object||!t(96)(o)),"Array",{join:function join(t){return o.call(i(this),void 0===t?",":t)}})},{107:107,32:32,45:45,96:96}],132:[function(t,n,r){"use strict";var e=t(32),i=t(107),o=t(106),u=t(108),c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(f||!t(96)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(f)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},{106:106,107:107,108:108,32:32,96:96}],133:[function(t,n,r){"use strict";var e=t(32),i=t(12)(1);e(e.P+e.F*!t(96)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],134:[function(t,n,r){"use strict";var e=t(32),i=t(24);e(e.S+e.F*t(34)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},{24:24,32:32,34:34}],135:[function(t,n,r){"use strict";var e=t(32),i=t(13);e(e.P+e.F*!t(96)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},{13:13,32:32,96:96}],136:[function(t,n,r){"use strict";var e=t(32),i=t(13);e(e.P+e.F*!t(96)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},{13:13,32:32,96:96}],137:[function(t,n,r){"use strict";var e=t(32),i=t(41),o=t(18),u=t(105),c=t(108),f=[].slice;e(e.P+e.F*t(34)(function(){i&&f.call(i)}),"Array",{slice:function slice(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return f.call(this,t,n);for(var i=u(t,r),a=u(n,r),s=c(a-i),l=Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},{105:105,108:108,18:18,32:32,34:34,41:41}],138:[function(t,n,r){"use strict";var e=t(32),i=t(12)(3);e(e.P+e.F*!t(96)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},{12:12,32:32,96:96}],139:[function(t,n,r){"use strict";var e=t(32),i=t(3),o=t(109),u=t(34),c=[].sort,f=[1,2,3];e(e.P+e.F*(u(function(){f.sort(void 0)})||!u(function(){f.sort(null)})||!t(96)(c)),"Array",{sort:function sort(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},{109:109,3:3,32:32,34:34,96:96}],140:[function(t,n,r){t(91)("Array")},{91:91}],141:[function(t,n,r){var e=t(32);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},{32:32}],142:[function(t,n,r){"use strict";var e=t(32),i=t(34),o=Date.prototype.getTime,u=function(t){return t>9?t:"0"+t};e(e.P+e.F*(i(function(){return"0385-07-25T07:06:39.999Z"!=new Date(-5e13-1).toISOString()})||!i(function(){new Date(NaN).toISOString()})),"Date",{toISOString:function toISOString(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}})},{32:32,34:34}],143:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110);e(e.P+e.F*t(34)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},{109:109,110:110,32:32,34:34}],144:[function(t,n,r){var e=t(117)("toPrimitive"),i=Date.prototype;e in i||t(40)(i,e,t(26))},{117:117,26:26,40:40}],145:[function(t,n,r){var e=Date.prototype,i="Invalid Date",o="toString",u=e[o],c=e.getTime;new Date(NaN)+""!=i&&t(87)(e,o,function toString(){var t=c.call(this);return t===t?u.call(this):i})},{87:87}],146:[function(t,n,r){var e=t(32);e(e.P,"Function",{bind:t(16)})},{16:16,32:32}],147:[function(t,n,r){"use strict";var e=t(49),i=t(74),o=t(117)("hasInstance"),u=Function.prototype;o in u||t(67).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},{117:117,49:49,67:67,74:74}],148:[function(t,n,r){var e=t(67).f,i=t(85),o=t(39),u=Function.prototype,c=/^\s*function ([^ (]*)/,f="name",a=Object.isExtensible||function(){return!0};f in u||t(28)&&e(u,f,{configurable:!0,get:function(){try{var t=this,n=(""+t).match(c)[1];return o(t,f)||!a(t)||e(t,f,i(5,n)),n}catch(t){return""}}})},{28:28,39:39,67:67,85:85}],149:[function(t,n,r){"use strict";var e=t(19);n.exports=t(22)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=e.getEntry(this,t);return n&&n.v},set:function set(t,n){return e.def(this,0===t?0:t,n)}},e,!0)},{19:19,22:22}],150:[function(t,n,r){var e=t(32),i=t(60),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},{32:32,60:60}],151:[function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=t(32),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},{32:32}],152:[function(t,n,r){var e=t(32),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{32:32}],153:[function(t,n,r){var e=t(32),i=t(61);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},{32:32,61:61}],154:[function(t,n,r){var e=t(32);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{32:32}],155:[function(t,n,r){var e=t(32),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},{32:32}],156:[function(t,n,r){var e=t(32),i=t(59);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},{32:32,59:59}],157:[function(t,n,r){var e=t(32),i=t(61),o=Math.pow,u=o(2,-52),c=o(2,-23),f=o(2,127)*(2-c),a=o(2,-126),s=function(t){return t+1/u-1/u};e(e.S,"Math",{fround:function fround(t){var n,r,e=Math.abs(t),o=i(t);return e<a?o*s(e/a/c)*a*c:(n=(1+c/u)*e,r=n-(n-e),r>f||r!=r?o*(1/0):o*r)}})},{32:32,61:61}],158:[function(t,n,r){var e=t(32),i=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,o=0,u=0,c=arguments.length,f=0;u<c;)r=i(arguments[u++]),f<r?(e=f/r,o=o*e*e+1,f=r):r>0?(e=r/f,o+=e*e):o+=r;return f===1/0?1/0:f*Math.sqrt(o)}})},{32:32}],159:[function(t,n,r){var e=t(32),i=Math.imul;e(e.S+e.F*t(34)(function(){return i(4294967295,5)!=-5||2!=i.length}),"Math",{imul:function imul(t,n){var r=65535,e=+t,i=+n,o=r&e,u=r&i;return 0|o*u+((r&e>>>16)*u+o*(r&i>>>16)<<16>>>0)}})},{32:32,34:34}],160:[function(t,n,r){var e=t(32);e(e.S,"Math",{log10:function log10(t){return Math.log(t)/Math.LN10}})},{32:32}],161:[function(t,n,r){var e=t(32);e(e.S,"Math",{log1p:t(60)})},{32:32,60:60}],162:[function(t,n,r){var e=t(32);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{32:32}],163:[function(t,n,r){var e=t(32);e(e.S,"Math",{sign:t(61)})},{32:32,61:61}],164:[function(t,n,r){var e=t(32),i=t(59),o=Math.exp;e(e.S+e.F*t(34)(function(){return!Math.sinh(-2e-17)!=-2e-17}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},{32:32,34:34,59:59}],165:[function(t,n,r){var e=t(32),i=t(59),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},{32:32,59:59}],166:[function(t,n,r){var e=t(32);e(e.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{32:32}],167:[function(t,n,r){"use strict";var e=t(38),i=t(39),o=t(18),u=t(43),c=t(110),f=t(34),a=t(72).f,s=t(70).f,l=t(67).f,h=t(102).trim,v="Number",p=e[v],d=p,y=p.prototype,g=o(t(66)(y))==v,b="trim"in String.prototype,x=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=b?n.trim():h(n,3);var r,e,i,o=n.charCodeAt(0);if(43===o||45===o){if(r=n.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,f=n.slice(2),a=0,s=f.length;a<s;a++)if(u=f.charCodeAt(a),u<48||u>i)return NaN;return parseInt(f,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(g?f(function(){y.valueOf.call(r)}):o(r)!=v)?u(new d(x(n)),r,p):x(n)};for(var m,w=t(28)?a(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(d,m=w[S])&&!i(p,m)&&l(p,m,s(d,m));p.prototype=y,y.constructor=p,t(87)(e,v,p)}},{102:102,110:110,18:18,28:28,34:34,38:38,39:39,43:43,66:66,67:67,70:70,72:72,87:87}],168:[function(t,n,r){var e=t(32);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},{32:32}],169:[function(t,n,r){var e=t(32),i=t(38).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},{32:32,38:38}],170:[function(t,n,r){var e=t(32);e(e.S,"Number",{isInteger:t(48)})},{32:32,48:48}],171:[function(t,n,r){var e=t(32);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},{32:32}],172:[function(t,n,r){var e=t(32),i=t(48),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},{32:32,48:48}],173:[function(t,n,r){var e=t(32);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{32:32}],174:[function(t,n,r){var e=t(32);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{32:32}],175:[function(t,n,r){var e=t(32),i=t(81);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},{32:32,81:81}],176:[function(t,n,r){var e=t(32),i=t(82);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},{32:32,82:82}],177:[function(t,n,r){"use strict";var e=t(32),i=t(106),o=t(4),u=t(101),c=1..toFixed,f=Math.floor,a=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l="0",h=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*a[r],a[r]=e%1e7,e=f(e/1e7)},v=function(t){for(var n=6,r=0;--n>=0;)r+=a[n],a[n]=f(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==a[t]){var r=String(a[t]);n=""===n?r:n+u.call(l,7-r.length)+r}return n},d=function(t,n,r){return 0===n?r:n%2===1?d(t,n-1,r*t):d(t*t,n/2,r)},y=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(34)(function(){c.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,c,f=o(this,s),a=i(t),g="",b=l;if(a<0||a>20)throw RangeError(s);if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(g="-",f=-f),f>1e-21)if(n=y(f*d(2,69,1))-69,r=n<0?f*d(2,-n,1):f/d(2,n,1),r*=4503599627370496,n=52-n,n>0){for(h(0,r),e=a;e>=7;)h(1e7,0),e-=7;for(h(d(10,e,1),0),e=n-1;e>=23;)v(1<<23),e-=23;v(1<<e),h(1,1),v(2),b=p()}else h(0,r),h(1<<-n,0),b=p()+u.call(l,a);return a>0?(c=b.length,b=g+(c<=a?"0."+u.call(l,a-c)+b:b.slice(0,c-a)+"."+b.slice(c-a))):b=g+b,b}})},{101:101,106:106,32:32,34:34,4:4}],178:[function(t,n,r){"use strict";var e=t(32),i=t(34),o=t(4),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},{32:32,34:34,4:4}],179:[function(t,n,r){var e=t(32);e(e.S+e.F,"Object",{assign:t(65)})},{32:32,65:65}],180:[function(t,n,r){var e=t(32);e(e.S,"Object",{create:t(66)})},{32:32,66:66}],181:[function(t,n,r){var e=t(32);e(e.S+e.F*!t(28),"Object",{defineProperties:t(68)})},{28:28,32:32,68:68}],182:[function(t,n,r){var e=t(32);e(e.S+e.F*!t(28),"Object",{defineProperty:t(67).f})},{28:28,32:32,67:67}],183:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("freeze",function(t){return function freeze(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],184:[function(t,n,r){var e=t(107),i=t(70).f;t(78)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},{107:107,70:70,78:78}],185:[function(t,n,r){t(78)("getOwnPropertyNames",function(){return t(71).f})},{71:71,78:78}],186:[function(t,n,r){var e=t(109),i=t(74);t(78)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},{109:109,74:74,78:78}],187:[function(t,n,r){var e=t(49);t(78)("isExtensible",function(t){return function isExtensible(n){return!!e(n)&&(!t||t(n))}})},{49:49,78:78}],188:[function(t,n,r){var e=t(49);t(78)("isFrozen",function(t){return function isFrozen(n){return!e(n)||!!t&&t(n)}})},{49:49,78:78}],189:[function(t,n,r){var e=t(49);t(78)("isSealed",function(t){return function isSealed(n){return!e(n)||!!t&&t(n)}})},{49:49,78:78}],190:[function(t,n,r){var e=t(32);e(e.S,"Object",{is:t(89)})},{32:32,89:89}],191:[function(t,n,r){var e=t(109),i=t(76);t(78)("keys",function(){return function keys(t){return i(e(t))}})},{109:109,76:76,78:78}],192:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("preventExtensions",function(t){return function preventExtensions(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],193:[function(t,n,r){var e=t(49),i=t(62).onFreeze;t(78)("seal",function(t){return function seal(n){return t&&e(n)?t(i(n)):n}})},{49:49,62:62,78:78}],194:[function(t,n,r){var e=t(32);e(e.S,"Object",{setPrototypeOf:t(90).set})},{32:32,90:90}],195:[function(t,n,r){"use strict";var e=t(17),i={};i[t(117)("toStringTag")]="z",i+""!="[object z]"&&t(87)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},{117:117,17:17,87:87}],196:[function(t,n,r){var e=t(32),i=t(81);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},{32:32,81:81}],197:[function(t,n,r){var e=t(32),i=t(82);e(e.G+e.F*(parseInt!=i),{parseInt:i})},{32:32,82:82}],198:[function(t,n,r){"use strict";var e,i,o,u=t(58),c=t(38),f=t(25),a=t(17),s=t(32),l=t(49),h=t(3),v=t(6),p=t(37),d=t(95),y=t(104).set,g=t(64)(),b="Promise",x=c.TypeError,m=c.process,w=c[b],m=c.process,S="process"==a(m),_=function(){},E=!!function(){try{var n=w.resolve(1),r=(n.constructor={})[t(117)("species")]=function(t){t(_,_)};return(S||"function"==typeof PromiseRejectionEvent)&&n.then(_)instanceof r}catch(t){}}(),O=function(t,n){return t===n||t===w&&n===o},F=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},P=function(t){return O(w,t)?new M(t):new i(t)},M=i=function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw x("Bad Promise constructor");n=t,r=e}),this.resolve=h(n),this.reject=h(r)},A=function(t){try{t()}catch(t){return{error:t}}},I=function(t,n){if(!t._n){t._n=!0;var r=t._c;g(function(){for(var e=t._v,i=1==t._s,o=0,u=function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,f=n.reject,a=n.domain;try{u?(i||(2==t._h&&k(t),t._h=1),u===!0?r=e:(a&&a.enter(),r=u(e),a&&a.exit()),r===n.promise?f(x("Promise-chain cycle")):(o=F(r))?o.call(r,c,f):c(r)):f(e)}catch(t){f(t)}};r.length>o;)u(r[o++]);t._c=[],t._n=!1,n&&!t._h&&j(t)})}},j=function(t){y.call(c,function(){var n,r,e,i=t._v;if(N(t)&&(n=A(function(){S?m.emit("unhandledRejection",i,t):(r=c.onunhandledrejection)?r({promise:t,reason:i}):(e=c.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=S||N(t)?2:1),t._a=void 0,n)throw n.error})},N=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if(n=r[e++],n.fail||!N(n.promise))return!1;return!0},k=function(t){y.call(c,function(){var n;S?m.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},T=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw x("Promise can't be resolved itself");(n=F(t))?g(function(){var e={_w:r,_d:!1};try{n.call(t,f(T,e,1),f(R,e,1))}catch(t){R.call(e,t)}}):(r._v=t,r._s=1,I(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};E||(w=function Promise(t){v(this,w,b,"_h"),h(t),e.call(this);try{t(f(T,this,1),f(R,this,1))}catch(t){R.call(this,t)}},e=function Promise(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=t(86)(w.prototype,{then:function then(t,n){var r=P(d(this,w));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=S?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&I(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),M=function(){var t=new e;this.promise=t,this.resolve=f(T,t,1),this.reject=f(R,t,1)}),s(s.G+s.W+s.F*!E,{Promise:w}),t(92)(w,b),t(91)(b),o=t(23)[b],s(s.S+s.F*!E,b,{reject:function reject(t){var n=P(this),r=n.reject;return r(t),n.promise}}),s(s.S+s.F*(u||!E),b,{resolve:function resolve(t){if(t instanceof w&&O(t.constructor,this))return t;var n=P(this),r=n.resolve;return r(t),n.promise}}),s(s.S+s.F*!(E&&t(54)(function(t){w.all(t).catch(_)})),b,{all:function all(t){var n=this,r=P(n),e=r.resolve,i=r.reject,o=A(function(){var r=[],o=0,u=1;p(t,!1,function(t){var c=o++,f=!1;r.push(void 0),u++,n.resolve(t).then(function(t){f||(f=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o&&i(o.error),r.promise},race:function race(t){var n=this,r=P(n),e=r.reject,i=A(function(){p(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i&&e(i.error),r.promise}})},{104:104,117:117,17:17,23:23,25:25,3:3,32:32,37:37,38:38,49:49,54:54,58:58,6:6,64:64,86:86,91:91,92:92,95:95}],199:[function(t,n,r){var e=t(32),i=t(3),o=t(7),u=(t(38).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!t(34)(function(){u(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=i(t),f=o(r);return u?u(e,n,f):c.call(e,n,f)}})},{3:3,32:32,34:34,38:38,7:7}],200:[function(t,n,r){var e=t(32),i=t(66),o=t(3),u=t(7),c=t(49),f=t(34),a=t(16),s=(t(38).Reflect||{}).construct,l=f(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!f(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function construct(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(a.apply(t,e))}var f=r.prototype,v=i(c(f)?f:Object.prototype),p=Function.apply.call(t,v,n);return c(p)?p:v}})},{16:16,3:3,32:32,34:34,38:38,49:49,66:66,7:7}],201:[function(t,n,r){var e=t(67),i=t(32),o=t(7),u=t(110);i(i.S+i.F*t(34)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},{110:110,32:32,34:34,67:67,7:7}],202:[function(t,n,r){var e=t(32),i=t(70).f,o=t(7);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},{32:32,7:7,70:70}],203:[function(t,n,r){"use strict";var e=t(32),i=t(7),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};t(52)(o,"Object",function(){var t,n=this,r=n._k;do if(n._i>=r.length)return{value:void 0,done:!0};while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},{32:32,52:52,7:7}],204:[function(t,n,r){var e=t(70),i=t(32),o=t(7);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},{32:32,7:7,70:70}],205:[function(t,n,r){var e=t(32),i=t(74),o=t(7);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},{32:32,7:7,74:74}],206:[function(t,n,r){function get(t,n){var r,u,a=arguments.length<3?t:arguments[2];return f(t)===a?t[n]:(r=e.f(t,n))?o(r,"value")?r.value:void 0!==r.get?r.get.call(a):void 0:c(u=i(t))?get(u,n,a):void 0}var e=t(70),i=t(74),o=t(39),u=t(32),c=t(49),f=t(7);u(u.S,"Reflect",{get:get})},{32:32,39:39,49:49,7:7,70:70,74:74}],207:[function(t,n,r){var e=t(32);e(e.S,"Reflect",{has:function has(t,n){return n in t;
}})},{32:32}],208:[function(t,n,r){var e=t(32),i=t(7),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},{32:32,7:7}],209:[function(t,n,r){var e=t(32);e(e.S,"Reflect",{ownKeys:t(80)})},{32:32,80:80}],210:[function(t,n,r){var e=t(32),i=t(7),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},{32:32,7:7}],211:[function(t,n,r){var e=t(32),i=t(90);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},{32:32,90:90}],212:[function(t,n,r){function set(t,n,r){var c,l,h=arguments.length<4?t:arguments[3],v=i.f(a(t),n);if(!v){if(s(l=o(t)))return set(l,n,r,h);v=f(0)}return u(v,"value")?!(v.writable===!1||!s(h))&&(c=i.f(h,n)||f(0),c.value=r,e.f(h,n,c),!0):void 0!==v.set&&(v.set.call(h,r),!0)}var e=t(67),i=t(70),o=t(74),u=t(39),c=t(32),f=t(85),a=t(7),s=t(49);c(c.S,"Reflect",{set:set})},{32:32,39:39,49:49,67:67,7:7,70:70,74:74,85:85}],213:[function(t,n,r){var e=t(38),i=t(43),o=t(67).f,u=t(72).f,c=t(50),f=t(36),a=e.RegExp,s=a,l=a.prototype,h=/a/g,v=/a/g,p=new a(h)!==h;if(t(28)&&(!p||t(34)(function(){return v[t(117)("match")]=!1,a(h)!=h||a(v)==v||"/a/i"!=a(h,"i")}))){a=function RegExp(t,n){var r=this instanceof a,e=c(t),o=void 0===n;return!r&&e&&t.constructor===a&&o?t:i(p?new s(e&&!o?t.source:t,n):s((e=t instanceof a)?t.source:t,e&&o?f.call(t):n),r?this:l,a)};for(var d=(function(t){t in a||o(a,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}),y=u(s),g=0;y.length>g;)d(y[g++]);l.constructor=a,a.prototype=l,t(87)(e,"RegExp",a)}t(91)("RegExp")},{117:117,28:28,34:34,36:36,38:38,43:43,50:50,67:67,72:72,87:87,91:91}],214:[function(t,n,r){t(28)&&"g"!=/./g.flags&&t(67).f(RegExp.prototype,"flags",{configurable:!0,get:t(36)})},{28:28,36:36,67:67}],215:[function(t,n,r){t(35)("match",1,function(t,n,r){return[function match(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{35:35}],216:[function(t,n,r){t(35)("replace",2,function(t,n,r){return[function replace(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},{35:35}],217:[function(t,n,r){t(35)("search",1,function(t,n,r){return[function search(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},{35:35}],218:[function(t,n,r){t(35)("split",2,function(n,r,e){"use strict";var i=t(50),o=e,u=[].push,c="split",f="length",a="lastIndex";if("c"=="abbc"[c](/(b)*/)[1]||4!="test"[c](/(?:)/,-1)[f]||2!="ab"[c](/(?:ab)*/)[f]||4!="."[c](/(.?)(.?)/)[f]||"."[c](/()()/)[f]>1||""[c](/.?/)[f]){var s=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,c,l,h,v,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,g=void 0===n?4294967295:n>>>0,b=new RegExp(t.source,d+"g");for(s||(e=new RegExp("^"+b.source+"$(?!\\s)",d));(c=b.exec(r))&&(l=c.index+c[0][f],!(l>y&&(p.push(r.slice(y,c.index)),!s&&c[f]>1&&c[0].replace(e,function(){for(v=1;v<arguments[f]-2;v++)void 0===arguments[v]&&(c[v]=void 0)}),c[f]>1&&c.index<r[f]&&u.apply(p,c.slice(1)),h=c[0][f],y=l,p[f]>=g)));)b[a]===c.index&&b[a]++;return y===r[f]?!h&&b.test("")||p.push(""):p.push(r.slice(y)),p[f]>g?p.slice(0,g):p}}else"0"[c](void 0,0)[f]&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function split(t,i){var o=n(this),u=void 0==t?void 0:t[r];return void 0!==u?u.call(t,o,i):e.call(String(o),t,i)},e]})},{35:35,50:50}],219:[function(t,n,r){"use strict";t(214);var e=t(7),i=t(36),o=t(28),u="toString",c=/./[u],f=function(n){t(87)(RegExp.prototype,u,n,!0)};t(34)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?f(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):c.name!=u&&f(function toString(){return c.call(this)})},{214:214,28:28,34:34,36:36,7:7,87:87}],220:[function(t,n,r){"use strict";var e=t(19);n.exports=t(22)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(this,t=0===t?0:t,t)}},e)},{19:19,22:22}],221:[function(t,n,r){"use strict";t(99)("anchor",function(t){return function anchor(n){return t(this,"a","name",n)}})},{99:99}],222:[function(t,n,r){"use strict";t(99)("big",function(t){return function big(){return t(this,"big","","")}})},{99:99}],223:[function(t,n,r){"use strict";t(99)("blink",function(t){return function blink(){return t(this,"blink","","")}})},{99:99}],224:[function(t,n,r){"use strict";t(99)("bold",function(t){return function bold(){return t(this,"b","","")}})},{99:99}],225:[function(t,n,r){"use strict";var e=t(32),i=t(97)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},{32:32,97:97}],226:[function(t,n,r){"use strict";var e=t(32),i=t(108),o=t(98),u="endsWith",c=""[u];e(e.P+e.F*t(33)(u),"String",{endsWith:function endsWith(t){var n=o(this,t,u),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),f=void 0===r?e:Math.min(i(r),e),a=String(t);return c?c.call(n,a,f):n.slice(f-a.length,f)===a}})},{108:108,32:32,33:33,98:98}],227:[function(t,n,r){"use strict";t(99)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},{99:99}],228:[function(t,n,r){"use strict";t(99)("fontcolor",function(t){return function fontcolor(n){return t(this,"font","color",n)}})},{99:99}],229:[function(t,n,r){"use strict";t(99)("fontsize",function(t){return function fontsize(n){return t(this,"font","size",n)}})},{99:99}],230:[function(t,n,r){var e=t(32),i=t(105),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(((n-=65536)>>10)+55296,n%1024+56320))}return r.join("")}})},{105:105,32:32}],231:[function(t,n,r){"use strict";var e=t(32),i=t(98),o="includes";e(e.P+e.F*t(33)(o),"String",{includes:function includes(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{32:32,33:33,98:98}],232:[function(t,n,r){"use strict";t(99)("italics",function(t){return function italics(){return t(this,"i","","")}})},{99:99}],233:[function(t,n,r){"use strict";var e=t(97)(!0);t(53)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},{53:53,97:97}],234:[function(t,n,r){"use strict";t(99)("link",function(t){return function link(n){return t(this,"a","href",n)}})},{99:99}],235:[function(t,n,r){var e=t(32),i=t(107),o=t(108);e(e.S,"String",{raw:function raw(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},{107:107,108:108,32:32}],236:[function(t,n,r){var e=t(32);e(e.P,"String",{repeat:t(101)})},{101:101,32:32}],237:[function(t,n,r){"use strict";t(99)("small",function(t){return function small(){return t(this,"small","","")}})},{99:99}],238:[function(t,n,r){"use strict";var e=t(32),i=t(108),o=t(98),u="startsWith",c=""[u];e(e.P+e.F*t(33)(u),"String",{startsWith:function startsWith(t){var n=o(this,t,u),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return c?c.call(n,e,r):n.slice(r,r+e.length)===e}})},{108:108,32:32,33:33,98:98}],239:[function(t,n,r){"use strict";t(99)("strike",function(t){return function strike(){return t(this,"strike","","")}})},{99:99}],240:[function(t,n,r){"use strict";t(99)("sub",function(t){return function sub(){return t(this,"sub","","")}})},{99:99}],241:[function(t,n,r){"use strict";t(99)("sup",function(t){return function sup(){return t(this,"sup","","")}})},{99:99}],242:[function(t,n,r){"use strict";t(102)("trim",function(t){return function trim(){return t(this,3)}})},{102:102}],243:[function(t,n,r){"use strict";var e=t(38),i=t(39),o=t(28),u=t(32),c=t(87),f=t(62).KEY,a=t(34),s=t(94),l=t(92),h=t(114),v=t(117),p=t(116),d=t(115),y=t(57),g=t(31),b=t(47),x=t(7),m=t(107),w=t(110),S=t(85),_=t(66),E=t(71),O=t(70),F=t(67),P=t(76),M=O.f,A=F.f,I=E.f,j=e.Symbol,N=e.JSON,k=N&&N.stringify,R="prototype",T=v("_hidden"),L=v("toPrimitive"),C={}.propertyIsEnumerable,U=s("symbol-registry"),G=s("symbols"),D=s("op-symbols"),W=Object[R],B="function"==typeof j,V=e.QObject,z=!V||!V[R]||!V[R].findChild,K=o&&a(function(){return 7!=_(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=M(W,n);e&&delete W[n],A(t,n,r),e&&t!==W&&A(W,n,e)}:A,J=function(t){var n=G[t]=_(j[R]);return n._k=t,n},Y=B&&"symbol"==typeof j.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof j},q=function defineProperty(t,n,r){return t===W&&q(D,n,r),x(t),n=w(n,!0),x(r),i(G,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:S(0,!1)})):(i(t,T)||A(t,T,S(1,{})),t[T][n]=!0),K(t,n,r)):A(t,n,r)},X=function defineProperties(t,n){x(t);for(var r,e=g(n=m(n)),i=0,o=e.length;o>i;)q(t,r=e[i++],n[r]);return t},$=function create(t,n){return void 0===n?_(t):X(_(t),n)},H=function propertyIsEnumerable(t){var n=C.call(this,t=w(t,!0));return!(this===W&&i(G,t)&&!i(D,t))&&(!(n||!i(this,t)||!i(G,t)||i(this,T)&&this[T][t])||n)},Z=function getOwnPropertyDescriptor(t,n){if(t=m(t),n=w(n,!0),t!==W||!i(G,n)||i(D,n)){var r=M(t,n);return!r||!i(G,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Q=function getOwnPropertyNames(t){for(var n,r=I(m(t)),e=[],o=0;r.length>o;)i(G,n=r[o++])||n==T||n==f||e.push(n);return e},tt=function getOwnPropertySymbols(t){for(var n,r=t===W,e=I(r?D:m(t)),o=[],u=0;e.length>u;)!i(G,n=e[u++])||r&&!i(W,n)||o.push(G[n]);return o};B||(j=function Symbol(){if(this instanceof j)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(D,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),K(this,t,S(1,r))};return o&&z&&K(W,t,{configurable:!0,set:n}),J(t)},c(j[R],"toString",function toString(){return this._k}),O.f=Z,F.f=q,t(72).f=E.f=Q,t(77).f=H,t(73).f=tt,o&&!t(58)&&c(W,"propertyIsEnumerable",H,!0),p.f=function(t){return J(v(t))}),u(u.G+u.W+u.F*!B,{Symbol:j});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)v(nt[rt++]);for(var nt=P(v.store),rt=0;nt.length>rt;)d(nt[rt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return i(U,t+="")?U[t]:U[t]=j(t)},keyFor:function keyFor(t){if(Y(t))return y(U,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!B,"Object",{create:$,defineProperty:q,defineProperties:X,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:tt}),N&&u(u.S+u.F*(!B||a(function(){var t=j();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function stringify(t){if(void 0!==t&&!Y(t)){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);return n=e[1],"function"==typeof n&&(r=n),!r&&b(n)||(n=function(t,n){if(r&&(n=r.call(this,t,n)),!Y(n))return n}),e[1]=n,k.apply(N,e)}}}),j[R][L]||t(40)(j[R],L,j[R].valueOf),l(j,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},{107:107,110:110,114:114,115:115,116:116,117:117,28:28,31:31,32:32,34:34,38:38,39:39,40:40,47:47,57:57,58:58,62:62,66:66,67:67,7:7,70:70,71:71,72:72,73:73,76:76,77:77,85:85,87:87,92:92,94:94}],244:[function(t,n,r){"use strict";var e=t(32),i=t(113),o=t(112),u=t(7),c=t(105),f=t(108),a=t(49),s=t(38).ArrayBuffer,l=t(95),h=o.ArrayBuffer,v=o.DataView,p=i.ABV&&s.isView,d=h.prototype.slice,y=i.VIEW,g="ArrayBuffer";e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,g,{isView:function isView(t){return p&&p(t)||a(t)&&y in t}}),e(e.P+e.U+e.F*t(34)(function(){return!new h(2).slice(1,void 0).byteLength}),g,{slice:function slice(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(f(i-e)),a=new v(this),s=new v(o),p=0;e<i;)s.setUint8(p++,a.getUint8(e++));return o}}),t(91)(g)},{105:105,108:108,112:112,113:113,32:32,34:34,38:38,49:49,7:7,91:91,95:95}],245:[function(t,n,r){var e=t(32);e(e.G+e.W+e.F*!t(113).ABV,{DataView:t(112).DataView})},{112:112,113:113,32:32}],246:[function(t,n,r){t(111)("Float32",4,function(t){return function Float32Array(n,r,e){return t(this,n,r,e)}})},{111:111}],247:[function(t,n,r){t(111)("Float64",8,function(t){return function Float64Array(n,r,e){return t(this,n,r,e)}})},{111:111}],248:[function(t,n,r){t(111)("Int16",2,function(t){return function Int16Array(n,r,e){return t(this,n,r,e)}})},{111:111}],249:[function(t,n,r){t(111)("Int32",4,function(t){return function Int32Array(n,r,e){return t(this,n,r,e)}})},{111:111}],250:[function(t,n,r){t(111)("Int8",1,function(t){return function Int8Array(n,r,e){return t(this,n,r,e)}})},{111:111}],251:[function(t,n,r){t(111)("Uint16",2,function(t){return function Uint16Array(n,r,e){return t(this,n,r,e)}})},{111:111}],252:[function(t,n,r){t(111)("Uint32",4,function(t){return function Uint32Array(n,r,e){return t(this,n,r,e)}})},{111:111}],253:[function(t,n,r){t(111)("Uint8",1,function(t){return function Uint8Array(n,r,e){return t(this,n,r,e)}})},{111:111}],254:[function(t,n,r){t(111)("Uint8",1,function(t){return function Uint8ClampedArray(n,r,e){return t(this,n,r,e)}},!0)},{111:111}],255:[function(t,n,r){"use strict";var e,i=t(12)(0),o=t(87),u=t(62),c=t(65),f=t(21),a=t(49),s=u.getWeak,l=Object.isExtensible,h=f.ufstore,v={},p=function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},d={get:function get(t){if(a(t)){var n=s(t);return n===!0?h(this).get(t):n?n[this._i]:void 0}},set:function set(t,n){return f.def(this,t,n)}},y=n.exports=t(22)("WeakMap",p,d,f,!0,!0);7!=(new y).set((Object.freeze||Object)(v),7).get(v)&&(e=f.getConstructor(p),c(e.prototype,d),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=y.prototype,r=n[t];o(n,t,function(n,i){if(a(n)&&!l(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},{12:12,21:21,22:22,49:49,62:62,65:65,87:87}],256:[function(t,n,r){"use strict";var e=t(21);t(22)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(this,t,!0)}},e,!1,!0)},{21:21,22:22}],257:[function(t,n,r){"use strict";var e=t(32),i=t(11)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(5)("includes")},{11:11,32:32,5:5}],258:[function(t,n,r){var e=t(32),i=t(64)(),o=t(38).process,u="process"==t(18)(o);e(e.G,{asap:function asap(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},{18:18,32:32,38:38,64:64}],259:[function(t,n,r){var e=t(32),i=t(18);e(e.S,"Error",{isError:function isError(t){return"Error"===i(t)}})},{18:18,32:32}],260:[function(t,n,r){var e=t(32);e(e.P+e.R,"Map",{toJSON:t(20)("Map")})},{20:20,32:32}],261:[function(t,n,r){var e=t(32);e(e.S,"Math",{iaddh:function iaddh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o+(e>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},{32:32}],262:[function(t,n,r){var e=t(32);e(e.S,"Math",{imulh:function imulh(t,n){var r=65535,e=+t,i=+n,o=e&r,u=i&r,c=e>>16,f=i>>16,a=(c*u>>>0)+(o*u>>>16);return c*f+(a>>16)+((o*f>>>0)+(a&r)>>16)}})},{32:32}],263:[function(t,n,r){var e=t(32);e(e.S,"Math",{isubh:function isubh(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o-(e>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},{32:32}],264:[function(t,n,r){var e=t(32);e(e.S,"Math",{umulh:function umulh(t,n){var r=65535,e=+t,i=+n,o=e&r,u=i&r,c=e>>>16,f=i>>>16,a=(c*u>>>0)+(o*u>>>16);return c*f+(a>>>16)+((o*f>>>0)+(a&r)>>>16)}})},{32:32}],265:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(3),u=t(67);t(28)&&e(e.P+t(69),"Object",{__defineGetter__:function __defineGetter__(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},{109:109,28:28,3:3,32:32,67:67,69:69}],266:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(3),u=t(67);t(28)&&e(e.P+t(69),"Object",{__defineSetter__:function __defineSetter__(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},{109:109,28:28,3:3,32:32,67:67,69:69}],267:[function(t,n,r){var e=t(32),i=t(79)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},{32:32,79:79}],268:[function(t,n,r){var e=t(32),i=t(80),o=t(107),u=t(70),c=t(24);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r=o(t),e=u.f,f=i(r),a={},s=0;f.length>s;)c(a,n=f[s++],e(r,n));return a}})},{107:107,24:24,32:32,70:70,80:80}],269:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110),u=t(74),c=t(70).f;t(28)&&e(e.P+t(69),"Object",{__lookupGetter__:function __lookupGetter__(t){var n,r=i(this),e=o(t,!0);do if(n=c(r,e))return n.get;while(r=u(r))}})},{109:109,110:110,28:28,32:32,69:69,70:70,74:74}],270:[function(t,n,r){"use strict";var e=t(32),i=t(109),o=t(110),u=t(74),c=t(70).f;t(28)&&e(e.P+t(69),"Object",{__lookupSetter__:function __lookupSetter__(t){var n,r=i(this),e=o(t,!0);do if(n=c(r,e))return n.set;while(r=u(r))}})},{109:109,110:110,28:28,32:32,69:69,70:70,74:74}],271:[function(t,n,r){var e=t(32),i=t(79)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},{32:32,79:79}],272:[function(t,n,r){"use strict";var e=t(32),i=t(38),o=t(23),u=t(64)(),c=t(117)("observable"),f=t(3),a=t(7),s=t(6),l=t(86),h=t(40),v=t(37),p=v.RETURN,d=function(t){return null==t?void 0:f(t)},y=function(t){var n=t._c;n&&(t._c=void 0,n())},g=function(t){return void 0===t._o},b=function(t){g(t)||(t._o=void 0,y(t))},x=function(t,n){a(t),this._c=void 0,this._o=t,t=new m(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:f(r),this._c=r)}catch(n){return void t.error(n)}g(this)&&y(this)};x.prototype=l({},{unsubscribe:function unsubscribe(){b(this)}});var m=function(t){this._s=t};m.prototype=l({},{next:function next(t){var n=this._s;if(!g(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{b(n)}finally{throw t}}}},error:function error(t){var n=this._s;if(g(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{y(n)}finally{throw t}}return y(n),t},complete:function complete(t){var n=this._s;if(!g(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{y(n)}finally{throw t}}return y(n),t}}});var w=function Observable(t){s(this,w,"Observable","_f")._f=f(t)};l(w.prototype,{subscribe:function subscribe(t){return new x(t,this._f)},forEach:function forEach(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){f(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),l(w,{from:function from(t){var n="function"==typeof this?this:w,r=d(a(t)[c]);if(r){var e=a(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(v(t,!1,function(t){if(n.next(t),r)return p})===p)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function of(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:w)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),h(w.prototype,c,function(){return this}),e(e.G,{Observable:w}),t(91)("Observable")},{117:117,23:23,3:3,32:32,37:37,38:38,40:40,6:6,64:64,7:7,86:86,91:91}],273:[function(t,n,r){var e=t(63),i=t(7),o=e.key,u=e.set;e.exp({defineMetadata:function defineMetadata(t,n,r,e){u(t,n,i(r),o(e))}})},{63:63,7:7}],274:[function(t,n,r){var e=t(63),i=t(7),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function deleteMetadata(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var f=c.get(n);return f.delete(r),!!f.size||c.delete(n)}})},{63:63,7:7}],275:[function(t,n,r){var e=t(220),i=t(10),o=t(63),u=t(7),c=t(74),f=o.keys,a=o.key,s=function(t,n){var r=f(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function getMetadataKeys(t){return s(u(t),arguments.length<2?void 0:a(arguments[1]))}})},{10:10,220:220,63:63,7:7,74:74}],276:[function(t,n,r){var e=t(63),i=t(7),o=t(74),u=e.has,c=e.get,f=e.key,a=function(t,n,r){var e=u(t,n,r);if(e)return c(t,n,r);var i=o(n);return null!==i?a(t,i,r):void 0};e.exp({getMetadata:function getMetadata(t,n){return a(t,i(n),arguments.length<3?void 0:f(arguments[2]))}})},{63:63,7:7,74:74}],277:[function(t,n,r){var e=t(63),i=t(7),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function getOwnMetadataKeys(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},{63:63,7:7}],278:[function(t,n,r){var e=t(63),i=t(7),o=e.get,u=e.key;e.exp({getOwnMetadata:function getOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{63:63,7:7}],279:[function(t,n,r){var e=t(63),i=t(7),o=t(74),u=e.has,c=e.key,f=function(t,n,r){var e=u(t,n,r);if(e)return!0;var i=o(n);return null!==i&&f(t,i,r)};e.exp({hasMetadata:function hasMetadata(t,n){return f(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},{63:63,7:7,74:74}],280:[function(t,n,r){var e=t(63),i=t(7),o=e.has,u=e.key;e.exp({hasOwnMetadata:function hasOwnMetadata(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},{63:63,7:7}],281:[function(t,n,r){var e=t(63),i=t(7),o=t(3),u=e.key,c=e.set;e.exp({metadata:function metadata(t,n){return function decorator(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},{3:3,63:63,7:7}],282:[function(t,n,r){var e=t(32);e(e.P+e.R,"Set",{toJSON:t(20)("Set")})},{20:20,32:32}],283:[function(t,n,r){"use strict";var e=t(32),i=t(97)(!0);e(e.P,"String",{at:function at(t){return i(this,t)}})},{32:32,97:97}],284:[function(t,n,r){"use strict";var e=t(32),i=t(27),o=t(108),u=t(50),c=t(36),f=RegExp.prototype,a=function(t,n){this._r=t,this._s=n};t(52)(a,"RegExp String",function next(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function matchAll(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in f?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new a(e,n)}})},{108:108,27:27,32:32,36:36,50:50,52:52}],285:[function(t,n,r){"use strict";var e=t(32),i=t(100);e(e.P,"String",{padEnd:function padEnd(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{100:100,32:32}],286:[function(t,n,r){"use strict";var e=t(32),i=t(100);e(e.P,"String",{padStart:function padStart(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{100:100,32:32}],287:[function(t,n,r){"use strict";t(102)("trimLeft",function(t){return function trimLeft(){return t(this,1)}},"trimStart")},{102:102}],288:[function(t,n,r){"use strict";t(102)("trimRight",function(t){return function trimRight(){return t(this,2)}},"trimEnd")},{102:102}],289:[function(t,n,r){t(115)("asyncIterator")},{115:115}],290:[function(t,n,r){t(115)("observable")},{115:115}],291:[function(t,n,r){var e=t(32);e(e.S,"System",{global:t(38)})},{32:32,38:38}],292:[function(t,n,r){for(var e=t(130),i=t(87),o=t(38),u=t(40),c=t(56),f=t(117),a=f("iterator"),s=f("toStringTag"),l=c.Array,h=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],v=0;v<5;v++){var p,d=h[v],y=o[d],g=y&&y.prototype;if(g){g[a]||u(g,a,l),g[s]||u(g,s,d),c[d]=l;for(p in e)g[p]||i(g,p,e[p],!0)}}},{117:117,130:130,38:38,40:40,56:56,87:87}],293:[function(t,n,r){var e=t(32),i=t(104);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},{104:104,32:32}],294:[function(t,n,r){var e=t(38),i=t(32),o=t(44),u=t(83),c=e.navigator,f=!!c&&/MSIE .\./.test(c.userAgent),a=function(t){return f?function(n,r){return t(o(u,[].slice.call(arguments,2),"function"==typeof n?n:Function(n)),r)}:t};i(i.G+i.B+i.F*f,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},{32:32,38:38,44:44,83:83}],295:[function(t,n,r){t(243),t(180),t(182),t(181),t(184),t(186),t(191),t(185),t(183),t(193),t(192),t(188),t(189),t(187),t(179),t(190),t(194),t(195),t(146),t(148),t(147),t(197),t(196),t(167),t(177),t(178),t(168),t(169),t(170),t(171),t(172),t(173),t(174),t(175),t(176),t(150),t(151),t(152),t(153),t(154),t(155),t(156),t(157),t(158),t(159),t(160),t(161),t(162),t(163),t(164),t(165),t(166),t(230),t(235),t(242),t(233),t(225),t(226),t(231),t(236),t(238),t(221),t(222),t(223),t(224),t(227),t(228),t(229),t(232),t(234),t(237),t(239),t(240),t(241),t(141),t(143),t(142),t(145),t(144),t(129),t(127),t(134),t(131),t(137),t(139),t(126),t(133),t(123),t(138),t(121),t(136),t(135),t(128),t(132),t(120),t(122),t(125),t(124),t(140),t(130),t(213),t(219),t(214),t(215),t(216),t(217),t(218),t(198),t(149),t(220),t(255),t(256),t(244),t(245),t(250),t(253),t(254),t(248),t(251),t(249),t(252),t(246),t(247),t(199),t(200),t(201),t(202),t(203),t(206),t(204),t(205),t(207),t(208),t(209),t(210),t(212),t(211),t(257),t(283),t(286),t(285),t(287),t(288),t(284),t(289),t(290),t(268),t(271),t(267),t(265),t(266),t(269),t(270),t(260),t(282),t(291),t(259),t(261),t(263),t(262),t(264),t(273),t(274),t(276),t(275),t(278),t(277),t(279),t(280),t(281),t(258),t(272),t(294),t(293),t(292),n.exports=t(23)},{120:120,121:121,122:122,123:123,124:124,125:125,126:126,127:127,128:128,129:129,130:130,131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,186:186,187:187,188:188,189:189,190:190,191:191,192:192,193:193,194:194,195:195,196:196,197:197,198:198,199:199,200:200,201:201,202:202,203:203,204:204,205:205,206:206,207:207,208:208,209:209,210:210,211:211,212:212,213:213,214:214,215:215,216:216,217:217,218:218,219:219,220:220,221:221,222:222,223:223,224:224,225:225,226:226,227:227,228:228,229:229,23:23,230:230,231:231,232:232,233:233,234:234,235:235,236:236,237:237,238:238,239:239,240:240,241:241,242:242,243:243,244:244,245:245,246:246,247:247,248:248,249:249,250:250,251:251,252:252,253:253,254:254,255:255,256:256,257:257,258:258,259:259,260:260,261:261,262:262,263:263,264:264,265:265,266:266,267:267,268:268,269:269,270:270,271:271,272:272,273:273,274:274,275:275,276:276,277:277,278:278,279:279,280:280,281:281,282:282,283:283,284:284,285:285,286:286,287:287,288:288,289:289,290:290,291:291,292:292,293:293,294:294}],296:[function(t,n,r){(function(t){!function(t){"use strict";function wrap(t,n,r,e){var i=n&&n.prototype instanceof Generator?n:Generator,o=Object.create(i.prototype),u=new Context(e||[]);return o._invoke=makeInvokeMethod(t,r,u),o}function tryCatch(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AsyncIterator(t){function invoke(n,r,e,o){var u=tryCatch(t[n],t,r);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&i.call(f,"__await")?Promise.resolve(f.__await).then(function(t){invoke("next",t,e,o)},function(t){invoke("throw",t,e,o)}):Promise.resolve(f).then(function(t){c.value=t,e(c)},o)}o(u.arg)}function enqueue(t,r){function callInvokeWithMethodAndArg(){return new Promise(function(n,e){invoke(t,r,n,e)})}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof process&&process.domain&&(invoke=process.domain.bind(invoke));var n;this._invoke=enqueue}function makeInvokeMethod(t,n,e){var i=s;return function invoke(o,u){if(i===h)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw u;return doneResult()}for(;;){var c=e.delegate;if(c){if("return"===o||"throw"===o&&c.iterator[o]===r){e.delegate=null;var f=c.iterator.return;if(f){var a=tryCatch(f,c.iterator,u);if("throw"===a.type){o="throw",u=a.arg;continue}}if("return"===o)continue}var a=tryCatch(c.iterator[o],c.iterator,u);if("throw"===a.type){e.delegate=null,o="throw",u=a.arg;continue}o="next",u=r;var d=a.arg;if(!d.done)return i=l,d;e[c.resultName]=d.value,e.next=c.nextLoc,e.delegate=null}if("next"===o)e.sent=e._sent=u;else if("throw"===o){if(i===s)throw i=v,u;e.dispatchException(u)&&(o="next",u=r)}else"return"===o&&e.abrupt("return",u);i=h;var a=tryCatch(t,n,e);if("normal"===a.type){i=e.done?v:l;var d={value:a.arg,done:e.done};if(a.arg!==p)return d;e.delegate&&"next"===o&&(u=r)}else"throw"===a.type&&(i=v,o="throw",u=a.arg)}}}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function next(){for(;++e<t.length;)if(i.call(t,e))return next.value=t[e],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.toStringTag||"@@toStringTag",f="object"==typeof n,a=t.regeneratorRuntime;if(a)return void(f&&(n.exports=a));a=t.regeneratorRuntime=f?n.exports:{},a.wrap=wrap;var s="suspendedStart",l="suspendedYield",h="executing",v="completed",p={},d={};d[u]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(values([])));g&&g!==e&&i.call(g,u)&&(d=g);var b=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(d);GeneratorFunction.prototype=b.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[c]=GeneratorFunction.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},a.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),a.AsyncIterator=AsyncIterator,a.async=function(t,n,r,e){var i=new AsyncIterator(wrap(t,n,r,e));return a.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},defineIteratorMethods(b),b[c]="Generator",b.toString=function(){return"[object Generator]"},a.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var r=n.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},a.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(r,e){return o.type="throw",o.arg=t,n.next=r,!!e}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r],o=e.completion;
if("root"===e.tryLoc)return handle("end");if(e.tryLoc<=this.prev){var u=i.call(e,"catchLoc"),c=i.call(e,"finallyLoc");if(u&&c){if(this.prev<e.catchLoc)return handle(e.catchLoc,!0);if(this.prev<e.finallyLoc)return handle(e.finallyLoc)}else if(u){if(this.prev<e.catchLoc)return handle(e.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<e.finallyLoc)return handle(e.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?this.next=o.finallyLoc:this.complete(u),p},complete:function(t,n){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&n&&(this.next=n)},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;resetTryEntry(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:values(t),resultName:n,nextLoc:r},p}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);

// https://github.com/d3/d3-selection-multi Version 1.0.1. Copyright 2017 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("d3-selection"),require("d3-transition")):"function"==typeof define&&define.amd?define(["d3-selection","d3-transition"],n):n(t.d3,t.d3)}(this,function(t,n){"use strict";function r(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.attr(i,n[i])})}function e(t,n){for(var r in n)t.attr(r,n[r]);return t}function i(n,r,e){return n.each(function(){var n=r.apply(this,arguments),i=t.select(this);for(var o in n)i.style(o,n[o],e)})}function o(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function f(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.property(i,n[i])})}function u(t,n){for(var r in n)t.property(r,n[r]);return t}function s(n,r){return n.each(function(){var e=r.apply(this,arguments),i=t.select(this).transition(n);for(var o in e)i.attr(o,e[o])})}function c(t,n){for(var r in n)t.attr(r,n[r]);return t}function a(n,r,e){return n.each(function(){var i=r.apply(this,arguments),o=t.select(this).transition(n);for(var f in i)o.style(f,i[f],e)})}function p(t,n,r){for(var e in n)t.style(e,n[e],r);return t}var l=function(t){return("function"==typeof t?r:e)(this,t)},y=function(t,n){return("function"==typeof t?i:o)(this,t,null==n?"":n)},h=function(t){return("function"==typeof t?f:u)(this,t)},v=function(t){return("function"==typeof t?s:c)(this,t)},d=function(t,n){return("function"==typeof t?a:p)(this,t,null==n?"":n)};t.selection.prototype.attrs=l,t.selection.prototype.styles=y,t.selection.prototype.properties=h,n.transition.prototype.attrs=v,n.transition.prototype.styles=d});
/*
  d3plus-text v0.9.17
  A smart SVG text box with line wrapping and automatic font size scaling.
  Copyright (c) 2017 D3plus - https://d3plus.org
  @license MIT
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('d3plus-text', ['exports'], factory) :
  (factory((global.d3plus = global.d3plus || {})));
}(this, (function (exports) { 'use strict';

/**
    @function textWidth
    @desc Given a text string, returns the predicted pixel width of the string when placed into DOM.
    @param {String|Array} text Can be either a single string or an array of strings to analyze.
    @param {Object} [style] An object of CSS font styles to apply. Accepts any of the valid [CSS font property](http://www.w3schools.com/cssref/pr_font_font.asp) values.
*/
var measure = function(text, style) {

  style = Object.assign({
    "font-size": 10,
    "font-family": "sans-serif",
    "font-style": "normal",
    "font-weight": 400,
    "font-variant": "normal"
  }, style);

  var context = document.createElement("canvas").getContext("2d");

  var font = [];
  font.push(style["font-style"]);
  font.push(style["font-variant"]);
  font.push(style["font-weight"]);
  font.push(typeof style["font-size"] === "string" ? style["font-size"] : ((style["font-size"]) + "px"));
  // let s = `${style["font-size"]}px`;
  // if ("line-height" in style) s += `/${style["line-height"]}px`;
  // font.push(s);
  font.push(style["font-family"]);

  context.font = font.join(" ");

  if (text instanceof Array) { return text.map(function (t) { return context.measureText(t).width; }); }
  return context.measureText(text).width;

};

var alpha = "abcdefghiABCDEFGHI_!@#$%^&*()_+1234567890";
var checked = {};
var height = 32;

var dejavu;
var macos;
var monospace;
var proportional;

/**
    @function fontExists
    @desc Given either a single font-family or a list of fonts, returns the name of the first font that can be rendered, or `false` if none are installed on the user's machine.
    @param {String|Array} font Can be either a valid CSS font-family string (single or comma-separated names) or an Array of string names.
    @return {String|Boolean} Either the name of the first font that can be rendered, or `false` if none are installed on the user's machine.
*/
var fontExists = function (font) {

  if (!dejavu) {
    dejavu = measure(alpha, {"font-family": "DejaVuSans", "font-size": height});
    macos = measure(alpha, {"font-family": "-apple-system", "font-size": height});
    monospace = measure(alpha, {"font-family": "monospace", "font-size": height});
    proportional = measure(alpha, {"font-family": "sans-serif", "font-size": height});
  }

  if (!(font instanceof Array)) { font = font.split(","); }
  font = font.map(function (f) { return f.trim(); });

  for (var i = 0; i < font.length; i++) {
    var fam = font[i];
    if (checked[fam] || ["-apple-system", "monospace", "sans-serif", "DejaVuSans"].includes(fam)) { return fam; }
    else if (checked[fam] === false) { continue; }
    var width = measure(alpha, {"font-family": fam, "font-size": height});
    checked[fam] = width !== monospace;
    if (checked[fam]) { checked[fam] = width !== proportional; }
    if (macos && checked[fam]) { checked[fam] = width !== macos; }
    if (dejavu && checked[fam]) { checked[fam] = width !== dejavu; }
    if (checked[fam]) { return fam; }
  }

  return false;

};

/**
    @function stringify
    @desc Coerces value into a String.
    @param {String} value
*/
var stringify = function(value) {
  if (value === void 0) { value = "undefined"; }
  else if (!(typeof value === "string" || value instanceof String)) { value = JSON.stringify(value); }
  return value;
};

// great unicode list: http://asecuritysite.com/coding/asc2

var diacritics = [
  [/[\300-\305]/g, "A"], [/[\340-\345]/g, "a"],
  [/[\306]/g, "AE"], [/[\346]/g, "ae"],
  [/[\337]/g, "B"],
  [/[\307]/g, "C"], [/[\347]/g, "c"],
  [/[\320\336\376]/g, "D"], [/[\360]/g, "d"],
  [/[\310-\313]/g, "E"], [/[\350-\353]/g, "e"],
  [/[\314-\317]/g, "I"], [/[\354-\357]/g, "i"],
  [/[\321]/g, "N"], [/[\361]/g, "n"],
  [/[\322-\326\330]/g, "O"], [/[\362-\366\370]/g, "o"],
  [/[\331-\334]/g, "U"], [/[\371-\374]/g, "u"],
  [/[\327]/g, "x"],
  [/[\335]/g, "Y"], [/[\375\377]/g, "y"]
];

/**
    @function strip
    @desc Removes all non ASCII characters from a string.
    @param {String} value
*/
var strip = function(value) {

  return ("" + value).replace(/[^A-Za-z0-9\-_]/g, function (char) {

    if (char === " ") { return "-"; }

    var ret = false;
    for (var d = 0; d < diacritics.length; d++) {
      if (new RegExp(diacritics[d][0]).test(char)) {
        ret = diacritics[d][1];
        break;
      }
    }

    return ret || "";

  });
};

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

var namespace = function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") { name = name.slice(i + 1); }
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
};

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

var creator = function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
};

var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

var matcher$1 = matcher;

var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element$1 = document.documentElement;
  if (!("onmouseenter" in element$1)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) { name = t.slice(i + 1), t = t.slice(0, i); }
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var this$1 = this;

    var on = this.__on;
    if (!on) { return; }
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this$1.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) { on.length = i; }
    else { delete this.__on; }
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var this$1 = this;

    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) { for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this$1.removeEventListener(o.type, o.listener, o.capture);
        this$1.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    } }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) { this.__on = [o]; }
    else { on.push(o); }
  };
}

var selection_on = function(typename, value, capture) {
  var this$1 = this;

  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) { for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    } }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) { capture = false; }
  for (i = 0; i < n; ++i) { this$1.each(on(typenames[i], value, capture)); }
  return this;
};

function none() {}

var selector = function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
};

var selection_select = function(select) {
  if (typeof select !== "function") { select = selector(select); }

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) { subnode.__data__ = node.__data__; }
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

function empty() {
  return [];
}

var selectorAll = function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
};

var selection_selectAll = function(select) {
  if (typeof select !== "function") { select = selectorAll(select); }

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
};

var selection_filter = function(match) {
  if (typeof match !== "function") { match = matcher$1(match); }

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

var sparse = function(update) {
  return new Array(update.length);
};

var selection_enter = function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
};

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

var constant = function(x) {
  return function() {
    return x;
  };
};

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

var selection_data = function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") { value = constant(value); }

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) { i1 = i0 + 1; }
        while (!(next = updateGroup[i1]) && ++i1 < dataLength){  }
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var selection_exit = function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
};

var selection_merge = function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
};

var selection_order = function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) { next.parentNode.insertBefore(node, next); }
        next = node;
      }
    }
  }

  return this;
};

var selection_sort = function(compare) {
  if (!compare) { compare = ascending; }

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
};

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

var selection_call = function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

var selection_nodes = function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
};

var selection_node = function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) { return node; }
    }
  }

  return null;
};

var selection_size = function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
};

var selection_empty = function() {
  return !this.node();
};

var selection_each = function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) { callback.call(node, node.__data__, i, group); }
    }
  }

  return this;
};

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) { this.removeAttribute(name); }
    else { this.setAttribute(name, v); }
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) { this.removeAttributeNS(fullname.space, fullname.local); }
    else { this.setAttributeNS(fullname.space, fullname.local, v); }
  };
}

var selection_attr = function(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
};

var window$1 = function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
};

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) { this.style.removeProperty(name); }
    else { this.style.setProperty(name, v, priority); }
  };
}

var selection_style = function(name, value, priority) {
  var node;
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : window$1(node = this.node())
          .getComputedStyle(node, null)
          .getPropertyValue(name);
};

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) { delete this[name]; }
    else { this[name] = v; }
  };
}

var selection_property = function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) { list.add(names[i]); }
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) { list.remove(names[i]); }
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

var selection_classed = function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) { if (!list.contains(names[i])) { return false; } }
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

var selection_text = function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

var selection_html = function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
};

function raise() {
  if (this.nextSibling) { this.parentNode.appendChild(this); }
}

var selection_raise = function() {
  return this.each(raise);
};

function lower() {
  if (this.previousSibling) { this.parentNode.insertBefore(this, this.parentNode.firstChild); }
}

var selection_lower = function() {
  return this.each(lower);
};

var selection_append = function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
};

function constantNull() {
  return null;
}

var selection_insert = function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

function remove() {
  var parent = this.parentNode;
  if (parent) { parent.removeChild(this); }
}

var selection_remove = function() {
  return this.each(remove);
};

var selection_datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
};

function dispatchEvent(node, type, params) {
  var window = window$1(node),
      event = window.CustomEvent;

  if (event) {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) { event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail; }
    else { event.initEvent(type, false, false); }
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

var selection_dispatch = function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
};

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

var select = function(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
};

var noop = {value: function() {}};

function dispatch() {
  var arguments$1 = arguments;

  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments$1[i] + "") || (t in _)) { throw new Error("illegal type: " + t); }
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames$1(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) { name = t.slice(i + 1), t = t.slice(0, i); }
    if (t && !types.hasOwnProperty(t)) { throw new Error("unknown type: " + t); }
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames$1(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) { if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) { return t; } }
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") { throw new Error("invalid callback: " + callback); }
    while (++i < n) {
      if (t = (typename = T[i]).type) { _[t] = set$1(_[t], typename.name, callback); }
      else if (callback == null) { for (t in _) { _[t] = set$1(_[t], typename.name, null); } }
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) { copy[t] = _[t].slice(); }
    return new Dispatch(copy);
  },
  call: function(type, that) {
    var arguments$1 = arguments;

    if ((n = arguments.length - 2) > 0) { for (var args = new Array(n), i = 0, n, t; i < n; ++i) { args[i] = arguments$1[i + 2]; } }
    if (!this._.hasOwnProperty(type)) { throw new Error("unknown type: " + type); }
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) { t[i].value.apply(that, args); }
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) { throw new Error("unknown type: " + type); }
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) { t[i].value.apply(that, args); }
  }
};

function get$1(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set$1(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) { type.push({name: name, value: callback}); }
  return type;
}

var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1000;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") { throw new TypeError("callback is not a function"); }
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) { taskTail._next = this; }
      else { taskHead = this; }
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) { t._call.call(null, e); }
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) { clockSkew -= delay, clockLast = now; }
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) { time = t1._time; }
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) { return; } // Soonest alarm already set, or will be.
  if (timeout) { timeout = clearTimeout(timeout); }
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) { timeout = setTimeout(wake, delay); }
    if (interval) { interval = clearInterval(interval); }
  } else {
    if (!interval) { interval = setInterval(poke, pokeDelay); }
    frame = 1, setFrame(wake);
  }
}

var timeout$1 = function(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
};

var emptyOn = dispatch("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

var schedule = function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) { node.__transition = {}; }
  else if (id in schedules) { return; }
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
};

function init(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) { throw new Error("too late"); }
  return schedule;
}

function set(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) { throw new Error("too late"); }
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) { throw new Error("too late"); }
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) { start(elapsed - self.delay); }
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) { return stop(); }

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) { continue; }

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) { return timeout$1(start); }

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) { return; } // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) { return; } // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

var interrupt = function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) { return; }

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    if (active) { schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group); }
    delete schedules[i];
  }

  if (empty) { delete node.__transition; }
};

var selection_interrupt = function(name) {
  return this.each(function() {
    interrupt(this, name);
  });
};

var define = function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) { prototype[key] = definition[key]; }
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex3 = /^#([0-9a-f]{3})$/;
var reHex6 = /^#([0-9a-f]{6})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) { r = g = b = NaN; }
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) { o = color(o); }
  if (!o) { return new Rgb; }
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) { h = s = l = NaN; }
  else if (l <= 0 || l >= 1) { h = s = NaN; }
  else if (s <= 0) { h = NaN; }
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) { return new Hsl(o.h, o.s, o.l, o.opacity); }
  if (!(o instanceof Color)) { o = color(o); }
  if (!o) { return new Hsl; }
  if (o instanceof Hsl) { return o; }
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) { h = (g - b) / s + (g < b) * 6; }
    else if (g === max) { h = (b - r) / s + 2; }
    else { h = (r - g) / s + 4; }
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

var Kn = 18;
var Xn = 0.950470;
var Yn = 1;
var Zn = 1.088830;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) { return new Lab(o.l, o.a, o.b, o.opacity); }
  if (o instanceof Hcl) {
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) { o = rgbConvert(o); }
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new Rgb(
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) { return new Hcl(o.h, o.c, o.l, o.opacity); }
  if (!(o instanceof Lab)) { o = labConvert(o); }
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));

var A = -0.14861;
var B = +1.78277;
var C = -0.29227;
var D = -0.90649;
var E = +1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) { return new Cubehelix(o.h, o.s, o.l, o.opacity); }
  if (!(o instanceof Rgb)) { o = rgbConvert(o); }
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

var constant$1 = function(x) {
  return function() {
    return x;
  };
};

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$1(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
}

var interpolateRgb = ((function rgbGamma(y) {
  var color$$1 = gamma(y);

  function rgb$$1(start, end) {
    var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
        g = color$$1(start.g, end.g),
        b = color$$1(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$$1.gamma = rgbGamma;

  return rgb$$1;
}))(1);

var interpolateNumber = function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
};

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

var interpolateString = function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) { s[i] += bs; } // coalesce with previous string
      else { s[++i] = bs; }
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) { s[i] += bm; } // coalesce with previous string
      else { s[++i] = bm; }
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) { s[i] += bs; } // coalesce with previous string
    else { s[++i] = bs; }
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) { s[(o = q[i]).i] = o.x(t); }
          return s.join("");
        });
};

var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

var decompose = function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) { a /= scaleX, b /= scaleX; }
  if (skewX = a * c + b * d) { c -= a * skewX, d -= b * skewX; }
  if (scaleY = Math.sqrt(c * c + d * d)) { c /= scaleY, d /= scaleY, skewX /= scaleY; }
  if (a * d < b * c) { a = -a, b = -b, skewX = -skewX, scaleX = -scaleX; }
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};

var cssNode;
var cssRoot;
var cssView;
var svgNode;

function parseCss(value) {
  if (value === "none") { return identity; }
  if (!cssNode) { cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView; }
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) { return identity; }
  if (!svgNode) { svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g"); }
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) { return identity; }
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) { b += 360; } else if (b - a > 180) { a += 360; } // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) { s[(o = q[i]).i] = o.x(t); }
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]

function cubehelix$1(hue$$1) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix$$1(start, end) {
      var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix$$1.gamma = cubehelixGamma;

    return cubehelix$$1;
  })(1);
}

cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") { throw new Error; }
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) { tween1.push(t); }
    }

    schedule.tween = tween1;
  };
}

var transition_tween = function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

var interpolate$$1 = function(a, b) {
  var c;
  return (typeof b === "number" ? interpolateNumber
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
};

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrFunction$1(name, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) { return void this.removeAttribute(name); }
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS$1(fullname, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) { return void this.removeAttributeNS(fullname.space, fullname.local); }
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

var transition_attr = function(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$$1;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
};

function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

var transition_attrTween = function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) { return (key = this.tween(key)) && key._value; }
  if (value == null) { return this.tween(key, null); }
  if (typeof value !== "function") { throw new Error; }
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

var transition_delay = function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
};

function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

var transition_duration = function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
};

function easeConstant(id, value) {
  if (typeof value !== "function") { throw new Error; }
  return function() {
    set(this, id).ease = value;
  };
}

var transition_ease = function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
};

var transition_filter = function(match) {
  if (typeof match !== "function") { match = matcher$1(match); }

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
};

var transition_merge = function(transition) {
  if (transition._id !== this._id) { throw new Error; }

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
};

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) { t = t.slice(0, i); }
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) { (on1 = (on0 = on).copy()).on(name, listener); }

    schedule.on = on1;
  };
}

var transition_on = function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
};

function removeFunction(id) {
  return function() {
    var this$1 = this;

    var parent = this.parentNode;
    for (var i in this$1.__transition) { if (+i !== id) { return; } }
    if (parent) { parent.removeChild(this); }
  };
}

var transition_remove = function() {
  return this.on("end.remove", removeFunction(this._id));
};

var transition_select = function(select$$1) {
  var name = this._name,
      id = this._id;

  if (typeof select$$1 !== "function") { select$$1 = selector(select$$1); }

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select$$1.call(node, node.__data__, i, group))) {
        if ("__data__" in node) { subnode.__data__ = node.__data__; }
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
};

var transition_selectAll = function(select$$1) {
  var name = this._name,
      id = this._id;

  if (typeof select$$1 !== "function") { select$$1 = selectorAll(select$$1); }

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select$$1.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
};

var Selection$1 = selection.prototype.constructor;

var transition_selection = function() {
  return new Selection$1(this._groups, this._parents);
};

function styleRemove$1(name, interpolate$$2) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var style = window$1(this).getComputedStyle(this, null),
        value0 = style.getPropertyValue(name),
        value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$2(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate$$2, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = window$1(this).getComputedStyle(this, null).getPropertyValue(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$2(value00 = value0, value1);
  };
}

function styleFunction$1(name, interpolate$$2, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var style = window$1(this).getComputedStyle(this, null),
        value0 = style.getPropertyValue(name),
        value1 = value(this);
    if (value1 == null) { value1 = (this.style.removeProperty(name), style.getPropertyValue(name)); }
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$2(value00 = value0, value10 = value1);
  };
}

var transition_style = function(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$$1;
  return value == null ? this
          .styleTween(name, styleRemove$1(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction$1(name, i, tweenValue(this, "style." + name, value))
          : styleConstant$1(name, i, value), priority);
};

function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

var transition_styleTween = function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) { return (key = this.tween(key)) && key._value; }
  if (value == null) { return this.tween(key, null); }
  if (typeof value !== "function") { throw new Error; }
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

var transition_text = function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
};

var transition_transition = function() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
};

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease
};

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}

var selection_transition = function(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
};

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var ascending$1 = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

var bisector = function(compare) {
  if (compare.length === 1) { compare = ascendingComparator(compare); }
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) { lo = 0; }
      if (hi == null) { hi = a.length; }
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) { lo = mid + 1; }
        else { hi = mid; }
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) { lo = 0; }
      if (hi == null) { hi = a.length; }
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) { hi = mid; }
        else { lo = mid + 1; }
      }
      return lo;
    }
  };
};

function ascendingComparator(f) {
  return function(d, x) {
    return ascending$1(f(d), x);
  };
}

var ascendingBisect = bisector(ascending$1);
var bisectRight = ascendingBisect.right;

var number = function(x) {
  return x === null ? NaN : +x;
};

var extent = function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b,
      c;

  if (f == null) {
    while (++i < n) { if ((b = array[i]) != null && b >= b) { a = c = b; break; } }
    while (++i < n) { if ((b = array[i]) != null) {
      if (a > b) { a = b; }
      if (c < b) { c = b; }
    } }
  }

  else {
    while (++i < n) { if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; } }
    while (++i < n) { if ((b = f(array[i], i, array)) != null) {
      if (a > b) { a = b; }
      if (c < b) { c = b; }
    } }
  }

  return [a, c];
};

var identity$1 = function(x) {
  return x;
};

var range = function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
};

var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

var ticks = function(start, stop, count) {
  var step = tickStep(start, stop, count);
  return range(
    Math.ceil(start / step) * step,
    Math.floor(stop / step) * step + step / 2, // inclusive
    step
  );
};

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) { step1 *= 10; }
  else if (error >= e5) { step1 *= 5; }
  else if (error >= e2) { step1 *= 2; }
  return stop < start ? -step1 : step1;
}

var sturges = function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
};

var quantile = function(array, p, f) {
  if (f == null) { f = number; }
  if (!(n = array.length)) { return; }
  if ((p = +p) <= 0 || n < 2) { return +f(array[0], 0, array); }
  if (p >= 1) { return +f(array[n - 1], n - 1, array); }
  var n,
      h = (n - 1) * p,
      i = Math.floor(h),
      a = +f(array[i], i, array),
      b = +f(array[i + 1], i + 1, array);
  return a + (b - a) * (h - i);
};

var max = function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b;

  if (f == null) {
    while (++i < n) { if ((b = array[i]) != null && b >= b) { a = b; break; } }
    while (++i < n) { if ((b = array[i]) != null && b > a) { a = b; } }
  }

  else {
    while (++i < n) { if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; } }
    while (++i < n) { if ((b = f(array[i], i, array)) != null && b > a) { a = b; } }
  }

  return a;
};

var merge = function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) { j += arrays[i].length; }
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
};

var min = function(array, f) {
  var i = -1,
      n = array.length,
      a,
      b;

  if (f == null) {
    while (++i < n) { if ((b = array[i]) != null && b >= b) { a = b; break; } }
    while (++i < n) { if ((b = array[i]) != null && a > b) { a = b; } }
  }

  else {
    while (++i < n) { if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; } }
    while (++i < n) { if ((b = f(array[i], i, array)) != null && a > b) { a = b; } }
  }

  return a;
};

var sum = function(array, f) {
  var s = 0,
      n = array.length,
      a,
      i = -1;

  if (f == null) {
    while (++i < n) { if (a = +array[i]) { s += a; } } // Note: zero and null are equivalent.
  }

  else {
    while (++i < n) { if (a = +f(array[i], i, array)) { s += a; } }
  }

  return s;
};

function length(d) {
  return d.length;
}

/**
    @function accessor
    @desc Wraps an object key in a simple accessor function.
    @param {String} key The key to be returned from each Object passed to the function.
    @param {*} [def] A default value to be returned if the key is not present.
    @example <caption>this</caption>
accessor("id");
    @example <caption>returns this</caption>
function(d) {
  return d["id"];
}
*/
var accessor = function(key, def) {
  if (def === void 0) { return function (d) { return d[key]; }; }
  return function (d) { return d[key] === void 0 ? def : d[key]; };
};

/**
    @function isObject
    @desc Detects if a variable is a javascript Object.
    @param {*} item
*/
var isObject = function(item) {
  return item && typeof item === "object" && !Array.isArray(item) && item !== void 0 ? true : false;
};

/**
    @function assign
    @desc A deeply recursive version of `Object.assign`.
    @param {...Object} objects
    @example <caption>this</caption>
assign({id: "foo", deep: {group: "A"}}, {id: "bar", deep: {value: 20}}));
    @example <caption>returns this</caption>
{id: "bar", group: "A", value: 20}
*/
function assign() {
  var objects = [], len = arguments.length;
  while ( len-- ) objects[ len ] = arguments[ len ];


  var target = objects[0];
  var loop = function ( i ) {

    var source = objects[i];

    Object.keys(source).forEach(function (prop) {

      var value = source[prop];

      if (isObject(value)) {

        if (target.hasOwnProperty(prop) && isObject(target[prop])) { target[prop] = assign(target[prop], value); }
        else { target[prop] = value; }

      }
      else if (Array.isArray(value)) {

        if (target.hasOwnProperty(prop) && Array.isArray(target[prop])) {

          var targetArray = target[prop];

          value.forEach(function (sourceItem, itemIndex) {

            if (itemIndex < targetArray.length) {
              var targetItem = targetArray[itemIndex];

              if (Object.is(targetItem, sourceItem)) { return; }

              if (isObject(targetItem) && isObject(sourceItem) || Array.isArray(targetItem) && Array.isArray(sourceItem)) {
                targetArray[itemIndex] = assign(targetItem, sourceItem);
              }
              else { targetArray[itemIndex] = sourceItem; }

            }
            else { targetArray.push(sourceItem); }

          });
        }
        else { target[prop] = value; }

      }
      else { target[prop] = value; }

    });
  };

  for (var i = 1; i < objects.length; i++) loop( i );

  return target;

}

/**
    @function attrize
    @desc Applies each key/value in an object as an attr.
    @param {D3selection} elem The D3 element to apply the styles to.
    @param {Object} attrs An object of key/value attr pairs.
*/

/**
    @function s
    @desc Returns 4 random characters, used for constructing unique identifiers.
    @private
*/
function s() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


/**
    @class BaseClass
    @desc An abstract class that contains some global methods and functionality.
*/
var BaseClass = function BaseClass() {
  this._on = {};
  this._uuid = "" + (s()) + (s()) + "-" + (s()) + "-" + (s()) + "-" + (s()) + "-" + (s()) + (s()) + (s());
};

/**
    @memberof BaseClass
    @desc If *value* is specified, sets the methods that correspond to the key/value pairs and returns this class. If *value* is not specified, returns the current configuration.
    @param {Object} [*value*]
    @chainable
*/
BaseClass.prototype.config = function config (_) {
    var this$1 = this;

  if (arguments.length) {
    for (var k in _) { if ({}.hasOwnProperty.call(_, k) && k in this$1) { this$1[k](_[k]); } }
    return this;
  }
  else {
    var config = {};
    for (var k$1 in this$1.__proto__) { if (k$1.indexOf("_") !== 0 && !["config", "constructor", "render"].includes(k$1)) { config[k$1] = this$1[k$1](); } }
    return config;
  }
};

/**
    @memberof BaseClass
    @desc Adds or removes a *listener* to each object for the specified event *typenames*. If a *listener* is not specified, returns the currently assigned listener for the specified event *typename*. Mirrors the core [d3-selection](https://github.com/d3/d3-selection#selection_on) behavior.
    @param {String} [*typenames*]
    @param {Function} [*listener*]
    @chainable
    @example <caption>By default, listeners apply globally to all objects, however, passing a namespace with the class name gives control over specific elements:</caption>
new Plot
.on("click.Shape", function(d) {
  console.log("data for shape clicked:", d);
})
.on("click.Legend", function(d) {
  console.log("data for legend clicked:", d);
})
*/
BaseClass.prototype.on = function on (_, f) {
  return arguments.length === 2 ? (this._on[_] = f, this) : arguments.length ? typeof _ === "string" ? this._on[_] : (this._on = Object.assign({}, this._on, _), this) : this._on;
};

/**
    @function closest
    @desc Finds the closest numeric value in an array.
    @param {Number} n The number value to use when searching the array.
    @param {Array} arr The array of values to test against.
*/

/**
    @function constant
    @desc Wraps non-function variables in a simple return function.
    @param {Array|Number|Object|String} value The value to be returned from the function.
    @example <caption>this</caption>
constant(42);
    @example <caption>returns this</caption>
function() {
  return 42;
}
*/
var constant$3 = function(value) {
  return function constant() {
    return value;
  };
};

/**
    @function elem
    @desc Manages the enter/update/exit pattern for a single DOM element.
    @param {String} selector A D3 selector, which must include the tagname and a class and/or ID.
    @param {Object} params Additional parameters.
    @param {Boolean} [params.condition = true] Whether or not the element should be rendered (or removed).
    @param {Object} [params.enter = {}] A collection of key/value pairs that map to attributes to be given on enter.
    @param {Object} [params.exit = {}] A collection of key/value pairs that map to attributes to be given on exit.
    @param {D3Selection} [params.parent = d3.select("body")] The parent element for this new element to be appended to.
    @param {D3Transition} [params.transition = d3.transition().duration(0)] The transition to use when animated the different life cycle stages.
    @param {Object} [params.update = {}] A collection of key/value pairs that map to attributes to be given on update.
*/

var _extends$1 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var consoleLogger = {
  type: 'logger',

  log: function log(args) {
    this._output('log', args);
  },
  warn: function warn(args) {
    this._output('warn', args);
  },
  error: function error(args) {
    this._output('error', args);
  },
  _output: function _output(type, args) {
    if (console && console[type]) { console[type].apply(console, Array.prototype.slice.call(args)); }
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$1(this, Logger);

    this.init(concreteLogger, options);
  }

  Logger.prototype.init = function init(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.prefix = options.prefix || 'i18next:';
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug === false ? false : true;
  };

  Logger.prototype.setDebug = function setDebug(bool) {
    this.debug = bool;
  };

  Logger.prototype.log = function log() {
    this.forward(arguments, 'log', '', true);
  };

  Logger.prototype.warn = function warn() {
    this.forward(arguments, 'warn', '', true);
  };

  Logger.prototype.error = function error() {
    this.forward(arguments, 'error', '');
  };

  Logger.prototype.deprecate = function deprecate() {
    this.forward(arguments, 'warn', 'WARNING DEPRECATED: ', true);
  };

  Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) { return; }
    if (typeof args[0] === 'string') { args[0] = prefix + this.prefix + ' ' + args[0]; }
    this.logger[lvl](args);
  };

  Logger.prototype.create = function create(moduleName) {
    var sub = new Logger(this.logger, _extends$1({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));

    return sub;
  };

  // createInstance(options = {}) {
  //   return new Logger(options, callback);
  // }

  return Logger;
}();



var baseLogger = new Logger();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck$2(this, EventEmitter);

    this.observers = {};
  }

  EventEmitter.prototype.on = function on(events, listener) {
    var _this = this;

    events.split(' ').forEach(function (event) {
      _this.observers[event] = _this.observers[event] || [];
      _this.observers[event].push(listener);
    });
  };

  EventEmitter.prototype.off = function off(event, listener) {
    var _this2 = this;

    if (!this.observers[event]) {
      return;
    }

    this.observers[event].forEach(function () {
      if (!listener) {
        delete _this2.observers[event];
      } else {
        var index = _this2.observers[event].indexOf(listener);
        if (index > -1) {
          _this2.observers[event].splice(index, 1);
        }
      }
    });
  };

  EventEmitter.prototype.emit = function emit(event) {
    var arguments$1 = arguments;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments$1[_key];
    }

    if (this.observers[event]) {
      var cloned = [].concat(this.observers[event]);
      cloned.forEach(function (observer) {
        observer.apply(undefined, args);
      });
    }

    if (this.observers['*']) {
      var _cloned = [].concat(this.observers['*']);
      _cloned.forEach(function (observer) {
        var _ref;

        observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
      });
    }
  };

  return EventEmitter;
}();

function makeString(object) {
  if (object == null) { return ''; }
  return '' + object;
}

function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) { t[m] = s[m]; }
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (!object) { return {}; }

    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) { object[key] = new Empty(); }
    object = object[key];
  }

  if (!object) { return {}; }
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}

function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) { obj[k] = obj[k].concat(newValue); }
  if (!concat) { obj[k].push(newValue); }
}

function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) { return undefined; }
  return obj[k];
}

function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) { target[prop] = source[prop]; }
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }return target;
}

function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

/* eslint-disable */
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  } else {
    return data;
  }
}

var _extends$2 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defaults$1(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults$1(subClass, superClass); } }

var ResourceStore = function (_EventEmitter) {
  _inherits$1(ResourceStore, _EventEmitter);

  function ResourceStore() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ns: ['translation'], defaultNS: 'translation' };

    _classCallCheck$3(this, ResourceStore);

    var _this = _possibleConstructorReturn$1(this, _EventEmitter.call(this));

    _this.data = data;
    _this.options = options;
    return _this;
  }

  ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  };

  ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
    var index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  };

  ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var keySeparator = options.keySeparator || this.options.keySeparator;
    if (keySeparator === undefined) { keySeparator = '.'; }

    var path = [lng, ns];
    if (key && typeof key !== 'string') { path = path.concat(key); }
    if (key && typeof key === 'string') { path = path.concat(keySeparator ? key.split(keySeparator) : key); }

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
    }

    return getPath(this.data, path);
  };

  ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { silent: false };

    var keySeparator = this.options.keySeparator;
    if (keySeparator === undefined) { keySeparator = '.'; }

    var path = [lng, ns];
    if (key) { path = path.concat(keySeparator ? key.split(keySeparator) : key); }

    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      value = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    setPath(this.data, path, value);

    if (!options.silent) { this.emit('added', lng, ns, key, value); }
  };

  ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
    var this$1 = this;

    for (var m in resources) {
      if (typeof resources[m] === 'string') { this$1.addResource(lng, ns, m, resources[m], { silent: true }); }
    }
    this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
    var path = [lng, ns];
    if (lng.indexOf('.') > -1) {
      path = lng.split('.');
      deep = resources;
      resources = ns;
      ns = path[1];
    }

    this.addNamespaces(ns);

    var pack = getPath(this.data, path) || {};

    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = _extends$2({}, pack, resources);
    }

    setPath(this.data, path, pack);

    this.emit('added', lng, ns, resources);
  };

  ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);

    this.emit('removed', lng, ns);
  };

  ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== undefined;
  };

  ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
    if (!ns) { ns = this.options.defaultNS; }

    // TODO: COMPATIBILITY remove extend in v2.1.0
    if (this.options.compatibilityAPI === 'v1') { return _extends$2({}, this.getResource(lng, ns)); }

    return this.getResource(lng, ns);
  };

  ResourceStore.prototype.toJSON = function toJSON() {
    return this.data;
  };

  return ResourceStore;
}(EventEmitter);

var postProcessor = {

  processors: {},

  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) { value = _this.processors[processor].process(value, key, options, translator); }
    });

    return value;
  }
};

function convertInterpolation(options) {

  options.interpolation = {
    unescapeSuffix: 'HTML'
  };

  options.interpolation.prefix = options.interpolationPrefix || '__';
  options.interpolation.suffix = options.interpolationSuffix || '__';
  options.interpolation.escapeValue = options.escapeInterpolation || false;

  options.interpolation.nestingPrefix = options.reusePrefix || '$t(';
  options.interpolation.nestingSuffix = options.reuseSuffix || ')';

  return options;
}

function convertAPIOptions(options) {
  if (options.resStore) { options.resources = options.resStore; }

  if (options.ns && options.ns.defaultNs) {
    options.defaultNS = options.ns.defaultNs;
    options.ns = options.ns.namespaces;
  } else {
    options.defaultNS = options.ns || 'translation';
  }

  if (options.fallbackToDefaultNS && options.defaultNS) { options.fallbackNS = options.defaultNS; }

  options.saveMissing = options.sendMissing;
  options.saveMissingTo = options.sendMissingTo || 'current';
  options.returnNull = options.fallbackOnNull ? false : true;
  options.returnEmptyString = options.fallbackOnEmpty ? false : true;
  options.returnObjects = options.returnObjectTrees;
  options.joinArrays = '\n';

  options.returnedObjectHandler = options.objectTreeKeyHandler;
  options.parseMissingKeyHandler = options.parseMissingKey;
  options.appendNamespaceToMissingKey = true;

  options.nsSeparator = options.nsseparator;
  options.keySeparator = options.keyseparator;

  if (options.shortcutFunction === 'sprintf') {
    options.overloadTranslationOptionHandler = function (args) {
      var values = [];

      for (var i = 1; i < args.length; i++) {
        values.push(args[i]);
      }

      return {
        postProcess: 'sprintf',
        sprintf: values
      };
    };
  }

  options.whitelist = options.lngWhitelist;
  options.preload = options.preload;
  if (options.load === 'current') { options.load = 'currentOnly'; }
  if (options.load === 'unspecific') { options.load = 'languageOnly'; }

  // backend
  options.backend = options.backend || {};
  options.backend.loadPath = options.resGetPath || 'locales/__lng__/__ns__.json';
  options.backend.addPath = options.resPostPath || 'locales/add/__lng__/__ns__';
  options.backend.allowMultiLoading = options.dynamicLoad;

  // cache
  options.cache = options.cache || {};
  options.cache.prefix = 'res_';
  options.cache.expirationTime = 7 * 24 * 60 * 60 * 1000;
  options.cache.enabled = options.useLocalStorage ? true : false;

  options = convertInterpolation(options);
  if (options.defaultVariables) { options.interpolation.defaultVariables = options.defaultVariables; }

  // TODO: deprecation
  // if (options.getAsync === false) throw deprecation error

  return options;
}

function convertJSONOptions(options) {
  options = convertInterpolation(options);
  options.joinArrays = '\n';

  return options;
}

function convertTOptions(options) {
  if (options.interpolationPrefix || options.interpolationSuffix || options.escapeInterpolation) {
    options = convertInterpolation(options);
  }

  options.nsSeparator = options.nsseparator;
  options.keySeparator = options.keyseparator;

  options.returnObjects = options.returnObjectTrees;

  return options;
}

function appendBackwardsAPI(i18n) {
  i18n.lng = function () {
    baseLogger.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.');
    return i18n.services.languageUtils.toResolveHierarchy(i18n.language)[0];
  };

  i18n.preload = function (lngs, cb) {
    baseLogger.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()');
    i18n.loadLanguages(lngs, cb);
  };

  i18n.setLng = function (lng, options, callback) {
    baseLogger.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.');
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) { options = {}; }

    if (options.fixLng === true) {
      if (callback) { return callback(null, i18n.getFixedT(lng)); }
    }

    i18n.changeLanguage(lng, callback);
  };

  i18n.addPostProcessor = function (name, fc) {
    baseLogger.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })');
    i18n.use({
      type: 'postProcessor',
      name: name,
      process: fc
    });
  };
}

var _extends$3 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defaults$2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults$2(subClass, superClass); } }

var Translator = function (_EventEmitter) {
  _inherits$2(Translator, _EventEmitter);

  function Translator(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$4(this, Translator);

    var _this = _possibleConstructorReturn$2(this, _EventEmitter.call(this));

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], services, _this);

    _this.options = options;
    _this.logger = baseLogger.create('translator');
    return _this;
  }

  Translator.prototype.changeLanguage = function changeLanguage(lng) {
    if (lng) { this.language = lng; }
  };

  Translator.prototype.exists = function exists(key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { interpolation: {} };

    if (this.options.compatibilityAPI === 'v1') {
      options = convertTOptions(options);
    }

    return this.resolve(key, options) !== undefined;
  };

  Translator.prototype.extractFromKey = function extractFromKey(key, options) {
    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
    if (nsSeparator === undefined) { nsSeparator = ':'; }

    var namespaces = options.ns || this.options.defaultNS;
    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
      var parts = key.split(nsSeparator);
      namespaces = parts[0];
      key = parts[1];
    }
    if (typeof namespaces === 'string') { namespaces = [namespaces]; }

    return {
      key: key,
      namespaces: namespaces
    };
  };

  Translator.prototype.translate = function translate(keys) {
    var this$1 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if ((typeof options === 'undefined' ? 'undefined' : _typeof$1(options)) !== 'object') {
      options = this.options.overloadTranslationOptionHandler(arguments);
    } else if (this.options.compatibilityAPI === 'v1') {
      options = convertTOptions(options);
    }

    // non valid keys handling
    if (keys === undefined || keys === null || keys === '') { return ''; }
    if (typeof keys === 'number') { keys = String(keys); }
    if (typeof keys === 'string') { keys = [keys]; }

    // separators
    var keySeparator = options.keySeparator || this.options.keySeparator || '.';

    // get namespace(s)

    var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
        key = _extractFromKey.key,
        namespaces = _extractFromKey.namespaces;

    var namespace = namespaces[namespaces.length - 1];

    // return key on CIMode
    var lng = options.lng || this.language;
    var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === 'cimode') {
      if (appendNamespaceToCIMode) {
        var nsSeparator = options.nsSeparator || this.options.nsSeparator;
        return namespace + nsSeparator + key;
      }

      return key;
    }

    // resolve from store
    var res = this.resolve(keys, options);

    var resType = Object.prototype.toString.apply(res);
    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

    // object
    if (res && typeof res !== 'string' && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
      if (!options.returnObjects && !this.options.returnObjects) {
        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(key, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
      }

      var copy$$1 = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

      for (var m in res) {
        copy$$1[m] = this$1.translate('' + key + keySeparator + m, _extends$3({ joinArrays: false, ns: namespaces }, options));
      }
      res = copy$$1;
    }
    // array special treatment
    else if (joinArrays && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) { res = this.extendTranslation(res, key, options); }
      }
      // string, empty or null
      else {
          var usedDefault = false,
              usedKey = false;

          // fallback value
          if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
            usedDefault = true;
            res = options.defaultValue;
          }
          if (!this.isValidLookup(res)) {
            usedKey = true;
            res = key;
          }

          // save missing
          if (usedKey || usedDefault) {
            this.logger.log('missingKey', lng, namespace, key, res);

            var lngs = [];
            var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
            if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
              for (var i = 0; i < fallbackLngs.length; i++) {
                lngs.push(fallbackLngs[i]);
              }
            } else if (this.options.saveMissingTo === 'all') {
              lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
            } else {
              //(this.options.saveMissingTo === 'current' || (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng[0] === false) ) {
              lngs.push(options.lng || this.language);
            }

            if (this.options.saveMissing) {
              if (this.options.missingKeyHandler) {
                this.options.missingKeyHandler(lngs, namespace, key, res);
              } else if (this.backendConnector && this.backendConnector.saveMissing) {
                this.backendConnector.saveMissing(lngs, namespace, key, res);
              }
            }

            this.emit('missingKey', lngs, namespace, key, res);
          }

          // extend
          res = this.extendTranslation(res, key, options);

          // append namespace if still key
          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) { res = namespace + ':' + key; }

          // parseMissingKeyHandler
          if (usedKey && this.options.parseMissingKeyHandler) { res = this.options.parseMissingKeyHandler(res); }
        }

    // return
    return res;
  };

  Translator.prototype.extendTranslation = function extendTranslation(res, key, options) {
    var _this2 = this;

    if (options.interpolation) { this.interpolator.init(_extends$3({}, options, { interpolation: _extends$3({}, this.options.interpolation, options.interpolation) })); }

    // interpolate
    var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
    if (this.options.interpolation.defaultVariables) { data = _extends$3({}, this.options.interpolation.defaultVariables, data); }
    res = this.interpolator.interpolate(res, data, this.language);

    // nesting
    res = this.interpolator.nest(res, function () {
      var arguments$1 = arguments;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }

      return _this2.translate.apply(_this2, args);
    }, options);

    if (options.interpolation) { this.interpolator.reset(); }

    // post process
    var postProcess = options.postProcess || this.options.postProcess;
    var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

    if (res !== undefined && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, options, this);
    }

    return res;
  };

  Translator.prototype.resolve = function resolve(keys) {
    var _this3 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var found = void 0;

    if (typeof keys === 'string') { keys = [keys]; }

    // forEach possible key
    keys.forEach(function (k) {
      if (_this3.isValidLookup(found)) { return; }

      var _extractFromKey2 = _this3.extractFromKey(k, options),
          key = _extractFromKey2.key,
          namespaces = _extractFromKey2.namespaces;

      if (_this3.options.fallbackNS) { namespaces = namespaces.concat(_this3.options.fallbackNS); }

      var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
      var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

      var codes = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);

      namespaces.forEach(function (ns) {
        if (_this3.isValidLookup(found)) { return; }

        codes.forEach(function (code) {
          if (_this3.isValidLookup(found)) { return; }

          var finalKey = key;
          var finalKeys = [finalKey];

          var pluralSuffix = void 0;
          if (needsPluralHandling) { pluralSuffix = _this3.pluralResolver.getSuffix(code, options.count); }

          // fallback for plural if context not found
          if (needsPluralHandling && needsContextHandling) { finalKeys.push(finalKey + pluralSuffix); }

          // get key for context if needed
          if (needsContextHandling) { finalKeys.push(finalKey += '' + _this3.options.contextSeparator + options.context); }

          // get key for plural if needed
          if (needsPluralHandling) { finalKeys.push(finalKey += pluralSuffix); }

          // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
          var possibleKey = void 0;
          while (possibleKey = finalKeys.pop()) {
            if (_this3.isValidLookup(found)) { continue; }
            found = _this3.getResource(code, ns, possibleKey, options);
          }
        });
      });
    });

    return found;
  };

  Translator.prototype.isValidLookup = function isValidLookup(res) {
    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
  };

  Translator.prototype.getResource = function getResource(code, ns, key) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    return this.resourceStore.getResource(code, ns, key, options);
  };

  return Translator;
}(EventEmitter);

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck$5(this, LanguageUtil);

    this.options = options;

    this.whitelist = this.options.whitelist || false;
    this.logger = baseLogger.create('languageUtils');
  }

  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
    if (code.indexOf('-') < 0) { return code; }

    var specialCases = ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'];
    var p = code.split('-');
    return this.formatLanguageCode(specialCases.indexOf(code) > -1 ? p[1].toLowerCase() : p[0]);
  };

  LanguageUtil.prototype.getScriptPartFromCode = function getScriptPartFromCode(code) {
    if (code.indexOf('-') < 0) { return null; }

    var p = code.split('-');
    if (p.length === 2) { return null; }
    p.pop();
    return this.formatLanguageCode(p.join('-'));
  };

  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
    if (code.indexOf('-') < 0) { return code; }

    var specialCases = ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'];
    var p = code.split('-');
    return this.formatLanguageCode(specialCases.indexOf(code) > -1 ? p[1].toLowerCase() : p[0]);
  };

  LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
    if (typeof code === 'string' && code.indexOf('-') > -1) {
      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      var p = code.split('-');

      if (this.options.lowerCaseLng) {
        p = p.map(function (part) {
          return part.toLowerCase();
        });
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) { p[1] = capitalize(p[1].toLowerCase()); }
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();

        // if lenght 2 guess it's a country
        if (p[1].length === 2) { p[1] = p[1].toUpperCase(); }
        if (p[0] !== 'sgn' && p[2].length === 2) { p[2] = p[2].toUpperCase(); }

        if (specialCases.indexOf(p[1].toLowerCase()) > -1) { p[1] = capitalize(p[1].toLowerCase()); }
        if (specialCases.indexOf(p[2].toLowerCase()) > -1) { p[2] = capitalize(p[2].toLowerCase()); }
      }

      return p.join('-');
    } else {
      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  };

  LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code, exactMatch) {
    if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist && !exactMatch) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1 ? true : false;
  };

  LanguageUtil.prototype.getFallbackCodes = function getFallbackCodes(fallbacks, code) {
    if (!fallbacks) { return []; }
    if (typeof fallbacks === 'string') { fallbacks = [fallbacks]; }
    if (Object.prototype.toString.apply(fallbacks) === '[object Array]') { return fallbacks; }

    // asume we have an object defining fallbacks
    var found = fallbacks[code];
    if (!found) { found = fallbacks[this.getScriptPartFromCode(code)]; }
    if (!found) { found = fallbacks[this.formatLanguageCode(code)]; }
    if (!found) { found = fallbacks.default; }

    return found || [];
  };

  LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
    var _this = this;

    var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);

    var codes = [];
    var addCode = function addCode(code) {
      var exactMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!code) { return; }
      if (_this.isWhitelisted(code, exactMatch)) {
        codes.push(code);
      } else {
        _this.logger.warn('rejecting non-whitelisted language code: ' + code);
      }
    };

    if (typeof code === 'string' && code.indexOf('-') > -1) {
      if (this.options.load !== 'languageOnly') { addCode(this.formatLanguageCode(code), true); }
      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') { addCode(this.getScriptPartFromCode(code), true); }
      if (this.options.load !== 'currentOnly') { addCode(this.getLanguagePartFromCode(code)); }
    } else if (typeof code === 'string') {
      addCode(this.formatLanguageCode(code));
    }

    fallbackCodes.forEach(function (fc) {
      if (codes.indexOf(fc) < 0) { addCode(_this.formatLanguageCode(fc)); }
    });

    return codes;
  };

  return LanguageUtil;
}();

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
/* eslint-disable */
var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  }
};
/* eslint-enable */

function createRules() {
  var l,
      rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      return rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$6(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;

    this.logger = baseLogger.create('pluralResolver');

    this.rules = createRules();
  }

  PluralResolver.prototype.addRule = function addRule(lng, obj) {
    this.rules[lng] = obj;
  };

  PluralResolver.prototype.getRule = function getRule(code) {
    return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  };

  PluralResolver.prototype.needsPlural = function needsPlural(code) {
    var rule = this.getRule(code);

    return rule && rule.numbers.length <= 1 ? false : true;
  };

  PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
    var _this = this;

    var rule = this.getRule(code);

    if (rule) {
      var _ret = function () {
        if (rule.numbers.length === 1) { return {
            v: ''
          }; } // only singular

        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx];

        // special treatment for lngs only having singular and plural
        if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this.options.prepend && suffix.toString() ? _this.options.prepend + suffix.toString() : suffix.toString();
        };

        // COMPATIBILITY JSON
        // v1
        if (_this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) { return {
              v: ''
            }; }
          if (typeof suffix === 'number') { return {
              v: '_plural_' + suffix.toString()
            }; }
          return {
            v: returnSuffix()
          };
        }
        // v2
        else if (_this.options.compatibilityJSON === 'v2' || rule.numbers.length === 2 && rule.numbers[0] === 1) {
            return {
              v: returnSuffix()
            };
          }
          // v3 - gettext index
          else if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
              return {
                v: returnSuffix()
              };
            }
        return {
          v: _this.options.prepend && idx.toString() ? _this.options.prepend + idx.toString() : idx.toString()
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof$2(_ret)) === "object") { return _ret.v; }
    } else {
      this.logger.warn('no plural rule found for: ' + code);
      return '';
    }
  };

  return PluralResolver;
}();

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck$7(this, Interpolator);

    this.logger = baseLogger.create('interpolator');

    this.init(options, true);
  }

  Interpolator.prototype.init = function init() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var reset = arguments[1];

    if (reset) {
      this.options = options;
      this.format = options.interpolation && options.interpolation.format || function (value) {
        return value;
      };
      this.escape = options.interpolation && options.interpolation.escape || escape;
    }
    if (!options.interpolation) { options.interpolation = { escapeValue: true }; }

    var iOpts = options.interpolation;

    this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;

    this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
    this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
    this.formatSeparator = iOpts.formatSeparator ? regexEscape(iOpts.formatSeparator) : iOpts.formatSeparator || ',';

    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

    this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
    this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');

    // the regexp
    this.resetRegExp();
  };

  Interpolator.prototype.reset = function reset() {
    if (this.options) { this.init(this.options); }
  };

  Interpolator.prototype.resetRegExp = function resetRegExp() {
    // the regexp
    var regexpStr = this.prefix + '(.+?)' + this.suffix;
    this.regexp = new RegExp(regexpStr, 'g');

    var regexpUnescapeStr = this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

    var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
  };

  Interpolator.prototype.interpolate = function interpolate(str, data, lng) {
    var this$1 = this;

    var _this = this;

    var match = void 0,
        value = void 0;

    function regexSafe(val) {
      return val.replace(/\$/g, '$$$$');
    }

    var handleFormat = function handleFormat(key) {
      if (key.indexOf(_this.formatSeparator) < 0) { return getPath(data, key); }

      var p = key.split(_this.formatSeparator);
      var k = p.shift().trim();
      var f = p.join(_this.formatSeparator).trim();

      return _this.format(getPath(data, k), f, lng);
    };

    this.resetRegExp();

    // unescape if has unescapePrefix/Suffix
    while (match = this.regexpUnescape.exec(str)) {
      var _value = handleFormat(match[1].trim());
      str = str.replace(match[0], _value);
      this$1.regexpUnescape.lastIndex = 0;
    }

    // regular escape on demand
    while (match = this.regexp.exec(str)) {
      value = handleFormat(match[1].trim());
      if (typeof value !== 'string') { value = makeString(value); }
      if (!value) {
        this$1.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
        value = '';
      }
      value = this$1.escapeValue ? regexSafe(this$1.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this$1.regexp.lastIndex = 0;
    }
    return str;
  };

  Interpolator.prototype.nest = function nest(str, fc) {
    var this$1 = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var match = void 0,
        value = void 0;

    var clonedOptions = JSON.parse(JSON.stringify(options));
    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

    function handleHasOptions(key) {
      if (key.indexOf(',') < 0) { return key; }

      var p = key.split(',');
      key = p.shift();
      var optionsString = p.join(',');
      optionsString = this.interpolate(optionsString, clonedOptions);
      optionsString = optionsString.replace(/'/g, '"');

      try {
        clonedOptions = JSON.parse(optionsString);
      } catch (e) {
        this.logger.error('failed parsing options string in nesting for key ' + key, e);
      }

      return key;
    }

    // regular escape on demand
    while (match = this.nestingRegexp.exec(str)) {
      value = fc(handleHasOptions.call(this$1, match[1].trim()), clonedOptions);
      if (typeof value !== 'string') { value = makeString(value); }
      if (!value) {
        this$1.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
        value = '';
      }
      // Nested keys should not be escaped by default #854
      // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
      str = str.replace(match[0], value);
      this$1.regexp.lastIndex = 0;
    }
    return str;
  };

  return Interpolator;
}();

var _extends$4 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break; } } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) { _i["return"](); } } finally { if (_d) { throw _e; } } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defaults$3(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults$3(subClass, superClass); } }

function remove$1(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector = function (_EventEmitter) {
  _inherits$3(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck$8(this, Connector);

    var _this = _possibleConstructorReturn$3(this, _EventEmitter.call(this));

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');

    _this.state = {};
    _this.queue = [];

    _this.backend && _this.backend.init && _this.backend.init(services, options.backend, options);
    return _this;
  }

  Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
    var _this2 = this;

    // find what needs to be loaded
    var toLoad = [],
        pending = [],
        toLoadLanguages = [],
        toLoadNamespaces = [];

    languages.forEach(function (lng) {
      var hasAllNamespaces = true;

      namespaces.forEach(function (ns) {
        var name = lng + '|' + ns;

        if (_this2.store.hasResourceBundle(lng, ns)) {
          _this2.state[name] = 2; // loaded
        } else if (_this2.state[name] < 0) {
          // nothing to do for err
        } else if (_this2.state[name] === 1) {
          if (pending.indexOf(name) < 0) { pending.push(name); }
        } else {
          _this2.state[name] = 1; // pending

          hasAllNamespaces = false;

          if (pending.indexOf(name) < 0) { pending.push(name); }
          if (toLoad.indexOf(name) < 0) { toLoad.push(name); }
          if (toLoadNamespaces.indexOf(ns) < 0) { toLoadNamespaces.push(ns); }
        }
      });

      if (!hasAllNamespaces) { toLoadLanguages.push(lng); }
    });

    if (toLoad.length || pending.length) {
      this.queue.push({
        pending: pending,
        loaded: {},
        errors: [],
        callback: callback
      });
    }

    return {
      toLoad: toLoad,
      pending: pending,
      toLoadLanguages: toLoadLanguages,
      toLoadNamespaces: toLoadNamespaces
    };
  };

  Connector.prototype.loaded = function loaded(name, err, data) {
    var _this3 = this;

    var _name$split = name.split('|'),
        _name$split2 = _slicedToArray(_name$split, 2),
        lng = _name$split2[0],
        ns = _name$split2[1];

    if (err) { this.emit('failedLoading', lng, ns, err); }

    if (data) {
      this.store.addResourceBundle(lng, ns, data);
    }

    // set loaded
    this.state[name] = err ? -1 : 2;
    // callback if ready
    this.queue.forEach(function (q) {
      pushPath(q.loaded, [lng], ns);
      remove$1(q.pending, name);

      if (err) { q.errors.push(err); }

      if (q.pending.length === 0 && !q.done) {
        _this3.emit('loaded', q.loaded);
        q.errors.length ? q.callback(q.errors) : q.callback();
        q.done = true;
      }
    });

    // remove done load requests
    this.queue = this.queue.filter(function (q) {
      return !q.done;
    });
  };

  Connector.prototype.read = function read(lng, ns, fcName, tried, wait, callback) {
    var _this4 = this;

    if (!tried) { tried = 0; }
    if (!wait) { wait = 250; }

    if (!lng.length) { return callback(null, {}); } // noting to load

    this.backend[fcName](lng, ns, function (err, data) {
      if (err && data /* = retryFlag */ && tried < 5) {
        setTimeout(function () {
          _this4.read.call(_this4, lng, ns, fcName, ++tried, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    });
  };

  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this5 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
      return callback && callback();
    }
    var options = _extends$4({}, this.backend.options, this.options.backend);

    if (typeof languages === 'string') { languages = this.services.languageUtils.toResolveHierarchy(languages); }
    if (typeof namespaces === 'string') { namespaces = [namespaces]; }

    var toLoad = this.queueLoad(languages, namespaces, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) { callback(); } // nothing to load and no pendings...callback now
      return; // pendings will trigger callback
    }

    // load with multi-load
    if (options.allowMultiLoading && this.backend.readMulti) {
      this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, 'readMulti', null, null, function (err, data) {
        if (err) { _this5.logger.warn('loading namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading failed', err); }
        if (!err && data) { _this5.logger.log('loaded namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading', data); }

        toLoad.toLoad.forEach(function (name) {
          var _name$split3 = name.split('|'),
              _name$split4 = _slicedToArray(_name$split3, 2),
              l = _name$split4[0],
              n = _name$split4[1];

          var bundle = getPath(data, [l, n]);
          if (bundle) {
            _this5.loaded(name, err, bundle);
          } else {
            var _err = 'loading namespace ' + n + ' for language ' + l + ' via multiloading failed';
            _this5.loaded(name, _err);
            _this5.logger.error(_err);
          }
        });
      });
    }

    // load one by one
    else {
        (function () {
          var readOne = function readOne(name) {
            var _this6 = this;

            var _name$split5 = name.split('|'),
                _name$split6 = _slicedToArray(_name$split5, 2),
                lng = _name$split6[0],
                ns = _name$split6[1];

            this.read(lng, ns, 'read', null, null, function (err, data) {
              if (err) { _this6.logger.warn('loading namespace ' + ns + ' for language ' + lng + ' failed', err); }
              if (!err && data) { _this6.logger.log('loaded namespace ' + ns + ' for language ' + lng, data); }

              _this6.loaded(name, err, data);
            });
          };



          toLoad.toLoad.forEach(function (name) {
            readOne.call(_this5, name);
          });
        })();
      }
  };

  Connector.prototype.reload = function reload(languages, namespaces) {
    var _this7 = this;

    if (!this.backend) {
      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
    }
    var options = _extends$4({}, this.backend.options, this.options.backend);

    if (typeof languages === 'string') { languages = this.services.languageUtils.toResolveHierarchy(languages); }
    if (typeof namespaces === 'string') { namespaces = [namespaces]; }

    // load with multi-load
    if (options.allowMultiLoading && this.backend.readMulti) {
      this.read(languages, namespaces, 'readMulti', null, null, function (err, data) {
        if (err) { _this7.logger.warn('reloading namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading failed', err); }
        if (!err && data) { _this7.logger.log('reloaded namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading', data); }

        languages.forEach(function (l) {
          namespaces.forEach(function (n) {
            var bundle = getPath(data, [l, n]);
            if (bundle) {
              _this7.loaded(l + '|' + n, err, bundle);
            } else {
              var _err2 = 'reloading namespace ' + n + ' for language ' + l + ' via multiloading failed';
              _this7.loaded(l + '|' + n, _err2);
              _this7.logger.error(_err2);
            }
          });
        });
      });
    }

    // load one by one
    else {
        (function () {
          var readOne = function readOne(name) {
            var _this8 = this;

            var _name$split7 = name.split('|'),
                _name$split8 = _slicedToArray(_name$split7, 2),
                lng = _name$split8[0],
                ns = _name$split8[1];

            this.read(lng, ns, 'read', null, null, function (err, data) {
              if (err) { _this8.logger.warn('reloading namespace ' + ns + ' for language ' + lng + ' failed', err); }
              if (!err && data) { _this8.logger.log('reloaded namespace ' + ns + ' for language ' + lng, data); }

              _this8.loaded(name, err, data);
            });
          };



          languages.forEach(function (l) {
            namespaces.forEach(function (n) {
              readOne.call(_this7, l + '|' + n);
            });
          });
        })();
      }
  };

  Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue) {
    if (this.backend && this.backend.create) { this.backend.create(languages, namespace, key, fallbackValue); }

    // write to store to avoid resending
    if (!languages || !languages[0]) { return; }
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  };

  return Connector;
}(EventEmitter);

var _extends$5 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defaults$4(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults$4(subClass, superClass); } }

var Connector$1 = function (_EventEmitter) {
  _inherits$4(Connector, _EventEmitter);

  function Connector(cache, store, services) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck$9(this, Connector);

    var _this = _possibleConstructorReturn$4(this, _EventEmitter.call(this));

    _this.cache = cache;
    _this.store = store;
    _this.services = services;
    _this.options = options;
    _this.logger = baseLogger.create('cacheConnector');

    _this.cache && _this.cache.init && _this.cache.init(services, options.cache, options);
    return _this;
  }

  Connector.prototype.load = function load(languages, namespaces, callback) {
    var _this2 = this;

    if (!this.cache) { return callback && callback(); }
    var options = _extends$5({}, this.cache.options, this.options.cache);

    if (typeof languages === 'string') { languages = this.services.languageUtils.toResolveHierarchy(languages); }
    if (typeof namespaces === 'string') { namespaces = [namespaces]; }

    if (options.enabled) {
      this.cache.load(languages, function (err, data) {
        if (err) { _this2.logger.error('loading languages ' + languages.join(', ') + ' from cache failed', err); }
        if (data) {
          for (var l in data) {
            for (var n in data[l]) {
              if (n === 'i18nStamp') { continue; }
              var bundle = data[l][n];
              if (bundle) { _this2.store.addResourceBundle(l, n, bundle); }
            }
          }
        }
        if (callback) { callback(); }
      });
    } else {
      if (callback) { callback(); }
    }
  };

  Connector.prototype.save = function save() {
    if (this.cache && this.options.cache && this.options.cache.enabled) { this.cache.save(this.store.data); }
  };

  return Connector;
}(EventEmitter);

function get$2() {
  return {
    debug: false,
    initImmediate: true,

    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false, // string or array of namespaces

    whitelist: false, // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all', // | currentOnly | languageOnly
    preload: false, // array with preload languages

    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',

    saveMissing: false, // enable to send missing values
    saveMissingTo: 'fallback', // 'current' || 'all'
    missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

    postProcess: false, // string or array of postProcessor names
    returnNull: true, // allows null value as valid translation
    returnEmptyString: true, // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false, // or string to join array
    returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
      return { defaultValue: args[1] };
    },

    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',

      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
    }
  };
}

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') { options.ns = [options.ns]; }
  if (typeof options.fallbackLng === 'string') { options.fallbackLng = [options.fallbackLng]; }
  if (typeof options.fallbackNS === 'string') { options.fallbackNS = [options.fallbackNS]; }

  // extend whitelist with cimode
  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) { options.whitelist.push('cimode'); }

  return options;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } }

function noop$1() {}

var I18n = function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  function I18n() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    _classCallCheck(this, I18n);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {};

    if (callback && !_this.isInitialized && !options.isClone) { _this.init(options, callback); }
    return _this;
  }

  I18n.prototype.init = function init(options, callback) {
    var _this2 = this;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) { options = {}; }

    if (options.compatibilityAPI === 'v1') {
      this.options = _extends({}, get$2(), transformOptions(convertAPIOptions(options)), {});
    } else if (options.compatibilityJSON === 'v1') {
      this.options = _extends({}, get$2(), transformOptions(convertJSONOptions(options)), {});
    } else {
      this.options = _extends({}, get$2(), this.options, transformOptions(options));
    }
    if (!callback) { callback = noop$1; }

    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject) { return; }
      if (typeof ClassOrObject === 'function') { return new ClassOrObject(); }
      return ClassOrObject;
    }

    // init services
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }

      var lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);

      var s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.resourceStore.on('added removed', function (lng, ns) {
        s.cacheConnector.save();
      });
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON });
      s.interpolator = new Interpolator(this.options);

      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.backendConnector.on('*', function (event) {
        var arguments$1 = arguments;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments$1[_key];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      s.backendConnector.on('loaded', function (loaded) {
        s.cacheConnector.save();
      });

      s.cacheConnector = new Connector$1(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
      // pipe events from backendConnector
      s.cacheConnector.on('*', function (event) {
        var arguments$1 = arguments;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments$1[_key2];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });

      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        s.languageDetector.init(s, this.options.detection, this.options);
      }

      this.translator = new Translator(this.services, this.options);
      // pipe events from translator
      this.translator.on('*', function (event) {
        var arguments$1 = arguments;

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments$1[_key3];
        }

        _this2.emit.apply(_this2, [event].concat(args));
      });
    }

    // append api
    var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'];
    storeApi.forEach(function (fcName) {
      _this2[fcName] = function () {
        return this.store[fcName].apply(this.store, arguments);
      };
    });

    // TODO: COMPATIBILITY remove this
    if (this.options.compatibilityAPI === 'v1') { appendBackwardsAPI(this); }

    var load = function load() {
      _this2.changeLanguage(_this2.options.lng, function (err, t) {
        _this2.isInitialized = true;
        _this2.logger.log('initialized', _this2.options);
        _this2.emit('initialized', _this2.options);

        callback(err, t);
      });
    };

    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }

    return this;
  };

  I18n.prototype.loadResources = function loadResources() {
    var _this3 = this;

    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop$1;

    if (!this.options.resources) {
      var _ret = function () {
        if (_this3.language && _this3.language.toLowerCase() === 'cimode') { return {
            v: callback()
          }; } // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) { toLoad.push(l); }
          });
        };

        append(_this3.language);

        if (_this3.options.preload) {
          _this3.options.preload.forEach(function (l) {
            append(l);
          });
        }

        _this3.services.cacheConnector.load(toLoad, _this3.options.ns, function () {
          _this3.services.backendConnector.load(toLoad, _this3.options.ns, callback);
        });
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") { return _ret.v; }
    } else {
      callback(null);
    }
  };

  I18n.prototype.reloadResources = function reloadResources(lngs, ns) {
    if (!lngs) { lngs = this.languages; }
    if (!ns) { ns = this.options.ns; }
    this.services.backendConnector.reload(lngs, ns);
  };

  I18n.prototype.use = function use(module) {
    if (module.type === 'backend') {
      this.modules.backend = module;
    }

    if (module.type === 'cache') {
      this.modules.cache = module;
    }

    if (module.type === 'logger' || module.log && module.warn && module.warn) {
      this.modules.logger = module;
    }

    if (module.type === 'languageDetector') {
      this.modules.languageDetector = module;
    }

    if (module.type === 'postProcessor') {
      postProcessor.addPostProcessor(module);
    }

    return this;
  };

  I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
    var _this4 = this;

    var done = function done(err) {
      if (lng) {
        _this4.emit('languageChanged', lng);
        _this4.logger.log('languageChanged', lng);
      }

      if (callback) { callback(err, function () {
        var arguments$1 = arguments;

        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments$1[_key4];
        }

        return _this4.t.apply(_this4, args);
      }); }
    };

    if (!lng && this.services.languageDetector) { lng = this.services.languageDetector.detect(); }

    if (lng) {
      this.language = lng;
      this.languages = this.services.languageUtils.toResolveHierarchy(lng);

      this.translator.changeLanguage(lng);

      if (this.services.languageDetector) { this.services.languageDetector.cacheUserLanguage(lng); }
    }

    this.loadResources(function (err) {
      done(err);
    });
  };

  I18n.prototype.getFixedT = function getFixedT(lng, ns) {
    var _this5 = this;

    var fixedT = function fixedT(key) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _extends({}, opts);
      options.lng = options.lng || fixedT.lng;
      options.ns = options.ns || fixedT.ns;
      return _this5.t(key, options);
    };
    fixedT.lng = lng;
    fixedT.ns = ns;
    return fixedT;
  };

  I18n.prototype.t = function t() {
    return this.translator && this.translator.translate.apply(this.translator, arguments);
  };

  I18n.prototype.exists = function exists() {
    return this.translator && this.translator.exists.apply(this.translator, arguments);
  };

  I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  };

  I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
    var _this6 = this;

    if (!this.options.ns) { return callback && callback(); }
    if (typeof ns === 'string') { ns = [ns]; }

    ns.forEach(function (n) {
      if (_this6.options.ns.indexOf(n) < 0) { _this6.options.ns.push(n); }
    });

    this.loadResources(callback);
  };

  I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
    if (typeof lngs === 'string') { lngs = [lngs]; }
    var preloaded = this.options.preload || [];

    var newLngs = lngs.filter(function (lng) {
      return preloaded.indexOf(lng) < 0;
    });
    // Exit early if all given languages are already preloaded
    if (!newLngs.length) { return callback(); }

    this.options.preload = preloaded.concat(newLngs);
    this.loadResources(callback);
  };

  I18n.prototype.dir = function dir(lng) {
    if (!lng) { lng = this.language; }
    if (!lng) { return 'rtl'; }

    var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

    return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
  };

  I18n.prototype.createInstance = function createInstance() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments[1];

    return new I18n(options, callback);
  };

  I18n.prototype.cloneInstance = function cloneInstance() {
    var _this7 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop$1;

    var mergedOptions = _extends({}, options, this.options, { isClone: true });
    var clone = new I18n(mergedOptions, callback);
    var membersToCopy = ['store', 'services', 'language'];
    membersToCopy.forEach(function (m) {
      clone[m] = _this7[m];
    });
    clone.translator = new Translator(clone.services, clone.options);
    clone.translator.on('*', function (event) {
      var arguments$1 = arguments;

      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments$1[_key5];
      }

      clone.emit.apply(clone, [event].concat(args));
    });
    clone.init(mergedOptions, callback);

    return clone;
  };

  return I18n;
}(EventEmitter);

var i18next$1 = new I18n();

var Back = "Back";
var Total = "Total";
var array$2 = {"lowercase":["a","an","and","as","at","but","by","for","from","if","in","into","near","nor","of","on","onto","or","per","that","the","to","with","via","vs","vs."],"uppercase":["CEO","CFO","CNC","COO","CPU","GDP","HVAC","ID","IT","R&D","TV","UI"]};
var enUS = {
  Back: Back,
  Total: Total,
  array: array$2
};

var Back$1 = "Atrás";
var Total$1 = "Total";
var array$3 = {"lowercase":["una","y","en","pero","en","de","o","el","la","los","las","para","a","con"],"uppercase":["CEO","CFO","CNC","COO","CPU","PIB","HVAC","ID","TI","I&D","TV","UI"]};
var esES = {
  Back: Back$1,
  Total: Total$1,
  array: array$3
};

var locale = i18next$1.init({
  fallbackLng: "en-US",
  initImmediate: false,
  resources: {
    "en-US": {translation: enUS},
    "es-ES": {translation: esES}
  }
});

var prefix = "$";

function Map() {}

Map.prototype = map$1.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    var this$1 = this;

    for (var property in this$1) { if (property[0] === prefix) { delete this$1[property]; } }
  },
  keys: function() {
    var this$1 = this;

    var keys = [];
    for (var property in this$1) { if (property[0] === prefix) { keys.push(property.slice(1)); } }
    return keys;
  },
  values: function() {
    var this$1 = this;

    var values = [];
    for (var property in this$1) { if (property[0] === prefix) { values.push(this$1[property]); } }
    return values;
  },
  entries: function() {
    var this$1 = this;

    var entries = [];
    for (var property in this$1) { if (property[0] === prefix) { entries.push({key: property.slice(1), value: this$1[property]}); } }
    return entries;
  },
  size: function() {
    var this$1 = this;

    var size = 0;
    for (var property in this$1) { if (property[0] === prefix) { ++size; } }
    return size;
  },
  empty: function() {
    var this$1 = this;

    for (var property in this$1) { if (property[0] === prefix) { return false; } }
    return true;
  },
  each: function(f) {
    var this$1 = this;

    for (var property in this$1) { if (property[0] === prefix) { f(this$1[property], property.slice(1), this$1); } }
  }
};

function map$1(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) { object.each(function(value, key) { map.set(key, value); }); }

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) { while (++i < n) { map.set(i, object[i]); } }
    else { while (++i < n) { map.set(f(o = object[i], i, object), o); } }
  }

  // Convert object to map.
  else if (object) { for (var key in object) { map.set(key, object[key]); } }

  return map;
}

function Set$1() {}

var proto = map$1.prototype;

Set$1.prototype = set$2.prototype = {
  constructor: Set$1,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set$2(object, f) {
  var set = new Set$1;

  // Copy constructor.
  if (object instanceof Set$1) { object.each(function(value) { set.add(value); }); }

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) { while (++i < n) { set.add(object[i]); } }
    else { while (++i < n) { set.add(f(object[i], i, object)); } }
  }

  return set;
}

/**
    @function prefix
    @desc Returns the appropriate CSS vendor prefix, given the current browser.
*/

/**
    @function stylize
    @desc Applies each key/value in an object as a style.
    @param {D3selection} elem The D3 element to apply the styles to.
    @param {Object} styles An object of key/value style pairs.
*/

// scraped from http://www.fileformat.info/info/unicode/category/Mc/list.htm
// and http://www.fileformat.info/info/unicode/category/Mn/list.htm
// JSON.stringify([].slice.call(document.getElementsByClassName("table-list")[0].getElementsByTagName("tr")).filter(function(d){ return d.getElementsByTagName("a").length && d.getElementsByTagName("a")[0].innerHTML.length === 6; }).map(function(d){ return d.getElementsByTagName("a")[0].innerHTML.replace("U", "u").replace("+", ""); }).sort());
var a = ["u0903", "u093B", "u093E", "u093F", "u0940", "u0949", "u094A", "u094B", "u094C", "u094E", "u094F", "u0982", "u0983", "u09BE", "u09BF", "u09C0", "u09C7", "u09C8", "u09CB", "u09CC", "u09D7", "u0A03", "u0A3E", "u0A3F", "u0A40", "u0A83", "u0ABE", "u0ABF", "u0AC0", "u0AC9", "u0ACB", "u0ACC", "u0B02", "u0B03", "u0B3E", "u0B40", "u0B47", "u0B48", "u0B4B", "u0B4C", "u0B57", "u0BBE", "u0BBF", "u0BC1", "u0BC2", "u0BC6", "u0BC7", "u0BC8", "u0BCA", "u0BCB", "u0BCC", "u0BD7", "u0C01", "u0C02", "u0C03", "u0C41", "u0C42", "u0C43", "u0C44", "u0C82", "u0C83", "u0CBE", "u0CC0", "u0CC1", "u0CC2", "u0CC3", "u0CC4", "u0CC7", "u0CC8", "u0CCA", "u0CCB", "u0CD5", "u0CD6", "u0D02", "u0D03", "u0D3E", "u0D3F", "u0D40", "u0D46", "u0D47", "u0D48", "u0D4A", "u0D4B", "u0D4C", "u0D57", "u0D82", "u0D83", "u0DCF", "u0DD0", "u0DD1", "u0DD8", "u0DD9", "u0DDA", "u0DDB", "u0DDC", "u0DDD", "u0DDE", "u0DDF", "u0DF2", "u0DF3", "u0F3E", "u0F3F", "u0F7F", "u102B", "u102C", "u1031", "u1038", "u103B", "u103C", "u1056", "u1057", "u1062", "u1063", "u1064", "u1067", "u1068", "u1069", "u106A", "u106B", "u106C", "u106D", "u1083", "u1084", "u1087", "u1088", "u1089", "u108A", "u108B", "u108C", "u108F", "u109A", "u109B", "u109C", "u17B6", "u17BE", "u17BF", "u17C0", "u17C1", "u17C2", "u17C3", "u17C4", "u17C5", "u17C7", "u17C8", "u1923", "u1924", "u1925", "u1926", "u1929", "u192A", "u192B", "u1930", "u1931", "u1933", "u1934", "u1935", "u1936", "u1937", "u1938", "u1A19", "u1A1A", "u1A55", "u1A57", "u1A61", "u1A63", "u1A64", "u1A6D", "u1A6E", "u1A6F", "u1A70", "u1A71", "u1A72", "u1B04", "u1B35", "u1B3B", "u1B3D", "u1B3E", "u1B3F", "u1B40", "u1B41", "u1B43", "u1B44", "u1B82", "u1BA1", "u1BA6", "u1BA7", "u1BAA", "u1BE7", "u1BEA", "u1BEB", "u1BEC", "u1BEE", "u1BF2", "u1BF3", "u1C24", "u1C25", "u1C26", "u1C27", "u1C28", "u1C29", "u1C2A", "u1C2B", "u1C34", "u1C35", "u1CE1", "u1CF2", "u1CF3", "u302E", "u302F", "uA823", "uA824", "uA827", "uA880", "uA881", "uA8B4", "uA8B5", "uA8B6", "uA8B7", "uA8B8", "uA8B9", "uA8BA", "uA8BB", "uA8BC", "uA8BD", "uA8BE", "uA8BF", "uA8C0", "uA8C1", "uA8C2", "uA8C3", "uA952", "uA953", "uA983", "uA9B4", "uA9B5", "uA9BA", "uA9BB", "uA9BD", "uA9BE", "uA9BF", "uA9C0", "uAA2F", "uAA30", "uAA33", "uAA34", "uAA4D", "uAA7B", "uAA7D", "uAAEB", "uAAEE", "uAAEF", "uAAF5", "uABE3", "uABE4", "uABE6", "uABE7", "uABE9", "uABEA", "uABEC"];
var b = ["u0300", "u0301", "u0302", "u0303", "u0304", "u0305", "u0306", "u0307", "u0308", "u0309", "u030A", "u030B", "u030C", "u030D", "u030E", "u030F", "u0310", "u0311", "u0312", "u0313", "u0314", "u0315", "u0316", "u0317", "u0318", "u0319", "u031A", "u031B", "u031C", "u031D", "u031E", "u031F", "u0320", "u0321", "u0322", "u0323", "u0324", "u0325", "u0326", "u0327", "u0328", "u0329", "u032A", "u032B", "u032C", "u032D", "u032E", "u032F", "u0330", "u0331", "u0332", "u0333", "u0334", "u0335", "u0336", "u0337", "u0338", "u0339", "u033A", "u033B", "u033C", "u033D", "u033E", "u033F", "u0340", "u0341", "u0342", "u0343", "u0344", "u0345", "u0346", "u0347", "u0348", "u0349", "u034A", "u034B", "u034C", "u034D", "u034E", "u034F", "u0350", "u0351", "u0352", "u0353", "u0354", "u0355", "u0356", "u0357", "u0358", "u0359", "u035A", "u035B", "u035C", "u035D", "u035E", "u035F", "u0360", "u0361", "u0362", "u0363", "u0364", "u0365", "u0366", "u0367", "u0368", "u0369", "u036A", "u036B", "u036C", "u036D", "u036E", "u036F", "u0483", "u0484", "u0485", "u0486", "u0487", "u0591", "u0592", "u0593", "u0594", "u0595", "u0596", "u0597", "u0598", "u0599", "u059A", "u059B", "u059C", "u059D", "u059E", "u059F", "u05A0", "u05A1", "u05A2", "u05A3", "u05A4", "u05A5", "u05A6", "u05A7", "u05A8", "u05A9", "u05AA", "u05AB", "u05AC", "u05AD", "u05AE", "u05AF", "u05B0", "u05B1", "u05B2", "u05B3", "u05B4", "u05B5", "u05B6", "u05B7", "u05B8", "u05B9", "u05BA", "u05BB", "u05BC", "u05BD", "u05BF", "u05C1", "u05C2", "u05C4", "u05C5", "u05C7", "u0610", "u0611", "u0612", "u0613", "u0614", "u0615", "u0616", "u0617", "u0618", "u0619", "u061A", "u064B", "u064C", "u064D", "u064E", "u064F", "u0650", "u0651", "u0652", "u0653", "u0654", "u0655", "u0656", "u0657", "u0658", "u0659", "u065A", "u065B", "u065C", "u065D", "u065E", "u065F", "u0670", "u06D6", "u06D7", "u06D8", "u06D9", "u06DA", "u06DB", "u06DC", "u06DF", "u06E0", "u06E1", "u06E2", "u06E3", "u06E4", "u06E7", "u06E8", "u06EA", "u06EB", "u06EC", "u06ED", "u0711", "u0730", "u0731", "u0732", "u0733", "u0734", "u0735", "u0736", "u0737", "u0738", "u0739", "u073A", "u073B", "u073C", "u073D", "u073E", "u073F", "u0740", "u0741", "u0742", "u0743", "u0744", "u0745", "u0746", "u0747", "u0748", "u0749", "u074A", "u07A6", "u07A7", "u07A8", "u07A9", "u07AA", "u07AB", "u07AC", "u07AD", "u07AE", "u07AF", "u07B0", "u07EB", "u07EC", "u07ED", "u07EE", "u07EF", "u07F0", "u07F1", "u07F2", "u07F3", "u0816", "u0817", "u0818", "u0819", "u081B", "u081C", "u081D", "u081E", "u081F", "u0820", "u0821", "u0822", "u0823", "u0825", "u0826", "u0827", "u0829", "u082A", "u082B", "u082C", "u082D", "u0859", "u085A", "u085B", "u08E3", "u08E4", "u08E5", "u08E6", "u08E7", "u08E8", "u08E9", "u08EA", "u08EB", "u08EC", "u08ED", "u08EE", "u08EF", "u08F0", "u08F1", "u08F2", "u08F3", "u08F4", "u08F5", "u08F6", "u08F7", "u08F8", "u08F9", "u08FA", "u08FB", "u08FC", "u08FD", "u08FE", "u08FF", "u0900", "u0901", "u0902", "u093A", "u093C", "u0941", "u0942", "u0943", "u0944", "u0945", "u0946", "u0947", "u0948", "u094D", "u0951", "u0952", "u0953", "u0954", "u0955", "u0956", "u0957", "u0962", "u0963", "u0981", "u09BC", "u09C1", "u09C2", "u09C3", "u09C4", "u09CD", "u09E2", "u09E3", "u0A01", "u0A02", "u0A3C", "u0A41", "u0A42", "u0A47", "u0A48", "u0A4B", "u0A4C", "u0A4D", "u0A51", "u0A70", "u0A71", "u0A75", "u0A81", "u0A82", "u0ABC", "u0AC1", "u0AC2", "u0AC3", "u0AC4", "u0AC5", "u0AC7", "u0AC8", "u0ACD", "u0AE2", "u0AE3", "u0B01", "u0B3C", "u0B3F", "u0B41", "u0B42", "u0B43", "u0B44", "u0B4D", "u0B56", "u0B62", "u0B63", "u0B82", "u0BC0", "u0BCD", "u0C00", "u0C3E", "u0C3F", "u0C40", "u0C46", "u0C47", "u0C48", "u0C4A", "u0C4B", "u0C4C", "u0C4D", "u0C55", "u0C56", "u0C62", "u0C63", "u0C81", "u0CBC", "u0CBF", "u0CC6", "u0CCC", "u0CCD", "u0CE2", "u0CE3", "u0D01", "u0D41", "u0D42", "u0D43", "u0D44", "u0D4D", "u0D62", "u0D63", "u0DCA", "u0DD2", "u0DD3", "u0DD4", "u0DD6", "u0E31", "u0E34", "u0E35", "u0E36", "u0E37", "u0E38", "u0E39", "u0E3A", "u0E47", "u0E48", "u0E49", "u0E4A", "u0E4B", "u0E4C", "u0E4D", "u0E4E", "u0EB1", "u0EB4", "u0EB5", "u0EB6", "u0EB7", "u0EB8", "u0EB9", "u0EBB", "u0EBC", "u0EC8", "u0EC9", "u0ECA", "u0ECB", "u0ECC", "u0ECD", "u0F18", "u0F19", "u0F35", "u0F37", "u0F39", "u0F71", "u0F72", "u0F73", "u0F74", "u0F75", "u0F76", "u0F77", "u0F78", "u0F79", "u0F7A", "u0F7B", "u0F7C", "u0F7D", "u0F7E", "u0F80", "u0F81", "u0F82", "u0F83", "u0F84", "u0F86", "u0F87", "u0F8D", "u0F8E", "u0F8F", "u0F90", "u0F91", "u0F92", "u0F93", "u0F94", "u0F95", "u0F96", "u0F97", "u0F99", "u0F9A", "u0F9B", "u0F9C", "u0F9D", "u0F9E", "u0F9F", "u0FA0", "u0FA1", "u0FA2", "u0FA3", "u0FA4", "u0FA5", "u0FA6", "u0FA7", "u0FA8", "u0FA9", "u0FAA", "u0FAB", "u0FAC", "u0FAD", "u0FAE", "u0FAF", "u0FB0", "u0FB1", "u0FB2", "u0FB3", "u0FB4", "u0FB5", "u0FB6", "u0FB7", "u0FB8", "u0FB9", "u0FBA", "u0FBB", "u0FBC", "u0FC6", "u102D", "u102E", "u102F", "u1030", "u1032", "u1033", "u1034", "u1035", "u1036", "u1037", "u1039", "u103A", "u103D", "u103E", "u1058", "u1059", "u105E", "u105F", "u1060", "u1071", "u1072", "u1073", "u1074", "u1082", "u1085", "u1086", "u108D", "u109D", "u135D", "u135E", "u135F", "u1712", "u1713", "u1714", "u1732", "u1733", "u1734", "u1752", "u1753", "u1772", "u1773", "u17B4", "u17B5", "u17B7", "u17B8", "u17B9", "u17BA", "u17BB", "u17BC", "u17BD", "u17C6", "u17C9", "u17CA", "u17CB", "u17CC", "u17CD", "u17CE", "u17CF", "u17D0", "u17D1", "u17D2", "u17D3", "u17DD", "u180B", "u180C", "u180D", "u18A9", "u1920", "u1921", "u1922", "u1927", "u1928", "u1932", "u1939", "u193A", "u193B", "u1A17", "u1A18", "u1A1B", "u1A56", "u1A58", "u1A59", "u1A5A", "u1A5B", "u1A5C", "u1A5D", "u1A5E", "u1A60", "u1A62", "u1A65", "u1A66", "u1A67", "u1A68", "u1A69", "u1A6A", "u1A6B", "u1A6C", "u1A73", "u1A74", "u1A75", "u1A76", "u1A77", "u1A78", "u1A79", "u1A7A", "u1A7B", "u1A7C", "u1A7F", "u1AB0", "u1AB1", "u1AB2", "u1AB3", "u1AB4", "u1AB5", "u1AB6", "u1AB7", "u1AB8", "u1AB9", "u1ABA", "u1ABB", "u1ABC", "u1ABD", "u1B00", "u1B01", "u1B02", "u1B03", "u1B34", "u1B36", "u1B37", "u1B38", "u1B39", "u1B3A", "u1B3C", "u1B42", "u1B6B", "u1B6C", "u1B6D", "u1B6E", "u1B6F", "u1B70", "u1B71", "u1B72", "u1B73", "u1B80", "u1B81", "u1BA2", "u1BA3", "u1BA4", "u1BA5", "u1BA8", "u1BA9", "u1BAB", "u1BAC", "u1BAD", "u1BE6", "u1BE8", "u1BE9", "u1BED", "u1BEF", "u1BF0", "u1BF1", "u1C2C", "u1C2D", "u1C2E", "u1C2F", "u1C30", "u1C31", "u1C32", "u1C33", "u1C36", "u1C37", "u1CD0", "u1CD1", "u1CD2", "u1CD4", "u1CD5", "u1CD6", "u1CD7", "u1CD8", "u1CD9", "u1CDA", "u1CDB", "u1CDC", "u1CDD", "u1CDE", "u1CDF", "u1CE0", "u1CE2", "u1CE3", "u1CE4", "u1CE5", "u1CE6", "u1CE7", "u1CE8", "u1CED", "u1CF4", "u1CF8", "u1CF9", "u1DC0", "u1DC1", "u1DC2", "u1DC3", "u1DC4", "u1DC5", "u1DC6", "u1DC7", "u1DC8", "u1DC9", "u1DCA", "u1DCB", "u1DCC", "u1DCD", "u1DCE", "u1DCF", "u1DD0", "u1DD1", "u1DD2", "u1DD3", "u1DD4", "u1DD5", "u1DD6", "u1DD7", "u1DD8", "u1DD9", "u1DDA", "u1DDB", "u1DDC", "u1DDD", "u1DDE", "u1DDF", "u1DE0", "u1DE1", "u1DE2", "u1DE3", "u1DE4", "u1DE5", "u1DE6", "u1DE7", "u1DE8", "u1DE9", "u1DEA", "u1DEB", "u1DEC", "u1DED", "u1DEE", "u1DEF", "u1DF0", "u1DF1", "u1DF2", "u1DF3", "u1DF4", "u1DF5", "u1DFC", "u1DFD", "u1DFE", "u1DFF", "u20D0", "u20D1", "u20D2", "u20D3", "u20D4", "u20D5", "u20D6", "u20D7", "u20D8", "u20D9", "u20DA", "u20DB", "u20DC", "u20E1", "u20E5", "u20E6", "u20E7", "u20E8", "u20E9", "u20EA", "u20EB", "u20EC", "u20ED", "u20EE", "u20EF", "u20F0", "u2CEF", "u2CF0", "u2CF1", "u2D7F", "u2DE0", "u2DE1", "u2DE2", "u2DE3", "u2DE4", "u2DE5", "u2DE6", "u2DE7", "u2DE8", "u2DE9", "u2DEA", "u2DEB", "u2DEC", "u2DED", "u2DEE", "u2DEF", "u2DF0", "u2DF1", "u2DF2", "u2DF3", "u2DF4", "u2DF5", "u2DF6", "u2DF7", "u2DF8", "u2DF9", "u2DFA", "u2DFB", "u2DFC", "u2DFD", "u2DFE", "u2DFF", "u302A", "u302B", "u302C", "u302D", "u3099", "u309A", "uA66F", "uA674", "uA675", "uA676", "uA677", "uA678", "uA679", "uA67A", "uA67B", "uA67C", "uA67D", "uA69E", "uA69F", "uA6F0", "uA6F1", "uA802", "uA806", "uA80B", "uA825", "uA826", "uA8C4", "uA8E0", "uA8E1", "uA8E2", "uA8E3", "uA8E4", "uA8E5", "uA8E6", "uA8E7", "uA8E8", "uA8E9", "uA8EA", "uA8EB", "uA8EC", "uA8ED", "uA8EE", "uA8EF", "uA8F0", "uA8F1", "uA926", "uA927", "uA928", "uA929", "uA92A", "uA92B", "uA92C", "uA92D", "uA947", "uA948", "uA949", "uA94A", "uA94B", "uA94C", "uA94D", "uA94E", "uA94F", "uA950", "uA951", "uA980", "uA981", "uA982", "uA9B3", "uA9B6", "uA9B7", "uA9B8", "uA9B9", "uA9BC", "uA9E5", "uAA29", "uAA2A", "uAA2B", "uAA2C", "uAA2D", "uAA2E", "uAA31", "uAA32", "uAA35", "uAA36", "uAA43", "uAA4C", "uAA7C", "uAAB0", "uAAB2", "uAAB3", "uAAB4", "uAAB7", "uAAB8", "uAABE", "uAABF", "uAAC1", "uAAEC", "uAAED", "uAAF6", "uABE5", "uABE8", "uABED", "uFB1E", "uFE00", "uFE01", "uFE02", "uFE03", "uFE04", "uFE05", "uFE06", "uFE07", "uFE08", "uFE09", "uFE0A", "uFE0B", "uFE0C", "uFE0D", "uFE0E", "uFE0F", "uFE20", "uFE21", "uFE22", "uFE23", "uFE24", "uFE25", "uFE26", "uFE27", "uFE28", "uFE29", "uFE2A", "uFE2B", "uFE2C", "uFE2D", "uFE2E", "uFE2F"];
var combiningMarks = a.concat(b);

var splitChars = ["-",  "/",  ";",  ":",  "&",
  "u0E2F",  // thai character pairannoi
  "u0EAF",  // lao ellipsis
  "u0EC6",  // lao ko la (word repetition)
  "u0ECC",  // lao cancellation mark
  "u104A",  // myanmar sign little section
  "u104B",  // myanmar sign section
  "u104C",  // myanmar symbol locative
  "u104D",  // myanmar symbol completed
  "u104E",  // myanmar symbol aforementioned
  "u104F",  // myanmar symbol genitive
  "u2013",  // en dash
  "u2014",  // em dash
  "u2027",  // simplified chinese hyphenation point
  "u3000",  // simplified chinese ideographic space
  "u3001",  // simplified chinese ideographic comma
  "u3002",  // simplified chinese ideographic full stop
  "uFF0C",  // full-width comma
  "uFF5E"   // wave dash
];

var prefixChars = ["'",  "<",  "(",  "{",  "[",
  "u00AB",  // left-pointing double angle quotation mark
  "u300A",  // left double angle bracket
  "u3008"  // left angle bracket
];

var suffixChars = ["'",  ">",  ")",  "}",  "]",  ".",  "!",  "?",
  "u00BB",  // right-pointing double angle quotation mark
  "u300B",  // right double angle bracket
  "u3009"  // right angle bracket
].concat(splitChars);

var burmeseRange = "\u1000-\u102A\u103F-\u1049\u1050-\u1055";
var japaneseRange = "\u3040-\u309f\u30a0-\u30ff\uff00-\uff0b\uff0d-\uff5d\uff5f-\uff9f\u3400-\u4dbf";
var chineseRange = "\u3400-\u9FBF";
var laoRange = "\u0E81-\u0EAE\u0EB0-\u0EC4\u0EC8-\u0ECB\u0ECD-\u0EDD";

var noSpaceRange = burmeseRange + chineseRange + laoRange;

var splitWords = new RegExp(("(\\" + (splitChars.join("|\\")) + ")*[^\\s|\\" + (splitChars.join("|\\")) + "]*(\\" + (splitChars.join("|\\")) + ")*"), "g");
var japaneseChars = new RegExp(("[" + japaneseRange + "]"));
var noSpaceLanguage = new RegExp(("[" + noSpaceRange + "]"));
var splitAllChars = new RegExp(("(\\" + (prefixChars.join("|\\")) + ")*[" + noSpaceRange + "](\\" + (suffixChars.join("|\\")) + "|\\" + (combiningMarks.join("|\\")) + ")*|[a-z0-9]+"), "gi");

/**
    @function textSplit
    @desc Splits a given sentence into an array of words.
    @param {String} sentence
*/
var textSplit = function(sentence) {
  if (!noSpaceLanguage.test(sentence)) { return stringify(sentence).match(splitWords).filter(function (w) { return w.length; }); }
  return merge(stringify(sentence).match(splitWords).map(function (d) {
    if (!japaneseChars.test(d) && noSpaceLanguage.test(d)) { return d.match(splitAllChars); }
    return [d];
  }));
};

/**
    @function textWrap
    @desc Based on the defined styles and dimensions, breaks a string into an array of strings for each line of text.
*/
var wrap = function() {

  var fontFamily = "Verdana",
      fontSize = 10,
      fontWeight = 400,
      height = 200,
      lineHeight,
      overflow = false,
      split = textSplit,
      width = 200;

  /**
      The inner return object and wraps the text and returns the line data array.
      @private
  */
  function textWrap(sentence) {

    sentence = stringify(sentence);

    if (lineHeight === void 0) { lineHeight = Math.ceil(fontSize * 1.1); }

    var words = split(sentence);

    var style = {
      "font-family": fontFamily,
      "font-size": fontSize,
      "font-weight": fontWeight,
      "line-height": lineHeight
    };

    var line = 1,
        textProg = "",
        truncated = false,
        widthProg = 0;

    var lineData = [],
          sizes = measure(words, style),
          space = measure(" ", style);

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var wordWidth = sizes[words.indexOf(word)];
      word += sentence.slice(textProg.length + word.length).match("^( |\n)*", "g")[0];
      if (textProg.slice(-1) === "\n" || widthProg + wordWidth > width) {
        if (!i && !overflow) {
          truncated = true;
          break;
        }
        lineData[line - 1] = lineData[line - 1].trimRight();
        line++;
        if (lineHeight * line > height || wordWidth > width && !overflow) {
          truncated = true;
          break;
        }
        widthProg = 0;
        lineData.push(word);
      }
      else if (!i) { lineData[0] = word; }
      else { lineData[line - 1] += word; }
      textProg += word;
      widthProg += wordWidth;
      widthProg += word.match(/[\s]*$/g)[0].length * space;
    }

    return {
      lines: lineData,
      sentence: sentence, truncated: truncated, words: words
    };

  }

  /**
      @memberof textWrap
      @desc If *value* is specified, sets the font family accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current font family.
      @param {Function|String} [*value* = "Verdana"]
  */
  textWrap.fontFamily = function(_) {
    return arguments.length ? (fontFamily = _, textWrap) : fontFamily;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets the font size accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current font size.
      @param {Function|Number} [*value* = 10]
  */
  textWrap.fontSize = function(_) {
    return arguments.length ? (fontSize = _, textWrap) : fontSize;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets the font weight accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current font weight.
      @param {Function|Number|String} [*value* = 400]
  */
  textWrap.fontWeight = function(_) {
    return arguments.length ? (fontWeight = _, textWrap) : fontWeight;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets height limit to the specified value and returns this generator. If *value* is not specified, returns the current value.
      @param {Number} [*value* = 200]
  */
  textWrap.height = function(_) {
    return arguments.length ? (height = _, textWrap) : height;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets the line height accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current line height accessor, which is 1.1 times the [font size](#textWrap.fontSize) by default.
      @param {Function|Number} [*value*]
  */
  textWrap.lineHeight = function(_) {
    return arguments.length ? (lineHeight = _, textWrap) : lineHeight;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets the overflow to the specified boolean and returns this generator. If *value* is not specified, returns the current overflow value.
      @param {Boolean} [*value* = false]
  */
  textWrap.overflow = function(_) {
    return arguments.length ? (overflow = _, textWrap) : overflow;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets the word split function to the specified function and returns this generator. If *value* is not specified, returns the current word split function.
      @param {Function} [*value*] A function that, when passed a string, is expected to return that string split into an array of words to textWrap. The default split function splits strings on the following characters: `-`, `/`, `;`, `:`, `&`
  */
  textWrap.split = function(_) {
    return arguments.length ? (split = _, textWrap) : split;
  };

  /**
      @memberof textWrap
      @desc If *value* is specified, sets width limit to the specified value and returns this generator. If *value* is not specified, returns the current value.
      @param {Number} [*value* = 200]
  */
  textWrap.width = function(_) {
    return arguments.length ? (width = _, textWrap) : width;
  };

  return textWrap;

};

/**
    @function TextBox
    @extends BaseClass
    @desc Creates a wrapped text box for each point in an array of data. See [this example](https://d3plus.org/examples/d3plus-text/getting-started/) for help getting started using the textBox function.
*/
var TextBox = (function (BaseClass$$1) {
  function TextBox() {

    BaseClass$$1.call(this);

    this._delay = 0;
    this._duration = 0;
    this._ellipsis = function (_) { return ((_.replace(/\.|,$/g, "")) + "..."); };
    this._fontColor = constant$3("black");
    this._fontFamily = constant$3("Verdana");
    this._fontMax = constant$3(50);
    this._fontMin = constant$3(8);
    this._fontResize = constant$3(false);
    this._fontSize = constant$3(10);
    this._fontWeight = constant$3(400);
    this._height = accessor("height", 200);
    this._id = function (d, i) { return d.id || ("" + i); };
    this._on = {};
    this._overflow = constant$3(false);
    this._pointerEvents = constant$3("auto");
    this._rotate = constant$3(0);
    this._split = textSplit;
    this._text = accessor("text");
    this._textAnchor = constant$3("start");
    this._verticalAlign = constant$3("top");
    this._width = accessor("width", 200);
    this._x = accessor("x", 0);
    this._y = accessor("y", 0);

  }

  if ( BaseClass$$1 ) TextBox.__proto__ = BaseClass$$1;
  TextBox.prototype = Object.create( BaseClass$$1 && BaseClass$$1.prototype );
  TextBox.prototype.constructor = TextBox;

  /**
      @memberof TextBox
      @desc Renders the text boxes. If a *callback* is specified, it will be called once the shapes are done drawing.
      @param {Function} [*callback* = undefined]
  */
  TextBox.prototype.render = function render (callback) {
    var this$1 = this;


    if (this._select === void 0) { this.select(select("body").append("svg").style("width", ((window.innerWidth) + "px")).style("height", ((window.innerHeight) + "px")).node()); }
    if (this._lineHeight === void 0) { this._lineHeight = function (d, i) { return this$1._fontSize(d, i) * 1.1; }; }
    var that = this;

    var boxes = this._select.selectAll(".d3plus-textBox").data(this._data.reduce(function (arr, d, i) {

      var t = this$1._text(d, i);
      if (t === void 0) { return arr; }

      var resize = this$1._fontResize(d, i);

      var fS = resize ? this$1._fontMax(d, i) : this$1._fontSize(d, i),
          lH = resize ? fS * 1.1 : this$1._lineHeight(d, i),
          line = 1,
          lineData = [],
          sizes;

      var style = {
        "font-family": this$1._fontFamily(d, i),
        "font-size": fS,
        "font-weight": this$1._fontWeight(d, i),
        "line-height": lH
      };

      var h = this$1._height(d, i),
            w = this$1._width(d, i);

      var wrapper = wrap()
        .fontFamily(style["font-family"])
        .fontSize(fS)
        .fontWeight(style["font-weight"])
        .lineHeight(lH)
        .height(h)
        .overflow(this$1._overflow(d, i))
        .width(w);

      var fMax = this$1._fontMax(d, i),
            fMin = this$1._fontMin(d, i),
            vA = this$1._verticalAlign(d, i),
            words = this$1._split(t, i);

      /**
          Figures out the lineData to be used for wrapping.
          @private
      */
      function checkSize() {
       var maxLineCount = 3;
        if (fS < fMin) {
          lineData = [];
          return;
        }
        else if (fS > fMax) { fS = fMax; }

        if (resize) {
          lH = fS * 1.1;
          wrapper
            .fontSize(fS)
            .lineHeight(lH);
          style["font-size"] = fS;
          style["line-height"] = lH;
        }

        var wrapResults = wrapper(t);
        lineData = wrapResults.lines.filter(function (l) { return l !== ""; });
        line = lineData.length;

        if (wrapResults.truncated ||  line > maxLineCount) {

          if (resize) {
            fS--;
            if (fS < fMin) { lineData = []; }
            else { checkSize(); }
          }
          else if (line < 1) { lineData = [that._ellipsis("")]; }
          else {  
            if(lineData.length > maxLineCount){
               lineData[maxLineCount-1] = that._ellipsis(lineData[maxLineCount-1]);
             }else{
             lineData[line - 1] = that._ellipsis(lineData[line - 1]);
            }   
          }

        }


      }

      if (w > fMin && (h > lH || resize && h > fMin * 1.1)) {

        if (resize) {

          sizes = measure(words, style);

          var areaMod = 1.165 + w / h * 0.1,
                boxArea = w * h,
                maxWidth = max(sizes),
                textArea = sum(sizes, function (d) { return d * lH; }) * areaMod;

          if (maxWidth > w || textArea > boxArea) {
            var areaRatio = Math.sqrt(boxArea / textArea),
                  widthRatio = w / maxWidth;
            var sizeRatio = min([areaRatio, widthRatio]);
            fS = Math.floor(fS * sizeRatio);
          }

          var heightMax = Math.floor(h * 0.8);
          if (fS > heightMax) { fS = heightMax; }

        }

        checkSize();

      }

      if (lineData.length) {

        var tH = Math.max(1, line) * lH;
        var yP = vA === "top" ? 0 : vA === "middle" ? h / 2 - tH / 2 : h - tH;
        yP -= lH * 0.1;

        arr.push({
          data: d,
          i: i,
          lines: lineData,
          fC: this$1._fontColor(d, i),
          fF: style["font-family"],
          fW: style["font-weight"],
          id: this$1._id(d, i),
          tA: this$1._textAnchor(d, i),
          fS: fS, lH: lH, w: w, x: this$1._x(d, i), y: this$1._y(d, i) + yP
        });

      }

      return arr;

    }, []), this._id);

    var t = transition().duration(this._duration);

    if (this._duration === 0) {

      boxes.exit().remove();

    }
    else {

      boxes.exit().transition().delay(this._duration).remove();

      boxes.exit().selectAll("tspan").transition(t)
        .attr("opacity", 0);

    }

    function rotate(text) {
      text.attr("transform", function (d, i) { return ("rotate(" + (that._rotate(d, i)) + " " + (d.x + d.w / 2) + " " + (d.y + d.lH / 4 + d.lH * d.lines.length / 2) + ")"); });
    }

    var update = boxes.enter().append("text")
        .attr("class", "d3plus-textBox")
        .attr("id", function (d) { return ("d3plus-textBox-" + (d.id)); })
        .attr("y", function (d) { return ((d.y) + "px"); })
        .call(rotate)
      .merge(boxes);

    update
      .attr("fill", function (d) { return d.fC; })
      .attr("text-anchor", function (d) { return d.tA; })
      .attr("font-family", function (d) { return d.fF; })
      .style("font-family", function (d) { return d.fF; })
      .attr("font-size", function (d) { return ((d.fS) + "px"); })
      .style("font-size", function (d) { return ((d.fS) + "px"); })
      .attr("font-weight", function (d) { return d.fW; })
      .style("font-weight", function (d) { return d.fW; })
      .style("pointer-events", function (d) { return this$1._pointerEvents(d.data, d.i); })
      .each(function(d) {

        var dx = d.tA === "start" ? 0 : d.tA === "end" ? d.w : d.w / 2,
              tB = select(this);

        if (that._duration === 0) { tB.attr("y", function (d) { return ((d.y) + "px"); }); }
        else { tB.transition(t).attr("y", function (d) { return ((d.y) + "px"); }); }

        /**
            Styles to apply to each <tspan> element.
            @private
        */
        function tspanStyle(tspan) {
          tspan
            .text(function (t) { return t.trimRight(); })
            .attr("x", ((d.x) + "px"))
            .attr("dx", (dx + "px"))
            .attr("dy", ((d.lH) + "px"));
        }

        var tspans = tB.selectAll("tspan").data(d.lines);

        if (that._duration === 0) {

          tspans.call(tspanStyle);

          tspans.exit().remove();

          tspans.enter().append("tspan")
            .attr("dominant-baseline", "alphabetic")
            .style("baseline-shift", "0%")
            .call(tspanStyle);

        }
        else {

          tspans.transition(t).call(tspanStyle);

          tspans.exit().transition(t)
            .attr("opacity", 0).remove();

          tspans.enter().append("tspan")
              .attr("dominant-baseline", "alphabetic")
              .style("baseline-shift", "0%")
              .attr("opacity", 0)
              .call(tspanStyle)
            .merge(tspans).transition(t).delay(that._delay)
              .call(tspanStyle)
              .attr("opacity", 1);

        }

      })
      .transition(t).call(rotate);

    var events = Object.keys(this._on),
          on = events.reduce(function (obj, e) {
            obj[e] = function (d, i) { return this$1._on[e](d.data, i); };
            return obj;
          }, {});
    for (var e = 0; e < events.length; e++) { update.on(events[e], on[events[e]]); }

    // if (callback) { setTimeout(callback, this._duration + 100); }
    // if (callback) { setTimeout(callback, this._duration + 1); }
    callback()

    return this;

  };

  /**
      @memberof TextBox
      @desc If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array. A text box will be drawn for each object in the array.
      @param {Array} [*data* = []]
  */
  TextBox.prototype.data = function data (_) {
    return arguments.length ? (this._data = _, this) : this._data;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the animation delay to the specified number and returns this generator. If *value* is not specified, returns the current animation delay.
      @param {Number} [*value* = 0]
  */
  TextBox.prototype.delay = function delay (_) {
    return arguments.length ? (this._delay = _, this) : this._delay;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the animation duration to the specified number and returns this generator. If *value* is not specified, returns the current animation duration.
      @param {Number} [*value* = 0]
  */
  TextBox.prototype.duration = function duration (_) {
    return arguments.length ? (this._duration = _, this) : this._duration;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the ellipsis method to the specified function or string and returns this generator. If *value* is not specified, returns the current ellipsis method, which simply adds an ellipsis to the string by default.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function(d) {
  return d + "...";
}
  */
  TextBox.prototype.ellipsis = function ellipsis (_) {
    return arguments.length ? (this._ellipsis = typeof _ === "function" ? _ : constant$3(_), this) : this._ellipsis;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the font color accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current font color accessor, which is inferred from the [container element](#textBox.select) by default.
      @param {Function|String} [*value* = "black"]
  */
  TextBox.prototype.fontColor = function fontColor (_) {
    return arguments.length ? (this._fontColor = typeof _ === "function" ? _ : constant$3(_), this) : this._fontColor;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the font family accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current font family accessor, which is inferred from the [container element](#textBox.select) by default.
      @param {Function|String} [*value* = "Verdana"]
  */
  TextBox.prototype.fontFamily = function fontFamily (_) {
    return arguments.length ? (this._fontFamily = typeof _ === "function" ? _ : constant$3(_), this) : this._fontFamily;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the maximum font size accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current maximum font size accessor. The maximum font size is used when [resizing fonts](#textBox.fontResize) dynamically.
      @param {Function|Number} [*value* = 50]
  */
  TextBox.prototype.fontMax = function fontMax (_) {
    return arguments.length ? (this._fontMax = typeof _ === "function" ? _ : constant$3(_), this) : this._fontMax;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the minimum font size accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current minimum font size accessor. The minimum font size is used when [resizing fonts](#textBox.fontResize) dynamically.
      @param {Function|Number} [*value* = 8]
  */
  TextBox.prototype.fontMin = function fontMin (_) {
    return arguments.length ? (this._fontMin = typeof _ === "function" ? _ : constant$3(_), this) : this._fontMin;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the font resizing accessor to the specified function or boolean and returns this generator. If *value* is not specified, returns the current font resizing accessor.
      @param {Function|Boolean} [*value* = false]
  */
  TextBox.prototype.fontResize = function fontResize (_) {
    return arguments.length ? (this._fontResize = typeof _ === "function" ? _ : constant$3(_), this) : this._fontResize;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the font size accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current font size accessor, which is inferred from the [container element](#textBox.select) by default.
      @param {Function|Number} [*value* = 10]
  */
  TextBox.prototype.fontSize = function fontSize (_) {
    return arguments.length ? (this._fontSize = typeof _ === "function" ? _ : constant$3(_), this) : this._fontSize;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the font weight accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current font weight accessor, which is inferred from the [container element](#textBox.select) by default.
      @param {Function|Number|String} [*value* = 400]
  */
  TextBox.prototype.fontWeight = function fontWeight (_) {
    return arguments.length ? (this._fontWeight = typeof _ === "function" ? _ : constant$3(_), this) : this._fontWeight;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the height accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current height accessor.
      @param {Function|Number} [*value*]
      @example <caption>default accessor</caption>
function(d) {
  return d.height || 200;
}
  */
  TextBox.prototype.height = function height (_) {
    return arguments.length ? (this._height = typeof _ === "function" ? _ : constant$3(_), this) : this._height;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the id accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current id accessor.
      @param {Function|Number} [*value*]
      @example <caption>default accessor</caption>
function(d, i) {
  return d.id || i + "";
}
  */
  TextBox.prototype.id = function id (_) {
    return arguments.length ? (this._id = typeof _ === "function" ? _ : constant$3(_), this) : this._id;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the line height accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current line height accessor, which is 1.1 times the [font size](#textBox.fontSize) by default.
      @param {Function|Number} [*value*]
  */
  TextBox.prototype.lineHeight = function lineHeight (_) {
    return arguments.length ? (this._lineHeight = typeof _ === "function" ? _ : constant$3(_), this) : this._lineHeight;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the overflow accessor to the specified function or boolean and returns this generator. If *value* is not specified, returns the current overflow accessor.
      @param {Function|Boolean} [*value* = false]
  */
  TextBox.prototype.overflow = function overflow (_) {
    return arguments.length ? (this._overflow = typeof _ === "function" ? _ : constant$3(_), this) : this._overflow;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.
      @param {Function|String} [*value* = "auto"]
  */
  TextBox.prototype.pointerEvents = function pointerEvents (_) {
    return arguments.length ? (this._pointerEvents = typeof _ === "function" ? _ : constant$3(_), this) : this._pointerEvents;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the rotate accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current rotate accessor.
      @param {Function|Number} [*value* = 0]
  */
  TextBox.prototype.rotate = function rotate (_) {
    return arguments.length ? (this._rotate = typeof _ === "function" ? _ : constant$3(_), this) : this._rotate;
  };

  /**
      @memberof TextBox
      @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns this generator. If *selector* is not specified, returns the current SVG container element, which adds an SVG element to the page by default.
      @param {String|HTMLElement} [*selector*]
  */
  TextBox.prototype.select = function select$1 (_) {
    return arguments.length ? (this._select = select(_), this) : this._select;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the word split function to the specified function and returns this generator. If *value* is not specified, returns the current word split function.
      @param {Function} [*value*] A function that, when passed a string, is expected to return that string split into an array of words to wrap. The default split function splits strings on the following characters: `-`, `/`, `;`, `:`, `&`
  */
  TextBox.prototype.split = function split (_) {
    return arguments.length ? (this._split = _, this) : this._split;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the text accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current text accessor.
      @param {Function|String} [*value*]
      @example <caption>default accessor</caption>
function(d) {
  return d.text;
}
  */
  TextBox.prototype.text = function text (_) {
    return arguments.length ? (this._text = typeof _ === "function" ? _ : constant$3(_), this) : this._text;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the horizontal text anchor accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current horizontal text anchor accessor.
      @param {Function|String} [*value* = "start"] Analagous to the SVG [text-anchor](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor) property.
  */
  TextBox.prototype.textAnchor = function textAnchor (_) {
    return arguments.length ? (this._textAnchor = typeof _ === "function" ? _ : constant$3(_), this) : this._textAnchor;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the vertical alignment accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current vertical alignment accessor.
      @param {Function|String} [*value* = "top"] Accepts `"top"`, `"middle"`, and `"bottom"`.
  */
  TextBox.prototype.verticalAlign = function verticalAlign (_) {
    return arguments.length ? (this._verticalAlign = typeof _ === "function" ? _ : constant$3(_), this) : this._verticalAlign;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the width accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current width accessor.
      @param {Function|Number} [*value*]
      @example <caption>default accessor</caption>
function(d) {
  return d.width || 200;
}
  */
  TextBox.prototype.width = function width (_) {
    return arguments.length ? (this._width = typeof _ === "function" ? _ : constant$3(_), this) : this._width;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the x accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current x accessor. The number returned should correspond to the left position of the textBox.
      @param {Function|Number} [*value*]
      @example <caption>default accessor</caption>
function(d) {
  return d.x || 0;
}
  */
  TextBox.prototype.x = function x (_) {
    return arguments.length ? (this._x = typeof _ === "function" ? _ : constant$3(_), this) : this._x;
  };

  /**
      @memberof TextBox
      @desc If *value* is specified, sets the y accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current y accessor. The number returned should correspond to the top position of the textBox.
      @param {Function|Number} [*value*]
      @example <caption>default accessor</caption>
function(d) {
  return d.y || 0;
}
  */
  TextBox.prototype.y = function y (_) {
    return arguments.length ? (this._y = typeof _ === "function" ? _ : constant$3(_), this) : this._y;
  };

  return TextBox;
}(BaseClass));

/**
    @function titleCase
    @desc Capitalizes the first letter of each word in a phrase/sentence.
    @param {String} str The string to apply the title case logic.
    @param {Object} [opts] Optional parameters to apply.
    @param {String} [opts.lng] The locale to use when looking up all lowercase or uppecase words.
*/
var titleCase = function(str, opts) {

  if (str === void 0) { return ""; }

  opts = Object.assign({
    lng: "en-US"
  }, opts);

  var lng = opts.lng;

  var smalls = locale.t("array.lowercase", {lng: lng, returnObjects: true}).map(function (s) { return s.toLowerCase(); });

  var bigs = locale.t("array.uppercase", {lng: lng, returnObjects: true});
  bigs = bigs.concat(bigs.map(function (b) { return (b + "s"); }));
  var biglow = bigs.map(function (b) { return b.toLowerCase(); });

  var split = textSplit(str);
  return split.map(function (s, i) {
    if (s) {
      var lower = s.toLowerCase();
      var stripped = suffixChars.includes(lower.charAt(lower.length - 1)) ? lower.slice(0, -1) : lower;
      var bigindex = biglow.indexOf(stripped);
      if (bigindex >= 0) { return bigs[bigindex]; }
      else if (smalls.includes(stripped) && i !== 0 && i !== split.length - 1) { return lower; }
      else { return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase(); }
    }
    else { return ""; }
  }).reduce(function (ret, s, i) {
    if (i && str.charAt(ret.length) === " ") { ret += " "; }
    ret += s;
    return ret;
  }, "");

};

exports.fontExists = fontExists;
exports.stringify = stringify;
exports.strip = strip;
exports.TextBox = TextBox;
exports.textSplit = textSplit;
exports.textWidth = measure;
exports.textWrap = wrap;
exports.titleCase = titleCase;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=d3plus-text.full.js.map

/* ssf.js (C) 2013-present SheetJS -- http://sheetjs.com */
/*jshint -W041 */
var SSF = {};
var make_ssf = function make_ssf(SSF){
  SSF.version = '0.9.0';
  function _strrev(x/*:string*/)/*:string*/ { var o = "", i = x.length-1; while(i>=0) o += x.charAt(i--); return o; }
  function fill(c/*:string*/,l/*:number*/)/*:string*/ { var o = ""; while(o.length < l) o+=c; return o; }
  function pad0(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v; return t.length>=d?t:fill('0',d-t.length)+t;}
  function pad_(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v;return t.length>=d?t:fill(' ',d-t.length)+t;}
  function rpad_(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v; return t.length>=d?t:t+fill(' ',d-t.length);}
  function pad0r1(v/*:any*/,d/*:number*/)/*:string*/{var t=""+Math.round(v); return t.length>=d?t:fill('0',d-t.length)+t;}
  function pad0r2(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v; return t.length>=d?t:fill('0',d-t.length)+t;}
  var p2_32 = Math.pow(2,32);
  function pad0r(v/*:any*/,d/*:number*/)/*:string*/{if(v>p2_32||v<-p2_32) return pad0r1(v,d); var i = Math.round(v); return pad0r2(i,d); }
  function isgeneral(s/*:string*/, i/*:?number*/)/*:boolean*/ { i = i || 0; return s.length >= 7 + i && (s.charCodeAt(i)|32) === 103 && (s.charCodeAt(i+1)|32) === 101 && (s.charCodeAt(i+2)|32) === 110 && (s.charCodeAt(i+3)|32) === 101 && (s.charCodeAt(i+4)|32) === 114 && (s.charCodeAt(i+5)|32) === 97 && (s.charCodeAt(i+6)|32) === 108; }
  /* Options */
  var opts_fmt/*:Array<Array<any> >*/ = [
    ["date1904", 0],
    ["output", ""],
    ["WTF", false]
  ];
  function fixopts(o){
    for(var y = 0; y != opts_fmt.length; ++y) if(o[opts_fmt[y][0]]===undefined) o[opts_fmt[y][0]]=opts_fmt[y][1];
  }
  SSF.opts = opts_fmt;
  var table_fmt = {
    /*::[*/0/*::]*/:  'General',
    /*::[*/1/*::]*/:  '0',
    /*::[*/2/*::]*/:  '0.00',
    /*::[*/3/*::]*/:  '#,##0',
    /*::[*/4/*::]*/:  '#,##0.00',
    /*::[*/9/*::]*/:  '0%',
    /*::[*/10/*::]*/: '0.00%',
    /*::[*/11/*::]*/: '0.00E+00',
    /*::[*/12/*::]*/: '# ?/?',
    /*::[*/13/*::]*/: '# ??/??',
    /*::[*/14/*::]*/: 'm/d/yy',
    /*::[*/15/*::]*/: 'd-mmm-yy',
    /*::[*/16/*::]*/: 'd-mmm',
    /*::[*/17/*::]*/: 'mmm-yy',
    /*::[*/18/*::]*/: 'h:mm AM/PM',
    /*::[*/19/*::]*/: 'h:mm:ss AM/PM',
    /*::[*/20/*::]*/: 'h:mm',
    /*::[*/21/*::]*/: 'h:mm:ss',
    /*::[*/22/*::]*/: 'm/d/yy h:mm',
    /*::[*/37/*::]*/: '#,##0 ;(#,##0)',
    /*::[*/38/*::]*/: '#,##0 ;[Red](#,##0)',
    /*::[*/39/*::]*/: '#,##0.00;(#,##0.00)',
    /*::[*/40/*::]*/: '#,##0.00;[Red](#,##0.00)',
    /*::[*/45/*::]*/: 'mm:ss',
    /*::[*/46/*::]*/: '[h]:mm:ss',
    /*::[*/47/*::]*/: 'mmss.0',
    /*::[*/48/*::]*/: '##0.0E+0',
    /*::[*/49/*::]*/: '@',
    /*::[*/56/*::]*/: '"上午/下午 "hh"時"mm"分"ss"秒 "',
    /*::[*/65535/*::]*/: 'General'
  };
  var days/*:Array<Array<string> >*/ = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
  ];
  var months/*:Array<Array<string> >*/ = [
    ['J', 'Jan', 'January'],
    ['F', 'Feb', 'February'],
    ['M', 'Mar', 'March'],
    ['A', 'Apr', 'April'],
    ['M', 'May', 'May'],
    ['J', 'Jun', 'June'],
    ['J', 'Jul', 'July'],
    ['A', 'Aug', 'August'],
    ['S', 'Sep', 'September'],
    ['O', 'Oct', 'October'],
    ['N', 'Nov', 'November'],
    ['D', 'Dec', 'December']
  ];
  function frac(x, D, mixed) {
    var sgn = x < 0 ? -1 : 1;
    var B = x * sgn;
    var P_2 = 0, P_1 = 1, P = 0;
    var Q_2 = 1, Q_1 = 0, Q = 0;
    var A = Math.floor(B);
    while(Q_1 < D) {
      A = Math.floor(B);
      P = A * P_1 + P_2;
      Q = A * Q_1 + Q_2;
      if((B - A) < 0.0000000005) break;
      B = 1 / (B - A);
      P_2 = P_1; P_1 = P;
      Q_2 = Q_1; Q_1 = Q;
    }
    if(Q > D) { Q = Q_1; P = P_1; }
    if(Q > D) { Q = Q_2; P = P_2; }
    if(!mixed) return [0, sgn * P, Q];
    if(Q===0) throw "Unexpected state: "+P+" "+P_1+" "+P_2+" "+Q+" "+Q_1+" "+Q_2;
    var q = Math.floor(sgn * P/Q);
    return [q, sgn*P - q*Q, Q];
  }
  function general_fmt_int(v/*:number*/, opts/*:?any*/)/*:string*/ { return ""+v; }
  SSF._general_int = general_fmt_int;
  var general_fmt_num = (function make_general_fmt_num() {
    var gnr1 = /\.(\d*[1-9])0+$/, gnr2 = /\.0*$/, gnr4 = /\.(\d*[1-9])0+/, gnr5 = /\.0*[Ee]/, gnr6 = /(E[+-])(\d)$/;
    function gfn2(v) {
      var w = (v<0?12:11);
      var o = gfn5(v.toFixed(12)); if(o.length <= w) return o;
      o = v.toPrecision(10); if(o.length <= w) return o;
      return v.toExponential(5);
    }
    function gfn3(v) {
      var o = v.toFixed(11).replace(gnr1,".$1");
      if(o.length > (v<0?12:11)) o = v.toPrecision(6);
      return o;
    }
    function gfn4(o) {
      for(var i = 0; i != o.length; ++i) if((o.charCodeAt(i) | 0x20) === 101) return o.replace(gnr4,".$1").replace(gnr5,"E").replace("e","E").replace(gnr6,"$10$2");
      return o;
    }
    function gfn5(o) {
      //for(var i = 0; i != o.length; ++i) if(o.charCodeAt(i) === 46) return o.replace(gnr2,"").replace(gnr1,".$1");
      //return o;
      return o.indexOf(".") > -1 ? o.replace(gnr2,"").replace(gnr1,".$1") : o;
    }
    return function general_fmt_num(v/*:number*/, opts/*:?any*/)/*:string*/ {
      var V = Math.floor(Math.log(Math.abs(v))*Math.LOG10E), o;
      if(V >= -4 && V <= -1) o = v.toPrecision(10+V);
      else if(Math.abs(V) <= 9) o = gfn2(v);
      else if(V === 10) o = v.toFixed(10).substr(0,12);
      else o = gfn3(v);
      return gfn5(gfn4(o));
    };})();
  SSF._general_num = general_fmt_num;
  function general_fmt(v/*:any*/, opts/*:?any*/) {
    switch(typeof v) {
      case 'string': return v;
      case 'boolean': return v ? "TRUE" : "FALSE";
      case 'number': return (v|0) === v ? general_fmt_int(v, opts) : general_fmt_num(v, opts);
    }
    throw new Error("unsupported value in General format: " + v);
  }
  SSF._general = general_fmt;
  function fix_hijri(date, o) { return 0; }
  function parse_date_code(v/*:number*/,opts/*:?any*/,b2/*:?boolean*/) {
    if(v > 2958465 || v < 0) return null;
    var date = (v|0), time = Math.floor(86400 * (v - date)), dow=0;
    var dout=[];
    var out={D:date, T:time, u:86400*(v-date)-time,y:0,m:0,d:0,H:0,M:0,S:0,q:0};
    if(Math.abs(out.u) < 1e-6) out.u = 0;
    fixopts(opts != null ? opts : (opts=[]));
    if(opts.date1904) date += 1462;
    if(out.u > 0.999) {
      out.u = 0;
      if(++time == 86400) { time = 0; ++date; }
    }
    if(date === 60) {dout = b2 ? [1317,10,29] : [1900,2,29]; dow=3;}
    else if(date === 0) {dout = b2 ? [1317,8,29] : [1900,1,0]; dow=6;}
    else {
      if(date > 60) --date;
      /* 1 = Jan 1 1900 in Gregorian */
      var d = new Date(1900, 0, 1);
      d.setDate(d.getDate() + date - 1);
      dout = [d.getFullYear(), d.getMonth()+1,d.getDate()];
      dow = d.getDay();
      if(date < 60) dow = (dow + 6) % 7;
      if(b2) dow = fix_hijri(d, dout);
    }
    out.y = dout[0]; out.m = dout[1]; out.d = dout[2];
    out.S = time % 60; time = Math.floor(time / 60);
    out.M = time % 60; time = Math.floor(time / 60);
    out.H = time;
    out.q = dow;
    return out;
  }
  SSF.parse_date_code = parse_date_code;
  /*jshint -W086 */
  function write_date(type/*:number*/, fmt/*:string*/, val, ss0/*:?number*/)/*:string*/ {
    var o="", ss=0, tt=0, y = val.y, out, outl = 0;
    switch(type) {
      case 98: /* 'b' buddhist year */
        y = val.y + 543;
      /* falls through */
      case 121: /* 'y' year */
        switch(fmt.length) {
          case 1: case 2: out = y % 100; outl = 2; break;
          default: out = y % 10000; outl = 4; break;
        } break;
      case 109: /* 'm' month */
        switch(fmt.length) {
          case 1: case 2: out = val.m; outl = fmt.length; break;
          case 3: return months[val.m-1][1];
          case 5: return months[val.m-1][0];
          default: return months[val.m-1][2];
        } break;
      case 100: /* 'd' day */
        switch(fmt.length) {
          case 1: case 2: out = val.d; outl = fmt.length; break;
          case 3: return days[val.q][0];
          default: return days[val.q][1];
        } break;
      case 104: /* 'h' 12-hour */
        switch(fmt.length) {
          case 1: case 2: out = 1+(val.H+11)%12; outl = fmt.length; break;
          default: throw 'bad hour format: ' + fmt;
        } break;
      case 72: /* 'H' 24-hour */
        switch(fmt.length) {
          case 1: case 2: out = val.H; outl = fmt.length; break;
          default: throw 'bad hour format: ' + fmt;
        } break;
      case 77: /* 'M' minutes */
        switch(fmt.length) {
          case 1: case 2: out = val.M; outl = fmt.length; break;
          default: throw 'bad minute format: ' + fmt;
        } break;
      case 115: /* 's' seconds */
        if(val.u === 0) switch(fmt) {
          case 's': case 'ss': return pad0(val.S, fmt.length);
          case '.0': case '.00': case '.000':
        }
        switch(fmt) {
          case 's': case 'ss': case '.0': case '.00': case '.000':
          /*::if(!ss0) ss0 = 0; */
          if(ss0 >= 2) tt = ss0 === 3 ? 1000 : 100;
          else tt = ss0 === 1 ? 10 : 1;
          ss = Math.round((tt)*(val.S + val.u));
          if(ss >= 60*tt) ss = 0;
          if(fmt === 's') return ss === 0 ? "0" : ""+ss/tt;
          o = pad0(ss,2 + ss0);
          if(fmt === 'ss') return o.substr(0,2);
          return "." + o.substr(2,fmt.length-1);
          default: throw 'bad second format: ' + fmt;
        }
      case 90: /* 'Z' absolute time */
        switch(fmt) {
          case '[h]': case '[hh]': out = val.D*24+val.H; break;
          case '[m]': case '[mm]': out = (val.D*24+val.H)*60+val.M; break;
          case '[s]': case '[ss]': out = ((val.D*24+val.H)*60+val.M)*60+Math.round(val.S+val.u); break;
          default: throw 'bad abstime format: ' + fmt;
        } outl = fmt.length === 3 ? 1 : 2; break;
      case 101: /* 'e' era */
        out = y; outl = 1;
    }
    if(outl > 0) return pad0(out, outl); else return "";
  }
  /*jshint +W086 */
  function commaify(s/*:string*/)/*:string*/ {
    if(s.length <= 3) return s;
    var j = (s.length % 3), o = s.substr(0,j);
    for(; j!=s.length; j+=3) o+=(o.length > 0 ? "," : "") + s.substr(j,3);
    return o;
  }
  var write_num = (function make_write_num(){
    var pct1 = /%/g;
    function write_num_pct(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/{
      var sfmt = fmt.replace(pct1,""), mul = fmt.length - sfmt.length;
      return write_num(type, sfmt, val * Math.pow(10,2*mul)) + fill("%",mul);
    }
    function write_num_cm(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/{
      var idx = fmt.length - 1;
      while(fmt.charCodeAt(idx-1) === 44) --idx;
      return write_num(type, fmt.substr(0,idx), val / Math.pow(10,3*(fmt.length-idx)));
    }
    function write_num_exp(fmt/*:string*/, val/*:number*/)/*:string*/{
      var o/*:string*/;
      var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
      if(fmt.match(/^#+0.0E\+0$/)) {
        var period = fmt.indexOf("."); if(period === -1) period=fmt.indexOf('E');
        var ee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;
        if(ee < 0) ee += period;
        o = (val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);
        if(o.indexOf("e") === -1) {
          var fakee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E);
          if(o.indexOf(".") === -1) o = o.charAt(0) + "." + o.substr(1) + "E+" + (fakee - o.length+ee);
          else o += "E+" + (fakee - ee);
          while(o.substr(0,2) === "0.") {
            o = o.charAt(0) + o.substr(2,period) + "." + o.substr(2+period);
            o = o.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");
          }
          o = o.replace(/\+-/,"-");
        }
        o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3) { return $1 + $2 + $3.substr(0,(period+ee)%period) + "." + $3.substr(ee) + "E"; });
      } else o = val.toExponential(idx);
      if(fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0,o.length-1) + "0" + o.charAt(o.length-1);
      if(fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/,"e");
      return o.replace("e","E");
    }
    var frac1 = /# (\?+)( ?)\/( ?)(\d+)/;
    function write_num_f1(r/*:Array<string>*/, aval/*:number*/, sign/*:string*/)/*:string*/ {
      var den = parseInt(r[4],10), rr = Math.round(aval * den), base = Math.floor(rr/den);
      var myn = (rr - base*den), myd = den;
      return sign + (base === 0 ? "" : ""+base) + " " + (myn === 0 ? fill(" ", r[1].length + 1 + r[4].length) : pad_(myn,r[1].length) + r[2] + "/" + r[3] + pad0(myd,r[4].length));
    }
    function write_num_f2(r/*:Array<string>*/, aval/*:number*/, sign/*:string*/)/*:string*/ {
      return sign + (aval === 0 ? "" : ""+aval) + fill(" ", r[1].length + 2 + r[4].length);
    }
    var dec1 = /^#*0*\.(0+)/;
    var closeparen = /\).*[0#]/;
    var phone = /\(###\) ###\\?-####/;
    function hashq(str/*:string*/)/*:string*/ {
      var o = "", cc;
      for(var i = 0; i != str.length; ++i) switch((cc=str.charCodeAt(i))) {
        case 35: break;
        case 63: o+= " "; break;
        case 48: o+= "0"; break;
        default: o+= String.fromCharCode(cc);
      }
      return o;
    }
    function rnd(val/*:number*/, d/*:number*/)/*:string*/ { var dd = Math.pow(10,d); return ""+(Math.round(val * dd)/dd); }
    function dec(val/*:number*/, d/*:number*/)/*:number*/ {
      if (d < ('' + Math.round((val-Math.floor(val))*Math.pow(10,d))).length) {
        return 0;
      }
      return Math.round((val-Math.floor(val))*Math.pow(10,d));
    }
    function carry(val/*:number*/, d/*:number*/)/*:number*/ {
      if (d < ('' + Math.round((val-Math.floor(val))*Math.pow(10,d))).length) {
        return 1;
      }
      return 0;
    }
    function flr(val/*:number*/)/*:string*/ { if(val < 2147483647 && val > -2147483648) return ""+(val >= 0 ? (val|0) : (val-1|0)); return ""+Math.floor(val); }
    function write_num_flt(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/ {
      if(type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
        var ffmt = fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");
        if(val >= 0) return write_num_flt('n', ffmt, val);
        return '(' + write_num_flt('n', ffmt, -val) + ')';
      }
      if(fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm(type, fmt, val);
      if(fmt.indexOf('%') !== -1) return write_num_pct(type, fmt, val);
      if(fmt.indexOf('E') !== -1) return write_num_exp(fmt, val);
      if(fmt.charCodeAt(0) === 36) return "$"+write_num_flt(type,fmt.substr(fmt.charAt(1)==' '?2:1),val);
      var o;
      var r/*:?Array<string>*/, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
      if(fmt.match(/^00+$/)) return sign + pad0r(aval,fmt.length);
      if(fmt.match(/^[#?]+$/)) {
        o = pad0r(val,0); if(o === "0") o = "";
        return o.length > fmt.length ? o : hashq(fmt.substr(0,fmt.length-o.length)) + o;
      }
      if((r = fmt.match(frac1))) return write_num_f1(r, aval, sign);
      if(fmt.match(/^#+0+$/)) return sign + pad0r(aval,fmt.length - fmt.indexOf("0"));
      if((r = fmt.match(dec1))) {
        o = rnd(val, r[1].length).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$, $1) { return "." + $1 + fill("0", /*::(*/r/*::||[""])*/[1].length-$1.length); });
        return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./,".");
      }
      fmt = fmt.replace(/^#+([0.])/, "$1");
      if((r = fmt.match(/^(0*)\.(#*)$/))) {
        return sign + rnd(aval, r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");
      }
      if((r = fmt.match(/^#,##0(\.?)$/))) return sign + commaify(pad0r(aval,0));
      if((r = fmt.match(/^#,##0\.([#0]*0)$/))) {
        return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(""+(Math.floor(val) + carry(val, r[1].length))) + "." + pad0(dec(val, r[1].length),r[1].length);
      }
      if((r = fmt.match(/^#,#*,#0/))) return write_num_flt(type,fmt.replace(/^#,#*,/,""),val);
      if((r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/))) {
        o = _strrev(write_num_flt(type, fmt.replace(/[\\-]/g,""), val));
        ri = 0;
        return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o.charAt(ri++):x==='0'?'0':"";}));
      }
      if(fmt.match(phone)) {
        o = write_num_flt(type, "##########", val);
        return "(" + o.substr(0,3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
      }
      var oa = "";
      if((r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) {
        ri = Math.min(/*::String(*/r[4]/*::)*/.length,7);
        ff = frac(aval, Math.pow(10,ri)-1, false);
        o = "" + sign;
        oa = write_num("n", /*::String(*/r[1]/*::)*/, ff[1]);
        if(oa.charAt(oa.length-1) == " ") oa = oa.substr(0,oa.length-1) + "0";
        o += oa + /*::String(*/r[2]/*::)*/ + "/" + /*::String(*/r[3]/*::)*/;
        oa = rpad_(ff[2],ri);
        if(oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length-oa.length)) + oa;
        o += oa;
        return o;
      }
      if((r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) {
        ri = Math.min(Math.max(r[1].length, r[4].length),7);
        ff = frac(aval, Math.pow(10,ri)-1, true);
        return sign + (ff[0]||(ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1],ri) + r[2] + "/" + r[3] + rpad_(ff[2],ri): fill(" ", 2*ri+1 + r[2].length + r[3].length));
      }
      if((r = fmt.match(/^[#0?]+$/))) {
        o = pad0r(val, 0);
        if(fmt.length <= o.length) return o;
        return hashq(fmt.substr(0,fmt.length-o.length)) + o;
      }
      if((r = fmt.match(/^([#0?]+)\.([#0]+)$/))) {
        o = "" + val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");
        ri = o.indexOf(".");
        var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
        return hashq(fmt.substr(0,lres) + o + fmt.substr(fmt.length-rres));
      }
      if((r = fmt.match(/^00,000\.([#0]*0)$/))) {
        ri = dec(val, r[1].length);
        return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(flr(val)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$) { return "00," + ($$.length < 3 ? pad0(0,3-$$.length) : "") + $$; }) + "." + pad0(ri,r[1].length);
      }
      switch(fmt) {
        case "#,###": var x = commaify(pad0r(aval,0)); return x !== "0" ? sign + x : "";
        default:
      }
      throw new Error("unsupported format |" + fmt + "|");
    }
    function write_num_cm2(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/{
      var idx = fmt.length - 1;
      while(fmt.charCodeAt(idx-1) === 44) --idx;
      return write_num(type, fmt.substr(0,idx), val / Math.pow(10,3*(fmt.length-idx)));
    }
    function write_num_pct2(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/{
      var sfmt = fmt.replace(pct1,""), mul = fmt.length - sfmt.length;
      return write_num(type, sfmt, val * Math.pow(10,2*mul)) + fill("%",mul);
    }
    function write_num_exp2(fmt/*:string*/, val/*:number*/)/*:string*/{
      var o/*:string*/;
      var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
      if(fmt.match(/^#+0.0E\+0$/)) {
        var period = fmt.indexOf("."); if(period === -1) period=fmt.indexOf('E');
        var ee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;
        if(ee < 0) ee += period;
        o = (val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);
        if(!o.match(/[Ee]/)) {
          var fakee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E);
          if(o.indexOf(".") === -1) o = o.charAt(0) + "." + o.substr(1) + "E+" + (fakee - o.length+ee);
          else o += "E+" + (fakee - ee);
          o = o.replace(/\+-/,"-");
        }
        o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3) { return $1 + $2 + $3.substr(0,(period+ee)%period) + "." + $3.substr(ee) + "E"; });
      } else o = val.toExponential(idx);
      if(fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0,o.length-1) + "0" + o.charAt(o.length-1);
      if(fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/,"e");
      return o.replace("e","E");
    }
    function write_num_int(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/ {
      if(type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
        var ffmt = fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");
        if(val >= 0) return write_num_int('n', ffmt, val);
        return '(' + write_num_int('n', ffmt, -val) + ')';
      }
      if(fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm2(type, fmt, val);
      if(fmt.indexOf('%') !== -1) return write_num_pct2(type, fmt, val);
      if(fmt.indexOf('E') !== -1) return write_num_exp2(fmt, val);
      if(fmt.charCodeAt(0) === 36) return "$"+write_num_int(type,fmt.substr(fmt.charAt(1)==' '?2:1),val);
      var o;
      var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
      if(fmt.match(/^00+$/)) return sign + pad0(aval,fmt.length);
      if(fmt.match(/^[#?]+$/)) {
        o = (""+val); if(val === 0) o = "";
        return o.length > fmt.length ? o : hashq(fmt.substr(0,fmt.length-o.length)) + o;
      }
      if((r = fmt.match(frac1))) return write_num_f2(r, aval, sign);
      if(fmt.match(/^#+0+$/)) return sign + pad0(aval,fmt.length - fmt.indexOf("0"));
      if((r = fmt.match(dec1))) {
        /*:: if(!Array.isArray(r)) throw "unreachable"; */
        o = (""+val).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]);
        o = o.replace(/\.(\d*)$/,function($$, $1) {
          /*:: if(!Array.isArray(r)) throw "unreachable"; */
          return "." + $1 + fill("0", r[1].length-$1.length); });
        return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./,".");
      }
      fmt = fmt.replace(/^#+([0.])/, "$1");
      if((r = fmt.match(/^(0*)\.(#*)$/))) {
        return sign + (""+aval).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");
      }
      if((r = fmt.match(/^#,##0(\.?)$/))) return sign + commaify((""+aval));
      if((r = fmt.match(/^#,##0\.([#0]*0)$/))) {
        return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify((""+val)) + "." + fill('0',r[1].length);
      }
      if((r = fmt.match(/^#,#*,#0/))) return write_num_int(type,fmt.replace(/^#,#*,/,""),val);
      if((r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/))) {
        o = _strrev(write_num_int(type, fmt.replace(/[\\-]/g,""), val));
        ri = 0;
        return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o.charAt(ri++):x==='0'?'0':"";}));
      }
      if(fmt.match(phone)) {
        o = write_num_int(type, "##########", val);
        return "(" + o.substr(0,3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
      }
      var oa = "";
      if((r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) {
        ri = Math.min(r[4].length,7);
        ff = frac(aval, Math.pow(10,ri)-1, false);
        o = "" + sign;
        oa = write_num("n", r[1], ff[1]);
        if(oa.charAt(oa.length-1) == " ") oa = oa.substr(0,oa.length-1) + "0";
        o += oa + r[2] + "/" + r[3];
        oa = rpad_(ff[2],ri);
        if(oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length-oa.length)) + oa;
        o += oa;
        return o;
      }
      if((r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) {
        ri = Math.min(Math.max(r[1].length, r[4].length),7);
        ff = frac(aval, Math.pow(10,ri)-1, true);
        return sign + (ff[0]||(ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1],ri) + r[2] + "/" + r[3] + rpad_(ff[2],ri): fill(" ", 2*ri+1 + r[2].length + r[3].length));
      }
      if((r = fmt.match(/^[#0?]+$/))) {
        o = "" + val;
        if(fmt.length <= o.length) return o;
        return hashq(fmt.substr(0,fmt.length-o.length)) + o;
      }
      if((r = fmt.match(/^([#0]+)\.([#0]+)$/))) {
        o = "" + val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");
        ri = o.indexOf(".");
        var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
        return hashq(fmt.substr(0,lres) + o + fmt.substr(fmt.length-rres));
      }
      if((r = fmt.match(/^00,000\.([#0]*0)$/))) {
        return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify(""+val).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$) { return "00," + ($$.length < 3 ? pad0(0,3-$$.length) : "") + $$; }) + "." + pad0(0,r[1].length);
      }
      switch(fmt) {
        case "#,###": var x = commaify(""+aval); return x !== "0" ? sign + x : "";
        default:
      }
      throw new Error("unsupported format |" + fmt + "|");
    }
    return function write_num(type/*:string*/, fmt/*:string*/, val/*:number*/)/*:string*/ {
      return (val|0) === val ? write_num_int(type, fmt, val) : write_num_flt(type, fmt, val);
    };})();
  function split_fmt(fmt/*:string*/)/*:Array<string>*/ {
    var out/*:Array<string>*/ = [];
    var in_str = false, cc;
    for(var i = 0, j = 0; i < fmt.length; ++i) switch((cc=fmt.charCodeAt(i))) {
      case 34: /* '"' */
        in_str = !in_str; break;
      case 95: case 42: case 92: /* '_' '*' '\\' */
        ++i; break;
      case 59: /* ';' */
        out[out.length] = fmt.substr(j,i-j);
        j = i+1;
    }
    out[out.length] = fmt.substr(j);
    if(in_str === true) throw new Error("Format |" + fmt + "| unterminated string ");
    return out;
  }
  SSF._split = split_fmt;
  var abstime = /\[[HhMmSs]*\]/;
  function fmt_is_date(fmt/*:string*/)/*:boolean*/ {
    var i = 0, cc = 0, c = "", o = "";
    while(i < fmt.length) {
      switch((c = fmt.charAt(i))) {
        case 'G': if(isgeneral(fmt, i)) i+= 6; i++; break;
        case '"': for(;(cc=fmt.charCodeAt(++i)) !== 34 && i < fmt.length;) ++i; ++i; break;
        case '\\': i+=2; break;
        case '_': i+=2; break;
        case '@': ++i; break;
        case 'B': case 'b':
        if(fmt.charAt(i+1) === "1" || fmt.charAt(i+1) === "2") return true;
        /* falls through */
        case 'M': case 'D': case 'Y': case 'H': case 'S': case 'E':
        /* falls through */
        case 'm': case 'd': case 'y': case 'h': case 's': case 'e': case 'g': return true;
        case 'A':
          if(fmt.substr(i, 3) === "A/P") return true;
          if(fmt.substr(i, 5) === "AM/PM") return true;
          ++i; break;
        case '[':
          o = c;
          while(fmt.charAt(i++) !== ']' && i < fmt.length) o += fmt.charAt(i);
          if(o.match(abstime)) return true;
          break;
        case '.':
        /* falls through */
        case '0': case '#':
        while(i < fmt.length && ("0#?.,E+-%".indexOf(c=fmt.charAt(++i)) > -1 || c=='\\' && fmt.charAt(i+1) == "-" && "0#".indexOf(fmt.charAt(i+2))>-1));
        break;
        case '?': while(fmt.charAt(++i) === c); break;
        case '*': ++i; if(fmt.charAt(i) == ' ' || fmt.charAt(i) == '*') ++i; break;
        case '(': case ')': ++i; break;
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        while(i < fmt.length && "0123456789".indexOf(fmt.charAt(++i)) > -1); break;
        case ' ': ++i; break;
        default: ++i; break;
      }
    }
    return false;
  }
  SSF.is_date = fmt_is_date;
  function eval_fmt(fmt/*:string*/, v/*:any*/, opts/*:any*/, flen/*:number*/) {
    var out = [], o = "", i = 0, c = "", lst='t', q, dt, j, cc;
    var hr='H';
    /* Tokenize */
    while(i < fmt.length) {
      switch((c = fmt.charAt(i))) {
        case 'G': /* General */
          if(!isgeneral(fmt, i)) throw new Error('unrecognized character ' + c + ' in ' +fmt);
          out[out.length] = {t:'G', v:'General'}; i+=7; break;
        case '"': /* Literal text */
          for(o="";(cc=fmt.charCodeAt(++i)) !== 34 && i < fmt.length;) o += String.fromCharCode(cc);
          out[out.length] = {t:'t', v:o}; ++i; break;
        case '\\': var w = fmt.charAt(++i), t = (w === "(" || w === ")") ? w : 't';
          out[out.length] = {t:t, v:w}; ++i; break;
        case '_': out[out.length] = {t:'t', v:" "}; i+=2; break;
        case '@': /* Text Placeholder */
          out[out.length] = {t:'T', v:v}; ++i; break;
        case 'B': case 'b':
        if(fmt.charAt(i+1) === "1" || fmt.charAt(i+1) === "2") {
          if(dt==null) { dt=parse_date_code(v, opts, fmt.charAt(i+1) === "2"); if(dt==null) return ""; }
          out[out.length] = {t:'X', v:fmt.substr(i,2)}; lst = c; i+=2; break;
        }
        /* falls through */
        case 'M': case 'D': case 'Y': case 'H': case 'S': case 'E':
        c = c.toLowerCase();
        /* falls through */
        case 'm': case 'd': case 'y': case 'h': case 's': case 'e': case 'g':
        if(v < 0) return "";
        if(dt==null) { dt=parse_date_code(v, opts); if(dt==null) return ""; }
        o = c; while(++i<fmt.length && fmt.charAt(i).toLowerCase() === c) o+=c;
        if(c === 'm' && lst.toLowerCase() === 'h') c = 'M'; /* m = minute */
        if(c === 'h') c = hr;
        out[out.length] = {t:c, v:o}; lst = c; break;
        case 'A':
          q={t:c, v:"A"};
          if(dt==null) dt=parse_date_code(v, opts);
          if(fmt.substr(i, 3) === "A/P") { if(dt!=null) q.v = dt.H >= 12 ? "P" : "A"; q.t = 'T'; hr='h';i+=3;}
          else if(fmt.substr(i,5) === "AM/PM") { if(dt!=null) q.v = dt.H >= 12 ? "PM" : "AM"; q.t = 'T'; i+=5; hr='h'; }
          else { q.t = "t"; ++i; }
          if(dt==null && q.t === 'T') return "";
          out[out.length] = q; lst = c; break;
        case '[':
          o = c;
          while(fmt.charAt(i++) !== ']' && i < fmt.length) o += fmt.charAt(i);
          if(o.slice(-1) !== ']') throw 'unterminated "[" block: |' + o + '|';
          if(o.match(abstime)) {
            if(dt==null) { dt=parse_date_code(v, opts); if(dt==null) return ""; }
            out[out.length] = {t:'Z', v:o.toLowerCase()};
          } else { o=""; }
          break;
        /* Numbers */
        case '.':
          if(dt != null) {
            o = c; while((c=fmt.charAt(++i)) === "0") o += c;
            out[out.length] = {t:'s', v:o}; break;
          }
        /* falls through */
        case '0': case '#':
        o = c; while(++i < fmt.length && "0#?.,E+-%".indexOf(c=fmt.charAt(i)) > -1 || c=='\\' && fmt.charAt(i+1) == "-" && "0#".indexOf(fmt.charAt(i+2))>-1) o += c;
        out[out.length] = {t:'n', v:o}; break;
        case '?':
          o = c; while(fmt.charAt(++i) === c) o+=c;
          q={t:c, v:o}; out[out.length] = q; lst = c; break;
        case '*': ++i; if(fmt.charAt(i) == ' ' || fmt.charAt(i) == '*') ++i; break; // **
        case '(': case ')': out[out.length] = {t:(flen===1?'t':c), v:c}; ++i; break;
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
        o = c; while(i < fmt.length && "0123456789".indexOf(fmt.charAt(++i)) > -1) o+=fmt.charAt(i);
        out[out.length] = {t:'D', v:o}; break;
        case ' ': out[out.length] = {t:c, v:c}; ++i; break;
        default:
          if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxz".indexOf(c) === -1) throw new Error('unrecognized character ' + c + ' in ' + fmt);
          out[out.length] = {t:'t', v:c}; ++i; break;
      }
    }
    var bt = 0, ss0 = 0, ssm;
    for(i=out.length-1, lst='t'; i >= 0; --i) {
      switch(out[i].t) {
        case 'h': case 'H': out[i].t = hr; lst='h'; if(bt < 1) bt = 1; break;
        case 's':
          if((ssm=out[i].v.match(/\.0+$/))) ss0=Math.max(ss0,ssm[0].length-1);
          if(bt < 3) bt = 3;
        /* falls through */
        case 'd': case 'y': case 'M': case 'e': lst=out[i].t; break;
        case 'm': if(lst === 's') { out[i].t = 'M'; if(bt < 2) bt = 2; } break;
        case 'X': if(out[i].v === "B2");
          break;
        case 'Z':
          if(bt < 1 && out[i].v.match(/[Hh]/)) bt = 1;
          if(bt < 2 && out[i].v.match(/[Mm]/)) bt = 2;
          if(bt < 3 && out[i].v.match(/[Ss]/)) bt = 3;
      }
    }
    switch(bt) {
      case 0: break;
      case 1:
        /*::if(!dt) break;*/
        if(dt.u >= 0.5) { dt.u = 0; ++dt.S; }
        if(dt.S >=  60) { dt.S = 0; ++dt.M; }
        if(dt.M >=  60) { dt.M = 0; ++dt.H; }
        break;
      case 2:
        /*::if(!dt) break;*/
        if(dt.u >= 0.5) { dt.u = 0; ++dt.S; }
        if(dt.S >=  60) { dt.S = 0; ++dt.M; }
        break;
    }
    /* replace fields */
    var nstr = "", jj;
    for(i=0; i < out.length; ++i) {
      switch(out[i].t) {
        case 't': case 'T': case ' ': case 'D': break;
        case 'X': out[i].v = ""; out[i].t = ";"; break;
        case 'd': case 'm': case 'y': case 'h': case 'H': case 'M': case 's': case 'e': case 'b': case 'Z':
        /*::if(!dt) throw "unreachable"; */
        out[i].v = write_date(out[i].t.charCodeAt(0), out[i].v, dt, ss0);
        out[i].t = 't'; break;
        case 'n': case '(': case '?':
        jj = i+1;
        while(out[jj] != null && (
          (c=out[jj].t) === "?" || c === "D" ||
          (c === " " || c === "t") && out[jj+1] != null && (out[jj+1].t === '?' || out[jj+1].t === "t" && out[jj+1].v === '/') ||
          out[i].t === '(' && (c === ' ' || c === 'n' || c === ')') ||
          c === 't' && (out[jj].v === '/' || '$€'.indexOf(out[jj].v) > -1 || out[jj].v === ' ' && out[jj+1] != null && out[jj+1].t == '?')
        )) {
          out[i].v += out[jj].v;
          out[jj] = {v:"", t:";"}; ++jj;
        }
        nstr += out[i].v;
        i = jj-1; break;
        case 'G': out[i].t = 't'; out[i].v = general_fmt(v,opts); break;
      }
    }
    var vv = "", myv, ostr;
    if(nstr.length > 0) {
      myv = (v<0&&nstr.charCodeAt(0) === 45 ? -v : v); /* '-' */
      ostr = write_num(nstr.charCodeAt(0) === 40 ? '(' : 'n', nstr, myv); /* '(' */
      jj=ostr.length-1;
      var decpt = out.length;
      for(i=0; i < out.length; ++i) if(out[i] != null && out[i].v.indexOf(".") > -1) { decpt = i; break; }
      var lasti=out.length;
      if(decpt === out.length && ostr.indexOf("E") === -1) {
        for(i=out.length-1; i>= 0;--i) {
          if(out[i] == null || 'n?('.indexOf(out[i].t) === -1) continue;
          if(jj>=out[i].v.length-1) { jj -= out[i].v.length; out[i].v = ostr.substr(jj+1, out[i].v.length); }
          else if(jj < 0) out[i].v = "";
          else { out[i].v = ostr.substr(0, jj+1); jj = -1; }
          out[i].t = 't';
          lasti = i;
        }
        if(jj>=0 && lasti<out.length) out[lasti].v = ostr.substr(0,jj+1) + out[lasti].v;
      }
      else if(decpt !== out.length && ostr.indexOf("E") === -1) {
        jj = ostr.indexOf(".")-1;
        for(i=decpt; i>= 0; --i) {
          if(out[i] == null || 'n?('.indexOf(out[i].t) === -1) continue;
          j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")-1:out[i].v.length-1;
          vv = out[i].v.substr(j+1);
          for(; j>=0; --j) {
            if(jj>=0 && (out[i].v.charAt(j) === "0" || out[i].v.charAt(j) === "#")) vv = ostr.charAt(jj--) + vv;
          }
          out[i].v = vv;
          out[i].t = 't';
          lasti = i;
        }
        if(jj>=0 && lasti<out.length) out[lasti].v = ostr.substr(0,jj+1) + out[lasti].v;
        jj = ostr.indexOf(".")+1;
        for(i=decpt; i<out.length; ++i) {
          if(out[i] == null || 'n?('.indexOf(out[i].t) === -1 && i !== decpt ) continue;
          j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")+1:0;
          vv = out[i].v.substr(0,j);
          for(; j<out[i].v.length; ++j) {
            if(jj<ostr.length) vv += ostr.charAt(jj++);
          }
          out[i].v = vv;
          out[i].t = 't';
          lasti = i;
        }
      }
    }
    for(i=0; i<out.length; ++i) if(out[i] != null && 'n(?'.indexOf(out[i].t)>-1) {
      myv = (flen >1 && v < 0 && i>0 && out[i-1].v === "-" ? -v:v);
      out[i].v = write_num(out[i].t, out[i].v, myv);
      out[i].t = 't';
    }
    var retval = "";
    for(i=0; i !== out.length; ++i) if(out[i] != null) retval += out[i].v;
    return retval;
  }
  SSF._eval = eval_fmt;
  var cfregex = /\[[=<>]/;
  var cfregex2 = /\[([=<>]*)(-?\d+\.?\d*)\]/;
  function chkcond(v, rr) {
    if(rr == null) return false;
    var thresh = parseFloat(rr[2]);
    switch(rr[1]) {
      case "=":  if(v == thresh) return true; break;
      case ">":  if(v >  thresh) return true; break;
      case "<":  if(v <  thresh) return true; break;
      case "<>": if(v != thresh) return true; break;
      case ">=": if(v >= thresh) return true; break;
      case "<=": if(v <= thresh) return true; break;
    }
    return false;
  }
  function choose_fmt(f/*:string*/, v) {
    var fmt = split_fmt(f);
    var l = fmt.length, lat = fmt[l-1].indexOf("@");
    if(l<4 && lat>-1) --l;
    if(fmt.length > 4) throw new Error("cannot find right format for |" + fmt.join("|") + "|");
    if(typeof v !== "number") return [4, fmt.length === 4 || lat>-1?fmt[fmt.length-1]:"@"];
    switch(fmt.length) {
      case 1: fmt = lat>-1 ? ["General", "General", "General", fmt[0]] : [fmt[0], fmt[0], fmt[0], "@"]; break;
      case 2: fmt = lat>-1 ? [fmt[0], fmt[0], fmt[0], fmt[1]] : [fmt[0], fmt[1], fmt[0], "@"]; break;
      case 3: fmt = lat>-1 ? [fmt[0], fmt[1], fmt[0], fmt[2]] : [fmt[0], fmt[1], fmt[2], "@"]; break;
      case 4: break;
    }
    var ff = v > 0 ? fmt[0] : v < 0 ? fmt[1] : fmt[2];
    if(fmt[0].indexOf("[") === -1 && fmt[1].indexOf("[") === -1) return [l, ff];
    if(fmt[0].match(cfregex) != null || fmt[1].match(cfregex) != null) {
      var m1 = fmt[0].match(cfregex2);
      var m2 = fmt[1].match(cfregex2);
      return chkcond(v, m1) ? [l, fmt[0]] : chkcond(v, m2) ? [l, fmt[1]] : [l, fmt[m1 != null && m2 != null ? 2 : 1]];
    }
    return [l, ff];
  }
  function format(fmt/*:string|number*/,v/*:any*/,o/*:?any*/) {
    fixopts(o != null ? o : (o=[]));
    var sfmt = "";
    switch(typeof fmt) {
      case "string": sfmt = fmt; break;
      case "number": sfmt = (o.table != null ? (o.table/*:any*/) : table_fmt)[fmt]; break;
    }
    if(isgeneral(sfmt,0)) return general_fmt(v, o);
    var f = choose_fmt(sfmt, v);
    if(isgeneral(f[1])) return general_fmt(v, o);
    if(v === true) v = "TRUE"; else if(v === false) v = "FALSE";
    else if(v === "" || v == null) return "";
    return eval_fmt(f[1], v, o, f[0]);
  }
  SSF._table = table_fmt;
  SSF.load = function load_entry(fmt/*:string*/, idx/*:number*/) { table_fmt[idx] = fmt; };
  SSF.format = format;
  SSF.get_table = function get_table() { return table_fmt; };
  SSF.load_table = function load_table(tbl/*:{[n:number]:string}*/) { for(var i=0; i!=0x0188; ++i) if(tbl[i] !== undefined) SSF.load(tbl[i], i); };
};
make_ssf(SSF);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//window (global fns)
window.clone = function (smth) {
  return JSON.parse(JSON.stringify(smth));
};

window.cloneDeep = function (smth) {
  return Object.copyDeep({ smth: smth }).smth;
};

window.areEqual = function (smth1, smth2) {
  return JSON.stringify(smth1) == JSON.stringify(smth2);
};

// window.cloneDeep = function(smth) {

//   if (smth instanceof Date) {
//     return new Date(smth)
//   }

//   if (Array.isArray(smth)) {
//     return obj.slice()
//   }

//   if(Function.isFunction(smth)) {
//     return smth.clone()
//   }

//   if (obj instanceof Object) {
//     var copy = new obj.constructor()
//     for (var attr in obj) {
//       if (obj.hasOwnProperty(attr)){
//         if (obj[attr] instanceof Object){
//           copy[attr] = window.cloneDeep(obj[attr])
//         } else {
//           copy[attr] = obj[attr];
//         }
//       }
//     }
//     return copy
//   }
// }

//String proto
String.prototype.withoutLastWord = function () {
  var index = this.lastIndexOf(' ');
  if (index >= 0) {
    return this.slice(0, index);
  } else {
    return '';
  }
};

String.prototype.insertInstead = function (start, count, substr) {
  return '' + this.slice(0, start) + substr + this.slice(start + count);
};

//String
String.isString = function (smth) {
  return typeof smth === 'string';
};

//Array proto
Array.prototype.includes = function (item) {
  return this.indexOf(item) >= 0;
};

Array.prototype.each = Array.prototype.forEach;

Array.prototype.firstWhere = function (prop, value) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item != null && item[prop] == value) {
        return item;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

//Number
Number.isNumber = function (n) {
  if (String.isString(n)) {
    n = n.replace(/\,/g, '');
  }
  var parsed = parseFloat(n);
  return !isNaN(parsed) && isFinite(n);
};

Number.parseNumber = function (smth) {
  if (String.isString(smth)) {
    smth = smth.replace(/\,/g, '');
  }
  return parseFloat(smth);
};

//Function proto
Function.prototype.wrap = function (fn) {
  var original = this;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    fn.apply(undefined, [original].concat(args));
  };
};

//Function
Function.isFunction = function (fn) {
  return typeof fn === 'function';
};

//Function prototype

//Object
Object.forOwnProps = function (o, fn) {
  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      fn(o[k], k);
    }
  }
};

Object.extendWithOwnProperties = function (o1, o2) {
  Object.forOwnProps(o2, function (item, k) {
    o1[k] = item;
  });
};

Object.isObject = function (o) {
  return o != null && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && !Array.isArray(o);
};

Object.defaultsDeep = function () {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var copy = function copy(target, current) {
    Object.forOwnProps(current, function (currentValue, key) {
      var targetValue = target[key];
      if (targetValue == null) {
        target[key] = currentValue;
      } else if (Object.isObject(targetValue) && Object.isObject(currentValue)) {
        Object.defaultsDeep(targetValue, currentValue);
      }
    });
  };

  var i = 0;
  while (i < arguments.length) {
    var obj = arguments[i++];
    if (obj) {
      copy(target, obj);
    }
  }
  return target;
};

Object.copyDeep = function (source) {
  var result = {};
  Object.mergeDeep(result, source);
  return result;
};

Object.mergeDeep = function (target) {
  for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (Object.isObject(target) && Object.isObject(source)) {
    for (var key in source) {
      if (Object.isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        Object.mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return Object.mergeDeep.apply(Object, [target].concat(sources));
};

//PromiseCancelable

var PromiseCancelable = function () {
  function PromiseCancelable(fn) {
    _classCallCheck(this, PromiseCancelable);

    this.fn = fn;
    this._createPromise();
  }

  _createClass(PromiseCancelable, [{
    key: '_createPromise',
    value: function _createPromise() {
      var _this = this;

      var promise = new Promise(this.fn);

      this.__promise = new Promise(function (resolve, reject) {
        promise.then(function (data) {
          return _this.canceled ? reject({ canceled: true }) : resolve(data);
        });
        promise.catch(function (error) {
          return _this.canceled ? reject({ canceled: true }) : reject(error);
        });
      });
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.canceled = true;
    }
  }, {
    key: 'then',
    value: function then(fn) {
      var _this2 = this;

      return new PromiseCancelable(function (resolve, reject) {
        _this2.__promise.then(fn).then(resolve, reject);
      });
    }
  }, {
    key: 'catch',
    value: function _catch(fn) {
      return this.__promise.catch(fn);
    }
  }], [{
    key: 'all',
    value: function all() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return new PromiseCancelable(function (resolve, reject) {
        Promise.all.apply(Promise, args).then(resolve, reject);
      });
    }
  }, {
    key: 'resolve',
    value: function resolve() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return new PromiseCancelable(function (resolve, reject) {
        Promise.resolve.apply(Promise, args).then(resolve, reject);
      });
    }
  }]);

  return PromiseCancelable;
}();

if (!d3.easeCubicOut) {
  d3.easeCubicOut = 'easeCubicOut';
}

d3CustomUtils = {};

(function () {
  var defaultLocale = 'en-US';
  var defaultCurrency = 'USD';

  var NumberType = {
    number: 'number',
    currency: 'currency',
    percent: 'percent'
  };

  var Colors = {
    positive: '#26B910',
    negative: '#E00020',
    neutral: '#151921'
  };

  /**
   * Constructor
   *
   * @param {Number} num
   * @param {string} type
   * @param {string} formatString
   * @param {Object|null} options
   */

  var NumberFormatter = function () {
    function NumberFormatter(num) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NumberType.number;
      var formatString = arguments[2];
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      _classCallCheck(this, NumberFormatter);

      this.num = num;
      this.type = type;
      this.formatString = formatString;
      this.options = options;

      Object.defaultsDeep(options, {
        locale: defaultLocale,
        currency: defaultCurrency,
        percents: {
          maximumFractionDigits: 4
        }
      });

      this.result = {};
    }

    /**
     * Make rounding then abbreviate number.
     *
     * @private
     */


    _createClass(NumberFormatter, [{
      key: '__rounding',
      value: function __rounding() {
        var roundedStr = void 0;
        var roundedNum = void 0;
        var abbr = void 0;

        if (this.type !== NumberType.percent && this.result.num >= 10000) {
          roundedStr = abbreviateNum(Number(this.result.num));
          roundedNum = roundedStr.toString().slice(0, -1);
          abbr = roundedStr.toString().slice(-1);
        } else {
          roundedNum = this.result.num;
          abbr = '';
        }

        if (this.type === NumberType.percent && Math.abs(this.num) > 1) {
          roundedStr = abbreviateNum(Math.abs(this.result.num));
          roundedNum = roundedStr.toString().slice(0, -1);
          abbr = roundedStr.toString().slice(-1);
        }

        this.result.num = Math.abs(roundedNum);
        this.result.abbr = abbr;
      }

      /**
       * Apply mask to rounded number.
       *
       * @private
       */

    }, {
      key: '__format',
      value: function __format() {
        var colorPattern = /\[(.*)]/;
        var maskPattern = /(\[.*])?(.*)/;

        var parts = this.formatString.split(';');

        var colors = {};
        var masks = {};

        for (var i = 0; i < parts.length; i++) {
          if (!parts[i]) {
            break;
          }

          var _color = parts[i].match(colorPattern);
          var mask = parts[i].match(maskPattern);

          var colorPresent = _color && _color[1].length;

          switch (true) {
            case i === 0:
              colors.positive = colorPresent ? _color[1] : Colors.positive;
              colors.negative = Colors.negative;
              colors.neutral = Colors.neutral;

              masks.positive = mask[2];
              masks.negative = mask[2];
              masks.neutral = mask[2];
              break;
            case i === 1:
              colors.negative = colorPresent ? _color[1] : Colors.negative;
              masks.negative = mask[2];
              break;
            case i === 2:
              colors.neutral = colorPresent ? _color[1] : Colors.neutral;
              masks.neutral = mask[2];
              break;
          }
        }

        var text = void 0;
        var color = void 0;
        var num = this.result.num;

        switch (true) {
          case Number.isNumber(this.result.num):
            text = d3.format(num > 0 ? masks.positive : num < 0 ? masks.negative : masks.neutral)(Number(num));
            color = this.num > 0 ? colors.positive : this.num < 0 ? colors.negative : colors.neutral;
            // text = SSF.format(num > 0 ? masks.positive : num < 0 ? masks.negative : masks.neutral, Number(num));
            // color = this.num > 0 ? colors.positive : this.num < 0 ? colors.negative : colors.neutral;
            break;
          case String.isString(num):
            text = num;
            color = 'black';
            break;
          default:
            text = JSON.stringify(num);
            color = 'black';
        }

        this.result.num = text;
        this.result.color = color;
      }

      /**
       * Apply localization to percent.
       * @private
       */

    }, {
      key: '__percent',
      value: function __percent() {
        if (this.type === NumberType.percent) {
          this.result.typeSign = '%';
          this.result.typeSignPos = 'end';

          this.result.num = this.num.toLocaleString(this.options.locale, {
            style: 'percent',
            maximumFractionDigits: this.options.percents.maximumFractionDigits
          });

          this.result.num = this.result.num.slice(0, this.result.num.length - 1);

          if (Math.abs(this.num) < 1) {
            this.result.num = SSF.format(this.formatString, Number(this.result.num));
            return;
          }

          this.result.num = this.result.num.replace(',', '');
        }
      }

      /**
       * Apply localization to rounded and formatted number.
       *
       * @private
       */

    }, {
      key: '__currency',
      value: function __currency() {
        switch (true) {
          case this.type === NumberType.percent:
            {
              break;
            }

          case this.type === NumberType.currency:
            {
              var localizedStr = Number(this.result.num).toLocaleString(this.options.locale, {
                style: this.type,
                currency: this.options.currency
              });

              if (Number(localizedStr.charAt(0))) {
                this.result.typeSign = localizedStr.charAt(localizedStr.length - 1);
                this.result.typeSignPos = 'end';
                break;
              }

              this.result.typeSign = localizedStr.charAt(0);
              this.result.typeSignPos = 'start';
              break;
            }

          default:
            {
              this.result.typeSign = this.type === NumberType.number ? '' : ' ' + this.type;
              this.result.typeSignPos = 'end';
            }
        }
      }

      /**
       * Detect number's sign.
       *
       * @private
       */

    }, {
      key: '__sign',
      value: function __sign() {
        this.result.num = Math.abs(this.num);

        if (this.num >= 0) {
          this.result.sign = '';
          return;
        }
        this.result.sign = '-';
      }

      /**
       *
       * @returns {{text: string, color: string}}
       */

    }, {
      key: 'perform',
      value: function perform() {
        this.__sign();
        this.__percent();
        this.__rounding();
        this.__format();
        this.__currency();

        var startTypeSign = '' + (this.result.typeSignPos == 'start' ? this.result.typeSign : '');
        var endTypeSign = '' + (this.result.typeSignPos == 'end' ? this.result.typeSign : '');

        return {
          text: '' + this.result.sign + startTypeSign + this.result.num + this.result.abbr + endTypeSign,
          color: this.result.color
        };
      }
    }]);

    return NumberFormatter;
  }();

  /**
   * Abbreviate number
   *
   * @param {Number} number
   * @param {Number} decimalPlaces
   * @returns {String}
   */


  function abbreviateNum(number) {
    var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var suffixes = ['K', 'M', 'B', 'T'];

    decimalPlaces = Math.pow(10, decimalPlaces);

    for (var i = suffixes.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3);

      if (size <= number) {
        var number = Math.round(number * decimalPlaces / size) / decimalPlaces;

        if (number == 1000 && i < suffixes.length - 1) {
          number = 1;
          i++;
        }

        number += suffixes[i];
        break;
      }
    }

    return number.toString();
  }

  /**
   * Wrapping large strings
   *
   * @param {string} text
   * @param {Object} targetElement
   * @param {Object} options
   */
  function drawWrappedText(text, targetElement) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    Object.defaultsDeep(options, {
      fontSize: 16,
      isWordBreak: false,
      doClipPath: false,
      ellipsisToLastWord: false,
      title: true
    });

    var maxLineCount = options && options.maxLineCount ? options.maxLineCount : null;
    var width = options && options.width ? options.width : null;
    var height = options && options.height ? options.height : null;
    var x = options && options.x ? options.x : null;
    var y = options && options.y ? options.y : null;
    var fontColor = options && options.fontColor ? options.fontColor : null;
    var fontSize = options && options.fontSize ? options.fontSize : 16;
    var textAnchor = options && options.textAnchor ? options.textAnchor : null;
    var rotate = options && options.rotate ? options.rotate : null;
    var containerRotate = options && options.containerRotate ? options.containerRotate : null;
    var containerX = options && options.containerX ? options.containerX : null;
    var containerY = options && options.containerY ? options.containerY : null;
    var verticalAlign = options && options.verticalAlign ? options.verticalAlign : null;
    var split = options && options.split ? options.split : null;
    var lineHeight = options && options.lineHeight ? options.lineHeight : null;
    var overflow = options && options.overflow ? options.overflow : null;
    var fontFamily = options && options.fontFamily ? options.fontFamily : null;
    var fontWeight = options && options.fontWeight ? options.fontWeight : null;
    var renderCallback = options && options.renderCallback ? options.renderCallback : null;
    var isWordBreak = options && options.isWordBreak ? options.isWordBreak : false;
    var doClipPath = options && options.doClipPath ? options.doClipPath : false;
    var ellipsisToLastWord = options && options.ellipsisToLastWord ? options.ellipsisToLastWord : false;

    if (ellipsisToLastWord) {
      // Temporary disable for correct calculation
      isWordBreak = false;
      textAnchor = null;
      doClipPath = true;
    }

    if (isWordBreak && !Number.isNumber(text)) {
      isWordBreak = false;
    }

    var textBox = new d3plus.TextBox();

    var useClip = true;

    if (isWordBreak && !Number.isNumber(text)) {
      isWordBreak = false;
    }

    if (isWordBreak) {
      var minFontSize = 8;
      var baseFontSize = 12;
      var fontScaleKoef = 6.5;
      var widthScaleKoef = 2.35;
      var defaultFontSize = 16;
      if (fontSize < minFontSize) {
        fontSize = minFontSize; // otherwise particular character in text too small
      }
      var backspacedText = text.replace(/\s/gi, function (m) {
        return "  ";
      });
      var spacedText = backspacedText.split('').join(" ");
      targetElement.style('letter-spacing', '-2');
      var data = [{ text: spacedText }];
      width = width * ((fontScaleKoef + Math.abs(fontSize - baseFontSize)) / (fontSize * (fontSize / defaultFontSize)));

      if (fontSize < baseFontSize) {
        width = width / ((baseFontSize + 1) / fontSize);
      }

      width = width * widthScaleKoef;

      textAnchor = null;
    } else {
      var data = [{ text: text }];
    }

    textBox.data(data);
    if (width) {
      textBox.width(width);
    }
    if (height) {
      textBox.height(height);
    }
    if (x) {
      textBox.x(x);
    }
    if (y) {
      textBox.y(y);
    }
    if (fontColor) {
      textBox.fontColor(fontColor);
    }
    if (fontSize) {
      textBox.fontSize(fontSize);
    }
    if (rotate) {
      textBox.rotate(rotate);
    }
    if (textAnchor) {
      textBox.textAnchor(textAnchor);
    }
    if (verticalAlign) {
      textBox.verticalAlign(verticalAlign);
    }
    if (split) {
      textBox.split(split);
    }
    if (lineHeight) {
      textBox.lineHeight(lineHeight);
    }
    if (overflow) {
      textBox.overflow(overflow);
    }
    if (fontFamily) {
      textBox.fontFamily(fontFamily);
    }

    if (fontWeight) {
      textBox.fontWeight(fontWeight);
    }

    targetElement.attr("opacity", "0");

    //container dimensions and transform
    var transform = d3.transform(targetElement.attr('transform'));
    if (containerRotate) {
      transform.rotate = containerRotate;
    }
    if (containerX) {
      transform.translate[0] = containerX;
    }
    if (containerY) {
      transform.translate[1] = containerY;
    }
    targetElement.attrs({
      transform: transform,
      width: width,
      height: height
    });

    textBox.select(targetElement.node()).render(function () {
      var textElem = targetElement.select("text");

      //clip everything outside targetElement
      if (doClipPath) {
        var idClipPath = Date.now();
        var elemClipPath = targetElement.append('clipPath').attrs({
          id: idClipPath
        });
        var elemClipPathRect = elemClipPath.append('rect').attrs({
          x: 0,
          y: 0,
          width: width,
          height: height
        });
        textElem.attrs({
          'clip-path': 'url(#' + idClipPath + ')'
        });
      }

      //add class to textElem
      if (options.class) {
        textElem.attrs({
          class: options.class
        });
        targetElement.attrs({
          class: options.class + '-g'
        });
      }

      var rows = targetElement.select("text").selectAll("tspan");

      rows.filter(function (tspan, i) {
        return options.maxLineCount != null && i >= options.maxLineCount;
      }).remove();

      targetElement.attr("opacity", "1");

      if (options.title) {
        targetElement.select("text").append("title").text(text);
      }

      if (isWordBreak) {
        targetElement.selectAll("tspan").attr("xml:space", "preserve");
      }

      //set styles to text element
      var styles = {};
      if (fontColor) {
        styles.fill = fontColor;
      }
      if (fontSize) {
        styles['font-size'] = fontSize;
      }
      if (fontFamily) {
        styles['font-family'] = fontFamily;
      }
      if (fontWeight) {
        styles['font-weight'] = fontWeight;
      }
      textElem.styles(styles);

      function centerTextIntoCell() {
        var parentContainerBBox = targetElement.node().getBBox();
        var textBBox = textElem.node().getBBox();

        if (parentContainerBBox.width > textBBox.width) {
          var leftShift = (parentContainerBBox.width - textBBox.width) / 2;
          textElem.attrs({
            transform: "translate(" + leftShift + ", 0)"
          });
        }
      }

      if (ellipsisToLastWord) {
        //textElem.attr("text-anchor", "left")

        var svg = null;

        var parent = textElem.node();
        while (parent != null) {
          parent = parent.parentNode;
          if (parent != null && parent.nodeName == "svg") {
            svg = parent;
            break;
          }
        }

        if (textElem.select('tspan')[0][0] != null && targetElement.node() != null && svg != null) {
          var point = svg.createSVGPoint();
          var _textCellBBox = targetElement.node().getBBox();
          var oldTspanText = textElem.select('tspan').text();
          textElem.select('tspan').text(text);
          var textWidth = textElem.node().getBBox().width;
          textElem.select('tspan').text(oldTspanText);

          if (textElem.selectAll('tspan')[0].length == 1 && _textCellBBox.width < textWidth) {
            point.x = _textCellBBox.width;
            point.y = _textCellBBox.height;

            //point.x += d3.transform(targetElement.attr("transform")).translate[0];
            //point.y += d3.transform(targetElement.attr("transform")).translate[1];
            try {
              point.y = textElem[0][0].getEndPositionOfChar(0).y;

              textElem.selectAll('tspan').text('');
              textElem.select('tspan').text(text);
              var allCharsCount = textElem[0][0].getNumberOfChars();
              var numberOfSymbolsToShow = textElem[0][0].getCharNumAtPosition(point);

              var textToShow = numberOfSymbolsToShow != -1 && allCharsCount > numberOfSymbolsToShow ? text.substring(0, numberOfSymbolsToShow - 3) + "..." : text;
              textElem.select('tspan').text(textToShow);
            } catch (e) {
              console.log(e);
            }
          }
        }

        if (options && options.textAnchor == "middle" && textElem.node() != null && svg != null) {
          centerTextIntoCell();
        }
      }

      if (renderCallback) {
        var tspans = textElem.selectAll("tspan");
        var linesNumber = tspans.length > 0 ? tspans[0].length : 0;

        var result = {
          linesNumber: linesNumber,
          textContainerElem: targetElement,
          textElem: textElem
        };

        renderCallback(result);

        if (isWordBreak == true && options && options.textAnchor == "middle") {
          centerTextIntoCell();
        }
      }
    });
  }

  d3CustomUtils.nf = NumberFormatter;
  d3CustomUtils.abbreviateNum = abbreviateNum;
  d3CustomUtils.DrawWrappedText = drawWrappedText;
})();

var Factory = function () {
  function Factory() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var properties = arguments[2];

    _classCallCheck(this, Factory);

    this._initConfig(config, defaults);
    this._initProperties(properties);
  }

  _createClass(Factory, [{
    key: '_initConfig',
    value: function _initConfig(config, defaults) {
      this.config = Object.defaultsDeep(config, defaults);
    }
  }, {
    key: '_initProperties',
    value: function _initProperties(properties) {
      for (var propertyName in properties) {
        this[propertyName] = properties[propertyName];
      }
    }
  }]);

  return Factory;
}();

/*
 Functions that can be implemented by successors
 * onModelInit() - fn called when model is being used by nvd3 to create new chart
 * prepareData(selection) - fn for modifying initial data
 * applyOptions() - fn for specifying options values to chart
 * update() - fn which wraps and replaces original cheart update fn
 * beforeUpdate() - fn which is called before update
 * afterUpdate() - fn which is called after update
 * draw() - fn where some custom drawing can be placed
 * defineOption() - fn for adding custom chart option
 * extendChartOptions() - fn where calls to defineOption are supposed to be placed
 */


nv.ModelExtension = function (_Factory) {
  _inherits(_class, _Factory);

  //Config
  // name: string
  // parent: string
  // doInitialDraw: boolean (deprecated)
  // initialDrawTimeout: number (deprecated)
  function _class(config) {
    _classCallCheck(this, _class);

    var _this3 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, config, {
      doInitialDraw: true,
      initialDrawTimeout: 0
    }));

    _this3.__customOptionValuesStorage = {};

    _this3._initUtils();
    _this3._initConstants();

    _this3._build();

    if (Function.isFunction(_this3.onModelInit)) {
      _this3.onModelInit();
    }

    _this3.id = Date.now();
    return _this3;
  }

  _createClass(_class, [{
    key: '_initUtils',
    value: function _initUtils() {
      this.utils = new nv.ModelExtension.Utils();
    }
  }, {
    key: '_initConstants',
    value: function _initConstants() {
      this.constants = {
        nvd3UncustomizableVerticalLeftAxisLabelOffset: 50,
        nvd3UncustomizableHorizontalBottomAxisLabelOffset: 24
      };
    }
  }, {
    key: '_build',
    value: function _build() {
      var _this4 = this;

      this.chart = nv.models[this.config.parent]();

      this.extendedChart = function (selection) {
        _this4._initModules();
        _this4._prepareData(selection);
        _this4._applyOptions();
        _this4._callChart(selection);
        _this4._propagateChartOwnPropertiesToExtendedChart();
        _this4._customizeUpdate();
        _this4._prepareModules();

        _this4.extendedChart.update();
        _this4.modulesPromise.then(function () {
          _this4.extendedChart.update();
        });

        return _this4.extendedChart;
      };

      this._propagateChartOwnPropertiesToExtendedChart();
      this._initExtendedChartOptions();
    }
  }, {
    key: '_propagateChartOwnPropertiesToExtendedChart',
    value: function _propagateChartOwnPropertiesToExtendedChart() {
      Object.extendWithOwnProperties(this.extendedChart, this.chart);
    }
  }, {
    key: '_callChart',
    value: function _callChart(selection) {
      this.chart.call(this.extendedChart, selection);
    }
  }, {
    key: '_beforeUpdate',
    value: function _beforeUpdate(args) {
      // this._applyOptions()

      if (Function.isFunction(this.beforeUpdate)) {
        var _beforeUpdate2;

        (_beforeUpdate2 = this.beforeUpdate).call.apply(_beforeUpdate2, [this].concat(_toConsumableArray(args)));
      }

      this._callModulesBeforeUpdate();
      this._applyModulesMinMarginsToChart();
    }
  }, {
    key: '_afterUpdate',
    value: function _afterUpdate(args) {
      this._callModulesAfterUpdate();

      if (Function.isFunction(this.afterUpdate)) {
        var _afterUpdate2;

        (_afterUpdate2 = this.afterUpdate).call.apply(_afterUpdate2, [this].concat(_toConsumableArray(args)));
      }
    }
  }, {
    key: '_customizeUpdate',
    value: function _customizeUpdate() {
      var _this5 = this;

      this.extendedChart.update = function () {
        var _chart$update;

        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        _this5._beforeUpdate(args);

        (_chart$update = _this5.chart.update).call.apply(_chart$update, [_this5].concat(args));

        if (Function.isFunction(_this5.update)) {
          var _update;

          (_update = _this5.update).call.apply(_update, [_this5].concat(args));
        }

        _this5._afterUpdate(args);

        _this5._draw();
      };
    }
  }, {
    key: '_prepareData',
    value: function _prepareData(selection) {
      this.selection = selection;
      this.originalData = selection.datum();
      this.originalOptions = {
        height: this.extendedChart.height(),
        x: this.extendedChart.x(),
        y: this.extendedChart.y(),
        xAxis: {
          tickFormat: this.extendedChart.xAxis.tickFormat()
        },
        yAxis: {
          tickFormat: this.extendedChart.yAxis.tickFormat()
        },
        margin: Object.copyDeep(this.extendedChart.margin())
      };
      //pre-prepare data for modules - allow modules to modify data before chart does

      this._callModulesBeforePrepareData();

      if (Function.isFunction(this.prepareData)) {
        this.prepareData(selection);
      }
    }
  }, {
    key: '_applyOptions',
    value: function _applyOptions() {
      //duration
      this.extendedChart.duration(0);

      // //height
      // this.extendedChart.height(this.extendedChart.height() || 450)

      // //x, y display fields
      // this.extendedChart.xDisplayField(this.extendedChart.xDisplayField() || this.extendedChart.xField())
      // this.extendedChart.yDisplayField(this.extendedChart.yDisplayField() || this.extendedChart.yField())

      // //y tick format
      // const originalYAxisTickFormat = this.extendedChart.yAxis.tickFormat()
      // this.extendedChart.yAxis.tickFormat((value) => {

      // })

      this.extendedChart.margin(this.originalOptions.margin);

      if (Function.isFunction(this.applyOptions)) {
        this.applyOptions();
      }
    }
  }, {
    key: 'defineOption',
    value: function defineOption(name) {
      var _this6 = this;

      Object.defineProperty(this.chart._options, name, {
        get: function get() {
          return _this6.__customOptionValuesStorage[name];
        }, set: function set(_) {
          _this6.__customOptionValuesStorage[name] = _;
        }
      });
    }
  }, {
    key: '_initExtendedChartOptions',
    value: function _initExtendedChartOptions() {
      this.extendedChart.options = nv.utils.optionsFunc.bind(this.extendedChart);

      //thesee options will exist for all extensions
      //modules option
      //Can be array of:
      // - strings
      // or
      // - objects like {name: string, options: Object}
      this.defineOption('modules');

      this.defineOption('xField');
      // this.defineOption('xDisplayField')
      this.defineOption('yField');
      // this.defineOption('yDisplayField')

      //custom options
      if (Function.isFunction(this.extendChartOptions)) {
        this.extendChartOptions();
      }

      nv.utils.inheritOptions(this.extendedChart, this.chart);
      nv.utils.initOptions(this.extendedChart);
    }
  }, {
    key: '_draw',
    value: function _draw() {
      if (Function.isFunction(this.draw)) {
        this.draw();
      }
      this._useModules();
    }

    //MODULES METHODS

  }, {
    key: '_initModules',
    value: function _initModules() {
      var currentModulesDeclarations = this.extendedChart.modules() || [];
      if (!areEqual(this.modulesDeclarations, currentModulesDeclarations)) {
        // this.modulesDeclarations = _.cloneDeep(currentModulesDeclarations)
        this.modulesDeclarations = window.cloneDeep(currentModulesDeclarations);

        this.modulesArr = [];
        this.modules = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.modulesDeclarations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var moduleDeclaration = _step2.value;

            if (String.isString(moduleDeclaration)) {
              moduleDeclaration = {
                name: moduleDeclaration,
                options: {}
              };
            }

            var Module = nv.modules[moduleDeclaration.name];
            var module = new Module(this, moduleDeclaration.options);

            if (this.modules[module.config.name] == null && (module.config.supportedCharts.includes(this.config.name) || module.config.supportedCharts.includes('*'))) {
              this.modulesArr.push(module);
              this.modules[module.config.name] = module;
            } else {
              console.warn('Module "' + module.config.name + '" doesn\'t support "' + this.config.name + '" chart');
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }
  }, {
    key: '_forEachEnabledModule',
    value: function _forEachEnabledModule(fn) {
      this.modulesArr.each(function (module) {
        if (module.options.enabled) {
          fn(module);
        }
      });
    }

    //We do not allow modules to rule margins.
    //We allow them only to specify what values each of them wants as min/max margins, and then we calculate here correct margins based on that
    //summary min is greatest value of all modules' min and initial margin
    //summary max is smallest value of all modules' max and initial margin
    //summary min will be stronger than summary max: if max is smaller than min, its better to have more space than needed

  }, {
    key: '_applyModulesMinMarginsToChart',
    value: function _applyModulesMinMarginsToChart() {
      var minMargins = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
      this._forEachEnabledModule(function (module) {
        minMargins.top = Math.max(module.options.minTopMargin, minMargins.top);
        minMargins.right = Math.max(module.options.minRightMargin, minMargins.right);
        minMargins.bottom = Math.max(module.options.minBottomMargin, minMargins.bottom);
        minMargins.left = Math.max(module.options.minLeftMargin, minMargins.left);
      });
      var maxMargins = {
        top: Infinity,
        right: Infinity,
        bottom: Infinity,
        left: Infinity
      };
      this._forEachEnabledModule(function (module) {
        maxMargins.top = Math.min(module.options.maxTopMargin, maxMargins.top);
        maxMargins.right = Math.min(module.options.maxRightMargin, maxMargins.right);
        maxMargins.bottom = Math.min(module.options.maxBottomMargin, maxMargins.bottom);
        maxMargins.left = Math.min(module.options.maxLeftMargin, maxMargins.left);
      });
      var top = Math.min(maxMargins.top, this.originalOptions.margin.top);
      var right = Math.min(maxMargins.right, this.originalOptions.margin.right);
      var bottom = Math.min(maxMargins.bottom, this.originalOptions.margin.bottom);
      var left = Math.min(maxMargins.left, this.originalOptions.margin.left);
      top = Math.max(minMargins.top, top);
      right = Math.max(minMargins.right, right);
      bottom = Math.max(minMargins.bottom, bottom);
      left = Math.max(minMargins.left, left);
      this.extendedChart.margin({ top: top, right: right, bottom: bottom, left: left });
    }
  }, {
    key: '_callModulesBeforePrepareData',
    value: function _callModulesBeforePrepareData() {
      this._forEachEnabledModule(function (module) {
        if (Function.isFunction(module._beforeInstancePrepareData)) {
          module._beforeInstancePrepareData();
        }
      });
    }
  }, {
    key: '_callModulesBeforeUpdate',
    value: function _callModulesBeforeUpdate() {
      this._forEachEnabledModule(function (module) {
        if (Function.isFunction(module._beforeInstanceUpdate)) {
          module._beforeInstanceUpdate();
        }
      });
    }
  }, {
    key: '_callModulesAfterUpdate',
    value: function _callModulesAfterUpdate() {
      this._forEachEnabledModule(function (module) {
        if (Function.isFunction(module._afterInstanceUpdate)) {
          module._afterInstanceUpdate();
        }
      });
    }
  }, {
    key: '_prepareModules',
    value: function _prepareModules() {
      var _this7 = this;

      this.extendedChart.dispatch.on('stateChange', function () {
        setTimeout(function () {
          _this7.extendedChart.update();
        });
      });

      this.modulesArr.each(function (module) {
        return module._prepare();
      });

      this.extendedChart.update();
    }
  }, {
    key: '_useModules',
    value: function _useModules() {
      var _this8 = this;

      // if(this.modulesPromise != null) {
      //   this.modulesPromise.cancel()
      // }
      this.modulesPromise = Promise.resolve();
      this._forEachEnabledModule(function (module) {
        _this8.modulesPromise = _this8.modulesPromise.then(function () {
          return new Promise(function (resolve, reject) {
            Promise.resolve(module._process()).then(resolve, reject);
          });
        });
      });

      //making chart reupdate after all modules finished if scheduled
      this.modulesPromise.then(function () {
        if (_this8.REUPDATE_AFTER_MODULES_CHAIN_FINISHED) {
          _this8.REUPDATE_AFTER_MODULES_CHAIN_FINISHED = false;
          // this.modulesArr.each(module => module.skipNextUpdate())
          _this8.extendedChart.update();
        }
      });
    }
  }, {
    key: 'scheduleChartReupdateAfterModulesChainFinished',
    value: function scheduleChartReupdateAfterModulesChainFinished() {
      this.REUPDATE_AFTER_MODULES_CHAIN_FINISHED = true;
    }

    //REGISTERING
    //register function must be called with class derived from ModelExtension in order to register extension on nvd3

  }], [{
    key: 'register',
    value: function register(ClassDerivedFromModelExtension) {
      var name = new ClassDerivedFromModelExtension().config.name;

      nv.models[name] = function () {
        var model = new ClassDerivedFromModelExtension();

        return model.extendedChart;
      };
    }
  }]);

  return _class;
}(Factory);

{
  nv.ModelExtension.Utils = function ModelExtensionUtils() {
    _classCallCheck(this, ModelExtensionUtils);

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = nv.ModelExtension.Utils.Util.kit[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var Util = _step3.value;

        var util = new Util();
        this[util.name] = util;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };

  nv.ModelExtension.Utils.Util = function () {
    function _class2(name, fn) {
      _classCallCheck(this, _class2);

      this.name = name;
      if (this.fn == null) this.fn = fn;
    }

    _createClass(_class2, [{
      key: 'replace',
      value: function replace(fn) {
        this.fn = fn;
      }
    }]);

    return _class2;
  }();

  nv.ModelExtension.Utils.Util.kit = [function (_nv$ModelExtension$Ut) {
    _inherits(ConditionalFormat, _nv$ModelExtension$Ut);

    function ConditionalFormat() {
      _classCallCheck(this, ConditionalFormat);

      return _possibleConstructorReturn(this, (ConditionalFormat.__proto__ || Object.getPrototypeOf(ConditionalFormat)).call(this, 'conditionalFormat'));
    }

    /*
     * d: any
     */


    _createClass(ConditionalFormat, [{
      key: 'fn',
      value: function fn(d) {
        return {
          text: (d || '').toString()
        };
      }
    }]);

    return ConditionalFormat;
  }(nv.ModelExtension.Utils.Util), function (_nv$ModelExtension$Ut2) {
    _inherits(TextWrap, _nv$ModelExtension$Ut2);

    function TextWrap() {
      _classCallCheck(this, TextWrap);

      return _possibleConstructorReturn(this, (TextWrap.__proto__ || Object.getPrototypeOf(TextWrap)).call(this, 'textWrap'));
    }

    /*
     * args: Object
     *   {
     *    text: string,
     *    targetElement: SVGElement,
     *    options: Object
     *   }
     */


    _createClass(TextWrap, [{
      key: 'fn',
      value: function fn(args) {
        return d3CustomUtils.DrawWrappedText(args.text, args.targetElement, args.options);
      }
    }]);

    return TextWrap;
  }(nv.ModelExtension.Utils.Util)];
}

/*
 Functions that can be implemented by successors
 * prepare() - fn called when chart instance is ready and wants to prepare modules, before first draw, called once per instance initialization
 * process() - fn called each time on redraw, after chart instance's draw function, supposed to apply module's drawing customization
 * beforeInstancePrepareData() - fn which allows module to take control over selection BEFORE chart instance, called before instance's prepareData, supposed to modify chart instance's initial data. Properties instance.selection and instance.originalData are already available

 Important properties available in each module
 * this.instance: ModelExtension - instance of extension
 * this.options: Object - options passed to the module from outside (from chart config)
 * this.appendedElements: SVGElement[] - array, which expects to contain svg elements. On each drawing act (when _process fn is called) - each element in this array is removed from DOM and array is cleared
 * !IMPORTANT: modules are processed asyncronously, but appendedElements array will be cleared correctly only if it is filled syncronously by the module, otherwise there can remain elems from previous process
 */
nv.Module = function (_Factory2) {
  _inherits(_class3, _Factory2);

  /*
    Arguments:
    * config - object that configures a module
    *   name: string
    *   supportedCharts: string[]
    * instance - instance of extension
    * options - options passed to the module from outside (from chart config)
    * defaults - defaults to fill options which were not specified
   */
  function _class3(config, instance) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var defaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, _class3);

    Object.defaultsDeep(options, defaults);

    Object.defaultsDeep(options, {
      enabled: true,
      minTopMargin: 0,
      minRightMargin: 0,
      minBottomMargin: 0,
      minLeftMargin: 0,
      maxTopMargin: Infinity,
      maxRightMargin: Infinity,
      maxBottomMargin: Infinity,
      maxLeftMargin: Infinity,
      formatString: null
    });

    var _this11 = _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).call(this, config, {
      supportedCharts: []
    }, { instance: instance, options: options }));

    _this11.promise = Promise.resolve();
    _this11.previousAppendedElements = {};
    return _this11;
  }

  //'private' fns


  _createClass(_class3, [{
    key: '__preprocess',
    value: function __preprocess() {
      if (this.appendedElements != null) {
        this.appendedElements.each(function (e) {
          return e.remove();
        });
      }
      this.appendedElements = [];
    }
  }, {
    key: '__postprocess',
    value: function __postprocess() {}

    // __preprocess() {
    //   this.previousAppendedElements = this.appendedElements
    //   this.appendedElements = []
    // }

    // __postprocess() {
    //   if(this.previousAppendedElements != null) {
    //     this.previousAppendedElements.each(e => e.remove())
    //   }
    // }

  }, {
    key: 'scheduleAndSkipNextUpdate',
    value: function scheduleAndSkipNextUpdate() {
      if (this.SKIPNEXTUPDATE) {
        this.SKIPNEXTUPDATE = false;
        return;
      }
      this.SKIPNEXTUPDATE = true;
      this.instance.scheduleChartReupdateAfterModulesChainFinished();
    }

    //fns called by extension instance

  }, {
    key: '_process',
    value: function _process() {
      var _this12 = this;

      if (!this.options.enabled) {
        return Promise.resolve();
      }

      // if(this.appendedElements != null) {
      //   this.previousAppendedElements[Date.now()] = this.appendedElements
      //   this.appendedElements.each(e => e.remove())
      // }
      // this.promise.then(() => {
      //   for(let k in this.previousAppendedElements || {}) {
      //     this.previousAppendedElements[k].each(e => e.remove())
      //   }
      //   this.previousAppendedElements = {}
      // })

      // this.appendedElements = []


      // return Promise.resolve(this.process()).then(() => {
      //   this.__setChartOptions()
      // })
      this.__preprocess();
      return Promise.resolve(this.process()).then(function () {
        return Promise.resolve(_this12.__postprocess());
      });
    }

    // __setChartOptions() {
    //   const margin = this.instance.extendedChart.margin()
    //   const top = Math.max(this.options.minTopMargin, margin.top)
    //   const right = Math.max(this.options.minRightMargin, margin.right)
    //   const bottom = Math.max(this.options.minBottomMargin, margin.bottom)
    //   const left = Math.max(this.options.minLeftMargin, margin.left)
    //   this.instance.extendedChart.margin({top, right, bottom, left})
    // }

  }, {
    key: '_prepare',
    value: function _prepare() {
      if (!this.options.enabled) {
        return;
      }

      // this.__setChartOptions()

      this.svg = d3.select(this.instance.extendedChart.container);

      this.prepare();
    }
  }, {
    key: '_beforeInstancePrepareData',
    value: function _beforeInstancePrepareData() {
      if (!this.options.enabled) {
        return;
      }

      this.beforeInstancePrepareData();
    }
  }, {
    key: '_beforeInstanceUpdate',
    value: function _beforeInstanceUpdate() {
      if (this.options.enabled) {
        return;
      }

      // this.__setChartOptions()

      this.beforeInstanceUpdate();

      // this.process()
    }
  }, {
    key: '_afterInstanceUpdate',
    value: function _afterInstanceUpdate() {
      if (this.options.enabled) {
        return;
      }

      // this.__setChartOptions()

      this.afterInstanceUpdate();
    }

    //to be overriden/overloaded in successor

  }, {
    key: 'prepare',
    value: function prepare() {}
  }, {
    key: 'process',
    value: function process() {}
  }, {
    key: 'beforeInstancePrepareData',
    value: function beforeInstancePrepareData() {}
  }, {
    key: 'beforeInstanceUpdate',
    value: function beforeInstanceUpdate() {}
  }, {
    key: 'afterInstanceUpdate',
    value: function afterInstanceUpdate() {}

    //REGISTERING

  }], [{
    key: 'register',
    value: function register(Module) {
      if (nv.modules == null) nv.modules = {};

      var name = Module._name;
      if (name == null) {
        var module = new Module();
        name = module.config.name;
      }

      nv.modules[name] = Module;
    }
  }]);

  return _class3;
}(Factory);

nv.ChartHelpers = function () {
  function _class4() {
    var alternativeColorsPalette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, _class4);

    this.alternativeColorsPalette = alternativeColorsPalette;
  }

  //properties


  _createClass(_class4, [{
    key: 'getXMetricByGroupingLevel',


    //data and options builders
    value: function getXMetricByGroupingLevel(config, level) {
      //level: number [0,1,....]
      return config.dataDefinition.xaxis[config.dataDefinition.xaxis.length - 1 - level];
    }
  }, {
    key: 'buildData',
    value: function buildData(yMetrics, externalData, metadata, config) {
      var _this13 = this;

      var data = [];

      var xMetric = this.getXMetricByGroupingLevel(config, 0);
      var xMetricName = xMetric.value;
      var xMetricDisplayName = xMetric.displayValue || xMetric.value;

      // if(config.dataDefinition.dynamicSeries) {
      if (config.dataDefinition.yaxis != null && config.dataDefinition.series != null && config.dataDefinition.series.length == 1) {
        yMetrics = [];
        var modifiedExternalData = [];
        var processedMetricNames = [];
        var baseMetricName = config.dataDefinition.series[0].value;
        for (var j = 0; j < externalData.length; j++) {
          var item = externalData[j];
          var metricName = item[baseMetricName];
          if (!processedMetricNames.includes(metricName)) {
            yMetrics.push({ value: metricName });
            processedMetricNames.push(metricName);
            externalData.filter(function (item) {
              return item[baseMetricName] == metricName;
            }).forEach(function (item, index) {
              if (modifiedExternalData[index] == null) {
                modifiedExternalData[index] = {};
                modifiedExternalData[index][xMetricName] = item[xMetricName];
              }
              modifiedExternalData[index][metricName] = item[config.dataDefinition.yaxis.value];
            });
          }
        }
        externalData = modifiedExternalData;
      }

      yMetrics.forEach(function (yMetric, index) {
        var yMetricName = yMetric.value;
        var yMetricDisplayName = yMetric.displayValue;
        var metricMetadata = metadata[yMetricName];
        var dataEntry = {
          values: []
        };
        dataEntry[_this13.NVD3DataEntryKeyName] = metricMetadata ? metricMetadata.title : yMetricName;
        //colors, showValues, showMarker etc.
        if (config.seriesConfigs != null && config.seriesConfigs[yMetricName] != null) {
          Object.assign(dataEntry, Object.copyDeep(config.seriesConfigs[yMetricName]));
        }
        //real serie index
        dataEntry.realSerie = index;
        //color
        if (!dataEntry.color) {
          dataEntry.color = _this13.getColorFromPaletteByIndex(config, index);
        }

        for (var j = 0; j < externalData.length; j++) {
          var item = externalData[j];
          var dataEntrySerie = {};
          dataEntrySerie[_this13.NVD3DataXMetricName] = item[xMetricName];
          dataEntrySerie[_this13.NVD3DataXMetricDisplayName] = item[xMetricDisplayName] || item[xMetricName];
          dataEntrySerie[_this13.NVD3DataYMetricName] = item[yMetricName];
          dataEntrySerie[_this13.NVD3DataYMetricDisplayName] = item[yMetricDisplayName] || item[yMetricName];
          //real serie index
          dataEntrySerie.realSerie = index;
          // dataEntrySerie.color = dataEntry.color
          if (Array.isArray(config.tooltip)) {
            var tooltipSerie;
            for (var i = 0; i < config.tooltip.length; i++) {
              tooltipSerie = config.tooltip[i];
              dataEntrySerie[tooltipSerie.column] = item[tooltipSerie.column];
            }
          }
          dataEntry.values.push(dataEntrySerie);
        }

        // if (config.axisConfig.yAxis.reversePlotOrder) {
        //   dataEntry.values.reverse()
        // }

        data.push(dataEntry);
      });

      return data;
    }
  }, {
    key: 'getColorFromPaletteByIndex',
    value: function getColorFromPaletteByIndex(config, index) {
      return config.colorPalette != null ? config.colorPalette[index] : this.alternativeColorsPalette[index % 10];
    }
  }, {
    key: 'xMetricSort',
    value: function xMetricSort(data) {
      data.forEach(function (val, key) {
        val.values.sort(function (a, b) {
          if (a.pri_display_order && b.pri_display_order) {
            return a.pri_display_order - b.pri_display_order;
          }
        });
      });

      return data;
    }
  }, {
    key: 'seriesSort',
    value: function seriesSort(data) {
      data.forEach(function (val, key) {
        val.values.forEach(function (obj) {
          if (obj.sec_display_order) val.sec_display_order = obj.sec_display_order;
        });
      });
      data.sort(function (a, b) {
        if (a.sec_display_order && b.sec_display_order) {
          return a.sec_display_order - b.sec_display_order;
        }
      });
      return data;
    }
  }, {
    key: 'buildOptions',
    value: function buildOptions(config, properties) {
      var _this14 = this;

      var options = {
        chart: {
          // height: 298,
          duration: 0,
          transitionDuration: 0,
          margin: properties.margin || {},
          legend: {
            margin: properties.legend !== null ? properties.legend.margin || {} : {}
          },
          stacked: true,
          showControls: properties.showControls,
          showLegend: properties.showLegend,
          showValues: properties.showValues,
          showXAxis: config.axisConfig.showXaxis !== null ? config.axisConfig.showXaxis : properties.showXaxis,
          showYAxis: config.axisConfig.showYaxis !== null ? config.axisConfig.showYaxis : properties.showYaxis,
          tooltip: {
            duration: 0,
            gravity: 'w',
            hideDelay: 0,
            distance: 20,
            snapDistance: 0
          },
          xAxis: {
            axisLabel: config.axisConfig.xAxis.axisLabel,
            axisLabelDistance: config.axisConfig.xAxis.axisLabelDistance || 0,
            showMaxMin: config.axisConfig.xAxis.showMaxMin,
            fontSize: config.axisConfig.xAxis.font.fontSize || config.axisConfig.xAxis.font.size,
            tickPadding: 5,
            tickFormat: function tickFormat(d) {
              var displayed = JSON.parse(d)[_this14.NVD3DataXMetricDisplayName];
              if (config.axisConfig.xAxis.displayFormat && Number.isNumber(displayed) && d3CustomUtils.nf) {
                var type = config.axisConfig.xAxis.type || '';
                var nf = new d3CustomUtils.nf(displayed, type, config.axisConfig.xAxis.displayFormat, { options: { locale: 'en-US' } });
                return nf.perform().text;
              }
              return displayed;
            }
          },
          yAxis: {
            axisLabel: config.axisConfig.yAxis.axisLabel,
            axisLabelDistance: config.axisConfig.yAxis.axisLabelDistance || 0,
            showMaxMin: config.axisConfig.yAxis.showMaxMin,
            fontSize: config.axisConfig.yAxis.font.fontSize || config.axisConfig.yAxis.font.size,
            ticks: config.axisConfig.yAxis.ticks,
            tickPadding: 5,
            tickFormat: function tickFormat(d) {
              if (config.axisConfig.yAxis.displayFormat && Number.isNumber(d) && d3CustomUtils.nf) {
                var type = config.axisConfig.yAxis.type || '';
                var nf = new d3CustomUtils.nf(d, type, config.axisConfig.yAxis.displayFormat, { options: { locale: 'en-US' } });
                return nf.perform().text;
              }
              return d;
            }
          },
          x: function x(d) {
            var obj = {};
            obj[_this14.NVD3DataXMetricName] = d[_this14.NVD3DataXMetricName];
            obj[_this14.NVD3DataXMetricDisplayName] = d[_this14.NVD3DataXMetricDisplayName];
            return JSON.stringify(obj);
          },
          y: function y(d) {
            var value = d[_this14.NVD3DataYMetricName];
            var parsedValue = parseFloat(value);
            return isNaN(parsedValue) ? value : parsedValue;
          },
          xField: this.NVD3DataXMetricName,
          yField: this.NVD3DataYMetricName,
          clipEdge: true,
          // callback: () => {
          //   this.labelWrapper();
          // },
          modules: [],
          modulesObj: {}
        }
      };

      //height
      if (properties.height) {
        options.chart.height = properties.height;
      }

      //xDomain
      if (config.axisConfig.xAxis.bound != null) {
        options.chart.xDomain = [config.axisConfig.xAxis.bound.minValue, config.axisConfig.xAxis.bound.maxValue];
      }
      //yDomain
      if (config.axisConfig.yAxis.bound != null) {
        options.chart.yDomain = [config.axisConfig.yAxis.bound.minValue, config.axisConfig.yAxis.bound.maxValue];
      }
      //tickValues
      var tickValues = function tickValues(axis) {
        var min = axis.bound.minValue;
        var max = axis.bound.maxValue;
        var step = axis.unit.major;
        var i = void 0,
            arr = [];
        if (0 <= max && 0 >= min) {
          arr.push(0);
          i = step;
          while (i <= max && i >= min) {
            arr.push(i);
            i += step;
          }
          i = -step;
          while (i <= max && i >= min) {
            arr.push(i);
            i -= step;
          }
        } else {
          i = min;
          while (i <= max) {
            arr.push(i);
            i += step;
          }
        }
        return arr;
      };
      //xAxis.tickValues
      if (config.axisConfig.xAxis.unit != null) {
        if (config.axisConfig.xAxis.unit.major) {
          options.chart.xAxis.tickValues = function () {
            return tickValues(config.axisConfig.xAxis);
          };
        }
      }
      //yAxis.tickValues
      if (config.axisConfig.yAxis.unit != null) {
        if (config.axisConfig.yAxis.unit.major) {
          options.chart.yAxis.tickValues = function () {
            return tickValues(config.axisConfig.yAxis);
          };
        }
      }

      if (config.dataDefinition.series != null && config.seriesConfigs != null) {
        options.chart.barColor = function (d, i) {
          var color = d.color;
          // if(!color) {
          var serie = config.dataDefinition.series[d.realSerie != null ? d.realSerie : d.series];
          if (serie != null) {
            var yMetricName = serie.value;
            var seriesConfig = config.seriesConfigs[yMetricName];
            if (seriesConfig != null) {
              var formatStr = seriesConfig.dataLabel != null ? seriesConfig.dataLabel.displayFormat : seriesConfig.displayFormat;
              if (formatStr) {
                var value = d[_this14.NVD3DataYMetricName];
                if (formatStr && Number.isNumber(value) && d3CustomUtils.nf) {
                  var type = config.axisConfig.xAxis.type || ''; // TODO: use right type from metadata
                  var nf = new d3CustomUtils.nf(value, type, formatStr, { options: { locale: 'en-US' } }); // TODO: use current locale
                  color = nf.perform().color;
                }
              } else {
                if (seriesConfig.color != null) {
                  color = seriesConfig.color;
                }
              }
            }
          }
          if (!color) {
            color = _this14.getColorFromPaletteByIndex(config, d.series);
          }
          // }

          return color;
        };
      }

      return options;
    }
  }, {
    key: '_buildOptions_module',
    value: function _buildOptions_module(name, options, args) {
      var module = this['__buildOptions_module_' + name](args);
      // module.options.enabled = false
      options.chart.modules.push(module);
      options.chart.modulesObj[name] = module;
    }
  }, {
    key: '__buildOptions_module_format',
    value: function __buildOptions_module_format() {
      return {
        // name: 'format',
        name: 'numberFormat',
        options: {
          enabled: true
        }
      };
    }
  }, {
    key: '__buildOptions_module_wrapper',
    value: function __buildOptions_module_wrapper() {
      return {
        name: 'wrapper',
        options: {
          enabled: true,
          tooltipMaxWidth: 800,
          tooltipMinWidth: 100,
          tooltipAutoWidth: true,
          relativeAdjustmentGap: 5,
          enableAutopositioning: true,
          common: {
            space: 80,
            distance: 5,
            fontSize: 12,
            valign: 'middle',
            halign: 'middle',
            maxLineCount: 3,
            isWordBreak: false,
            doClipPath: false,
            dontWrapNumbers: false
          }
        }
      };
    }
  }, {
    key: '__buildOptions_module_nesting',
    value: function __buildOptions_module_nesting(args) {
      var xMetric = this.getXMetricByGroupingLevel(args.config, 1);
      var xGroupField = xMetric.value;
      var xGroupDisplayField = xMetric.displayValue;
      var groups = [],
          groupId,
          groupName,
          group,
          d;
      args.externalData.forEach(function (d) {
        groupId = d[xGroupField];
        groupName = d[xGroupDisplayField] || d[xGroupField];
        group = null;
        groups.forEach(function (g) {
          if (g.id === groupId) {
            group = g;
          }
        });
        if (group == null) {
          group = {
            id: groupId,
            name: groupName,
            data: []
          };
          groups.push(group);
        }
        group.data.push(d);
      });
      args.externalData.splice(0, args.externalData.length);
      // args.externalData = []
      groups.forEach(function (group) {
        group.data.forEach(function (d) {
          args.externalData.push(d);
        });
      });
      return {
        name: 'nesting',
        options: {
          barsInGroup: groups[0].data.length,
          insertEmptyBars: false,
          groupId: function groupId(n) {
            return groups[n].id;
          },
          groupName: function groupName(n) {
            return groups[n].name;
          },
          minBottomMargin: 80,
          groupLabel: {
            height: (parseFloat(args.config.axisConfig.xAxis.font.fontSize || args.config.axisConfig.xAxis.font.size) * 3 + 1) / 2 + 10,
            borderWhitespaceYOffset: 0,
            text: {
              width: 120,
              height: parseFloat(args.config.axisConfig.xAxis.font.fontSize || args.config.axisConfig.xAxis.font.size) * 3 + 1,
              fontSize: parseFloat(args.config.axisConfig.xAxis.font.fontSize || args.config.axisConfig.xAxis.font.size),
              fontFamily: args.config.axisConfig.xAxis.font.fontFamily,
              fontWeight: args.config.axisConfig.xAxis.font.fontWeight,
              nMaxLineCount: 3
            },
            colors: {
              border: args.config.axisConfig.xAxis.font.fontColor,
              text: args.config.axisConfig.xAxis.font.fontColor
            }
          }
        }
      };
    }
  }, {
    key: '__buildOptions_module_labels',
    value: function __buildOptions_module_labels(args) {
      var labelsData = this.buildData(args.labelsConfig.dataDefinition.series, args.externalData, args.metadata, args.config);
      var isHorizontal = this.isChartConfigHorizontal(args.config);
      var name = isHorizontal ? 'horizontal-labels' : 'top-labels';
      var axisConfig = isHorizontal ? args.labelsConfig.axisConfig.yAxis : args.labelsConfig.axisConfig.xAxis;
      return {
        name: name,
        options: {
          data: labelsData,
          isAvg: false,
          labels: {
            offsetY: 20,
            fontSize: parseFloat(axisConfig.font.fontSize || axisConfig.font.size),
            fontFamily: axisConfig.font.fontFamily,
            fontWeight: axisConfig.font.fontWeight,
            fontColor: axisConfig.font.fontColor,
            fontOffsetCorrectionMultiplier: 33 / 50,
            minFontSize: 1,
            borderWidth: 1,
            rectPaddingX: 5,
            rectPaddingY: 2
          },
          header: {
            enabled: axisConfig.showAxisLabel,
            textField: this.NVD3DataEntryKeyName,
            height: 80,
            width: 100,
            fontSize: parseFloat(axisConfig.font.fontSize || axisConfig.font.size),
            fontFamily: axisConfig.font.fontFamily,
            fontWeight: axisConfig.font.fontWeight,
            nMaxLineCount: 3
          },
          colors: {
            header: axisConfig.font.fontColor,
            labelBorder: '#CCCCCC',
            labelFont: 'black'
          },
          formatString: axisConfig.displayFormat
        }
      };
    }
  }, {
    key: '__buildOptions_module_table',
    value: function __buildOptions_module_table(args) {

      // // prepare lines for chart
      // var chartLines = []
      // for(var i = 0; i < args.config.dataDefinition.series.length; i++){
      //   var serie = args.config.dataDefinition.series[i]
      //   var metricName = serie.value
      //   if(metricName === args.config.dataDefinition.yaxis.value) {
      //     chartLines.push(i)
      //     break
      //   }
      // }
      // var tableLines = []
      // for(var j = 0; j < args.tableProperties.dataDefinition.length; j++){
      //   const tableRowDefinition = args.tableProperties.dataDefinition[j]
      //   for(var i = 0; i < args.config.dataDefinition.series.length; i++){
      //     var serie = args.config.dataDefinition.series[i]
      //     var metricName = serie.value
      //     if(metricName === tableRowDefinition.value) {
      //       tableLines.push(i)
      //       break
      //     }
      //   }
      // }

      //prepare lines for chart
      var chartLines = [];
      for (var i = 0; i < args.yMetrics.length; i++) {
        var serie = args.yMetrics[i];
        var metricName = serie.value;
        if (metricName === args.config.dataDefinition.yaxis.value) {
          chartLines.push(i);
        }
      }

      //prepare lines for table
      var tableFormatStrings = {};
      var tableLines = [];
      for (var i = 0; i < args.yMetrics.length; i++) {
        var serie = args.yMetrics[i];
        var metricName = serie.value;
        if (metricName !== args.config.dataDefinition.yaxis.value) {
          tableLines.push(i);
          var serieConfig = args.config.seriesConfigs[metricName];
          if (serieConfig != null) {
            tableFormatStrings[i] = serieConfig.dataLabel != null ? serieConfig.dataLabel.displayFormat : serieConfig.displayFormat;
          }
        }
      }

      var attributeValue = Date.now();
      d3.select(args.tableContainer).attr(this.ChartWithTableContainerAttributeName, attributeValue);
      return {
        name: 'table',
        options: {
          enabled: true,
          squeezeChartHeight: true,
          container: '[' + this.ChartWithTableContainerAttributeName + '="' + attributeValue + '"]',
          formatString: args.config.axisConfig.yAxis.displayFormat || '[green]0.0;[red]0.0;[black]0.0',
          metadata: {
            chart: {
              lines: chartLines
            },
            table: {
              lines: tableLines,
              formatStrings: tableFormatStrings,
              showHeadRow: args.tableProperties.headerRow
            }
          },

          rowLineHeight: 18,
          fontSize: 13,
          fontWeight: 'bold',
          fill: '#f5f5f5',
          stroke: '#bbbbbb',
          strokeWidth: 1,
          align: 'middle',
          valign: 'middle',
          // offsetY: 11,
          offsetY: -5,
          // offsetX: 100,
          maxNLines: 2,
          colors: {
            green: 'yellowgreen',
            red: 'brown'
          }
        }
      };
    }
  }, {
    key: '__buildOptions_module_title',
    value: function __buildOptions_module_title(args) {
      return {
        name: 'title',
        options: {
          enabled: true,
          text: args.title,
          height: 60,
          minWidth: 100,
          fontSize: 12,
          fontWeight: 'normal',
          fontFamily: 'Open Sans',
          fontColor: 'black',
          halign: 'middle',
          valign: 'middle',
          maxNLines: 3,
          isWordBreak: false,
          ellipsisToLastWord: false,
          tooltip: true,
          title: false
        }
      };
    }

    //config prepeparations

  }, {
    key: 'isChartConfigHorizontal',
    value: function isChartConfigHorizontal(config) {
      var horizontalChartsNames = ['MULTIBAR_HORIZONTAL', 'STACKED_HORIZONTAL'];
      return horizontalChartsNames.includes(config.chartType);
    }
  }, {
    key: 'adjustConfig_setBounds_calcValues',
    value: function adjustConfig_setBounds_calcValues(data, bound, config, noOfTick, clipFactor) {
      var newArr = [];

      if (config.chartType == "STACKED_VERTICAL" || config.chartType == "STACKED_HORIZONTAL") {

        /*Bound 100%*/
        var stacked = config.dataDefinition.xaxis[0].value;
        var labelName;
        var tempFlag = false;

        config.dataDefinition.xaxis.forEach(function (tempConfig) {
          if (tempConfig.displayValue) {
            labelName = tempConfig.displayValue;
          }
        });

        bound.forEach(function (keyValue) {
          data.forEach(function (obj) {

            newArr.forEach(function (tempNewArray) {
              if (tempNewArray.label === obj[labelName] && tempNewArray.name === obj[stacked]) {
                tempFlag = true;
                tempNewArray.value += +obj[keyValue];
              }
            });

            if (!tempFlag) {
              this[obj[labelName]] = { name: obj[stacked],
                value: +obj[keyValue],
                label: obj[labelName] };
              newArr.push(this[obj[labelName]]);
            }
          });
        });

        /*ends here*/

        /* var stacked = config.dataDefinition.xaxis[0].value;
         if(bound.length > 1)
         {
           data.forEach(function (obj) {
             var keyValue = bound[0];
              if (!this[obj[stacked]]) {
               this[obj[stacked]] = {name: obj[stacked], value: +obj[keyValue]};
               newArr.push(this[obj[stacked]]);
             } else {
               this[obj[stacked]].value += +obj[keyValue];
             }
           }, {});
         }
         else
         {
           var keyValue = bound[0];
           data.forEach(function (obj) {
             if (!this[obj[stacked]]) {
               this[obj[stacked]] = {name: obj[stacked], value: +obj[keyValue]};
               newArr.push(this[obj[stacked]]);
             } else {
               this[obj[stacked]].value += +obj[keyValue];
             }
           }, {});
         }*/

        var minValue = Math.min.apply(Math, newArr.map(function (el) {
          return el.value;
        }));
        var maxValue = Math.max.apply(Math, newArr.map(function (el) {
          return el.value;
        }));
      } else {
        for (var i = 0; i < bound.length; i++) {
          data.forEach(function (obj) {
            newArr.push(obj[bound[i]]);
          }, {});
        }

        var minValue = Math.min.apply(Math, newArr);
        var maxValue = Math.max.apply(Math, newArr);
      }

      // clipping
      if (clipFactor) {
        var clip = (maxValue - minValue) * clipFactor;
        minValue = minValue - clip;
      } else {
        if (minValue > 0) {
          minValue = 0;
        } else if (minValue < 0 && maxValue < 0) {
          maxValue = 0;
        }
      }

      var diff = Math.abs(maxValue - minValue);
      var tickGap = diff / parseFloat(noOfTick);

      return {
        minValue: minValue,
        maxValue: maxValue,
        tickGap: tickGap
      };
    }
  }, {
    key: 'adjustConfig_setBounds',
    value: function adjustConfig_setBounds(config, data) {
      var values;

      if (data && config.axisConfig && config.axisConfig.yAxis) {
        var clipFactor;
        if (config.axisConfig.yAxis.bound) {
          clipFactor = config.axisConfig.yAxis.bound.clipFactor;
        }
        var yBound = [];
        if (config.dataDefinition.yaxis) {
          yBound.push(config.dataDefinition.yaxis.value);
        } else {
          yBound = config.dataDefinition.series.map(function (item) {
            return item.value;
          });
        }

        values = this.adjustConfig_setBounds_calcValues(data, yBound, config, config.axisConfig.yAxis.noOfTick, clipFactor);

        config.axisConfig.yAxis.bound = {
          minValue: values.minValue,
          maxValue: values.maxValue
        };
        config.axisConfig.yAxis.unit = {
          major: values.tickGap
        };
      }
    }
  }, {
    key: 'adjustConfig_swapAxisConfigs',
    value: function adjustConfig_swapAxisConfigs(config) {
      if (this.isChartConfigHorizontal(config)) {
        var yAxisConfig = config.axisConfig.yAxis || {};
        var xAxisConfig = config.axisConfig.xAxis || {};
        if (yAxisConfig.yBound) {
          yAxisConfig.xBound = yAxisConfig.yBound;
          delete yAxisConfig.yBound;
        }
        if (xAxisConfig.xBound) {
          xAxisConfig.yBound = xAxisConfig.xBound;
          delete xAxisConfig.xBound;
        }
        config.axisConfig.yAxis = config.axisConfig.xAxis;
        config.axisConfig.xAxis = yAxisConfig;
      }
    }
  }, {
    key: 'adjustConfig',
    value: function adjustConfig(config, data) {
      Object.defaultsDeep(config, this.defaults.config);
      Object.defaultsDeep(config.axisConfig.xAxis.font, this.defaults.font);
      Object.defaultsDeep(config.axisConfig.yAxis.font, this.defaults.font);
      this.adjustConfig_swapAxisConfigs(config);
      this.adjustConfig_setBounds(config, data);
    }
  }, {
    key: 'findConfig',
    value: function findConfig(type, configs) {
      var config;
      configs.forEach(function (c) {
        if (c.chartType == type) {
          config = c;
        }
      });
      return config;
    }
  }, {
    key: 'getConfig',
    value: function getConfig(types, configs, data) {
      var i, config;
      for (i = 0; i < types.length; i++) {
        config = this.findConfig(types[i], configs);
        if (config != null) break;
      }
      if (config != null) {
        this.adjustConfig(config, data);
      }
      return config;
    }

    //properties preparations

  }, {
    key: 'getProperties',
    value: function getProperties(properties) {
      Object.defaultsDeep(properties, this.defaults.properties);
      return properties;
    }

    //convert all pieces of data and configurations into nvd3-acceptable options and data

  }, {
    key: 'convert',
    value: function convert(args) {
      var _this15 = this;

      var target = args.target;
      var originalTableContainer = args.tableContainer;
      args = window.clone(args);
      args.tableContainer = originalTableContainer;

      var config = this.getConfig(args.configTypes, args.configs, args.externalData);
      var properties = this.getProperties(args.properties);
      if (properties.height == null) {
        properties.height = args.height;
      }

      //OPTIONS
      var options = this.buildOptions(config, properties);

      //format module
      this._buildOptions_module('format', options);
      //wrapper module
      this._buildOptions_module('wrapper', options);
      //nesting module
      if (config.dataDefinition.xaxis.length > 1) {
        this._buildOptions_module('nesting', options, {
          config: config,
          externalData: args.externalData
        });
      }
      //labels module
      // if(properties.enableLabels) {
      var labelsConfig = this.getConfig(['LABELS'], args.configs);
      if (labelsConfig != null) {
        this._buildOptions_module('labels', options, {
          config: config,
          labelsConfig: labelsConfig,
          externalData: args.externalData,
          metadata: args.metadata
        });
      }
      // }

      //prepare yMetrics
      var yMetrics = [];
      if (properties.showTable && properties.chartTableProperty != null) {
        yMetrics = properties.chartTableProperty.dataDefinition.filter(function (serie) {
          var xMetric = _this15.getXMetricByGroupingLevel(config, 0);
          return serie.value != xMetric.value && serie.value != xMetric.displayValue;
        });
        yMetrics.push(config.dataDefinition.yaxis);
      } else {
        if (config.dataDefinition.series != null) {
          yMetrics = config.dataDefinition.series;
        } else {
          yMetrics = [config.dataDefinition.yaxis];
        }
      }

      //table module
      if (properties.showTable && properties.chartTableProperty != null) {
        this._buildOptions_module('table', options, {
          config: config,
          tableProperties: properties.chartTableProperty,
          yMetrics: yMetrics,
          tableContainer: args.tableContainer
        });
      }

      // //title module
      // if(properties.showTitle) {
      //   properties.showTitle = false
      //   this._buildOptions_module('title', options, {
      //     title: args.title
      //   })
      // }

      //DATA
      var data = this.buildData(yMetrics, args.externalData, args.metadata, config);

      //write results to target
      Object.assign(target, {
        options: options,
        data: data,
        config: config
      });
    }

    //old fns
    // formatAbbreviation: function (x) {
    //   if (isNaN(x)) {
    //     x = x.slice(1, x.length);
    //   }
    //   var s = d3.format(".3s")(x);
    //   switch (s[s.length - 1]) {
    //     case "G":
    //       return s.slice(0, -1) + "B";
    //   }
    //   return s;
    // },


    // wrap: function (text, width) {
    //   text.each(function () {
    //     var text = d3.select(this),
    //       dy = 0,
    //       start = 0,
    //       limit = width,
    //       words = [];
    //     if (text.text()) {
    //       /* for(var i=0;i<=text.text().length/limit;i++){
    //        start = i * limit;
    //        words.push(text.text().substr(start, limit));
    //        }
    //        words = words.reverse();
    //        */
    //       var prevItem = '';
    //       text.text().split(/\s+/).map(function (item, index, array) {
    //         return item + " ";
    //       }).forEach(function (item) {
    //         if ((item + prevItem).length <= limit) {
    //           prevItem = prevItem + item;
    //         }
    //         else {
    //           words.push(prevItem);
    //           prevItem = item;
    //         }
    //       });
    //       words.push(prevItem);
    //       words.reverse();

    //       var word,
    //         line = [],
    //         lineNumber = 0,
    //         lineHeight = 1, // ems
    //         y = text.attr("y") - ((words.length + 1) * 4),
    //         dy = parseFloat(text.attr("dy")),
    //         tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");

    //       while (word = words.pop()) {
    //         line.push(word);
    //         tspan.text(line.join(" "));
    //         if (tspan.node().getComputedTextLength() > width) {
    //           line.pop();
    //           tspan.text(line.join(" "));
    //           line = [word];
    //           tspan = text.append("tspan").attr("x", -6).attr("y", y - 5).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
    //         }
    //       }
    //     }
    //   });
    // },


    // wrapAxisLabel: function (text, width) {
    //   var dy = 0,
    //     start = 0,
    //     limit = width,
    //     words = [];
    //   if (text[0][0] != null && text.text()) {
    //     // for(var i=0;i<=text.text().length/limit;i++){
    //     // start = i * limit;
    //     // words.push(text.text().substr(start, limit));
    //     // }
    //     // words = words.reverse();
    //     var prevItem = '';
    //     text.text().split(/\s+/).map(function (item, index, array) {
    //       return item + " ";
    //     }).forEach(function (item) {
    //       if ((item + prevItem).length <= limit) {
    //         prevItem = prevItem + item;
    //       }
    //       else {
    //         words.push(prevItem);
    //         prevItem = item;
    //       }
    //     });
    //     words.push(prevItem);
    //     words.reverse();
    //     var word,
    //       line = [],
    //       lineNumber = 0,
    //       lineHeight = 1, // ems
    //       y = text.attr("y") - ((words.length + 1) * 4),
    //       tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    //     var count = 0;

    //     while (word = words.pop()) {
    //       line.push(word);
    //       tspan.text(line.join(" "));
    //       if (tspan.node().getComputedTextLength() > width) {
    //         line.pop();
    //         tspan.text(line.join(" "));
    //         line = [word];
    //         tspan = text.append("tspan").attr("x", -60).attr("y", y + 5).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
    //       }
    //       count++;
    //     }
    //   }
    // },


    // labelWrapper: function () {
    //   $timeout(function () {
    //     var chart = d3.select('.nv-x');
    //     chart.selectAll('text').call(this.wrap, 12);

    //     var yaxislabel = d3.select('.nv-y .nv-axislabel')
    //     yaxislabel.call(this.wrapAxisLabel, 25);
    //     // yaxislabel.attr("style", "text-anchor:end");
    //   }, 500);
    // },

    // convertColor: function (colorName) {
    //   var colorNames = {
    //     "colorGreen": "#5BB433",
    //     "colorRed": "#FF524F",
    //     "colorBlack": "#000000"
    //   };

    //   return colorNames[colorName];
    // },

    // getConditionalFormatColor: function (currValue, formatStr) {
    //   formatStr = (formatStr && formatStr != "") ? formatStr : "[Black]#.#;[Black]#.#;[Black]0;";
    //   var FormattingRule = formatStr.split(';');
    //   var posColor = 'color' + FormattingRule[0].substring(FormattingRule[0].indexOf('[') + 1, FormattingRule[0].indexOf(']'));
    //   var negColor = 'color' + FormattingRule[1].substring(FormattingRule[1].indexOf('[') + 1, FormattingRule[1].indexOf(']'));

    //   return Number(currValue) >= 0 ? this.convertColor(posColor) : this.convertColor(negColor);
    // }


  }, {
    key: 'NVD3DataXMetricName',
    get: function get() {
      return 'xmetric';
    }
  }, {
    key: 'NVD3DataXMetricDisplayName',
    get: function get() {
      return 'xmetricDisplayed';
    }
  }, {
    key: 'NVD3DataYMetricName',
    get: function get() {
      return 'ymetric';
    }
  }, {
    key: 'NVD3DataYMetricDisplayName',
    get: function get() {
      return 'ymetricDisplayed';
    }
  }, {
    key: 'NVD3DataEntryKeyName',
    get: function get() {
      return 'key';
    }
  }, {
    key: 'ChartWithTableContainerAttributeName',
    get: function get() {
      return 'chart-with-table-container-attribute';
    }
  }, {
    key: 'defaults',
    get: function get() {
      return {
        legend: {},
        font: {
          fontFamily: 'Roboto, "Open Sans", sans-serif',
          fontSize: 12,
          fontWeight: 'normal',
          fontColor: 'rgb(136, 136, 136)'
        },
        config: {
          axisConfig: {
            // showXaxis: true,
            // showYaxis: true,
            xAxis: {
              showAxisLabel: true,
              showAxisLine: true,
              showMaxMin: false,
              font: {
                size: 12
              }
            },
            yAxis: {
              showAxisLabel: true,
              showAxisLine: true,
              showMaxMin: false,
              font: {
                size: 12
              }
            }
          }
        },
        properties: {
          margin: {},
          legend: {},
          showControls: true,
          showLegend: true,
          showTitle: true,
          showValues: true,
          showXaxis: true,
          showYaxis: true,
          showMarker: true,
          showTable: false
        }
      };
    }
  }]);

  return _class4;
}();
'use strict';

angular.module('nlsn.chart.components.util.colors', []).constant('$nlsnColors', {
  stdcolors: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#CAB2D6', '#6A3D9A', '#FFFF99', '#B15928']
});

(function () {

  angular.module('nlsn.chart.components.helper', ['nlsn.chart.components.util.colors']).service('chartHelpers', ['$nlsnColors', chartHelpers]);

  function chartHelpers($nlsnColors) {
    return new nv.ChartHelpers($nlsnColors.stdcolors);
  }
})();

(function () {
  'use strict';
  /**
    *
   * @module nlsn.chart.components.chartCore
   * @name nlsn-chart-core
   * @restrict E
   * @description
   * nlsn chart core
   *
   * * @usage
   <nlsn-chart-core chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-chart-core>
   @example
   <nlsn-chart-core  opt='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-chart-core>
    <!-- opt-->
   Options of chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
   **/

  angular.module('nlsn.chart.components.chartCore', []).component('nlsnChartCore', {
    controller: ["$timeout", nlsnChartCoreCtrl],
    controllerAs: 'nlsnChartCore',
    bindings: {
      opt: "<",
      data: "=",
      type: "@",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      axisoptions: "<",
      chartOptions: "=",
      charttitle: "=",
      tooltip: "<",
      metadata: "<"

    },
    template: '<nvd3 options="nlsnChartCore.options"\n                       data="nlsnChartCore.data"\n                       config="nlsnChartCore.config"\n                       on-ready="nlsnChartCore.callback">\n                </nvd3>'
  });

  /** @ngInject */
  function nlsnChartCoreCtrl($timeout) {
    var vm = this;
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("opt")) {
        updateOptions();
      }
    };
    /*Code for rotaion of x axis*/
    if (vm.axisoptions) {
      if (vm.axisoptions.bound) {
        vm.tickLength = countTicks(vm.axisoptions, vm.opt);
        calculateRotateAfterPoints(vm.tickLength, vm.opt, vm.axisoptions.rotateAfterPoints, vm.axisoptions.tickLabelRotationAngle);
      } else {
        calculateRotateAfterPoints(vm.data.length, vm.opt, vm.axisoptions.rotateAfterPoints, vm.axisoptions.tickLabelRotationAngle);
      }
    }

    updateOptions();

    vm.type = vm.type || "pieChart"; // set 'pieChart' as default

    vm.config = {
      visible: true, // default: true
      extended: false, // default: false
      disabled: false, // default: false
      refreshDataOnly: true, // default: true
      deepWatchOptions: true, // default: true
      deepWatchData: true, // default: true
      deepWatchDataDepth: 10, // default: 2
      debounce: 10 // default: 10
    };

    function updateOptions() {
      vm.options = {
        chart: {
          type: vm.type,
          height: vm.height,
          useInteractiveGuideline: false,
          showLabels: false,
          //showValues:false,
          valueFormat: function valueFormat(d) {
            return d3.format(',.4f')(d);
          },
          showXAxis: vm.chartOptions.showXaxis ? vm.chartOptions.showXaxis : true,
          showYAxis: vm.chartOptions.showYaxis ? vm.chartOptions.showYaxis : true,
          legend: {
            align: vm.chartOptions.legend && vm.chartOptions.legend.align ? vm.chartOptions.legend.align : "TOP",
            rightAlign: false,
            justified: vm.chartOptions.legend && vm.chartOptions.legend.justified ? vm.chartOptions.legend.justified : "",
            margin: vm.chartOptions.legend && vm.chartOptions.legend.margin ? vm.chartOptions.legend.margin : {}
          },
          clipEdge: false,
          transitionDuration: 0,
          color: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#CAB2D6', '#6A3D9A', '#FFFF99', '#B15928']
        }
      };
      if (vm.tooltip && vm.tooltip.length > 0) {
        vm.options.chart.tooltip = {
          contentGenerator: function contentGenerator(e) {
            var series = e.series[0];
            var data = e.data;

            var titleHtml;
            var valueHtml;
            var rows = "";
            var header = "";
            var metadata = vm.metadata;
            var title = "";
            var tooltip;
            for (var kk = 0; kk < vm.tooltip.length; kk++) {
              var tooltip = vm.tooltip[kk];
              if (metadata[tooltip.column] && metadata[tooltip.column].title) {
                title = metadata[tooltip.column].title;
              } else title = tooltip.column;

              var displayFormat = tooltip.displayFormat;
              if (displayFormat && displayFormat.length == 0) {
                displayFormat = ",.2f";
              }

              var value = data[tooltip.column];
              if (angular.isNumber(value)) {
                value = d3.format(displayFormat)(value);
                /* For display format as per current implementation*/
              }

              if (tooltip.showTitle) {
                titleHtml = "<td class='key tableDivision'>" + title + "</td>";
              }
              if (tooltip.showValue) {
                valueHtml = "<td class='key tableDivision'>" + value + "</td>";
              }
              rows += "<tr class='key table'>" + titleHtml + valueHtml + "</tr>";
            }

            header += "<thead class='key table '>" + "<tr>" + "<td class='key tableDivision'><strong>" + series.key + "</strong></td>" + "<td class='legend-color-guide tableDivision'><div style='background-color: " + series.color + ";'></div></td>" + "</tr>" + "</thead>";

            var html = "<table class='tableTooltip'>" + header + "<tbody>" + rows + "</tbody>" + "</table>";

            // html = "<table class='tableTooltip'><thead class='key table '><tr><td class='key tableDivision'><strong>Total Co-ops/GB</strong></td><td class='legend-color-guide tableDivision'><div style='background-color: rgb(0, 102, 153);'></div></td></tr></thead><tbody><tr class='key table'><td class='key tableDivision'   style='text-align:'LEFT;color:string;font-family:san-serif;font-size:0>Total Co-ops/GB</td><td class='key tableDivision' ng-hide='true' style='text-align:'LEFT;color:string;font-family:san-serif;font-size:0>7.7</td></tr></tbody></table>"
            return html;
          }
        };
      }
      /* custom legend icon*/
      vm.legendShapeMapper = {
        'circle': '\uF111',
        "square": '\uF0C8',
        'line': '\uF068',
        'diamond': '\uF219',
        "rectangle": '\uF0C8'
      };
      if (vm.chartOptions.legend && vm.chartOptions.legend.shape) {
        vm.legendShape = vm.chartOptions.legend && vm.chartOptions.legend.shape;
        vm.legendShape = vm.legendShape.toLocaleLowerCase();
        if (vm.legendShapeMapper[vm.legendShape]) {
          vm.options.chart.legend.legendIcon = vm.legendShapeMapper[vm.legendShape];
        } else {
          vm.options.chart.legend.legendIcon = null;
        }
      }
      /*custom legend icon*/

      if (vm.chartOptions) {
        if (vm.chartOptions.margin) {
          vm.options.chart.margin = vm.chartOptions.margin;
        }
        if (vm.chartOptions.showControls == true || vm.chartOptions.showControls == false) {
          vm.options.chart.showControls = vm.chartOptions.showControls;
        }
        if (vm.chartOptions.showLegend == true || vm.chartOptions.showLegend == false) {
          vm.options.chart.showLegend = vm.chartOptions.showLegend;
        }
        if (vm.chartOptions.showValues == true || vm.chartOptions.showValues == false) {
          vm.options.chart.showValues = vm.chartOptions.showValues;
        }

        if (vm.chartOptions.showTitle) {
          vm.options.title = {
            enable: true,
            text: vm.charttitle
          };
        }
        if (vm.chartOptions.gapWidth) {
          vm.options.chart.groupSpacing = vm.chartOptions.gapWidth / 100;
        }
        if (vm.chartOptions.colorPalette) {
          vm.options.chart.barColor = function (d, i) {
            return vm.chartOptions.colorPalette[i];
          };
        }
        //ToDo : Custom Legend
        vm.opt.chart.legend = vm.chartOptions.legend;
        if (vm.opt.chart.legend) {
          if (vm.opt.chart.legend.align == 'BOTTOM' || vm.opt.chart.legend.align == 'LEFT' || vm.opt.chart.legend.align == 'RIGHT') {
            vm.options.chart.legend.rightAlign = false;
          } else {
            // Top Position
            vm.options.chart.legend.rightAlign = true;
          }

          if (vm.chartOptions.legend.margin) {
            vm.options.chart.legend.margin = vm.chartOptions.legend.margin;
          }
        }
      }
      vm.callback = function (scope) {
        vm.api = scope.api;
        vm.chart = scope.chart;
        vm.svg = scope.svg;

        var _chartElem = scope.svg;

        var legendPositionCb = function (_svg) {
          return function () {
            $timeout(function () {
              var legends = d3.select($(_svg[0]).find("g.nv-legendWrap, .legendWrap")[0]);
              legends.attr('transform', function () {
                if (d3.select(_svg).length > 0 && d3.select(_svg).node()[0][0]) {
                  var containerWidth = d3.select(_svg).node()[0][0].getBBox().width;
                  var width = this.getBBox().width;
                  var center = containerWidth / 2 - width / 2;

                  return "translate(" + center + ", " + d3.transform(d3.select(this).attr("transform")).translate[1] + ")";
                } else {
                  return "translate(0,0)";
                }
              });
            }, 50);
          };
        }(_chartElem);

        // Added timer to avoid first time load issue.
        $timeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 1000);

        // ------------------------------------------
        //
        //  ******* CENTERING THE LEGEND ************
        //
        // ------------------------------------------
        // if (vm.opt.chart.legend && !!!(vm.opt.chart.legend.justified == "RIGHT" || vm.opt.chart.legend.align == "RIGHT")) {
        //
        //   var legendPositionCb = function (_svg) {
        //     return function () {
        //       $timeout(function () {
        //         var legends = d3.select($(_svg[0]).find("g.nv-legendWrap, .legendWrap")[0]);
        //         legends.attr('transform', function () {
        //           if (d3.select(_svg).length > 0 && d3.select(_svg).node()[0][0]) {
        //             var containerWidth = d3.select(_svg).node()[0][0].getBBox().width;
        //             var width = this.getBBox().width;
        //             var center = containerWidth / 2 - width / 2;
        //
        //             return "translate(" + center + ", " + d3.transform(d3.select(this).attr("transform")).translate[1] + ")";
        //           } else {
        //             return "translate(0,0)";
        //           }
        //         });
        //       }, 50);
        //     };
        //   }(_chartElem);
        //
        //   var $clone = null;
        //   var $element = null;
        //   var position = null;
        //   var legendWrap = $(_chartElem[0]).find("g.nv-legendWrap, .legendWrap");
        //
        //   var legendControlPreclickHandler = function legendControlPreclickHandler() {
        //     $element = $(this);
        //     var $parent = $element.parent();
        //     if($clone && $clone.size() > 0) {
        //       $clone.remove();
        //     }
        //     $clone = $element.clone();
        //     position = $element.offset();
        //     $clone.offset(position);
        //     $parent.append($clone);
        //     $element.css({ "display": "none" });
        //   };
        //
        //   var legendControlClickHandler = function legendControlClickHandler() {
        //     $timeout(function () {
        //       legendPositionCb();
        //       $timeout(function () {
        //         $element.offset(position);
        //         $clone.remove();
        //         $element.css({ "display": "" });
        //       }, 50);
        //     }, 50);
        //   };
        //
        //   legendWrap.off("mouseup", legendControlPreclickHandler).on("mouseup", legendControlPreclickHandler).off("click", legendControlClickHandler).on("click", legendControlClickHandler);
        //
        //   var legendOnWindowResizeCb = (function (_legendWrap) {
        //     return function() {
        //       legendPositionCb();
        //       legendControlPreclickHandler.apply(_legendWrap);
        //       legendControlClickHandler();
        //     }
        //   })(legendWrap);
        //
        //   window.addEventListener('resize', legendOnWindowResizeCb);
        //
        //   scope.$on('$destroy', function () {
        //     window.removeEventListener('resize', legendOnWindowResizeCb);
        //   });
        // }
      };

      if (vm.opt) {

        angular.merge(vm.options, vm.opt);
      }
    }

    function countTicks(xAxis, axisoptions) {
      var arr = [];
      vm.xmax = xAxis.bound.maxValue;
      vm.xmin = xAxis.bound.minValue;

      var i = 0;
      do {
        arr.push(i);
        i = i + xAxis.unit.major;
      } while (i < vm.xmax);
      i = 0;
      do {
        arr.push(i);
        i = i - xAxis.unit.major;
      } while (i > vm.xmin);
      // vm.ticklength = arr.length;
      axisoptions.chart.xAxis.tickValues = arr;
      return arr.length;
    }

    function calculateRotateAfterPoints(ticklength, axisoptions, rotateAfterPoints, tickLabelRotationAngle) {
      /*  if (rotateAfterPoints) {
       if (rotateAfterPoints < ticklength) {
       axisoptions.chart.xAxis.rotateLabels = 45;
       }
       }
       else {
       if (tickLabelRotationAngle) {
       axisoptions.chart.xAxis.rotateLabels = tickLabelRotationAngle;
       }
       else {
       axisoptions.chart.xAxis.rotateLabels = 0;
       }
       }*/

      if (rotateAfterPoints) {
        if (rotateAfterPoints < ticklength && tickLabelRotationAngle) {
          axisoptions.chart.xAxis.rotateLabels = tickLabelRotationAngle;
        }
      }
    }

    window.dispatchEvent(new Event('resize'));
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpMultiBarChart', []).component('nlsnDpMultiBarChart', {
    controller: ['chartHelpers', NlsnDpMultiBarChartCtrl],
    controllerAs: 'NlsnDpMultiBarChart',
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    template: '<nlsn-chart-core type="multiBarChartExt"\n                                  data="NlsnDpMultiBarChart.data"\n                                  opt="NlsnDpMultiBarChart.options"\n                                  chart-options="NlsnDpMultiBarChart.properties"\n                                  metadata="NlsnDpMultiBarChart.metadata"\n                                  charttitle="NlsnDpMultiBarChart.charttitle"\n                                  height="NlsnDpMultiBarChart.height"\n                                  axisoptions="NlsnDpMultiBarChart.config.axisConfig.xAxis"\n                                  tooltip="NlsnDpMultiBarChart.config.tooltip"\n                                  xaxislabel="NlsnDpMultiBarChart.xaxislabel"\n                                  yaxislabel="NlsnDpMultiBarChart.yaxislabel"\n                                  ng-class="{ \'hide-x-label\': !NlsnDpMultiBarChart.config.axisConfig.xAxis.showAxisLabel, \'hide-x-line\': !NlsnDpMultiBarChart.config.axisConfig.xAxis.showAxisLine, \'hide-y-label\': !NlsnDpMultiBarChart.config.axisConfig.yAxis.showAxisLabel, \'hide-y-line\': !NlsnDpMultiBarChart.config.axisConfig.yAxis.showAxisLine }">\n               </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpMultiBarChartCtrl(chartHelpers) {
    var vm = this;

    chartHelpers.convert({
      target: vm,
      configTypes: ['MULTIBAR_VERTICAL', 'STACKED_VERTICAL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      title: vm.charttitle,
      height: vm.height
    });
     
       if (vm.configs[0].axisConfig.yAxis.displayFormat) {
                vm.options.chart.yAxis.tickFormat = function (d) {
                  if (vm.configs[0].axisConfig.yAxis.displayFormat.indexOf("%") !== -1 ) {
                    return d3.format(vm.configs[0].axisConfig.yAxis.displayFormat)(d);
                  } else if(vm.configs[0].axisConfig.yAxis.displayFormat.indexOf("£") !== -1){
                    return parseFloat(d).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'GBP',
                    minimumFractionDigits: 2,
                    useGrouping: false
                   });
                  } else {
                    var displayFormat = vm.configs[0].axisConfig.yAxis.displayFormat.replace(/"/gi, '');
                    return d.numberFormat(displayFormat);
                  }
                };
              } 
    //chart options adjustment
    Object.mergeDeep(vm.options.chart, {
      stacked: vm.config.chartType === 'STACKED_VERTICAL',
      xAxis: {
        axisLabelDistance: -10,
        tickPadding: 3
      }
    });
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpMultiChart', []).component('nlsnDpMultiChart', {
    controller: NlsnDpMultiChartCtrl,
    controllerAs: 'NlsnDpMultiChart',
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      tableProperties: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    template: '<nlsn-chart-core type="multiChartExt" \n                                  data="NlsnDpMultiChart.data" \n                                  opt="NlsnDpMultiChart.options" \n                                  chart-options="NlsnDpMultiChart.properties" \n                                  metadata="NlsnDpMultiChart.metadata" \n                                  charttitle="NlsnDpMultiChart.charttitle" \n                                  height="NlsnDpMultiChart.height" \n                                  axisoptions="NlsnDpMultiChart.config.axisConfig.xAxis" \n                                  tooltip="NlsnDpMultiChart.config.tooltip" \n                                  xaxislabel="NlsnDpMultiChart.xaxislabel" \n                                  yaxislabel="NlsnDpMultiChart.yaxislabel" \n                                  ng-class="{ \'hide-x-label\': !NlsnDpMultiChart.config.axisConfig.xAxis.showAxisLabel, \'hide-x-line\': !NlsnDpMultiChart.config.axisConfig.xAxis.showAxisLine, \'hide-y-label\': !NlsnDpMultiChart.config.axisConfig.yAxis.showAxisLabel, \'hide-y-line\': !NlsnDpMultiChart.config.axisConfig.yAxis.showAxisLine }">\n                 </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpMultiChartCtrl() {
    var vm = this;

    // vm.configs.forEach((config) => {
    //   Object.defaultsDeep(config, chartHelpers.defaults.config)
    //   switch(config.chartType) {
    //     case 'MULTIBAR_VERTICAL':
    //       break
    //     case 'STACKED_VERTICAL':
    //       break
    //   }
    // })
    // //config
    // vm.config = chartHelpers.findConfig('MULTIBAR_VERTICAL', vm.configs) || chartHelpers.findConfig('STACKED_VERTICAL', vm.configs)
    // Object.defaultsDeep(vm.config, chartHelpers.defaults.config)

    // //properties
    // Object.defaultsDeep(vm.properties, chartHelpers.defaults.properties)
    // // vm.properties.colorPalette = vm.properties.colorPalette || vm.config.colorPalette

    // //data
    // var externalData = angular.copy(vm.externalData)

    // //options
    // vm.options = chartHelpers.buildOptions(vm.config, vm.properties)
    // angular.merge(vm.options.chart, {
    //   stacked: vm.config.chartType === 'STACKED_VERTICAL',
    //   xAxis: {
    //     axisLabelDistance: -10,
    //     tickPadding: 3
    //   }
    // })

    // //-- nesting module
    // if(vm.config.dataDefinition.xaxis.length > 1) {
    //   var xGroupField = chartHelpers.getXMetricByGroupingLevel(vm.config, 1).value
    //   var groups = [], groupName, group, d
    //   externalData.forEach(function (d) {
    //     groupName = d[xGroupField]
    //     group = null
    //     groups.forEach(function (g) {
    //       if(g.name === groupName) {
    //         group = g
    //       }
    //     })
    //     if(group == null) {
    //       group = {
    //         name: groupName,
    //         data: []
    //       }
    //       groups.push(group)
    //     }
    //     group.data.push(d)
    //   })
    //   externalData = []
    //   groups.forEach(function (group) {
    //     group.data.forEach(function (d) {
    //       externalData.push(d)
    //     })
    //   })
    //   var nestingModule = {
    //     name: 'nesting',
    //     options: {
    //       barsInGroup: groups[0].data.length,
    //       groupName: function (n) {
    //         return groups[n].name
    //       },
    //       minBottomMargin: 80,
    //       groupLabel: {
    //         height: 55,
    //         borderWhitespaceYOffset: 20,
    //         text: {
    //           width: 120,
    //           height: 50,
    //           fontSize: parseFloat(vm.config.axisConfig.xAxis.font.fontSize),
    //           nMaxLineCount: 2
    //         },
    //         colors: {
    //           border: '#CCCCCC',
    //           text: '#999999'
    //         }
    //       },
    //     }
    //   }

    //   vm.options.chart.modules.push(nestingModule)
    // }

    // //-- labels module
    // if(vm.properties.enableLabels) {
    //   var labelsConfig = chartHelpers.findConfig('LABELS', vm.configs)
    //   Object.defaultsDeep(labelsConfig, chartHelpers.defaults.config)
    //   if (labelsConfig != null) {

    //     var labelsData = chartHelpers.buildData(labelsConfig.dataDefinition.series, vm.externalData, vm.metadata, vm.config);

    //     vm.options.chart.modules.push({
    //       name: 'top-labels',
    //       options: {
    //         data: labelsData,
    //         isAvg: false,
    //         labels: {
    //           offsetY: 20,
    //           fontSize: parseFloat(labelsConfig.axisConfig.xAxis.font.fontSize),
    //           minFontSize: 1,
    //           borderWidth: 1,
    //           rectPaddingX: 5,
    //           rectPaddingY: 2,
    //         },
    //         header: {
    //           enabled: labelsConfig.axisConfig.xAxis.showTitle,
    //           // text: function(serie) {
    //           //   return serie
    //           // },
    //           // text: 'Point Change',
    //           textField: 'key',
    //           height: 80,
    //           width: 100,
    //           fontSize: 15,
    //           nMaxLineCount: 3
    //         },
    //         colors: {
    //           header: '#999999',
    //           labelBorder: '#CCCCCC',
    //           labelFont: 'black'
    //         },
    //         formatString: labelsConfig.axisConfig.xAxis.displayFormat
    //       }
    //     });
    //   }
    // }

    // //data
    // vm.data = chartHelpers.buildData(vm.config.dataDefinition.series, externalData, vm.metadata, vm.config)
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpMultiBarHorizontalChart', []).component('nlsnDpMultiBarHorizontalChart', {
    controller: ['chartHelpers', NlsnDpMultiBarHorizontalChartCtrl],
    controllerAs: 'NlsnDpMultiBarHorizontalChart',
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "=",
      componentId: "=",
      heightAttr: "="
    },
    template: '<nlsn-chart-core type="multiBarHorizontalChartExt"\n                                  data="NlsnDpMultiBarHorizontalChart.data"\n                                  opt="NlsnDpMultiBarHorizontalChart.options"\n                                  chart-options="NlsnDpMultiBarHorizontalChart.properties"\n                                  metadata="NlsnDpMultiBarHorizontalChart.metadata"\n                                  charttitle="NlsnDpMultiBarHorizontalChart.charttitle"\n                                  height="NlsnDpMultiBarHorizontalChart.height"\n                                  axisoptions="NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis"\n                                  tooltip="NlsnDpMultiBarHorizontalChart.config.tooltip"\n                                  xaxislabel="NlsnDpMultiBarHorizontalChart.xaxislabel"\n                                  yaxislabel="NlsnDpMultiBarHorizontalChart.yaxislabel"\n                                  ng-class="{\'hide-x-label\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis.showAxisLabel,   \'hide-x-line\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis.showAxisLine,   \'hide-y-label\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.yAxis.showAxisLabel,   \'hide-y-line\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.yAxis.showAxisLine }" >\n                </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpMultiBarHorizontalChartCtrl(chartHelpers) {
    var vm = this;

    chartHelpers.convert({
      target: vm,
      configTypes: ['MULTIBAR_HORIZONTAL', 'STACKED_HORIZONTAL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      title: vm.charttitle,
      height: vm.height
    });

    //chart options adjustment
    Object.mergeDeep(vm.options.chart, {
      stacked: vm.config.chartType === 'STACKED_HORIZONTAL'
    });

    //nesting module adjustment
    if (vm.options.chart.modulesObj.nesting != null) {
      Object.mergeDeep(vm.options.chart.modulesObj.nesting, {
        options: {
          groupLabel: {
            borderWhitespaceYOffset: 10,
            height: 50,
            text: {
              width: 100
            }
          }
        }
      });
      vm.options.chart.xAxis.axisLabelDistance = -40;
    }

    //labels module adjustment
    if (vm.options.chart.modulesObj.labels != null) {
      Object.mergeDeep(vm.options.chart.modulesObj.labels, {
        options: {
          header: {
            height: 40,
            fontSize: 12
          }
        }
      });
    }

    //Height calculator in case of Show More
    if (vm.heightAttr && vm.data[0].values.length > 13) {
      vm.options.chart.height = vm.data[0].values.length * 50;
    }

    vm.options.chart.callback = function (chart) {
      try {
        var container = d3.selectAll("#axis-" + vm.componentId);
        //added condition because container is usually empty and further code throws an error breaking updates on resize
        if (container[0].length) {
          var ele = d3.select("#chart-" + vm.componentId).selectAll(".nv-multiBarHorizontalChart");
          var translate = ele[0][0].attributes.transform.value;
          var req_translate = translate.substring(0, translate.indexOf(",")) + ",0)";
          var axis = d3.select("#chart-" + vm.componentId).selectAll(".nv-y.nv-axis");
          var myAxis = angular.copy(axis);
          d3.select(myAxis[0][0]).attr("transform", req_translate);
          container.selectAll("g").remove();
          container[0][0].append(myAxis[0][0]);
        }
      } catch (e) {
        console.error("error:", e);
      }
    };
  }
})();

(function () {
  'use strict';

  angular.module('nlsn.chart.components.dpWaterfallChart', []).component('nlsnDpWaterfallChart', {
    controller: ["chartHelpers", '$element', NlsnDpWaterfallChartCtrl],
    bindings: {
      externalData: "=data",
      properties: "=",
      configs: "=",
      metadata: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      charttitle: "="
    },
    controllerAs: 'NlsnDpWaterfallChart',
    template: '<nlsn-chart-core type="waterfall"\n                                  data="NlsnDpWaterfallChart.data"\n                                  opt="NlsnDpWaterfallChart.options"\n                                  chart-options="NlsnDpWaterfallChart.properties"\n                                  metadata="NlsnDpWaterfallChart.metadata"\n                                  charttitle="NlsnDpWaterfallChart.charttitle"\n                                  height="NlsnDpWaterfallChart.height"\n                                  axisoptions="NlsnDpWaterfallChart.config.axisConfig.xAxis"\n                                  tooltip="NlsnDpWaterfallChart.config.tooltip"\n                                  xaxislabel="NlsnDpWaterfallChart.xaxislabel"\n                                  yaxislabel="NlsnDpWaterfallChart.yaxislabel"\n                                  ng-class="{   \'hide-x-label\': !NlsnDpWaterfallChart.config.axisConfig.xAxis.showAxisLabel,   \'hide-x-line\': !NlsnDpWaterfallChart.config.axisConfig.xAxis.showAxisLine,   \'hide-y-label\': !NlsnDpWaterfallChart.config.axisConfig.yAxis.showAxisLabel,   \'hide-y-line\': !NlsnDpWaterfallChart.config.axisConfig.yAxis.showAxisLine }" >\n                 </nlsn-chart-core>'
  });

  /** @ngInject */
  function NlsnDpWaterfallChartCtrl(chartHelpers, $element) {
    var vm = this;

    var height,
        element = $element;
    do {
      if (element.height() > 0) {
        break;
      } else {
        element = element.parent();
        if (!element.length) {
          break;
        }
      }
    } while (true);

    chartHelpers.convert({
      target: vm,
      configTypes: ['WATERFALL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      title: vm.charttitle,
      height: vm.height,
      tableContainer: element[0]
    });

    //options adjustment
    if (vm.options.chart.height == null) {
      // Object.mergeDeep(vm.options.chart, {
      //   height: 450
      // })
    }
  }
})();

(function () {
  'use strict';
  /**
    *
   * @module nlsn.chart.components.lineChart
   * @name nlsn-line-chart
   * @restrict E
   * @description
   * nlsn line chart
   *
   * * @usage
   <nlsn-line-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-line-chart>
   @example
   <nlsn-line-chart  chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-line-chart>
    <!-- chart-options-->
   Additional options for chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
   **/

  angular.module('nlsn.chart.components.lineChart', ['nlsn.chart.components.util.colors']).component('nlsnLineChart', {
    controller: ["$scope", "$nlsnColors", "chartHelpers", nlsnLineChartCtrl],
    controllerAs: 'nlsnLineChart',
    bindings: {
      chartOptions: "<",
      chartSubtype: "=",
      data: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      parameterData: "=",
      chartconfigs: "=",
      charttype: "=",
      charttitle: "=",
      metadata: "<"
    },
    template: '<nlsn-chart-core axisoptions="nlsnLineChart.xAxis" \n                                  tooltip="nlsnLineChart.tooltip" \n                                  metadata="nlsnLineChart.metadata" \n                                  chartoptions="nlsnLineChart.xAxis"\n                                  chart-options="nlsnLineChart.chartOptions" \n                                  charttitle="nlsnLineChart.charttitle" \n                                  opt="nlsnLineChart.options" \n                                  data="nlsnLineChart.data" \n                                  type="{{nlsnLineChart.chartType}}" \n                                  height="nlsnLineChart.height" \n                                  xaxislabel="nlsnLineChart.xaxislabel" \n                                  yaxislabel="nlsnLineChart.yaxislabel"> \n                  </nlsn-chart-core>'

  });

  /** @ngInject */
  function nlsnLineChartCtrl($scope, $nlsnColors, chartHelpers) {
    var vm = this;
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("chartOptions")) {
        vm.updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions;
    }, function () {
      vm.updateOptions();
    });

    if ('SIMPLE' == vm.charttype) {
      vm.exHeight = 0;
      if (vm.chartconfigs && !vm.chartconfigs[0].dataDefinition.yaxis) {
        // no yaxis present use series as y
        var existingData = angular.copy(vm.data);
        var newData = [];
        angular.forEach(vm.chartconfigs[0].dataDefinition.series, function (seriesItem) {
          var currSeriesItem = seriesItem.value;
          var displayName = currSeriesItem;
          if (vm.metadata && vm.metadata[currSeriesItem]) {
            displayName = vm.metadata[currSeriesItem].title;
          }
          var filterData = angular.copy(existingData);
          angular.forEach(filterData, function (rec) {
            rec.seriesDisplay = currSeriesItem;
          });
          newData.push({
            "key": displayName,
            "values": filterData,
            "color": vm.chartconfigs[0].seriesConfigs && vm.chartconfigs[0].seriesConfigs[currSeriesItem] && vm.chartconfigs[0].seriesConfigs[currSeriesItem].color ? vm.chartconfigs[0].seriesConfigs[currSeriesItem].color : vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]
          });
        });
        vm.data = newData;
      } else if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.series) {
        //manipulate data
        var existingData = angular.copy(vm.data);
        var newData = [];
        var uniqueNames = [];
        for (var i = 0; i < existingData.length; i++) {
          var currentSeriesName = existingData[i][vm.chartconfigs[0].dataDefinition.series[0].value];
          if (uniqueNames.indexOf(currentSeriesName) === -1) {
            var recs = existingData.filter(function (rec) {
              return rec[vm.chartconfigs[0].dataDefinition.series[0].value] == currentSeriesName;
            });
            if (existingData[i].is_parent == "true") {
              angular.forEach(recs, function (val, key) {
                val.shape = "diamond";
              });
            }
            newData.push({
              "key": currentSeriesName,
              "values": recs,
              "color": vm.chartconfigs[0].seriesConfigs && vm.chartconfigs[0].seriesConfigs[currentSeriesName] && vm.chartconfigs[0].seriesConfigs[currentSeriesName].color ? vm.chartconfigs[0].seriesConfigs[currentSeriesName].color : vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10],
              "classed": existingData[i].is_parent == "true" ? "dashed" : ""
            });
            uniqueNames.push(currentSeriesName);
          }
        }
        vm.data = newData;
      }
      vm.data = chartHelpers.xMetricSort(vm.data);
      vm.data = chartHelpers.seriesSort(vm.data);

      angular.forEach(vm.data, function (value, key) {
        value.area = vm.chartSubtype == 'AREA';
      });
      if (!vm.parameterData) {
        vm.exHeight = 25;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d, i) {
              if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.xaxis[0].value) return Number(d[vm.chartconfigs[0].dataDefinition.xaxis[0].value]);
              if (d.id) {
                return Number(d.id);
              } else return i;
            },
            pointSize: function pointSize(d) {
              if (d.is_parent == "true") {
                return 50;
              }
              return 30;
            },
            y: function y(d) {
              if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition) {
                var def = vm.chartconfigs[0].dataDefinition;
                if (def.yaxis) {
                  return Number(d[vm.chartconfigs[0].dataDefinition.yaxis.value]);
                } else {
                  var yCol = d['seriesDisplay'];
                  return Number(d[yCol]);
                }
              }
              return Number(d.value);
            }
          }
        };
        if (vm.chartOptions) {
          var chartoptions = {
            chart: {
              xAxis: {
                tickFormat: function tickFormat(d, i, series) {
                  if (vm.chartconfigs[0].dataDefinition) {
                    var retValue = "";
                    angular.forEach(vm.data[0].values, function (val, key) {
                      if (d == Number(val[vm.chartconfigs[0].dataDefinition.xaxis[0].value])) {
                        var dispValue = vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue ? vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue : vm.chartconfigs[0].dataDefinition.xaxis[0].value;
                        if (vm.xAxis.displayFormat === "Date") {
                          var date = new Date(val[dispValue]);
                          var locale = "en-us";
                          retValue = "WE" + ' ' + date.getDate() + '-' + date.toLocaleString(locale, { month: "short" }) + '-' + date.getFullYear();
                        } else {
                          retValue = val[dispValue];
                        }
                      }
                    });
                    if (retValue != "") {
                      return retValue;
                    }
                  }
                }
              },
              yAxis: {}
            }
          };

          /* Tooltip */
          if (vm.chartconfigs[0].tooltip) {
            vm.tooltip = vm.chartconfigs[0].tooltip;
          }

          if (vm.chartconfigs[0].axisConfig && vm.chartconfigs[0].axisConfig.xAxis) {
            vm.xAxis = vm.chartconfigs[0].axisConfig.xAxis;
            if (vm.chartconfigs[0].axisConfig.xAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.xAxis.showAxisLabel) {
                chartoptions.chart.xAxis = {
                  axisLabel: vm.chartconfigs[0].axisConfig.xAxis.axisLabel
                };
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.bound) {
                vm.xmin = vm.chartconfigs[0].axisConfig.xAxis.bound.minValue;
                vm.xmax = vm.chartconfigs[0].axisConfig.xAxis.bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.xAxis.unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartconfigs[0].axisConfig && vm.chartconfigs[0].axisConfig.yAxis) {
            if (vm.chartconfigs[0].axisConfig.yAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.yAxis.showAxisLabel) {
                chartoptions.chart.yAxis = {
                  axisLabel: vm.chartconfigs[0].axisConfig.yAxis.axisLabel
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.bound) {
                vm.ymin = vm.chartconfigs[0].axisConfig.yAxis.bound.minValue;
                vm.ymax = vm.chartconfigs[0].axisConfig.yAxis.bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat) {
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat.indexOf("%") !== -1) {
                    return d3.format(vm.chartconfigs[0].axisConfig.yAxis.displayFormat)(d);
                  } else {
                    var displayFormat = vm.chartconfigs[0].axisConfig.yAxis.displayFormat.replace(/"/gi, '');
                    return d.numberFormat(displayFormat);
                  }
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.yAxis.unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }

          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
      };

      vm.updateOptions();
      vm.chartType = "lineChart";
    } else {
      // for folks who are using old
      angular.forEach(vm.data, function (value, key) {
        value.area = vm.chartSubtype == 'AREA' || vm.chartSubtype == 'DASHBOARD-AREA';
      });
      vm.exHeight = 0;
      if (!vm.parameterData) {
        vm.exHeight = 25;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d, i) {
              if (d.id) {
                return Number(d.id);
              } else return i;
            },
            y: function y(d) {
              return Number(d.value);
            }
          }
        };
        if (vm.chartOptions && vm.chartSubtype == 'AREA') {
          var chartoptions = {
            chart: {
              xAxis: {},
              yAxis: {}
            }
          };

          if (vm.chartOptions.xAxis) {
            if (vm.chartOptions.xAxis.length == 1) {
              if (vm.chartOptions.xAxis[0].axisLabel) {
                if (vm.chartOptions.xAxis[0].showAxisLabel) {
                  chartoptions.chart.xAxis = {
                    axisLabel: vm.chartOptions.xAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.xAxis[0].bound) {
                vm.xmin = vm.chartOptions.xAxis[0].bound.minValue;
                vm.xmax = vm.chartOptions.xAxis[0].bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartOptions.xAxis[0].unit) {
                if (vm.chartOptions.xAxis[0].unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.xAxis[0].unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.xAxis[0].unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartOptions.yAxis) {
            if (vm.chartOptions.yAxis.length == 1) {
              if (vm.chartOptions.yAxis[0].axisLabel) {
                if (vm.chartOptions.yAxis[0].showAxisLabel) {
                  chartoptions.chart.yAxis = {
                    axisLabel: vm.chartOptions.yAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.yAxis[0].bound) {
                vm.ymin = vm.chartOptions.yAxis[0].bound.minValue;
                vm.ymax = vm.chartOptions.yAxis[0].bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartOptions.yAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.yAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartOptions.yAxis[0].unit) {
                if (vm.chartOptions.yAxis[0].unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.yAxis[0].unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.yAxis[0].unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }
          /*if(vm.chartOptions.showXaxis){
           if(vm.chartOptions.xAxis){
           if(vm.chartOptions.xAxis.tickMarkLabelPosition=='NEXT'){
           vm.showXLabel=true;
           }
           if(vm.chartOptions.xAxis.showAxisLine){
           vm.showXLine=true;
           }
           }
           }
           if(vm.chartOptions.showYaxis){
           if(vm.chartOptions.yAxis){
           if(vm.chartOptions.yAxis.tickMarkLabelPosition=='NEXT'){
           vm.showYLabel=true;
           }
           if(vm.chartOptions.yAxis.showAxisLine){
           vm.showYLine=true;
           }
           }
           }*/
          vm.xAxis = vm.chartOptions.xAxis[0];
          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
        //Temporary fix for Dahboard chart- To be removed completely
        else if (vm.chartOptions && vm.chartSubtype == 'DASHBOARD-AREA') {
            angular.merge(vm.options, vm.chartOptions);

            var height = vm.chartOptions.customHeight || 0;
            if (height > 300) {
              vm.options.chart.height = 380 + vm.exHeight;
              vm.options.chart.legend.margin = {
                top: 170 + vm.exHeight,
                bottom: -150
              };
            } else if (height > 0) {
              vm.options.chart.height = 180;
              vm.options.chart.legend.margin = {
                top: 80,
                bottom: -75
              };
            }
          }

        //vm.options = angular.copy(vm.options);
      };
      vm.updateOptions();
      vm.chartType = "lineChart";
    }
  }
})();

(function () {

  'use strict';
  /**
   *
   * @module nlsn.chart.components.scatterChart
   * @name nlsn-pie-chart
   * @restrict E
   * @description
   * nlsn pie chart
   *
   * * @usage
   <nlsn-scatter-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis tool-tip-label-one= label one for tooltip  tool-tip-label-two=label two for tooltip >
   </nlsn-scatter-chart>
   @example
   <nlsn-scatter-chart chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel' tool-tip-label-one="labelOne" tool-tip-label-two="labelTwo"></nlsn-scatter-chart>
   </nlsn-scatter-chart>
    <!-- chart-options-->
   Additional options for chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
    <!--label one for tooltip-->
   Label one for tooltip.
    <!--label two for tooltip-->
   Label two for tooltip.
   **/

  angular.module('nlsn.chart.components.scatterChart', ['nlsn.chart.components.util.colors']).component('nlsnScatterChart', {
    controller: ["$scope", "$nlsnColors", nlsnScatterChartCtrl],
    controllerAs: 'nlsnScatterChart',
    bindings: {
      chartSubtype: "@",
      chartOptions: "<",
      data: "=",
      height: "=",
      xaxislabel: "=",
      yaxislabel: "=",
      toolTipLabelOne: "=",
      toolTipLabelTwo: "=",
      parameterData: "=",
      livechart: "=",
      chartId: "=",
      charttitle: "=",
      chartconfigs: "=",
      charttype: "=",
      metadata: "<"
    },
    template: '<nlsn-chart-core metadata="nlsnScatterChart.metadata" \n                                  tooltip="nlsnScatterChart.tooltip" \n                                  id="card-{{nlsnScatterChart.chartId}}" \n                                  axisoptions="nlsnScatterChart.xAxis" \n                                  chartconfigs="chartconfigs" \n                                  opt="nlsnScatterChart.options" \n                                  data="nlsnScatterChart.data" \n                                  type="{{nlsnScatterChart.chartType}}" \n                                  height="nlsnScatterChart.height" \n                                  xaxislabel="nlsnScatterChart.xaxislabel" \n                                  yaxislabel="nlsnScatterChart.yaxislabel" \n                                  chart-options="nlsnScatterChart.chartOptions"\n                                  charttitle="nlsnScatterChart.charttitle">\n                  </nlsn-chart-core>'
  });

  /** @ngInject */
  function nlsnScatterChartCtrl($scope, $nlsnColors) {
    var vm = this;
    vm.exHeight = 0;
    if (!vm.parameterData) {
      vm.exHeight = 25;
    }

    vm.createCrossover = function (chart) {
      if (chart) {
        d3.select('#horLine').remove();
        d3.select('#verLine').remove();
        d3.select('#quad1').remove();
        d3.select('#quad2').remove();
        d3.select('#quad3').remove();
        d3.select('#quad4').remove();

        var horLine = d3.select('.nv-scatterChart').select('.nv-y').append('g').attr('id', 'horLine');
        horLine.selectAll('line').data(vm.xgrid).enter().append('line').attr({
          x1: function x1(d) {
            return chart.xAxis.scale()(vm.xmin);
          },
          y1: function y1(d) {
            return chart.yAxis.scale()(d);
          },
          x2: function x2(d) {
            return chart.xAxis.scale()(vm.xmax);
          },
          y2: function y2(d) {
            return chart.yAxis.scale()(d);
          }
        }).style("stroke", "#000000");
        var verLine = d3.select('.nv-scatterChart').select('.nv-y').append('g').attr('id', 'verLine');
        verLine.selectAll('line').data(vm.ygrid).enter().append('line').attr({
          x1: function x1(d) {
            return chart.xAxis.scale()(d);
          },
          y1: function y1(d) {
            return chart.yAxis.scale()(vm.ymin);
          },
          x2: function x2(d) {
            return chart.xAxis.scale()(d);
          },
          y2: function y2(d) {
            return chart.yAxis.scale()(vm.ymax);
          }
        }).style("stroke", "#000000");
      }
    };
    vm.labelGenerator = function (chart) {

      angular.forEach(vm.data, function (val, key) {
        d3.select("#labelWrap" + key).remove();
        var pointlabel = d3.select(".nv-scatterChart").select(".nv-y").append('g').attr("id", "labelWrap" + key);

        pointlabel.selectAll('text').data(val.values).enter().append('text').text(function (d) {
          return d.label;
        }).attr({
          x: function x(d) {
            return chart.xAxis.scale()(d.xvalue);
          },
          y: function y(d) {
            return chart.yAxis.scale()(d.yvalue);
          },
          dx: "2em",
          dy: "0.5em"
        });
      });
    };
    vm.createQuadrant = function (chart, obj) {
      d3.select('#quad1').remove();
      d3.select('#quad2').remove();
      d3.select('#quad3').remove();
      d3.select('#quad4').remove();
      var quad = d3.select('.nv-scatterChart').select('.nv-y');

      quad.append('text').attr({
        id: 'quad1',
        x: function x() {
          return chart.xAxis.scale()(vm.xmin);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymax);
        },
        dy: '0.5em',
        dx: '0.5em'
      }).text(obj.quadrant1).style({
        'font-size': '1em',
        'fill': '#000000'
      });
      quad.append('text').attr({
        id: 'quad2',
        x: function x() {
          return chart.xAxis.scale()(vm.xmax);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymax);
        },
        'text-anchor': 'end',
        dy: '0.5em',
        dx: '-0.5em'
      }).text(obj.quadrant2).style({
        'font-size': '1em',
        'fill': '#000000'
      });
      quad.append('text').attr({
        id: 'quad3',
        x: function x() {
          return chart.xAxis.scale()(vm.xmax);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymin);
        },
        'text-anchor': 'end',
        dy: '-0.5em',
        dx: '-0.5em'
      }).text(obj.quadrant3).style({
        'font-size': '1em',
        'fill': '#000000'
      });
      quad.append('text').attr({
        id: 'quad4',
        x: function x() {
          return chart.xAxis.scale()(vm.xmin);
        },
        y: function y() {
          return chart.yAxis.scale()(vm.ymin);
        },
        dy: '-0.5em',
        dx: '0.5em'
      }).text(obj.quadrant4).style({
        'font-size': '1em',
        'fill': '#000000'
      });
    };
    vm.colorBubbles = function (chart, colorPallete) {
      var points = d3.selectAll(".nv-point")[0];
      angular.forEach(points, function (val, key) {
        d3.select(val).attr("fill", colorPallete[key]).attr("stroke", colorPallete[key]);
      });
    };
    if ('SIMPLE' == vm.charttype) {

      if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.series[0].value) {
        // manipulate data
        var existingData = angular.copy(vm.data);
        var newData = [];
        var uniqueNames = [];
        for (var i = 0; i < existingData.length; i++) {
          var currentSeriesName = existingData[i][vm.chartconfigs[0].dataDefinition.series[0].value];
          if (uniqueNames.indexOf(currentSeriesName) === -1) {
            var recs = existingData.filter(function (rec) {
              return rec[vm.chartconfigs[0].dataDefinition.series[0].value] == currentSeriesName;
            });
            var currConfig = vm.chartconfigs[0].seriesConfigs[currentSeriesName];
            newData.push({
              "key": currentSeriesName,
              "values": recs,
              "color": currConfig && currConfig.color ? currConfig.color : vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]
            });
            uniqueNames.push(currentSeriesName);
          }
        }
        vm.data = newData;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d) {
              return vm.chartconfigs && vm.chartconfigs[0].dataDefinition.xaxis[0].value ? Number(d[vm.chartconfigs[0].dataDefinition.xaxis[0].value]) : Number(d.xvalue);
            },
            y: function y(d) {
              return vm.chartconfigs && vm.chartconfigs[0].dataDefinition.yaxis.value ? Number(d[vm.chartconfigs[0].dataDefinition.yaxis.value]) : Number(d.yvalue);
            },
            pointSize: function pointSize(d) {
              if (vm.chartconfigs[0].dataDefinition.size) {
                return d[vm.chartconfigs[0].dataDefinition.size.value];
              }
              return d.size || 1;
            },
            xAxis: {
              axisLabel: vm.chartconfigs[0].axisConfig.xAxis.showAxisLabel ? vm.chartconfigs[0].axisConfig.xAxis.axisLabel : "",
              showMaxMin: vm.chartconfigs[0].axisConfig.xAxis.showMaxMin ? vm.chartconfigs[0].axisConfig.xAxis.showMaxMin : false
            },
            yAxis: {
              axisLabel: vm.chartconfigs[0].axisConfig.yAxis.showAxisLabel ? vm.chartconfigs[0].axisConfig.yAxis.axisLabel : "",
              showMaxMin: vm.chartconfigs[0].axisConfig.yAxis.showMaxMin ? vm.chartconfigs[0].axisConfig.yAxis.showMaxMin : false
            },
            pointRange: [500, 1600]

          }
        };

        /* Tooltip */
        if (vm.chartconfigs[0] && vm.chartconfigs[0].tooltip) {
          vm.tooltip = vm.chartconfigs[0].tooltip;
        }
        if (vm.chartOptions) {

          if (vm.chartconfigs[0].axisConfig.xAxis) {
            vm.xAxis = vm.chartconfigs[0].axisConfig.xAxis;
            /*changed scatter***/
            if (vm.chartconfigs[0].axisConfig.xAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.xAxis.bound) {
                vm.xmin = vm.chartconfigs[0].axisConfig.xAxis.bound.minValue;
                vm.xmax = vm.chartconfigs[0].axisConfig.xAxis.bound.maxValue;
                vm.options.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.displayFormat) {
                var displayFormat = vm.chartconfigs[0].axisConfig.xAxis.displayFormat.replace(/"/gi, '');
                vm.options.chart.xAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.xAxis.unit.major) {
                  vm.options.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartconfigs[0].axisConfig.yAxis) {
            if (vm.chartconfigs[0].axisConfig.yAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.yAxis.bound) {
                vm.ymin = vm.chartconfigs[0].axisConfig.yAxis.bound.minValue;
                vm.ymax = vm.chartconfigs[0].axisConfig.yAxis.bound.maxValue;
                vm.options.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat) {
                var displayFormat = vm.chartconfigs[0].axisConfig.yAxis.displayFormat.replace(/"/gi, '');
                vm.options.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.yAxis.unit.major) {
                  vm.options.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }
          vm.options.chart.callback = function (chart) {
            vm.chart = chart;
            if (vm.chartconfigs[0].axisConfig.xAxis && vm.chartconfigs[0].axisConfig.yAxis) {
              vm.ygrid = [vm.chartconfigs[0].axisConfig.xAxis.crossAt];
              vm.xgrid = [vm.chartconfigs[0].axisConfig.yAxis.crossAt];
            }
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
            if (vm.chartOptions.colorPalette) {
              vm.colorBubbles(vm.chart, vm.chartOptions.colorPalette);
            }
            if (!vm.chartconfigs[0].axisConfig.yAxis.showMajorGridLines) {
              d3.select('.nv-scatterChart').append("style").text(".nv-y .tick line { display: none; }");
            }
            if (!vm.chartconfigs[0].axisConfig.xAxis.showMajorGridLines) {
              d3.select('.nv-scatterChart').append("style").text(".nv-x .tick line { display: none; }");
            }
          };
          window.dispatchEvent(new Event('resize'));
        }
        nv.utils.windowResize(function () {
          if (vm.chart) {
            vm.chart.update();
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
          }
        });
      };
      vm.updateOptions();
      vm.chartType = "scatterChart";
    } else {
      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function x(d) {
              return Number(d.xvalue);
            },
            y: function y(d) {
              return Number(d.yvalue);
            },
            pointSize: function pointSize(d) {
              return Number(d.size);
            },
            pointRange: [500, 1600]

          }
        };
        if (vm.chartOptions) {

          var chartoptions = {
            chart: {
              xAxis: {},
              yAxis: {},
              legend: {}
            }
          };

          if (vm.chartOptions.legend) {
            if (vm.chartOptions.legend.align == 'BOTTOM') {
              chartoptions.chart.legendPosition = "bottom";
            }
            if (vm.chartOptions.legend.justified) {
              if (vm.chartOptions.legend.justified == 'LEFT') {
                chartoptions.chart.legend.rightAlign = false;
              } else {
                chartoptions.chart.legend.rightAlign = true;
              }
            }
            if (vm.chartOptions.legend.margin) {
              chartoptions.chart.legend.margin = vm.chartOptions.legend.margin;
            }
          }

          if (vm.chartOptions.xAxis) {
            if (vm.chartOptions.xAxis.length == 1) {
              if (vm.chartOptions.xAxis[0].axisLabel) {
                if (vm.chartOptions.xAxis[0].showAxisLabel) {
                  chartoptions.chart.xAxis = {
                    axisLabel: vm.chartOptions.xAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.xAxis[0].bound) {
                vm.xmin = vm.chartOptions.xAxis[0].bound.minValue;
                vm.xmax = vm.chartOptions.xAxis[0].bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartOptions.xAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.xAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.xAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              } else {
                chartoptions.chart.xAxis.tickFormat = function (d) {
                  return d;
                };
              }
              if (vm.chartOptions.xAxis[0].unit) {
                if (vm.chartOptions.xAxis[0].unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.xAxis[0].unit.major;
                    } while (i < vm.xmax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.xAxis[0].unit.major;
                    } while (i > vm.xmin);
                    return arr;
                  };
                }
              }
            }
          }

          if (vm.chartOptions.yAxis) {
            if (vm.chartOptions.yAxis.length == 1) {
              if (vm.chartOptions.yAxis[0].axisLabel) {
                if (vm.chartOptions.yAxis[0].showAxisLabel) {
                  chartoptions.chart.yAxis = {
                    axisLabel: vm.chartOptions.yAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.yAxis[0].bound) {
                vm.ymin = vm.chartOptions.yAxis[0].bound.minValue;
                vm.ymax = vm.chartOptions.yAxis[0].bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartOptions.yAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.yAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              } else {
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d;
                };
              }
              if (vm.chartOptions.yAxis[0].unit) {
                if (vm.chartOptions.yAxis[0].unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.yAxis[0].unit.major;
                    } while (i < vm.ymax);
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.yAxis[0].unit.major;
                    } while (i > vm.ymin);
                    return arr;
                  };
                }
              }
            }
          }
          if (vm.chartOptions.xAxis.length == 1 && vm.chartOptions.yAxis.length == 1) {
            vm.ygrid = [vm.chartOptions.xAxis[0].crossAt];
            vm.xgrid = [vm.chartOptions.yAxis[0].crossAt];
            chartoptions.chart.callback = function (chart) {
              vm.chart = chart;
              vm.createCrossover(vm.chart);
              if (vm.chartOptions.quadrant) {
                vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
              }
              if (vm.chartOptions.showValues) {
                vm.labelGenerator(vm.chart);
              }
              if (vm.chartOptions.colorPalette) {
                vm.colorBubbles(vm.chart, vm.chartOptions.colorPalette);
              }
              if (!vm.chartOptions.yAxis[0].showMajorGridLines) {
                d3.select('.nv-scatterChart').append("style").text(".nv-y .tick line { display: none; }");
              }
              if (!vm.chartOptions.xAxis[0].showMajorGridLines) {
                d3.select('.nv-scatterChart').append("style").text(".nv-x .tick line { display: none; }");
              }
            };
          }
          vm.xAxis = vm.chartOptions.xAxis[0];
          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
        nv.utils.windowResize(function () {
          if (vm.chart) {
            vm.chart.update();
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
          }
        });
      };
      vm.updateOptions();
      vm.chartType = "scatterChart";
    }
    this.$onChanges = function (changesObj) {
      console.log("in here");
      console.log(vm);
      if (changesObj.hasOwnProperty("chartOptions")) {
        vm.updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions;
    }, function () {
      vm.updateOptions();
    });
  }
})();

(function () {
  'use strict';
  /**
   *
   * @module nlsn.chart.components.multiChart
   * @name nlsn-multi-chart
   * @restrict E
   * @description
   * nlsn multi chart
   *
   * * @usage
   <nlsn-multi-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-multi-chart>
   @example
   <nlsn-multi-chart  chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-multi-chart>
    <!-- chart-options-->
   Additional options for chart.
    <!-- data -->
   Data to display on charts.
    <!-- height-->
   Height of the chart.
    <!-- xaxislabel -->
   Label on X-axis.
    <!-- yaxislabel-->
   Label on Y-axis.
   **/

  angular.module('nlsn.chart.components.multiChart', ['nlsn.chart.components.util.colors']).component('nlsnMultiChart', {
    controller: ["$scope", "$nlsnColors", "$timeout", nlsnMultiChartCtrl],
    controllerAs: 'nlsnMultiChart',
    bindings: {
      chartOptions: "<",
      chartconfigs: "<",
      data: "=",
      height: "=",
      xaxislabel: "=",
      y1axislabel: "=",
      y2axislabel: "=",
      parameterData: "=",
      extended: "=",
      chartSubtype: "=",
      charttype: "=",
      metadata: "<",
      charttitle: '='
    },
    template: '<nlsn-chart-core axisoptions="nlsnMultiChart.xAxis" \n                                  tooltip="nlsnMultiChart.tooltips" \n                                  chart-options="nlsnMultiChart.chartOptions" \n                                  opt="nlsnMultiChart.options" \n                                  data="nlsnMultiChart.data" \n                                  metadata="nlsnMultiChart.metadata" \n                                  charttitle="nlsnMultiChart.charttitle" \n                                  type="{{nlsnMultiChart.chartType}}" \n                                  height="nlsnMultiChart.height" \n                                  xaxislabel="nlsnMultiChart.xaxislabel" \n                                  yaxislabel="nlsnMultiChart.yaxislabel">\n                </nlsn-chart-core>'
  });

  /** @ngInject */
  function nlsnMultiChartCtrl($scope, $nlsnColors, $timeout) {
    var vm = this;
    var existingData = angular.copy(vm.data);
    var newData = [];

    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
            dy = 0,
            start = 0,
            limit = width,
            words = [];
        if (text.text()) {
          // for(var i=0;i<=text.text().length/limit;i++){
          // start = i * limit;
          // words.push(text.text().substr(start, limit));
          // }
          // words = words.reverse();
          var prevItem = '';
          text.text().split(/\s+/).map(function (item, index, array) {
            return item + " ";
          }).forEach(function (item) {
            if ((item + prevItem).length <= limit) {
              prevItem = prevItem + item;
            } else {
              words.push(prevItem);
              prevItem = item;
            }
          });
          words.push(prevItem);
          words.reverse();
          var word,
              line = [],
              lineNumber = 0,
              lineHeight = 1,
              // ems
          y = text.attr("y") - (words.length + 1) * 4,
              dy = parseFloat(text.attr("dy")) != "NaN" ? parseFloat(text.attr("dy")) : 0,
              tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
          var cnt = 0;
          while (word = words.pop()) {

            if (cnt == 4) break;
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y + 10).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
            cnt++;
          }
        }
      });
    }

    vm.labelWrapper = function () {

      $timeout(function () {
        var chart = d3.selectAll('.multiChart .nv-x .nv-axis');
        chart.selectAll('text').call(wrap, 15);
      }, 500);
    };
    vm.originalType = angular.copy(vm.charttype);
    var chartoptions = {
      chart: {
        xAxis: {},
        yAxis1: {},
        yAxis2: {},
        legend: {},
        bars1: {},
        bars2: {}
      }
    };
    if ('SIMPLE' == vm.charttype) {
      if (vm.chartconfigs) {
        // no yaxis present use series as y
        var existingData = angular.copy(vm.data);
        var newData = [];
        vm.tooltips = [];
        angular.forEach(vm.chartconfigs, function (config) {
          /*Tooltips*/
          if (config.tooltip) {
            if (config.tooltip.length == 1) {
              vm.tooltips.push(config.tooltip[0]);
            } else {
              angular.forEach(config.tooltip, function (tooltip) {
                vm.tooltips.push(tooltip);
              });
            }
          }
          /*Tooltips*/
          angular.forEach(config.dataDefinition.series, function (seriesItem) {
            var currSeriesItem = seriesItem.value;
            var displayName = currSeriesItem;
            var uniqueNames = [];
            if (vm.metadata && vm.metadata[currSeriesItem]) {
              displayName = vm.metadata[currSeriesItem].title;
            }
            if (!config.dataDefinition.yaxis) {
              var filterData = angular.copy(existingData);
              var records = filterData.filter(function (rec) {
                return rec[currSeriesItem] != null;
              });
              if (!config.dataDefinition.yAxis) {
                angular.forEach(filterData, function (rec) {
                  rec.seriesDisplay = currSeriesItem;
                });
              }
              var obj = {
                "key": displayName,
                "values": records,
                "type": ("MULTIBAR_VERTICAL" || "STACKED_VERTICAL") == config.chartType ? "bar" : "line",
                "stacked": "STACKED_VERTICAL" == config.chartType,
                "color": config.seriesConfigs && config.seriesConfigs[currSeriesItem] && config.seriesConfigs[currSeriesItem].color ? config.seriesConfigs[currSeriesItem].color : config.colorPalette ? config.colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]
              };
              if (config.plotOnSecondaryAxis) {
                obj.yAxis = 2;
                vm.yAxis2 = config.axisConfig.yAxis;
                if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars2.stacked = true;
              } else {
                obj.yAxis = 1;
                vm.xAxis = config.axisConfig.xAxis;
                vm.yAxis1 = config.axisConfig.yAxis;
                if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars1.stacked = true;
              }
              newData.push(obj);
            } else {
              for (var i = 0; i < existingData.length; i++) {
                var currentSeriesName = existingData[i][config.dataDefinition.series[0].value];
                if (uniqueNames.indexOf(currentSeriesName) === -1) {
                  var recs = existingData.filter(function (rec) {
                    return rec[currSeriesItem] == currentSeriesName;
                  });
                  var obj = {
                    "key": currentSeriesName,
                    "values": recs,
                    "stacked": "STACKED_VERTICAL" == config.chartType,
                    "color": config.seriesConfigs && config.seriesConfigs[currSeriesItem] && config.seriesConfigs[currSeriesItem].color ? config.seriesConfigs[currSeriesItem].color : config.colorPalette ? config.colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]

                  };
                  if (config.plotOnSecondaryAxis) {
                    obj.yAxis = 2;
                    vm.yAxis2 = config.axisConfig.yAxis;
                    if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars2.stacked = true;
                  } else {
                    obj.yAxis = 1;
                    vm.xAxis = config.axisConfig.xAxis;
                    vm.yAxis1 = config.axisConfig.yAxis;
                    if ("STACKED_VERTICAL" == config.chartType) chartoptions.chart.bars1.stacked = true;
                  }
                  newData.push(obj);
                  uniqueNames.push(currentSeriesName);
                }
              }
            }
          });
        });

        vm.data = newData;
        console.log(JSON.stringify(vm.data));
      }
    }
    if (vm.data) {
      angular.forEach(vm.data, function (value, key) {
        if (value.chartType == 'MULTIBAR_VERTICAL' || value.chartType == 'STACKED_VERTICAL') {
          value.type = 'bar';
        }
        if (value.chartType == 'LINE') {
          value.type = 'line';
        }
      });
    }
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("chartOptions")) {
        updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions;
    }, function () {
      updateOptions();
    });

    updateOptions();
    vm.chartType = "multiChart";

    function updateOptions() {

      vm.options = {
        chart: {
          x: function x(d, i, series) {
            if (series == undefined) series = d.series;
            if (vm.chartconfigs && vm.chartconfigs[series].dataDefinition) {
              return Number(d[vm.chartconfigs[series].dataDefinition.xaxis[0].value]);
            }
            return Number(d.id);
          },
          y: function y(d, i, series) {
            if (series == undefined) series = d.series;
            if (vm.chartconfigs && vm.chartconfigs[series].dataDefinition && vm.chartconfigs[series].dataDefinition) {
              var def = vm.chartconfigs[series].dataDefinition;
              if (def.yaxis) {
                return Number(d[vm.chartconfigs[series].dataDefinition.yaxis.value]);
              } else {
                var yCol = d['seriesDisplay'];
                return Number(d[yCol]);
              }
            }
            return Number(d.value);
          },
          xAxis: {
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[0].axisConfig.xAxis.axisLabel : vm.xaxislabel,
            axisLabelDistance: 0,
            showMaxMin: false,
            tickFormat: function tickFormat(d) {
              if (!vm.chartOptions.showXaxis) return;else if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition) {
                var retValue = "";
                angular.forEach(vm.data[0].values, function (val, key) {
                  if (d == Number(val[vm.chartconfigs[0].dataDefinition.xaxis[0].value])) {
                    var dispValue = vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue ? vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue : vm.chartconfigs[0].dataDefinition.xaxis[0].value;
                    if (vm.xAxis.displayFormat === "Date") {
                      var date = new Date(val[dispValue]);
                      var locale = "en-us";
                      retValue = "WE" + ' ' + date.getDate() + '-' + date.toLocaleString(locale, { month: "short" }) + '-' + date.getFullYear();
                    } else {
                      retValue = val[dispValue];
                    }
                  }
                });
                if (retValue != "") {
                  return retValue;
                }
              }
              return d;
            }

          },
          legendRightAxisHint: '',
          yAxis1: {
            tickFormat: function tickFormat(d) {
              if (vm.yAxis1 && vm.yAxis1.displayFormat) {
                if (vm.yAxis1.displayFormat.indexOf(".3s") !== -1 || vm.yAxis1.displayFormat.indexOf("%") !== -1) {
                  return d3.format(vm.yAxis1.displayFormat)(d);
                } else {
                  var displayFormat = vm.yAxis1.displayFormat.replace(/"/gi, '');
                  return d.numberFormat(displayFormat);
                }
              }
              return d3.format(',.1f')(d);
            },
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[0].axisConfig.yAxis.axisLabel : vm.y1axislabel

          },
          yAxis2: {
            tickFormat: function tickFormat(d) {
              if (vm.yAxis2 && vm.yAxis2.displayFormat) {                  
                if (vm.yAxis2.displayFormat.indexOf(".3s") !== -1 || vm.yAxis2.displayFormat.indexOf("%") !== -1) {
                  return d3.format(vm.yAxis2.displayFormat)(d);
                } else {
                  var displayFormat = vm.yAxis2.displayFormat.replace(/"/gi, '');
                  return d.numberFormat(displayFormat);
                }
              }
              return d3.format(',.1f')(d);
            },
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[1].axisConfig.yAxis.axisLabel : vm.y1axislabel
          },
          callback: function callback() {
            vm.labelWrapper();
          }
        }
      };
      if (vm.chartOptions) {

        if (vm.chartOptions.showControls == false || vm.chartOptions.showControls == true) {
          chartoptions.chart.showControls = vm.chartOptions.showControls;
        }
        if (vm.chartOptions.showLegend == false || vm.chartOptions.showLegend == true) {
          chartoptions.chart.showLegend = vm.chartOptions.showLegend;
        }
        if (vm.chartOptions.showTitle == false || vm.chartOptions.showTitle == true) {
          chartoptions.chart.showTitle = vm.chartOptions.showTitle;
        }
        if (vm.chartOptions.showValues == false || vm.chartOptions.showValues == true) {
          chartoptions.chart.showValues = vm.chartOptions.showValues;
        }

        if (vm.chartOptions.margin) {
          chartoptions.chart.margin = vm.chartOptions.margin;
        }
        if (vm.chartOptions.legend) {
          if (vm.chartOptions.legend.justified) {
            if (vm.chartOptions.legend.justified == 'LEFT') {
              chartoptions.chart.legend.rightAlign = false;
            } else {
              chartoptions.chart.legend.rightAlign = true;
            }
          }
          if (vm.chartOptions.legend.margin) {
            chartoptions.chart.legend.margin = vm.chartOptions.legend.margin;
          }
        }

        angular.forEach(vm.chartconfigs, function (config, k1) {
          angular.forEach(config.series, function (val, k2) {
            angular.forEach(vm.data, function (data, k3) {
              if (val == data.key) {
                if (config.chartType == "MULTIBAR_VERTICAL" || config.chartType == "STACKED_VERTICAL") {
                  data.type = "bar";
                } else if (config.chartType == "LINE") {
                  data.type = "line";
                }
                if (config.plotOnSecondaryAxis) {
                  data.yAxis = 2;
                  vm.yAxis2 = config.axisConfig.yAxis;
                  if (config.chartType == "STACKED_VERTICAL") {
                    chartoptions.chart.bars2.stacked = true;
                  }
                  if (vm.yAxis2.bound) {
                    vm.ymin = vm.yAxis2.bound.minValue;
                    vm.ymax = vm.yAxis2.bound.maxValue;
                    chartoptions.chart.yDomain2 = [vm.ymin, vm.ymax];
                  }
                } else {
                  data.yAxis = 1;
                  vm.xAxis = config.axisConfig.xAxis;
                  vm.yAxis1 = config.axisConfig.yAxis;
                  if (config.chartType == "STACKED_VERTICAL") {
                    chartoptions.chart.bars1.stacked = true;
                  }
                  if (vm.yAxis1.bound) {
                    vm.ymin = vm.yAxis1.bound.minValue;
                    vm.ymax = vm.yAxis1.bound.maxValue;
                    chartoptions.chart.yDomain1 = [vm.ymin, vm.ymax];
                  }
                }
              }
            });
          });
        });
        if (vm.yAxis2) {
          chartoptions.chart.yAxis2.axisLabel = vm.yAxis2.axisLabel;
          if (vm.yAxis2.bound) {
            vm.ymin = vm.yAxis2.bound.minValue;
            vm.ymax = vm.yAxis2.bound.maxValue;
            chartoptions.chart.yDomain2 = [vm.ymin, vm.ymax];
          }
          if (vm.yAxis2.axisLabelDistance) {
            chartoptions.chart.yAxis2.axisLabelDistance = vm.yAxis2.axisLabelDistance;
          }
        }

        chartoptions.chart.xAxis.axisLabel = vm.xAxis.axisLabel;
        if (vm.yAxis1) {
          chartoptions.chart.yAxis1.axisLabel = vm.yAxis1.axisLabel;
          if (vm.yAxis1.bound) {
            vm.ymin = vm.yAxis1.bound.minValue;
            vm.ymax = vm.yAxis1.bound.maxValue;
            chartoptions.chart.yDomain1 = [vm.ymin, vm.ymax];
          }
          if (vm.yAxis1.axisLabelDistance) {
            chartoptions.chart.yAxis1.axisLabelDistance = vm.yAxis1.axisLabelDistance;
          }
        }
        angular.merge(vm.options, chartoptions);
        window.dispatchEvent(new Event('resize'));
      }
      nv.utils.windowResize(function () {
        vm.labelWrapper();
      });
    }
  }
})();

(function () {

  angular.module('nlsn.chart.components', ['nlsn.chart.components.helper', 'nlsn.chart.components.chartCore', 'nlsn.chart.components.dpMultiBarChart', 'nlsn.chart.components.dpMultiBarHorizontalChart', 'nlsn.chart.components.dpMultiChart', 'nlsn.chart.components.dpWaterfallChart', 'nlsn.chart.components.lineChart', 'nlsn.chart.components.multiChart', 'nlsn.chart.components.scatterChart', 'nlsn.chart.components.util.colors']);
})();
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NestingModule = function (_nv$Module) {
  _inherits(NestingModule, _nv$Module);

  // AVAILABLE OPTIONS
  // barsInGroup: number
  // groupName: function(nOfGroup: number)
  // groupLabel: {
  //    height: number
  //    borderWhitespaceYOffset: number
  //    text: {
  //      width: number
  //      height: number
  //      fontSize: number
  //      nMaxLineCount: number
  //    }
  //    colors: {
  //      border: string
  //      text: string
  //    }
  // }
  function NestingModule(instance, options) {
    _classCallCheck(this, NestingModule);

    return _possibleConstructorReturn(this, (NestingModule.__proto__ || Object.getPrototypeOf(NestingModule)).call(this, {
      name: 'nesting',
      supportedCharts: ['multiBarChartExt', 'multiBarHorizontalChartExt']
    }, instance, options, {
      insertEmptyBars: true,
      tickLabelsOutside: false,
      groupId: function groupId(n) {
        return n;
      },
      groupName: function groupName(n) {
        return n;
      },
      relativeAdjustmentGap: 5,
      groupLabel: {
        height: 55,
        borderWhitespaceYOffset: 20,
        minSideGap: 3,
        text: {
          width: 120,
          height: 50,
          fontSize: 13,
          nMaxLineCount: 1
        },
        colors: {
          border: '#CCCCCC',
          text: '#999999'
        }
      }
    }));
  }

  _createClass(NestingModule, [{
    key: '__setOptionsToVerticalChart',
    value: function __setOptionsToVerticalChart() {
      //margin
      this.options.minBottomMargin = this.options.groupLabel.height + this.options.groupLabel.text.height / 2;
      //reduceXTicks
      this.instance.extendedChart.reduceXTicks(false);
    }
  }, {
    key: '__setOptionsToHorizontalChart',
    value: function __setOptionsToHorizontalChart() {

      //margin
      this.options.minLeftMargin = this.options.groupLabel.height + this.options.groupLabel.text.height / 2;

      // //xAxis.axisLabelDistance
      // const wantedXaxisTickPadding = this.instance.extendedChart.xAxis.tickPadding()
      // const newXaxisTickPadding = originalLeftMargin + wantedXaxisTickPadding - newLeftMargin
      // this.instance.extendedChart.xAxis.tickPadding(newXaxisTickPadding)
    }
  }, {
    key: '_setOptionsToChart',
    value: function _setOptionsToChart() {
      var _this2 = this;

      //x
      var xds = {};
      var xOriginal = this.instance.extendedChart.x();
      this.instance.extendedChart.x(function (d, iSeriesEntry) {
        iSeriesEntry = iSeriesEntry != null ? iSeriesEntry : d.iSeriesEntry;
        var result = void 0;
        if (d.isEmptyBarForNesting) {
          var xField = _this2.instance.extendedChart.xField();
          result = d[xField];
        } else {
          var originalResult = xOriginal(d);
          var groupN = _this2.__calcGroupN(iSeriesEntry);
          result = originalResult + ' ' + _this2.options.groupId(groupN) + '_' + iSeriesEntry;
          xds[result] = d;
          xds[result].iSeriesEntry = iSeriesEntry;
        }
        return result;
      });
      //xAxis.tickFormat
      var data = this.instance.selection.datum();
      var xAxisTickFormatOriginal = this.instance.extendedChart.xAxis.tickFormat();
      this.instance.extendedChart.xAxis.tickFormat(function (str) {
        var xd = xds[str];
        if (xd != null) {
          str = xOriginal(xd);
          var originalResult = xAxisTickFormatOriginal(str);
          if (_this2.options.insertEmptyBars && xd.iSeriesEntry % (_this2.options.barsInGroup + 1) === _this2.options.barsInGroup) {
            return "";
          } else {
            return originalResult;
          }
        } else {
          return "";
        }
      });

      switch (this.instance.config.name) {
        case 'multiBarChartExt':
          this.__setOptionsToVerticalChart();
          break;
        case 'multiBarHorizontalChartExt':
          this.__setOptionsToHorizontalChart();
          break;
      }
    }
  }, {
    key: '__calcGroupN',
    value: function __calcGroupN(nSerieEntry) {
      return Math.floor(nSerieEntry / (this.options.barsInGroup + 1));
    }

    // __makeUniqueXField(serieEntries, nSerieEntry) {
    //   const xField = this.instance.extendedChart.xField()
    //   const groupN = Math.floor(nSerieEntry / this.options.barsInGroup)
    //   const groupId = this.options.groupId(groupN)
    //   serieEntries[nSerieEntry][xField] = `${serieEntries[nSerieEntry][xField]} ${groupId}`
    // }

    // __getDisplayedX(serieEntry) {
    //   const xDisplayField = this.instance.extendedChart.xDisplayField()
    //   return serieEntry[xDisplayField]
    // }

  }, {
    key: '_prepareData',
    value: function _prepareData() {
      var data = this.instance.selection.datum();

      if (this.options.insertEmptyBars && !data.__isModified) {

        var xField = this.instance.extendedChart.xField();
        var yField = this.instance.extendedChart.yField();

        // //set unique x-axis values
        // for(let i = 0; i < data.length; i++) {
        //   for(let j = 0; j < data[i].values.length; j++) {
        //     this.__makeUniqueXField(data[i].values, j)
        //   }
        // }

        //inserting 'invisible' bars to split into groups
        var fnGroups = data[0].values.length / this.options.barsInGroup;
        var nGroups = Math.floor(fnGroups);
        var emptyColumnsToInsertCount = nGroups;
        if (fnGroups == nGroups) {
          emptyColumnsToInsertCount = nGroups - 1;
        }
        for (var i = 0; i < emptyColumnsToInsertCount; i++) {
          var positionToInsert = (i + 1) * this.options.barsInGroup + i;

          for (var dI = 0; dI < data.length; dI++) {
            var _data$dI$values$splic;

            data[dI].values.splice(positionToInsert, 0, (_data$dI$values$splic = {}, _defineProperty(_data$dI$values$splic, xField, positionToInsert), _defineProperty(_data$dI$values$splic, yField, 0), _defineProperty(_data$dI$values$splic, 'isEmptyBarForNesting', true), _data$dI$values$splic));
          }
        }

        data.__isModified = true;
      }
    }
  }, {
    key: '_calcOrientation',
    value: function _calcOrientation() {
      switch (this.instance.config.name) {
        case 'multiBarChartExt':
          this.orientation = 'vertical';
          break;
        case 'multiBarHorizontalChartExt':
          this.orientation = 'horizontal';
          break;
      }
    }
  }, {
    key: '_preserveOriginalOptions',
    value: function _preserveOriginalOptions() {
      this.originalOptions = Object.copyDeep(this.options);
    }
  }, {
    key: 'prepare',
    value: function prepare() {
      this._calcOrientation();
      this._setOptionsToChart();
      this._prepareData();
      this._preserveOriginalOptions();
    }
  }, {
    key: 'beforeInstanceUpdate',
    value: function beforeInstanceUpdate() {
      this.process();
    }
  }, {
    key: '_checkTitlesAndTryToResizeNesting_vertical',
    value: function _checkTitlesAndTryToResizeNesting_vertical() {
      var _this3 = this;

      Object.mergeDeep(this.options, {
        groupLabel: {
          height: this.originalOptions.groupLabel.height,
          borderWhitespaceYOffset: this.originalOptions.groupLabel.borderWhitespaceYOffset
        }
      });

      var wereAdjustmentsApplied = false;
      //try to adjust due to axis labels
      var tryToAdjust = function tryToAdjust(elems, sizeFn) {
        elems[0].forEach(function (elem) {
          var elemd3 = d3.select(elem);
          if (elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
            var minBorderWhitespaceYOffset_allowedDueToElement = sizeFn(elemd3) + _this3.options.relativeAdjustmentGap;
            _this3.options.groupLabel.borderWhitespaceYOffset = Math.max(_this3.options.groupLabel.borderWhitespaceYOffset, minBorderWhitespaceYOffset_allowedDueToElement);
            var maxBorderWhitespaceYOffset_wantedByNesting = _this3.options.groupLabel.height - _this3.options.groupLabel.text.height / 2;
            if (_this3.options.groupLabel.borderWhitespaceYOffset > maxBorderWhitespaceYOffset_wantedByNesting) {
              var correction = _this3.options.groupLabel.borderWhitespaceYOffset - maxBorderWhitespaceYOffset_wantedByNesting;
              _this3.options.groupLabel.height += correction;
            }
            wereAdjustmentsApplied = true;
          }
        });
      };
      tryToAdjust(this.svg.selectAll('.nv-x .nv-axislabel'), function (elemd3) {
        return parseFloat(elemd3.attr('y')) + elemd3.node().getBBox().height;
      });
      tryToAdjust(this.svg.selectAll('.nv-x .wrapper-module-product-axis-label'), function (elemd3) {
        return d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + elemd3.node().getBBox().height;
      });
      tryToAdjust(this.svg.selectAll('.nv-x .tick > text'), function (elemd3) {
        return parseFloat(elemd3.attr('y')) + elemd3.node().getBBox().height;
      });
      tryToAdjust(this.svg.selectAll('.nv-x .tick .wrapper-module-product-axis-tick-label'), function (elemd3) {
        return d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + elemd3.node().getBBox().height;
      });
      if (wereAdjustmentsApplied) {
        if (this.SKIP_CHECK_NEXT_UPDATE_VERTICAL) {
          this.SKIP_CHECK_NEXT_UPDATE_VERTICAL = false;
          return;
        }
        this.__setOptionsToVerticalChart();
        this.SKIP_CHECK_NEXT_UPDATE_VERTICAL = true;
        this.instance.scheduleChartReupdateAfterModulesChainFinished();
      }
    }
  }, {
    key: '_checkTitlesAndTryToResizeNesting_horizontal',
    value: function _checkTitlesAndTryToResizeNesting_horizontal() {
      var _this4 = this;

      Object.mergeDeep(this.options, {
        groupLabel: {
          height: this.originalOptions.groupLabel.height,
          borderWhitespaceYOffset: this.originalOptions.groupLabel.borderWhitespaceYOffset
        }
      });

      var wereAdjustmentsApplied = false;
      //try to adjust due to axis labels
      var tryToAdjust = function tryToAdjust(elems, sizeFn) {
        elems[0].forEach(function (elem) {
          var elemd3 = d3.select(elem);
          if (elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
            var minBorderWhitespaceYOffset_allowedDueToElement = sizeFn(elemd3) + _this4.options.relativeAdjustmentGap;
            _this4.options.groupLabel.borderWhitespaceYOffset = Math.max(_this4.options.groupLabel.borderWhitespaceYOffset, minBorderWhitespaceYOffset_allowedDueToElement);
            var maxBorderWhitespaceYOffset_wantedByNesting = _this4.options.groupLabel.height - _this4.options.groupLabel.text.height / 2;
            if (_this4.options.groupLabel.borderWhitespaceYOffset > maxBorderWhitespaceYOffset_wantedByNesting) {
              var correction = _this4.options.groupLabel.borderWhitespaceYOffset - maxBorderWhitespaceYOffset_wantedByNesting;
              _this4.options.groupLabel.height += correction;
            }
            wereAdjustmentsApplied = true;
          }
        });
      };
      tryToAdjust(this.svg.selectAll('.nv-x .nv-axislabel'), function (elemd3) {
        return Math.abs(parseFloat(elemd3.attr('y')) - elemd3.node().getBBox().height);
      });
      tryToAdjust(this.svg.selectAll('.nv-x .wrapper-module-product-axis-label'), function (elemd3) {
        return Math.abs(d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + elemd3.node().getBBox().y);
      });
      tryToAdjust(this.svg.selectAll('.nv-x .tick > text'), function (elemd3) {
        return Math.abs(parseFloat(elemd3.attr('x')) - elemd3.node().getBBox().width);
      });
      tryToAdjust(this.svg.selectAll('.nv-x .tick .wrapper-module-product-axis-tick-label'), function (elemd3) {
        return Math.abs(d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + elemd3.node().getBBox().x);
      });
      if (wereAdjustmentsApplied) {
        if (this.SKIP_CHECK_NEXT_UPDATE_HORIZONTAL) {
          this.SKIP_CHECK_NEXT_UPDATE_HORIZONTAL = false;
          return;
        }
        this.__setOptionsToHorizontalChart();
        this.SKIP_CHECK_NEXT_UPDATE_HORIZONTAL = true;
        this.instance.scheduleChartReupdateAfterModulesChainFinished();
      }
    }
  }, {
    key: '_checkTitlesAndTryToResizeNesting',
    value: function _checkTitlesAndTryToResizeNesting() {
      switch (this.instance.config.name) {
        case 'multiBarChartExt':
          this._checkTitlesAndTryToResizeNesting_vertical();
          break;
        case 'multiBarHorizontalChartExt':
          this._checkTitlesAndTryToResizeNesting_horizontal();
          break;
      }
    }
  }, {
    key: 'process',
    value: function process() {
      var _this5 = this;

      this._checkTitlesAndTryToResizeNesting();

      //hide additional bars
      if (this.options.insertEmptyBars) {
        this.svg.selectAll('.nv-group')[0].forEach(function (group) {
          d3.select(group).selectAll('.nv-bar')[0].forEach(function (bar, i) {
            bar = d3.select(bar);
            if ((i + 1) % (_this5.options.barsInGroup + 1) == 0) {
              bar.style('display', 'none');
            }
          });
        });
      }

      switch (this.orientation) {
        case 'vertical':
          this.__processSpecificForVertical();
          break;
        case 'horizontal':
          this.__processSpecificForHorizontal();
          break;
      }
    }
  }, {
    key: '__processSpecificForVertical',
    value: function __processSpecificForVertical() {
      var _this6 = this;

      var startGroupBars = this.svg.selectAll("g.nv-group").filter(function (d, i) {
        return i === 0;
      }).selectAll('.nv-bar').filter(function (d, i) {
        return i % (_this6.options.barsInGroup + (_this6.options.insertEmptyBars ? 1 : 0)) == 0;
      });

      var svgNvGroupCount = this.svg.selectAll("g.nv-group")[0].filter(function (g) {
        return d3.select(g).selectAll('.nv-bar')[0].length > 0;
      }).length;

      var endGroupBars = this.svg.selectAll("g.nv-group").filter(function (d, i) {
        return i === svgNvGroupCount - 1;
      }).selectAll('.nv-bar').filter(function (d, i) {
        return i % (_this6.options.barsInGroup + (_this6.options.insertEmptyBars ? 1 : 0)) == _this6.options.barsInGroup - 1;
      });

      var columnWidth = startGroupBars[0][0].getBBox().width;

      var isStacked = this.instance.extendedChart.stacked();
      if (!isStacked) {
        columnWidth = columnWidth * svgNvGroupCount;
      }

      var containerHeight = parseFloat(this.svg.select(".nv-y path.domain").node().getBBox().height);

      for (var i = 0; i < endGroupBars[0].length; i++) {
        var startBar = startGroupBars[0][i];
        var endBar = endGroupBars[0][i];

        var elemForAppending = this.svg.select('.nv-barsWrap');

        var groupWidth = endBar.getBoundingClientRect().right - startBar.getBoundingClientRect().left;
        var groupLabelX = startBar.transform.baseVal.consolidate().matrix.e;
        var groupLabelY = containerHeight;

        //draw label rect with borders
        var rect = elemForAppending.append("rect");
        rect.attrs({
          class: "dp-bar-chart-label",
          x: groupLabelX,
          y: groupLabelY,
          width: groupWidth,
          height: this.options.groupLabel.height
        }).styles({
          "stroke": this.options.groupLabel.colors.border,
          "fill": "none",
          "stroke-width": 2,
          "stroke-dasharray": '0 ' + (groupWidth + this.options.groupLabel.borderWhitespaceYOffset) + ' ' + (groupWidth + 2 * this.options.groupLabel.height - this.options.groupLabel.borderWhitespaceYOffset * 2) + ' ' + this.options.groupLabel.borderWhitespaceYOffset
        });
        this.appendedElements.push(rect);

        //draw text
        var labelTextWidth = Math.max(0, Math.min(groupWidth - 2 * this.options.groupLabel.minSideGap, this.options.groupLabel.text.width));
        var textX = groupLabelX + (groupWidth - labelTextWidth) / 2;
        var textY = groupLabelY + this.options.groupLabel.height - this.options.groupLabel.text.height / 2;
        var rectWhiteBg = elemForAppending.append("rect");
        rectWhiteBg.attrs({
          class: "dp-bar-chart-label-bg",
          x: textX,
          y: textY,
          width: labelTextWidth,
          height: this.options.groupLabel.text.height
        }).styles({
          "fill": "#FFFFFF"
        });
        this.appendedElements.push(rectWhiteBg);

        var rectTitle = elemForAppending.append("g");
        rectTitle.attrs({
          class: "dp-bar-chart-label-bg",
          transform: 'translate(' + textX + ',' + textY + ')',
          width: labelTextWidth,
          height: this.options.groupLabel.text.height
        });
        this.appendedElements.push(rectTitle);

        var text = Function.isFunction(this.options.groupName) ? this.options.groupName(i) : i;
        this.instance.utils.textWrap.fn({
          text: text,
          targetElement: rectTitle,
          options: {
            width: labelTextWidth,
            height: this.options.groupLabel.text.height,
            fontSize: this.options.groupLabel.text.fontSize,
            fontColor: this.options.groupLabel.colors.text,
            maxLineCount: this.options.groupLabel.text.nMaxLineCount,
            textAnchor: 'middle',
            verticalAlign: 'middle',
            tooltip: true,
            title: false
          }
        });
      }
    }
  }, {
    key: '__processSpecificForHorizontal',
    value: function __processSpecificForHorizontal() {
      var _this7 = this;

      var startGroupBars = this.svg.selectAll("g.nv-group").filter(function (d, i) {
        return i === 0;
      }).selectAll('.nv-bar').filter(function (d, i) {
        return i % (_this7.options.barsInGroup + (_this7.options.insertEmptyBars ? 1 : 0)) == 0;
      });

      var svgNvGroupCount = this.svg.selectAll("g.nv-group")[0].filter(function (g) {
        return d3.select(g).selectAll('.nv-bar')[0].length > 0;
      }).length;

      var endGroupBars = this.svg.selectAll("g.nv-group").filter(function (d, i) {
        return i === svgNvGroupCount - 1;
      }).selectAll('.nv-bar').filter(function (d, i) {
        return i % (_this7.options.barsInGroup + (_this7.options.insertEmptyBars ? 1 : 0)) == _this7.options.barsInGroup - 1;
      });

      var columnHeight = startGroupBars[0][0].getBBox().height;

      var isStacked = this.instance.extendedChart.stacked();
      if (!isStacked) {
        columnHeight = columnHeight * svgNvGroupCount;
      }

      for (var i = 0; i < endGroupBars[0].length; i++) {
        var startBar = startGroupBars[0][i];
        var endBar = endGroupBars[0][i];

        var groupHeight = endBar.getBoundingClientRect().bottom - startBar.getBoundingClientRect().top;

        var elemForAppending = this.svg.select('.nv-barsWrap');

        var groupLabelX = -this.options.groupLabel.height;
        var groupLabelY = startBar.transform.baseVal.consolidate().matrix.f;

        //draw label rect with borders
        var rect = elemForAppending.append("rect");
        rect.attrs({
          class: "dp-bar-chart-label",
          transform: 'translate(' + groupLabelX + ', ' + groupLabelY + ')',
          width: this.options.groupLabel.height,
          height: groupHeight
        }).styles({
          "stroke": this.options.groupLabel.colors.border,
          "fill": "none",
          "stroke-width": 2,
          "stroke-dasharray": this.options.groupLabel.height - this.options.groupLabel.borderWhitespaceYOffset + ' ' + (groupHeight + 2 * this.options.groupLabel.borderWhitespaceYOffset) + ' ' + (groupHeight + 2 * this.options.groupLabel.height - this.options.groupLabel.borderWhitespaceYOffset * 2)
        });
        this.appendedElements.push(rect);

        //draw text
        var textTransformStr = 'translate(' + (groupLabelX - this.options.groupLabel.text.height / 2) + ',' + (groupLabelY + this.options.groupLabel.text.width + (groupHeight - this.options.groupLabel.text.width) / 2) + ')rotate(-90)';
        var rectWhiteBg = elemForAppending.append("rect");
        rectWhiteBg.attrs({
          class: "dp-bar-chart-label-bg",
          transform: textTransformStr,
          width: this.options.groupLabel.text.width,
          height: this.options.groupLabel.text.height
        }).styles({
          "fill": "#FFFFFF"
        });
        this.appendedElements.push(rectWhiteBg);

        var rectTitle = elemForAppending.append("g");
        rectTitle.attrs({
          class: "dp-bar-chart-label-bg",
          transform: textTransformStr,
          width: this.options.groupLabel.text.width,
          height: this.options.groupLabel.text.height
        });
        this.appendedElements.push(rectTitle);

        var text = Function.isFunction(this.options.groupName) ? this.options.groupName(i) : i;
        this.instance.utils.textWrap.fn({
          text: text,
          targetElement: rectTitle,
          options: {
            width: this.options.groupLabel.text.width,
            height: this.options.groupLabel.text.height,
            fontSize: this.options.groupLabel.text.fontSize,
            fontColor: this.options.groupLabel.colors.text,
            maxLineCount: this.options.groupLabel.text.nMaxLineCount,
            textAnchor: 'middle',
            verticalAlign: 'middle',
            tooltip: true,
            title: false
          }
        });

        // move bars labels
        if (this.options.tickLabelsOutside) {
          (function () {
            var labelHorizontalCorrection = _this7.options.groupLabel.height + _this7.options.groupLabel.text.height / 2;
            _this7.svg.selectAll('.nv-x .tick text')[0].forEach(function (label) {
              label = d3.select(label);
              var x = label.attr('x') || 0;
              label.attr('transform', 'translate(' + -labelHorizontalCorrection + ',0)');
            });
          })();
        }
      }
    }
  }]);

  return NestingModule;
}(nv.Module);

nv.Module.register(NestingModule);

var TableModule = function (_nv$Module2) {
  _inherits(TableModule, _nv$Module2);

  function TableModule(instance, options) {
    _classCallCheck(this, TableModule);

    return _possibleConstructorReturn(this, (TableModule.__proto__ || Object.getPrototypeOf(TableModule)).call(this, {
      name: TableModule.name,
      supportedCharts: ['waterfall']
    }, instance, options, {
      squeezeChartHeight: false,
      container: null,
      metadata: {
        chart: {
          lines: []
        },
        table: {
          lines: [],
          formatStrings: {},
          showHeadRow: nv.modules.table.constants.TABLE_SHOW_HEAD_ROW,
          firstCellContent: nv.modules.table.constants.TABLE_FIRST_CELL_CONTENT
        }
      },

      rowLineHeight: 25,
      fontSize: 13,
      fontWeight: 'bold',
      fill: 'gainsboro',
      stroke: 'grey',
      strokeWidth: 2,
      align: 'middle',
      valign: 'middle',
      offsetY: 0,
      offsetX: 0,
      maxNLines: 2,
      colors: {
        green: 'green',
        red: 'red'
      },
      tooltips: true,
      titles: false

    }));
  }

  _createClass(TableModule, [{
    key: '_setChartSeries',
    value: function _setChartSeries(n) {
      var serie = this.instance.originalData[n];
      if (serie != null) {
        this.instance.selection.datum([serie]);
      }
    }
  }, {
    key: 'prepare',
    value: function prepare() {
      this.table = new nv.modules.table.Table();

      //options
      this.options.minLeftMargin = this.options.maxLeftMargin = nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH + nv.modules.table.constants.TABLE_OFFSET_X;
      this.options.minRightMargin = this.options.maxRightMargin = nv.modules.table.constants.TABLE_OFFSET_X;
      // this.instance.extendedChart.margin({
      //   left: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH + nv.modules.table.constants.TABLE_OFFSET_X,
      //   right: nv.modules.table.constants.TABLE_OFFSET_X
      // })
      // this.instance.extendedChart.discretebar.margin({
      //   left: 0,
      //   right: 0
      // })

      var data = this.instance.originalData;
      // this.instance.extendedChart.yAxis.axisLabel(data[0].key)

      var originalYAxisTickFormat = this.instance.extendedChart.yAxis.tickFormat();
      this.instance.extendedChart.yAxis.tickFormat(function (d) {
        return parseFloat(d) !== 0 ? originalYAxisTickFormat(d) : '';
      });

      this.instance.extendedChart.xAxis.tickValues(false);
    }
  }, {
    key: 'beforeInstancePrepareData',
    value: function beforeInstancePrepareData() {
      if (this.options.metadata != null && this.options.metadata.chart != null && this.options.metadata.chart.lines != null) {
        this._setChartSeries(this.options.metadata.chart.lines[0]);
      }
    }
  }, {
    key: 'process',
    value: function process() {
      var _this9 = this;

      //draw table
      var svg = this.instance.extendedChart.container;
      var tableOptions = Object.assign({}, this.options, {
        chartData: {
          height: this.instance.extendedChart.height()
        },
        conditionalFormat: function conditionalFormat(text, line) {
          if (_this9.options.metadata.table.showHeadRow) line--;
          var formatString = _this9.options.metadata.table.formatStrings[line] || _this9.options.formatString;
          return _this9.instance.utils.conditionalFormat.fn(text, formatString);
        },
        textWrap: function textWrap(args) {
          return _this9.instance.utils.textWrap.fn(args);
        },
        scheduleAndSkipNextUpdate: function scheduleAndSkipNextUpdate() {
          _this9.scheduleAndSkipNextUpdate();
        },
        chartWantedHeight: this.instance.originalOptions.height
      });
      var dataFormatterOptions = Object.assign({}, this.options.metadata.table, {
        x: this.instance.originalOptions.x,
        y: this.instance.originalOptions.y,
        xTickFormat: this.instance.originalOptions.xAxis.tickFormat,
        yTickFormat: this.instance.originalOptions.yAxis.tickFormat
      });
      var tableData = new nv.modules.table.DataFormatter(this.instance.originalData, dataFormatterOptions).table();
      this.table.init(this.instance, tableOptions, tableData);
    }
  }], [{
    key: '_name',
    get: function get() {
      return 'table';
    }
  }]);

  return TableModule;
}(nv.Module);

nv.Module.register(TableModule);

nv.modules.table.constants = {
  //table uncustomizable
  TABLE_FIRST_COLUMN_WIDTH: 180,
  TABLE_FIRST_COLUMN_ALIGN: 'start',
  TABLE_FIRST_COLUMN_TEXT_X_CORRECTION: 10,
  TABLE_OFFSET_X: 30,
  TABLE_OFFSET_Y: 5,
  TABLE_LOADER_SIZE: 70,
  TABLE_MIN_COL_WIDTH: 0,
  //table customizable defaults
  TABLE_ROW_LINE_HEIGHT: 25,
  TABLE_FONT_SIZE: 13,
  TABLE_TOOLTIP_FONT_SIZE: 13,
  TABLE_TOOLTIP_HOVER_OPACITY: 0.7,
  TABLE_TOOLTIP_THEME: 'discreteBarChartWithTable',
  TABLE_FONT_WEIGHT: 'normal',
  TABLE_FILL: 'gainsboro',
  TABLE_STROKE: 'gray',
  TABLE_STROKE_WIDTH: 1,
  TABLE_ALIGN: 'middle',
  TABLE_VALIGN: 'middle',
  TABLE_MAX_N_LINES: 2,
  TABLE_COLORS: {
    green: '#26B910',
    red: '#E00020',
    default: '#151921'
  },
  TABLE_SHOW_HEAD_ROW: true,
  TABLE_FIRST_CELL_CONTENT: '_',
  TABLE_CLASS: 'table-by-table-module',

  //chart
  CHART_DEFAULT_METRIC: 1 // correct values are [1 .. rows.length-1]
};

nv.modules.table.config = {
  CONDITIONAL_FORMAT_DEFAULT: function CONDITIONAL_FORMAT_DEFAULT(d) {
    return { text: d, color: '#151921' };
  }
};

nv.modules.table.Data = function () {
  function _class() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _class);

    if (this._isDataValid(data)) {
      this.__isDataValid = true;
      this.__initialData = data;
      this.__headRow = data.rows[0];
      this.__config = config;
      Object.defaultsDeep(this.__config, {
        autoAddFirstColumn: true
      });
    } else {
      this.__isDataValid = false;
    }
  }

  _createClass(_class, [{
    key: '_isDataValid',
    value: function _isDataValid(data) {
      var defaultErrorMessage = 'Failed to instantiate discreteBarChartWithTable.Data';
      var defaultWarningMessage = 'Warning in discreteBarChartWithTable.Data';
      if (!data.rows) {
        console.error(defaultErrorMessage + ': field ".rows" not specified');
        return false;
      }
      if (!Array.isArray(data.rows)) {
        console.error(defaultErrorMessage + ': field ".rows" is not array');
        return false;
      }
      if (data.rows.length < 1) {
        console.error(defaultErrorMessage + ': field ".rows" doesn\'t contain any row');
        return false;
      }
      if (!data.columns) {
        console.error(defaultErrorMessage + ': field ".columns" not specified');
        return false;
      }
      if (!Array.isArray(data.columns)) {
        console.error(defaultErrorMessage + ': field ".columns" is not array');
        return false;
      }
      if (data.columns.length < 1) {
        console.error(defaultErrorMessage + ': field ".columns" doesnt contain any column');
        return false;
      }

      if (data.rows.length === 1) {
        console.warn(defaultWarningMessage + ': field ".rows" contains only one head row');
      }

      return true;
    }
  }, {
    key: '_byEachInitialDataColumn',
    value: function _byEachInitialDataColumn(fn) {
      for (var i = 0; i < this.__initialData.columns.length; i++) {
        var column = this.__initialData.columns[i];
        fn(column, i);
      }
    }
  }, {
    key: '_byEachInitialDataRow',
    value: function _byEachInitialDataRow(fn) {
      for (var j = 0; j < this.__initialData.rows.length; j++) {
        var row = this.__initialData.rows[j];
        fn(row, j);
      }
    }

    //data formatters

  }, {
    key: 'chart',
    value: function chart(rowNumber) {
      var _this10 = this;

      if (!this.__isDataValid || !rowNumber || !Number.isInteger(rowNumber) || rowNumber < 1 || rowNumber >= this.__initialData.rows.length) {
        return null;
      }

      var row = this.__initialData.rows[rowNumber];
      var data = {
        key: row.displayName,
        values: []
      };
      this._byEachInitialDataColumn(function (column, i) {
        if (i === 0 && !_this10.__config.autoAddFirstColumn) {
          return;
        }
        data.values.push({
          label: column[_this10.__headRow.fieldName],
          value: column[row.fieldName]
        });
      });
      return [data];
    }
  }, {
    key: 'table',
    value: function table() {
      var _this11 = this;

      var columnSlug = function columnSlug(i) {
        return (_this11.__config.autoAddFirstColumn ? i + 1 : i).toString();
      };

      var data = {
        columns: [],
        rows: []
      };

      if (this.__config.autoAddFirstColumn) {
        data.columns.push({
          slug: '0'
        });
      }

      this._byEachInitialDataColumn(function (column, i) {
        var tableColumn = {
          slug: columnSlug(i)
        };
        data.columns.push(tableColumn);
      });

      Object.assign(data.columns[0], {
        strictWidth: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH,
        align: nv.modules.table.constants.TABLE_FIRST_COLUMN_ALIGN,
        textXCorrection: nv.modules.table.constants.TABLE_FIRST_COLUMN_TEXT_X_CORRECTION
      });

      this._byEachInitialDataRow(function (row, j) {
        var tableRow = {
          slug: row.fieldName
        };
        if (_this11.__config.autoAddFirstColumn) {
          tableRow['0'] = new nv.modules.table.TableCell(row.displayName);
        }
        _this11._byEachInitialDataColumn(function (column, i) {
          var string = column[row.fieldName];
          var TableCellClass = nv.modules.table.TableCell;
          var tableColumn = data.columns[columnSlug(i)];
          tableRow[tableColumn.slug] = new TableCellClass(string);
        });
        data.rows.push(tableRow);
      });

      return data;
    }
  }]);

  return _class;
}();

nv.modules.table.DataFormatter = function () {
  function _class2() {
    var __initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var __options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _class2);

    this.__initialData = __initialData;
    this.__options = __options;
  }

  _createClass(_class2, [{
    key: '_byEachRow',
    value: function _byEachRow(fn) {
      var lines = this.__options.lines;
      if (!Array.isArray(lines)) {
        lines = Object.keys(this.__initialData).map(function (i) {
          return parseInt(i);
        });
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var j = _step.value;

          if (j >= 0 && j < this.__initialData.length) {
            var row = this.__initialData[j];
            fn(row, j);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: '_byEachCellOfRow',
    value: function _byEachCellOfRow(row, fn) {
      for (var i = 0; i < row.values.length; i++) {
        var cell = row.values[i];
        fn(cell, i);
      }
    }
  }, {
    key: 'table',
    value: function table() {
      var _this12 = this;

      var data = {
        columns: [],
        rows: []
      };

      data.columns.push({
        slug: 'first_column',
        strictWidth: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH,
        align: nv.modules.table.constants.TABLE_FIRST_COLUMN_ALIGN,
        textXCorrection: nv.modules.table.constants.TABLE_FIRST_COLUMN_TEXT_X_CORRECTION
      });

      this._byEachCellOfRow(this.__initialData[0], function (cell, i) {
        var tableColumn = {
          slug: _this12.__options.x(cell)
        };
        data.columns.push(tableColumn);
      });

      if (this.__options.showHeadRow) {
        var firstRow = {
          first_column: new nv.modules.table.TableCell(this.__options.firstCellContent, {
            hideText: false
          })
        };
        this._byEachCellOfRow(this.__initialData[0], function (cell, i) {
          var label = _this12.__options.x(cell);
          var text = void 0;
          if (label != null) {
            text = _this12.__options.xTickFormat(label);
          }
          firstRow[label] = new nv.modules.table.TableCell(text);
        });
        data.rows.push(firstRow);
      }

      this._byEachRow(function (row, j) {
        var tableRow = {
          slug: row.key,
          first_column: new nv.modules.table.TableCell(row.key)
        };
        _this12._byEachCellOfRow(row, function (cell, i) {
          var label = _this12.__options.x(cell);
          var value = _this12.__options.y(cell);
          // let text
          // if(value != null) {
          //   text = this.__options.yTickFormat(value)
          // }
          // tableRow[label] = new nv.modules.table.TableCell(text)
          tableRow[label] = new nv.modules.table.TableCell(value);
        });
        data.rows.push(tableRow);
      });

      return data;
    }
  }]);

  return _class2;
}();

nv.modules.table.TableCell = function () {
  function _class3() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, _class3);

    this._text = text != null && text !== '' ? text : '_';
    this.options = options;
    this.additionalAttrs = {};
    if (this.text === '_') {
      this.makeTextHidden();
    }
  }

  //format


  _createClass(_class3, [{
    key: 'format',
    value: function format(text) {
      return text.toString().trim().replace(/\s\s+/g, ' ');
    }

    //options manipulating

  }, {
    key: 'makeTextHidden',
    value: function makeTextHidden() {
      this.options.hideText = true;
    }
  }, {
    key: 'makeHidden',
    value: function makeHidden() {
      this.options.hideCell = true;
    }
  }, {
    key: 'makeBold',
    value: function makeBold() {
      this.options.fontWeight = 'bold';
    }

    //getters/setters

  }, {
    key: 'text',
    get: function get() {
      return this.format(this._text);
    }
  }]);

  return _class3;
}();

nv.modules.table.TableCellMoneyFormat = function (_nv$modules$table$Tab) {
  _inherits(_class4, _nv$modules$table$Tab);

  function _class4() {
    _classCallCheck(this, _class4);

    return _possibleConstructorReturn(this, (_class4.__proto__ || Object.getPrototypeOf(_class4)).apply(this, arguments));
  }

  _createClass(_class4, [{
    key: 'format',
    value: function format(text) {
      return '$' + _get(_class4.prototype.__proto__ || Object.getPrototypeOf(_class4.prototype), 'format', this).call(this, text) + 'M';
    }
  }]);

  return _class4;
}(nv.modules.table.TableCell);

nv.modules.table.Table = function () {
  function _class5() {
    _classCallCheck(this, _class5);

    this.isRendering = 0;
    this.isDrawing = 0;
  }

  _createClass(_class5, [{
    key: 'init',
    value: function init(instance, config, data) {
      this.instance = instance;
      this.initContainer(this.instance.extendedChart.container);
      this.initConfig(config);
      this.initData(data);
      this.build();
    }
  }, {
    key: 'initContainer',
    value: function initContainer(svg) {
      this.svg = d3.select(svg);
    }
  }, {
    key: 'initConfig',
    value: function initConfig(config) {
      //defaults for customizable options
      var defaultsForCustomizableOptions = {
        rowLineHeight: nv.modules.table.constants.TABLE_ROW_LINE_HEIGHT,
        fontSize: nv.modules.table.constants.TABLE_FONT_SIZE,
        tooltipFontSize: nv.modules.table.constants.TABLE_TOOLTIP_FONT_SIZE,
        tooltipHoverOpacity: nv.modules.table.constants.TABLE_TOOLTIP_HOVER_OPACITY,
        tooltipTheme: nv.modules.table.constants.TABLE_TOOLTIP_THEME,
        fontWeight: nv.modules.table.constants.TABLE_FONT_WEIGHT,
        fill: nv.modules.table.constants.TABLE_FILL,
        stroke: nv.modules.table.constants.TABLE_STROKE,
        strokeWidth: nv.modules.table.constants.TABLE_STROKE_WIDTH,
        align: nv.modules.table.constants.TABLE_ALIGN,
        valign: nv.modules.table.constants.TABLE_VALIGN,
        maxNLines: nv.modules.table.constants.TABLE_MAX_N_LINES,
        colors: nv.modules.table.constants.TABLE_COLORS,
        conditionalFormat: nv.modules.table.constants.CONDITIONAL_FORMAT_DEFAULT
      };

      //uncustomizable options
      var uncustomizableOptions = {
        height: 300,
        width: '100%',
        offsetX: nv.modules.table.constants.TABLE_OFFSET_X,
        offsetY: nv.modules.table.constants.TABLE_OFFSET_Y,
        loaderSize: nv.modules.table.constants.TABLE_LOADER_SIZE,
        minColWidth: nv.modules.table.constants.TABLE_MIN_COL_WIDTH,
        flags: {
          isLongWordBreakingOn: false,
          isEllipsisToLastWordOn: false
        },
        // chartActualHeight: this.svg.select('.nvd3').node().getBBox().height
        // chartActualHeight: this.svg.select('.nvd3 .nv-y.nv-axis').node().getBBox().height + this.instance.extendedChart.margin().top
        chartActualHeight: this.instance.extendedChart.height()

      };

      this.config = Object.defaultsDeep(uncustomizableOptions, config, defaultsForCustomizableOptions);

      if (Number.isNumber(config.offsetX)) {
        this.config.offsetX += config.offsetX;
      }
      if (Number.isNumber(config.offsetY)) {
        this.config.offsetY += config.offsetY;
      }
    }
  }, {
    key: 'initData',
    value: function initData(data) {
      if (data != null) {
        this.data = data;
      } else {
        this.data = {
          columns: [{
            slug: 'name',
            strictWidth: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH,
            align: 'start',
            textXCorrection: 10
          }, {
            slug: 'salesYearAgo'
          }, {
            slug: 'prod1'
          }, {
            slug: 'prod2'
          }, {
            slug: 'prod3'
          }, {
            slug: 'prod4'
          }, {
            slug: 'prod5'
          }, {
            slug: 'prod6'
          }, {
            slug: 'salesThisYear'
          }],
          rows: [{
            slug: 'head',
            name: new nv.modules.table.TableCell('_', {
              hideText: true
            }),
            salesYearAgo: new nv.modules.table.TableCell('$ Sales Year Ago ASda wf qwf we'),
            prod1: new nv.modules.table.TableCell('Product 1'),
            prod2: new nv.modules.table.TableCell('Product 2'),
            prod3: new nv.modules.table.TableCell('Product 3'),
            prod4: new nv.modules.table.TableCell('Product 4'),
            prod5: new nv.modules.table.TableCell('Product 5'),
            prod6: new nv.modules.table.TableCell('Product 6'),
            salesThisYear: new nv.modules.table.TableCell('SalesThisYearSalesThisYearSalesThis Year Sales This Year Sales This Year')
          }, {
            slug: 'totalSales',
            name: new nv.modules.table.TableCell('Total $ Sales'),
            salesYearAgo: new nv.modules.table.TableCellMoneyFormat(796),
            prod1: new nv.modules.table.TableCellMoneyFormat(132),
            prod2: new nv.modules.table.TableCellMoneyFormat(116),
            prod3: new nv.modules.table.TableCellMoneyFormat(100),
            prod4: new nv.modules.table.TableCellMoneyFormat(87),
            prod5: new nv.modules.table.TableCellMoneyFormat(132),
            prod6: new nv.modules.table.TableCellMoneyFormat(116),
            salesThisYear: new nv.modules.table.TableCellMoneyFormat(874533732212)
          }, {
            slug: 'percentOfCategorySales',
            name: new nv.modules.table.TableCell('% of Category Sales'),
            prod1: new nv.modules.table.TableCell('16.5%'),
            prod2: new nv.modules.table.TableCell('14.5%'),
            prod3: new nv.modules.table.TableCell('12.5%'),
            prod4: new nv.modules.table.TableCell('10.8%'),
            prod5: new nv.modules.table.TableCell('12%'),
            prod6: new nv.modules.table.TableCell('-3%'),
            salesThisYear: new nv.modules.table.TableCell('3%')
          }, {
            slug: 'salesChangePercent',
            // maxNLines: 1,
            name: new nv.modules.table.TableCell('$ Sales % Change Asfsd gg wer er re er ASD'),
            prod1: new nv.modules.table.TableCell('-2%'),
            prod2: new nv.modules.table.TableCell('2%'),
            prod3: new nv.modules.table.TableCell('5%'),
            prod4: new nv.modules.table.TableCell('-2%'),
            prod5: new nv.modules.table.TableCell('12%'),
            prod6: new nv.modules.table.TableCell('123'),
            salesThisYear: new nv.modules.table.TableCell('3%')
          }, {
            slug: 'qweqweqwe',
            name: new nv.modules.table.TableCell('QQ Sales % Change'),
            prod1: new nv.modules.table.TableCell('-2%'),
            prod2: new nv.modules.table.TableCell('2%'),
            prod3: new nv.modules.table.TableCell('5%'),
            prod4: new nv.modules.table.TableCell('-2%'),
            prod5: new nv.modules.table.TableCell('12%'),
            prod6: new nv.modules.table.TableCell('123'),
            salesThisYear: new nv.modules.table.TableCell('3%')
          }]
        };
      }

      this.byEachCell(function (cell, column, row, i, j) {
        if (i == 0 || j == 0) {
          cell.makeBold();
        }
      });

      this.nAutoWidthColumns = this.data.columns.filter(function (column) {
        return column.strictWidth == undefined;
      }).length;
      this.nStrictWidthColumnsSum = this.data.columns.reduce(function (sum, column) {
        if (column.strictWidth != undefined) sum += column.strictWidth;
        return sum;
      }, 0);
    }
  }, {
    key: 'getId',
    value: function getId(column, row) {
      return column.slug + '-' + row.slug;
    }
  }, {
    key: 'getCell',
    value: function getCell(column, row) {
      return row[column.slug];
    }
  }, {
    key: 'getText',
    value: function getText(column, row, i, j) {
      var cell = this.getCell(column, row);
      var text = cell.text;

      // if(this.config.flags.isLongWordBreakingOn) {
      //   //splitting long words by spaces
      //   let t = this.getTestTextElement()
      //   let fullAllowedWidth = this.getFullAllowedWidth(cell, column, row)
      //   let words = text.split(' ')
      //   for(let word of words) {
      //     t.text(word)
      //     let wordWantedWidth = t.node().getBBox().width
      //     if(wordWantedWidth > fullAllowedWidth) {
      //       let currentWordPart = ''
      //       let wordWithSpaces = ''
      //       for(let k = 0; k < word.length; k++) {
      //         let char = word[k]
      //         currentWordPart += char
      //         t.text(currentWordPart)
      //         let currentWordPartWantedWidth = t.node().getBBox().width
      //         if(currentWordPartWantedWidth > fullAllowedWidth){
      //           wordWithSpaces += currentWordPart.slice(0, currentWordPart.length-1) + ' '
      //           currentWordPart = currentWordPart.slice(currentWordPart.length-1)
      //         }
      //       }
      //       wordWithSpaces += currentWordPart
      //       text = text.insertInstead(text.indexOf(word), word.length, wordWithSpaces)
      //     }
      //   }
      //   t.remove()
      // }

      //returning conditional format for text, sending row number if not first cell
      return this.config.conditionalFormat(text, i !== 0 ? j : null);
    }
  }, {
    key: 'getFullAllowedWidth',
    value: function getFullAllowedWidth(cell, column, row) {
      // return cell.width - (column.textXCorrection || 0) - this.config.cellXPadding * 2
      // return cell.width - (column.textXCorrection || 0)
      // return cell.width
      return cell.width - (column.textXCorrection || 0) * 2;
    }
  }, {
    key: 'getTestTextElement',
    value: function getTestTextElement() {
      var t = this.svg.append('text');
      t.style('font-size', this.config.fontSize).style('visibility', 'hidden');
      return t;
    }
  }, {
    key: 'getTestGroupElement',
    value: function getTestGroupElement() {
      var g = this.svg.append('g');
      g.style('visibility', 'hidden');
      return g;
    }
  }, {
    key: 'byEachColumn',
    value: function byEachColumn(fn) {
      for (var i = 0; i < this.data.columns.length; i++) {
        var column = this.data.columns[i];
        fn(column, i);
      }
    }
  }, {
    key: 'byEachRow',
    value: function byEachRow(fn) {
      for (var j = 0; j < this.data.rows.length; j++) {
        var row = this.data.rows[j];
        fn(row, j);
      }
    }
  }, {
    key: 'byEachCell',
    value: function byEachCell(fn, callWhenCellIsNull) {
      var _this14 = this;

      this.byEachColumn(function (column, i) {
        _this14.byEachRow(function (row, j) {
          var cell = _this14.getCell(column, row);
          cell != null || callWhenCellIsNull ? fn(cell, column, row, i, j) : null;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this15 = this;

      var actualViewportWidth = void 0;
      try {
        actualViewportWidth = this.svg.node().width.baseVal.value;
      } catch (e) {
        var container = void 0;
        if (this.config.container && (container = d3.select(this.config.container).node()) != null && Function.isFunction(container.getBoundingClientRect)) {
          actualViewportWidth = container.getBoundingClientRect().width;
          console.warn("NVD3 Chart-library Warning: Table module: table.js: set width to container width because svg element not ready/broken");
        } else {
          actualViewportWidth = 2 * this.config.offsetX + 50;
          console.error("NVD3 Chart-library Error: Table module: table.js: set width to default because svg element not ready/broken");
        }
      }
      var viewportWidth = actualViewportWidth - 2 * this.config.offsetX;

      //rendering column widths and x
      var columnWidth = (viewportWidth - this.nStrictWidthColumnsSum) / this.nAutoWidthColumns;
      this.byEachColumn(function (column) {
        var width = column.strictWidth == undefined ? columnWidth : column.strictWidth;
        if (width < _this15.config.minColWidth) width = _this15.config.minColWidth;
        column.width = width;
      });

      var prevColumn = void 0;
      this.byEachColumn(function (column) {
        column.x = prevColumn != null ? prevColumn.x + prevColumn.width : _this15.config.offsetX;
        prevColumn = column;
      });

      //rendering cell widths and x
      this.byEachCell(function (cell, column, row, i, j) {
        cell.width = column.width;
        cell.x = column.x;

        //merging 1st and 2nd cells if 2nd is empty
        if (i === 0) {
          var secondColumn = _this15.data.columns[1];

          var secondColumnCell = _this15.getCell(secondColumn, row);
          if (!secondColumnCell || !secondColumnCell.text || secondColumnCell.options.hideText) {
            cell.width += secondColumn.width;
            secondColumnCell.makeHidden();
          }
        }
      });

      //rendering row heights and lines
      this.byEachRow(function (row) {
        row.nLines = null;
        row.height = 0;
      });
      var cellPromises = [];
      this.byEachCell(function (cell, column, row, i, j) {
        var formatted = _this15.getText(column, row, i, j);

        // //calculating wanted width
        // let t = this.getTestTextElement()
        // t.text(text)
        // let wantedWidth = t.node().getBBox().width
        // t.remove()

        //calculating nLines and height
        // let fullWantedWidth = wantedWidth
        // let fullWantedWidth = wantedWidth
        // let fullWantedWidth = wantedWidth
        // let fullWantedWidth = wantedWidth //+ (column.textXCorrection || 0)
        // let fullAllowedWidth = this.getFullAllowedWidth(cell, column, row)
        // let nLines = Math.floor(fullWantedWidth / fullAllowedWidth) + 1
        // nLines = Math.min(nLines, row.maxNLines || this.config.maxNLines)
        var promise = new Promise(function (resolve, reject) {
          var g = _this15.getTestGroupElement();
          var testWrapperOptions = {
            x: 0,
            y: 0,
            width: cell.width - (column.textXCorrection || 0),
            fontSize: _this15.config.fontSize,
            fontWeight: cell.options.fontWeight || _this15.config.fontWeight,
            textAnchor: column.align || _this15.config.align,
            verticalAlign: cell.valign || row.valign || column.valign || _this15.config.valign,
            lineHeight: _this15.config.rowLineHeight,
            fontFamily: 'Roboto, Open Sans, sans-serif',
            fontColor: formatted.color,
            maxLineCount: row.maxNLines || _this15.config.maxNLines,
            renderCallback: function renderCallback(data) {
              var nLines = data.linesNumber;
              row.height = Math.max(row.height || 0, _this15.config.rowLineHeight * (nLines + 0.5));
              cell.nLines = row.nLines = Math.max(row.nLines || 0, nLines);
              g.remove();
              resolve();
            },
            isWordBreak: _this15.config.flags.isLongWordBreakingOn,
            title: false
          };
          _this15.config.textWrap({
            text: formatted.text,
            targetElement: g,
            options: testWrapperOptions
          });
        });
        cellPromises.push(promise);
      });

      return Promise.all(cellPromises).then(function () {

        //rendering cell heights and y
        _this15.byEachCell(function (cell, column, row, i, j) {
          cell.height = row.height;
          var y = _this15.config.chartActualHeight + _this15.config.offsetY;
          for (var k = 0; k < j; k++) {
            var prependingRow = _this15.data.rows[k];
            y += prependingRow.height;
          }
          cell.y = y;
        });

        // //rendering paths for wrapping text
        // this.byEachCell((cell, column, row) => {
        //  let d = ''
        //  for(let k = 0; k < cell.nLines; k++){
        //    let xstart = cell.x + (column.textXCorrection || 0) + this.config.cellXPadding
        //    let ystart = cell.y + this.config.rowLineHeight * (k + .5)
        //    let xend = cell.x + cell.width - this.config.cellXPadding
        //    d += `M${xstart},${ystart} H${xend} `
        //  }
        //  let path = {
        //    d
        //  }
        //  cell.path = path
        // })

        //rendering table height
        var height = _this15.config.offsetY + _this15.config.rowLineHeight;
        _this15.byEachRow(function (row) {
          height += row.height;
        });
        _this15.config.height = height;

        //rendering cells additional attrs
        _this15.byEachCell(function (cell) {
          if (Number.isNumber(cell.text) || /\%/.test(cell.text)) {
            var number = parseFloat(cell.text);
            if (!Number.isNaN(number)) {
              // cell.additionalAttrs.fill = number > 0 ? this.config.colors.green : number < 0 ? this.config.colors.red : this.config.colors.default
              cell.additionalAttrs['font-weight'] = 'bold';
            }
          }
        });

        //rendering rects
        // this.data.rects = []
        _this15.byEachColumn(function (column) {
          column.rects = [];
        });
        _this15.byEachRow(function (row) {
          row.rects = [];
        });
        _this15.byEachCell(function (cell, column, row, i, j) {
          var rect = {
            columnIndex: i,
            rowIndex: j,
            x: cell.x,
            y: cell.y,
            width: cell.width,
            height: cell.height
          };

          if (j % 2 == 1) {
            rect.fill = _this15.config.fill;
          } else {
            rect.fill = 'white';
          }

          //finally setting rendered rect to table
          // this.data.rects.push(rect);

          row.rects.push(rect);
          column.rects.push(rect);
          cell.rect = rect;
        });
      });
    }

    //draw rendered table

  }, {
    key: 'draw',
    value: function draw() {
      var _this16 = this;

      this.clean();

      this.tableWrapper = this.svg.append('g');
      this.tableWrapper.attrs({
        class: nv.modules.table.constants.TABLE_CLASS
      });
      var elemCells = this.tableWrapper.append('g').attrs({
        class: nv.modules.table.constants.TABLE_CLASS + '-cells'
      });

      var cellPromises = [];
      this.byEachCell(function (cell, column, row, i, j) {
        var id = _this16.getId(column, row);
        var idClipPath = id + '-clip-path';
        var idText = id + '-text';

        cell.elemG = elemCells.append('g');
        cell.elemG.attrs({
          class: nv.modules.table.constants.TABLE_CLASS + '-cell',
          id: id,
          transform: 'translate(' + cell.rect.x + ', ' + cell.rect.y + ')'
        });

        //clip-paths
        var elemClipPath = cell.elemG.append('clipPath').attrs({
          id: idClipPath
        });
        var elemClipPathRect = elemClipPath.append('rect').attrs({
          x: 0,
          y: 0,
          width: cell.rect.width,
          height: cell.rect.height
        });
        //bounding rects
        cell.elemRect = cell.elemG.append('rect').attrs({
          x: 0,
          y: 0,
          width: cell.rect.width,
          height: cell.rect.height,
          fill: cell.rect.fill || _this16.config.fill,
          stroke: cell.rect.stroke || _this16.config.stroke,
          'stroke-width': cell.rect.strokeWidth || _this16.config.strokeWidth
        }).styles({
          fill: cell.rect.fill || _this16.config.fill,
          stroke: cell.rect.stroke || _this16.config.stroke,
          'stroke-width': cell.rect.strokeWidth || _this16.config.strokeWidth
        });
        // //text
        // let elemTextAttrs = Object.assign({}, cell.additionalAttrs, {
        //   id,
        //   'font-size': `${this.config.fontSize}px`,
        //   'clip-path': `url(#${idClipPath})`
        // })
        // if(i == 0 || j == 0) {
        //   elemTextAttrs['font-weight'] = 'bold'
        // }
        // let elemText = cell.elemG.append('text').attrs(elemTextAttrs)
        // if(cell.options.hideText){
        //   elemText.style('visibility', 'hidden')
        // }

        //text drawing and wrapping
        var promise = new Promise(function (resolve, reject) {
          var formatted = _this16.getText(column, row, i, j);
          var wrapOptions = {
            x: column.textXCorrection || 0,
            y: -0.25 * _this16.config.rowLineHeight,
            width: cell.rect.width - (column.textXCorrection || 0),
            height: cell.rect.height,
            fontSize: _this16.config.fontSize,
            fontWeight: cell.options.fontWeight,
            textAnchor: column.align || _this16.config.align,
            verticalAlign: cell.valign || row.valign || column.valign || _this16.config.valign,
            lineHeight: _this16.config.rowLineHeight,
            fontFamily: 'Roboto, Open Sans, sans-serif',
            fontColor: formatted.color,
            maxLineCount: row.maxNLines || _this16.config.maxNLines,
            id: idText,
            renderCallback: function renderCallback(data) {
              var textElemAttrs = Object.assign({}, cell.additionalAttrs, {
                'font-size': _this16.config.fontSize + 'px',
                'clip-path': 'url(#' + idClipPath + ')'
              });
              if (i == 0 || j == 0) {
                textElemAttrs['font-weight'] = 'bold';
              }
              data.textElem.attrs(textElemAttrs);
              if (cell.options.hideText) {
                data.textElem.style('visibility', 'hidden');
              }
              if (cell.options.hideCell) {
                d3.select(data.textElem.node().parentNode).style('display', 'none');
              }
              cell.elemText = data.textElem;

              resolve();
            },
            isWordBreak: _this16.config.flags.isLongWordBreakingOn,
            ellipsisToLastWord: _this16.config.flags.isEllipsisToLastWordOn,
            tooltip: !cell.options.hideText,
            title: false
          };
          _this16.config.textWrap({
            text: formatted.text,
            targetElement: cell.elemG,
            options: wrapOptions
          });
        });
        cellPromises.push(promise);
      });

      //take care of summary svg height
      var tableActualHeight = this.tableWrapper.node().getBBox().height;
      var svgSummaryHeight = void 0;
      var container = void 0;
      var chartContainerVisibility = 'visible';

      if (this.config.squeezeChartHeight && this.config.container != null && (container = d3.select(this.config.container).node()) != null && Function.isFunction(container.getBoundingClientRect)) {
        // const baseHeight = this.instance.originalOptions.height
        // const baseHeight = container.getBoundingClientRect().height
        var baseHeight = Math.min(container.getBoundingClientRect().height, this.config.chartWantedHeight || Infinity);
        // svgSummaryHeight = baseHeight + this.config.rowLineHeight * 3 / 2
        svgSummaryHeight = baseHeight;
        var limit = this.instance.extendedChart.margin().top + 30;
        var chartHeight = baseHeight - tableActualHeight;
        if (chartHeight < limit) {
          chartHeight = limit;
          this.tableWrapper.attrs({
            transform: 'translate(0, -' + (this.config.chartActualHeight - this.instance.extendedChart.margin().top) + ')'
          });
          chartContainerVisibility = 'hidden';
        }
        this.instance.extendedChart.height(chartHeight);
        // this.config.scheduleAndSkipNextUpdate()
      } else {
        svgSummaryHeight = this.config.chartActualHeight + tableActualHeight + this.config.rowLineHeight;
      }
      var chartContainer = this.svg.select('.nv-wrap');
      chartContainer.styles({
        visibility: chartContainerVisibility
      });

      svgSummaryHeight = Math.max(tableActualHeight + this.config.rowLineHeight * 3 / 2, svgSummaryHeight);

      this.svg.attrs({
        height: svgSummaryHeight
      });
      this.svg.style('height', svgSummaryHeight + 'px');

      // //wrapText
      // this.wrapText()

      //tooltips
      // this.drawTooltips()

      return Promise.all(cellPromises);
    }

    // wrapText() {
    //   //wrapping text using d3plus
    //   this.byEachCell((cell, column, row, i, j) => {
    //     let id = this.getId(column, row)
    //     let textElem = d3.select(`#${id}`)
    //     let text = this.getText(column, row, i, j)
    //     // textElem.text(text)
    //     let config = {
    //       width: cell.width,
    //       shape: 'square',
    //       align: column.align || this.config.align,
    //       valign: 'top',
    //       // x: cell.x + 10,
    //       x: cell.x,
    //       y: cell.y,
    //       width: cell.width - (column.textXCorrection || 0),
    //       // width: cell.width,
    //       // height: cell.height,
    //       text: {
    //         split: [' '],
    //         value: text
    //       },
    //       // resize: true,
    //     }
    //     textElem.attr('dy', this.config.rowLineHeight)
    //     d3plus
    //       .textwrap()
    //       .config(config)
    //       .container(textElem)
    //       .draw()


    //     //applying text left indent
    //     if(column.textXCorrection) {
    //       let transform = textElem.attr('transform')
    //       textElem.attr('transform', `${transform}translate(${column.textXCorrection})`)
    //     }

    //     //setting beautiful top indent in cell
    //     let firstTspan = d3.select(`#${id}`).selectAll('tspan:first-child')
    //     firstTspan.attr('dy', this.config.rowLineHeight / 1.25)

    //     //centering cell vertically
    //     let wantedVAlign = cell.valign || row.valign || column.valign || this.config.valign
    //     if(['middle', 'center'].includes(wantedVAlign)) {
    //       let tspans = textElem.selectAll('tspan')
    //       let nLinesDiff = row.nLines - tspans[0].length
    //       if(nLinesDiff > 0) {
    //         let yAddition = nLinesDiff / 2 * this.config.rowLineHeight
    //         textElem.attr('y', parseFloat(textElem.attr('y')) + yAddition)
    //       }
    //     }
    //   })
    // }

  }, {
    key: 'clean',
    value: function clean() {
      if (this.tableWrapper != null) {
        this.tableWrapper.remove();
        this.tableWrapper = null;
      }
    }
  }, {
    key: 'drawLoader',
    value: function drawLoader() {
      var viewportWidth = void 0;
      try {
        viewportWidth = this.svg.node().width.baseVal.value;
      } catch (e) {
        return;
      }
      var top = this.config.chartActualHeight + this.config.offsetY;
      var left = viewportWidth / 2 - this.config.loaderSize / 2;

      if (this.loader == null) {
        // this.svg.attrs({
        //   height: this.config.chartActualHeight + 150
        // })
        var g = this.svg.append('g');
        g.attrs({
          transform: 'translate(' + top + ', ' + left + ')'
        });
        // g.html(`
        //   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
        //     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
        //     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
        //   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
        //     C22.32,8.481,24.301,9.057,26.013,10.047z">
        //     <animateTransform attributeType="xml"
        //       attributeName="transform"
        //       type="rotate"
        //       from="0 20 20"
        //       to="360 20 20"
        //       dur="0.5s"
        //       repeatCount="indefinite"/>
        //   </path>
        // `)
        // g.html(`
        //   <foreignObject width="${this.config.loaderSize}" height="${this.config.loaderSize}" >
        //     <img src='../../img/loader.gif' height='${this.config.loaderSize}' width='${this.config.loaderSize}'/>
        //   </foreignObject>
        // `)
        g.html('\n        <foreignObject width="100%" height="' + this.config.loaderSize + '" >\n          <body>\n          <div class="sk-circle" style=\'top:' + top + 'px\'>\n            <div class="sk-circle1 sk-child"></div>\n            <div class="sk-circle2 sk-child"></div>\n            <div class="sk-circle3 sk-child"></div>\n            <div class="sk-circle4 sk-child"></div>\n            <div class="sk-circle5 sk-child"></div>\n            <div class="sk-circle6 sk-child"></div>\n            <div class="sk-circle7 sk-child"></div>\n            <div class="sk-circle8 sk-child"></div>\n            <div class="sk-circle9 sk-child"></div>\n            <div class="sk-circle10 sk-child"></div>\n            <div class="sk-circle11 sk-child"></div>\n            <div class="sk-circle12 sk-child"></div>\n          </div>\n          </body>\n          <style type="text/css" media="screen">\n            .sk-circle {\n              margin: 10px auto;\n              width: 40px;\n              height: 40px;\n              position: relative;\n            }\n            .sk-circle .sk-child {\n              width: 100%;\n              height: 100%;\n              position: absolute;\n              left: 0;\n              top: 0;\n            }\n            .sk-circle .sk-child:before {\n              content: \'\';\n              display: block;\n              margin: 0 auto;\n              width: 15%;\n              height: 15%;\n              background-color: #333;\n              border-radius: 100%;\n              -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                      animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n            }\n            .sk-circle .sk-circle2 {\n              -webkit-transform: rotate(30deg);\n                  -ms-transform: rotate(30deg);\n                      transform: rotate(30deg); }\n            .sk-circle .sk-circle3 {\n              -webkit-transform: rotate(60deg);\n                  -ms-transform: rotate(60deg);\n                      transform: rotate(60deg); }\n            .sk-circle .sk-circle4 {\n              -webkit-transform: rotate(90deg);\n                  -ms-transform: rotate(90deg);\n                      transform: rotate(90deg); }\n            .sk-circle .sk-circle5 {\n              -webkit-transform: rotate(120deg);\n                  -ms-transform: rotate(120deg);\n                      transform: rotate(120deg); }\n            .sk-circle .sk-circle6 {\n              -webkit-transform: rotate(150deg);\n                  -ms-transform: rotate(150deg);\n                      transform: rotate(150deg); }\n            .sk-circle .sk-circle7 {\n              -webkit-transform: rotate(180deg);\n                  -ms-transform: rotate(180deg);\n                      transform: rotate(180deg); }\n            .sk-circle .sk-circle8 {\n              -webkit-transform: rotate(210deg);\n                  -ms-transform: rotate(210deg);\n                      transform: rotate(210deg); }\n            .sk-circle .sk-circle9 {\n              -webkit-transform: rotate(240deg);\n                  -ms-transform: rotate(240deg);\n                      transform: rotate(240deg); }\n            .sk-circle .sk-circle10 {\n              -webkit-transform: rotate(270deg);\n                  -ms-transform: rotate(270deg);\n                      transform: rotate(270deg); }\n            .sk-circle .sk-circle11 {\n              -webkit-transform: rotate(300deg);\n                  -ms-transform: rotate(300deg);\n                      transform: rotate(300deg); }\n            .sk-circle .sk-circle12 {\n              -webkit-transform: rotate(330deg);\n                  -ms-transform: rotate(330deg);\n                      transform: rotate(330deg); }\n            .sk-circle .sk-circle2:before {\n              -webkit-animation-delay: -1.1s;\n                      animation-delay: -1.1s; }\n            .sk-circle .sk-circle3:before {\n              -webkit-animation-delay: -1s;\n                      animation-delay: -1s; }\n            .sk-circle .sk-circle4:before {\n              -webkit-animation-delay: -0.9s;\n                      animation-delay: -0.9s; }\n            .sk-circle .sk-circle5:before {\n              -webkit-animation-delay: -0.8s;\n                      animation-delay: -0.8s; }\n            .sk-circle .sk-circle6:before {\n              -webkit-animation-delay: -0.7s;\n                      animation-delay: -0.7s; }\n            .sk-circle .sk-circle7:before {\n              -webkit-animation-delay: -0.6s;\n                      animation-delay: -0.6s; }\n            .sk-circle .sk-circle8:before {\n              -webkit-animation-delay: -0.5s;\n                      animation-delay: -0.5s; }\n            .sk-circle .sk-circle9:before {\n              -webkit-animation-delay: -0.4s;\n                      animation-delay: -0.4s; }\n            .sk-circle .sk-circle10:before {\n              -webkit-animation-delay: -0.3s;\n                      animation-delay: -0.3s; }\n            .sk-circle .sk-circle11:before {\n              -webkit-animation-delay: -0.2s;\n                      animation-delay: -0.2s; }\n            .sk-circle .sk-circle12:before {\n              -webkit-animation-delay: -0.1s;\n                      animation-delay: -0.1s; }\n\n            @-webkit-keyframes sk-circleBounceDelay {\n              0%, 80%, 100% {\n                -webkit-transform: scale(0);\n                        transform: scale(0);\n              } 40% {\n                -webkit-transform: scale(1);\n                        transform: scale(1);\n              }\n            }\n\n            @keyframes sk-circleBounceDelay {\n              0%, 80%, 100% {\n                -webkit-transform: scale(0);\n                        transform: scale(0);\n              } 40% {\n                -webkit-transform: scale(1);\n                        transform: scale(1);\n              }\n            }\n          </style>\n        </foreignObject>\n      ');
        this.loader = g;
      }
    }
  }, {
    key: 'cleanLoader',
    value: function cleanLoader() {
      if (this.loader != null) {
        this.loader.remove();
        this.loader = null;
      }
    }
  }, {
    key: 'build',
    value: function build() {
      var _this17 = this;

      this.drawLoader();
      this.clean();
      this.isRendering++;
      this.render().then(function () {
        _this17.isRendering--;
        _this17.isDrawing++;
        _this17.draw().then(function () {
          _this17.isDrawing--;
          if (_this17.isDrawing == 0 && _this17.isRendering == 0) {
            _this17.cleanLoader();
          }
        });
      });
    }
  }]);

  return _class5;
}();

var LabelsModule = function (_nv$Module3) {
  _inherits(LabelsModule, _nv$Module3);

  function LabelsModule(config, instance, options) {
    _classCallCheck(this, LabelsModule);

    return _possibleConstructorReturn(this, (LabelsModule.__proto__ || Object.getPrototypeOf(LabelsModule)).call(this, config, instance, options, {
      isAvg: false,
      data: [],
      minTopMargin: 0,
      minLeftMargin: 0,
      formatString: null,
      labels: {
        offset: 20,
        fontSize: 18,
        minFontSize: 6,
        fontFamily: 'monospace',
        fontWeight: 'normal',
        fontOffsetCorrectionMultiplier: 15 / 50,
        borderWidth: 2,
        rectPaddingX: 5,
        rectPaddingY: 5,
        maxLineCount: 1,
        doWrap: true
      },
      header: {
        enabled: true,
        text: 'Point Change',
        textField: null,
        height: 60,
        width: 100,
        fontSize: 18,
        fontFamily: 'monospace',
        fontWeight: 'normal',
        nMaxLineCount: 1,
        textAnchor: 'end',
        verticalAlign: 'middle'
      },
      colors: {
        header: '#999999',
        labelBorder: '#CCCCCC',
        labelFont: 'black'
      }
    }));
  }

  _createClass(LabelsModule, [{
    key: 'format',
    value: function format(value) {
      // return this.instance.extendedChart.yAxis.tickFormat()(value)

      // const parsedValue = parseFloat(value)
      // return isNaN(parsedValue) ? value : d3.format(',.0f')(parsedValue)

      return this.instance.utils.conditionalFormat.fn(value, this.options.formatString);
    }
  }, {
    key: '_prepareOptions',
    value: function _prepareOptions() {}
  }, {
    key: 'prepare',
    value: function prepare() {
      this.svg = d3.select(this.instance.extendedChart.container);
      this._prepareOptions();
    }
  }, {
    key: 'process',
    value: function process() {
      this.groupLabelsElement = this.svg.select('g.nv-barsWrap').append('g').attrs({ class: 'labels-wrap' });
      this.appendedElements.push(this.groupLabelsElement);

      var promises = [];

      if (this.options.isAvg) {
        promises.push(Promise.resolve(this._processForAvg()));
      } else {
        promises.push(Promise.resolve(this._processForPointChange()));
      }
      if (this.options.header.enabled) {
        promises.push(this._drawHeader());
      }

      if (!this.SKIPNEXTUPDATE) {
        this.scheduleAndSkipNextUpdate();
      }

      return Promise.all(promises);
    }
  }, {
    key: '_drawHeader',
    value: function _drawHeader() {
      var _this19 = this;

      //draw header
      var headerY = void 0;
      var headerX = void 0;
      switch (this.instance.config.name) {
        case 'multiBarChartExt':
          headerY = this.options.header.y;
          headerX = -this.options.header.width;
          break;
        case 'multiBarHorizontalChartExt':
          headerY = -this.options.header.height;
          headerX = this._getContainerWidth() + this.options.labels.offset + this.options.labels.rectPaddingX + this.maxLabelTextWidth / 2 - this.options.header.width / 2;
          break;
      }
      var header = this.groupLabelsElement.append('g');
      this.appendedElements.push(header);

      var text = this._calcHeaderText();
      var promise = new Promise(function (resolve, reject) {
        _this19.instance.utils.textWrap.fn({
          text: text,
          targetElement: header,
          options: {
            containerX: headerX,
            containerY: headerY,
            width: _this19.options.header.width,
            height: _this19.options.header.height,
            fontSize: _this19.options.header.fontSize,
            fontFamily: _this19.options.header.fontFamily,
            fontWeight: _this19.options.header.fontWeight,
            fontColor: _this19.options.colors.header,
            lineHeight: _this19.options.header.fontSize,
            maxLineCount: _this19.options.header.nMaxLineCount,
            textAnchor: _this19.options.header.textAnchor,
            verticalAlign: _this19.options.header.verticalAlign,
            class: 'labels-header',
            tooltip: true,
            title: false,
            renderCallback: function renderCallback() {
              resolve();
            }
          }
        });
      });
      return promise;
    }
  }, {
    key: '_calcHeaderText',
    value: function _calcHeaderText() {
      if (typeof this.options.header.textField === 'string') {
        var text = this.options.data[0][this.options.header.textField];
        if (text != null) return text;
      }
      if (Function.isFunction(this.options.header.text)) {
        return this.options.header.text(this.options.data[0]);
      }
      if (typeof this.options.header.text === 'string') {
        return this.options.header.text;
      }
      return '';
    }
  }]);

  return LabelsModule;
}(nv.Module);

var TopLabelsModule = function (_LabelsModule) {
  _inherits(TopLabelsModule, _LabelsModule);

  function TopLabelsModule() {
    var _ref;

    _classCallCheck(this, TopLabelsModule);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    //additional defaults
    var _this20 = _possibleConstructorReturn(this, (_ref = TopLabelsModule.__proto__ || Object.getPrototypeOf(TopLabelsModule)).call.apply(_ref, [this, {
      name: 'top-labels',
      supportedCharts: ['multiBarChartExt']
    }].concat(args)));

    Object.defaultsDeep(_this20.options, {
      labels: {
        topPadding: 10
      }
    });

    //calculations
    var labelsHeight = Math.max(_this20.options.labels.fontSize + 1, _this20.options.labels.fontSize * _this20.options.labels.maxLineCount + 2 * _this20.options.labels.rectPaddingY);
    var headerHeight = _this20.options.header.fontSize * _this20.options.header.nMaxLineCount + 1;
    var headerY = -_this20.options.labels.offset - labelsHeight / 2 - headerHeight / 2;
    Object.mergeDeep(_this20.options, {
      labels: {
        height: labelsHeight
      },
      header: {
        y: headerY,
        height: headerHeight
      },
      minTopMargin: Math.max(_this20.options.minTopMargin, labelsHeight + _this20.options.labels.offset + _this20.options.labels.topPadding, Math.abs(headerY)),
      minLeftMargin: Math.max(_this20.options.minLeftMargin, _this20.options.header.width)
    });
    return _this20;
  }

  _createClass(TopLabelsModule, [{
    key: '_processForAvg',
    value: function _processForAvg() {
      var _this21 = this;

      //prepare data to be displayed
      var data = this.options.data;
      var labelsData = [];
      data[0].values.forEach(function (item, i) {
        var columnVal = _this21.instance.extendedChart.y()(data[0].values[i]);
        labelsData.push([columnVal]);
      });

      //find start and end bars of each group
      var nvGroups = this.svg.selectAll('g.nv-group').filter(function (d, i) {
        return this.childNodes.length > 0;
      });
      var startBars = nvGroups.filter(function (d, i) {
        return i === 0;
      }).selectAll('.nv-bar')[0].filter(function (bar) {
        return d3.select(bar).style('display') !== 'none';
      });
      var endBars = nvGroups.filter(function (d, i) {
        return i === nvGroups[0].length - 1;
      }).selectAll('.nv-bar')[0].filter(function (bar) {
        return d3.select(bar).style('display') !== 'none';
      });

      //draw labels
      for (var iGroup = 0; iGroup < labelsData.length; iGroup++) {
        for (var iBar = 0; iBar < labelsData[iGroup].length; iBar++) {
          var startBar = startBars[iGroup];
          var endBar = endBars[iGroup];
          var startBard3 = d3.select(startBar);

          var groupWidth = endBar.getBoundingClientRect().right - startBar.getBoundingClientRect().left;
          var groupX = d3.transform(startBard3.attr("transform")).translate[0] + parseFloat(startBard3.attr('x'));
          var y = -this.options.labels.offset - this.options.labels.rectPaddingY;

          var formatted = this.format(labelsData[iGroup][iBar]);

          var idTextElem = this.instance.id + '-' + iGroup + '-' + iBar + '-label-text';
          if (this.options.labels.doWrap) {
            this._wrapLabels({
              x: groupX,
              y: y - this.options.labels.fontSize,
              width: groupWidth,
              formatted: formatted,
              idTextElem: idTextElem
            });
          } else {
            var textElem = this.groupLabelsElement.append('text');
            textElem.attrs({ y: y }).styles({
              // fill: this.options.colors.labelFont,
              fill: formatted.color,
              'font-size': this.options.labels.fontSize,
              'font-family': this.options.labels.fontFamily
            }).text(formatted.text);

            var bbox = textElem.node().getBBox();
            var x = d3.transform(d3.select(startBar).attr("transform")).translate[0] + parseFloat(d3.select(startBar).attr('x')) + groupWidth / 2 - bbox.width / 2;
            textElem.attrs({ x: x });

            this._drawBorders(this.groupLabelsElement, textElem, groupWidth);
          }
        }
      }
    }
  }, {
    key: '_processForPointChange',
    value: function _processForPointChange() {
      var _this22 = this;

      //prepare labels data
      var chartData = this.instance.selection.datum();
      var data = this.options.data;
      var labelsData = [];
      data[0].values.forEach(function (item, i) {
        var labelsDataEntry = [];
        for (var iD = 0; iD < data.length; iD++) {
          if (chartData[iD].disabled) {
            continue;
          }
          var columnVal = _this22.instance.extendedChart.y()(data[iD].values[i]);
          labelsDataEntry.push(columnVal);
          if (_this22.instance.extendedChart.stacked()) {
            break;
          }
        }
        labelsData.push(labelsDataEntry);
      });

      var nvEnabledGroups = this.svg.selectAll('g.nv-group').filter(function (d, i) {
        return this.childNodes.length > 0;
      });

      var _loop = function _loop(iGroup) {
        var _loop2 = function _loop2(iBar) {
          var bar = nvEnabledGroups.filter(function (d, i) {
            return i === iBar;
          }).selectAll('.nv-bar')[0].filter(function (bar) {
            return d3.select(bar).style('display') !== 'none';
          }).filter(function (b, i) {
            return i === iGroup;
          })[0];
          var bard3 = d3.select(bar);

          var barWidth = bar.getBoundingClientRect().right - bar.getBoundingClientRect().left;
          var barX = d3.transform(bard3.attr("transform")).translate[0] + parseFloat(bard3.attr('x'));
          var y = -_this22.options.labels.offset - _this22.options.labels.rectPaddingY;

          var formatted = _this22.format(labelsData[iGroup][iBar]);

          var idTextElem = _this22.instance.id + '-' + iGroup + '-' + iBar + '-label-text';
          if (_this22.options.labels.doWrap) {
            _this22._wrapLabels({
              x: barX,
              y: y - _this22.options.labels.fontSize,
              width: barWidth,
              formatted: formatted,
              idTextElem: idTextElem
            });
          } else {
            var textElem = _this22.groupLabelsElement.append('text');
            textElem.attrs({ y: y }).styles({
              fill: formatted.color,
              'font-size': _this22.options.labels.fontSize,
              'font-family': _this22.options.labels.fontFamily
            }).text(formatted.text);

            var bbox = textElem.node().getBBox();
            var x = barX + barWidth / 2 - bbox.width / 2;
            textElem.attrs({ x: x });
            _this22._drawBorders(_this22.groupLabelsElement, textElem, barWidth);
          }
        };

        for (var iBar = 0; iBar < labelsData[iGroup].length; iBar++) {
          _loop2(iBar);
        }
      };

      for (var iGroup = 0; iGroup < labelsData.length; iGroup++) {
        _loop(iGroup);
      }
    }
  }, {
    key: '_wrapLabels',
    value: function _wrapLabels(opts) {
      var _this23 = this;

      var g = this.groupLabelsElement.append('g');
      var wrapOptions = {
        containerX: opts.x,
        containerY: opts.y,
        x: 0,
        y: 0,
        width: opts.width,
        height: this.options.labels.height,
        fontSize: this.options.labels.fontSize,
        fontWeight: this.options.labels.fontWeight,
        textAnchor: 'middle',
        verticalAlign: 'middle',
        lineHeight: this.options.labels.fontSize,
        fontFamily: this.options.labels.fontFamily,
        fontColor: opts.formatted.color,
        maxLineCount: this.options.labels.maxLineCount,
        id: opts.idTextElem,
        renderCallback: function renderCallback(info) {
          _this23._drawBorders(g, info.textElem, opts.width);
        },
        tooltip: true,
        title: false
      };
      this.instance.utils.textWrap.fn({
        text: opts.formatted.text,
        targetElement: g,
        options: wrapOptions
      });
    }
  }, {
    key: '_drawBorders',
    value: function _drawBorders(g, textElem, maxWidth) {
      var bbox = textElem.node().getBBox();
      //calc dimensions
      var wantedWidth = bbox.width + 2 * this.options.labels.rectPaddingX;
      var width = void 0;
      var rectPaddingX = void 0;
      if (wantedWidth > maxWidth) {
        rectPaddingX = Math.max(0, (maxWidth - wantedWidth) / 2);
        width = Math.min(maxWidth, bbox.width + 2 * rectPaddingX);
        if (bbox.width > width) {
          bbox.x += (bbox.width - width) / 2;
          bbox.width = width;
        }
      } else {
        width = wantedWidth;
        rectPaddingX = this.options.labels.rectPaddingX;
      }
      var height = this.options.labels.height;
      var x = bbox.x - rectPaddingX;
      var y = bbox.y - this.options.labels.rectPaddingY + (bbox.height - this.options.labels.fontSize) * (1 - this.options.labels.fontOffsetCorrectionMultiplier);
      //add rect as border
      g.append("rect").attrs({
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: this.options.colors.labelBorder,
        'stroke-width': this.options.labels.borderWidth,
        fill: 'none'
      });
      //add clip-path to clip anything outside rect
      var idClipPath = textElem.attr('id') + '-clip-path';
      var elemClipPath = g.append('clipPath').attrs({
        id: idClipPath
      });
      elemClipPath.append('rect').attrs({
        x: x,
        y: y,
        width: width,
        height: height
      });
      textElem.attrs({
        'clip-path': 'url(#' + idClipPath + ')'
      });
    }
  }]);

  return TopLabelsModule;
}(LabelsModule);

nv.Module.register(TopLabelsModule);

var HorizontalLabelsModule = function (_LabelsModule2) {
  _inherits(HorizontalLabelsModule, _LabelsModule2);

  function HorizontalLabelsModule() {
    var _ref2;

    _classCallCheck(this, HorizontalLabelsModule);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this24 = _possibleConstructorReturn(this, (_ref2 = HorizontalLabelsModule.__proto__ || Object.getPrototypeOf(HorizontalLabelsModule)).call.apply(_ref2, [this, {
      name: 'horizontal-labels',
      supportedCharts: ['multiBarHorizontalChartExt']
    }].concat(args)));

    Object.mergeDeep(_this24.options, {
      header: {
        textAnchor: 'middle'
      }
    });
    return _this24;
  }

  _createClass(HorizontalLabelsModule, [{
    key: '_getContainerWidth',
    value: function _getContainerWidth() {
      return parseFloat(this.svg.select('.nv-y .nv-axis path.domain').node().getBBox().width);
    }
  }, {
    key: 'process',
    value: function process() {
      var _this25 = this;

      var resultingPromise = _get(HorizontalLabelsModule.prototype.__proto__ || Object.getPrototypeOf(HorizontalLabelsModule.prototype), 'process', this).call(this);

      //very dirty hack because path.domain of yaxis doesnt draw syncronously, but calculations must be based on that
      resultingPromise.then(function () {
        var i = 0;
        var interval = setInterval(function () {
          _this25.__preprocess();
          _get(HorizontalLabelsModule.prototype.__proto__ || Object.getPrototypeOf(HorizontalLabelsModule.prototype), 'process', _this25).call(_this25);
          if (++i == 20) {
            clearInterval(interval);
          }
        }, 100);
      });

      return resultingPromise;
    }
  }, {
    key: '_prepareOptions',
    value: function _prepareOptions() {
      if (this.options.header.enabled) {
        this.options.minTopMargin = this.options.header.height;
      }
    }
  }, {
    key: '_calcAdjustedSizes',
    value: function _calcAdjustedSizes(barHeight) {
      var wantedYPadding = (barHeight - this.options.labels.fontSize) / 2;

      var fontSize = void 0;
      var padding = void 0;

      if (wantedYPadding <= 0) {
        fontSize = Math.max(barHeight, this.options.labels.minFontSize);
        padding = 0;
      } else {
        fontSize = this.options.labels.fontSize;
        padding = wantedYPadding;
      }

      return { fontSize: fontSize, padding: padding };
    }
  }, {
    key: '_adjustTextElements',
    value: function _adjustTextElements(textElems) {
      //calc max width of labels
      var maxWidth = 0;
      for (var i = 0; i < textElems.length; i++) {
        var textElem = textElems[i].elem;
        var bbox = textElem.getBBox();
        if (maxWidth < bbox.width) {
          maxWidth = bbox.width;
        }
      }
      this.maxLabelTextWidth = maxWidth;

      //set x to texts, draw rects
      for (var i = 0; i < textElems.length; i++) {
        var _textElem = textElems[i];

        var _bbox = _textElem.elem.getBBox();
        var width = _bbox.width;
        var correction = (maxWidth - width) / 2;
        var rectPaddingX = this.options.labels.rectPaddingX + correction;
        var rectPaddingY = Math.min(this.options.labels.rectPaddingY, _textElem.adjustedSizes.padding);
        var x = this._getContainerWidth() + this.options.labels.offset + rectPaddingX;

        d3.select(_textElem.elem).attrs({ x: x });

        this.groupLabelsElement.append('rect').attrs({
          x: x - rectPaddingX,
          y: _bbox.y - rectPaddingY + (_bbox.height - _textElem.adjustedSizes.fontSize) * (1 - this.options.labels.fontOffsetCorrectionMultiplier),
          width: width + 2 * rectPaddingX,
          height: _textElem.adjustedSizes.fontSize + 2 * rectPaddingY,
          stroke: this.options.colors.labelBorder,
          'stroke-width': this.options.labels.borderWidth,
          fill: 'none'
        });
      }

      this.options.minRightMargin = this.maxLabelTextWidth + this.options.labels.offset + 2 * this.options.labels.rectPaddingX;
    }
  }, {
    key: '_processForAvg',
    value: function _processForAvg() {
      var _this26 = this;

      //prepare labels data
      var data = this.options.data;
      var labelsData = [];
      data[0].values.forEach(function (item, i) {
        var columnVal = _this26.instance.extendedChart.y()(data[0].values[i]);
        labelsData.push(columnVal);
      });

      //draw labels
      var nvEnabledGroups = this.svg.selectAll('g.nv-group').filter(function (d, i) {
        return this.childNodes.length > 0;
      });
      var startBars = nvEnabledGroups.filter(function (d, i) {
        return i === 0;
      }).selectAll('.nv-bar')[0].filter(function (bar) {
        return d3.select(bar).style('display') !== 'none';
      });
      var endBars = nvEnabledGroups.filter(function (d, i) {
        return i === nvEnabledGroups[0].length - 1;
      }).selectAll('.nv-bar')[0].filter(function (bar) {
        return d3.select(bar).style('display') !== 'none';
      });

      var textElems = [];
      for (var i = 0; i < startBars.length; i++) {
        var startBar = startBars[i];
        var endBar = endBars[i];

        var groupHeight = endBar.getBoundingClientRect().bottom - startBar.getBoundingClientRect().top;
        var adjustedSizes = this._calcAdjustedSizes(groupHeight);
        var _y = d3.transform(d3.select(startBar).attr('transform')).translate[1] + groupHeight / 2 + adjustedSizes.fontSize * this.options.labels.fontOffsetCorrectionMultiplier;

        var _formatted = this.format(labelsData[i]);
        var textElem = this.groupLabelsElement.append('text');
        textElem.attrs({
          y: _y
        }).styles({
          // fill: this.options.colors.labelFont,
          fill: _formatted.color,
          'font-size': adjustedSizes.fontSize,
          'font-family': this.options.labels.fontFamily
        }).text(_formatted.text);
        textElems.push({
          elem: textElem.node(),
          adjustedSizes: adjustedSizes,
          text: labelsData[i]
        });
      }

      this._adjustTextElements(textElems);
    }
  }, {
    key: '_processForPointChange',
    value: function _processForPointChange() {
      var _this27 = this;

      //prepare labels data
      var chartData = this.instance.selection.datum();
      var data = this.options.data;
      var labelsData = [];
      data[0].values.forEach(function (item, i) {
        var labelsDataEntry = [];
        for (var iD = 0; iD < data.length; iD++) {
          if (chartData[iD].disabled) {
            continue;
          }
          var columnVal = _this27.instance.extendedChart.y()(data[iD].values[i]);
          labelsDataEntry.push(columnVal);
          if (_this27.instance.extendedChart.stacked()) {
            break;
          }
        }
        labelsData.push(labelsDataEntry);
      });

      //draw labels
      var nvEnabledGroups = this.svg.selectAll('g.nv-group').filter(function (d, i) {
        return this.childNodes.length > 0;
      });
      var textElems = [];

      var _loop3 = function _loop3(iGroup) {
        var _loop4 = function _loop4(iBar) {
          var bar = nvEnabledGroups.filter(function (d, i) {
            return i === iBar;
          }).selectAll('.nv-bar')[0].filter(function (bar) {
            return d3.select(bar).style('display') !== 'none';
          }).filter(function (b, i) {
            return i === iGroup;
          })[0];

          var barHeight = bar.getBoundingClientRect().bottom - bar.getBoundingClientRect().top;
          var adjustedSizes = _this27._calcAdjustedSizes(barHeight);
          var y = d3.transform(d3.select(bar).attr('transform')).translate[1] + barHeight / 2 + adjustedSizes.fontSize * _this27.options.labels.fontOffsetCorrectionMultiplier;

          var formatted = _this27.format(labelsData[iGroup][iBar]);
          var textElem = _this27.groupLabelsElement.append('text');
          textElem.attrs({
            y: y
          }).styles({
            // fill: this.options.colors.labelFont,
            fill: formatted.color,
            'font-size': adjustedSizes.fontSize,
            'font-family': _this27.options.labels.fontFamily
          }).text(formatted.text);
          textElems.push({
            elem: textElem.node(),
            adjustedSizes: adjustedSizes,
            text: formatted.text
          });
        };

        for (var iBar = 0; iBar < labelsData[iGroup].length; iBar++) {
          _loop4(iBar);
        }
      };

      for (var iGroup = 0; iGroup < labelsData.length; iGroup++) {
        _loop3(iGroup);
      }

      this._adjustTextElements(textElems);
    }
  }, {
    key: '_wrapLabels',
    value: function _wrapLabels(opts) {
      var _this28 = this;

      var g = this.groupLabelsElement.append('g');
      var wrapOptions = {
        containerX: opts.x,
        containerY: opts.y,
        x: 0,
        y: 0,
        width: opts.width,
        height: this.options.labels.fontSize + 1,
        fontSize: this.options.labels.fontSize,
        fontWeight: this.options.labels.fontWeight,
        textAnchor: 'middle',
        verticalAlign: 'middle',
        lineHeight: this.options.labels.fontSize,
        fontFamily: this.options.labels.fontFamily,
        fontColor: opts.formatted.color,
        maxLineCount: 1,
        id: opts.idTextElem,
        renderCallback: function renderCallback(info) {
          _this28._drawBorders(g, info.textElem, opts.width);
        },
        tooltip: true,
        title: false
      };
      this.instance.utils.textWrap.fn({
        text: opts.formatted.text,
        targetElement: g,
        options: wrapOptions
      });
    }
  }]);

  return HorizontalLabelsModule;
}(LabelsModule);

nv.Module.register(HorizontalLabelsModule);

var FormatModule = function (_nv$Module4) {
  _inherits(FormatModule, _nv$Module4);

  function FormatModule(instance, options) {
    _classCallCheck(this, FormatModule);

    return _possibleConstructorReturn(this, (FormatModule.__proto__ || Object.getPrototypeOf(FormatModule)).call(this, {
      name: 'format',
      supportedCharts: ['*']
    }, instance, options, {
      formatString: ',.2f',
      colors: {
        positive: '#07b307',
        negative: '#d60000',
        other: '#666666'
      }
    }));
  }

  _createClass(FormatModule, [{
    key: '__format',
    value: function __format(smth, formatString) {
      if (!formatString) formatString = this.options.formatString;
      var text = void 0;
      var color = void 0;
      switch (true) {
        case Number.isNumber(smth):
          var number = Number.parseNumber(smth);
          text = d3.format(formatString)(number);
          color = number > 0 ? this.options.colors.positive : number < 0 ? this.options.colors.negative : this.options.colors.other;
          break;
        case String.isString(smth):
          text = smth;
          color = 'black';
          break;
        default:
          text = JSON.stringify(smth);
          color = 'black';
      }
      return { text: text, color: color };
    }
  }, {
    key: 'beforeInstancePrepareData',
    value: function beforeInstancePrepareData() {
      var _this30 = this;

      this.instance.utils.conditionalFormat.replace(this.__format.bind(this));

      if (this.instance.extendedChart.yAxis != null) {
        var originalYAxisTickFormat = this.instance.extendedChart.yAxis.tickFormat();
        this.instance.extendedChart.yAxis.tickFormat(function (d) {
          var smth = originalYAxisTickFormat(d);
          return _this30.instance.utils.conditionalFormat.fn(smth).text;
        });
      }

      if (this.instance.extendedChart.yAxis1 != null) {
        var _originalYAxisTickFormat = this.instance.extendedChart.yAxis1.tickFormat();
        this.instance.extendedChart.yAxis1.tickFormat(function (d) {
          var smth = _originalYAxisTickFormat(d);
          return _this30.instance.utils.conditionalFormat.fn(smth).text;
        });
      }

      if (this.instance.extendedChart.yAxis2 != null) {
        var _originalYAxisTickFormat2 = this.instance.extendedChart.yAxis2.tickFormat();
        this.instance.extendedChart.yAxis2.tickFormat(function (d) {
          var smth = _originalYAxisTickFormat2(d);
          return _this30.instance.utils.conditionalFormat.fn(smth).text;
        });
      }
    }
  }]);

  return FormatModule;
}(nv.Module);

nv.Module.register(FormatModule);

var NumberFormatModule = function (_nv$Module5) {
  _inherits(NumberFormatModule, _nv$Module5);

  function NumberFormatModule(instance, options) {
    _classCallCheck(this, NumberFormatModule);

    return _possibleConstructorReturn(this, (NumberFormatModule.__proto__ || Object.getPrototypeOf(NumberFormatModule)).call(this, {
      name: 'numberFormat',
      supportedCharts: ['*']
    }, instance, options, {
      formatString: ',.1f',
      colors: {
        positive: '#07b307',
        negative: '#d60000',
        other: '#666666'
      }
    }));
  }

  _createClass(NumberFormatModule, [{
    key: '__format',
    value: function __format(smth, formatString) {
      if (!formatString) formatString = this.options.formatString;
      var text = void 0;
      var color = void 0;
      switch (true) {
        case Number.isNumber(smth):
          var number = Number.parseNumber(smth);
          text = d3.format(formatString)(number);
          color = number > 0 ? this.options.colors.positive : number < 0 ? this.options.colors.negative : this.options.colors.other;
          break;
        case String.isString(smth):
          text = smth;
          color = 'black';
          break;
        default:
          text = JSON.stringify(smth);
          color = 'black';
      }
      return { text: text, color: color };
    }
  }, {
    key: 'beforeInstancePrepareData',
    value: function beforeInstancePrepareData() {
      var _this32 = this;

      this.instance.utils.conditionalFormat.replace(this.__format.bind(this));

      if (this.instance.extendedChart.yAxis != null) {
        var originalYAxisTickFormat = this.instance.extendedChart.yAxis.tickFormat();
        this.instance.extendedChart.yAxis.tickFormat(function (d) {
          var smth = originalYAxisTickFormat(d);
          return _this32.instance.utils.conditionalFormat.fn(smth).text;
        });
      }

      if (this.instance.extendedChart.yAxis1 != null) {
        var _originalYAxisTickFormat3 = this.instance.extendedChart.yAxis1.tickFormat();
        this.instance.extendedChart.yAxis1.tickFormat(function (d) {
          var smth = _originalYAxisTickFormat3(d);
          return _this32.instance.utils.conditionalFormat.fn(smth).text;
        });
      }

      if (this.instance.extendedChart.yAxis2 != null) {
        var _originalYAxisTickFormat4 = this.instance.extendedChart.yAxis2.tickFormat();
        this.instance.extendedChart.yAxis2.tickFormat(function (d) {
          var smth = _originalYAxisTickFormat4(d);
          return _this32.instance.utils.conditionalFormat.fn(smth).text;
        });
      }
    }
  }]);

  return NumberFormatModule;
}(nv.Module);

nv.Module.register(NumberFormatModule);

var WrapperModule = function (_nv$Module6) {
  _inherits(WrapperModule, _nv$Module6);

  function WrapperModule(instance, options) {
    var _this33;

    _classCallCheck(this, WrapperModule);

    return _this33 = _possibleConstructorReturn(this, (WrapperModule.__proto__ || Object.getPrototypeOf(WrapperModule)).call(this, {
      name: 'wrapper',
      // supportedCharts: ['*']
      supportedCharts: ['multiBarChartExt', 'multiBarHorizontalChartExt', 'waterfall']
    }, instance, options, {
      tooltipMaxWidth: 800,
      tooltipMinWidth: 100,
      tooltipAutoWidth: true,
      tooltipContentGenerator: function tooltipContentGenerator(d) {
        var tooltipWidth = void 0;
        if (_this33.options.tooltipAutoWidth) {
          var tooltipPossibleLeftWidth = d3.event.clientX - _this33.tooltip.distance() - 50;
          var tooltipPossibleRightWidth = window.innerWidth - d3.event.clientX - _this33.tooltip.distance() - 50;
          tooltipWidth = Math.max(tooltipPossibleLeftWidth, tooltipPossibleRightWidth);
          tooltipWidth = Math.max(tooltipWidth, _this33.options.tooltipMinWidth);
          tooltipWidth = Math.min(tooltipWidth, _this33.options.tooltipMaxWidth);
        } else {
          tooltipWidth = _this33.options.tooltipMaxWidth;
        }
        return '\n          <div\n            style=\'\n              padding: 5px;\n              max-width: ' + tooltipWidth + 'px;\n              white-space: normal;\n              text-align: center;\n              word-wrap: break-word;\n            \'\n          >\n            ' + d.value + '\n          </div>\n        ';
      },
      relativeAdjustmentGap: 5,
      enableAutopositioning: true,
      common: {
        space: 40,
        distance: 5,
        fontSize: 12,
        valign: 'middle',
        halign: 'middle',
        maxLineCount: 3,
        padding: 5,
        enableTooltips: true,
        isWordBreak: false,
        doClipPath: false,
        dontWrapNumbers: false,
        tooltip: true,
        title: true
      },
      xTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.xAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.xAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      yTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.yAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.yAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      xMaxMinTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.xAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.xAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      yMaxMinTicks: {
        enabled: true,
        space: null,
        distance: instance != null ? instance.extendedChart.yAxis.tickPadding() : null,
        fontSize: instance != null ? instance.extendedChart.yAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      xLabel: {
        enabled: true,
        space: null,
        width: null,
        height: null,
        distance: instance != null ? instance.extendedChart.xAxis.axisLabelDistance() : null,
        fontSize: instance != null ? instance.extendedChart.xAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      yLabel: {
        enabled: true,
        space: null,
        width: null,
        height: null,
        distance: instance != null ? instance.extendedChart.yAxis.axisLabelDistance() : null,
        fontSize: instance != null ? instance.extendedChart.yAxis.fontSize() : null,
        fontWeight: null,
        fontFamily: null,
        fontColor: null,
        valign: null,
        halign: null,
        maxLineCount: null,
        padding: 5,
        enableTooltips: false,
        isWordBreak: null,
        doClipPath: null,
        dontWrapNumbers: null
      },
      additionalAxesOrientationTickLabelOptions: {
        left: {
          halign: 'end'
        },
        bottom: {
          valign: 'top'
        },
        right: {
          halign: 'start'
        },
        top: {
          valign: 'bottom'
        }
      },
      additionalAxesOrientationLabelOptions: {
        left: {
          valign: 'bottom'
        },
        bottom: {
          valign: 'top'
        },
        right: {
          valign: 'bottom'
        },
        top: {
          valign: 'bottom'
        }
      }
    }));
  }

  _createClass(WrapperModule, [{
    key: '_initTooltip',
    value: function _initTooltip() {
      var _this34 = this;

      this.tooltip = nv.models.tooltip();
      this.tooltip.duration(0).contentGenerator(function (d) {
        return _this34.options.tooltipContentGenerator(d);
      }).position(function () {
        return {
          left: d3.event.clientX,
          top: d3.event.clientY
        };
      });
    }
  }, {
    key: '_showTooltip',
    value: function _showTooltip(data) {
      this.tooltip.data(data).hidden(false)();
    }
  }, {
    key: '_hideTooltip',
    value: function _hideTooltip() {
      this.tooltip.hidden(true);
    }
  }, {
    key: '_revokeTooltip',
    value: function _revokeTooltip() {
      this.tooltip();
    }
  }, {
    key: 'beforeInstancePrepareData',
    value: function beforeInstancePrepareData() {
      var _this35 = this;

      this._initTooltip();

      var originalTextWrapFn = this.instance.utils.textWrap.fn;
      /*
       * Input parameters - one parameter, Object with next fields:
       * {
       *  text: string.
       *  targetElement: SVGElement,
       *  options: {
       *    tooltip: boolean,
       *    title: boolean,   //title will be forced to false if tooltip is true
       *    ...others same as d3CustomUtils wrapping function
       *  }
       * }
       */
      this.instance.utils.textWrap.replace(function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var originalResult = originalTextWrapFn.apply(undefined, args);

        if (args[0] != null && args[0].options != null && args[0].options.tooltip) {
          args[0].targetElement.on('mouseover', function (e) {
            _this35._showTooltip({
              value: args[0].text,
              series: []
            });
          });

          args[0].targetElement.on('mouseout', function (e) {
            _this35._hideTooltip();
          });

          args[0].targetElement.on('mousemove', function (e) {
            _this35._revokeTooltip();
          });
          args[0].options.title = false;
        }

        return originalResult;
      });
    }

    // beforeInstanceUpdate() {
    //   this.process()
    // }

  }, {
    key: '_preserveOriginalMargin',
    value: function _preserveOriginalMargin() {
      this.originalMargin = this.instance.extendedChart.margin();
    }
  }, {
    key: 'prepare',
    value: function prepare() {
      this.svg = d3.select(this.instance.extendedChart.container);
      this._preserveOriginalMargin();
    }
  }, {
    key: 'process',
    value: function process() {
      var _this36 = this;

      var xOrientation = this.instance.extendedChart.xAxis.orient();
      var yOrientation = this.instance.extendedChart.yAxis.orient();

      var xAxisPromise = Promise.all([this._drawAxisTickLabels(this.svg.selectAll('.nv-x .tick'), this.options.xTicks, xOrientation), this._drawAxisTickLabels(this.svg.selectAll('.nv-x .nv-axisMaxMin'), this.options.xMaxMinTicks, xOrientation), this._drawAxisLabel(this.svg.select('.nv-x .nv-axislabel'), this.options.xLabel, xOrientation)]);
      if (this.options.enableAutopositioning) {
        xAxisPromise = xAxisPromise.then(function () {
          _this36._autoPosition_ticks('x', xOrientation);
          _this36._autoPosition_labels('x', xOrientation);
        });
      }

      var yAxisPromise = Promise.all([this._drawAxisTickLabels(this.svg.selectAll('.nv-y .tick'), this.options.yTicks, yOrientation), this._drawAxisTickLabels(this.svg.selectAll('.nv-y .nv-axisMaxMin'), this.options.yMaxMinTicks, yOrientation), this._drawAxisLabel(this.svg.select('.nv-y .nv-axislabel'), this.options.yLabel, yOrientation)]);
      if (this.options.enableAutopositioning) {
        yAxisPromise = yAxisPromise.then(function () {
          _this36._autoPosition_ticks('y', yOrientation);
          _this36._autoPosition_labels('y', yOrientation);
        });
      }

      var resultingPromise = Promise.all([xAxisPromise, yAxisPromise]);

      if (this.options.enableAutopositioning) {
        resultingPromise = resultingPromise.then(function () {
          if (_this36.SKIP_CHECK_NEXT_UPDATE) {
            _this36.SKIP_CHECK_NEXT_UPDATE = false;
            return true;
          }
          _this36.SKIP_CHECK_NEXT_UPDATE = true;
          _this36.instance.scheduleChartReupdateAfterModulesChainFinished();
          return true;
        });
      }

      return resultingPromise;
    }
  }, {
    key: '_autoPosition_ticks',
    value: function _autoPosition_ticks(axis, orientation) {
      var minMargin_allowedDueToTicks = 0;
      this.svg.selectAll('.nv-' + axis + ' .wrapper-module-product-axis-tick-label')[0].forEach(function (elem) {
        var elemd3 = d3.select(elem);
        var bbox = elem.getBBox();
        if (elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
          var currentMargin_allowedDueToTicks = void 0;
          switch (orientation) {
            case 'bottom':
              currentMargin_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + bbox.height + bbox.y;
              break;
            case 'left':
              currentMargin_allowedDueToTicks = Math.abs(d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + bbox.x);
              break;
          }
          minMargin_allowedDueToTicks = Math.max(minMargin_allowedDueToTicks, currentMargin_allowedDueToTicks);
        }
      });
      switch (orientation) {
        case 'bottom':
          this.options.minBottomMargin = minMargin_allowedDueToTicks;
          break;
        case 'left':
          this.options.minLeftMargin = minMargin_allowedDueToTicks;
          break;
      }
    }
  }, {
    key: '_autoPosition_labels',
    value: function _autoPosition_labels(axis, orientation) {
      var _this37 = this;

      var wrappedLabelElem = this.svg.select('.nv-' + axis + ' .wrapper-module-product-axis-label');
      if (wrappedLabelElem.node() == null) {
        return;
      }
      var wrappedLabelBbox = wrappedLabelElem.node().getBBox();
      var wrappedLabelParentElem = d3.select(wrappedLabelElem.node().parentNode);
      var wrappedLabelParentTransform = d3.transform(wrappedLabelParentElem.attr('transform'));
      var wrappedLabelRealOffset = void 0;
      switch (orientation) {
        case 'bottom':
          wrappedLabelRealOffset = wrappedLabelParentTransform.translate[1];
          break;
        case 'left':
          wrappedLabelRealOffset = wrappedLabelParentTransform.translate[0];
          break;
      }
      var minDistance_allowedDueToTicks = void 0;
      switch (orientation) {
        case 'bottom':
          minDistance_allowedDueToTicks = this.options.relativeAdjustmentGap;
          break;
        case 'left':
          minDistance_allowedDueToTicks = -wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap;
          break;
      }
      this.svg.selectAll('.nv-' + axis + ' .wrapper-module-product-axis-tick-label')[0].forEach(function (elem) {
        var elemd3 = d3.select(elem);
        var bbox = elem.getBBox();
        if (elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
          var currentDistance_allowedDueToTicks = void 0;
          switch (orientation) {
            case 'bottom':
              currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + bbox.height + bbox.y + _this37.options.relativeAdjustmentGap;
              minDistance_allowedDueToTicks = Math.max(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks);
              break;
            case 'left':
              currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + bbox.x - wrappedLabelBbox.height - wrappedLabelBbox.y - _this37.options.relativeAdjustmentGap;
              minDistance_allowedDueToTicks = Math.min(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks);
              break;
          }
        }
      });
      switch (orientation) {
        case 'bottom':
          wrappedLabelParentTransform.translate[1] = Math.max(wrappedLabelRealOffset, minDistance_allowedDueToTicks);
          break;
        case 'left':
          wrappedLabelParentTransform.translate[0] = Math.min(wrappedLabelRealOffset, minDistance_allowedDueToTicks);
          break;
      }
      wrappedLabelParentElem.attr('transform', wrappedLabelParentTransform);

      switch (orientation) {
        case 'bottom':
          this.options.minBottomMargin = Math.max(wrappedLabelParentTransform.translate[1] + wrappedLabelElem.node().getBBox().height, minDistance_allowedDueToTicks);
          break;
        case 'left':
          this.options.minLeftMargin = Math.max(Math.abs(wrappedLabelParentTransform.translate[0]) - wrappedLabelBbox.y, minDistance_allowedDueToTicks);
          break;
      }
    }

    // _autoPosition_yLabels(orientation) {
    //   const wrappedLabelElem = this.svg.select('.nv-y .wrapper-module-product-axis-label')
    //   if(wrappedLabelElem.node() == null) {
    //     return
    //   }
    //   const wrappedLabelBbox = wrappedLabelElem.node().getBBox()
    //   const wrappedLabelParentElem = d3.select(wrappedLabelElem.node().parentNode)
    //   const wrappedLabelParentTransform = d3.transform(wrappedLabelParentElem.attr('transform'))
    //   let wrappedLabelRealOffset
    //   switch(orientation) {
    //     case 'bottom':
    //       wrappedLabelRealOffset = wrappedLabelParentTransform.translate[1]
    //       break
    //     case 'left':
    //       wrappedLabelRealOffset = wrappedLabelParentTransform.translate[0]
    //       break
    //   }
    //   let minDistance_allowedDueToTicks
    //   switch(orientation) {
    //     case 'bottom':
    //       minDistance_allowedDueToTicks = this.options.relativeAdjustmentGap
    //       break
    //     case 'left':
    //       minDistance_allowedDueToTicks = -wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap
    //       break
    //   }
    //   this.svg.selectAll('.nv-y .wrapper-module-product-axis-tick-label')[0].forEach((elem) => {
    //     const elemd3 = d3.select(elem)
    //     const bbox = elem.getBBox()
    //     if(elem.innerHTML && elemd3.style('visibility') != 'hidden' && elemd3.style('display') != 'none') {
    //       let currentDistance_allowedDueToTicks
    //       switch(orientation) {
    //         case 'bottom':
    //           currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[1] + bbox.height + bbox.y + this.options.relativeAdjustmentGap
    //           minDistance_allowedDueToTicks = Math.max(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks)
    //           break
    //         case 'left':
    //           currentDistance_allowedDueToTicks = d3.transform(d3.select(elemd3.node().parentNode).attr('transform')).translate[0] + bbox.x - wrappedLabelBbox.height - wrappedLabelBbox.y - this.options.relativeAdjustmentGap
    //           minDistance_allowedDueToTicks = Math.min(minDistance_allowedDueToTicks, currentDistance_allowedDueToTicks)
    //           break
    //       }
    //     }
    //   })
    //   switch(orientation) {
    //     case 'bottom':
    //       wrappedLabelParentTransform.translate[1] = Math.max(wrappedLabelRealOffset, minDistance_allowedDueToTicks)
    //       break
    //     case 'left':
    //       wrappedLabelParentTransform.translate[0] = Math.min(wrappedLabelRealOffset, minDistance_allowedDueToTicks)
    //       break
    //   }
    //   wrappedLabelParentElem.attr('transform', wrappedLabelParentTransform)

    //   switch(orientation) {
    //     case 'bottom':
    //       this.options.minBottomMargin = wrappedLabelParentTransform.translate[1] + wrappedLabelElem.node().getBBox().height
    //       break
    //     case 'left':
    //       this.options.minLeftMargin = Math.abs(wrappedLabelParentTransform.translate[0]) - wrappedLabelBbox.y
    //       break
    //   }
    // }

  }, {
    key: '_buildWrapperOptions',
    value: function _buildWrapperOptions(options, textElem, additionalOptions) {
      var result = Object.mergeDeep({}, additionalOptions, {
        lineHeight: options.fontSize,
        maxLineCount: options.maxLineCount,
        textAnchor: options.halign,
        verticalAlign: options.valign,
        fontSize: options.fontSize,
        fontWeight: options.fontWeight,
        fontFamily: options.fontFamily,
        fontColor: options.fontColor,
        isWordBreak: options.isWordBreak,
        tooltip: options.tooltip,
        title: options.tooltip ? false : options.title
      });
      Object.defaultsDeep(result, {
        fontSize: textElem.style('font-size'),
        fontWeight: textElem.style('font-weight'),
        fontFamily: textElem.style('font-family'),
        fontColor: textElem.style('fill')
      });
      return result;
    }
  }, {
    key: '_drawWrappedText',
    value: function _drawWrappedText(textElem, parentElem, options, additionalOptions) {
      var _this38 = this;

      var text = textElem.text();
      if (options.dontWrapNumbers && Number.isNumber(text)) {
        return Promise.resolve();
      }

      textElem.styles({
        // display: 'none !important',
        // display: 'none',
        // opacity: 0,
        visibility: 'hidden'
      });

      var targetElem = parentElem.append('g');
      this.appendedElements.push(targetElem);

      var wrapperOptions = this._buildWrapperOptions(options, textElem, additionalOptions);
      var promise = new Promise(function (resolve, reject) {
        wrapperOptions.renderCallback = (wrapperOptions.renderCallback || function () {}).wrap(function (original) {
          for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }

          original.apply(undefined, args);
          resolve();
        });
        _this38.instance.utils.textWrap.fn({
          text: text,
          targetElement: targetElem,
          options: wrapperOptions
        });
      });
      return promise;
    }
  }, {
    key: '_drawAxisTickLabels',
    value: function _drawAxisTickLabels(tickElems, options, orientation) {
      var _this39 = this;

      // return Promise.resolve()
      if (!options.enabled) {
        return;
      }
      if (!tickElems[0].length) {
        return;
      }

      tickElems[0] = tickElems[0].filter(function (tickElem) {
      /*  var tickElemd3 = d3.select(tickElem);
        var tickTextElemd3 = tickElemd3.select('text');
        var attrOpacity = tickTextElemd3.attr('opacity');
        var styleOpacity = tickTextElemd3.style('opacity');
        var attrDisplay = tickTextElemd3.attr('display');
        var styleDisplay = tickTextElemd3.style('display');
        return (attrOpacity === '' || attrOpacity == null || attrOpacity > 0) && (styleOpacity === '' || styleOpacity == null || styleOpacity > 0) && attrDisplay != 'none' && styleDisplay != 'none';*/       
           var tickElemd3 = d3.select(tickElem);
           var tickTextElemd3 = tickElemd3.select('text');
           if(tickTextElemd3.node()) {
              var attrOpacity = tickTextElemd3.attr('opacity');
              var styleOpacity = tickTextElemd3.style('opacity');
              var attrDisplay = tickTextElemd3.attr('display');
              var styleDisplay = tickTextElemd3.style('display');
              return (attrOpacity === '' || attrOpacity == null || attrOpacity > 0) && (styleOpacity === '' || styleOpacity == null || styleOpacity > 0) && attrDisplay != 'none' && styleDisplay != 'none'; 
           } else {
            return false
          } 
      });
     

      var barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap defs clipPath rect');
      if (!barsContainerElem.node()) {
        barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap');
      }

      var width = void 0;
      var height = void 0;
      var x = void 0;
      var y = void 0;

      Object.defaultsDeep(options, this.options.additionalAxesOrientationTickLabelOptions[orientation]);
      Object.defaultsDeep(options, this.options.common);

      var distanceAmongTicks = void 0;
      if (tickElems[0].length <= 1) {
        switch (orientation) {
          case 'left':
            distanceAmongTicks = barsContainerElem.node().getBBox().height;
            break;
          case 'bottom':
            distanceAmongTicks = barsContainerElem.node().getBBox().width;
            break;
        }
      } else {
        var tick1 = d3.select(tickElems[0][0]);
        var tick2 = d3.select(tickElems[0][1]);
        var tick1transform = d3.transform(tick1.attr('transform'));
        var tick2transform = d3.transform(tick2.attr('transform'));
        switch (orientation) {
          case 'left':
            distanceAmongTicks = tick2transform.translate[1] - tick1transform.translate[1];
            break;
          case 'bottom':
            distanceAmongTicks = tick2transform.translate[0] - tick1transform.translate[0];
            break;
        }
      }
      distanceAmongTicks = Math.abs(distanceAmongTicks);

      switch (orientation) {
        case 'left':
          width = options.space;
          height = Math.max(distanceAmongTicks, options.fontSize) + 1;
          x = -width - options.distance;
          y = -height / 2;
          break;
        case 'bottom':
          width = distanceAmongTicks - 2 * options.padding;
          height = options.space;
          x = -width / 2;
          y = options.distance;
          break;
      }

      var promises = [];
      tickElems[0].forEach(function (tickElem) {
        var tickElemd3 = d3.select(tickElem);
        var textElem = tickElemd3.select('text');
        if (textElem.node() == null) return;

        promises.push(_this39._drawWrappedText(textElem, tickElemd3, options, {
          containerX: x,
          containerY: y,
          width: width,
          height: height,
          class: 'wrapper-module-product wrapper-module-product-axis-tick-label'
        }));
      });
      return Promise.all(promises);
    }
  }, {
    key: '_drawAxisLabel',
    value: function _drawAxisLabel(labelElem, options, orientation) {
      if (!options.enabled) {
        return;
      }
      if (!labelElem || !labelElem.node()) {
        return;
      }
      var barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap defs clipPath rect');
      if (!barsContainerElem.node()) {
        barsContainerElem = this.svg.select('.nv-barsWrap > .nv-wrap');
      }
      var barsContainerElemBBox = barsContainerElem.node().getBBox();

      Object.defaultsDeep(options, this.options.additionalAxesOrientationLabelOptions[orientation]);
      Object.defaultsDeep(options, this.options.common);

      var x = void 0;
      var y = void 0;
      var width = void 0;
      var height = void 0;
      var rotate = void 0;
      switch (orientation) {
        case 'left':
          height = options.height || options.space;
          width = options.width || barsContainerElemBBox.height;
          x = -height - options.distance - this.instance.constants.nvd3UncustomizableVerticalLeftAxisLabelOffset;
          y = barsContainerElemBBox.height / 2 + width / 2;
          rotate = -90;
          break;
        case 'bottom':
          width = options.width || barsContainerElemBBox.width;
          height = options.height || options.space;
          x = barsContainerElemBBox.width / 2 - width / 2;
          y = options.distance + this.instance.constants.nvd3UncustomizableHorizontalBottomAxisLabelOffset;
          rotate = 0;
          break;
      }

      var labelContainerElem = d3.select(labelElem.node().parentNode);
      return this._drawWrappedText(labelElem, labelContainerElem, options, {
        containerX: x,
        containerY: y,
        containerRotate: rotate,
        width: width,
        height: height,
        class: 'wrapper-module-product wrapper-module-product-axis-label'
      });
    }
  }], [{
    key: '_name',
    get: function get() {
      return 'wrapper';
    }
  }]);

  return WrapperModule;
}(nv.Module);

nv.Module.register(WrapperModule);

var TitleModule = function (_nv$Module7) {
  _inherits(TitleModule, _nv$Module7);

  function TitleModule(instance, options) {
    _classCallCheck(this, TitleModule);

    //additional defaults
    var _this40 = _possibleConstructorReturn(this, (TitleModule.__proto__ || Object.getPrototypeOf(TitleModule)).call(this, {
      name: 'title',
      supportedCharts: ['*']
    }, instance, options, {
      text: null,
      height: null,
      //autoheight:
      // if true, module makes title to take minimal space which it needs by clipping both top and bottom whitespaces
      // if false, module will automatically clip only top whitespace
      autoheight: true,
      padding: {
        top: 0,
        right: 0,
        bottom: 20,
        left: 0
      },
      //minWidth:
      // specifies when should we add more top margin to put legend/controls on another line with title (if legend or controls are at top of chart)
      minWidth: 100,
      //moveLegendControlsToTop:
      // if true and title width is smaller than minWidth and legend/controls at top, then legend/controls will be moved on the line above the title
      // if false and title width is smaller than minWidth and legend/controls at top, then legend/controls will be moved on the line beneath the title
      moveLegendControlsToTop: true,
      //verticalDistanceBetweenTitleAndLegendControls:
      // this number is used when title and legend/controls are on different lines
      verticalDistanceBetweenTitleAndLegendControls: 10,
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'Open Sans',
      fontColor: 'black',
      halign: 'middle',
      valign: 'middle',
      maxNLines: 3,
      isWordBreak: false,
      ellipsisToLastWord: false,
      tooltip: true,
      title: true
    }));

    Object.defaultsDeep(_this40.options, {
      height: Math.max(_this40.options.fontSize + 1, _this40.options.fontSize * _this40.options.maxNLines)
    });
    return _this40;
  }

  _createClass(TitleModule, [{
    key: 'prepare',
    value: function prepare() {
      this.svg = d3.select(this.instance.extendedChart.container);

      this.originalOptions = {
        height: this.options.height
      };
    }
  }, {
    key: 'process',
    value: function process() {
      var _this41 = this;

      var containerElem = d3.select(this.svg.select('.nv-barsWrap').node().parentNode);
      var bbox = containerElem.select('.nv-barsWrap .nv-wrap').node().getBBox();

      var controlsElem = this.svg.select('.nv-controlsWrap');
      var controlsTransform = d3.transform(controlsElem.attr('transform'));
      var controlsBbox = controlsElem.node().getBBox();
      var legendElem = this.svg.select('.nv-legendWrap');
      var legendTransform = d3.transform(legendElem.attr('transform'));
      var legendBbox = legendElem.node().getBBox();
      var padding_allowedDueToControls = void 0;
      var isControlsAtTop = this.instance.extendedChart.showControls() && controlsTransform.translate[1] < 0;
      if (isControlsAtTop) {
        padding_allowedDueToControls = controlsBbox.x + controlsBbox.width + controlsTransform.translate[0];
      } else {
        padding_allowedDueToControls = 0;
      }
      var padding_allowedDueToLegend = void 0;
      var isLegendAtTop = this.instance.extendedChart.showLegend() && legendTransform.translate[1] < 0;
      if (isLegendAtTop) {
        padding_allowedDueToLegend = bbox.width - legendBbox.x - legendTransform.translate[0];
      } else {
        padding_allowedDueToLegend = 0;
      }
      var padding_allowed = Math.max(padding_allowedDueToControls, padding_allowedDueToLegend);
      var leftPadding = Math.max(this.options.padding.left, padding_allowed);
      var rightPadding = Math.max(this.options.padding.right, padding_allowed);
      var bottomPadding = this.options.padding.bottom;

      var width = bbox.width - leftPadding - rightPadding;
      var x = leftPadding;
      this.options.minTopMargin = this.options.height + this.options.padding.top + bottomPadding;
      if (width < this.options.minWidth && (isControlsAtTop || isLegendAtTop)) {
        var legendcontrolsLineHeight = Math.max(isControlsAtTop ? controlsBbox.height : 0, isLegendAtTop ? legendBbox.height : 0);
        var legendcontrolsOffset = legendcontrolsLineHeight + this.options.verticalDistanceBetweenTitleAndLegendControls;
        this.options.minTopMargin += legendcontrolsOffset;
        if (this.options.moveLegendControlsToTop) {
          legendTransform.translate[1] = -this.options.minTopMargin + legendcontrolsLineHeight / 2 - legendBbox.height / 2;
          legendElem.attr('transform', legendTransform);
          controlsTransform.translate[1] = -this.options.minTopMargin + legendcontrolsLineHeight / 2 - controlsBbox.height / 2;
          controlsElem.attr('transform', controlsTransform);
        } else {
          bottomPadding += legendcontrolsOffset;
          legendTransform.translate[1] = -legendcontrolsLineHeight / 2 - legendBbox.height / 2 - 10;
          legendElem.attr('transform', legendTransform);
          controlsTransform.translate[1] = -legendcontrolsLineHeight / 2 - controlsBbox.height / 2 - 10;
          controlsElem.attr('transform', controlsTransform);
        }
        width = bbox.width;
        x = 0;
      }
      var y = -this.options.height - bottomPadding;
      var gElem = containerElem.append('g');
      this.appendedElements.push(gElem);
      var promise = new Promise(function (resolve, reject) {
        var wrapperOptions = {
          containerX: x,
          containerY: y,
          x: 0,
          y: 0,
          width: width,
          height: _this41.options.height,
          lineHeight: _this41.options.fontSize,
          maxLineCount: _this41.options.maxNLines,
          textAnchor: _this41.options.halign,
          verticalAlign: _this41.options.valign,
          fontSize: _this41.options.fontSize,
          fontWeight: _this41.options.fontWeight,
          fontFamily: _this41.options.fontFamily,
          fontColor: _this41.options.fontColor,
          isWordBreak: _this41.options.isWordBreak,
          ellipsisToLastWord: _this41.options.ellipsisToLastWord,
          tooltip: _this41.options.tooltip,
          title: _this41.options.tooltip ? false : _this41.options.title,
          class: 'title-by-title-module',
          renderCallback: function renderCallback(result) {
            if (_this41.options.autoheight) {
              var newHeight = result.textElem.node().getBBox().height;
              _this41.options.minTopMargin -= _this41.options.height - newHeight;
              _this41.options.height = newHeight;
            } else {
              _this41.options.minTopMargin -= parseFloat(result.textElem.attr('y'));
            }
            resolve();
          }
        };
        _this41.instance.utils.textWrap.fn({
          text: _this41.options.text,
          targetElement: gElem,
          options: wrapperOptions
        });
      });

      this.scheduleAndSkipNextUpdate();

      return promise;
    }
  }], [{
    key: '_name',
    get: function get() {
      return 'title';
    }
  }]);

  return TitleModule;
}(nv.Module);

nv.Module.register(TitleModule);

var LegendModule = function (_nv$Module8) {
  _inherits(LegendModule, _nv$Module8);

  function LegendModule(instance, options) {
    _classCallCheck(this, LegendModule);

    return _possibleConstructorReturn(this, (LegendModule.__proto__ || Object.getPrototypeOf(LegendModule)).call(this, {
      name: 'legend',
      supportedCharts: ['*']
    }, instance, options, {
      orientation: 'top',
      distance: 30
    }));
  }

  _createClass(LegendModule, [{
    key: 'prepare',
    value: function prepare() {
      this.svg = d3.select(this.instance.extendedChart.container);
    }
  }, {
    key: 'process',
    value: function process() {
      var processFn = this['_process_' + this.options.orientation];
      if (Function.isFunction(processFn)) {
        this.scheduleAndSkipNextUpdate();
        return processFn.call(this);
      }
    }
  }, {
    key: '_process_top',
    value: function _process_top() {
      var legendElem = this.svg.select('.nv-legendWrap');
      var legendTransform = d3.transform(legendElem.attr('transform'));
      var legendBbox = legendElem.node().getBBox();
      var isAtTop = this.instance.extendedChart.showLegend() && legendTransform.translate[1] < 0;
      if (isAtTop) {
        legendTransform.translate[1] = -this.options.distance - legendBbox.height;
        legendElem.attr('transform', legendTransform);
        this.options.minTopMargin = Math.abs(legendTransform.translate[1]);
      }
    }
  }]);

  return LegendModule;
}(nv.Module);

nv.Module.register(LegendModule);

var ControlsModule = function (_nv$Module9) {
  _inherits(ControlsModule, _nv$Module9);

  function ControlsModule(instance, options) {
    _classCallCheck(this, ControlsModule);

    return _possibleConstructorReturn(this, (ControlsModule.__proto__ || Object.getPrototypeOf(ControlsModule)).call(this, {
      name: 'controls',
      supportedCharts: ['*']
    }, instance, options, {
      orientation: 'top',
      distance: 30
    }));
  }

  _createClass(ControlsModule, [{
    key: 'prepare',
    value: function prepare() {
      this.svg = d3.select(this.instance.extendedChart.container);
    }
  }, {
    key: 'process',
    value: function process() {
      var processFn = this['_process_' + this.options.orientation];
      if (Function.isFunction(processFn)) {
        this.scheduleAndSkipNextUpdate();
        return processFn.call(this);
      }
    }
  }, {
    key: '_process_top',
    value: function _process_top() {
      var controlsElem = this.svg.select('.nv-controlsWrap');
      var controlsTransform = d3.transform(controlsElem.attr('transform'));
      var controlsBbox = controlsElem.node().getBBox();
      var isAtTop = this.instance.extendedChart.showControls() && controlsTransform.translate[1] < 0;
      if (isAtTop) {
        controlsTransform.translate[1] = -this.options.distance - controlsBbox.height;
        controlsElem.attr('transform', controlsTransform);
        this.options.minTopMargin = Math.abs(controlsTransform.translate[1]);
      }
    }
  }]);

  return ControlsModule;
}(nv.Module);

nv.Module.register(ControlsModule);

{
  var DiscreteBarChartWithTable = function (_nv$ModelExtension) {
    _inherits(DiscreteBarChartWithTable, _nv$ModelExtension);

    function DiscreteBarChartWithTable() {
      _classCallCheck(this, DiscreteBarChartWithTable);

      return _possibleConstructorReturn(this, (DiscreteBarChartWithTable.__proto__ || Object.getPrototypeOf(DiscreteBarChartWithTable)).call(this, {
        name: 'discreteBarChartWithTable',
        parent: 'discreteBarChart'
      }));
    }

    _createClass(DiscreteBarChartWithTable, [{
      key: '_initTable',
      value: function _initTable() {
        this.table = new nv.modules.table.Table();
      }
    }, {
      key: '_extendConfig',
      value: function _extendConfig() {
        Object.assign(this.config, {
          chartMetric: nv.modules.table.constants.CHART_DEFAULT_METRIC
        });
      }
    }, {
      key: '_getChartData',
      value: function _getChartData() {
        return this.data.chart(this.config.chartMetric);
      }
    }, {
      key: '_getTableData',
      value: function _getTableData() {
        return this.data.table();
      }
    }, {
      key: '_drawChart',
      value: function _drawChart() {
        var _this45 = this;

        var svg = d3.select(this.extendedChart.container);

        var lastTargetY = null;
        var lastHeight = 0;
        var bars = svg.selectAll('rect.discreteBar')[0];

        bars.forEach(function (current, index) {
          var chartData = _this45._getChartData();
          var dataValue = chartData[0].values[index].value;

          var currentX = parseFloat(d3.transform(d3.select(current.parentNode).attr('transform')).translate[0]);
          var currentY = parseFloat(d3.transform(d3.select(current.parentNode).attr('transform')).translate[1]);
          var currentHeight = d3.select(current).node().getBBox().height;

          if (index === bars.length - 1) {
            d3.select(current).attr('fill', 'grey');
          } else {
            if (index === 0) {
              lastTargetY = currentY + currentHeight;
            }

            if (dataValue < 0) {
              var targetY = lastTargetY;

              d3.select(current.parentNode).attr('transform', 'translate(' + currentX + ', ' + targetY + ')');
              d3.select(current).attr('fill', 'red');

              lastTargetY = targetY + currentHeight;
            } else {
              var targetY = lastTargetY - currentHeight;

              d3.select(current.parentNode).attr('transform', 'translate(' + currentX + ', ' + targetY + ')');
              d3.select(current).attr('fill', 'green');

              lastTargetY = targetY;
            }

            if (index === 0) {
              d3.select(current).attr('fill', 'grey');
            }
          }

          lastHeight = currentHeight;

          if (index === 0) {
            var shiftToZeroXAxis = 0;
            var containerHeight = 370; //parseFloat(svg.select('.nv-discreteBarWithAxes').node().getBBox().height);

            shiftToZeroXAxis += containerHeight - (currentY + currentHeight) + 10;

            svg.select('.nv-barsWrap.nvd3-svg').attr('transform', 'translate(0, ' + shiftToZeroXAxis + ')');
          }
        });
      }
    }, {
      key: '_drawTable',
      value: function _drawTable() {
        var svg = this.extendedChart.container;
        var tableOptions = Object.assign(this.extendedChart.table(), {
          chartData: {
            height: this.extendedChart.height()
          }
        });
        var tableData = this._getTableData();
        this.table.init(svg, tableOptions, tableData);
      }

      //FNS CALLED BY PARENT IF IMPLEMENTED

    }, {
      key: 'onModelInit',
      value: function onModelInit() {
        this._initTable();
        this._extendConfig();
      }
    }, {
      key: 'prepareData',
      value: function prepareData(selection) {
        var _this46 = this;

        var chartDataArray = [];
        selection.each(function (initialData) {
          var chartData = void 0;
          if (Array.isArray(initialData)) {
            chartData = initialData;
          } else {
            var tableOptions = _this46.extendedChart.table();
            _this46.data = new nv.modules.table.Data(initialData, {
              autoAddFirstColumn: tableOptions.autoAddFirstColumn
            });
            chartData = _this46._getChartData();
          }
          chartDataArray.push(chartData);
        });
        selection.data(chartDataArray);
      }
    }, {
      key: 'applyOptions',
      value: function applyOptions() {
        this.extendedChart.margin({
          left: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH + nv.modules.table.constants.TABLE_OFFSET_X,
          right: nv.modules.table.constants.TABLE_OFFSET_X
        });
        this.extendedChart.discretebar.margin({
          left: 0,
          right: 0
        });
        var chartData = this._getChartData();
        this.extendedChart.yAxis.axisLabel(chartData[0].key);
      }
    }, {
      key: 'draw',
      value: function draw() {
        this._drawChart();
        this._drawTable();
      }
    }, {
      key: 'extendChartOptions',
      value: function extendChartOptions() {
        var tableOptions = void 0;

        Object.defineProperty(this.chart._options, 'table', {
          get: function get() {
            return tableOptions;
          }, set: function set(_) {
            tableOptions = _;
          }
        });
      }
    }]);

    return DiscreteBarChartWithTable;
  }(nv.ModelExtension);

  nv.ModelExtension.register(DiscreteBarChartWithTable);
}

nv.models.discreteBarChartWithTableOld = function () {
  'use strict';

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------

  var table = new nv.models.discreteBarChartWithTable.Table();

  var discretebar = nv.models.discreteBar(),
      xAxis = nv.models.axis(),
      yAxis = nv.models.axis(),
      legend = nv.models.legend(),
      tooltip = nv.models.tooltip();

  var margin = { top: 15, right: 10, bottom: 50, left: 60 },
      marginTop = null,
      width = null,
      height = null,
      color = nv.utils.getColor(),
      showLegend = false,
      showXAxis = true,
      showYAxis = true,
      rightAlignYAxis = false,
      staggerLabels = false,
      wrapLabels = false,
      rotateLabels = 0,
      x,
      y,
      noData = null,
      tableOptions = null,
      dispatch = d3.dispatch('beforeUpdate', 'renderEnd'),
      duration = 250;

  xAxis.orient('bottom').showMaxMin(false).tickFormat(function (d) {
    return d;
  });

  yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickFormat(d3.format(',.1f'));

  tooltip.duration(0).headerEnabled(false).valueFormatter(function (d, i) {
    return yAxis.tickFormat()(d, i);
  }).keyFormatter(function (d, i) {
    return xAxis.tickFormat()(d, i);
  });

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var renderWatch = nv.utils.renderWatch(dispatch, duration);

  function chart(selection) {
    renderWatch.reset();
    renderWatch.models(discretebar);
    if (showXAxis) renderWatch.models(xAxis);
    if (showYAxis) renderWatch.models(yAxis);

    chart.margin({
      left: nv.models.discreteBarChartWithTable.constants.TABLE_FIRST_COLUMN_WIDTH + nv.models.discreteBarChartWithTable.constants.TABLE_OFFSET_X,
      right: nv.models.discreteBarChartWithTable.constants.TABLE_OFFSET_X
    });
    // let discretebarMarginLeft =0//nv.models.discreteBarChartWithTable.constants.TABLE_OFFSET_X - margin.right * 1.5
    // let discretebarMarginRight = nv.models.discreteBarChartWithTable.constants.TABLE_OFFSET_X - margin.right * 1.25
    chart.discretebar.margin({
      left: 0,
      right: 0
    });

    selection.each(function (initialData) {
      var container = d3.select(this),
          that = this;

      nv.utils.initSVG(container);

      var availableWidth = nv.utils.availableWidth(width, container, margin),
          availableHeight = nv.utils.availableHeight(height, container, margin);

      chart.update = function () {
        dispatch.beforeUpdate();
        container.transition().duration(duration).call(chart);

        d3.select('.nv-barsWrap.nvd3-svg').attr('transform', 'translate(0, 0)');
        applyCustomization();
      };

      chart.container = this;

      // Display No Data message if there's nothing to show.
      chart.data = {};
      var data = void 0;
      if (Array.isArray(initialData)) {
        data = initialData;
      } else {
        var dataInstance = new nv.models.discreteBarChartWithTable.Data(initialData);
        data = dataInstance.chart(nv.models.discreteBarChartWithTable.constants.CHART_DEFAULT_METRIC);
        chart.yAxis.axisLabel(data[0].key);
        chart.data.table = dataInstance.table();
      }
      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        nv.utils.noData(chart, container);
        return chart;
      } else {
        container.selectAll('.nv-noData').remove();

        chart.data.chart = data;
      }

      // Setup Scales
      x = discretebar.xScale();
      y = discretebar.yScale().clamp(true);

      // Setup containers and skeleton of chart
      var wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
      var defsEnter = gEnter.append('defs');
      var g = wrap.select('g');

      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');

      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');

      g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // Legend
      if (!showLegend) {
        g.select('.nv-legendWrap').selectAll('*').remove();
      } else {
        legend.width(availableWidth);

        g.select('.nv-legendWrap').datum(data).call(legend);

        if (!marginTop && legend.height() !== margin.top) {
          margin.top = legend.height();
          availableHeight = nv.utils.availableHeight(height, container, margin);
        }

        wrap.select('.nv-legendWrap').attr('transform', 'translate(0,' + -margin.top + ')');
      }

      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      // Main Chart Component(s)
      discretebar.width(availableWidth).height(availableHeight);

      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));

      barsWrap.transition().call(discretebar);

      defsEnter.append('clipPath').attr('id', 'nv-x-label-clip-' + discretebar.id()).append('rect');

      g.select('#nv-x-label-clip-' + discretebar.id() + ' rect').attr('width', x.rangeBand() * (staggerLabels ? 2 : 1)).attr('height', 16).attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2));

      // Setup Axes
      if (showXAxis) {
        xAxis.scale(x)._ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);

        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + (y.range()[0] + (discretebar.showValues() && y.domain()[0] < 0 ? 16 : 0)) + ')');
        g.select('.nv-x.nv-axis').call(xAxis);

        var xTicks = g.select('.nv-x.nv-axis').selectAll('g');
        if (staggerLabels) {
          xTicks.selectAll('text').attr('transform', function (d, i, j) {
            return 'translate(0,' + (j % 2 == 0 ? '5' : '17') + ')';
          });
        }

        if (rotateLabels) {
          xTicks.selectAll('.tick text').attr('transform', 'rotate(' + rotateLabels + ' 0,0)').style('text-anchor', rotateLabels > 0 ? 'start' : 'end');
        }

        if (wrapLabels) {
          g.selectAll('.tick text').call(nv.utils.wrapTicks, chart.xAxis.rangeBand());
        }
      }

      if (showYAxis) {
        yAxis.scale(y)._ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);

        g.select('.nv-y.nv-axis').call(yAxis);
      }

      // Zero line
      g.select(".nv-zeroLine line").attr("x1", 0).attr("x2", rightAlignYAxis ? -availableWidth : availableWidth).attr("y1", y(0)).attr("y2", y(0));

      // Apply custom styles
      g.selectAll('.nv-axis.nv-x .tick line').attr('display', 'none');
    });

    setTimeout(function () {
      applyCustomization();
    });

    renderWatch.renderEnd('discreteBar chart immediate');
    return chart;
  }

  //============================================================
  // Customizing charts
  //------------------------------------------------------------


  function applyCustomization() {
    var lastTargetY = null;
    var lastHeight = 0;
    var bars = d3.selectAll('rect.discreteBar')[0];

    bars.forEach(function (current, index) {
      var dataValue = chart.data.chart[0].values[index].value;

      var currentX = parseFloat(d3.transform(d3.select(current.parentNode).attr('transform')).translate[0]);
      var currentY = parseFloat(d3.transform(d3.select(current.parentNode).attr('transform')).translate[1]);
      var currentHeight = d3.select(current).node().getBBox().height;

      if (index === bars.length - 1) {
        d3.select(current).attr('fill', 'grey');
      } else {
        if (index === 0) {
          lastTargetY = currentY + currentHeight;
        }

        if (dataValue < 0) {
          var targetY = lastTargetY;

          d3.select(current.parentNode).attr('transform', 'translate(' + currentX + ', ' + targetY + ')');
          d3.select(current).attr('fill', 'red');

          lastTargetY = targetY + currentHeight;
        } else {
          var targetY = lastTargetY - currentHeight;

          d3.select(current.parentNode).attr('transform', 'translate(' + currentX + ', ' + targetY + ')');
          d3.select(current).attr('fill', 'green');

          lastTargetY = targetY;
        }

        if (index === 0) {
          d3.select(current).attr('fill', 'grey');
        }
      }

      lastHeight = currentHeight;

      if (index === 0) {
        var shiftToZeroXAxis = 0;
        var containerHeight = parseFloat(d3.select('.nv-discreteBarWithAxes').node().getBBox().height);

        shiftToZeroXAxis += containerHeight - (currentY + currentHeight);
        shiftToZeroXAxis -= 14;

        d3.select('.nv-barsWrap.nvd3-svg').attr('transform', 'translate(0, ' + shiftToZeroXAxis + ')');
      }
    });

    //building table
    var svg = chart.container;
    var config = Object.assign(chart.table(), {
      chartData: {
        height: chart.height()
      }
    });
    // if(chart.data.table != null) {
    //   table.init(svg, config, chart.data.table)
    // }
    table.init(svg, config, chart.data.table);
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  discretebar.dispatch.on('elementMouseover.tooltip', function (evt) {
    evt['series'] = {
      key: chart.x()(evt.data),
      value: chart.y()(evt.data),
      color: evt.color
    };
    tooltip.data(evt).hidden(false);
  });

  discretebar.dispatch.on('elementMouseout.tooltip', function (evt) {
    tooltip.hidden(true);
  });

  discretebar.dispatch.on('elementMousemove.tooltip', function (evt) {
    tooltip();
  });

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  chart.dispatch = dispatch;
  chart.discretebar = discretebar;
  chart.legend = legend;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.tooltip = tooltip;

  chart.options = nv.utils.optionsFunc.bind(chart);

  chart._options = Object.create({}, {
    // simple options, just get/set the necessary values
    width: {
      get: function get() {
        return width;
      }, set: function set(_) {
        width = _;
      }
    },
    height: {
      get: function get() {
        return height;
      }, set: function set(_) {
        height = _;
      }
    },
    showLegend: {
      get: function get() {
        return showLegend;
      }, set: function set(_) {
        showLegend = _;
      }
    },
    staggerLabels: {
      get: function get() {
        return staggerLabels;
      }, set: function set(_) {
        staggerLabels = _;
      }
    },
    rotateLabels: {
      get: function get() {
        return rotateLabels;
      }, set: function set(_) {
        rotateLabels = _;
      }
    },
    wrapLabels: {
      get: function get() {
        return wrapLabels;
      }, set: function set(_) {
        wrapLabels = !!_;
      }
    },
    showXAxis: {
      get: function get() {
        return showXAxis;
      }, set: function set(_) {
        showXAxis = _;
      }
    },
    showYAxis: {
      get: function get() {
        return showYAxis;
      }, set: function set(_) {
        showYAxis = _;
      }
    },
    noData: {
      get: function get() {
        return noData;
      }, set: function set(_) {
        noData = _;
      }
    },
    table: {
      get: function get() {
        return tableOptions;
      }, set: function set(_) {
        tableOptions = _;
      }
    },

    // options that require extra logic in the setter
    margin: {
      get: function get() {
        return margin;
      }, set: function set(_) {
        if (_.top !== undefined) {
          margin.top = _.top;
          marginTop = _.top;
        }
        margin.right = _.right !== undefined ? _.right : margin.right;
        margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
        margin.left = _.left !== undefined ? _.left : margin.left;
      }
    },
    duration: {
      get: function get() {
        return duration;
      }, set: function set(_) {
        duration = _;
        renderWatch.reset(duration);
        discretebar.duration(duration);
        xAxis.duration(duration);
        yAxis.duration(duration);
      }
    },
    color: {
      get: function get() {
        return color;
      }, set: function set(_) {
        color = nv.utils.getColor(_);
        discretebar.color(color);
        legend.color(color);
      }
    },
    rightAlignYAxis: {
      get: function get() {
        return rightAlignYAxis;
      }, set: function set(_) {
        rightAlignYAxis = _;
        yAxis.orient(_ ? 'right' : 'left');
      }
    }
  });

  nv.utils.inheritOptions(chart, discretebar);
  nv.utils.initOptions(chart);

  return chart;
};

{
  var MultiBarHorizontalChartWithAvg = function (_nv$ModelExtension2) {
    _inherits(MultiBarHorizontalChartWithAvg, _nv$ModelExtension2);

    function MultiBarHorizontalChartWithAvg() {
      _classCallCheck(this, MultiBarHorizontalChartWithAvg);

      return _possibleConstructorReturn(this, (MultiBarHorizontalChartWithAvg.__proto__ || Object.getPrototypeOf(MultiBarHorizontalChartWithAvg)).call(this, {
        name: 'multiBarHorizontalChartWithAvg',
        parent: 'multiBarHorizontalChart'
      }));
    }

    _createClass(MultiBarHorizontalChartWithAvg, [{
      key: 'prepareData',
      value: function prepareData(selection) {
        this.data = selection.data()[0];

        this._moveLegend();
      }
    }, {
      key: 'draw',
      value: function draw() {
        var legend = d3.select('.nv-legendWrap');
        var lastRects,
            dpBarValues = [];

        this.extendedChart.containerHeight = parseFloat(d3.select('.nv-multiBarHorizontalChart .nv-groups').node().getBBox().height);
        this.extendedChart.containerWidth = parseFloat(d3.select('.nv-multiBarHorizontalChart .nv-groups').node().getBBox().width);

        legend.attr('transform', 'translate(' + -(this.extendedChart.containerWidth / 2 - 230) + ',' + (this.extendedChart.containerHeight + 100) + ')');
      }
    }, {
      key: '_moveLegend',
      value: function _moveLegend() {
        setTimeout(function () {
          d3.selectAll('.nv-series').each(function (d, i) {
            var group = d3.select(this),
                circle = group.select('circle');

            var color = circle.style('fill');
            circle.remove();

            var symbol = group.append('path').attr('d', d3.svg.symbol().type('square')).style('stroke', color).style('fill', color);
          });
        });
      }
    }]);

    return MultiBarHorizontalChartWithAvg;
  }(nv.ModelExtension);

  nv.ModelExtension.register(MultiBarHorizontalChartWithAvg);
}

nv.models.multiBarHorizontalChartWithAvgOld = function () {
  'use strict';

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------

  var multibar = nv.models.multiBarHorizontal(),
      xAxis = nv.models.axis(),
      yAxis = nv.models.axis(),
      legend = nv.models.legend().height(30),
      controls = nv.models.legend().height(30),
      tooltip = nv.models.tooltip();

  var margin = { top: 30, right: 20, bottom: 50, left: 60 },
      marginTop = null,
      width = null,
      height = null,
      color = nv.utils.defaultColor(),
      showControls = true,
      controlsPosition = 'top',
      controlLabels = {},
      showLegend = true,
      legendPosition = 'top',
      showXAxis = true,
      showYAxis = true,
      stacked = false,
      x //can be accessed via chart.xScale()
  ,
      y //can be accessed via chart.yScale()
  ,
      state = nv.utils.state(),
      defaultState = null,
      noData = null,
      dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd'),
      controlWidth = function controlWidth() {
    return showControls ? 180 : 0;
  },
      duration = 250;

  state.stacked = false; // DEPRECATED Maintained for backward compatibility

  multibar.stacked(stacked);

  xAxis.orient('left').tickPadding(5).showMaxMin(false).tickFormat(function (d) {
    return d;
  });

  yAxis.orient('bottom').tickFormat(d3.format(',.1f'));

  tooltip.duration(0).valueFormatter(function (d, i) {
    return yAxis.tickFormat()(d, i);
  }).headerFormatter(function (d, i) {
    return xAxis.tickFormat()(d, i);
  });

  controls.updateState(false);

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var stateGetter = function stateGetter(data) {
    return function () {
      return {
        active: data.map(function (d) {
          return !d.disabled;
        }),
        stacked: stacked
      };
    };
  };

  var stateSetter = function stateSetter(data) {
    return function (state) {
      if (state.stacked !== undefined) stacked = state.stacked;
      if (state.active !== undefined) data.forEach(function (series, i) {
        series.disabled = !state.active[i];
      });
    };
  };

  var renderWatch = nv.utils.renderWatch(dispatch, duration);

  function chart(selection) {
    renderWatch.reset();
    renderWatch.models(multibar);

    if (showXAxis) {
      renderWatch.models(xAxis);
    }
    if (showYAxis) {
      renderWatch.models(yAxis);
    }

    selection.each(function (data) {
      var container = d3.select(this),
          that = this;

      nv.utils.initSVG(container);

      var availableWidth = nv.utils.availableWidth(width, container, margin),
          availableHeight = nv.utils.availableHeight(height, container, margin);

      chart.update = function () {
        chart.containerWidth = parseFloat(d3.select(".nv-multiBarHorizontalChart .nv-groups").node().getBBox().width);

        applyCustomization();

        container.transition().duration(duration).call(chart);
      };

      chart.container = this;

      stacked = multibar.stacked();

      state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();

      // DEPRECATED set state.disableddisabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });

      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) {
            defaultState[key] = state[key].slice(0);
          } else {
            defaultState[key] = state[key];
          }
        }
      }

      // Display No Data message if there's nothing to show.
      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        nv.utils.noData(chart, container);
        return chart;
      } else {
        chart.data = data;
        container.selectAll('.nv-noData').remove();
      }

      // Setup Scales
      x = multibar.xScale();
      y = multibar.yScale().clamp(true);

      // Setup containers and skeleton of chart
      var wrap = container.selectAll('g.nv-wrap.nv-multiBarHorizontalChart').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarHorizontalChart').append('g');
      var g = wrap.select('g');

      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis').append('g').attr('class', 'nv-zeroLine').append('line');

      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');

      // Legend
      if (!showLegend) {
        g.select('.nv-legendWrap').selectAll('*').remove();
      } else {
        legend.width(availableWidth - controlWidth());

        g.select('.nv-legendWrap').datum(data).call(legend);
        if (legendPosition === 'bottom') {
          margin.bottom = xAxis.height() + legend.height();
          availableHeight = nv.utils.availableHeight(height, container, margin);
          g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + (availableHeight + xAxis.height()) + ')');
        } else if (legendPosition === 'top') {

          if (!marginTop && legend.height() !== margin.top) {
            margin.top = legend.height();
            availableHeight = nv.utils.availableHeight(height, container, margin);
          }

          g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + -margin.top + ')');
        }
      }

      // Controls
      if (!showControls) {
        g.select('.nv-controlsWrap').selectAll('*').remove();
      } else {
        var controlsData = [{ key: controlLabels.grouped || 'Grouped', disabled: multibar.stacked() }, { key: controlLabels.stacked || 'Stacked', disabled: !multibar.stacked() }];

        controls.width(controlWidth()).color(['#444', '#444', '#444']);

        if (controlsPosition === 'bottom') {
          margin.bottom = xAxis.height() + legend.height();
          availableHeight = nv.utils.availableHeight(height, container, margin);
          g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + (availableHeight + xAxis.height()) + ')').call(controls);
        } else if (controlsPosition === 'top') {
          g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
        }
      }

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // Main Chart Component(s)
      multibar.disabled(data.map(function (series) {
        return series.disabled;
      })).width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));

      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));

      barsWrap.transition().call(multibar);

      // Setup Axes
      if (showXAxis) {
        xAxis.scale(x)._ticks(nv.utils.calcTicksY(availableHeight / 24, data)).tickSize(-availableWidth, 0);

        g.select('.nv-x.nv-axis').call(xAxis);

        var xTicks = g.select('.nv-x.nv-axis').selectAll('g');

        xTicks.selectAll('line, text');
      }

      if (showYAxis) {
        yAxis.scale(y)._ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);

        g.select('.nv-y.nv-axis').attr('transform', 'translate(0,' + availableHeight + ')');
        g.select('.nv-y.nv-axis').call(yAxis);
      }

      // Zero line
      g.select(".nv-zeroLine line").attr("x1", y(0)).attr("x2", y(0)).attr("y1", 0).attr("y2", -availableHeight);

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        for (var key in newState) {
          state[key] = newState[key];
        }
        dispatch.stateChange(state);
        chart.update();
      });

      controls.dispatch.on('legendClick', function (d, i) {
        if (!d.disabled) return;
        controlsData = controlsData.map(function (s) {
          s.disabled = true;
          return s;
        });
        d.disabled = false;

        switch (d.key) {
          case 'Grouped':
          case controlLabels.grouped:
            multibar.stacked(false);
            break;
          case 'Stacked':
          case controlLabels.stacked:
            multibar.stacked(true);
            break;
        }

        state.stacked = multibar.stacked();
        dispatch.stateChange(state);
        stacked = multibar.stacked();

        chart.update();
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {

        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });

          state.disabled = e.disabled;
        }

        if (typeof e.stacked !== 'undefined') {
          multibar.stacked(e.stacked);
          state.stacked = e.stacked;
          stacked = e.stacked;
        }

        chart.update();
      });
    });

    window.onload = function () {
      d3.selectAll('.nv-series').each(function (d, i) {
        var group = d3.select(this),
            circle = group.select('circle');

        var color = circle.style('fill');
        circle.remove();

        var symbol = group.append('path').attr('d', d3.svg.symbol().type('square')).style('stroke', color).style('fill', color);
      });
    };

    applyCustomization();

    renderWatch.renderEnd('multibar horizontal chart immediate');
    return chart;
  }

  //============================================================
  // Customizing charts
  //------------------------------------------------------------

  function applyCustomization() {
    chart.containerWidth = parseFloat(d3.select(".nv-multiBarHorizontalChart .nv-groups").node().getBBox().width);

    var legend = d3.select(".nv-legendWrap");
    legend.attr("transform", "translate(" + -(chart.containerWidth / 2 - 230) + "," + (height - 60) + ")");

    var svg = d3.select("svg"),
        lastRects,
        rectWidth,
        dpBarValues = [];

    // We get one positive rect of each serie from the svg (here the last serie)
    lastRects = svg.selectAll("g.nv-group").filter(function (d, i) {
      return i === 0;
    }).selectAll("rect");

    chart.data[0].values.forEach(function (item, i) {
      var d1 = chart.data[0].values[i].value;
      var d2 = chart.data[1].values[i].value;

      var dif = d2 - d1;
      dpBarValues.push(d3.format(',.2f')(dif));
    });

    var seriesCounts = 0;
    svg.selectAll("g.nv-group").filter(function (d, i) {
      seriesCounts++;
    });

    var barHeight = parseFloat(svg.select("g.nv-group .nv-bar rect").attr("height"));
    var yShift = barHeight * seriesCounts / 2;

    var groupLabels = svg.select("g.nv-barsWrap").append("g");

    d3.selectAll('.dp-bar-chart-label').remove();

    // Set header
    svg.append("text").attr("x", chart.containerWidth + 110).attr("y", 20).text("Point").attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-family", "monospace").style("fill", "#999999");

    svg.append("text").attr("x", chart.containerWidth + 105).attr("y", 40).text("Change").attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-family", "monospace").style("fill", "#999999");

    lastRects.each(function (d, index) {
      var transformAttr = d3.select(this).attr("transform");

      var xPos = chart.containerWidth + 20;
      var text = groupLabels.append("text");
      text.attr("x", xPos)
      // We add a padding of 5 above the highest rect
      .attr("y", d3.transform(d3.select(this.parentNode).attr("transform")).translate[1] + yShift + 5) // We center the label)
      .text(dpBarValues[index]).attr("transform", transformAttr).attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-weight", "bold").style("fill", dpBarValues[index] < 0 ? "red" : "green");

      var bbox = text[0][0].getBBox();

      groupLabels.append("rect").attr("class", "dp-bar-chart-label").attr('x', bbox.x - 5).attr('y', bbox.y - 5).attr('width', bbox.width + 10).attr('height', bbox.height + 10).style("stroke", "#CCCCCC").style("fill", "none").style("stroke-width", 2);
    });
  }

  //============================================================
  // Event Handling/Dispatching (out of chart's scope)
  //------------------------------------------------------------

  multibar.dispatch.on('elementMouseover.tooltip', function (evt) {
    evt.value = chart.x()(evt.data);
    evt['series'] = {
      key: evt.data.key,
      value: chart.y()(evt.data),
      color: evt.color
    };
    tooltip.data(evt).hidden(false);
  });

  multibar.dispatch.on('elementMouseout.tooltip', function (evt) {
    tooltip.hidden(true);
  });

  multibar.dispatch.on('elementMousemove.tooltip', function (evt) {
    tooltip();
  });

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.multibar = multibar;
  chart.legend = legend;
  chart.controls = controls;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.state = state;
  chart.tooltip = tooltip;

  chart.options = nv.utils.optionsFunc.bind(chart);

  chart._options = Object.create({}, {
    // simple options, just get/set the necessary values
    width: {
      get: function get() {
        return width;
      }, set: function set(_) {
        width = _;
      }
    },
    height: {
      get: function get() {
        return height;
      }, set: function set(_) {
        height = _;
      }
    },
    showLegend: {
      get: function get() {
        return showLegend;
      }, set: function set(_) {
        showLegend = _;
      }
    },
    legendPosition: {
      get: function get() {
        return legendPosition;
      }, set: function set(_) {
        legendPosition = _;
      }
    },
    controlsPosition: {
      get: function get() {
        return controlsPosition;
      }, set: function set(_) {
        controlsPosition = _;
      }
    },
    showControls: {
      get: function get() {
        return showControls;
      }, set: function set(_) {
        showControls = _;
      }
    },
    controlLabels: {
      get: function get() {
        return controlLabels;
      }, set: function set(_) {
        controlLabels = _;
      }
    },
    showXAxis: {
      get: function get() {
        return showXAxis;
      }, set: function set(_) {
        showXAxis = _;
      }
    },
    showYAxis: {
      get: function get() {
        return showYAxis;
      }, set: function set(_) {
        showYAxis = _;
      }
    },
    defaultState: {
      get: function get() {
        return defaultState;
      }, set: function set(_) {
        defaultState = _;
      }
    },
    noData: {
      get: function get() {
        return noData;
      }, set: function set(_) {
        noData = _;
      }
    },

    // options that require extra logic in the setter
    margin: {
      get: function get() {
        return margin;
      }, set: function set(_) {
        if (_.top !== undefined) {
          margin.top = _.top;
          marginTop = _.top;
        }
        margin.right = _.right !== undefined ? _.right : margin.right;
        margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
        margin.left = _.left !== undefined ? _.left : margin.left;
      }
    },
    duration: {
      get: function get() {
        return duration;
      }, set: function set(_) {
        duration = _;
        renderWatch.reset(duration);
        multibar.duration(duration);
        xAxis.duration(duration);
        yAxis.duration(duration);
      }
    },
    color: {
      get: function get() {
        return color;
      }, set: function set(_) {
        color = nv.utils.getColor(_);
        legend.color(color);
      }
    },
    barColor: {
      get: function get() {
        return multibar.barColor;
      }, set: function set(_) {
        multibar.barColor(_);
        legend.color(function (d, i) {
          return d3.rgb('#ccc').darker(i * 1.5).toString();
        });
      }
    }
  });

  nv.utils.inheritOptions(chart, multibar);
  nv.utils.initOptions(chart);

  return chart;
};

{
  var MultiBarVerticalChart = function (_nv$ModelExtension3) {
    _inherits(MultiBarVerticalChart, _nv$ModelExtension3);

    function MultiBarVerticalChart() {
      _classCallCheck(this, MultiBarVerticalChart);

      return _possibleConstructorReturn(this, (MultiBarVerticalChart.__proto__ || Object.getPrototypeOf(MultiBarVerticalChart)).call(this, {
        name: 'multiBarVerticalChart',
        parent: 'multiBarChart'
      }));
    }

    return MultiBarVerticalChart;
  }(nv.ModelExtension);

  nv.ModelExtension.register(MultiBarVerticalChart);
}

nv.models.multiBarVerticalChartOld = function () {
  "use strict";

  //============================================================
  // Public Variables with Default Settings
  //------------------------------------------------------------

  var multibar = nv.models.multiBar(),
      xAxis = nv.models.axis(),
      yAxis = nv.models.axis(),
      interactiveLayer = nv.interactiveGuideline(),
      legend = nv.models.legend(),
      controls = nv.models.legend(),
      tooltip = nv.models.tooltip();

  var margin = { top: 30, right: 20, bottom: 50, left: 60 },
      marginTop = null,
      width = null,
      height = null,
      color = nv.utils.defaultColor(),
      showControls = true,
      controlLabels = {},
      showLegend = true,
      legendPosition = null,
      showXAxis = true,
      showYAxis = true,
      rightAlignYAxis = false,
      reduceXTicks = true // if false a tick will show for every data point
  ,
      staggerLabels = false,
      wrapLabels = false,
      rotateLabels = 0,
      x //can be accessed via chart.xScale()
  ,
      y //can be accessed via chart.yScale()
  ,
      state = nv.utils.state(),
      defaultState = null,
      noData = null,
      dispatch = d3.dispatch('stateChange', 'changeState', 'renderEnd'),
      controlWidth = function controlWidth() {
    return showControls ? 180 : 0;
  },
      duration = 0,
      useInteractiveGuideline = false;

  state.stacked = false; // DEPRECATED Maintained for backward compatibility

  xAxis.orient('bottom').tickPadding(7).showMaxMin(false).tickFormat(function (d) {
    return d;
  });
  yAxis.orient(rightAlignYAxis ? 'right' : 'left').tickFormat(d3.format(',.1f'));

  tooltip.duration(0).valueFormatter(function (d, i) {
    return yAxis.tickFormat()(d, i);
  }).headerFormatter(function (d, i) {
    return xAxis.tickFormat()(d, i);
  });

  interactiveLayer.tooltip.valueFormatter(function (d, i) {
    return d == null ? "N/A" : yAxis.tickFormat()(d, i);
  }).headerFormatter(function (d, i) {
    return xAxis.tickFormat()(d, i);
  });

  interactiveLayer.tooltip.valueFormatter(function (d, i) {
    return d == null ? "N/A" : yAxis.tickFormat()(d, i);
  }).headerFormatter(function (d, i) {
    return xAxis.tickFormat()(d, i);
  });

  interactiveLayer.tooltip.duration(0).valueFormatter(function (d, i) {
    return yAxis.tickFormat()(d, i);
  }).headerFormatter(function (d, i) {
    return xAxis.tickFormat()(d, i);
  });

  controls.updateState(false);

  //============================================================
  // Private Variables
  //------------------------------------------------------------

  var renderWatch = nv.utils.renderWatch(dispatch);
  var stacked = false;

  var stateGetter = function stateGetter(data) {
    return function () {
      return {
        active: data.map(function (d) {
          return !d.disabled;
        }),
        stacked: stacked
      };
    };
  };

  var stateSetter = function stateSetter(data) {
    return function (state) {
      if (state.stacked !== undefined) stacked = state.stacked;
      if (state.active !== undefined) data.forEach(function (series, i) {
        series.disabled = !state.active[i];
      });
    };
  };

  function chart(selection) {
    renderWatch.reset();
    renderWatch.models(multibar);
    if (showXAxis) renderWatch.models(xAxis);
    if (showYAxis) renderWatch.models(yAxis);

    selection.each(function (data) {
      var container = d3.select(this),
          that = this;
      nv.utils.initSVG(container);
      var availableWidth = nv.utils.availableWidth(width, container, margin),
          availableHeight = nv.utils.availableHeight(height, container, margin);

      chart.update = function () {
        if (duration === 0) container.call(chart);else container.transition().duration(duration).call(chart);
      };
      chart.container = this;

      state.setter(stateSetter(data), chart.update).getter(stateGetter(data)).update();

      // DEPRECATED set state.disableddisabled
      state.disabled = data.map(function (d) {
        return !!d.disabled;
      });

      if (!defaultState) {
        var key;
        defaultState = {};
        for (key in state) {
          if (state[key] instanceof Array) defaultState[key] = state[key].slice(0);else defaultState[key] = state[key];
        }
      }

      // Display noData message if there's nothing to show.
      if (!data || !data.length || !data.filter(function (d) {
        return d.values.length;
      }).length) {
        nv.utils.noData(chart, container);
        return chart;
      } else {
        chart.data = data;
        container.selectAll('.nv-noData').remove();
      }

      // Setup Scales
      x = multibar.xScale();
      y = multibar.yScale();

      // Setup containers and skeleton of chart
      var wrap = container.selectAll('g.nv-wrap.nv-multiBarWithLegend').data([data]);
      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarWithLegend').append('g');
      var g = wrap.select('g');

      gEnter.append('g').attr('class', 'nv-x nv-axis');
      gEnter.append('g').attr('class', 'nv-y nv-axis');
      gEnter.append('g').attr('class', 'nv-barsWrap');
      gEnter.append('g').attr('class', 'nv-legendWrap');
      gEnter.append('g').attr('class', 'nv-controlsWrap');
      gEnter.append('g').attr('class', 'nv-interactive');

      // Legend
      if (!showLegend) {
        g.select('.nv-legendWrap').selectAll('*').remove();
      } else {
        if (legendPosition === 'bottom') {
          legend.width(availableWidth - margin.right);

          g.select('.nv-legendWrap').datum(data).call(legend);

          margin.bottom = xAxis.height() + legend.height();
          availableHeight = nv.utils.availableHeight(height, container, margin);
          g.select('.nv-legendWrap').attr('transform', 'translate(0,' + (availableHeight + xAxis.height()) + ')');
        } else {
          legend.width(availableWidth - controlWidth());

          g.select('.nv-legendWrap').datum(data).call(legend);

          if (!marginTop && legend.height() !== margin.top) {
            margin.top = legend.height();
            availableHeight = nv.utils.availableHeight(height, container, margin);
          }

          g.select('.nv-legendWrap').attr('transform', 'translate(' + controlWidth() + ',' + -margin.top + ')');
        }
      }

      // Controls
      if (!showControls) {
        g.select('.nv-controlsWrap').selectAll('*').remove();
      } else {
        var controlsData = [{ key: controlLabels.grouped || 'Grouped', disabled: multibar.stacked() }, { key: controlLabels.stacked || 'Stacked', disabled: !multibar.stacked() }];

        controls.width(controlWidth()).color(['#444', '#444', '#444']);
        g.select('.nv-controlsWrap').datum(controlsData).attr('transform', 'translate(0,' + -margin.top + ')').call(controls);
      }

      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      if (rightAlignYAxis) {
        g.select(".nv-y.nv-axis").attr("transform", "translate(" + availableWidth + ",0)");
      }

      // Main Chart Component(s)
      multibar.disabled(data.map(function (series) {
        return series.disabled;
      })).width(availableWidth).height(availableHeight).color(data.map(function (d, i) {
        return d.color || color(d, i);
      }).filter(function (d, i) {
        return !data[i].disabled;
      }));

      var barsWrap = g.select('.nv-barsWrap').datum(data.filter(function (d) {
        return !d.disabled;
      }));

      barsWrap.call(multibar);

      // Setup Axes
      if (showXAxis) {
        xAxis.scale(x)._ticks(nv.utils.calcTicksX(availableWidth / 100, data)).tickSize(-availableHeight, 0);

        g.select('.nv-x.nv-axis').attr('transform', 'translate(0,' + y.range()[0] + ')');
        g.select('.nv-x.nv-axis').call(xAxis);

        var xTicks = g.select('.nv-x.nv-axis > g').selectAll('g');

        xTicks.selectAll('line, text').style('opacity', 1);

        if (staggerLabels) {
          var getTranslate = function getTranslate(x, y) {
            return "translate(" + x + "," + y + ")";
          };

          var staggerUp = 5,
              staggerDown = 17; //pixels to stagger by
          // Issue #140
          xTicks.selectAll("text").attr('transform', function (d, i, j) {
            return getTranslate(0, j % 2 == 0 ? staggerUp : staggerDown);
          });

          var totalInBetweenTicks = d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;
          g.selectAll(".nv-x.nv-axis .nv-axisMaxMin text").attr("transform", function (d, i) {
            return getTranslate(0, i === 0 || totalInBetweenTicks % 2 !== 0 ? staggerDown : staggerUp);
          });
        }

        if (wrapLabels) {
          g.selectAll('.tick text').call(nv.utils.wrapTicks, chart.xAxis.rangeBand());
        }

        if (reduceXTicks) xTicks.filter(function (d, i) {
          return i % Math.ceil(data[0].values.length / (availableWidth / 100)) !== 0;
        }).selectAll('text, line').style('opacity', 0);

        if (rotateLabels) xTicks.selectAll('.tick text').attr('transform', 'rotate(' + rotateLabels + ' 0,0)').style('text-anchor', rotateLabels > 0 ? 'start' : 'end');

        g.select('.nv-x.nv-axis').selectAll('g.nv-axisMaxMin text').style('opacity', 1);
      }

      if (showYAxis) {
        yAxis.scale(y)._ticks(nv.utils.calcTicksY(availableHeight / 36, data)).tickSize(-availableWidth, 0);

        g.select('.nv-y.nv-axis').call(yAxis);
      }

      //Set up interactive layer
      if (useInteractiveGuideline) {
        interactiveLayer.width(availableWidth).height(availableHeight).margin({ left: margin.left, top: margin.top }).svgContainer(container).xScale(x);
        wrap.select(".nv-interactive").call(interactiveLayer);
      }

      //============================================================
      // Event Handling/Dispatching (in chart's scope)
      //------------------------------------------------------------

      legend.dispatch.on('stateChange', function (newState) {
        for (var key in newState) {
          state[key] = newState[key];
        }dispatch.stateChange(state);
        chart.update();
      });

      controls.dispatch.on('legendClick', function (d, i) {
        if (!d.disabled) return;
        controlsData = controlsData.map(function (s) {
          s.disabled = true;
          return s;
        });
        d.disabled = false;

        switch (d.key) {
          case 'Grouped':
          case controlLabels.grouped:
            multibar.stacked(false);
            break;
          case 'Stacked':
          case controlLabels.stacked:
            multibar.stacked(true);
            break;
        }

        state.stacked = multibar.stacked();
        dispatch.stateChange(state);
        chart.update();
      });

      // Update chart from a state object passed to event handler
      dispatch.on('changeState', function (e) {
        if (typeof e.disabled !== 'undefined') {
          data.forEach(function (series, i) {
            series.disabled = e.disabled[i];
          });
          state.disabled = e.disabled;
        }
        if (typeof e.stacked !== 'undefined') {
          multibar.stacked(e.stacked);
          state.stacked = e.stacked;
          stacked = e.stacked;
        }
        chart.update();
      });

      if (useInteractiveGuideline) {
        interactiveLayer.dispatch.on('elementMousemove', function (e) {
          if (e.pointXValue == undefined) return;

          var singlePoint,
              pointIndex,
              pointXLocation,
              xValue,
              allData = [];
          data.filter(function (series, i) {
            series.seriesIndex = i;
            return !series.disabled;
          }).forEach(function (series, i) {
            pointIndex = x.domain().indexOf(e.pointXValue);

            var point = series.values[pointIndex];
            if (point === undefined) return;

            xValue = point.x;
            if (singlePoint === undefined) singlePoint = point;
            if (pointXLocation === undefined) pointXLocation = e.mouseX;
            allData.push({
              key: series.key,
              value: chart.y()(point, pointIndex),
              color: color(series, series.seriesIndex),
              data: series.values[pointIndex]
            });
          });

          interactiveLayer.tooltip.data({
            value: xValue,
            index: pointIndex,
            series: allData
          })();

          interactiveLayer.renderGuideLine(pointXLocation);
        });

        interactiveLayer.dispatch.on("elementMouseout", function (e) {
          interactiveLayer.tooltip.hidden(true);
        });
      } else {
        multibar.dispatch.on('elementMouseover.tooltip', function (evt) {
          evt.value = chart.x()(evt.data);
          evt['series'] = {
            key: evt.data.key,
            value: chart.y()(evt.data),
            color: evt.color
          };
          tooltip.data(evt).hidden(false);
        });

        multibar.dispatch.on('elementMouseout.tooltip', function (evt) {
          tooltip.hidden(true);
        });

        multibar.dispatch.on('elementMousemove.tooltip', function (evt) {
          tooltip();
        });
      }
    });

    window.onload = function () {
      d3.selectAll('.nv-series').each(function (d, i) {
        var group = d3.select(this),
            circle = group.select('circle');

        var color = circle.style('fill');
        circle.remove();

        var symbol = group.append('path').attr('d', d3.svg.symbol().type('square')).style('stroke', color).style('fill', color);
      });
    };

    applyCustomization();

    renderWatch.renderEnd('multibarchart immediate');
    return chart;
  }

  function applyCustomization() {
    chart.containerWidth = parseFloat(d3.select(".nv-multiBarWithLegend .nv-groups").node().getBBox().width);

    var legend = d3.select(".nv-legendWrap");
    legend.attr("transform", "translate(-" + (chart.containerWidth / 2 - 60) + "," + (height - 100) + ")");

    var svg = d3.select("svg"),
        lastRects,
        rectWidth,
        dpBarValues = [];

    // We get one positive rect of each serie from the svg (here the last serie)
    lastRects = svg.selectAll("g.nv-group").filter(function (d, i) {
      return i === 0;
    }).selectAll("rect");

    chart.data[0].values.forEach(function (item, i) {
      var d1 = chart.data[0].values[i].y;
      var d2 = chart.data[1].values[i].y;

      dpBarValues.push([d3.format(',.2f')(d1), d3.format(',.2f')(d2)]);
    });

    var seriesCounts = 0;
    svg.selectAll("g.nv-group").filter(function (d, i) {
      seriesCounts++;
    });

    var groupLabels = svg.select("g.nv-barsWrap").append("g");

    d3.selectAll('.dp-bar-chart-label').remove();

    // Set header
    svg.append("text").attr("x", 10).attr("y", 20).text("Share Change").attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-family", "monospace").style("fill", "#999999");

    svg.append("text").attr("x", 5).attr("y", 40).text("(Points)").attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-family", "monospace").style("fill", "#999999");

    lastRects.each(function (d, index) {
      var transformAttr = d3.select(this).attr("transform");
      var barWidth = parseFloat(d3.select(this).attr("width"));
      var yPos = -20;
      var text_1 = groupLabels.append("text");

      var x1 = d3.transform(d3.select(this.parentNode).attr("transform")).translate[0] + barWidth / 2;
      var x2 = d3.transform(d3.select(this.parentNode).attr("transform")).translate[0] + barWidth + barWidth / 2;

      text_1.attr("x", x1).attr("y", yPos) // We center the label)
      .text(dpBarValues[index][0]).attr("transform", transformAttr).attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-weight", "bold").style("fill", dpBarValues[index] < 0 ? "red" : "green");

      var bbox = text_1[0][0].getBBox();

      var rect_1 = groupLabels.append("rect");
      rect_1.attr("class", "dp-bar-chart-label").attr('x', x1 - 5).attr('y', yPos - 20).attr("transform", transformAttr).attr('width', bbox.width + 10).attr('height', bbox.height + 10).style("stroke", "#CCCCCC").style("fill", "none").style("stroke-width", 2);

      var text_2 = groupLabels.append("text");

      text_2.attr("x", x2).attr("y", yPos) // We center the label)
      .text(dpBarValues[index][1]).attr("transform", transformAttr).attr("class", "dp-bar-chart-label").style("font-size", "18px").style("font-weight", "bold").style("fill", dpBarValues[index] < 0 ? "red" : "green");

      var bbox = text_2[0][0].getBBox();

      var rect_2 = groupLabels.append("rect");
      rect_2.attr("class", "dp-bar-chart-label").attr('x', x2 - 5).attr('y', yPos - 20).attr("transform", transformAttr).attr('width', bbox.width + 10).attr('height', bbox.height + 10).style("stroke", "#CCCCCC").style("fill", "none").style("stroke-width", 2);
    });
  }

  //============================================================
  // Expose Public Variables
  //------------------------------------------------------------

  // expose chart's sub-components
  chart.dispatch = dispatch;
  chart.multibar = multibar;
  chart.legend = legend;
  chart.controls = controls;
  chart.xAxis = xAxis;
  chart.yAxis = yAxis;
  chart.state = state;
  chart.tooltip = tooltip;
  chart.interactiveLayer = interactiveLayer;

  chart.options = nv.utils.optionsFunc.bind(chart);

  chart._options = Object.create({}, {
    // simple options, just get/set the necessary values
    width: {
      get: function get() {
        return width;
      }, set: function set(_) {
        width = _;
      }
    },
    height: {
      get: function get() {
        return height;
      }, set: function set(_) {
        height = _;
      }
    },
    showLegend: {
      get: function get() {
        return showLegend;
      }, set: function set(_) {
        showLegend = _;
      }
    },
    legendPosition: {
      get: function get() {
        return legendPosition;
      }, set: function set(_) {
        legendPosition = _;
      }
    },
    showControls: {
      get: function get() {
        return showControls;
      }, set: function set(_) {
        showControls = _;
      }
    },
    controlLabels: {
      get: function get() {
        return controlLabels;
      }, set: function set(_) {
        controlLabels = _;
      }
    },
    showXAxis: {
      get: function get() {
        return showXAxis;
      }, set: function set(_) {
        showXAxis = _;
      }
    },
    showYAxis: {
      get: function get() {
        return showYAxis;
      }, set: function set(_) {
        showYAxis = _;
      }
    },
    defaultState: {
      get: function get() {
        return defaultState;
      }, set: function set(_) {
        defaultState = _;
      }
    },
    noData: {
      get: function get() {
        return noData;
      }, set: function set(_) {
        noData = _;
      }
    },
    reduceXTicks: {
      get: function get() {
        return reduceXTicks;
      }, set: function set(_) {
        reduceXTicks = _;
      }
    },
    rotateLabels: {
      get: function get() {
        return rotateLabels;
      }, set: function set(_) {
        rotateLabels = _;
      }
    },
    staggerLabels: {
      get: function get() {
        return staggerLabels;
      }, set: function set(_) {
        staggerLabels = _;
      }
    },
    wrapLabels: {
      get: function get() {
        return wrapLabels;
      }, set: function set(_) {
        wrapLabels = !!_;
      }
    },

    // options that require extra logic in the setter
    margin: {
      get: function get() {
        return margin;
      }, set: function set(_) {
        if (_.top !== undefined) {
          margin.top = _.top;
          marginTop = _.top;
        }
        margin.right = _.right !== undefined ? _.right : margin.right;
        margin.bottom = _.bottom !== undefined ? _.bottom : margin.bottom;
        margin.left = _.left !== undefined ? _.left : margin.left;
      }
    },
    duration: {
      get: function get() {
        return duration;
      }, set: function set(_) {
        duration = _;
        multibar.duration(duration);
        xAxis.duration(duration);
        yAxis.duration(duration);
        renderWatch.reset(duration);
      }
    },
    color: {
      get: function get() {
        return color;
      }, set: function set(_) {
        color = nv.utils.getColor(_);
        legend.color(color);
      }
    },
    rightAlignYAxis: {
      get: function get() {
        return rightAlignYAxis;
      }, set: function set(_) {
        rightAlignYAxis = _;
        yAxis.orient(rightAlignYAxis ? 'right' : 'left');
      }
    },
    useInteractiveGuideline: {
      get: function get() {
        return useInteractiveGuideline;
      }, set: function set(_) {
        useInteractiveGuideline = _;
      }
    },
    barColor: {
      get: function get() {
        return multibar.barColor;
      }, set: function set(_) {
        multibar.barColor(_);
        legend.color(function (d, i) {
          return d3.rgb('#ccc').darker(i * 1.5).toString();
        });
      }
    }
  });

  nv.utils.inheritOptions(chart, multibar);
  nv.utils.initOptions(chart);

  return chart;
};

{
  var MultiBarChartWithNesting = function (_nv$ModelExtension4) {
    _inherits(MultiBarChartWithNesting, _nv$ModelExtension4);

    function MultiBarChartWithNesting() {
      _classCallCheck(this, MultiBarChartWithNesting);

      return _possibleConstructorReturn(this, (MultiBarChartWithNesting.__proto__ || Object.getPrototypeOf(MultiBarChartWithNesting)).call(this, {
        name: 'multiBarChartWithNesting',
        parent: 'multiBarChart'
      }));
    }

    _createClass(MultiBarChartWithNesting, [{
      key: 'draw',
      value: function draw() {

        var _itemsInGroup = window.ITEMS_IN_GROUPS;

        var data = this.selection.data()[0];

        if (data.IsModified != true) {

          var emptyColumnsToInsertCount = Math.floor(data[0].values.length / _itemsInGroup);

          for (var i = 1; i < emptyColumnsToInsertCount; i++) {
            var positionToInsertEmpty = i * _itemsInGroup + (i - 1);

            for (var dI = 0; dI < data.length; dI++) {
              data[dI].values.splice(positionToInsertEmpty, 0, {
                "x": positionToInsertEmpty,
                "y": 0
              });
            }
          }

          // Set proper X-axis values after empty columns has been added

          for (var i = 0; i < data[0].values.length; i++) {
            for (var dI = 0; dI < data.length; dI++) {
              data[dI].values[i].x = i;
            }
          }

          /*data = [
          {
            "key": "Stream0",
            "color": "#561c8a",
            "label": "Total Beverages",
            "values": [
              {
                "x": 0,
                "y": 9,
              },
              {
                "x": 1,
                "y": 7
              },
              {
                "x": 2,
                "y": 7
              },
              {
                "x": 3,
                "y": 0
              },
              {
                "x": 4,
                "y": 8
              },
              {
                "x": 5,
                "y": 7
              },
              {
                "x": 6,
                "y": 7
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 8,
                "y": 8
              },
              {
                "x": 9,
                "y": 7
              },
              {
                "x": 10,
                "y": 7
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 12,
                "y": 8
              },
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 14,
                "y": 7
              }
            ]
          },
          {
            "key": "Stream1",
            "color": "#CCCCCC",
            "label": "Carbonated Beverages",
            "values": [
              {
                "x": 0,
                "y": 6
              },
              {
                "x": 1,
                "y": 5
              },
              {
                "x": 2,
                "y": 5
              },
              {
                "x": 3,
                "y": 0
              },
              {
                "x": 4,
                "y": 5
              },
              {
                "x": 5,
                "y": 5
              },
              {
                "x": 6,
                "y": 5
              },
              {
                "x": 7,
                "y": 0
              },
              {
                "x": 8,
                "y": 5
              },
              {
                "x": 9,
                "y": 5
              },
              {
                "x": 10,
                "y": 5
              },
              {
                "x": 11,
                "y": 0
              },
              {
                "x": 12,
                "y": 8
              },
              {
                "x": 13,
                "y": 7
              },
              {
                "x": 14,
                "y": 7
              }
            ]
          }];*/

          data.IsModified = true;

          this.selection.data([data]);
          this.extendedChart.update();

          return;
        }

        // chart - это this.extendedChart
        var svg = d3.select(this.extendedChart.container);

        var containerHeight = parseFloat(svg.select(".nv-multiBarWithLegend .nv-groups").node().getBBox().height);

        var startGroupRects = svg.selectAll("g.nv-group").filter(function (d, i) {
          return i === 0;
        }).selectAll("rect").filter(function (d, i) {
          return i % (_itemsInGroup + 1) == 0;
        });

        var svgNvGroupCount = svg.selectAll("g.nv-group")[0].length;
        var endGroupRects = svg.selectAll("g.nv-group").filter(function (d, i) {
          return i === svgNvGroupCount - 1;
        }).selectAll("rect").filter(function (d, i) {
          return i % (_itemsInGroup + 1) == _itemsInGroup - 1;
        });

        var columnWidth = startGroupRects[0][0].getBBox().width;

        var isStacked = this.extendedChart.stacked();
        if (isStacked == false) {
          columnWidth = columnWidth * svgNvGroupCount;
        }

        for (var i = 0; i < endGroupRects[0].length; i++) {
          var xStart = d3.transform(d3.select(d3.select(startGroupRects[0][i])[0][0]).attr("transform")).translate[0];
          var xEnd = d3.transform(d3.select(d3.select(endGroupRects[0][i])[0][0]).attr("transform")).translate[0] + columnWidth;

          var rectHeight = 55;
          var groupWidth = xEnd - xStart;
          var textWidth = 120;

          var rect = svg.append("rect");
          rect.attr("class", "dp-bar-chart-label").attr('x', xStart + 45).attr('y', containerHeight + rectHeight)
          //.attr("transform", transformAttr)
          .attr('width', groupWidth).attr('height', rectHeight).style("stroke", "#CCCCCC").style("fill", "none").style("stroke-width", 2);

          var rectWhiteBg = svg.append("rect");
          rectWhiteBg.attr("class", "dp-bar-chart-label-bg").attr('x', xStart + 45 + groupWidth / 2 - textWidth / 2).attr('y', containerHeight + rectHeight + 30)
          //.attr("transform", transformAttr)
          .attr('width', textWidth).attr('height', 50).style("fill", "#FFFFFF");

          /*var text = svg.append("text");
          text
            .attr("x", xStart + 45 + (groupWidth / 2) - (textWidth/2))
            .attr("y", containerHeight + rectHeight*2 + 5)
            .text("Share Change")
            .attr("class", "dp-bar-chart-label")
            .style("font-size", "18px")
            .style("font-family", "monospace")
            .style("fill", "#999999")*/

          var rectLeftWhiteBg = svg.append("rect");
          rectLeftWhiteBg.attr("class", "dp-bar-chart-label").attr('x', xStart + 35).attr('y', containerHeight + rectHeight + 1)
          //.attr("transform", transformAttr)
          .attr('width', 20).attr('height', 10).style("fill", "#FFFFFF");

          var rectRightWhiteBg = svg.append("rect");
          rectRightWhiteBg.attr("class", "dp-bar-chart-label").attr('x', xStart + groupWidth + 35).attr('y', containerHeight + rectHeight + 1)
          //.attr("transform", transformAttr)
          .attr('width', 20).attr('height', 10).style("fill", "#FFFFFF");

          var rectTitle = svg.append("g");
          rectTitle.attr("class", "dp-bar-chart-label-bg").attr('transform', "translate(" + (xStart + 50 + groupWidth / 2 - textWidth / 2) + ", " + (containerHeight + rectHeight + 40) + ")")
          //.attr("transform", transformAttr)
          .attr('width', textWidth).attr('height', 50);

          d3CustomUtils.DrawWrappedText("Share Change dfgdf dg df dfg dfgdfgdgdg", rectTitle, {
            width: textWidth,
            height: rectHeight * 2,
            fontSize: 13,
            fontColor: "#999999",
            maxLineCount: 2 });
        }
      }
    }]);

    return MultiBarChartWithNesting;
  }(nv.ModelExtension);

  nv.ModelExtension.register(MultiBarChartWithNesting);
}

{
  var _MultiBarChartWithNesting = function (_nv$ModelExtension5) {
    _inherits(_MultiBarChartWithNesting, _nv$ModelExtension5);

    function _MultiBarChartWithNesting() {
      _classCallCheck(this, _MultiBarChartWithNesting);

      return _possibleConstructorReturn(this, (_MultiBarChartWithNesting.__proto__ || Object.getPrototypeOf(_MultiBarChartWithNesting)).call(this, {
        name: 'multiBarChartExt',
        parent: 'multiBarChart'
      }));
    }

    return _MultiBarChartWithNesting;
  }(nv.ModelExtension);

  nv.ModelExtension.register(_MultiBarChartWithNesting);
}

{
  var _MultiBarChartWithNesting2 = function (_nv$ModelExtension6) {
    _inherits(_MultiBarChartWithNesting2, _nv$ModelExtension6);

    function _MultiBarChartWithNesting2() {
      _classCallCheck(this, _MultiBarChartWithNesting2);

      return _possibleConstructorReturn(this, (_MultiBarChartWithNesting2.__proto__ || Object.getPrototypeOf(_MultiBarChartWithNesting2)).call(this, {
        name: 'multiBarHorizontalChartExt',
        parent: 'multiBarHorizontalChart'
      }));
    }

    return _MultiBarChartWithNesting2;
  }(nv.ModelExtension);

  nv.ModelExtension.register(_MultiBarChartWithNesting2);
}

{
  var MultiChartWithNesting = function (_nv$ModelExtension7) {
    _inherits(MultiChartWithNesting, _nv$ModelExtension7);

    function MultiChartWithNesting() {
      _classCallCheck(this, MultiChartWithNesting);

      return _possibleConstructorReturn(this, (MultiChartWithNesting.__proto__ || Object.getPrototypeOf(MultiChartWithNesting)).call(this, {
        name: 'multiChartExt',
        parent: 'multiChart'
      }));
    }

    return MultiChartWithNesting;
  }(nv.ModelExtension);

  nv.ModelExtension.register(MultiChartWithNesting);
}

{
  var Waterfall = function (_nv$ModelExtension8) {
    _inherits(Waterfall, _nv$ModelExtension8);

    function Waterfall() {
      _classCallCheck(this, Waterfall);

      var _this53 = _possibleConstructorReturn(this, (Waterfall.__proto__ || Object.getPrototypeOf(Waterfall)).call(this, {
        name: 'waterfall',
        parent: 'multiBarChart'
      }));

      _this53.defaults = {
        waterfallColors: {
          boundary: 'grey',
          positive: 'green',
          negative: 'red'
        }
      };
      return _this53;
    }

    _createClass(Waterfall, [{
      key: '_getChartData',
      value: function _getChartData() {
        return this.selection.datum();
      }
    }, {
      key: 'draw',
      value: function draw() {
        var svg = d3.select(this.extendedChart.container);

        //hide lower series
        svg.select('.nv-series-0').attr('display', 'none');

        //paint upper series
        var bars = svg.selectAll('.nv-series-1 rect')[0];
        var series = this.selection.datum()[1];
        bars.forEach(function (bar, index) {
          bar = d3.select(bar);
          var serie = series.values[index];
          bar.attr('fill', serie.additionalData.color).style('fill', serie.additionalData.color);
        });
      }
    }, {
      key: 'prepareData',
      value: function prepareData(selection) {
        //always taking only first series
        var initialSeries = this._getChartData()[0];

        this.extendedChart.yAxis.axisLabel(initialSeries.key);

        var upperSeries = {
          key: initialSeries.key,
          color: 'black',
          values: []
        };
        var lowerSeries = {
          key: initialSeries.key + ' HIDDEN',
          color: 'blue',
          values: []
        };

        var currentHeightLower = void 0;
        var currentHeightUpper = void 0;
        var prevYValue = 0;
        var yMin = Infinity;
        var yMax = -Infinity;
        for (var i = 0; i < initialSeries.values.length; i++) {
          var serie = initialSeries.values[i];
          var yValue = parseFloat(this.extendedChart.y()(serie));
          var xValue = this.extendedChart.x()(serie);
          if (i == 0 || i == initialSeries.values.length - 1) {
            currentHeightLower = 0;
          } else {
            currentHeightLower += prevYValue >= 0 ? currentHeightUpper : 0;
          }
          currentHeightUpper = Math.abs(yValue);
          if (yValue < 0) {
            currentHeightLower -= currentHeightUpper;
          }
          lowerSeries.values[i] = {
            label: xValue,
            value: currentHeightLower
          };
          var waterfallColors = Object.defaultsDeep({}, this.extendedChart.waterfallColors(), this.defaults.waterfallColors);
          var _formatted2 = this.utils.conditionalFormat.fn(yValue);
          var color = _formatted2.color || (yValue >= 0 ? waterfallColors.positive : waterfallColors.negative);
          upperSeries.values[i] = {
            label: xValue,
            value: currentHeightUpper,
            additionalData: {
              value: yValue >= 0 ? currentHeightLower + currentHeightUpper : currentHeightLower,
              change: i > 0 && i < initialSeries.values.length - 1 ? yValue : null,
              isPositive: yValue >= 0,
              color: i > 0 && i < initialSeries.values.length - 1 ? color : waterfallColors.boundary
            }
          };
          //calculating min/max
          if (i > 0 && i < initialSeries.values.length - 1) {
            var visibleYLower = currentHeightLower;
            var visibleYUpper = currentHeightLower + currentHeightUpper;
            if (yMin > visibleYLower) yMin = visibleYLower;
            if (yMax < visibleYUpper) yMax = visibleYUpper;
          }

          prevYValue = yValue;
        }

        selection.datum([lowerSeries, upperSeries]);
        this.extendedChart.x(function (d) {
          return d.label;
        });
        this.extendedChart.y(function (d) {
          return d.value;
        });
        var correction = parseInt((yMax - yMin) / 20);
        yMin = yMin - correction * 2;
        yMax = yMax + correction;
        if (yMin < 0) yMin = 0;
        this.extendedChart.yDomain([yMin, yMax]);

        // this.extendedChart.tooltip.contentGenerator(({data}) => {
        //   const format = this.extendedChart.yAxis.tickFormat()
        //   const formattedValue = this.utils.conditionalFormat.fn(data.additionalData.value)
        //   let html = `
        //     <h4 style='text-align:center; margin-top: 5px; margin-bottom: 10px'>${data.label}</h4>
        //     <hr/>
        //     <p style='font-weight: bold'>
        //       ${formattedValue.text}
        //     </p>
        //   `
        //   if(data.additionalData.change != null) {
        //     const formattedChange = this.utils.conditionalFormat.fn(data.additionalData.change)
        //     html += `
        //       <p style='font-weight: bold; color: ${formattedChange.color || data.additionalData.color}'>
        //         ${data.additionalData.change > 0 ? '+' : ''}${formattedChange.text}
        //       </p>
        //     `
        //   }
        //   return html
        // })
      }
    }, {
      key: 'applyOptions',
      value: function applyOptions() {
        this.extendedChart.stacked(true);
        this.extendedChart.showLegend(false);
        this.extendedChart.showControls(false);
      }
    }, {
      key: 'beforeUpdate',
      value: function beforeUpdate() {}
    }, {
      key: 'extendChartOptions',
      value: function extendChartOptions() {
        this.defineOption('waterfallColors');
      }
    }]);

    return Waterfall;
  }(nv.ModelExtension);

  nv.ModelExtension.register(Waterfall);
}