!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=138)}({133:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){var n,r=function(e){var t;try{t=JSON.parse(e)}catch(n){t=JSON.parse('{"type":"image" , "src":"'+e+'"}')}return t}(e.dataset[t]);switch(r.type){case"image":r.src.length>0&&(e.src=r.src,e.removeAttribute("data-"+t));break;case"mathjax":var o=r.selector||".NLM_disp-formula",a=function(e,t){if(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),null!=e)return e.closest(t)}(e,o);if(""===a.id){var i=(n=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n();a.setAttribute("id",i)}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),e.remove(),MathJax.Hub.Queue(["Typeset",MathJax.Hub,a.id]),"function"==typeof callback&&callback.call(this);break;case"sketchfab":var s=e.dataset.url,c=e.querySelector("a.thumbnail"),u=new XMLHttpRequest;e.removeAttribute("data-url"),u.open("GET",s,!0),u.onload=function(){200==u.status&&(responseAsJson=JSON.parse(u.responseText),function(e,t,n){if(e){n.querySelector(".figureDownloadOptions").style.display="none",t.style.display="none",a=e,0===(i=n.querySelector(".figureInfo")).parentNode.getElementsByClassName("sketchfab-embed-wrapper").length&&i.insertAdjacentHTML("afterend",a);var r=n.querySelector("iframe"),o=r.offsetWidth;r.style.height=9*o/16}var a,i}(responseAsJson.html,c,e))},u.send();break;case"backgroundImage":s="url('"+r.src+"')";e.style.backgroundImage=s;break;case"addClass":e.classList.add(r.className)}}window.lazyLoad=function(e,t,o,a,i){var s,c;if(o=o||{root:null,rootMargin:"10%",threshold:.3},a)s=a;else{var u=e.match(/data-(\w+[\-\w+]*)/g)[0];s=u.substring(u.indexOf("data-")+5).replace(/(-\S)*/g,(function(e){return e.toUpperCase()})).replace(/\-*/g,(function(e){return e.replace("-","")}))}c=t?"object"==n(t)?t:document.querySelector(t):document;var l=[].slice.call(c.querySelectorAll(e));if("IntersectionObserver"in window){var d=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target;t.unobserve(n),r(n,s)}}))}),o);l.forEach((function(e){d.observe(e)}))}else{var f=!1,p=function e(){!1===f&&(f=!0,setTimeout((function(){l.forEach((function(t){t.getBoundingClientRect().top<=window.innerHeight+window.innerHeight*parseInt(o.rootMargin)/100&&t.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(t).display&&(r(t,s),0===(l=l.filter((function(e){return e!==t}))).length&&(document.removeEventListener("scroll",e),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)))})),f=!1}),200))};document.addEventListener("scroll",p),window.addEventListener("resize",p),window.addEventListener("orientationchange",p)}}},138:function(e,t,n){"use strict";n.r(t);n(133);document.addEventListener("DOMContentLoaded",(function(){lazyLoad("[data-src]")}),!1)}});