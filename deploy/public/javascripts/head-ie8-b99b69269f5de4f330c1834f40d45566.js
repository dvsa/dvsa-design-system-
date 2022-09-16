!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t;w=t={exports:{}},function(e,i){var o,c,t=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",l=0,s={};function d(e,t){var n=e.createElement("p"),e=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",e.insertBefore(n.lastChild,e.firstChild)}function p(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function h(e){var t=s[e[n]];return t||(t={},l++,e[n]=l,s[l]=t),t}function u(e,t,n){return t=t||i,c?t.createElement(e):!(t=(n=n||h(t)).cache[e]?n.cache[e].cloneNode():a.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||r.test(e)||t.tagUrn?t:n.frag.appendChild(t)}function f(e){var t,n,r=h(e=e||i);return!m.shivCSS||o||r.hasCSS||(r.hasCSS=!!d(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return m.shivMethods?u(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+p().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(m,n.frag)),e}!function(){try{var e=i.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,c=1==e.childNodes.length||function(){i.createElement("a");var e=i.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){c=o=!0}}();var m={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:c,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:f,createElement:u,createDocumentFragment:function(e,t){if(e=e||i,c)return e.createDocumentFragment();for(var n=(t=t||h(e)).frag.cloneNode(),r=0,o=p(),a=o.length;r<a;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=m.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),m.elements=n+" "+e,f(t)}};e.html5=m,f(i);var y=/^$|\b(?:all|print)\b/,g="html5shiv",v=!(c||(t=i.documentElement,"undefined"==typeof i.namespaces||"undefined"==typeof i.parentWindow||"undefined"==typeof t.applyElement||"undefined"==typeof t.removeNode||"undefined"==typeof e.attachEvent));function E(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+p().join("|")+")$","i"),a=[];r--;)t=n[r],o.test(t.nodeName)&&a.push(t.applyElement(function(e){var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(g+":"+e.nodeName);for(;r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}(t)));return a}function b(l){var s,u,e=h(l),t=l.namespaces,n=l.parentWindow;return!v||l.printShived||("undefined"==typeof t[g]&&t.add(g),n.attachEvent("onbeforeprint",function(){f();for(var e,t,n,r=l.styleSheets,o=[],a=r.length,i=Array(a);a--;)i[a]=r[a];for(;n=i.pop();)if(!n.disabled&&y.test(n.media)){try{t=(e=n.imports).length}catch(c){t=0}for(a=0;a<t;a++)i.push(e[a]);try{o.push(n.cssText)}catch(c){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+p().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+g+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,a),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),u=E(l),s=d(l,o)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(u),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(f,500)}),l.printShived=!0),l;function f(){clearTimeout(e._removeSheetTimer),s&&s.removeNode(!0),s=null}}m.type+=" print",(m.shivPrint=b)(i),w.exports&&(w.exports=m)}("undefined"!=typeof window?window:e,document);var w;Array.prototype.forEach||(Array.prototype.forEach=function(e){if(null==this||"function"!=typeof e)throw new TypeError;for(var t=Object(this),n=t.length>>>0,r=2<=arguments.length?arguments[1]:void 0,o=0;o<n;o++)o in t&&e.call(r,t[o],o,t)}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,o.prototype=new r,o})}();
//# sourceMappingURL=head-ie8.js.map