!function(e,t){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),o=n(t);const a=o.default.util,i=a.toArray,l=a.each,c=a.extend,s=o.default.url.makeUrl,u=/^(?:cl([bn])|([adgin]))(\d+)(?:sz(\d+))?/,d=r.default._.EXPERIMENTID||null,f=r.default._.SITEZONE||null,h="//rs.mail.ru/",p=e=>(new Image).src=e,m=e=>{let t;if(!(t=e.match(u)))return null;let n="",r=!1,o="",a="";return t[1]?n="s".concat(t[1]):"n"===t[2]?n="nc":"i"===t[2]?(r=!0,n=t[1]):n=t[2],o=t[3],a=t[4]?t[4]:f,{type:n,noRandom:r,num:o,params:[{name:"sz",value:a},{name:"test_id",value:d}]}};function g(){const e={d:"imp",sb:"click"},t={};i(arguments).reverse().forEach(e=>{e&&e.split(",").reverse().forEach(e=>{const n=m(e.trim());null!==n&&(t[n.type]||(t[n.type]=[]),t[n.type].push(n))})}),l(t,(t,n)=>{1===t.length?v(t[0]):t.length>1&&e[n]&&y(e[n],t.map(e=>e.num))})}const v=e=>{if(null===e)return;const t=[h,e.type,e.num,".gif"].join("");p(s(t,e.params,1<<Number(e.noRandom)<<2))},y=(e,t,n)=>{e&&t&&t.length&&p(s("//rs.mail.ru/bulkstat/",[{name:"type",value:e},{name:"banner_ids",value:t.map(encodeURIComponent).join(",")},{name:"test_id",value:n||d}],5))};c(g,{bulk:y,links:e=>{e&&e.length&&p(s("//rs.mail.ru/ns.gif",[{name:"n",value:e.map(encodeURIComponent).join(",")}],1))}});var w=/^([a-z][a-z0-9]*)/g,_=/^\.([A-z0-9\-\_]+)/g,b=/^#([A-z0-9\-\_]+)/g,x=/^@([A-z0-9\-\_]+)="([^"]+)"/g,A=/^\*(\d+)/g,C=new RegExp('"',"g"),E=/\s+/,N=/-(\w)/g;function S(e){for(var t,n=[],r=[];t=e.pop();){var o=document.createElement(t.tag||"div");for(var a in t.attrs||(t.attrs={}),t.id&&(t.attrs.id=t.id),t.classes&&(t.attrs.class=t.classes.join(" ")),t.attrs)t.attrs.hasOwnProperty(a)&&"length"!==a&&o.setAttribute(a,t.attrs[a]);for(var i=0,l=r;i<l.length;i++){var c=l[i];o.appendChild(c)}r.length=0,n.push(o),r.push(o);for(a=1;a<t.multi;a++){var s=o.cloneNode(!0);n.push(s),r.push(s)}}return[n,r]}function k(e){return e.replace(N,(function(e,t){return t.toUpperCase()}))}function j(e){return null===e.offsetParent}var I,O,F,P,T,R,z,M,H=!1;function U(e,t,n){var r=t.available,o=t.styles;if(void 0===n&&(n=!1),r){for(var a=0,i=o;a<i.length;a++){var l=i[a],c=l.field,s=l.value;e.style[c]=s}var u;if(H)u=window.getComputedStyle(e);else if(H=!0,e.style.setProperty){var d=e.style.getPropertyValue("display");e.style.setProperty("display","inline");var f=(u=window.getComputedStyle(e)).display;if(e.style.setProperty("display",d),"inline"!==f)return n&&console.warn("[Honeypot] detect: property changed",{Bait:e,display:f,oldValue:"inline"}),!0}return o.some((function(t){for(var r=t.field,o=t.value,a=0,i=function(e){return[e,k(e)]}(r);a<i.length;a++){var l=i[a];if(l in u&&u[l]!==o&&"auto"!==u[l])return n&&console.warn("[Honeypot] detect: property changed",{Bait:e,Field:r,property:u[l],oldValue:o}),!0}}))}return!1}function B(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var D,L=[],W=function(){function e(e,t){void 0===t&&(t=document.body);try{I=e[0],O=e[1],F=e[2],P=e[3],T=t}catch(e){console.error(e)}}return e.prototype.check=function(e){void 0===e&&(e=!1);try{if(L.length)return L.some((function(t){return j(t)?(e&&console.warn("[Honeypot] detect: hidden bait",{Function:"checkIfHidden",Bait:t}),!0):U(t,z,e)}));if(1===I.length)return e&&console.warn("[Honeypot] detect: configBaits.length === 1",{ConfigBaits:I}),!0;M=I.map((function(e){var t=e.split(E),n=(e.match(C)||[]).length;if(n>0&&n%2==0)for(var r=null,o=0;o<t.length;o++)if(null===r){var a=(t[o].match(C)||[]).length;a&&a%2&&(r=o)}else t[r]+=" "+t[o],-1!==t[o].indexOf('"')&&(r=null),t[o]=void 0;return t.filter((function(e){return e})).map((function(e){var t,n={id:null,tag:null,classes:null,attrs:null,multi:1};do{w.lastIndex=0,_.lastIndex=0,b.lastIndex=0,x.lastIndex=0,A.lastIndex=0,(t=w.exec(e))?(e=e.substr(w.lastIndex),n.tag=t[1]):(t=_.exec(e))?(e=e.substr(_.lastIndex),n.classes=n.classes||[],n.classes.push(t[1])):(t=b.exec(e))?(e=e.substr(b.lastIndex),n.id=t[1]):(t=x.exec(e))?(e=e.substr(x.lastIndex),n.attrs=n.attrs||{},n.attrs[t[1]]=t[2]):(t=A.exec(e))&&(e=e.substr(A.lastIndex),n.multi=parseInt(t[1],10))}while(t&&e.length);if(e.length)throw new Error('Unparsed template: "'+e+'"');return n}))})),p=O,z={available:"function"==typeof window.getComputedStyle,styles:p.map((function(e){var t=e.split(/\s*:\s*/);return{field:t[0],value:t[1]}}))},R=document.createElement("div");var t={position:"absolute",visibility:"hidden",top:"-"+B(9e3,12e3)+"px"};B(0,10)>5?t.left="-"+B(9e3,12e3)+"px":t.right="-"+B(9e3,12e3)+"px";var n=Object.keys(t);n.sort((function(){return Math.random()-.5}));for(var r=0,o=n;r<o.length;r++){var a=o[r];R.style[a]=t[a]}if(T.appendChild(R),function(e,t){void 0===t&&(t=!1);try{if(e&&(e=e.filter((function(e){return e}))).length)for(var n=document.styleSheets,r=function(r){var o=n[r];if(!o.href&&e.some((function(e){if(-1!==o.ownerNode.innerText.indexOf(e))return t&&console.warn("[Honeypot] detect: css rule is found",{Function:"checkCssRules",Rule:e}),!0})))return{value:!0}},o=n.length;o--;){var a=r(o);if("object"==typeof a)return a.value}}catch(e){}}(P,e))return!0;for(var i=0,l=M;i<l.length;i++){var c=S(l[i]),s=c[0],u=c[1];if(s.length){for(var d=0,f=u;d<f.length;d++){var h=f[d];R.appendChild(h)}if(s.some((function(t){return L.push(t),j(t)?(e&&console.warn("[Honeypot] detect: hidden bait",{Function:"checkIfHidden",Bait:t}),!0):!!U(t,z,e)||void 0})))return!0}}if(function(e,t){void 0===t&&(t=!1);try{if(e)if((e=e.filter((function(e){return e}))).length)if(e.some((function(e){var n=document.querySelectorAll(e);return n.length>0&&Array.prototype.every.call(n,(function(n){if(j(n))return t&&console.warn("[Honeypot] detect: hidden element",{Function:"checkSelector",Selector:e,Elem:n}),!0}))})))return!0}catch(e){}}(F,e))return!0}catch(e){return console.error("honeypot detect error",e),!0}var p;return!1},e.prototype.destroy=function(){R&&(T.removeChild(R),R=null),L.length=0,I=O=F=P=M=z=null},e}(),V=new Function,q=function(e,t){var n=e,r="GET",o=null,a=!1,i=!1,l=function(){var e={readyState:4,status:-1};e.open=e.send=V;try{e=new window.XMLHttpRequest}catch(t){try{e=new window.ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new window.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}}return e}(),c=null,s=new Date,u={error:c,xhr:l};"object"==typeof e&&(n=e.url,r=e.method||r,o=e.body||o,a=e.sync||a,i=e.credentials||i),l.url=n;var d=function(){(c||4===l.readyState)&&(d=V,u.error=c,l.duration=new Date-s,l.onerror=l.onreadystatechange=null,"function"==typeof t&&t(c,l))};try{l.onreadystatechange=d,l.onerror=function(e){c=e,d()},l.open(r,n,!a),l.withCredentials=i,l.send(o)}catch(e){c=e,d()}return u},X=!1;try{X="http://example.com/"===new URL("http://example.com/").href}catch(e){}function K(e,t){return Math.random()*(t-e+1)+e|0}var G=function(e){return Array.prototype.slice.call(e)},Y={random:K,randomBoolean:function(e){return K(0,100)<=e},calcString:function(e,t){if(e=parseInt(e,10),function(){if(void 0===D)try{if("function"==typeof window.getComputedStyle){var e=document.createElement("div");e.style.height="calc(30px + 30px)",document.getElementsByTagName("body")[0].appendChild(e),D="60px"===window.getComputedStyle(e,null).getPropertyValue("height"),e.parentNode.removeChild(e)}}catch(e){D=!1}return D}()){for(var n=[],r=0,o=0,a=K(1,6);o<a;o++)n.push(K(-100,100)),r+=n[n.length-1];return r!==e&&n.push(e-r),"calc("+n.map((function(e){return e.toString()+t})).join(" + ")+")"}return e+t},replaceUrl:function(e,t,n){if(X&&t){t.startsWith("//")&&(t="https:"+t);var r,o=e.charAt(0),a='"'===o||"'"===o,i=0+a;r=n?e.indexOf((a?o:"")+")"):a?e.indexOf(o,i+1):e.length;var l=e.slice(i,r);try{l=new URL(l,t).href}catch(e){}return e.slice(0,i)+l+e.slice(r)}return e},replaceContent:function(e){var t=e.charAt(0),n='"'===t||"'"===t,r=Number(n),o=n?e.indexOf(t,r):e.indexOf(";",r),a=e.slice(r,o),i="";if(/^\\[a-z0-9]+$/.test(a)||!n)i=a;else for(var l=0;l<a.length;l++){var c=a[l].charCodeAt(0);isNaN(c)||(i+="\\"+c.toString(16))}return e.slice(0,r)+i+e.slice(o)},iterate:function(e,t,n){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&"length"!==r&&t.call(n||this,e[r],r)},extend:function(){var e=G(arguments),t=e.shift();return e.forEach((function(e){for(var n in e)t[n]=e[n]})),t},merge:function(){var e=G(arguments),t=e.shift();return e.forEach((function(e){for(var n in e)t[n]||(t[n]=e[n])})),t},toArray:G};function Z(e){e&&this.__rules.push(e)}function J(e,t,n){this.__style=function(e){var t=document.createElement("style");return t.appendChild(document.createTextNode("")),(e=e||{}).rel="stylesheet",e.type="text/css",e.media=e.media||"screen",Y.iterate(e,(function(e,n){e&&t.setAttribute(n,e)})),t}(e),this.__style.__created=!0,this.__rules=[],this.__originalNode=t,this.__alwaysInHead=n}function Q(){this.__rules.length&&this.__style.appendChild(document.createTextNode(this.__rules.join("\n")))}J.prototype={constructor:J,insert:function(){Z.apply(this,arguments)},insertBlock:function(e,t){Z.apply(this,[e+"{"+t+"}"])},setContent:function(e){this.__style.appendChild(document.createTextNode(e))},apply:function(){var e,t,n,r;this.__originalNode&&this.__originalNode.parentNode?(e="id",t=this.__originalNode,n=this.__style,(r=t.getAttribute(e))&&n.setAttribute(e,r),this.__originalNode.parentNode.replaceChild(this.__style,this.__originalNode)):(this.__alwaysInHead?document.head:function(){for(var e=document.styleSheets,t=e.length;t>0;t--){var n=e[t-1];if(n&&n.ownerNode&&n.ownerNode.parentNode)return n.ownerNode.parentNode}}()||document.head).appendChild(this.__style);Q.apply(this)},getSheet:function(){return this.__style.sheet}};var ee,te={};Object.defineProperty(te,"__esModule",{value:!0});for(var ne={animation:["-name","-duration","-timing-function","-delay","-iteration-count","-direction","-fill-mode","-play-state"],background:["-clip","-color","-image","-origin","-position","-repeat","-size","-attachment"],columns:["-count","-width"],flex:["-grow","-shrink","-basis"],"flex-flow":["flex-direction","flex-wrap"],font:["-style","-variant","-weight","-stretch","-size","line-height","-family"],grid:["-template-rows","-template-columns","-template-areas","-auto-rows","-auto-columns","-auto-flow","-column-gap","-row-gap","column-gap","row-gap"],"grid-area":["grid-row-start","grid-column-start","grid-row-end","grid-column-end"],"grid-column":["-start","-end"],"grid-row":["-start","-end"],"grid-template":["-areas","-columns","-rows"],"list-style":["-image","-position","-type"],offset:["-anchor","-distance","-path","-position","-rotate"],"place-content":["align-content","justify-content"],"place-items":["align-items","justify-items"],"place-self":["align-self","justify-self"],"text-decoration":["-line","-color","-style","-thickness"],transition:["-property","-duration","-timing-function","-delay"],border:[],"border-radius":[],"column-rule":[],margin:[],outline:[],padding:[]},re=["top","right","bottom","left"],oe=["top","bottom"],ae=["right","left"],ie=["width","style","color"],le=0,ce=ie;le<ce.length;le++){var se="-"+(me=ce[le]);ne["border"+se]=[],ne.border.push(se),ne["column-rule"].push(se),ne.outline.push(se)}for(var ue=0,de=re;ue<de.length;ue++){var fe="-"+de[ue];ne["border"+fe]=ne.border,ne.margin.push(fe),ne.padding.push(fe);for(var he=0,pe=ie;he<pe.length;he++){var me;ne["border-"+(me=pe[he])].push("border"+fe+"-"+me)}}for(var ge=0,ve=oe;ge<ve.length;ge++)for(var ye=ve[ge],we=0,_e=ae;we<_e.length;we++){var be=_e[we];ne["border-radius"].push("border-"+ye+"-"+be+"-radius")}for(var xe=Object.keys(ne),Ae={},Ce=0,Ee=xe;Ce<Ee.length;Ce++)for(var Ne=Ee[Ce],Se=0,ke=ne[Ne];Se<ke.length;Se++){var je=ke[Se],Ie=je.startsWith("-")?Ne+je:je;Ae[Ie]=null!==(ee=Ae[Ie])&&void 0!==ee?ee:[],Ae[Ie].push(Ne)}var Oe=te.lookupShorthands=function(e,t){var n,r=null!==(n=Ae[e])&&void 0!==n?n:[];return t?r.filter((function(e){return t.style.getPropertyValue(e)})).sort((function(e,n){return t.cssText.indexOf(e)-t.cssText.indexOf(n)})):r};var Fe=/content\s*:\s*/;function Pe(e){return e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))}var Te=/^(-?\d+)([a-z%]+)$/,Re=/\s(?![*+\-/]|[^()]+\)+|\(+)/;function ze(e,t,n,r){for(var o,a="",i=t(e.selectorText),l=0;l<e.style.length;l++){var c="important"===e.style.getPropertyPriority(e.style[l])?" !important":"",s=e.style[l];/background-(repeat|position)-[xy]/.test(s)&&(s=s.replace(/-[xy]$/,""));var u=e.style[s]||e.style[Pe(s)]||e.style.getPropertyValue(s);if(void 0!==u&&u.length||(s=s.replace(/-(value|(ltr|rtl)-source)$/g,""),u=e.style[s]||e.style[Pe(s)]),void 0===u&&"float"===s&&(u=e.style.cssFloat),void 0!==u&&u.length){if(r.randomize&&r.randomize.length&&r.randomize.indexOf(s)>-1&&i!=e.selectorText){for(var d=u.split(Re),f=d.length,h=[];f--;){var p=Te.exec(d[f]);h.unshift(p?Y.calcString(p[1],p[2]):d[f])}u=h.join(" ")}a+=s+": "+u+c+"; "}if("string"==typeof u&&!u.length)Oe(s,e).forEach((function(t){var n="important"===e.style.getPropertyPriority(t)?" !important":"",r=e.style[t]||e.style.getPropertyValue(t);"string"==typeof r&&r.length&&(a+=t+": "+r+n+"; ")}))}return-1!==a.indexOf("url(")&&(a=function(e,t){var n=!0;return e.split("url(").map((function(e){return n?(n=!1,e):Y.replaceUrl(e,t,!0)})).join("url(")}(a,n)),-1!==a.indexOf("content")&&(o=!0,a=a.split(Fe).map((function(e){return o?(o=!1,e):Y.replaceContent(e)})).join("content:")),i+" { "+a+" }"}var Me=function(e,t,n,r,o){o=o||{},Y.iterate(function(e){try{return e.cssRules||e.rules}catch(e){return null}}(e),(function(e){switch(e.type){case 1:r(ze(e,t,n,o));break;case 4:var a=[];Y.iterate(e.cssRules||e.rules,(function(e){a.push(ze(e,t,n,o))})),r("@media "+e.media.mediaText+" { "+a.join(" ")+" }");break;default:r(e.cssText)}}))},He=/^(\/|https?:\/\/([^\/]*.)?(dev|imgs)?mail.ru\/)/,Ue=/^(\/|https?:\/\/([^\/]*.)?mrgcdn.ru\/)/,Be=/.*?\/\/.*?\//,De=!1,Le=!1,$e=!1,We=[];function Ve(e,t,n){var r=e(n);return We.includes(n)||De||t||r===n?r:r+","+n}function qe(e){var t=q({url:e,sync:!0});if(t.error){var n="[CSS LOADING ERROR] Cant load "+e;throw window.ajs&&window.ajs.log&&window.ajs.log(n),t.error.description=n,t.error.sheet=e,t.error}return t.xhr.responseText}function Xe(e){var t;return e.ownerNode&&(t=((t=e.ownerNode.href||e.ownerNode.getAttribute("x-href"))||"").replace(/^https:/,"")),t}var Ke=function(e){e&&("boolean"==typeof e.justOneSelector&&(De=e.justOneSelector),"boolean"==typeof e.useRelativeProxy&&(Le=e.useRelativeProxy),"boolean"==typeof e.stylesAlwaysInHead&&($e=e.stylesAlwaysInHead),e.justOneSelectorArr&&(We=e.justOneSelectorArr))},Ge=function(e,t,n,r){!function(e,t){var n=/^(https:)?\/\/[^/]+/,r=e.map((function(e){return e.replace(n,"")}));!function e(){Y.iterate(document.styleSheets,(function(e){if("LINK"===e.ownerNode.tagName){var t=Xe(e).replace(n,"");r=r.filter((function(e){return t!==e}))}})),r.length?setTimeout(e,100):t()}()}(e,(function(){[].map.call(document.styleSheets,(function(e){return e})).forEach((function(e){if(e.ownerNode&&!e.ownerNode.__created&&!e.__updated&&"LINK"===e.ownerNode.tagName&&(!r.excludeStyles||!r.excludeStyles.test(e.href))){var o=e;e.__updated=!0;var a=Xe(e);if(e.href&&(He.test(e.href)||Ue.test(e.href)))try{var i=function(e){var t=e.href;try{return qe(t)}catch(e){if(Le)return qe(t=t.replace(Be,"/"));throw e}}(e);if(i){var l=new J({"x-href":a,media:e.media.mediaText},e.ownerNode,e.__alwaysInHead);l.setContent(i),l.apply(),(o=l.getSheet()).__updated=!0}}catch(e){if("function"==typeof n)return void n(e)}var c=new J({"x-href":a,media:e.media&&e.media.mediaText},o.ownerNode,e.__alwaysInHead);c.__updated=!0,Me(o,Ve.bind(null,t,!1),a,(function(e){c.insert(e.toString())}),r),c.apply()}}))}))},Ye=function(e){if((e=(e||[]).map((function(e){return(e||"").replace(/^https:/,"")}))).length){var t=[];Y.iterate(document.styleSheets,(function(n){var r=Xe(n);r&&-1!==e.indexOf(r)&&t.push(n)}));for(var n=t.length-1;n>=0;n--){var r=t[n];r.ownerNode.parentNode.removeChild(r.ownerNode)}}},Ze=function(e,t,n){var r=new J({},void 0,$e),o=Ve.bind(null,t,n),a=function(e,t){return o(e)+function(e){var t=[];return Y.iterate(e,(function(e,n){t.push(n+":"+e+";")})),"{"+t.join("\n")+"}"}(t)};return Y.iterate(e,(function(e,t){if(/@(media|supports|document|page|keyframes|font-feature-values)/.test(t)){var n=[];Y.iterate(e,(function(e,t){n.push(a(t,e))})),r.insertBlock(t,n.join(""))}else r.insert(a(t,e))})),r.apply(),r};function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Qe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var et=1e3,tt=function(e){for(var t=0;t<10;t++)e.push(t.toString());for(t=0;t<25;t++)e.push(String.fromCharCode(97+t)),e.push(String.fromCharCode(65+t));return function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}(e)}([]),nt=tt.length;var rt=function(){for(var e=[],t=0;e.length<5&&t<tt.length;t++)(e.length>0||!/[0-9]/.test(tt[t]))&&e.push(tt[t]);return e.join("")}();function ot(){return rt+function e(t){return(t>=nt?e((t/nt>>0)-1):"")+tt[t%nt>>0]}(et++)}var at={enabled:!1},it=function(){function e(){}var t=e.prototype;return t.createElement=function(e){},t.getAllElements=function(){},e}(),lt=function(){function e(){}var t=e.prototype;return t.injectDependencies=function(e){this.deps=e},t.setAttribute=function(e,t,n){},t.createElementFactory=function(){},t.createFragment=function(){},t.appendChild=function(e,t){},t.bakeFragment=function(e,t,n){},t.queryAllElements=function(e){},t.mountElementAt=function(e,t,n){},t.isComponent=function(e){return!1},t.decorateComponent=function(e,t,n){return e},e}(),ct=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).elements=[],t}Qe(t,e);var n=t.prototype;return n.createElement=function(e){var t=document.createElement(e);return this.elements.push(t),t},n.getAllElements=function(){return this.elements},t}(it),st=function(e){function t(){return e.apply(this,arguments)||this}Qe(t,e);var n=t.prototype;return n.setAttribute=function(e,t,n){switch(t){case"id":case"className":e[t]=n;break;default:e.setAttribute(t,n)}},n.createElementFactory=function(){return new ct},n.createFragment=function(){return document.createDocumentFragment()},n.appendChild=function(e,t){e.appendChild(t)},n.bakeFragment=function(e,t,n){e._allElements=t.getAllElements()},n.queryAllElements=function(e){return e._allElements},n.mountElementAt=function(e,t,n){var r=e._allElements[n];r&&(t.parentNode.insertBefore(e,t),r.appendChild(t))},t}(lt),ut=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).elements=[],t}Qe(t,e);var n=t.prototype;return n.createElement=function(e){var t={tag:e,attrs:{}};return this.elements.push(t),t},n.getAllElements=function(){return this.elements},t}(it),dt=function(e){function t(){return e.apply(this,arguments)||this}Qe(t,e);var n=t.prototype;return n.setAttribute=function(e,t,n){"className"===t&&(t="class"),e.attrs=e.attrs||{},e.attrs[t]=n},n.createElementFactory=function(){return new ut},n.createFragment=function(){return{tag:"div",children:[],_isFragment:!0,attrs:{}}},n.appendChild=function(e,t){var n;(e.children=e.children||[],t._isFragment)?(n=e.children).push.apply(n,t.children):e.children.push(t)},n.bakeFragment=function(e,t,n){e._allElements=t.getAllElements(),void 0!==n&&(e.tag=n)},n.mountElementAt=function(e,t,n){var r=e._allElements[n];r.children=r.children||[],r.children.push(t),e._mountedAt=n,e._mountedAtChild=r.children.length-1},n.updateMountedElement=function(e,t){e._allElements[e._mountedAt].children[e._mountedAtChild]=t},n.isComponent=function(e){return!e.prototype},n.cloneFragment=function(e,t){void 0===t&&(t=[]);var n=e.children,r={_isFragment:e._isFragment,_mountedAt:e._mountedAt,_mountedAtChild:e._mountedAtChild,tag:e.tag,key:e.key,attrs:e.attrs};if(e._allElements?(r._isFragment=e._isFragment,r._mountedAt=e._mountedAt,r._mountedAtChild=e._mountedAtChild,r._allElements=t):t.push(r),n){var o;r.children=[];for(var a=0;a<n.length;a++)o=this.cloneFragment(n[a],t),r.children.push(o)}return r},n.decorateComponent=function(e,t,n){var r=this.deps.feast,o=this,a=e.constructor!==Object?e.constructor:r.Block,i=e.createFragment||r.Block.prototype.createFragment;return e.constructor=function(){a.apply(this,arguments)},e.createFragment=function(){var e=i.apply(this,arguments);if(!at.enabled||!1===t.enabled||"function"==typeof t.enabled&&!1===t.enabled(this))return e;var r=this.constructor["180225_fragment"];if(r||(r=n(null,{},Je({},t,{binding:"feast"})),this.constructor["180225_fragment"]=r),!r||!r.children||!r.children.length)return e;if(this.immutable&&e._isFragment)return e;var a=o.cloneFragment(r);return o.updateMountedElement(a,e),a.events=e.events,a.key=e.key,e.events=void 0,e.key=void 0,a},e},t}(lt),ft={dom:new st,feast:new dt},ht={binding:"dom",tags:{div:100},attrs:{id:50,"data-bem":20,"data-mnemo":16,className:33},deps:{},unsafe:!1,minSize:0,maxSize:5,depth:5},pt={};function mt(){var e=ot();return pt[e]=!0,e}function gt(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var r,o,a,i=[];for(o in e)if(a=void 0,(r=e[o]).length&&(r=e[o][0],a=e[o][1]),Y.randomBoolean(r)&&("function"==typeof a?(n=[mt].concat(n),a=a.apply(void 0,n)):a=mt(),void 0!==a&&i.push({name:o,value:a}),t&&i.length===t))break;return o&&!i.length&&(a="function"==typeof a?a():mt(),i.push({name:o,value:a})),i}function vt(e,t,n,r){for(var o=gt(n=n||ht.attrs,0,[t]),a=0;a<o.length;a++)e.setAttribute(t,o[a].name,o[a].value);r&&!o.length&&e.setAttribute(t,r,mt())}function yt(e,t,n){n=Je({},ht,{},n);var r=ft[n.binding]||ft.dom;r.injectDependencies(n.deps);var o=t;if("string"==typeof o){if(!e)return;o=Y.toArray(e.querySelectorAll(o))}void 0===o.length&&(o=[o]);var a=o.map((function(e){var t=r.createElementFactory(),o=function e(t,n,r,o){for(var a,i,l=t.createFragment(),c=0,s=Y.random(o.minSize,o.maxSize);c<s;c++)a=gt(o.tags,1)[0].name,vt(t,i=n.createElement(a),o.attrs,"className"),Y.random(0,r)&&t.appendChild(i,e(t,n,r-1,o)),t.appendChild(l,i);return l}(r,t,n.depth,n),a=gt(n.tags,1)[0].name;r.bakeFragment(o,t,a);var i=t.getAllElements().length;return e&&i&&r.mountElementAt(o,e,Y.random(0,i-1)),o}));if(1===a.length)return a[0]}var wt={isWelter:function(e){return void 0!==pt[e]},wrap:function(e,t,n){n=n||ht;try{if(!e)return yt(null,t,n);if(e.nodeType)return yt(e,t,n);if(e.length>=0){if(1===e.length)return yt(e[0],t,n);Y.toArray(e).forEach((function(e){return yt(e,t,n)}))}else console.warn('[Walter.wrap] this "context" not supported:',e)}catch(e){if(n.unsafe)throw e;console.error(e)}},detectComponentBinding:function(e){return Object.keys(ft).find((function(t){return ft[t].isComponent(e)}))},decorateComponent:function(e,t){var n=this.detectComponentBinding(e),r=ft[n];return r.injectDependencies(t.deps),r.decorateComponent(e,t,this.wrap)},getDefaultOptions:function(){return ht}};function _t(e,t){return e&&e.length?e.slice().reverse().reduce((function(e,t){return t(e)}),t):t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=_t(n,wt.getDefaultOptions());function a(e){return wt.decorateComponent(e,o)}return e?a(e):a}var xt,At,Ct,Et,Nt=ot(),St=0,kt={names:{},reverse:{},wraps:{}},jt={},It=!1,Ot=[],Ft=!1,Pt=/([@#:.]*)([\w$-]+)/gi,Tt={},Rt=(At=["top","right","bottom","left"],Et=["height","width","max-width","max-height","min-height","min-width"],(Ct=["margin","padding"]).forEach((function(e){At.forEach((function(t){Et.push(e+"-"+t)}))})),Et.concat(At,Ct));function zt(e){Ut(e)}function Mt(e,t){It&&e&&Ge(e,Wt,t,Tt)}function Ht(e,t){return Ze(e,Wt,t)}function Ut(e,t){e=Y.extend({},Tt,e||{}),Tt=e,e.enable&&(It=!0),It&&("boolean"==typeof e.translateAll&&(Ft=e.translateAll),e.match&&e.match instanceof Array&&e.match.length>0&&(Ot=Ot.concat(e.match),xt=new RegExp("^("+Ot.join("|")+")"))),Ke(e.styleSheetsOptions),e.randomize&&(e.randomize=!0===e.randomize?Rt:e.randomize),e.links&&Mt(e.links,t),e.sheet&&Ht(e.sheet)}function Bt(e,t){return"mimic"===e&&(e="mimic-key"),(t?t+"@@@":"")+e}function Dt(e,t){if(!It)return e;var n=Bt(e,t),r=kt.names[n];return!r&&(Ft||xt&&xt.test(t||e))&&(r=ot(),kt.names[n]=r,kt.reverse[r]=e),r||e}function Lt(e,t){var n=$t(e);return t?Dt(n.elem,t)+(n.mod?"_"+Dt(n.mod,t):""):Dt(n.elem)+(n.mod?"_"+Dt(n.mod,n.elem):"")}function $t(e){var t,n=(e?""+e:"").match(/^(.*?[^_])(_([^_]+))?$/);return n&&(e=n[1],t=n[3]),{elem:e,mod:t}}function Wt(e){return e.replace(Pt,(function(e,t,n){return!t||/:/.test(t)?e:t+Lt(n)}))}function Vt(e,t){var n=$t(e);return t?(kt.names[Bt(n.elem,t)]||n.elem)+(n.mod?"_"+(kt.names[Bt(n.mod,t)]||n.mod):""):(kt.names[n.elem]||n.elem)+(n.mod?"_"+(kt.names[Bt(n.mod,n.elem)]||n.mod):"")}function qt(e,t,n){return(e||"").toString().split(/\s+/).map((function(e){return t(e,n)})).join(" ")}function Xt(e){var t=$t(e);return(kt.reverse[t.elem]||t.elem)+(t.mod?"_"+(kt.reverse[t.mod]||t.mod):"")}zt.createWelterDecorator=function(e,t){return void 0===t&&(t=bt),function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.apply(void 0,r.concat([e]))}},zt.toggleWelterGlobal=function(e){at.enabled=e},zt.prototype={constructor:zt,setup:Ut,selector:function(e,t){var n=Wt(e);return t||e==n?n:n+", "+e},transform:function(e,t){return qt(e,Lt,t)},lookup:function(e,t){return qt(e,Vt,t)},updateSheets:Mt,removeSheets:function(e){It&&e&&Ye(e)},insertSheet:Ht,reverse:function(e){return qt(e,Xt)},isWelter:function(e){return wt.isWelter(e)},wrap:function(e,t){if(It){var n;(t=t||document)[Nt]?n=t[Nt]:(n=++St,t[Nt]=n);var r=jt[n];null==r&&(r={}),e.forEach((function(e){if(!r[e]){var o=Wt(e);r[e]=o,jt[n]=r,wt.wrap(t,o)}}))}},calcString:function(e,t){return It?Y.calcString(e,t):e+t},removeCache:function(e){delete jt[e[Nt]],delete e[Nt]},setEnabled:function(e){delete Tt.enable,It=e},isEnabled:function(){return It}};const Kt=!("undefined"==typeof document);Kt&&/\.mini-mail\.ru$/.test(window.location.host),Kt&&/\.devmail\.ru$/.test(window.location.host);const Gt=$.util.randomInt,Yt=(Kt&&mr._||{}).isTestServer,Zt=new function(e){return function(t){var n=e.getUrl(t);if(!n)return t;switch(e.type){case"xor":var r=function(e,t){for(var n="",r=0;r<t.length;r++){var o=t.charCodeAt(r),a=r%e.length,i=e.charCodeAt(a);n+=String.fromCharCode(o^i)}return n}(e.key,n);return r="hex"===e.encode?function(e){for(var t="",n=0;n<e.length;n++)t+=(256+e.charCodeAt(n)).toString(16).slice(1);return t}(r):encodeURIComponent(r),e.endpoint+"/"+(e.keyId||"")+r;case"plain":default:return e.endpoint+encodeURI(n)}}}({endpoint:"/".concat(mr.mimic.encryptPath),type:"xor",encode:"hex",key:mr.mimic&&mr.mimic.cryptoKey,keyId:mr.mimic&&mr.mimic.cryptoKeyId,getUrl:e=>e}),Jt=new zt({links:mr._.STYLE,excludeStyles:mr._.DEV_WHITELINE?/devmail\.ru\/serve\/external\.css/:/limg\.imgsmail\.ru\/pkgs\/whiteline\/(\.|\d|latest)+\/external\.css/,match:["grid","grid__ccol","grid__lcol","grid__header","grid-middle","bar__grid","external","banner","news","i-pull","rectangle-banner","games","mediaprojects","tgb","informer","choose-city","horo-informer","rate","o-","i-","m-","weather","toolbar","well","tabs"],randomize:!0}),Qt=/^.+\/(rtb)?count\//,en=/rs?\.(mail\.ru|mradx\.net)/,tn=/^(https?:)\/\//;class nn{constructor(e){this.base=e.base||"",this.counters=e.counters||[],this.opts=e}add(e){return this.counters.push(...(e||"").split(",").filter(e=>!!e)),this}send(){const e=this.counters.map(e=>this.fetchCounter(this.base+e));return this.counters.length=0,Promise.all(e)}static send(e,t){return new nn(t).add(e).send()}fetchCounter(e){let t,n;const r=this.opts.expId?{test_id:this.opts.expId,exp_id:this.opts.expId}:{};return this.opts.mimic&&(en.test(e)?n=Zt(e.replace(tn,"/")):Qt.test(this.base)&&(t=$.transport("/api-proxy/rb-mimic/v1/count/",{type:"XHR",decorator:Yt&&this.opts.mimicDecrypt?void 0:Zt,json:!0}).fetch({params:Object.assign(r,this.getDirectParams(e)),timeout:3e3}).then(e=>{let t=e.result;if(200!==(null==t?void 0:t.status))throw new Error("invalid request")}))),t||(t=new Promise((t,r)=>{const o=new Image;o.src=n||e,o.onload=t,o.onerror=r})),t.catch(()=>{$.radar("adblock_stat_error").send()}),t}getDirectParams(e){const t=e.split(/^\/count\//,1).pop(),n=this.opts,r={key:t,location:"".concat(location.protocol,"//").concat(location.host).concat(location.pathname),search_uid:$.cookie("searchuid").value(),type:"resplash",site_charset:"utf-8"};return void 0!==n.stat_id&&"meta"!==n.prefix&&(r.stat_id=Number(n.stat_id)),void 0!==n.page_id&&(r.page_id=Number(n.page_id)),void 0!==n.cid&&(r.cid=Number(n.cid)),document.referrer&&(r.referer=document.referrer),navigator.userAgent&&(r.agent=navigator.userAgent),"object"==typeof n.context&&(r.context={},void 0!==n.context.title&&(r.context.title=String(n.context.title)),void 0!==n.context.headers&&(r.context.headers=n.context.headers)),r}}const rn=()=>Math.random().toString(36).slice(Math.max(0,Math.max(2,10*Math.random()))),on=e=>Array.apply(0,new Array(e)).map(()=>0),an=()=>Math.random()<=.5;let ln=0;const cn=()=>ln>99?(ln=0,ln):ln++,sn=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return on(Gt(t,e)).reduce(e=>"".concat(e," news-rnd-").concat(cn()),"")},un=["alt","title"],dn=document.createElement("canvas"),fn=dn.getContext("2d");dn.width=10,dn.height=dn.width;const hn={hideAll:(e,t)=>{if(!mr._.STUCK_IN_POT)return e;const n=[],r=[];return t=t||document.body,Object.keys(e).forEach(o=>{const a=t.querySelector(o);if(a){const t=a.className+sn(1,Math.max(1,6-a.classList.length));a.className=Jt.transform(t),a.id&&(a.id=Jt.transform(a.id)),e[o]&&r.push(o)}else n.push(o)}),Jt.wrap(r,t),n},insetRndImage:function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(mr._.STUCK_IN_POT){if(!r||an()){fn.strokeText(rn(),0,0),t=new Image,t.src=dn.toDataURL(),t.className=Jt.transform("i-hide ".concat(sn()));let e=un.length;for(;e--&&an();)t[un[e]]=rn()}r<n&&[].forEach.call(e.children,e=>{hn.insetRndImage(e,n,r+1)}),t&&e.appendChild(t)}}};var pn={encrypt:Zt,locator:Jt,Counter:nn,tools:hn,honeyPot:W};document.addEventListener("mousedown",e=>{let t,n=[],r=e.target||e.srcElement;for(;r.parentNode;)t=r.getAttribute&&r.getAttribute("name"),t&&n.push(t),r=r.parentNode;n.length&&g(n.join(","))}),o.default.util.extend(r.default,{counter:g,honeyPot:pn.honeyPot}),o.default.util.logger(o.default.radar);const mn=o.default.radar("adblock");pn.radar=mn.send,pn.rLog=mn.log,o.default.util.extend(r.default.mimic,pn),document.addEventListener("visibilitychange",()=>{"IFRAME"===document.activeElement.tagName.toUpperCase()&&window.focus()}),window.mr=r.default}(mr,$);
