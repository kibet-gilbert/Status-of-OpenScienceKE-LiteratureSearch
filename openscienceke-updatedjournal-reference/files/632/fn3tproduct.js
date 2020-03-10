/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow?"":e.element.css("overflow-x"),s=e.isWindow?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]);return{element:i,isWindow:s,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,m,g,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,m=_.height,g=_.offset,v=t.extend({},g),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=m:"center"===e.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,T=d+_+s(this,"marginBottom")+w.height,C=t.extend({},v),M=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?C.left-=u:"center"===e.my[0]&&(C.left-=u/2),"bottom"===e.my[1]?C.top-=d:"center"===e.my[1]&&(C.top-=d/2),C.left+=M[0],C.top+=M[1],t.support.offsetFractions||(C.left=h(C.left),C.top=h(C.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](C,{targetWidth:p,targetHeight:m,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:T,offset:[a[0]+M[0],a[1]+M[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=g.left-C.left,s=i+p-u,n=g.top-C.top,a=n+m-d,h={target:{element:b,left:g.left,top:g.top,width:p,height:m},element:{element:c,left:C.left,top:C.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(C,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-a-n;e.collisionWidth>a?h>0&&0>=l?(i=t.left+h+e.collisionWidth-a-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+a-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-a-n;e.collisionHeight>a?h>0&&0>=l?(i=t.top+h+e.collisionHeight-a-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+a-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-o-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-o-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(s=t.top+p+f+m+e.collisionHeight-o-a,t.top+p+f+m>c&&(0>s||r(c)>s)&&(t.top+=p+f+m)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+m-h,t.top+p+f+m>u&&(i>0||u>r(i))&&(t.top+=p+f+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);/*! jQuery UI menu - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.widget("ui.menu",{version:"1.10.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(e),i.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=0;e.widget("ui.autocomplete",{version:"1.10.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,i=++t;return function(s){i===t&&e.__response(s),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);/*! jQuery UI dialog - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||t(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,a;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(a).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,a){s.position=[a.position.left-i.document.scrollLeft(),a.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(a))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,a){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(a))}}).css("position",a)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,a=!1,o={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(a=!0),t in i&&(o[t]=s)}),a&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})})(jQuery);/*! jQuery UI - button v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e,i,s,n,a="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",r="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",h=function(){var e=t(this).find(":ui-button");setTimeout(function(){e.button("refresh")},1)},l=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,h),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var o=this,r=this.options,c="checkbox"===this.type||"radio"===this.type,u=c?"":"ui-state-active",d="ui-state-focus";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||t(this).removeClass(u)}).bind("click"+this.eventNamespace,function(t){r.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(d)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(d)}),c&&(this.element.bind("change"+this.eventNamespace,function(){n||o.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){r.disabled||(n=!1,i=t.pageX,s=t.pageY)}).bind("mouseup"+this.eventNamespace,function(t){r.disabled||(i!==t.pageX||s!==t.pageY)&&(n=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled||n?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled||n)return!1;t(this).addClass("ui-state-active"),o.buttonElement.attr("aria-pressed","true");var e=o.element[0];l(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(t(this).addClass("ui-state-active"),e=this,o.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return r.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(a+" "+o+" "+r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(e?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?l(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(r),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(a.inline?e.parent()[0]:a.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.2"}});var a,r="datepicker",o=(new Date).getTime();t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,a;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),a=this._newInst(t(e),n),a.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,a):n&&this._inlineDatepicker(e,a)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,r,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,a,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=t("<span class='"+this._appendClass+"'>"+r+"</span>"),e[o?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(a?t("<img/>").attr({src:a,alt:n,title:n}):n)),e[o?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,a=new Date(2009,11,20),r=this._get(t,"dateFormat");r.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},a.setMonth(e(this._get(t,r.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(e(this._get(t,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),t.input.attr("size",this._formatDate(t,a).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,a,o){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],r,p)),n(p.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,r);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,r),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),a=t.data(e,r);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,a){var r,o,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(r=s||{},"string"==typeof s&&(r={},r[s]=a),c&&(this._curInst===c&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,r),null!==h&&r.dateFormat!==e&&r.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&r.dateFormat!==e&&r.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,o),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,a=t.datepicker._getInst(e.target),r=!0,o=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),r=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",a.dpDiv),n[0]&&t.datepicker._selectDay(e.target,a.selectedMonth,a.selectedYear,n[0]),i=t.datepicker._get(a,"onSelect"),i?(s=t.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),r=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),r=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?1:-1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(a,"stepBigMonths"):-t.datepicker._get(a,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),r=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,o?-1:1,"D"),r=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(a,"stepBigMonths"):+t.datepicker._get(a,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),r=e.ctrlKey||e.metaKey;break;default:r=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):r=!1;r&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,a=t.datepicker._getInst(i.target);return t.datepicker._get(a,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(a,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,a,r,o,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),a=s?s.apply(e,[e,i]):{},a!==!1&&(n(i.settings,a),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),o={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),o=t.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),i.input.is(":visible")&&!i.input.is(":disabled")&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,a=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],r=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",r*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!==document.activeElement&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_getBorders:function(t){var e=function(t){return{thin:1,medium:2,thick:3}[t]||t};return[parseFloat(e(t.css("border-left-width"))),parseFloat(e(t.css("border-top-width")))]},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),a=e.dpDiv.outerHeight(),r=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-r:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+o?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+o):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,a,o=this._curInst;!o||e&&o!==t.data(e,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){t.datepicker._tidyDialog(o)},t.effects&&(t.effects.effect[i]||t.effects[i])?o.dpDiv.hide(i,t.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(e,i,s,n){var a,r=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(a=this._getInst(r[0]),a.selectedDay=a.currentDay=t("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(e,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,a=this._get(e,"altField");a&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(a).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var a,r,o,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,m=(n?n.monthNames:null)||this._defaults.monthNames,g=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>a+1&&i.charAt(a+1)===t;return e&&a++,e},k=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),a=s.substring(l).match(n);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},x=function(i,n,a){var r=-1,o=t.map(w(i)?a:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(o,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(r=i[0],l+=n.length,!1):e}),-1!==r)return r+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(a))throw"Unexpected literal at position "+l;l++};for(a=0;i.length>a;a++)if(y)"'"!==i.charAt(a)||w("'")?D():y=!1;else switch(i.charAt(a)){case"d":_=k("d");break;case"D":x("D",d,p);break;case"o":b=k("o");break;case"m":v=k("m");break;case"M":v=x("M",f,m);break;case"y":g=k("y");break;case"@":h=new Date(k("@")),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((k("!")-this._ticksTo1970)/1e4),g=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(o=s.substr(l),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=g?0:-100)),b>-1)for(v=1,_=b;;){if(r=this._getDaysInMonth(g,v-1),r>=_)break;v++,_-=r}if(h=this._daylightSavingAdjust(new Date(g,v-1,_)),h.getFullYear()!==g||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,a);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),r,o);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),a=n,r=this._getFormatConfig(t);try{a=this.parseDate(i,s,r)||n}catch(o){s=e?"":s}t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),t.currentDay=s?a.getDate():0,t.currentMonth=s?a.getMonth():0,t.currentYear=s?a.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},a=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,a=n.getFullYear(),r=n.getMonth(),o=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":o+=parseInt(l[1],10);break;case"w":case"W":o+=7*parseInt(l[1],10);break;case"m":case"M":r+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r));break;case"y":case"Y":a+=parseInt(l[1],10),o=Math.min(o,t.datepicker._getDaysInMonth(a,r))}l=h.exec(i)}return new Date(a,r,o)},r=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?s:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,a=t.selectedYear,r=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=r.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=r.getMonth(),t.drawYear=t.selectedYear=t.currentYear=r.getFullYear(),n===t.selectedMonth&&a===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+o].datepicker._adjustDate(s,-i,"M")},next:function(){window["DP_jQuery_"+o].datepicker._adjustDate(s,+i,"M")},hide:function(){window["DP_jQuery_"+o].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+o].datepicker._gotoToday(s)},selectDay:function(){return window["DP_jQuery_"+o].datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+o].datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+o].datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,a,r,o,h,l,c,u,d,p,f,m,g,v,_,b,y,w,k,x,D,T,C,S,M,N,I,P,A,z,H,E,F,O,W,j,R=new Date,L=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),J=this._get(t,"hideIfNoPrevNext"),Q=this._get(t,"navigationAsDateFormat"),K=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),U=this._get(t,"stepMonths"),q=1!==K[0]||1!==K[1],X=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),$=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),$)for(e=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=Q?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-U,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=Q?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+U,1)),this._getFormatConfig(t)):n,a=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",r=this._get(t,"currentText"),o=this._get(t,"gotoCurrent")&&t.currentDay?X:L,r=Q?this.formatDate(r,o,this._getFormatConfig(t)):r,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),m=this._get(t,"monthNamesShort"),g=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;K[0]>k;k++){for(x="",this.maxRows=4,D=0;K[1]>D;D++){if(T=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),C=" ui-corner-all",S="",q){if(S+="<div class='ui-datepicker-group",K[1]>1)switch(D){case 0:S+=" ui-datepicker-group-first",C=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:S+=" ui-datepicker-group-last",C=" ui-corner-"+(Y?"left":"right");break;default:S+=" ui-datepicker-group-middle",C=""}S+="'>"}for(S+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&0===k?Y?a:s:"")+(/all|right/.test(C)&&0===k?Y?s:a:"")+this._generateMonthYearHeader(t,Z,te,G,$,k>0||D>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)N=(w+c)%7,M+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[N]+"'>"+p[N]+"</span></th>";for(S+=M+"</tr></thead><tbody>",I=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,I)),P=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((P+I)/7),z=q?this.maxRows>A?this.maxRows:A:A,this.maxRows=z,H=this._daylightSavingAdjust(new Date(te,Z,1-P)),E=0;z>E;E++){for(S+="<tr>",F=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=g?g.apply(t.input?t.input[0]:null,[H]):[!0,""],W=H.getMonth()!==Z,j=W&&!_||!O[0]||G&&G>H||$&&H>$,F+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(W?" ui-datepicker-other-month":"")+(H.getTime()===T.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===T.getTime()?" "+this._dayOverClass:"")+(j?" "+this._unselectableClass+" ui-state-disabled":"")+(W&&!v?"":" "+O[1]+(H.getTime()===X.getTime()?" "+this._currentClass:"")+(H.getTime()===L.getTime()?" ui-datepicker-today":""))+"'"+(W&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(j?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(W&&!v?"&#xa0;":j?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===L.getTime()?" ui-state-highlight":"")+(H.getTime()===X.getTime()?" ui-state-active":"")+(W?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);S+=F+"</tr>"}Z++,Z>11&&(Z=0,te++),S+="</tbody></table>"+(q?"</div>"+(K[0]>0&&D===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=S}y+=x}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,a,r,o){var h,l,c,u,d,p,f,m,g=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(a||!g)y+="<span class='ui-datepicker-month'>"+r[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+o[c]+"</option>");
y+="</select>"}if(_||(b+=y+(!a&&g&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),m=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!a&&g&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),a=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),r=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,a)));t.selectedDay=r.getDate(),t.drawMonth=t.selectedMonth=r.getMonth(),t.drawYear=t.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),a=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(t,a)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),a=this._getMinMaxDate(t,"max"),r=null,o=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=s),i[1].match(/[+\-].*/)&&(o+=s)),(!n||e.getTime()>=n.getTime())&&(!a||e.getTime()<=a.getTime())&&(!r||e.getFullYear()>=r)&&(!o||o>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.2",window["DP_jQuery_"+o]=t})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.2",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,a=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=a),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function a(t){l.of=t,o.is(":hidden")||o.position(l)}var o,r,h,l=t.extend({},this.options.position);if(n){if(o=this._find(s),o.length)return o.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),o=this._tooltip(s),e(s,o.attr("id")),o.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:a}),a(i)):o.position(t.extend({of:s},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(a(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:o}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(o)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),a=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),a.stop(!0),this._hide(a,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:a}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):this.range=t([])},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i,!0))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);/*
 * jQuery Selectbox plugin 0.1.3
 *
 * Copyright 2011, Dimitar Ivanov (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 * 
 * Date: Wed Jul 29 23:20:57 2011 +0200
 */
(function($,undefined){var PROP_NAME="selectbox",FALSE=false,TRUE=true;function Selectbox(){this._state=[];this._defaults={classHolder:"sbHolder",classHolderDisabled:"sbHolderDisabled",classSelector:"sbSelector",classOptions:"sbOptions",classGroup:"sbGroup",classSub:"sbSub",classDisabled:"sbDisabled",classToggleOpen:"sbToggleOpen",classToggle:"sbToggle",speed:200,effect:"slide",onChange:null,onOpen:null,onClose:null}}$.extend(Selectbox.prototype,{_isOpenSelectbox:function(target){if(!target){return FALSE}var inst=this._getInst(target);return inst.isOpen},_isDisabledSelectbox:function(target){if(!target){return FALSE}var inst=this._getInst(target);return inst.isDisabled},_attachSelectbox:function(target,settings){if(this._getInst(target)){return FALSE}var $target=$(target),self=this,inst=self._newInst($target),sbHolder,sbSelector,sbToggle,sbOptions,s=FALSE,optGroup=$target.find("optgroup"),opts=$target.find("option"),olen=opts.length;$target.attr("sb",inst.uid);$.extend(inst.settings,self._defaults,settings);self._state[inst.uid]=FALSE;$target.hide();function closeOthers(){var key,uid=this.attr("id").split("_")[1];for(key in self._state){if(key!==uid){if(self._state.hasOwnProperty(key)){if($(":input[sb='"+key+"']")[0]){self._closeSelectbox($(":input[sb='"+key+"']")[0])}}}}}sbHolder=$("<div>",{id:"sbHolder_"+inst.uid,"class":inst.settings.classHolder});sbSelector=$("<a>",{id:"sbSelector_"+inst.uid,href:"#","class":inst.settings.classSelector,click:function(e){e.preventDefault();closeOthers.apply($(this),[]);var uid=$(this).attr("id").split("_")[1];if(self._state[uid]){self._closeSelectbox(target)}else{self._openSelectbox(target)}}});sbToggle=$("<a>",{id:"sbToggle_"+inst.uid,href:"#","class":inst.settings.classToggle,click:function(e){e.preventDefault();closeOthers.apply($(this),[]);var uid=$(this).attr("id").split("_")[1];if(self._state[uid]){self._closeSelectbox(target)}else{self._openSelectbox(target)}}});sbToggle.appendTo(sbHolder);sbOptions=$("<ul>",{id:"sbOptions_"+inst.uid,"class":inst.settings.classOptions,css:{display:"none"}});$target.children().each(function(i){var that=$(this),li,config={};if(that.is("option")){getOptions(that)}else{if(that.is("optgroup")){li=$("<li>");$("<span>",{text:that.attr("label")}).addClass(inst.settings.classGroup).appendTo(li);li.appendTo(sbOptions);if(that.is(":disabled")){config.disabled=true}config.sub=true;getOptions(that.find("option"),config)}}});function getOptions(){var sub=arguments[1]&&arguments[1].sub?true:false,disabled=arguments[1]&&arguments[1].disabled?true:false;arguments[0].each(function(i){var that=$(this),li=$("<li>"),child;if(that.is(":selected")){sbSelector.text(that.text());s=TRUE}if(i===olen-1){li.addClass("last")}if(!that.is(":disabled")&&!disabled){child=$("<a>",{href:"#"+that.val(),rel:that.val(),text:that.text(),click:function(e){e.preventDefault();var t=sbToggle,uid=t.attr("id").split("_")[1];self._changeSelectbox(target,$(this).attr("rel"),$(this).text());self._closeSelectbox(target)}});if(sub){child.addClass(inst.settings.classSub)}child.appendTo(li)}else{child=$("<span>",{text:that.text()}).addClass(inst.settings.classDisabled);if(sub){child.addClass(inst.settings.classSub)}child.appendTo(li)}li.appendTo(sbOptions)})}if(!s){sbSelector.text(opts.first().text())}$.data(target,PROP_NAME,inst);sbSelector.appendTo(sbHolder);sbOptions.appendTo(sbHolder);sbHolder.insertAfter($target)},_detachSelectbox:function(target){var inst=this._getInst(target);if(!inst){return FALSE}$("#sbHolder_"+inst.uid).remove();$.data(target,PROP_NAME,null);$(target).show()},_changeSelectbox:function(target,value,text){var inst=this._getInst(target),onChange=this._get(inst,"onChange");$("#sbSelector_"+inst.uid).text(text);$(target).find("option").attr("selected", FALSE);$(target).find("option[value='"+value+"']").prop("selected",TRUE);if(onChange){onChange.apply((inst.input?inst.input[0]:null),[value,inst])}else{if(inst.input){inst.input.trigger("change")}}},_enableSelectbox:function(target){var inst=this._getInst(target);if(!inst||!inst.isDisabled){return FALSE}$("#sbHolder_"+inst.uid).removeClass(inst.settings.classHolderDisabled);inst.isDisabled=FALSE;$.data(target,PROP_NAME,inst)},_disableSelectbox:function(target){var inst=this._getInst(target);if(!inst||inst.isDisabled){return FALSE}$("#sbHolder_"+inst.uid).addClass(inst.settings.classHolderDisabled);inst.isDisabled=TRUE;$.data(target,PROP_NAME,inst)},_optionSelectbox:function(target,name,value){var inst=this._getInst(target);if(!inst){return FALSE}inst[name]=value;$.data(target,PROP_NAME,inst)},_openSelectbox:function(target){var inst=this._getInst(target);if(!inst||inst.isOpen||inst.isDisabled){return }var el=$("#sbOptions_"+inst.uid),viewportHeight=parseInt($(window).height(),10),offset=$("#sbHolder_"+inst.uid).offset(),scrollTop=$(window).scrollTop(),height=el.prev().height(),diff=viewportHeight-(offset.top-scrollTop)-height/2,onOpen=this._get(inst,"onOpen");el.css({top:height+"px",maxHeight:(diff-height)+"px"});inst.settings.effect==="fade"?el.fadeIn(inst.settings.speed):el.slideDown(inst.settings.speed);$("#sbToggle_"+inst.uid).addClass(inst.settings.classToggleOpen);this._state[inst.uid]=TRUE;inst.isOpen=TRUE;if(onOpen){onOpen.apply((inst.input?inst.input[0]:null),[inst])}$.data(target,PROP_NAME,inst)},_closeSelectbox:function(target){var inst=this._getInst(target);if(!inst||!inst.isOpen){return }var onClose=this._get(inst,"onClose");inst.settings.effect==="fade"?$("#sbOptions_"+inst.uid).fadeOut(inst.settings.speed):$("#sbOptions_"+inst.uid).slideUp(inst.settings.speed);$("#sbToggle_"+inst.uid).removeClass(inst.settings.classToggleOpen);this._state[inst.uid]=FALSE;inst.isOpen=FALSE;if(onClose){onClose.apply((inst.input?inst.input[0]:null),[inst])}$.data(target,PROP_NAME,inst)},_newInst:function(target){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,uid:Math.floor(Math.random()*99999999),isOpen:FALSE,isDisabled:FALSE,settings:{}}},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this selectbox"}},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]}});$.fn.selectbox=function(options){var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&options=="isDisabled"){return $.selectbox["_"+options+"Selectbox"].apply($.selectbox,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.selectbox["_"+options+"Selectbox"].apply($.selectbox,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.selectbox["_"+options+"Selectbox"].apply($.selectbox,[this].concat(otherArgs)):$.selectbox._attachSelectbox(this,options)})};$.selectbox=new Selectbox();$.selectbox.version="0.1.3"})(jQuery);
(function($)
{"use strict";var MagicSuggest=function(element,options)
{var ms=this;var defaults={allowFreeEntries:true,allowDuplicates:false,ajaxConfig:{},autoSelect:true,selectFirst:false,queryParam:'query',beforeSend:function(){},cls:'',data:null,dataUrlParams:{},disabled:false,disabledField:null,displayField:'name',editable:true,expanded:false,expandOnFocus:false,groupBy:null,hideTrigger:false,highlight:true,id:null,infoMsgCls:'',inputCfg:{},invalidCls:'ms-inv',matchCase:false,maxDropHeight:290,maxEntryLength:null,maxEntryRenderer:function(v){return'Please reduce your entry by '+v+' character'+(v>1?'s':'');},maxSuggestions:null,maxSelection:10,maxSelectionRenderer:function(v){return'You cannot choose more than '+v+' item'+(v>1?'s':'');},method:'POST',minChars:0,minCharsRenderer:function(v){return'Please type '+v+' more character'+(v>1?'s':'');},mode:'local',name:null,noSuggestionText:'No suggestions',placeholder:'Type or click here',renderer:null,required:false,resultAsString:false,resultAsStringDelimiter:',',resultsField:'results',selectionCls:'',selectionContainer:null,selectionPosition:'inner',selectionRenderer:null,selectionStacked:false,sortDir:'asc',sortOrder:null,strictSuggest:false,style:'',toggleOnClick:false,typeDelay:400,useTabKey:false,useCommaKey:true,useZebraStyle:false,value:null,valueField:'id',vregex:null,vtype:null};var conf=$.extend({},options);var cfg=$.extend(true,{},defaults,conf);this.addToSelection=function(items,isSilent)
{if(items){if(!cfg.maxSelection||_selection.length<cfg.maxSelection){if(!$.isArray(items)){items=[items];}
var valuechanged=false;$.each(items,function(index,json){if(cfg.allowDuplicates||$.inArray(json[cfg.valueField],ms.getValue())===-1){_selection.push(json);valuechanged=true;}});if(valuechanged===true){self._renderSelection();this.empty();if(isSilent!==true){$(this).trigger('selectionchange',[this,this.getSelection()]);}}}
this.input.attr('placeholder',(cfg.selectionPosition==='inner'&&this.getValue().length>0)?'':cfg.placeholder);}};this.clear=function(isSilent)
{this.removeFromSelection(_selection.slice(0),isSilent);};this.collapse=function()
{if(cfg.expanded===true){this.combobox.detach();cfg.expanded=false;$(this).trigger('collapse',[this]);}};this.disable=function()
{this.container.addClass('ms-ctn-disabled');cfg.disabled=true;ms.input.attr('disabled',true);};this.empty=function(){this.input.val('');};this.enable=function()
{this.container.removeClass('ms-ctn-disabled');cfg.disabled=false;ms.input.attr('disabled',false);};this.expand=function()
{if(!cfg.expanded&&(this.input.val().length>=cfg.minChars||this.combobox.children().size()>0)){this.combobox.appendTo(this.container);self._processSuggestions();cfg.expanded=true;$(this).trigger('expand',[this]);}};this.isDisabled=function()
{return cfg.disabled;};this.isValid=function()
{var valid=cfg.required===false||_selection.length>0;if(cfg.vtype||cfg.vregex){$.each(_selection,function(index,item){valid=valid&&self._validateSingleItem(item[cfg.valueField]);});}
return valid;};this.getDataUrlParams=function()
{return cfg.dataUrlParams;};this.getName=function()
{return cfg.name;};this.getSelection=function()
{return _selection;};this.getRawValue=function(){return ms.input.val();};this.getValue=function()
{return $.map(_selection,function(o){return o[cfg.valueField];});};this.removeFromSelection=function(items,isSilent)
{if(items){if(!$.isArray(items)){items=[items];}
var valuechanged=false;$.each(items,function(index,json){var i=$.inArray(json[cfg.valueField],ms.getValue());if(i>-1){_selection.splice(i,1);valuechanged=true;}});if(valuechanged===true){self._renderSelection();if(isSilent!==true){$(this).trigger('selectionchange',[this,this.getSelection()]);}
if(cfg.expandOnFocus){ms.expand();}
if(cfg.expanded){self._processSuggestions();}}
this.input.attr('placeholder',(cfg.selectionPosition==='inner'&&this.getValue().length>0)?'':cfg.placeholder);}};this.getData=function(){return _cbData;};this.setData=function(data){cfg.data=data;self._processSuggestions();};this.setName=function(name){cfg.name=name;if(name){cfg.name+=name.indexOf('[]')>0?'':'[]';}
if(ms._valueContainer){$.each(ms._valueContainer.children(),function(i,el){el.name=cfg.name;});}};this.setSelection=function(items){if(items){this.clear();this.addToSelection(items);}};this.setValue=function(values)
{var items=[];$.each(values,function(index,value){var found=false;$.each(_cbData,function(i,item){if(item[cfg.valueField]==value){items.push(item);found=true;return false;}});if(!found){if(typeof(value)==='object'){items.push(value);}else{var json={};json[cfg.valueField]=value;json[cfg.displayField]=value;items.push(json);}}});if(items.length>0){this.addToSelection(items);}};this.setDataUrlParams=function(params)
{cfg.dataUrlParams=$.extend({},params);};var _selection=[],_comboItemHeight=0,_timer,_hasFocus=false,_groups=null,_cbData=[],_ctrlDown=false,KEYCODES={BACKSPACE:8,TAB:9,ENTER:13,CTRL:17,ESC:27,SPACE:32,UPARROW:38,DOWNARROW:40,COMMA:188};var self={_displaySuggestions:function(data){ms.combobox.show();ms.combobox.empty();var resHeight=0,nbGroups=0;if(_groups===null){self._renderComboItems(data);resHeight=_comboItemHeight*data.length;}
else{for(var grpName in _groups){nbGroups+=1;$('<div/>',{'class':'ms-res-group',html:grpName}).appendTo(ms.combobox);self._renderComboItems(_groups[grpName].items,true);}
var _groupItemHeight=ms.combobox.find('.ms-res-group').outerHeight();if(_groupItemHeight!==null){var tmpResHeight=nbGroups*_groupItemHeight;resHeight=(_comboItemHeight*data.length)+tmpResHeight;}else{resHeight=_comboItemHeight*(data.length+nbGroups);}}
if(resHeight<ms.combobox.height()||resHeight<=cfg.maxDropHeight){ms.combobox.height(resHeight);}
else if(resHeight>=ms.combobox.height()&&resHeight>cfg.maxDropHeight){ms.combobox.height(cfg.maxDropHeight);}
if(data.length===1&&cfg.autoSelect===true){ms.combobox.children().filter(':not(.ms-res-item-disabled):last').addClass('ms-res-item-active');}
if(cfg.selectFirst===true){ms.combobox.children().filter(':not(.ms-res-item-disabled):first').addClass('ms-res-item-active');}
if(data.length===0&&ms.getRawValue()!==""){var noSuggestionText=cfg.noSuggestionText.replace(/\{\{.*\}\}/,ms.input.val());self._updateHelper(noSuggestionText);ms.collapse();}
if(cfg.allowFreeEntries===false){if(data.length===0){$(ms.input).addClass(cfg.invalidCls);ms.combobox.hide();}else{$(ms.input).removeClass(cfg.invalidCls);}}},_getEntriesFromStringArray:function(data){var json=[];$.each(data,function(index,s){var entry={};entry[cfg.displayField]=entry[cfg.valueField]=$.trim(s);json.push(entry);});return json;},_highlightSuggestion:function(html){var q=ms.input.val();var specialCharacters=['^','$','*','+','?','.','(',')',':','!','|','{','}','[',']'];$.each(specialCharacters,function(index,value){q=q.replace(value,"\\"+value);})
if(q.length===0){return html;}
var glob=cfg.matchCase===true?'g':'gi';return html.replace(new RegExp('('+q+')(?!([^<]+)?>)',glob),'<em>$1</em>');},_moveSelectedRow:function(dir){if(!cfg.expanded){ms.expand();}
var list,start,active,scrollPos;list=ms.combobox.find(".ms-res-item:not(.ms-res-item-disabled)");if(dir==='down'){start=list.eq(0);}
else{start=list.filter(':last');}
active=ms.combobox.find('.ms-res-item-active:not(.ms-res-item-disabled):first');if(active.length>0){if(dir==='down'){start=active.nextAll('.ms-res-item:not(.ms-res-item-disabled)').first();if(start.length===0){start=list.eq(0);}
scrollPos=ms.combobox.scrollTop();ms.combobox.scrollTop(0);if(start[0].offsetTop+start.outerHeight()>ms.combobox.height()){ms.combobox.scrollTop(scrollPos+_comboItemHeight);}}
else{start=active.prevAll('.ms-res-item:not(.ms-res-item-disabled)').first();if(start.length===0){start=list.filter(':last');ms.combobox.scrollTop(_comboItemHeight*list.length);}
if(start[0].offsetTop<ms.combobox.scrollTop()){ms.combobox.scrollTop(ms.combobox.scrollTop()-_comboItemHeight);}}}
list.removeClass("ms-res-item-active");start.addClass("ms-res-item-active");},_processSuggestions:function(source){var json=null,data=source||cfg.data;if(data!==null){if(typeof(data)==='function'){data=data.call(ms,ms.getRawValue());}
if(typeof(data)==='string'){$(ms).trigger('beforeload',[ms]);var queryParams={}
queryParams[cfg.queryParam]=ms.input.val();var params=$.extend(queryParams,cfg.dataUrlParams);$.ajax($.extend({type:cfg.method,url:data,data:params,beforeSend:cfg.beforeSend,success:function(asyncData){json=typeof(asyncData)==='string'?JSON.parse(asyncData):asyncData;self._processSuggestions(json);$(ms).trigger('load',[ms,json]);if(self._asyncValues){ms.setValue(typeof(self._asyncValues)==='string'?JSON.parse(self._asyncValues):self._asyncValues);self._renderSelection();delete(self._asyncValues);}},error:function(){throw("Could not reach server");}},cfg.ajaxConfig));return;}else{if(data.length>0&&typeof(data[0])==='string'){_cbData=self._getEntriesFromStringArray(data);}else{_cbData=data[cfg.resultsField]||data;}}
var sortedData=cfg.mode==='remote'?_cbData:self._sortAndTrim(_cbData);self._displaySuggestions(self._group(sortedData));}},_render:function(el){ms.setName(cfg.name);ms.container=$('<div/>',{'class':'ms-ctn form-control '+(cfg.resultAsString?'ms-as-string ':'')+cfg.cls+
($(el).hasClass('input-lg')?' input-lg':'')+
($(el).hasClass('input-sm')?' input-sm':'')+
(cfg.disabled===true?' ms-ctn-disabled':'')+
(cfg.editable===true?'':' ms-ctn-readonly')+
(cfg.hideTrigger===false?'':' ms-no-trigger'),style:cfg.style,id:cfg.id});ms.container.focus($.proxy(handlers._onFocus,this));ms.container.blur($.proxy(handlers._onBlur,this));ms.container.keydown($.proxy(handlers._onKeyDown,this));ms.container.keyup($.proxy(handlers._onKeyUp,this));ms.input=$('<input/>',$.extend({type:'text','class':cfg.editable===true?'':' ms-input-readonly',readonly:!cfg.editable,placeholder:cfg.placeholder,disabled:cfg.disabled},cfg.inputCfg));ms.input.focus($.proxy(handlers._onInputFocus,this));ms.input.click($.proxy(handlers._onInputClick,this));ms.combobox=$('<div/>',{'class':'ms-res-ctn dropdown-menu'}).height(cfg.maxDropHeight);ms.combobox.on('click','div.ms-res-item',$.proxy(handlers._onComboItemSelected,this));ms.combobox.on('mouseover','div.ms-res-item',$.proxy(handlers._onComboItemMouseOver,this));if(cfg.selectionContainer){ms.selectionContainer=cfg.selectionContainer;$(ms.selectionContainer).addClass('ms-sel-ctn');}else{ms.selectionContainer=$('<div/>',{'class':'ms-sel-ctn'});}
ms.selectionContainer.click($.proxy(handlers._onFocus,this));if(cfg.selectionPosition==='inner'&&!cfg.selectionContainer){ms.selectionContainer.append(ms.input);}
else{ms.container.append(ms.input);}
ms.helper=$('<span/>',{'class':'ms-helper '+cfg.infoMsgCls});self._updateHelper();ms.container.append(ms.helper);$(el).replaceWith(ms.container);if(!cfg.selectionContainer){switch(cfg.selectionPosition){case'bottom':ms.selectionContainer.insertAfter(ms.container);if(cfg.selectionStacked===true){ms.selectionContainer.width(ms.container.width());ms.selectionContainer.addClass('ms-stacked');}
break;case'right':ms.selectionContainer.insertAfter(ms.container);ms.container.css('float','left');break;default:ms.container.append(ms.selectionContainer);break;}}
if(cfg.hideTrigger===false){ms.trigger=$('<div/>',{'class':'ms-trigger',html:'<div class="ms-trigger-ico"></div>'});ms.trigger.click($.proxy(handlers._onTriggerClick,this));ms.container.append(ms.trigger);}
$(window).resize($.proxy(handlers._onWindowResized,this));if(cfg.value!==null||cfg.data!==null){if(typeof(cfg.data)==='string'){self._asyncValues=cfg.value;self._processSuggestions();}else{self._processSuggestions();if(cfg.value!==null){ms.setValue(cfg.value);self._renderSelection();}}}
$("body").click(function(e){if(ms.container.hasClass('ms-ctn-focus')&&ms.container.has(e.target).length===0&&e.target.className.indexOf('ms-res-item')<0&&e.target.className.indexOf('ms-close-btn')<0&&ms.container[0]!==e.target){handlers._onBlur();}});if(cfg.expanded===true){cfg.expanded=false;ms.expand();}},_renderComboItems:function(items,isGrouped){var ref=this,html='';$.each(items,function(index,value){var displayed=cfg.renderer!==null?cfg.renderer.call(ref,value):value[cfg.displayField];var disabled=cfg.disabledField!==null&&value[cfg.disabledField]===true;var resultItemEl=$('<div/>',{'class':'ms-res-item '+(isGrouped?'ms-res-item-grouped ':'')+
(disabled?'ms-res-item-disabled ':'')+
(index%2===1&&cfg.useZebraStyle===true?'ms-res-odd':''),html:cfg.highlight===true?self._highlightSuggestion(displayed):displayed,'data-json':JSON.stringify(value)});html+=$('<div/>').append(resultItemEl).html();});ms.combobox.append(html);_comboItemHeight=ms.combobox.find('.ms-res-item:first').outerHeight();},_renderSelection:function(){var ref=this,w=0,inputOffset=0,items=[],asText=cfg.resultAsString===true&&!_hasFocus;ms.selectionContainer.find('.ms-sel-item').remove();if(ms._valueContainer!==undefined){ms._valueContainer.remove();}
$.each(_selection,function(index,value){var selectedItemEl,delItemEl,selectedItemHtml=cfg.selectionRenderer!==null?cfg.selectionRenderer.call(ref,value):value[cfg.displayField];var validCls=self._validateSingleItem(value[cfg.displayField])?'':' ms-sel-invalid';if(asText===true){selectedItemEl=$('<div/>',{'class':'ms-sel-item ms-sel-text '+cfg.selectionCls+validCls,html:selectedItemHtml+(index===(_selection.length-1)?'':cfg.resultAsStringDelimiter)}).data('json',value);}
else{selectedItemEl=$('<div/>',{'class':'ms-sel-item '+cfg.selectionCls+validCls,html:selectedItemHtml}).data('json',value);if(cfg.disabled===false){delItemEl=$('<span/>',{'class':'ms-close-btn'}).data('json',value).appendTo(selectedItemEl);delItemEl.click($.proxy(handlers._onTagTriggerClick,ref));}}
items.push(selectedItemEl);});ms.selectionContainer.prepend(items);ms._valueContainer=$('<div/>',{style:'display: none;'});$.each(ms.getValue(),function(i,val){var el=$('<input/>',{type:'hidden',name:cfg.name,value:val});el.appendTo(ms._valueContainer);});ms._valueContainer.appendTo(ms.selectionContainer);if(cfg.selectionPosition==='inner'&&!cfg.selectionContainer){ms.input.width(0);inputOffset=ms.input.offset().left-ms.selectionContainer.offset().left;w=ms.container.width()-inputOffset-42;ms.input.width(w);}
if(_selection.length===cfg.maxSelection){self._updateHelper(cfg.maxSelectionRenderer.call(this,_selection.length));}else{ms.helper.hide();}},_selectItem:function(item){if(cfg.maxSelection===1){_selection=[];}
ms.addToSelection(item.data('json'));item.removeClass('ms-res-item-active');if(cfg.expandOnFocus===false||_selection.length===cfg.maxSelection){ms.collapse();}
if(!_hasFocus){ms.input.focus();}else if(_hasFocus&&(cfg.expandOnFocus||_ctrlDown)){self._processSuggestions();if(_ctrlDown){ms.expand();}}},_sortAndTrim:function(data){var q=ms.getRawValue(),filtered=[],newSuggestions=[],selectedValues=ms.getValue();if(q.length>0){$.each(data,function(index,obj){var name=obj[cfg.displayField];if((cfg.matchCase===true&&name.indexOf(q)>-1)||(cfg.matchCase===false&&name.toLowerCase().indexOf(q.toLowerCase())>-1)){if(cfg.strictSuggest===false||name.toLowerCase().indexOf(q.toLowerCase())===0){filtered.push(obj);}}});}
else{filtered=data;}
$.each(filtered,function(index,obj){if(cfg.allowDuplicates||$.inArray(obj[cfg.valueField],selectedValues)===-1){newSuggestions.push(obj);}});if(cfg.sortOrder!==null){newSuggestions.sort(function(a,b){if(a[cfg.sortOrder]<b[cfg.sortOrder]){return cfg.sortDir==='asc'?-1:1;}
if(a[cfg.sortOrder]>b[cfg.sortOrder]){return cfg.sortDir==='asc'?1:-1;}
return 0;});}
if(cfg.maxSuggestions&&cfg.maxSuggestions>0){newSuggestions=newSuggestions.slice(0,cfg.maxSuggestions);}
return newSuggestions;},_group:function(data){if(cfg.groupBy!==null){_groups={};$.each(data,function(index,value){var props=cfg.groupBy.indexOf('.')>-1?cfg.groupBy.split('.'):cfg.groupBy;var prop=value[cfg.groupBy];if(typeof(props)!='string'){prop=value;while(props.length>0){prop=prop[props.shift()];}}
if(_groups[prop]===undefined){_groups[prop]={title:prop,items:[value]};}
else{_groups[prop].items.push(value);}});}
return data;},_updateHelper:function(html){ms.helper.html(html);if(!ms.helper.is(":visible")){ms.helper.fadeIn();}},_validateSingleItem:function(value){if(cfg.vregex!==null&&cfg.vregex instanceof RegExp){return cfg.vregex.test(value);}else if(cfg.vtype!==null){switch(cfg.vtype){case'alpha':return(/^[a-zA-Z_]+$/).test(value);case'alphanum':return(/^[a-zA-Z0-9_]+$/).test(value);case'email':return(/^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/).test(value);case'url':return(/(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i).test(value);case'ipaddress':return(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/).test(value);}}
return true;}};var handlers={_onBlur:function(){ms.container.removeClass('ms-ctn-focus');ms.collapse();_hasFocus=false;if(ms.getRawValue()!==''&&cfg.allowFreeEntries===true){var obj={};obj[cfg.displayField]=obj[cfg.valueField]=ms.getRawValue().trim();ms.addToSelection(obj);}
self._renderSelection();if(ms.isValid()===false){ms.container.addClass(cfg.invalidCls);}
else if(ms.input.val()!==''&&cfg.allowFreeEntries===false){ms.empty();self._updateHelper('');}
$(ms).trigger('blur',[ms]);},_onComboItemMouseOver:function(e){var target=$(e.currentTarget);if(!target.hasClass('ms-res-item-disabled')){ms.combobox.children().removeClass('ms-res-item-active');target.addClass('ms-res-item-active');}},_onComboItemSelected:function(e){var target=$(e.currentTarget);if(!target.hasClass('ms-res-item-disabled')){self._selectItem($(e.currentTarget));}},_onFocus:function(){ms.input.focus();},_onInputClick:function(){if(ms.isDisabled()===false&&_hasFocus){if(cfg.toggleOnClick===true){if(cfg.expanded){ms.collapse();}else{ms.expand();}}}},_onInputFocus:function(){if(ms.isDisabled()===false&&!_hasFocus){_hasFocus=true;ms.container.addClass('ms-ctn-focus');ms.container.removeClass(cfg.invalidCls);var curLength=ms.getRawValue().length;if(cfg.expandOnFocus===true){ms.expand();}
if(_selection.length===cfg.maxSelection){self._updateHelper(cfg.maxSelectionRenderer.call(this,_selection.length));}else if(curLength<cfg.minChars){self._updateHelper(cfg.minCharsRenderer.call(this,cfg.minChars-curLength));}
self._renderSelection();$(ms).trigger('focus',[ms]);}},_onKeyDown:function(e){var active=ms.combobox.find('.ms-res-item-active:not(.ms-res-item-disabled):first'),freeInput=ms.input.val();$(ms).trigger('keydown',[ms,e]);if(e.keyCode===KEYCODES.TAB&&(cfg.useTabKey===false||(cfg.useTabKey===true&&active.length===0&&ms.input.val().length===0))){handlers._onBlur();return;}
switch(e.keyCode){case KEYCODES.BACKSPACE:if(freeInput.length===0&&ms.getSelection().length>0&&cfg.selectionPosition==='inner'){_selection.pop();self._renderSelection();$(ms).trigger('selectionchange',[ms,ms.getSelection()]);ms.input.attr('placeholder',(cfg.selectionPosition==='inner'&&ms.getValue().length>0)?'':cfg.placeholder);ms.input.focus();e.preventDefault();}
break;case KEYCODES.TAB:case KEYCODES.ESC:e.preventDefault();break;case KEYCODES.ENTER:if(freeInput!==''||cfg.expanded){e.preventDefault();}
break;case KEYCODES.COMMA:if(cfg.useCommaKey===true){e.preventDefault();}
break;case KEYCODES.CTRL:_ctrlDown=true;break;case KEYCODES.DOWNARROW:e.preventDefault();self._moveSelectedRow("down");break;case KEYCODES.UPARROW:e.preventDefault();self._moveSelectedRow("up");break;default:if(_selection.length===cfg.maxSelection){e.preventDefault();}
break;}},_onKeyUp:function(e){var freeInput=ms.getRawValue(),inputValid=$.trim(ms.input.val()).length>0&&(!cfg.maxEntryLength||$.trim(ms.input.val()).length<=cfg.maxEntryLength),selected,obj={};$(ms).trigger('keyup',[ms,e]);clearTimeout(_timer);if(e.keyCode===KEYCODES.ESC&&cfg.expanded){ms.combobox.hide();}
if((e.keyCode===KEYCODES.TAB&&cfg.useTabKey===false)||(e.keyCode>KEYCODES.ENTER&&e.keyCode<KEYCODES.SPACE)){if(e.keyCode===KEYCODES.CTRL){_ctrlDown=false;}
return;}
switch(e.keyCode){case KEYCODES.UPARROW:case KEYCODES.DOWNARROW:e.preventDefault();break;case KEYCODES.ENTER:case KEYCODES.TAB:case KEYCODES.COMMA:if(e.keyCode!==KEYCODES.COMMA||cfg.useCommaKey===true){e.preventDefault();if(cfg.expanded===true){selected=ms.combobox.find('.ms-res-item-active:not(.ms-res-item-disabled):first');if(selected.length>0){self._selectItem(selected);return;}}
if(inputValid===true&&cfg.allowFreeEntries===true){obj[cfg.displayField]=obj[cfg.valueField]=freeInput.trim();ms.addToSelection(obj);ms.collapse();ms.input.focus();}
break;}
default:if(_selection.length===cfg.maxSelection){self._updateHelper(cfg.maxSelectionRenderer.call(this,_selection.length));}
else{if(freeInput.length<cfg.minChars){self._updateHelper(cfg.minCharsRenderer.call(this,cfg.minChars-freeInput.length));if(cfg.expanded===true){ms.collapse();}}
else if(cfg.maxEntryLength&&freeInput.length>cfg.maxEntryLength){self._updateHelper(cfg.maxEntryRenderer.call(this,freeInput.length-cfg.maxEntryLength));if(cfg.expanded===true){ms.collapse();}}
else{ms.helper.hide();if(cfg.minChars<=freeInput.length){_timer=setTimeout(function(){if(cfg.expanded===true){self._processSuggestions();}else{ms.expand();}},cfg.typeDelay);}}}
break;}},_onTagTriggerClick:function(e){ms.removeFromSelection($(e.currentTarget).data('json'));},_onTriggerClick:function(){if(ms.isDisabled()===false&&!(cfg.expandOnFocus===true&&_selection.length===cfg.maxSelection)){$(ms).trigger('triggerclick',[ms]);if(cfg.expanded===true){ms.collapse();}else{var curLength=ms.getRawValue().length;if(curLength>=cfg.minChars){ms.input.focus();ms.expand();}else{self._updateHelper(cfg.minCharsRenderer.call(this,cfg.minChars-curLength));}}}},_onWindowResized:function(){self._renderSelection();}};if(element!==null){self._render(element);}};$.fn.magicSuggest=function(options){var obj=$(this);if(obj.size()===1&&obj.data('magicSuggest')){return obj.data('magicSuggest');}
obj.each(function(i){var cntr=$(this);if(cntr.data('magicSuggest')){return;}
if(this.nodeName.toLowerCase()==='select'){options.data=[];options.value=[];$.each(this.children,function(index,child){if(child.nodeName&&child.nodeName.toLowerCase()==='option'){options.data.push({id:child.value,name:child.text});if($(child).attr('selected')){options.value.push(child.value);}}});}
var def={};$.each(this.attributes,function(i,att){def[att.name]=att.name==='value'&&att.value!==''?JSON.parse(att.value):att.value;});var field=new MagicSuggest(this,$.extend([],$.fn.magicSuggest.defaults,options,def));cntr.data('magicSuggest',field);field.container.data('magicSuggest',field);});if(obj.size()===1){return obj.data('magicSuggest');}
return obj;};$.fn.magicSuggest.defaults={};})(jQuery);/**
* @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.7.0';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

  /*------------------------------- Print Shiv -------------------------------*/

  /** Used to filter media types */
  var reMedia = /^$|\b(?:all|print)\b/;

  /** Used to namespace printable elements */
  var shivNamespace = 'html5shiv';

  /** Detect whether the browser supports shivable style sheets */
  var supportsShivableSheets = !supportsUnknownElements && (function() {
    // assign a false negative if unable to shiv
    var docEl = document.documentElement;
    return !(
      typeof document.namespaces == 'undefined' ||
      typeof document.parentWindow == 'undefined' ||
      typeof docEl.applyElement == 'undefined' ||
      typeof docEl.removeNode == 'undefined' ||
      typeof window.attachEvent == 'undefined'
    );
  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Wraps all HTML5 elements in the given document with printable elements.
   * (eg. the "header" element is wrapped with the "html5shiv:header" element)
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Array} An array wrappers added.
   */
  function addWrappers(ownerDocument) {
    var node,
        nodes = ownerDocument.getElementsByTagName('*'),
        index = nodes.length,
        reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
        result = [];

    while (index--) {
      node = nodes[index];
      if (reElements.test(node.nodeName)) {
        result.push(node.applyElement(createWrapper(node)));
      }
    }
    return result;
  }

  /**
   * Creates a printable wrapper for the given element.
   * @private
   * @param {Element} element The element.
   * @returns {Element} The wrapper.
   */
  function createWrapper(element) {
    var node,
        nodes = element.attributes,
        index = nodes.length,
        wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);

    // copy element attributes to the wrapper
    while (index--) {
      node = nodes[index];
      node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
    }
    // copy element styles to the wrapper
    wrapper.style.cssText = element.style.cssText;
    return wrapper;
  }

  /**
   * Shivs the given CSS text.
   * (eg. header{} becomes html5shiv\:header{})
   * @private
   * @param {String} cssText The CSS text to shiv.
   * @returns {String} The shived CSS text.
   */
  function shivCssText(cssText) {
    var pair,
        parts = cssText.split('{'),
        index = parts.length,
        reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
        replacement = '$1' + shivNamespace + '\\:$2';

    while (index--) {
      pair = parts[index] = parts[index].split('}');
      pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
      parts[index] = pair.join('}');
    }
    return parts.join('{');
  }

  /**
   * Removes the given wrappers, leaving the original elements.
   * @private
   * @params {Array} wrappers An array of printable wrappers.
   */
  function removeWrappers(wrappers) {
    var index = wrappers.length;
    while (index--) {
      wrappers[index].removeNode();
    }
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document for print.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivPrint(ownerDocument) {
    var shivedSheet,
        wrappers,
        data = getExpandoData(ownerDocument),
        namespaces = ownerDocument.namespaces,
        ownerWindow = ownerDocument.parentWindow;

    if (!supportsShivableSheets || ownerDocument.printShived) {
      return ownerDocument;
    }
    if (typeof namespaces[shivNamespace] == 'undefined') {
      namespaces.add(shivNamespace);
    }

    function removeSheet() {
      clearTimeout(data._removeSheetTimer);
      if (shivedSheet) {
          shivedSheet.removeNode(true);
      }
      shivedSheet= null;
    }

    ownerWindow.attachEvent('onbeforeprint', function() {

      removeSheet();

      var imports,
          length,
          sheet,
          collection = ownerDocument.styleSheets,
          cssText = [],
          index = collection.length,
          sheets = Array(index);

      // convert styleSheets collection to an array
      while (index--) {
        sheets[index] = collection[index];
      }
      // concat all style sheet CSS text
      while ((sheet = sheets.pop())) {
        // IE does not enforce a same origin policy for external style sheets...
        // but has trouble with some dynamically created stylesheets
        if (!sheet.disabled && reMedia.test(sheet.media)) {

          try {
            imports = sheet.imports;
            length = imports.length;
          } catch(er){
            length = 0;
          }

          for (index = 0; index < length; index++) {
            sheets.push(imports[index]);
          }

          try {
            cssText.push(sheet.cssText);
          } catch(er){}
        }
      }

      // wrap all HTML5 elements with printable elements and add the shived style sheet
      cssText = shivCssText(cssText.reverse().join(''));
      wrappers = addWrappers(ownerDocument);
      shivedSheet = addStyleSheet(ownerDocument, cssText);

    });

    ownerWindow.attachEvent('onafterprint', function() {
      // remove wrappers, leaving the original elements, and remove the shived style sheet
      removeWrappers(wrappers);
      clearTimeout(data._removeSheetTimer);
      data._removeSheetTimer = setTimeout(removeSheet, 500);
    });

    ownerDocument.printShived = true;
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  // expose API
  html5.type += ' print';
  html5.shivPrint = shivPrint;

  // shiv for print
  shivPrint(document);

}(this, document));
/*
 * jQuery scrollintoview() plugin and :scrollable selector filter
 *
 * Version 1.8 (14 Jul 2011)
 * Requires jQuery 1.4 or newer
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */
(function(f){var c={vertical:{x:false,y:true},horizontal:{x:true,y:false},both:{x:true,y:true},x:{x:true,y:false},y:{x:false,y:true}};var b={duration:"fast",direction:"both"};var e=/^(?:html)$/i;var g=function(k,j){j=j||(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(k,null):k.currentStyle);var i=document.defaultView&&document.defaultView.getComputedStyle?true:false;var h={top:(parseFloat(i?j.borderTopWidth:f.css(k,"borderTopWidth"))||0),left:(parseFloat(i?j.borderLeftWidth:f.css(k,"borderLeftWidth"))||0),bottom:(parseFloat(i?j.borderBottomWidth:f.css(k,"borderBottomWidth"))||0),right:(parseFloat(i?j.borderRightWidth:f.css(k,"borderRightWidth"))||0)};return{top:h.top,left:h.left,bottom:h.bottom,right:h.right,vertical:h.top+h.bottom,horizontal:h.left+h.right}};var d=function(h){var j=f(window);var i=e.test(h[0].nodeName);return{border:i?{top:0,left:0,bottom:0,right:0}:g(h[0]),scroll:{top:(i?j:h).scrollTop(),left:(i?j:h).scrollLeft()},scrollbar:{right:i?0:h.innerWidth()-h[0].clientWidth,bottom:i?0:h.innerHeight()-h[0].clientHeight},rect:(function(){var k=h[0].getBoundingClientRect();return{top:i?0:k.top,left:i?0:k.left,bottom:i?h[0].clientHeight:k.bottom,right:i?h[0].clientWidth:k.right}})()}};f.fn.extend({scrollintoview:function(j){j=f.extend({},b,j);j.direction=c[typeof(j.direction)==="string"&&j.direction.toLowerCase()]||c.both;var n="";if(j.direction.x===true){n="horizontal"}if(j.direction.y===true){n=n?"both":"vertical"}var l=this.eq(0);var i=l.closest(":scrollable("+n+")");if(i.length>0){i=i.eq(0);var m={e:d(l),s:d(i)};var h={top:m.e.rect.top-(m.s.rect.top+m.s.border.top),bottom:m.s.rect.bottom-m.s.border.bottom-m.s.scrollbar.bottom-m.e.rect.bottom,left:m.e.rect.left-(m.s.rect.left+m.s.border.left),right:m.s.rect.right-m.s.border.right-m.s.scrollbar.right-m.e.rect.right};var k={};if(j.direction.y===true){if(h.top<0){k.scrollTop=m.s.scroll.top+h.top}else{if(h.top>0&&h.bottom<0){k.scrollTop=m.s.scroll.top+Math.min(h.top,-h.bottom)}}}if(j.direction.x===true){if(h.left<0){k.scrollLeft=m.s.scroll.left+h.left}else{if(h.left>0&&h.right<0){k.scrollLeft=m.s.scroll.left+Math.min(h.left,-h.right)}}}if(!f.isEmptyObject(k)){if(e.test(i[0].nodeName)){i=f("html,body")}i.animate(k,j.duration).eq(0).queue(function(o){f.isFunction(j.complete)&&j.complete.call(i[0]);o()})}else{f.isFunction(j.complete)&&j.complete.call(i[0])}}return this}});var a={auto:true,scroll:true,visible:false,hidden:false};f.extend(f.expr[":"],{scrollable:function(k,i,n,h){var m=c[typeof(n[3])==="string"&&n[3].toLowerCase()]||c.both;var l=(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(k,null):k.currentStyle);var o={x:a[l.overflowX.toLowerCase()]||false,y:a[l.overflowY.toLowerCase()]||false,isRoot:e.test(k.nodeName)};if(!o.x&&!o.y&&!o.isRoot){return false}var j={height:{scroll:k.scrollHeight,client:k.clientHeight},width:{scroll:k.scrollWidth,client:k.clientWidth},scrollableX:function(){return(o.x||o.isRoot)&&this.width.scroll>this.width.client},scrollableY:function(){return(o.y||o.isRoot)&&this.height.scroll>this.height.client}};return m.y&&j.scrollableY()||m.x&&j.scrollableX()}})})(jQuery);
/*--------------------------------------------------------------------
 * JQuery Plugin: "EqualHeights" & "EqualWidths"
 * by:	Scott Jehl, Todd Parker, Maggie Costello Wachs (http://www.filamentgroup.com)
 *
 * Copyright (c) 2007 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights or widths of the top-level children of a provided element
 		and sets their min-height to the tallest height (or width to widest width). Sets in em units
 		by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method	(article: http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/)
 * Usage Example: $(element).equalHeights();
   						      Optional: to set min-height in px, pass a true argument: $(element).equalHeights(true);
 * Version: 2.0, 07.24.2008
 * Changelog:
 *  08.02.2007 initial Version 1.0
 *  07.24.2008 v 2.0 - added support for widths
--------------------------------------------------------------------*/

$.fn.equalHeights = function(px) {
	$(this).each(function(){
		var currentTallest = 0;
		$(this).children().each(function(i){
			if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
		});
    if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		$(this).children().css({'min-height': currentTallest});
	});
	return this;
};

// just in case you need it...
$.fn.equalWidths = function(px) {
	$(this).each(function(){
		var currentWidest = 0;
		$(this).children().each(function(i){
				if($(this).width() > currentWidest) { currentWidest = $(this).width(); }
		});
		if(!px && Number.prototype.pxToEm) currentWidest = currentWidest.pxToEm(); //use ems unless px is specified
		// for ie6, set width since min-width isn't supported
		if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'width': currentWidest}); }
		$(this).children().css({'min-width': currentWidest});
	});
	return this;
};
$(document).ready(function(){$(".allowance__trigger").click(function(){$(".allowance__text").toggleClass("hidden");$(".allowance__message .arrow_d_n").toggleClass("openAllowance");});$(".preview_button").click(function(){$(".preview__modal.popup").removeClass("hidden");$("body.pb-ui").addClass("noscroll");});$(".preview__modal .icon-preview-close_thin,.preview__options .btn-cancel,.preview__content .close").click(function(){$(".preview__modal.popup").addClass("hidden");$("body.pb-ui").removeClass("noscroll");})});var literatum = {};literatum.events = (function() {
    var instance = {};
    var listenersMap = {};

    instance.register = function(eventName, callback) {
        var listeners = listenersMap[eventName];
        if (!listeners) {
            listenersMap[eventName] = listeners = [];
        }
        listeners.push(callback);
    };

    instance.deregisterAll = function() {
        listenersMap = {};
    };

    instance.notify = function(eventName, data) {
        //console.log("Event '" + eventName + "' triggered.")
        var listeners = listenersMap[eventName];
        if (listeners) {
            listeners.forEach(function(listener) {
                listener(data);
            });
        }
    };

    return instance;
}());literatum.Widget = function(widgetDef, element) {
    this.state = -1;
    this.$element = $(element);
    this.widgetDef = widgetDef;
    if (widgetDef) {
        this.registerListeners();
    }
};

literatum.Widget.prototype.get = function() {
    return this.$element;
};

literatum.Widget.prototype.resize = function(e) {};

literatum.Widget.prototype.render = function(model, params, callback, renderer) {
    if (this.widgetDef.action) {
        return literatum.widgets.getWidget(this, model, params, callback, renderer);
    }
};

literatum.Widget.prototype.lostFocus = function() {
    // nothing
};

literatum.Widget.prototype.updateView = function(view, model) {
    var $this = this.get();
    var $html = $(view.trim());
    if ($html.length > 0) {
        $this.replaceWith($html);
        this.$element = $("*[widget-id='" + $html.attr('widget-id') + "']");
        if (this.$element.length === 0) {
            this.$element = $("#" + $html.attr('id'));
        }
        if (this.$element.length === 0) {
            this.$element = $("*[data-widget-id='" + $html.attr('data-widget-id') + "']");
        }
    } else {
        this.$element.html("");
    }
    this.registerListeners();
    this.triggerInfoHandlers(this, model);
};

literatum.Widget.prototype.triggerInfoHandlers = function(widget, model) {
    var infoHandlers = widget.widgetDef.infoHandlers;
    if (model && model.attributes && infoHandlers) {
        Object.keys(model.attributes).forEach(function(key) {
            var infoHandler = infoHandlers[key];
            if (infoHandler) {
                infoHandler(model.attributes[key], widget, model);
            }
        });
    }
};

literatum.Widget.prototype.registerListeners = function() {
    try {
        this.unbind();
    } catch(e) {
        console.log(e);
    }
    try {
        //console.log("Binding events to candidate elements");
        this.bind();
    } catch (e) {
        console.log("Failed to bind events, rolling back...");
        this.unbind();
    }
};

literatum.Widget.prototype.update = function(model) {
    var result;
    console.log("Updating " + this.widgetDef.id + "...");
    if (!literatum.utils.hasErrors(model.attributes)) {
        result = this.render(model, {});
        console.log("Updating " + this.widgetDef.id + "... Content");
    } else {
        this.triggerInfoHandlers(this, model);
        this.loaded();
        console.log("Updating " + this.widgetDef.id + "... Info");
        result = $.Deferred().resolve();
    }
    return result;
};

literatum.Widget.prototype.bind = function() {
    var thisWidget = this;

    if (!thisWidget.widgetDef.binders)
        return;

    this.find("*[data-bind]").each(function() {
        var binderName = $(this).data("bind");
        var binder = thisWidget.widgetDef.binders[binderName];
        if (binder) {
            $(this).on('click', function (e) {
                //literatum.events.notify('user-action');
                binder.call(this, e, thisWidget);
            });
        }
    });

    this.find("*[data-bind-change]").each(function() {
        var binderName = $(this).data("bind");
        var binder = thisWidget.widgetDef.binders[binderName];
        if (binder) {
            $(this).on('change', function (e) {
                literatum.events.notify('user-action');
                binder.call(this, e, thisWidget);
            });
        }
    });
};

literatum.Widget.prototype.unbind = function() {
    this.find("*[data-bind]").each(function() {
        $(this).off();
    });
};

literatum.Widget.prototype.find = function(selector) {
    return this.get().find(selector);
};

literatum.Widget.prototype.collectForms = function() {
    var $elements = this.find("form");
    var forms = {};
    $elements.each(function() {
        var $this = $(this);
        var name = $(this).attr('name');
        if (name) {
            var form = {};
            forms[name] = form;
            $this.find("input[type!='checkbox'], textarea").each(function() {
                form[$(this).attr('name')] = $(this).val();
            });

            $this.find("input[type='checkbox']").each(function() {
                if ($(this).is(":checked")) {
                    form[$(this).attr('name')] = $(this).val();
                }
            });

            $this.find("select").each(function() {
                form[$(this).attr('name')] =  $(this).find('option:selected').val();
            });
        }
    });
    this.find("*[data-form]").each(function() {
        var name = $(this).data('form');
        if (name) {
            var form = {};
            forms[name] = form;
            $(this).find("*[data-field]").each(function() {
                var $this = $(this);
                var value = $this.data('value');
                if (!value) {
                    value = $this.text().trim();
                }
                form[$this.data('field')] = value;
            });
        }
    });
    return forms;
};

literatum.Widget.prototype.updateForm = function(formName, sourceForm, merge) {
    var forms = this.find("form[name='" + formName + "']");
    if (forms) {
        var form = forms[0];
        if (form) {
            var $form = $(form);
            $form.find("input").each(function() {
                var $this = $(this);
                if ($this.attr("type") == 'submit') {
                    return;
                }

                var value = sourceForm[$this.attr('name')];
                if (merge && !value)
                    return;

                $this.val(value);
            });

            var $select = $form.find("select");
            $select.each(function() {
                var $this = $(this);
                var value = sourceForm[$this.attr('name')];

                if (merge && !value)
                    return;

                if (value) {
                    $this.closest(".input-group").show();
                }

                $this.find('option').prop('selected', false);
                $this.find("option[value='" + value + "']").prop('selected',true);
            });
        }
    }
};

literatum.Widget.prototype.initialize = function() {
    this.registerListeners();
};

literatum.Widget.prototype.loading = function() {
    $("body").addClass("widget-loading");
};

literatum.Widget.prototype.error = function() {
    //$("body").addClass("widget-error");
};

literatum.Widget.prototype.loaded = function() {
    //$("body").removeClass("widget-loading");
};

literatum.Widget.prototype.reset = function() {
    this.getNotifications().forEach(function(item) {
        item.reset();
    });
};

literatum.Widget.prototype.getNotifications = function() {
    var result = [];
    this.find("*[data-notification]").each(function() {
        if (this.literatumNotification) {
            result.push(this.literatumNotification);
        }
    });
    return result;
};

literatum.Widget.prototype.getNotification = function(name) {
    if (!this.widgetDef.notifications)
        return null;

    var thisWidget = this;

    var notification = null;

    this.find("*[data-notification='" + name + "']").each(function() {
        var notificationType = thisWidget.widgetDef.notifications[name];
        if (!this.literatumNotification) {
            this.literatumNotification = new notificationType(this);
        }
        notification = this.literatumNotification;
    });

    return notification;
};

literatum.Widget.prototype.register = function(service) {
    var thisWidget = this;
    commerce.cart.register(service, function(model) {
        return thisWidget.update(model);
    });
};
literatum.widgets = (function() {
    var instance = {};
    var widgetDefs = [];
    var widgets = [];


    function render(template, model) {
        Object.keys(model).forEach(function(key) {
            var re = new RegExp('\\{{' + key + '\\}}', 'g');
            template = template.replace(re, model[key]);
        });
        template = template.replace(/{{.+?}}/g,'');
        return template;
    }

    $(window).on('resize', function(e) {
        widgets.forEach(function(widget) {
            widget.resize(e);
        });
    });

    instance.render = function(widget, model, params, callback, renderer) { // FIXME: clean me
        return widget.render(model, params, callback, renderer);
    };

    instance.getWidget = function(widget, model, params, callback, renderer) {
        return widget.get().pbAjax({
            type: 'GET',
            url: widget.widgetDef.action,
            dataType: 'html',
            data: params,
            async: true,
            success: function(html) {
                var result = render(html, model);
                if (renderer) {
                    renderer(html, model);
                } else {
                    widget.updateView(result, model);
                }
                //widget.get().fadeIn(400).fadeOut(400).fadeIn(400).fadeOut(400).fadeIn(400); // For debugging
                widget.loaded(); // This is not needed, confirm and remove
                if (callback) {
                    callback();
                }
                literatum.events.notify('widget-rendered');
            },
            error: function(data) {
                widget.error();
            }
        });
    };

    instance.get = function(id) {
        var result = [];
        widgets.forEach(function(item){
            if (item.widgetDef.id == id)
                result.push(item);
        });
        return result;
    };
    //instance.find = function(widgetId) {
    //    var $result = $("*[widget-def='" + widgetId +"']");
    //    if ($result.length > 0) {
    //        return $result;
    //    }
    //    return $("." + widgetId);
    //};
    instance.all = function() {
        return widgets.slice(0);
    };

    instance.collapse = function() {
        widgets.forEach(function(widget) {
            widget.hide();
        });
    };

    instance.register = function(widgetDef) {
        widgetDefs.push(widgetDef);
    };

    instance.initialize = function() {
        widgetDefs.forEach(function(WidgetDef) {
            WidgetDef.find().each(function() {
                var instance = Object.create(WidgetDef.prototype);
                WidgetDef.call(instance, WidgetDef, this);
                widgets.push(instance);
            });
        });
    };

    return instance;
}());

$(document).ready(function() {
    literatum.widgets.initialize();
});

console.log("Widgets initialized!");literatum.Loading = function(deferred) {
    this.start();
    this.deferred = deferred;
    $.when(deferred).then(this.done);
};

literatum.Loading.prototype.start = function() {};

literatum.Loading.prototype.done = function() {};literatum.FullPageLoading = function() {
    this.message = '';
};

literatum.FullPageLoading.prototype = new literatum.Loading();

literatum.FullPageLoading.prototype.start = function() {
    $("body").append('<div class="loading-overlay"><div class="loading-container"><div class="loading"></div><div class="loading-message">' + this.message + '</div></div></div></div>');
    $(".loading-overlay").fadeIn(200);
    return this;
};

literatum.FullPageLoading.prototype.done = function() {
    var $overlay = $(".loading-overlay");
    $overlay.fadeOut(200);
    $overlay.remove();
};

literatum.FullPageLoading.prototype.setMessage = function(message) {
    this.message = message;
};
(function($,window,document,undefined){var ModalDialog={init:function(){this.bindUIActions();},bindUIActions:function(){$(document).on("click","a[data-link=modal], button[data-link=modal]",function(e){ModalDialog.constructModal(e,$(this));$(".customModal").closest('.modal-dialog').focus();});},loadAjaxContent:function($target,$modal){var self=this;if($target.is("form")){$.ajax({url:$target.attr("action"),data:$target.serialize(),async:true,method:$target.attr("method"),success:function(html){self.onDataLoaded($modal,html);},error:function(){self.onErrorLoadingData($modal);}});}},onDataLoaded:function($modal,html){if(html){var $markup=$.parseHTML(html.trim());this.appendContentToModal($modal,$markup);}},onErrorLoadingData:function($modal){this.appendContentToModal($modal,$("<div>Error loading data</div>"));},appendContentToModal:function($modal,$content){$modal.append($content);},constructModal:function(e,$link){var id=$link.attr('data-target'),position=$link.attr('data-target-position'),lastFocus=$link,index=0;var pageY,link;var fixedPane='';if(document.getElementById("fixedPane")!==null){pageY=e.pageY-$("#fixedPane").height();link=$(e.target);fixedPane=$(link).parents("#fixedPane").css("position");}
e.preventDefault();e.stopPropagation();if($(".modal-dialog-mask "+id).length<1){$(".modal-dialog").remove();var dataClass=$link.attr('data-class');var $titlebar=$("<div/>").addClass('title-bar').html($link.attr('data-title'));var $close=$("<div/>").addClass('closeBtn').html("X").attr("role","button").attr("aria-label","close window").attr("tabindex",0).click(onRemove);var complianceId=id.substring(1)+"_compliance";var $modal=$("<div/>").addClass("modal-dialog").addClass(dataClass).attr("role","alertdialog").attr("aria-describedby",complianceId).attr("tabindex",-1).append($titlebar).append($close);var loadDataViaAjax=$link.attr("data-load-form-content");var $content;var $target=$(id);if(loadDataViaAjax==="true"){this.loadAjaxContent($target,$modal);}else{$content=$target.clone();}
if($content!=="undefined"){this.appendContentToModal($modal,$content);}
var $mask=$("<div/>").addClass('modal-dialog-mask').data('modal',$modal).click(onRemove).appendTo(document.body);if(typeof $content!=="undefined"){$content.find(".cancelLink, .caption a").click(onRemove);$content.find(".caption").attr("id",complianceId);}
$modal.data('mask',$mask).appendTo(document.body);if(position!=null){$modal.position({my:position,at:position,of:"#"+$(this).attr('id')});}else{if($modal.find(".coverImg")!=null&&$modal.find(".coverImg").attr("imgSrc")!=null&&$modal.find("img.largeCoverImg").length==0){var imgsrc=$modal.find(".coverImg").attr("imgSrc");var $img=$("<img class='largeCoverImg' src='"+imgsrc+"'/>");if($modal.find(".coverImg a").length>0){$modal.find(".coverImg a").append($img);}else{$modal.find(".coverImg").append($img);}}
if($modal.find("img").length>0){$modal.find("img").load(function(){$modal.position({my:"center",at:"center",of:window});var coverImageContainer=$('.coverImgContainer');if(coverImageContainer.length>0){var height=coverImageContainer.height();var dilogHeight=$(".modal-dialog").height();$(".modal-dialog").css("height",dilogHeight+"px");if($('.modal-dialog').height()>window.innerHeight-50){var modalTop=parseFloat($(".modal-dialog").css('top').replace(/[^-\d\.]/g,''))+180;$('.modal-dialog').css('top',modalTop+"px");}
$(".modal-dialog").focus();}});}
else{$modal.position({my:"center",at:"center",of:window});}}
if($link.attr('data-focusable')!=undefined){$('#'+$link.attr('data-focusable')).focus();}
else{if(dataClass)
var focusableElements=$('.modal-dialog.'+dataClass).find(':focusable');else
var focusableElements=$('.modal-dialog').find(':focusable');$modal.find("img").load(function(){focusableElements[0].focus();});}
var x=window.scrollX,y=window.scrollY;if($.fn.bgiframe){$mask.bgiframe();if(typeof $content!=="undefined"){$content.bgiframe();}}}else{var $modalDialogMask=$(".modal-dialog-mask");$modalDialogMask.show();$(".modal-dialog").show();$modalDialogMask.position({my:"center",at:"center",of:window});}
$('body').css("overflow","auto");$(".modal-dialog").on("keydown",function(e){var focusableElements=$(this).find(':focusable');if($(".modal-dialog").is(":visible"))
{if(($(".closeBtn").is(":focus"))&&(((e.keyCode||e.which)==$.ui.keyCode.ENTER)))
{e.preventDefault();onRemove(e);}
if(((e.keyCode||e.which)==$.ui.keyCode.ESCAPE))
{onRemove(e);}
if(e.shiftKey&&(e.keyCode||e.which)==$.ui.keyCode.TAB)
{prevTab();}
else if((e.keyCode||e.which)==$.ui.keyCode.TAB)
{nextTab();}}
function prevTab(){if(index==0)
{e.preventDefault();focusableElements[focusableElements.length-1].focus();index=focusableElements.length-1;}else{index--;e.preventDefault();focusableElements[index].focus();}}
function nextTab(){if(index==focusableElements.length-1){e.preventDefault();focusableElements[0].focus();index=0;}else{index++;e.preventDefault();focusableElements[index].focus();}}});function onRemove(e){$(".modal-dialog-mask").remove();$(".modal-dialog").remove();$('body').css("overflow","auto");if(fixedPane==="fixed"){window.scrollTo(0,pageY);}else{lastFocus.focus();}}}};$(document).ready(ModalDialog.init());if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("ScopeModified ScopeLoaded",ModalDialog.init());}})(jQuery,window,document);
function initWidgetView(properties){toggleHide(properties.numOfItemsCollapsed-1);$('.relatedArt input[type=checkbox]').hide();if(properties.displayType=='full'){var itemIndex=properties.numOfItems-1;$('.relatedArt .result_item').addClass('big');$('.relatedArt .notRecommendedInfo').addClass('hide');}
else if(properties.displayType=='simple'){$('.relatedArt .result_item').addClass('small');$('.relatedArt .accessIcon').addClass('hide');$('.relatedArt .notRecommendedInfo').addClass('hide');$('.relatedArt .specialIcons').addClass('hide');if(properties.showPublicationYear!='true'){$('.relatedArt .publicationYear').addClass('hide');}
if(properties.showAuthorShort!='true'){$('.relatedArt .author').addClass('hide');}
else if(properties.showAuthorShort=='true'){$('.relatedArt article').each(function(){shortenAuthorEntry(this)});}
if(properties.showPublicationShort!='true'){$('.relatedArt .publicationInfo').addClass('hide');}}
var numberOfMaxShownItems=properties.numOfItems<properties.numOfItemsCollapsed?8:properties.numOfItems;var maxItemIndex=numberOfMaxShownItems;if(properties.numOfItemsCollapsed<numberOfMaxShownItems){var itemIndex=properties.numOfItemsCollapsed-1;$('#showMore').on('click',{itemStartIndexParam:itemIndex},showMoreHandler);}}
function shortenAuthorEntry(rootNode){var authorEntries=$(rootNode).find('.entryAuthor');if(authorEntries!=undefined){if($(authorEntries).size()>2){$(rootNode).find('.completeAuthorEntry:gt(0)').addClass('hide');$(rootNode).find('.author').append('<label> et. al.</label>');}}}
function showLessHandler(event){$('#showMore a').text('more');$('#showMore div').removeClass('arrow-up');$('#showMore div').addClass('arrow-down');$('#showMore').unbind('click');$('.relatedArt .relatedItem:gt('+event.data.itemStartIndexParam+')').slideToggle('slow');$('#showMore').on('click',{itemStartIndexParam:event.data.itemStartIndexParam},showMoreHandler);toggleHide(event.data.itemStartIndexParam)}
function showMoreHandler(event){$('#showMore a').text('collapse');$('#showMore div').removeClass('arrow-down');$('#showMore div').addClass('arrow-up');$('#showMore').unbind('click');$('.relatedArt .relatedItem:gt('+event.data.itemStartIndexParam+')').slideToggle('slow');$('#showMore').on('click',{itemStartIndexParam:event.data.itemStartIndexParam},showLessHandler);toggleHide(event.data.itemStartIndexParam)}
function toggleHide(count){$('.relatedArt li').each(function(i){if(i>count){$(this).toggleClass('hide');}});};
var abTestingLogUtil={logSearchResultsByHrefSelector:function(expType,$elm){var $links=$elm.find(" a[href^='/doi/']");$links.each(function(i){var doi=abTestingLogUtil.sliceDoiFromHref($(this).attr("href"));abTestingLogUtil.bindElementToMouseUpEvent(this,doi,expType,i);});},bindElementToMouseUpEvent:function(element,doi,expType,i){$(element).on("mouseup",function(e){switch(e.which)
{case 1:abTestingLogUtil.logClickThrough(e,doi,expType,i);break;case 2:abTestingLogUtil.logClickThrough(e,doi,expType,i);break;case 3:break;}
return true;});},logClickThrough:function(e,doi,expType,pos){$.ajax({url:"/action/clientSideLogging",data:{type:'102',doi:doi,queryId:abTestingLogUtil.getQueryID(expType),exp:expType,event:'click',pos:pos+1},async:false});e.stopImmediatePropagation();return true;},getQueryID:function(expType){switch(expType){case"Recommendations":return abTestingLogUtil.sliceDoiFromHref(window.location.href);default:return"";}},sliceDoiFromHref:function(href){var doi=href.split("/");var doiFirst=doi[doi.length-2];var doiLast=doi[doi.length-1];if(doiLast.indexOf('?')>0){doiLast=doiLast.substring(0,doiLast.indexOf('?'));}
return doiFirst+"/"+doiLast;}};$(function(){var $parent=$(".js__abTestingTrigger");if($parent.size()>0){var expType=$parent.data('exp-type');var itemSelector=$parent.data('child-selector')?$parent.data('child-selector'):".art_title";abTestingLogUtil.logSearchResultsByHrefSelector(expType,$parent.find(itemSelector));}});
(function($){var desktopWidth=992;$(document).ready(function(){if($(window).width()>desktopWidth){$('.fancy-tooltip').tooltip({show:{effect:"fadeIn",delay:250}});}
$('.citationSearchBoxContainer input').each(function(index,input){$(input).attr('disabled','disabled')});$('.quickSearchForm').submit(function(e){var submit;($('.quickSearchForm input[type=search]')).each(function(index,input){if($(input).attr('disabled')!='disabled'&&$(input).val()!=''){submit=true;return false;}});($('.quickSearchForm input[type=text]')).each(function(index,input){if($(input).attr('disabled')!='disabled'&&$(input).val()!=''){submit=true;return false;}});if(submit){return true;}
window.location='/search/advanced';return false;});quickSearch.initAutoComplete();$(".js__searchInSelector").on('change',quickSearch.quickSearchSelectionHandler);});quickSearch=function(){function _citationSearchMode($dropdown){var container=$dropdown.closest("form");container.find('.simpleSearchHelp').hide();container.find('.simpleSearchBoxContainer').hide();_disableInputs(container.find('.simpleSearchBoxContainer'));_enableInputs(container.find('.citationSearchBoxContainer'));container.find(".citationSearchBoxContainer").find("input[name='quickLinkYear']").attr("disabled",true);container.find(".citationSearchBoxContainer").find("input[name='quickLinkVolume']").attr("disabled",true);container.find(".citationSearchBoxContainer").find("input[name='quickLinkPage']").attr("disabled",true);if(container.find(".citationSearchBoxContainer").find("input[name='quickLinkIssue']").attr("type")!="hidden"){container.find(".citationSearchBoxContainer").find("input[name='quickLinkIssue']").attr("disabled",true);}
if($('.quickSearchFormContainer input[name="quickLinkJournal"]').val()!=""){$(".quickSearchFormContainer .mainSearchButton").removeAttr("disabled");}
else{$(".quickSearchFormContainer .mainSearchButton").attr('disabled',true);}
setupCitationSubmitButton('quickSearchFormContainer');container.find('.citationHelp').show();container.find('.citationSearchBoxContainer').show();container.attr('action','/action/quickLink');};function _simpleSearchMode($dropdown){var container=$dropdown.closest("form");container.find('.citationHelp').hide();container.find('.citationSearchBoxContainer').hide();_disableInputs(container.find('.citationSearchBoxContainer'));_enableInputs(container.find('.simpleSearchBoxContainer'));container.find('.simpleSearchBoxContainer').show();container.find('.simpleSearchHelp').show();container.attr('action','/action/doSearch');container.find("input[type='hidden'][name='SeriesKey']").attr('disabled',true);$(".quickSearchFormContainer .mainSearchButton").removeAttr("disabled");};function _disableInputs($selector){$selector.find('input').each(function(index,input){$(input).attr('disabled','disabled')});};function _enableInputs($selector){$selector.find('input').each(function(index,input){$(input).removeAttr("disabled");});};function setupCitationSubmitButton(container){$('.quickSearchFormContainer input[name="quickLinkJournal"]').on('keyup',function(){if($('.quickSearchFormContainer  input[name="quickLinkJournal"]').val()==''){$(".quickSearchFormContainer .mainSearchButton").attr('disabled',true);}
else{$(".quickSearchFormContainer .mainSearchButton").removeAttr("disabled");}});};$.widget("custom.catcomplete",$.ui.autocomplete,{_create:function(){this._super();this.widget().addClass('quickSearchAutocomplete');this.widget().menu("option","items","> :not(.qsaCategory)");},_renderMenu:function(ul,items){var fuzzySuggesterEnabled=$(this.element).data('fuzzy-suggester');var that=this;if(fuzzySuggesterEnabled){$(ul).addClass('newSuggester')}
$.each(items,function(index,item){if(fuzzySuggesterEnabled){var catSelector=".ui-autocomplete-category[data-category='"+item.category+"']";if($(catSelector).length<1){if(item.category==='Quick Links'){ul.prepend("<li class='ui-autocomplete-category' data-category='"+item.category+"'>"+item.category+"</li>");}else{ul.append("<li class='ui-autocomplete-category' data-category='"+item.category+"'>"+item.category+"</li>");}}
var $item=that._renderItemData(ul,item);$(ul).children(catSelector).after($item);}else{var $item=that._renderItemData(ul,item);$(ul).append($item);}});if($('.ui-autocomplete-category').size()<2){$('.ui-autocomplete-category').remove();}},_renderItem:function(ul,item){var fuzzySuggesterEnabled=$(this.element).data('fuzzy-suggester');var $aWrap=$('<a>').addClass("qsaHistoryItem");if(item.history){var itemSpan=$.parseHTML(item.highlight);var removeDiv=$('<a>').attr('href','#').addClass("qsaRemove").html('[Remove]');removeDiv.bind('click',function(e){e.preventDefault();e.stopPropagation();var selectedHistoryItem=$(e.target.parentNode.parentNode).data().qsaItem;var autoCompeteSearchUri=['/action/doDeleteHistory?ajax=true&uri=',encodeURIComponent(selectedHistoryItem.value)].join('');$.ajax(autoCompeteSearchUri).done(function(result){if(result==='true'){e.target.parentNode.remove();}});});$aWrap.append(removeDiv);$aWrap.append(itemSpan);}else{$aWrap.html(item.highlight).attr('title',item.label);}
var $elm=$("<li>").data("qsaItem",item).data("item-param",item.param).append($aWrap).addClass('qsaItem');if(item.category&&fuzzySuggesterEnabled){$elm.attr("aria-label",item.category+" : "+item.label);$elm.attr("data-category",item.category);}
return $elm;},_resizeMenu:function(){var ul=this.menu.element;if(this.element.outerWidth()<250){ul.outerWidth(this.element.outerWidth()+40/100*this.element.outerWidth());}else{ul.outerWidth(this.element.outerWidth());}}});return{initAutoComplete:function(dropOption){var that=this;$('.quickSearchFormContainer .autocomplete').catcomplete({source:function(request,response){var enteredTerm=request.term;var $inputElem=$(this.element);var maxWords=$inputElem.data("auto-complete-max-words");var maxChars=$inputElem.data("auto-complete-max-chars");if(enteredTerm.split(" ").length>maxWords||enteredTerm.length>maxChars||!enteredTerm.replace(/\s/g,'').length){return false;}
var selectedOption=$('.js__searchInSelector option:selected').val();var autoCompleteSearchType='';if(selectedOption==='Title'||selectedOption=='citation'){autoCompleteSearchType='title-';}else if(selectedOption==='Contrib'){autoCompleteSearchType='contrib-';}
var isDisabled=disableAutoCompleteIfAllSetToZero($inputElem);if(isDisabled==='false'){sendAjaxRequest($inputElem,dropOption,enteredTerm,autoCompleteSearchType,selectedOption,response);}},focus:function(event,ui){return false;},select:function(event,ui){if($(event.target).attr('name')!='quickLinkJournal'){$(event.target).val(ui.item.label);window.location.href=ui.item.value;}else{$(event.target).val(ui.item.label);}
return false;}}).bind('click',function(e){$(this).catcomplete({minLength:2});})},quickSearchSelectionHandler:function(){var selectedValue=$("option:selected",this).data('search-in'),$searchInSelector=$('.js__searchInSelector');if(selectedValue=='journal'||selectedValue=='book'){_simpleSearchMode($(this));$($searchInSelector).attr('name','pubType');$('#searchText').attr('name','AllField');}
else if(selectedValue=='AllField'||selectedValue=='Contrib'){_simpleSearchMode($(this));$($searchInSelector).attr('name','field1');$('#searchText').attr('name','text1');}
else if(selectedValue=='citation'){_citationSearchMode($(this));}
else if(selectedValue=='thisIssue'){_simpleSearchMode($(this));$('.searchText').attr('name','AllField');$($searchInSelector).attr('name','Issue');$('.quickSearchForm').find("input[type='hidden'][name='SeriesKey']").removeAttr('disabled');}
else
if(selectedValue=='thisJournal'||selectedValue=="thisSeries"){_simpleSearchMode($(this));$($searchInSelector).attr('name','SeriesKey');$('.searchText').attr('name','AllField');}
else{_simpleSearchMode($(this));if(selectedValue=="default"){$($searchInSelector).attr('name','');}
else{$($searchInSelector).attr('name','publication');}
$('.searchText').attr('name','AllField');}}};}();function disableAutoCompleteIfAllSetToZero($inputSearchText){var confNumOfHistoryItems=$inputSearchText.data('historyItemsConf');var confNumOfPublicationTitles=$inputSearchText.data('publication-titles-conf');var confNumOfGroupItems=$inputSearchText.data('group-titles-conf');var confNumOfPublicationItems=$inputSearchText.data('publication-items-conf');var confNumOfTopics=$inputSearchText.data('topics-conf');var confNumOfContributors=$inputSearchText.data('contributors-conf');if(confNumOfHistoryItems==0&&confNumOfGroupItems==0&&confNumOfPublicationTitles==0&&confNumOfTopics==0&&confNumOfContributors==0&&confNumOfPublicationItems==0)
return'true';return'false';}
function sendAjaxRequest($inputSearchText,dropOption,enteredTerm,autoCompleteSearchType,selectedOption,response){var results=[];var confNumOfHistoryItems=$inputSearchText.data('history-items-conf');var confNumOfPublicationTitles=$inputSearchText.data('publication-titles-conf');var confNumOfGroupItems=$inputSearchText.data('group-titles-conf');var confNumOfPublicationItems=$inputSearchText.data('publication-items-conf');var confNumOfTopics=$inputSearchText.data('topics-conf');var confNumOfContributors=$inputSearchText.data('contributors-conf');var fuzzySuggesterEnabled=$inputSearchText.data('fuzzy-suggester');var displayLabels=$inputSearchText.data('display-labels');if(dropOption==='citation'){var autoCompeteSearchUrl=['/action/doSuggest?target=title-auto-complete&query=',enteredTerm,'&pts=',confNumOfPublicationTitles,'&fl=PubID'].join('');}else{var autoCompeteSearchUrl=['/action/doSuggest?target=',autoCompleteSearchType,'auto-complete&query=',enteredTerm,'&hs=',confNumOfHistoryItems,'&pts=',confNumOfPublicationTitles,'&ptgs=',confNumOfGroupItems,'&ptfs=',confNumOfPublicationItems,'&ts=',confNumOfTopics,'&cs=',confNumOfContributors,'&fl=PubID'].join('');}
$.getJSON(autoCompeteSearchUrl).done(function(resultData){var numOfTitles,NumOfGroupItems,numOfItems,numOfTopics,numOfContrib,numOfHistory;numOfTitles=NumOfGroupItems=numOfItems=numOfTopics=numOfContrib=numOfHistory=0;var getSuggestion=function(item){var suggestion={'label':item.label,'highlight':item.highlight,'category':item.param=='DOI'?'Quick Links':'Suggested Search','param':item.param,'history':false};if(item.param==='history'){suggestion['value']=decodeURI(item.value);suggestion['history']=true;}else if(selectedOption=='citation'){suggestion['value']=item.value;}
else{suggestion['value']=item.url;}
if(fuzzySuggesterEnabled&&displayLabels){switch(item.param){case'SeriesKey':suggestion['highlight']+='<span class="pull-right suggestionType">Journal</span>';break;case'ConceptID':suggestion['highlight']+='<span class="pull-right suggestionType">Topic</span>';break;case'ContribAuthorStored':suggestion['highlight']+='<span class="pull-right suggestionType">Author</span>';break;case'Book':suggestion['highlight']+='<span class="pull-right suggestionType">Book</span>';break;case'Issue':suggestion['highlight']+='<span class="pull-right suggestionType">Issue</span>';break;}}
return suggestion;};$.each(resultData,function(i,item){if((item.param==='history')&&(numOfHistory<confNumOfHistoryItems)){results.push(getSuggestion(item));numOfHistory++;}else if((item.param==='SeriesKey')&&(numOfTitles<confNumOfPublicationTitles)){results.push(getSuggestion(item));numOfTitles++;}else if((item.param==='DOI')&&(numOfItems<confNumOfPublicationItems)){results.push(getSuggestion(item));numOfItems++;}else if((item.param==='Book')&&(NumOfGroupItems<confNumOfGroupItems)){results.push(getSuggestion(item));NumOfGroupItems++;}else if((item.param==='Issue')&&(NumOfGroupItems<confNumOfGroupItems)){results.push(getSuggestion(item));NumOfGroupItems++;}else if((item.param==='ConceptID')&&(numOfTopics<confNumOfTopics)){results.push(getSuggestion(item));numOfTopics++;}else if((item.param==='ContribAuthorStored')&&(numOfContrib<confNumOfContributors)){results.push(getSuggestion(item));numOfContrib++;}});response(results);}).fail(function(){console.log('failed');});}})(jQuery);
function loadInstitutionPage(selectDom){var href=$(selectDom).val();location.href=href;};
var SearchUtil={checkURLValidation:function(URL){if(!URL||URL.trim().indexOf(' ')!=-1)
return false;return true;},addTermOld:function(){var displayedCount=$(".formRow:visible").length+1;var hiddenCount=$(".formRow:hidden").length;$(".term_"+displayedCount).slideToggle();if(hiddenCount==1){$(".addTerm").hide();}},addTerm:function(){var $allTerms=$(".search-terms").children(".formRow");var sbLock=0;if($allTerms.length<7){if($(this).closest(".formRow").find(".sbHolder").length){$(".formRow").each(function(){$(this).find("select").selectbox("detach");});sbLock=1;}
var nodeToAppend=$(this).closest(".formRow").clone(true);$(nodeToAppend).find(".sbHolder").attr("id","cloned"+$allTerms.length);$(nodeToAppend).find('.fieldSelect').val('AllField').attr("name","field"+($allTerms.length+1));$(nodeToAppend).find('input').val("").attr("name","text"+($allTerms.length+1)).attr("id","advSearch_keyw_for_"+($allTerms.length+1));if($allTerms.length+1===7){$(nodeToAppend).find(".addTerm").addClass("hidden");$(nodeToAppend).find(".removeTerm").removeClass("hidden")}else{$(nodeToAppend).find(".addTerm").removeClass("hidden");$(nodeToAppend).find(".removeTerm").addClass("hidden");}
$(nodeToAppend).appendTo(".search-terms");var $prelast=$(".search-terms").children(".formRow:last-child").prev();$prelast.find(".addTerm").addClass("hidden");$prelast.find(".removeTerm").removeClass("hidden");if(sbLock){$(".formRow").each(function(){$(this).find("select").selectbox();$('.mainSearchForm .sbToggle').attr('tabindex','-1');});}}},removeTerm:function(){$(this).closest(".formRow").remove();var $allTerms=$(".search-terms").children(".formRow");var $last=$allTerms.last();$last.find(".addTerm").removeClass("hidden");$last.find(".removeTerm").addClass("hidden");$allTerms.each(function(index){$(this).find("input[type=search]").attr("name","text"+(index+1));$(this).find("input[type=search]").attr("id","advSearch_keyw_for_"+(index+1));$(this).find(".fieldSelect").attr("name","field"+(index+1));});},selectDateRangeOption:function(){$(this).siblings('input[type=radio]').prop('checked',true);if($(this).hasClass('dateFilterSelect')){$('#custom-range').prop('checked',true);$('#afterEarliestDate').prop('checked',true);SearchUtil.clearMonthYearDropDown('static-ranges');}else{SearchUtil.clearMonthYearDropDown('dateFilterSelect');}},clearMonthYearDropDown:function(className){if(className==undefined){$('.timeFrame').find('select').val('');}
else{$('.'+className).val('');}
try{if(jcf&&jcf.customForms){jcf.customForms.refreshAll();}}catch(e){}},tinyUrl:function(){var allSearchRows=$('div[class*="formRow"]');$(allSearchRows).each(function(index,row){if($(row).is(":hidden")){$(row).find('input').attr('disabled',true);$(row).find('select').attr('disabled',true);}});},onSubmitActions:function(){SearchUtil.tinyUrl();},toggleElementHandler:function(event){var toggledElement=$(this).siblings('.'+event.data.toggledClass);$(toggledElement).slideToggle("slow",function(){if(event.data.togglerClass!=undefined){$(this).siblings('.'+event.data.togglerClass).toggle();}});},allTextInputsEmpty:function(form){var textInputs=$(form).find('input[type=search]');if(textInputs.length==0){textInputs=$(form).find('input[type=text]');}
var $emptyFields=$(textInputs).filter(function(){return this.value==="";});return $emptyFields.length===textInputs.length;},checkEnableSearchButton:function(event){SearchUtil.allTextInputsEmpty(event.delegateTarget)?SearchUtil.disableButton('submitPubSearchButton'):SearchUtil.enableButton('submitPubSearchButton');},enableButton:function(id){$('#'+id).removeAttr('disabled',true);},disableButton:function(id){$('#'+id).attr('disabled',true);},doExtraWorkOnClosePreview:function(){},doExtraWorkOnPreviewWindow:function(){},showAbstract:function(doi,$abstractDiv){$abstractDiv.find('.progress').show();$abstractDiv.find('#abstractFailed').hide();if(!$abstractDiv.find('.preview-abstract').html()){var data={ajax:'true',doi:doi};var loadAbstractAndShowPreview=function(response,status,xhr){$abstractDiv.find('.progress').hide();if(status=="error"){$abstractDiv.find('#abstractFailed').show();}
else{var allArticles=$('article.searchResultItem');var currentArticle=$(this).parents('article.searchResultItem');var currentIndex=allArticles.index(currentArticle);var $windowOpener=$abstractDiv.find(".previewWindowOpener");$windowOpener.attr("data-previewindex",currentIndex);$windowOpener.click(function(){var articlePreviewIndex=$windowOpener.data("previewindex");var currentDoi=doi;function go($article){var $showOnProgress=$(".previewWindow").find('.js-show-on-progress');var $hideOnProgress=$(".previewWindow").find('.js-hide-on-progress');$($showOnProgress).show();$($hideOnProgress).hide();var articleTitle=$article.data('title');var articleDoi=$($article.find('a[data-doi]')[0]).data('doi');currentDoi=articleDoi;var data={ajax:'true',doi:articleDoi};$(".previewWindow").find(".content").load('/action/Pb2ShowSearchSnippet?preview=true',data,function(){$($showOnProgress).hide();$($hideOnProgress).fadeIn();});$(".previewWindow").find(".preview-title").html(articleTitle);};function goNext(next){if(articlePreviewIndex<allArticles.length-1){go($(allArticles.get(++articlePreviewIndex)));}};function goPrev(prev){if(articlePreviewIndex>0){go($(allArticles.get(--articlePreviewIndex)));}};$(".previewWindow").removeClass("hide").find('.progress').show();SearchUtil.doExtraWorkOnPreviewWindow();var data={ajax:'true',doi:doi};var loadPreview=function(response,status,xhr){if(status=="error"){$(".previewWindow").find('#abstractFailed').show();}
else{var $windowOpener=$abstractDiv.find(".previewWindowOpener");$(".previewWindow").find(".content").html(response);$(".previewWindow").find(".preview-title").html($windowOpener.data("title"));$(".previewWindow").find('.progress').hide();function closePreview(){$(".previewWindow").addClass("hide");SearchUtil.doExtraWorkOnClosePreview();$(".previewWindow").find(".content").html('');}
$(".darkBackground").click(function(){var width=$(window).outerWidth();if(width<993){closePreview();}});$(".previewWindow .close-preview").click(function(){var width=$(window).outerWidth();if(width>=993){closePreview();}});$(".previewWindow .topNavigation .icon-arrow_u_p").click(function(){goPrev(this);});$(".previewWindow .topNavigation .icon-arrow_d_n").click(function(){goNext(this);});$(".previewWindow .topNavigation .icon-arrow_r").click(function(){var doiHref='/doi/'+currentDoi;window.location.href=doiHref;});$(".previewWindow .bottomNavigation .icon-arrow_r").click(function(){var doiHref='/doi/'+currentDoi;window.location.href=doiHref;});$(".previewWindow .preview_window_icons.icon-arrow_r").click(function(){goNext(this);});$(".previewWindow .preview_window_icons.icon-arrow_l").click(function(){goPrev(this);});$(".previewWindow .previewToolbar .tool-fulltext").click(function(){var fullTxtHref='/doi/full/'+currentDoi;window.open(fullTxtHref,'_blank');});$(".previewWindow .previewToolbar .tool-pdf").click(function(){var pdfHref='/doi/pdf/'+currentDoi;window.open(pdfHref,'_blank');});};};$.get('/action/Pb2ShowSearchSnippet?preview=true',data,loadPreview);});}};$abstractDiv.load('/action/Pb2ShowSearchSnippet',data,loadAbstractAndShowPreview);}},showHideAbs:function(event,doi,id){var targetElement=event.currentTarget;var $abstractDiv=$(targetElement).siblings(".abstractParagraph");SearchUtil.showAbstract(doi,$abstractDiv);$abstractDiv.slideToggle();$(this).addClass('selected');},populateVolumesDropDown:function(decadeVolsMap){$('#decadeSelect').change(function(){var volumes=[];var volumesSelect=$('#volumeSelect');var selectedVal=$("#decadeSelect option:selected").val();volumes=decadeVolsMap[selectedVal];if(volumes==undefined){$("#volumeSelect")[0].selectedIndex=0;}
else{volumesSelect.find('option').remove().end().append('<option value="">Volume</option>').val('');for(var i=0;i<volumes.length;i++){volumesSelect.append('<option value="'+volumes[i]+'">'+volumes[i]+'</option>');}}});},checkAndSubmitBulkAction:function(bulkAction){if(bulkAction=='add'){submitArticles(document.forms['frmSearchResults'],'/action/addFavoritePublication','Error');}
else if(bulkAction=='email'){submitArticles(document.forms['frmSearchResults'],'/action/showMailPage','Error');}
else if(bulkAction=='download'){submitArticles(document.forms['frmSearchResults'],'/action/showCitFormats','Error');}
else if(bulkAction=='track'){submitArticles(document.forms['frmSearchResults'],'/action/addCitationAlert','Error');}
else if(bulkAction="showAbs"){submitArticles(document.forms['frmSearchResults'],'/action/showMultipleAbstracts','Error');}},searchTabsController:function(e){var tabpanid=$(this).data('tab-panel');var tabsContainer=$(this).parent();if((e.which==13)){var original=$(this);var prev=$(this).prev();var next=$(this).next();var target;$(this).siblings().attr("aria-selected","false");$(this).attr("aria-selected","true");$('#'+tabpanid).show().attr("aria-hidden","false").siblings().hide().attr("aria-hidden","true");}
else if(e.which!=9&&e.type==="click"){if($('#'+tabpanid).is(":hidden")){$(this).siblings().attr("aria-selected","false");$(this).attr("aria-selected","true");$('#'+tabpanid).show().attr("aria-hidden","false").siblings().hide().attr("aria-hidden","true");}}},expandableController:function(e){if(e.which===13||e.type==="click"){var hideId=$(this).siblings().data('panel');$('#'+hideId).hide();var showId=$(this).data('panel');$('#'+showId).slideToggle();var anchorLink=$(this).find('a');var state=$(anchorLink).attr('aria-expanded')==='false'?true:false;$(anchorLink).attr('aria-expanded',state);$('#'+showId).attr('aria-hidden',!state);$(this).toggleClass('selected');}},split:function(val){return val.split(/,\s*/);},extractLast:function(term,response){return SearchUtil.split(term).pop();},renderItem:function(ul,item){return $("<li></li>").data("ui-autocomplete-item",item).append($("<a></a>").html(item.label)).appendTo(ul);},getSelectedField:function(autoComplete){return $(autoComplete).siblings('select').val()===undefined?$(autoComplete).data('auto-complete-target'):$(autoComplete).siblings('select').val();},initAutoComplete:function(autoCompletedTerm){$(autoCompletedTerm).bind("keydown",function(event){if(event.keyCode===$.ui.keyCode.TAB&&$(this).autocomplete("instance").menu.active){event.preventDefault();}});return $(autoCompletedTerm).autocomplete({source:function(request,response){$.ajax({url:'/action/doSuggest?target='+SearchUtil.getSelectedField(this.element),data:{term:SearchUtil.extractLast(request.term)},dataType:'json',success:function(data){response(data);}});},focus:function(){return false;},select:function(event,ui){var terms=SearchUtil.split(this.value);ui.item.label=ui.item.label.replace(/(<([^>]+)>)/ig,"");terms.pop();terms.push(ui.item.label);terms.push(" ");this.value=terms.join();return false;},minLength:2});},colorLuminance:function(hex,lum){hex=String(hex).replace(/[^0-9a-f]/gi,'');if(hex.length<6){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];}
lum=lum||0;var rgb="#",c,i;for(i=0;i<3;i++){c=parseInt(hex.substr(i*2,2),16);c=Math.round(Math.min(Math.max(0,c+(c*lum)),255)).toString(16);rgb+=("00"+c).substr(c.length);}
return rgb;},initSliderRangeColor:function(slider,ranges,trueValues,slideValues){var currentNode=$(slider).get(0);if(slider.length>0&&currentNode.children.length==0){var generateColorSlice=function(initialColor,width,weight,id){var colorSlice=document.createElement("span");colorSlice.className='ui-color-slice';colorSlice.id=id;if(weight===0){colorSlice.style.background="#fff";}else{colorSlice.style.background=SearchUtil.colorLuminance(initialColor,-weight*0.5);}
colorSlice.style.width=width+"%";return colorSlice;};var calculateMedianWeight=function(frequencyRange){var weightMap=frequencyRange.map(function(item){return item;});return weightMap.reduce(function(next,prev){return next+prev;})/weightMap.length;};var min=$(slider).data("min");var max=$(slider).data("max");var initialColor=$(slider).data("color");var fragment=document.createDocumentFragment();if(!ranges){var startId=min;var frequencies=$(slider).data("frequencies");var oneYearWidth=(100/(max-min+1));frequencies.forEach(function(item){var slice=generateColorSlice(initialColor,oneYearWidth,item,startId);fragment.appendChild(slice);startId++;});}
else{var previousRange,slideStep,trueYear,oneYearWidth,totalSteps;previousRange=slideStep=trueYear=oneYearWidth=totalSteps=0;ranges.forEach(function(item){totalSteps=totalSteps+((item.freq.length/item.slideStep)*item.displayStep);});oneYearWidth=100/totalSteps;for(var i=0;i<ranges.length;i++){var sliceStart=0;for(var j=0;j<ranges[i].freq.length;j=j+ranges[i].slideStep){var stepFrequencies=ranges[i].freq.slice(sliceStart,sliceStart+ranges[i].slideStep);sliceStart=sliceStart+ranges[i].slideStep;var medianWeight=calculateMedianWeight(stepFrequencies);var stepWidth=ranges[i].displayStep*oneYearWidth;trueYear=min+j+previousRange;var slice=generateColorSlice(initialColor,stepWidth,medianWeight,trueYear+"-"+slideStep);fragment.appendChild(slice);trueValues.push(trueYear);slideValues.push(slideStep);slideStep=slideStep+ranges[i].displayStep;}
previousRange=previousRange+j;}}
currentNode.insertBefore(fragment,currentNode.lastChild);}},bindSearchResultHandlers:function(){$('.noJS').css('display','none');$('#searchResultContainer').delegate('.previewContainer .toggleAbstract','click',{togglerClass:'toggleAbstract',toggledClass:'abstractSnippet'},SearchUtil.toggleElementHandler);$("#searchResultContainer input[name=markall]").on('click',function(){$('#frmSearchResults').find("input[type=checkbox]").prop('checked',$(this).is(":checked"));});$('#searchResultContainer #sortBy1').change(function(){var sortByForm=$('#sortControlForm');if(sortByForm.length>0){$(sortByForm).submit();}});$("select[name='pageSize']").change(function(){var resultsPerPageForm=$(this).closest('.resultsPerPageForm');if(resultsPerPageForm.length>0){$(resultsPerPageForm).submit();}});$("select[name='bulkActions']").change(function(){var bulkAction=$(this).find('option:selected').val();SearchUtil.checkAndSubmitBulkAction(bulkAction);$(this).find('option:first').prop('selected',true);});$(".bulkActionsList").on('click','a',function(){var bulkAction=$(this).data('action');SearchUtil.checkAndSubmitBulkAction(bulkAction);});$('.search-tabs-nav').delegate('li','click',SearchUtil.searchTabsController);$('[role="presentation"]').on('keydown',SearchUtil.searchTabsController);$("#searchResultContainer .articlePreviewLink,.combinedRecommendationsWidget .articlePreviewLink ").on("click",function(e){SearchUtil.showHideAbs(e,$(this).data("doi"),$(this).data("id"));if($(this).hasClass('selected')){$(this).removeClass('selected');}
else{$(this).addClass('selected');}
$(this).toggle();$(this).siblings('.previewWindowOpener').toggle();$(this).siblings('.articlePreviewLink').toggle();});$('.content-slidedown').on('click',SearchUtil.expandableController);$('.content-slidedown').on('keydown',SearchUtil.expandableController);},displayAjaxSearchResults:function(data){var $facetsMarker=$(data).find('#filter');var $followResultsMarker=$(data).find('.followResultsWidget');if($followResultsMarker.size()<1){$followResultsMarker=$(data).find('[data-widget-def="followResultsWidget"]');}
var $returnToPsMarker=$(data).find('.return-to-pq-border');var abTest=false;if($(data).find(".js__doisSorted").size()>0){abTest=true;var $dois=$(data).find(".js__doisSorted").data("dois-array");var $abScript=$(data).find(".js__doisSorted + script").html();}
var $filterContainer=$(".newSearchFacets");var $followResultsContainer=$(".followResultsWidget");if($followResultsContainer.size()<1){$followResultsContainer=$('[data-widget-def="followResultsWidget"]');}
var $returnToPsContainer=$(".return-to-pq-border");$($filterContainer).html($facetsMarker);$($followResultsContainer).html($followResultsMarker.html());$($returnToPsContainer).html($returnToPsMarker);if(abTest){$(".js__doisSorted").attr("data-dois-array",$dois);$(".js__doisSorted + script").html($abScript);}
$('#filter').removeClass('noscript');SearchUtil.recoverSearchResultDisplay();SearchFacetsUtil.bindFacetHandlers();SearchUtil.bindSearchResultHandlers();SearchUtil.bindAdvancedSearchHandlers();SearchUtil.bindDateFilterSearchHandlers();SearchUtil.bindresultAjaxEvents();SearchUtil.migrateFilters();SearchUtil.performCustomActions();SearchUtil.bindAbTestingLogging();$('body,html').animate({scrollTop:0},800);},recoverCustomizedSearchResultDisplay:function(){},performCustomActions:function(){void(0)},bindAbTestingLogging:function(){void(0)},recoverSearchResultDisplay:function(){$(".progress").fadeOut("medium");$(".ajax-overlay").hide();$("#searchResultContainer").removeClass("semi-transparent-layer");$("#filter").removeClass("semi-transparent-layer");$('#sortBy1:not(.simple-select-element)').selectbox();SearchUtil.recoverCustomizedSearchResultDisplay();},resultAjaxHandler:function(formSubmit,elementTarget,browserButton){if(formSubmit||elementTarget){var $searchResultContainer=$("#searchResultContainer");$(".progress").fadeIn("medium");$(".ajax-overlay").show();$searchResultContainer.addClass("semi-transparent-layer");$("#filter").addClass("semi-transparent-layer");$('#slider-range').slider('disable');var ajaxTarget="";if(formSubmit){ajaxTarget=window.location.href;var indexOf=ajaxTarget.indexOf("?");ajaxTarget=ajaxTarget.substring(0,indexOf)+"?"+$(formSubmit).serialize();}else{ajaxTarget=elementTarget;}
var d1=new $.Deferred();$.when(d1).then(SearchUtil.displayAjaxSearchResults,SearchUtil.recoverSearchResultDisplay);$.ajax({url:ajaxTarget,dataType:'html',success:function(data){var $data=$($.parseHTML(data,true));if($data.find("#searchResultContainer").length<1){window.location.href=ajaxTarget;return;}
$searchResultContainer.empty().append($data.find("#searchResultContainer > *"));d1.resolve($data);SearchUtil.handleResultsAfterResolve(data);},error:function(){SearchUtil.recoverSearchResultDisplay();$('#slider-range').slider('enable');history.back();console.log('Failed to load AJAX search for URL: '+ajaxTarget);SearchUtil.displayAjaxFailureMsg();}});if(!browserButton){history.pushState({"page":ajaxTarget},"Search Results",ajaxTarget);}}},handleResultsAfterResolve:function(data){},displayAjaxFailureMsg:function(){var $modal=$('<div id="dialog-message" title="Error"><p>Error while retrieving results.</p></div>');$('body').append($modal);$(function(){$("#dialog-message").dialog({modal:true,buttons:{Ok:function(){$(this).dialog("close");$modal.remove();}},show:{duration:500},hide:{duration:500}});});},onAlertLabelClickHandler:function(event){$(event.target).siblings('input').prop('checked',true);},bindAdvancedSearchHandlers:function(){$('.addTerm:not(.js__addTermNew)').on('click',SearchUtil.addTermOld);$('.js__addTermNew').on('click',SearchUtil.addTerm);$(".removeTerm").on('click',SearchUtil.removeTerm);$(document).on('keypress',".removeTerm,.js__addTermNew",function(e){var code=e.keyCode||e.which;if(code==13){$(this).trigger('click');}});$('.timeFrame').delegate('select','change',SearchUtil.selectDateRangeOption);$('form[name="frmSearch"]').submit(SearchUtil.onSubmitActions);var mainSearchForm=$('#mainSearchForm');if(SearchUtil.allTextInputsEmpty(mainSearchForm)){SearchUtil.disableButton('submitPubSearchButton')}
$(mainSearchForm).delegate('.fieldSelect','change',function(){var selectType=this.value;if(selectType=='Contrib'){}
else{if($(this).siblings('input[type=search]').hasClass("ui-autocomplete-input")){$(this).siblings('input[type=search]').autocomplete("disable");}}});$(mainSearchForm).delegate('.search-term','keyup input',SearchUtil.checkEnableSearchButton);var autoCompletedTerm=$(mainSearchForm).find('.search-term.suggest');var autoCompleteInstance=SearchUtil.initAutoComplete(autoCompletedTerm);$(mainSearchForm).find('.magicsuggest').each(function(){var doSuggestTaxonomies=$(this).data('auto-complete-taxonomies')?'&within='+$(this).data('auto-complete-taxonomies'):'';var doSuggestTarget=$(this).data('auto-complete-target');var maxWords=$(this).data("auto-complete-max-words");var maxChars=$(this).data("auto-complete-max-chars");var selected=$(this).data('selected');$(this).magicSuggest({data:'/action/doSuggest?target='+doSuggestTarget+doSuggestTaxonomies,method:'GET',valueField:'value',allowFreeEntries:'false',displayField:'label',cls:'search-term',hideTrigger:'true',beforeSend:function(xhr,settings){$(".ms-res-ctn.dropdown-menu").css("height","30px");$(".ms-res-ctn.dropdown-menu .ms-res-item").remove();$(".ms-res-ctn.dropdown-menu").append("<div>Loading..</div>");var enteredTerm=settings.url.substr(settings.url.indexOf('query=')+6).replace(/[​​+]/g,' ');if(enteredTerm.split(" ").length>maxWords||enteredTerm.length>maxChars||!enteredTerm.replace(/\s/g,'').length){$(".ms-res-ctn.dropdown-menu").css("height","0px");return false;}}}).setSelection(selected?selected:[]);});for(var i=0;i<autoCompleteInstance.length;i++){$(autoCompleteInstance[i]).data('ui-autocomplete')._renderItem=SearchUtil.renderItem;}
if($('#searchResultContainer').length==0){$('#advSearch_keyw_for_1').trigger('focus');}
$('.advancedFiltersHeader').on('click',{toggledClass:'advancedFilters',togglerClass:'advancedFiltersHeader'},SearchUtil.toggleElementHandler);},bindDateFilterSearchHandlers:function(){$('#filter .custom-date-label').on('click',function(){$('.custom-date-form').slideToggle('slow');});$('#static-range').on('change',function(){SearchUtil.openSelect($(this).siblings("select"));});$('#custom-range').on('change',function(){SearchUtil.openSelect($(this).closest(".date-field").find('select').first());});$('#afterEarliestDate').on('click',function(){SearchUtil.openSelect($(this).closest('#searchTimeFormContainer').find('select').first());});var slider=$("#slider-range");if($(slider).length!=0){var linearDensity=($(slider).data('bardensity')===true);var min=parseInt($(slider).data("min"));var max=parseInt($(slider).data("max"));var minInput=$(".min");var maxInput=$(".max");if(max&&min){var sliderOptions={};var nonLinearSliderSteps=[1,2,5,10];var allowedTotalYears=nonLinearSliderSteps.reduce(function(prev,cur){return prev+cur;})*2;var totalYears=max-min;if(totalYears>allowedTotalYears&&linearDensity==false){var displaySteps=nonLinearSliderSteps.slice().reverse();var remaining=totalYears;var sliderRanges=[];var startYear=min;var frequencies=$(slider).data("frequencies");var startSlice=0;displaySteps.forEach(function(step,i,all){var oneThird=Math.floor(remaining/3);var twoThirds=Math.floor(2*oneThird);var remainder=twoThirds%step;if(remainder>0){twoThirds=twoThirds-remainder;}
remaining=remaining-twoThirds;if(i==displaySteps.length-1){sliderRanges.push({'start':startYear,'stop':max,'displayStep':nonLinearSliderSteps[i],'slideStep':step,'freq':frequencies.slice(startSlice,frequencies.length)});}
else{sliderRanges.push({'start':startYear,'stop':startYear+twoThirds,'displayStep':nonLinearSliderSteps[i],'slideStep':step,'freq':frequencies.slice(startSlice,startSlice+twoThirds)});}
startSlice=startSlice+twoThirds;startYear=startYear+twoThirds;});var trueValues=[];var slideValues=[];SearchUtil.initSliderRangeColor(slider,sliderRanges,trueValues,slideValues);var findNearest=function(includeLeft,includeRight,value){var nearest=null;var diff=null;for(var i=0;i<slideValues.length;i++){if((includeLeft&&slideValues[i]<=value)||(includeRight&&slideValues[i]>=value)){var newDiff=Math.abs(value-slideValues[i]);if(diff==null||newDiff<diff){nearest=slideValues[i];diff=newDiff;}}}
return nearest;};var getMappedValue=function(value,mapFrom,mapTo){for(var i=0;i<mapFrom.length;i++){if(mapFrom[i]>=value){return mapTo[i];}}
return 0;};var getRealValue=function(sliderValue){return getMappedValue(sliderValue,slideValues,trueValues);};var getSlideValue=function(trueValue){return getMappedValue(trueValue,trueValues,slideValues);};sliderOptions={range:true,min:slideValues[0],max:slideValues[slideValues.length-1],values:[getSlideValue(minInput.val()),getSlideValue(maxInput.val())],slide:function(event,ui){var includeRight=event.keyCode!=$.ui.keyCode.RIGHT;var includeLeft=event.keyCode!=$.ui.keyCode.LEFT;var value=findNearest(includeLeft,includeRight,ui.value);if($(ui.handle).is(":last-child")){$(slider).slider('values',1,value);maxInput.val(getRealValue($(slider).slider('values',1)));}
else{$(slider).slider('values',0,value);minInput.val(getRealValue($(slider).slider('values',0)));}
if(ui.values[0]==ui.values[1]&&minInput.val()!=maxInput.val())
if($(ui.handle).is(":last-child"))
maxInput.val(minInput.val());else
minInput.val(maxInput.val());return true;}};}
else{sliderOptions={range:true,min:$(slider).data("min"),max:$(slider).data("max"),values:[minInput.val(),maxInput.val()],slide:function(event,ui){minInput.val(ui.values[0]);maxInput.val(ui.values[1]);}};SearchUtil.initSliderRangeColor(slider);}
$(slider).slider(sliderOptions);$(slider).on('slidechange',function(){SearchUtil.resultAjaxHandler($(this).closest('form'));});$(slider).parent("form").on("submit",function(){$(this).find("input[type='submit']").attr("disabled","disabled");var form=$(this).get(0);if(form.checkValidity()){SearchUtil.resultAjaxHandler($(this));}
return false;});var $yearInputs=$('.date-range .min,.date-range .max');$yearInputs.on('change',function(){$(this).closest("form").submit();});}}},openSelect:function(selector){var element=$(selector)[0];if(document.createEvent){var e=document.createEvent("MouseEvents");e.initEvent("mousedown",true,true);element.dispatchEvent(e);}else if(element.fireEvent){element.fireEvent("onmousedown");}},onSaveSearchSubmitHandler:function(e){$('#newSearchSaveButton').hide();$('.saveSearchProgress').show();$.ajax({type:"POST",url:"/action/doSaveSearch",data:$(e.target).serialize(),success:SearchUtil.saveSearchSuccessHandler,error:function(data){$('.errorMsg').show('fade');$('#newSearchSaveButton').show();$('.saveSearchProgress').hide();$(".modal-dialog-mask").remove();$(".modal-dialog").remove();$('body').css("overflow","auto");}});return false;},saveSearchSuccessHandler:function(data){$('.successMsg').show('fade');$('#newSearchSaveButton').show();$('.saveSearchProgress').hide();$(".modal-dialog-mask").remove();$(".modal-dialog").remove();$('body').css("overflow","auto");SearchUtil.redrawSavedSearchesPanel(JSON.parse(data).favQueries);},redrawSavedSearchesPanel:function(jsonData){var savedSearchesPanel=$('#saved-searches-panel');var numOfMaxSavedSearches=$(savedSearchesPanel).find('.search-entries').data('queries');for(var i=0;i<numOfMaxSavedSearches;i++){if(jsonData[i]!=undefined){var item=$(savedSearchesPanel).find('.search-entry')[i];var goLink="/action/doSearch?target=saved&runSaved="+jsonData[i]["qId"];$(item).find('.search-entry-link').html(jsonData[i]["qName"]).attr('href',goLink);var removeLink="/action/doDeleteSearch?queryId="+jsonData[i]["qId"]+"&searchType=saved";$(item).find('.remove-search-entry').attr('href',removeLink);if($(item).hasClass('hidden')){$(item).removeClass('hidden');$(item).addClass('search-entry-row');}}}
$(savedSearchesPanel).find('.no-saved-search').remove();},showChildren:function(pid){var childTopics=$('#child_'+pid);$(childTopics).is(':visible')?$(childTopics).hide():$(childTopics).show();var parentTopicStatus=$('#status_'+pid);if($(parentTopicStatus).hasClass('expander')){$(parentTopicStatus).removeClass('expander');$(parentTopicStatus).addClass('collapser')}
else{$(parentTopicStatus).removeClass('collapser');$(parentTopicStatus).addClass('expander')}},bindTopicalIndexWidgetHandlers:function(){$('.expanders').on('click',function(){SearchUtil.showChildren($(this).data('id'));});},bindEarlyCiteFilter:function(){$("input[type='checkbox'][name='earlycite']").on('click',function(){if(this.checked){$("input[type='hidden'][name='earlycite']").attr('disabled',true);}else{$("input[type='hidden'][name='earlycite']").attr('disabled',false);}});},bindresultAjaxEvents:function(){$(".js__ajaxSearchTrigger").on("click",function(e){e.preventDefault();var $elm=$(this);var elmTarget=$elm.attr('href')?$elm.attr('href'):$elm.val()?$elm.val():'';var urlStatus=SearchUtil.checkURLValidation(elmTarget);if(urlStatus)
SearchUtil.resultAjaxHandler(false,elmTarget);else
console.log("Invalid URL: '"+elmTarget+"'");});$(".js__ajaxSearchTriggerForm").on('submit',function(){SearchUtil.resultAjaxHandler($(this));return false;});if($(".js__ajaxSearchTrigger").length>0){$(window).on('popstate',function(e){if(event.state===null){e.preventDefault();return false;}else{SearchUtil.resultAjaxHandler(false,window.location.href,true);}});history.replaceState({"page":window.location.href},"Search Results",window.location.href);}},migrateFilters:function(){if($(".responsiveSearchFacets").length>0){var appliedFilter=$(".filter-tag").length;if(appliedFilter>0){$(".applied-filter").toggleClass("hidden visible-xs");$(".followResultsWidget .filter-count").text(appliedFilter);$(".followResultsWidget .filter-tag").each(function(index){$(this).clone().appendTo(".responsiveSearchFacets .queryFilters");});$(".resetFilter").clone().appendTo(".applied-filter .facetHeader").addClass("pull-right");}}}};$(document).ready(function(){$('.noJS').css('display','none');$('#searchFormContainer').removeClass('noscript');$('#filter').removeClass('noscript');$('#selectAllDiv').removeClass('noscript');$(document).keyup(function(e){if(e.keyCode==27){$(".previewWindow").addClass("hide");}});SearchUtil.bindEarlyCiteFilter();SearchUtil.bindSearchResultHandlers(true);SearchUtil.bindAdvancedSearchHandlers();SearchUtil.bindDateFilterSearchHandlers();SearchUtil.bindTopicalIndexWidgetHandlers();SearchUtil.bindresultAjaxEvents();SearchUtil.performCustomActions();$('body').append("<div class='ajax-overlay'></div>");$('.advancedSearch select').on('change',function(){SearchUtil.enableButton('submitPubSearchButton');});var searchIcon='.responsiveQuickSearchWidget:not(.selected) .mini-search';if($(searchIcon).length>0){var quickSearchFlag=false;$(document).on('touchstart click',searchIcon,function(e){if(!quickSearchFlag){quickSearchFlag=true;e.preventDefault();if($(this).parents('.quickSearchFormContainer').length){toggleQuickSearch(this);}
setTimeout(function(){quickSearchFlag=false;},350);}});}});var okayToHide=true;var desktopWidth=992;function toggleQuickSearch(e){if(okayToHide){okayToHide=false;if($('.search-open').is(":visible")){$('.search-open').slideUp("linear",function(){$('.search-bg').fadeOut("fast");$(".mini-search").removeClass("active");$("body").removeClass("overfow-hidden");});}else{var searchBoxOfset=$(".page-header").offset();var searchBoxPosition=searchBoxOfset.top+$(".page-header").outerHeight();if($(".sticky-header").length){searchBoxPosition=$(".responsiveQuickSearchWidget").outerHeight();}
if(window.innerWidth>desktopWidth)
$('.search-open, .search-bg').css("top",$(".mini-search").offset().top+$(".mini-search").outerHeight()-$(window).scrollTop());else
$('.search-open, .search-bg').css("top",searchBoxPosition);$('.search-open').slideDown("linear");$('.search-bg').show();$(".mini-search").addClass("active");$("body").addClass("overfow-hidden");}
$('.searchText').first().focus();if(document.hasFocus()&&!$('.search-open').is(":visible")){$('.searchText').first().blur();}
window.setTimeout(function(){okayToHide=true;},500)}}
function resetSelectMenu(){};
(function($){function init(){$(".hoverLayer").each(function(){var layer=jQuery(this);layer.parent().find(".layerTrigger").add(layer).off("mouseenter mouseleave").hover(function(){layer.show()},function(){layer.hide()});});}
$(document).ready(init);if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("ScopeModified ScopeLoaded",init);}})(jQuery);
window.getSize=function(){if(typeof(window.innerWidth)=='number')return{width:window.innerWidth,height:window.innerHeight}
if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}
if(document.body&&(document.body.clientWidth||document.body.clientHeight))return{width:document.body.clientWidth,height:document.body.clientHeight}
return{width:0,height:0}}
var resizeTimer;function doResize(){if(resizeTimer)clearTimeout(resizeTimer);resizeTimer=setTimeout("contentResize( )",100);return true;}
function doResizeHeight(){if(resizeTimer)clearTimeout(resizeTimer);resizeTimer=setTimeout("heightResize( )",100);return true;}
var minContentWidth=450;var minContentHeight=530;var contentHorizontalMargins=(document.all)?375:389;var contentVerticalMargins=0;var resizeAgain=true;var isGecko=navigator.userAgent.toLowerCase().indexOf("gecko")+1;function contentResize(){var ws=window.getSize();var h=ws.height
var w=ws.width
if(w&&h){h-=contentVerticalMargins;if(h<minContentHeight)h=minContentHeight;w-=contentHorizontalMargins;if(w<minContentWidth)w=minContentWidth;var contentElement=document.getElementById('Content');if(!contentElement)return true;var style=contentElement.style;style.height=h+"px";style.width=w+"px";if(document.getElementsByTagName){style=document.getElementsByTagName('body').item(0).style;style.height=h+"px";}
if(resizeAgain){resizeAgain=false;setTimeout("contentResize()",50);}else{resizeAgain=true;if(location.hash){if(isGecko){location.hash=location.hash;}else if(document.anchors){var anchor=document.anchors[location.hash];if(anchor&&anchor.scrollIntoView)anchor.scrollIntoView();}}}}
return true;}
function heightResize(){var ws=window.getSize();var h=ws.height
if(h){h-=contentVerticalMargins;if(h<minContentHeight)h=minContentHeight;var style=document.getElementById('Content').style;style.height=h+"px";if(document.getElementsByTagName){style=document.getElementsByTagName('body').item(0).style;style.height=h+"px";}
if(resizeAgain){resizeAgain=false;setTimeout("heightResize()",50);}else{resizeAgain=true;if(location.hash){if(isGecko){location.hash=location.hash;}else if(document.anchors){var anchor=document.anchors[location.hash];if(anchor&&anchor.scrollIntoView)anchor.scrollIntoView();}}}}
return true;}
function preload(){load();}
function load()
{}
function popupHelp(url)
{var theEvent=window.event||arguments.callee.caller.arguments[0];if(theEvent){var link=theEvent.srcElement||theEvent.target;if(link&&link.target=='_self'){window.location=url;return false;}}
popupHelp550(url);}
function newWindow(url)
{var new_window;var windowProperties;windowProperties="width=750,height=700,top=30,left=230,toolbar=0,menubar=0,resizable=1,scrollbars=yes";if(new_window==null){new_window=window.open(url,null,windowProperties);}else{new_window.document.replace(url);}}
function goTo(url){window.location.href=url;}
function parentWindowGoTo(url,closeSelf){if(self.opener!=null){self.opener.location=url;self.opener.focus();}else{self.location=url;}
if(closeSelf)self.close();return false;}
function GoTo(sel,targetstr)
{var index=sel.selectedIndex;if(sel.options[index].value!=''){if(targetstr=='blank'){window.open(sel.options[index].value,'win1');}else{var frameobj;if((frameobj=eval(targetstr))!=null)
frameobj.location=sel.options[index].value;}}}
function searchNextResultPage(aForm,aOffset)
{var startPage=null;for(var i=0;i<aForm.elements.length;i++){if(aForm.elements[i].name=='startPage'){startPage=aForm.elements[i];break;}}
if(startPage!=null){startPage.value=eval(startPage.value)+aOffset;aForm.submit();}}
function searchShowFirstPage(aForm,aCheckSort)
{if(aCheckSort){var sortBy=getFormInput(aForm.name,'sortBy');if(sortBy.defaultChecked==sortBy.checked){return;}}
getFormInput(aForm.name,'startPage').value=0;aForm.submit();}
function searchResultOrderBy(aForm,aSort)
{aForm.sortBy.value=aSort;aForm.submit();}
function searchRestrict(aForm,aField,aValue)
{var clause="["+aField+": \""+aValue+"\"]";var all=aForm.all.value;if(all.length==0){all=clause;}else{all="("+all+") AND "+clause;}
aForm.all.value=all;aForm.submit();}
function onResultSearchFormSubmit(aForm)
{if(aForm.searchText&&aForm.searchText.value){aForm.startPage.value=0;}
aForm.submit();}
function onModifySearchClick(aForm)
{var elmts=aForm.elements;for(var i=0;i<elmts.length;i++){if(elmts[i].name=="action"){elmts[i].value="modifySearch";aForm.submit();return;}}
alert("cannot find form: "+aForm.name);}
function onChangeSearchHistory(aForm)
{var index=aForm.history.selectedIndex;if(index>0)
window.location=aForm.history.options[index].value;}
function onClickMarkAll(aForm,aNamePrefix){if(typeof jQuery!='undefined'){var markall=(aForm.markall&&aForm.markall.checked)||jQuery('#markall')&&jQuery('#markall')[0].checked;}else{var markall=(aForm.markall&&aForm.markall.checked)||$('#markall')&&$('#markall')[0].checked;}
if(isString(aForm)){aForm=document.forms[aForm];}
if(!aNamePrefix){aNamePrefix="";}
markAllCheckboxes(aForm,aNamePrefix,markall);}
function isString(value){return typeof value==='string';}
function changeStartPage(aForm,pageNumber){setStartPage(aForm,'startPage',pageNumber);$(aForm).submit();}
function setStartPage(aForm,aField,aValue){var input=$(aForm).find('input[name='+aField+']');if(input.length==0){input=document.createElement("input");input.type="hidden";input.name=aField;input.value=aValue;$(aForm).append(input);}
else{input.val(aValue);}}
function submitArticles(aForm,action,errorMessage){return submitMultiArticles(aForm,action,false,errorMessage);}
function evalAll(box){var form=box.form;var checked=0;var max=form.doi.length;for(var count=0;count<max;count++){if(eval("form.doi["+count+"].checked")==true){checked++;}}
if(checked==max)updateSelectAllBox(true,form);else updateSelectAllBox(false,form);}
function updateSelectAllBox(checkState,form){var oneOrTwo=form.selectAll.length;if(oneOrTwo==2){form.selectAll[0].checked=checkState;form.selectAll[1].checked=checkState;}
else form.selectAll.checked=checkState;}
function onSearchRadioClick(aRadio)
{document.forms['frmSearch'].submit();}
function submitSuggestedSearch(aQuery)
{var frm=document.forms['frmSearch'];frm.submit();}
function onSubmitJournalSearch()
{var url="/action/doSearch?action=search";var elmts=document.frmJournalSearch.elements;for(var i=0;i<elmts.length;i++)
{var name=elmts[i].name;var value=elmts[i].value;if(value=="")
continue;if(name.indexOf("field")==-1){url+=("&"+name+"="+value);}}
window.location=url;}
function _toQueryTerm(aField,aValue)
{var myValue=aValue.replace(/\"/g,'');var hasSpc=false;for(var i=aValue.length-1;i>=0;i--){if(aValue.charAt(i)==' '){hasSpc=true;break;}}
if(hasSpc)
myValue='\"'+myValue+'\"';return("%2B"+aField+"%3A"+myValue)}
function checkElement(aForm,aName,aValue)
{var elmts=aForm.elements;for(var i=elmts.length-1;i>=0;i=i-1)
{if((elmts[i].name==aName)&&(elmts[i].value==aValue))
{elmts[i].checked=true;return;}}}
function checkSearchInput(aForm)
{if(aForm.searchText.value=="Enter Keywords"){alert("Please enter search terms");}else{aForm.submit();}}
function checkValue(value,errorValue,errorMessage){if(value==errorValue){alert(errorMessage);return false;}
return true;}
function searchSavePopup(aForm)
{var access=aForm.access;if(access&&access.value!='nofilter'){if(!confirm("Save Search will not include your Access Rights criteria, do you want to continue?")){return;}}
var url="/action/doSaveSearch";var new_window;var windowProperties;windowProperties="width=550,height=250,toolbar=0,menubar=0,resizable=1,scrollbars=yes";if(new_window==null){new_window=window.open(url,null,windowProperties);}else{new_window.document.replace(url);}}
function getSaveSearchNameObject(aForm)
{var obj;if(!document.all){var arr=aForm.elements;for(var i=0;(!obj)&&(i<arr.length);i++){if(arr[i].name=="saveSearchName"){obj=arr[i];}}}else{obj=document.all.saveSearchName;}
return obj;}
function performSaveSearch(aForm,aIsFAJ)
{var sltAlert=aForm.alertme;if(aIsFAJ&&(sltAlert.selectedIndex>0)){alert("Sorry, e-mail alert for journals with \n"+"full access rights is not available.");return;}
aForm.submit();}
function resetField(aField,aDefaultText,aColor)
{if(aField.value==aDefaultText){aField.value="";}
aField.style.color=aColor;}
function submitIfValid(){var x=document.getElementById("journalCode");var hasJournal=x.value!="";if(hasJournal&&hasSubcriberType()&&hasSubscriptionType()){x.form.submit();}}
function submitIfTypes(){if(hasSubcriberType()&&hasSubscriptionType())$("ecommerceForm").submit();}
function submitIfSubscriber(){if(hasSubcriberType())$("ecommerceForm").submit();}
function submitIfSubscriptionType(){if(hasSubscriptionType())$("ecommerceForm").submit();}
function hasSubcriberType(){return isChecked($("individual"))||isChecked($("institution"));}
function hasSubscriptionType(){return $("electronic").checked||$("print").checked||$("combo").checked;}
function isChecked(y){return y&&(y.type=="hidden"||y.checked)}
function changedCountry(element){var options=jQuery("#stateOptions");var visibleBlock=options.children('#state'+jQuery(element).val());var visibleId=visibleBlock&&visibleBlock.length?visibleBlock[0].id:'stateTxt';options.children().each(function(index,block){var blockId=block.id;var input;block=jQuery(block);if(blockId==visibleId){block.show();input=block.find('.input').eq(0);if(input.hasClass("required-but-hidden")){input.addClass("required");input.removeClass("required-but-hidden");}
input.attr("name",'state');}else{block.hide();input=block.find('.input').eq(0);if(input.hasClass("required")){input.removeClass("required");input.addClass("required-but-hidden");}
input.attr("name",'stateHidden');}});}
function updateVatField(element,vatEnabledCountryJsonObj,update){if(update){var vatEnabledCountryObjectsArray=vatEnabledCountryJsonObj.vatEnabledCountryObjects;var selectedCountry=jQuery(element).val();var found=false;for(var i=0;i<vatEnabledCountryObjectsArray.length&&!found;i++){if(vatEnabledCountryObjectsArray[i].countryIsoAlpha2==selectedCountry){found=true;}}
var vatNumberField=jQuery("input[name='vatNumber']");if(found||selectedCountry=="-1"){vatNumberField.closest("tr").show();}else{jQuery(vatNumberField).closest("tr").hide();jQuery(vatNumberField).val('');}}}
function toggleList(heading,list)
{if(typeof list==='string')list=document.getElementById(list);else if(list.length)list=list[0];if(heading.className.indexOf('expanded')!=-1){list.style.display='none';heading.className='loiListHeading collapsed';}
else{list.style.display='block';heading.className='loiListHeading expanded';}}
function submitArticles(aForm,action){var hasMarked=false;var elmts=aForm.elements;for(var i=0;i<elmts.length;i++){if((elmts[i].name=="doi")&&(elmts[i].type=="checkbox")&&(elmts[i].checked)){hasMarked=true;break;}}
if(!hasMarked){alert("Please check at least one article.");return;}
for(var i=0;i<elmts.length;i++){if((elmts[i].name=="doi")&&(elmts[i].type!="checkbox")){elmts[i].name="xdoi";}}
aForm.setAttribute('action',action);aForm.method="post";aForm.submit();return false;}
function checkCollectionPublication(event){var newValue=new String(document.getElementById("categoryId").value);if(newValue.indexOf("collection")!=-1){var collectionCode=newValue.split("-")[1];document.getElementById("frmQuickSearch").setAttribute("action","/topic/"+collectionCode+"?allowEmptyTermQuery=true");}else{document.getElementById("frmQuickSearch").setAttribute("action","/action/doSearch");}}
function clearFields(aForm)
{for(var i=0;i<aForm.elements.length;i++){var elem=aForm.elements[i];if(elem.type=="text")
elem.value="";else if(elem.type.match("select-(one|multiple)"))
elem.selectedIndex=0;}};
function preload(){load();}
function preunload(){unload();}
function load()
{}
function unload()
{}
function changeForegroundColor(eid,color){if(document.getElementById&&(elem=document.getElementById(eid)))
elem.style.color=color;}
if(typeof $=="undefined")$=function(id){return document.getElementById(id);}
function RightslinkPopUp(aPublisher,aPublication,aTitle,aDate,aAuthor,aContentId,aCopyright,aVolume,aIssue,aStartPage,aEndPage,aIssn,aOrderBeanReset,aColor,aIncludeColor,aReprints,aPermissions)
{var location="?publisherName="+aPublisher
+"&publication="+aPublication
+"&title="+aTitle
+"&publicationDate="+aDate
+"&author="+aAuthor
+"&contentID="+aContentId
+"&copyright="+aCopyright
+"&startPage="+aStartPage
+"&endPage="+aEndPage;if(aVolume!=null){location+="&volumeNum="+aVolume;}
if(aIssue!=null){location+="&issueNum="+aIssue;}
if(aIssn!=null){location+="&issn="+aIssn;}
if(aOrderBeanReset!=null){location+="&orderBeanReset="+aOrderBeanReset;}
if(aIncludeColor!='false'){if(aColor!=null){location+="&color="+aColor;}}
if(aReprints!=null){location+="&reprints="+aReprints;}
if(aPermissions!='false'){location+="&permissions="+aPermissions;}
var link="/servlet/linkout?type=rightslink&url="+escape(location);var winprops="location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=650,height=550";PopUp=window.open(link,'Rightslink',winprops);}
function MM_preloadImages(){}
function MM_swapImgRestore(){}
function MM_findObj(n,d){}
function MM_swapImage(){}
function menuMouseOver(type,actualType){document.getElementById('MenuItem_'+type).className='MenuItemOver_'+(type==actualType);}
function menuMouseOut(type,actualType){document.getElementById('MenuItem_'+type).className='MenuItem_'+(type==actualType);}
function menuClick(type){document.getElementById('MenuLink_'+type).click();}
function browserCheck(){this.ns4=(document.layers)?true:false;this.ie=(document.all&&(!window.opera))?true:false;this.dom=(document.getElementById)?true:false;this.ns6=(window.sidebar)?true:false;this.moz=(window.sidebar||navigator.userAgent.indexOf('Gecko')!=-1)?true:false;this.opera=(window.opera)?true:false;this.mac=(navigator.userAgent.indexOf('Mac')!=-1)?true:false;}
browser=new browserCheck();var Obj;function getObjectByName(nameOfObject){Obj=null;if(browser.ie)Obj=document.all[nameOfObject]
else if(browser.dom)Obj=findDOMObject(nameOfObject)
else if(browser.ns4)findLayer(window,nameOfObject);return(!Obj||(browser.ns4&&Obj==window))?"Object not found":Obj;}
function findDOMObject(nameOfObject){for(var i=0;i<document.images.length;i++){if(document.images[i].name==nameOfObject)return document.images[i]}
return document.getElementById(nameOfObject)}
function findLayer(node,nameOfObject){if(node.name==nameOfObject)Obj=node;for(var counter=0;counter<node.document.images.length;counter++){if(node.document.images[counter].name==nameOfObject)Obj=node.document.images[counter];}
for(var i=0;i<node.document.layers.length;i++){findLayer(node.document.layers[i],nameOfObject);}}
function toggleVisibility(id){obj=getObjectByName(id);if(obj){v=obj.style.display;obj.style.display=(v=='none')?'block':'none';i=getObjectByName('hiddenImage');if(i)i.src='/page/imageHack.jsp?object='+id+'&display='+obj.style.display+'&dummy='+(new Date()).getTime();}}
function removeClass(el,className){if(!(el&&el.className))return false;var cls=el.className.split(" ");var ar=new Array();for(var i=cls.length;i>0;)if(cls[--i]!=className)ar[ar.length]=cls[i];el.className=ar.join(" ");return cls.length!=ar.length;}
function hasClass(el,className){if(!(el&&el.className))return false;var cls=el.className.split(" ");for(var i=cls.length;i>0;)if(cls[--i]==className)return true;return false;}
function addClass(el,className){if(!el||hasClass(el,className))return;if(el.className)el.className+=" "+className;else el.className=className;}
function addCssRule(selector,rule){if(document.styleSheets){var css=document.styleSheets[document.styleSheets.length-1];if(css.addRule)css.addRule(selector,rule);else if(css.insertRule)css.insertRule(selector+"{"+rule+"}",css.cssRules.length);}}
function getCssText(){var imports="";var cssText="\n";var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){var css=styleSheets.item(i);var mediaText=typeof css.media=="string"?css.media:css.media.mediaText;if(!mediaText||mediaText.indexOf("all")!=-1||mediaText.indexOf("screen")!=-1){if(css.imports){for(var j=0;j<css.imports.length;j++){var href=css.imports[j].href;var lastQuote=href.lastIndexOf('"');if(lastQuote!=-1){mediaText=href.substr(lastQuote+1);if(mediaText.indexOf("all")==-1&&mediaText.indexOf("screen")==-1)continue;href=href.substr(1,lastQuote-1);}
imports+='@import url("'+href+'");\n';}}
if(css.rules){for(var j=0;j<css.rules.length;j++){cssText+=css.rules[j].selectorText+" { "+css.rules[j].style.cssText+" }\n";}}else if(css.cssRules){for(var j=0;j<css.cssRules.length;j++){var rule=css.cssRules.item(j);if(rule.type==rule.IMPORT_RULE||rule.type==rule.MEDIA_RULE){mediaText=rule.media.mediaText;if(mediaText&&mediaText.indexOf("all")==-1&&mediaText.indexOf("screen")==-1)continue;if(rule.type==rule.IMPORT_RULE)imports+=rule.cssText;else cssText+=rule.cssText+"\n";}else{cssText+=rule.cssText+"\n";}}}}}
return imports+cssText;}
function loadCss(url,title,media){var el=document.createElement('link');el.type='text/css';el.rel='stylesheet';el.href=url;el.media=media||'screen';el.title=title||'dynamicLoadedSheet';document.getElementsByTagName("head")[0].appendChild(el);}
function loadJs(url){var el=document.createElement("script");el.type="text/javascript";el.src=url;el.async=false;document.getElementsByTagName("head")[0].appendChild(el);}
function addListener(el,evname,func){if(el.attachEvent)el.attachEvent("on"+evname,func);else if(el.addEventListener)el.addEventListener(evname,func,true);}
function removeListener(el,evname,func){if(el.detachEvent)el.detachEvent("on"+evname,func);else if(el.removeEventListener)el.removeEventListener(evname,func,true);}
function _getSession(){return window.session?window.session:(window.session=new Array());}
function setSessionAttribute(name,value){function test(doc){}
sendServerMsg("/action/sessionAccess?action=setJavaScriptAttribute&name="+name+"&value="+value,test);_getSession()[name]=value;}
function getSessionAttribute(name){return _getSession()[name];}
function sendServerMsg(url,callBack){function _receiveServerResponse(ev){var iFrame=window.event?window.event.srcElement:ev.currentTarget;var doc=iFrame.contentDocument?iFrame.contentDocument:document.frames(iFrame.id).document;if(iFrame.callBack)iFrame.callBack(doc);document.body.removeChild(document.getElementById(iFrame.id));}
var iFrame=document.createElement('iframe');addListener(iFrame,"load",_receiveServerResponse);iFrame.setAttribute("id","msgFrame"+new Date().getTime());iFrame.setAttribute("src",url);iFrame.setAttribute("style","display:none");if(callBack)iFrame.callBack=callBack;document.body.appendChild(iFrame);}
function copyInnerHtml(src,target){var domSupported=document.getElementById?true:false;var se=(domSupported&&typeof src=="string")?document.getElementById(src):src;var te=(domSupported&&typeof target=="string")?document.getElementById(target):target;if(se.innerHTML&&te.innerHTML)te.innerHTML=se.innerHTML;}
function filterSelect(selectId,value){var select;if(document.getElementById&&(select=document.getElementById(selectId))&&select.options){if(!select.optionsCopy){select.optionsCopy=new Array();select.optionTexts=new Array();for(var i=0;i<select.options.length;i++){var opt=select.options[i];select.optionsCopy[i]=opt;select.optionTexts[i]=opt.text.toLowerCase();}}
value=value.toLowerCase();var allTexts=select.optionTexts;var displayOptions=select.options;var count=displayOptions.length=0;for(var i=0;i<allTexts.length;i++){if(allTexts[i].indexOf(value)!=-1){var option=select.optionsCopy[i];displayOptions[count++]=option;option.selected=option.text==value;}}
if(count==1)displayOptions[0].selected=true;}}
function popupElement(el,anchor,windowParams){if(typeof el=="string"){el=(document.getElementById)?document.getElementById(el):(document.all)?document.all[el]:false;}
if(el){var tmp;if(el.popupWindow&&!el.popupWindow.closed){el.popupWindow.focus();tmp=el.popupWindow.document;}else{if(!windowParams)windowParams={};el.popupWindow=window.open('',windowParams.name?windowParams.name:'',windowParams.featureString?windowParams.featureString:'resizable=yes,scrollbars=yes,width=600,height=500');tmp=el.popupWindow.document;tmp.writeln('<html><head><title>'+document.title+'</title><style type="text/css">');var styleSheets=document.styleSheets;for(var i=0;styleSheets&&i<styleSheets.length;i++){var css=styleSheets.item(i);var cssHref=css.href;if(cssHref!=null&&cssHref.indexOf(window.location.hostname)>0){if(css.cssText)tmp.writeln(css.cssText);else{var cssRules=css.rules?css.rules:css.cssRules;for(var j=0;cssRules&&j<cssRules.length;j++){tmp.writeln(cssRules.item(j).cssText);}}}}
tmp.writeln('</style></head><body id="'+el.id+'">');tmp.writeln(el.innerHTML);tmp.writeln('</body></html>');tmp.close();}
if(anchor){var target=(tmp.getElementById)?tmp.getElementById(anchor):(tmp.all)?tmp.all[anchor]:false;if(target){if(target.scrollIntoView)target.scrollIntoView();else if(window.scroll&&target.offsetTop)el.popupWindow.scroll(0,target.offsetTop);}}}}
function markAllCheckboxes(aForm,aNamePrefix,aChecked){if(aForm&&aForm.length>0&&aForm[0].tagName&&aForm[0].tagName=='FORM'){aForm=aForm[0];}
var elmts=aForm.elements;for(var i=0;i<elmts.length;i++){if(elmts[i].type=="checkbox"&&elmts[i].name.indexOf(aNamePrefix)==0){elmts[i].checked=aChecked;}}}
function submitMultiArticles(aForm,action,aMarkall,errorMessage){var hasMarked=false;var elmts=aForm.elements;for(var i=0;i<elmts.length;i++){if((elmts[i].name=="doi")&&(elmts[i].type=="checkbox")&&(elmts[i].checked)){hasMarked=true;break;}}
if(!hasMarked){if(aMarkall){markAllCheckboxes(aForm,"doi",true);}else{alert(errorMessage?errorMessage:"Please check at least one article.");return false;}}
for(var i=0;i<elmts.length;i++){if((elmts[i].name=="doi")&&(elmts[i].type!="checkbox")){elmts[i].name="xdoi";}}
if(aForm.getAttributeNode("action")==null){aForm.action=action;}else{aForm.getAttributeNode("action").nodeValue=action;}
aForm.method="post";aForm.submit();return true;}
function setCheckWhenDefine(aCbx,aState)
{if(aCbx){aCbx.checked=aState;}}
function genSideCitation(dbid,linkoutUrl,display){genSide('citation',dbid,linkoutUrl,display);}
function genSideQuickSearch(dbid,value,display){genSide('quicksearch',dbid,'',display,'','','',value);}
function genSideRelated(dbid,linkoutUrl,display){genSide('related',dbid,linkoutUrl,display);}
function popup(citart,id,doi,ptype,area){popupRef(citart,id,doi,ptype,area,600,500);}
function popupFull(id,doi,ptype,area,width,height){var popupURL="/action/showFullPopup?id="+id+"&doi="+doi;if(area)popupURL+="&area="+area;if(ptype)ptype=ptype.replace(/\W/g,'');var winname=ptype?ptype:'popupRef';var n=window.open(popupURL,winname,'resizable=yes,scrollbars=yes,width='+width+',height='+height);n.focus();}
function popupRef(citart,id,doi,ptype,area,width,height){var popupURL="/action/showPopup?citid="+citart+"&id="+id+"&doi="+doi;if(area)popupURL+="&area="+area;if(ptype)ptype=ptype.replace(/\W/g,'');var winname=ptype?ptype:'popupRef';var n=window.open(popupURL,winname,'resizable=yes,scrollbars=yes,width='+width+',height='+height);n.moveTo(10,10);n.focus();}
function popupHelp550(aUrl)
{popupHelpX(aUrl,"width=550,height=540,top=10,left=50,toolbar=0,menubar=0,resizable=yes,scrollbars=yes");}
function popupHelp580(aUrl)
{popupHelpX(aUrl,"width=580,height=540,top=10,left=50,toolbar=0,menubar=0,resizable=yes,scrollbars=yes");}
function popupHelp625(aUrl)
{popupHelpX(aUrl,"width=625,height=540,top=10,left=50,toolbar=0,menubar=0,resizable=yes,scrollbars=yes");}
function popupHelpX(aUrl,aWinProps)
{var winid=window.open(aUrl,"popupHelp",aWinProps);if(winid.focus)winid.focus();return false;}
function popupHelp(aUrl)
{popupHelp580(aUrl);}
function popupCoverImage(url)
{var new_window;var windowProperties;windowProperties="width=750,height=700,top=30,left=230,toolbar=0,menubar=0,resizable=1,scrollbars=yes";if(new_window==null){new_window=window.open(url,null,windowProperties);}else{new_window.document.replace(url);}}
function encodeLinkOutUrl(aUrl)
{var result="";for(var i=0;i<aUrl.length;i++){var encoded=aUrl.charAt(i);switch(encoded){case'?':case'&':encoded=escape(encoded);break;default:}
result+=encoded;}
return result;}
function submitXrsSearch(frm)
{if(!frm){frm=document.forms['frmSearch'];}
var xrsurl="http://www.google.com/cobrand?"+"restrict="+frm.restrict.value+"&q="+frm.searchText.value+"&filter=0"+"&sa=Search+"+"&cof=AWPID:bbd6d01e9a530922";var url="/servlet/linkout?type=search&dbid=16&url="+encodeLinkOutUrl(xrsurl);var winprops="width=750,height=700,top=10,left=20,toolbar=1,menubar=1,resizable=yes,scrollbars=yes,status=yes";var win=window.open(url,null,winprops);if(win!=null){win.focus();}
return false;}
var search_highlight=true;function highlight()
{var from=search_highlight?"single_highlight_class":"searchNone";var to=search_highlight?"searchNone":"single_highlight_class";var elmts=document.getElementsByTagName("span");for(var i=0;i<elmts.length;i++){var node=elmts.item(i);for(var j=0;j<node.attributes.length;j++){var item=node.attributes.item(j);if((item.nodeName=='class')&&(item.nodeValue.indexOf(from)==0)){node.className=to+item.nodeValue.substring(from.length);}}}
search_highlight=!search_highlight;}
var emailRegx=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;function isEmail(email){if(email.value)email=email.value;return emailRegx.test(email);}
function countSelected(select){var result=0;if(select.options)for(var i=0;i<select.options.length;i++)if(select.options[i].selected)result++;return result;}
function countChecked(form,fieldName){var result=0;var items=form.elements[fieldName];if(items)for(var i=0;i<items.length;i++)if(items[i].checked)result++;return result;}
function getCookie(name){name=name+"=";var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var c=cookies[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length);}
return null;}
function syncSession(sid,atcookie){if(sid){var url=location.host;url=url.indexOf("staging.")==0?url.substring(8):("staging."+url);url="http://"+url+"/session.jsp"+"?JSESSIONID="+sid;if(atcookie)url+="&atcookie="+atcookie;window._sidImg=new Image;window._sidImg.src=url;}}
function confirmAction(url,msg){if(confirm(msg))document.location=url;}
function msword2html(str)
{if(str==null||str.replace(/\s/g,"")==""){return str;}
var array=[8211,"&ndash;",8212,"&mdash;",8216,"&lsquo;",8217,"&rsquo;",8218,"&sbquo;",8219,"&#x201b;",8220,"&ldquo;",8221,"&rdquo;",8222,"&bdquo;",8223,"&#x201f;"];for(var i=0;i<array.length;i+=2){str=str.replace(new RegExp(String.fromCharCode(array[i]),"g"),array[i+1]);}
return str;}
function addFlashMovie(id,flv){var flashvars={file:flv,type:'flv'};var params={allowfullscreen:false};var attributes={};swfobject.embedSWF('/flvplayer.swf',id,"352","288","7.0.0",false,flashvars,params,attributes);}
function getFormInput(formName,inputName)
{var form=getForm(formName);for(var i=0;i<form.elements.length;i++){if(form.elements[i].name==inputName)
return form.elements[i];}
return null;}
function searchResultPage(aForm,page,aSubject)
{getFormInput(aForm.name,'startPage').value=page;filterBySimilarArticles(aForm,null);}
function filterBySimilarArticles(searchForm,doi){}
function searchNextResultPage(aForm,aOffset)
{var startPage=null;for(var i=0;i<aForm.elements.length;i++){if(aForm.elements[i].name=='startPage'){startPage=aForm.elements[i];break;}}
if(startPage!=null){startPage.value=eval(startPage.value)+aOffset;aForm.submit();}}
function searchWithButtona(aPageOffset,button)
{var form=document.forms.searchForm;var page=eval(form.startPage.value)+aPageOffset;form.startPage.value=page;form.nextPrev.value="yes";submitFormWithButtonClicked(form,button);}
function submitFormWithButtonClicked(aForm,aButton)
{if(document.all&&document.all[aButton])
{var x=document.all[aButton];if(x.length)
x=x[0];x.click();}
else
{var x=aForm.action;if((x.type==null)||(x.type.indexOf("select")==-1))
{x+=((x.indexOf("?")>0)?"&":"?");x+=(aButton+".x=1");aForm.action=x;}
else
{var sltd=x.options[x.selectedIndex];var pfxJSBTN="jsbtn:";if(sltd.value.indexOf(pfxJSBTN)==-1)
{var value=(pfxJSBTN+aButton+";"+sltd.value);x.options[x.selectedIndex].value=value;}}
aForm.submit();}}
function searchResultPageByFormId(aForm,page,aSubject){getFormIdInput(aForm.id,'startPage').value=page;aForm.submit();}
function getFormIdInput(formId,inputName){var form=getFormById(formId);for(var i=0;i<form.elements.length;i++){if(form.elements[i].name==inputName)return form.elements[i];}
return null;}
function getFormById(id){for(var i=0;i<document.forms.length;i++){if(document.forms[i].id==id)return document.forms[i];}
return null;}
function getForm(name){for(var i=0;i<document.forms.length;i++){if(document.forms[i].name==name)
return document.forms[i];}
return null;}
function setInputAndSubmit(aForm,aField,aValue)
{setInput(aForm,aField,aValue);aForm.submit();}
function setInput(aForm,aField,aValue)
{var input=aForm[aField];if(typeof input=='undefined'||input==null){input=document.createElement("input");input.type="hidden";input.name=aField;aForm.appendChild(input);}
if(typeof input.length!='undefined'){var i;for(i=0;i<input.length;i++){input[i].value=aValue;}}else{input.value=aValue;}}
function validateRecommendationForm(form,alert1,alert2){if(!isEmail(form.mailToAddress)){alert(alert1);return false;}else if(form.doi.type!='hidden'&&countSelected(form.doi)<1){alert(alert2);return false;}
return true;}
function commentSearchResultPage(i){var f=document.forms.commentSearch;f.startRow.value=i;f.submit();}
function editAdLabel(anchor){anchor.parentNode.getElementsByTagName("form")[0].style.display="block";}
function checkUploadedFile(fileId){if(document.getElementById(fileId).value.length!=0)
return true;alert('Please Choose a File');return false;}
if(typeof jQuery!='undefined'){jQuery(document).ready(function($){$(".clearForm").click(function(){var clearForm=$(this).closest('form');$(clearForm).find(':input').each(function(){switch(this.type){case'password':case'select-multiple':case'select-one':case'text':case'textarea':$(this).val('');break;case'checkbox':case'radio':this.checked=false;}});});jQuery(".includeDebug").hover(function(){jQuery(this).stop(true,true);jQuery(this).children(".debugInfo").show();jQuery(this).addClass("debugBox");},function(){jQuery(this).stop(true,true);jQuery(this).children(".debugInfo").hide();jQuery(this).removeClass("debugBox");});jQuery(".includeDebug .debugInfo").click(function(){jQuery(this).parent().children(".debugAttr").fadeToggle("fast");jQuery(this).parent().children(".debugAttr").children(".debugTable").fadeIn("fast");});jQuery(".includeDebug").bind("mouseenter",function(){jQuery(this).removeClass("debugNoF");});jQuery(".debugError .debugPE").click(function(){jQuery(this).parent().children(".debugST").fadeToggle("fast");});jQuery(".debugTable").click(function(){jQuery(this).fadeOut("fast");});jQuery('.relatedLink').click(function(event){var layer=jQuery(this).next('.relatedLayer');if(layer.css('display')=='none')layer.show();else layer.hide();event.preventDefault();});jQuery('[autofocus]').each(function(){if(!('autofocus'in document.createElement('input'))){jQuery(this).focus();}});jQuery('[placeholder]').each(function(){if(!("placeholder"in document.createElement("input"))){var val=jQuery(this).attr("placeholder");if(this.value==""){this.value=val;jQuery(this).css("color","#999");}
jQuery(this).focus(function(){if(this.value==val){this.value="";jQuery(this).css("color","#000");}}).blur(function(){if(jQuery.trim(this.value)==""){this.value=val;jQuery(this).css("color","#999");}});jQuery('form').submit(function(){jQuery(this).find('[placeholder]').each(function(){if(this.value==jQuery(this).attr("placeholder")){this.value="";}});});}});jQuery('.regForm').bind('reset',function(e){clearCapcha();});});function replace_param(theURL,paramName,newValue){var uri_array=theURL.split('?');var params_array=uri_array[1].split('&');var items_array=new Array;for(i=0;i<params_array.length;i++){items_array=params_array[i].split('=');if(items_array[0]==paramName){params_array[i]=items_array[0]+'='+newValue;}}
return uri_array[0]+'?'+params_array.join('&');};jQuery(window).load(function(){if(supportsNavigationTiming()){var pageLoadTime=(new Date().getTime())-window.performance.timing.navigationStart;var threshold=0;if(pageLoadTime>0){threshold=pageLoadTime/10;}
var rTs=$('.rTS');if(rTs){rTs.each(function(e){var replacerTimeSpentNano=+($(this).text());if(replacerTimeSpentNano>0){replacerTimeSpentNano=replacerTimeSpentNano/1000000;if(replacerTimeSpentNano>threshold){$(this).prepend("<span style='font-size: 27px; color:red; margin: 0 7px 0 0; padding: 0;'>&#x26a0;</span>").css("border","1px solid red");}else{$(this).css("color","green");}}});}}});function supportsNavigationTiming(){return!!(window.performance&&window.performance.timing);}
function checkForFigTabContent(){if($(".figuresContent").is(":visible"))
return true;else
setTimeout(checkForFigTabContent,50);}}
function checkQuickSearchInput(aForm,quickSearch){if(aForm.elements["AllField"].value==quickSearch){var url="/action/doSearch";window.location=url;}else{aForm.submit();}}
function resizePopup(imagePath){var img=new Image();img.src=imagePath;img.onload=function(){var popupWidth=this.width;var popupHeight=this.height;if(popupWidth>980)
popupWidth=980;resizeTo(popupWidth,popupHeight);}}
function popUpTermsAndConditions(url){var newWindow=window.open(url,"_blank","toolbar=yes, scrollbars=yes,menubar=yes,resizable=yes, top=500, left=500, width=850, height=600");}
function selectTarget(elem){if(elem.selectedIndex>-1){var selected=elem.options[elem.selectedIndex].value;if(selected=='medline'||selected=='ads'||selected=='crossref'||selected=='scholar'){document.getElementById('frmQuickSearch').setAttribute('target','_blank');}
else{document.getElementById('frmQuickSearch').setAttribute('target','_self');}}}
function radioTarget(elem){if(elem.value=='medline'||elem.value=='ads'||elem.value=='crossref'||elem.value=='scholar'){document.getElementById('frmQuickSearch').setAttribute('target','_blank');}
else{document.getElementById('frmQuickSearch').setAttribute('target','_self');}}
function loadRecaptcha(){if(typeof grecaptcha=='undefined')
return;$('.g-recaptcha').filter(function(){return!$(this).hasClass('explicit');}).each(function(){grecaptcha.render($(this)[0],$(this).data());});}
function clearCapcha(){if(typeof grecaptcha!='undefined')
grecaptcha.reset(0);}
jQuery(document).ready(function(){jQuery(".google-scholar").click(function(e){e.preventDefault();var selected_languageCode=jQuery("#google_translate_element :selected").val();if(!selected_languageCode){var defaultLang=false;for(var i=0;i<navigator.languages.length;i++){if(navigator.languages[i]=="en"){defaultLang=true;break;}}
if(defaultLang)
selected_languageCode="en";else
selected_languageCode=navigator.language;}
jQuery(this).attr('href',returnHrefParameter("hl",selected_languageCode,jQuery(this).attr('href')));window.location.href=jQuery(this).attr('href');});function returnHrefParameter(name,value,url){var url_with_new_hl;url_with_new_hl=url.replace(new RegExp('([?|&]'+name+'=)'+'(.+?)(&|$)'),"$1"+encodeURIComponent(value)+"$3");return url_with_new_hl;}});function captchaChallengeSubmit(response){$('textarea#g-recaptcha-response').each(function(){if($(this).val()===response){$(this).closest('form').submit();}});};
$(document).ready(function(){$(document).on('click','.showRefEvent',function(){var rid=$(this).attr("data-rid");rid=rid.split(" ");if(rid.length>1){var referenceText="";$.each(rid,function(index,value){referenceText+=document.getElementById(value).innerHTML+"<br/>";});}
else{var referenceText=document.getElementById(rid[0])&&document.getElementById(rid[0]).innerHTML||$(this).attr("data-refrance");}
var fullReference=referenceText;var refLink=$(this).attr("data-refLink");showRef(this,''+rid+'',''+fullReference+'',''+refLink+'');return false;});$('.footNoteViewer').click(function(e){if(!$(this).next().is('span.ref')){var fid=$(this).attr("data-id");var content=document.getElementById(fid).innerHTML;showFootNote(this,fid,content,fid);return false;}});});function showRef(ref,ids,refValue,refSection){var balloon;$("span.ref:has(.balloon-wrap)").remove();if(ref&&ids&&refValue&&refSection){refValue.replace("&lt;br /&gt;","<br />");if($("[name="+refSection+"]").length||$("#"+refSection).length){if($(".invisible .references").length)
refSection=document.location.origin+$(ref).data('referenceslink');else
refSection='#'+refSection;}else{refSection=$(ref).data('referenceslink');}
balloon=$('<span class="balloon-wrap"><span class="balloon"><a title="Hide Reference Information" onclick="hideRefBalloon(this);return false;" href="#" class="close"></a>'+refValue+'<a class="refLink" title="View References" onclick="hideRefBalloon(this);resetHref();" href="'+refSection+'">View Full Reference List</a></span></span>');$(ref).after($('<span class="ref"></span>').append(balloon));window.openedReferenceBalloon&&hideRefBalloon(window.openedReferenceBalloon);window.openedReferenceBalloon=balloon;balloon.show();balloon.attr("id","openBalloon");$(document).bind('click',offRefClickHandler);}};function showRefUpdate(ref,ids,refValueID,refSection){var balloon;var refValue;if(ref&&ids&&refValueID&&refSection){refValue=getHTML(refValueID)
balloon=$('<span class="balloon-wrap"><span class="balloon"><a title="Hide Reference Information" onclick="hideRefBalloon(this);return false;" href="#" class="close"></a>'+$($.parseHTML(refValue)).text()+'<a class="refLink" title="View References" onclick="hideRefBalloon(this);resetHref();" href="'+"#"+refSection+'">View Full Reference List</a></span></span>');$(ref).after($('<span class="ref">').append(balloon));window.openedReferenceBalloon&&hideRefBalloon(window.openedReferenceBalloon);window.openedReferenceBalloon=balloon;balloon.show();balloon.attr("id","openBalloon");$(document).bind('click',offRefClickHandler);}};function hideRefBalloon(ref){window.openedReferenceBalloon=null;$(ref).closest("span.ref").remove();$(document).unbind('click',offRefClickHandler);};function resetHref(){location.hash='';}
function offRefClickHandler(event){var target=event.target;var $link=$('#openBalloon').parent().prev('a').eq(0);if(typeof $link=='undefined'){$link=$("");}
if($('#openBalloon').find($(target)).length==0&&target!=$link[0]&&$link.find(target).length===0){var sendThis=$('#openBalloon');hideRefBalloon(sendThis);}};function showFootNote(ref,ids,refValue,refSection){var balloon;if(ref&&ids&&refValue&&refSection){refValue.replace("&lt;br /&gt;","<br />");balloon=$('<span class="balloon-wrap"><span class="balloon"><a title="Hide Reference Information" onclick="hideRefBalloon(this);return false;" href="#" class="close">'+'</a>'+$($.parseHTML(refValue)).text()+'<a class="refLink" title="View References" onclick="hideRefBalloon(this);" href="'+"#"+refSection+'">View Full Footnote</a></span></span>');$(ref).after($('<span class="ref">').append(balloon));window.openedReferenceBalloon&&hideRefBalloon(window.openedReferenceBalloon);window.openedReferenceBalloon=balloon;balloon.show();balloon.attr("id","openBalloon");$(document).bind('click',offRefClickHandler);}};;
$.urlParam=function(name){var results=new RegExp('[\\?&]'+name+'=([^&#]*)').exec(window.location.href);if(results==null){return null;}
else{return results[1]||0;}};
jQuery(document).ready(function(){jQuery('.rightslink').click(function(e){var winprops="location=no,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,width=750,height=650";PopUp=window.open(jQuery(this).attr('href'),'Rightslink',winprops);e.preventDefault();});});
function getCookie(cookieName){var cookieValue=" "+document.cookie;var cookieStart=cookieValue.indexOf(" "+cookieName+"=");if(cookieStart==-1)return null;cookieStart=cookieValue.indexOf("=",cookieStart)+1;var cookieEnd=cookieValue.indexOf(";",cookieStart);if(cookieEnd==-1){cookieEnd=cookieValue.length;}
cookieValue=unescape(cookieValue.substring(cookieStart,cookieEnd));return cookieValue;}
var date=new Date();var offset=date.getTimezoneOffset()*-1;var timeZoneCookie=getCookie("timezone");if(timeZoneCookie==null||offset!=timeZoneCookie){document.cookie="timezone="+offset;};
var Track={};(function(undefined){var jquery=typeof jQuery!='undefined';var elements={};var userAgent=navigator.userAgent.toLowerCase();var defaultAjaxSettings={async:!/webkit/.test(userAgent),asynchronous:!/webkit/.test(userAgent),cache:false,timeout:/msie/.test(userAgent)?0:100,requestTimeout:/msie/.test(userAgent)?0:100,contentType:'application/x-www-form-urlencoded',url:'/action/clickThrough'};var extend=function(dst,src){if(jquery){extend=jQuery.extend;}else{extend=Object.extend;}
return extend(dst,src);};var each=function(o,iterator){if(jquery){each=jQuery.each;}else{each=function(object,callback){var name,i=0,length=object.length,isObj=length===undefined||typeof object==="function";if(isObj){for(name in object){if(callback.call(object[name],name,object[name])===false){break;}}}else{for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}
return object;};}
return each(o,iterator);};var bind=function(selector,options,callback){var jQueryBind=function(selector,options,callback){if(options.selector){jQuery(selector).on(options.on,options.selector,options,callback);}else{jQuery(selector).on(options.on,options,callback);}};var oldJQueryBind=function(selector,options,callback){var callbackToUse=callback;if(options.selector){callbackToUse=function(event){var $target=$(event.currentTarget);while(!$target.is(options.selector)&&$target.children().length){$target.children().each(function(){$target=$(this);if($target.is(options.selector)){return false;}});}
if($target.is(options.selector)){callback.call(event.target,event,options);}};jQuery(selector).data('TrackCallback',callbackToUse);}
jQuery(selector).bind(options.on,options,callbackToUse);};var prototypeBind=function(selector,options,callback){$$(selector).each(function(el){Event.observe(el,options.on,callback.bindAsEventListener(this,options));});};if(jquery){if(jQuery.fn.on){bind=jQueryBind;}else{bind=oldJQueryBind;}}else{bind=prototypeBind;}
return bind(selector,options,callback);};var unbind=function(selector,options,callback){var jQueryUnbind=function(selector,options,callback){if(options.selector){jQuery(selector).off(options.on,options.selector,options,callback);}else{jQuery(selector).off(options.on,options,callback);}};var oldJQueryUnbind=function(selector,options,callback){if(options.selector){callback=jQuery(selector).data('TrackCallback');}
if(callback){jQuery(selector).unbind(options.on,callback);}else{jQuery(selector).unbind(options.on);}};var prototypeUnbind=function(selector,options,callback){$$(selector).each(function(el){Event.stopObserving(el,options.on);});};if(jquery){if(jQuery.fn.on){unbind=jQueryUnbind;}else{unbind=oldJQueryUnbind;}}else{unbind=prototypeUnbind;}
return unbind(selector,options,callback);};var sendBeacon=function(options){var formData=new FormData();for(var key in options.data){if(options.data.hasOwnProperty(key)){formData.append(key,options.data[key]);}}
navigator.sendBeacon(options.url,formData);};var ajax=function(ajaxOptions){if(ajaxOptions.useBeacon&&navigator.sendBeacon){ajax=sendBeacon;}else if(jquery){ajax=jQuery.ajax;}else{ajax=function(options){options.parameters=options.data;new Ajax.Request(options.url,options);}}
ajax(ajaxOptions);};var defaultFire=function(options,data){var ajaxSettings=extend(extend({},defaultAjaxSettings),options.ajaxSettings);ajaxSettings.data=extend(extend({},ajaxSettings.data),data);ajax(ajaxSettings);};var defaultOptions={on:'mouseup',fire:defaultFire,acceptEvent:function(e){return e.which===1||e.which===2;},data:{}};var methods={setup:function(options){if(options.fire!==undefined){defaultFire=options.fire;}
if(options.options!==undefined){defaultOptions=extend(extend({},defaultOptions),options.options);}
if(options.ajax!==undefined){defaultAjaxSettings=extend(extend({},defaultAjaxSettings),options.ajax);}},init:function(el){each(elements=el,function(selector,options){if(Object.prototype.toString.call(options)==='[object Array]'){var array=options;for(var i=0;i<array.length;++i){options=array[i];options=extend(extend({},defaultOptions),options);if(options.fire!==undefined){bind(selector,options,methods.onEvent);}}}else{options=extend(extend({},defaultOptions),options);if(options.fire!==undefined){bind(selector,options,methods.onEvent);}}});return this;},destroy:function(){elements.each(function(selector,options){unbind(selector,options.on,options.fire);});return this;},onEvent:function(event,options){if(options==undefined){options=event.data;}
var data=options.data;if(typeof options.acceptEvent=='function'&&!options.acceptEvent(event)){return true;}
var addData=options.addData;if(typeof addData=='function'){try{extend(data,addData.call(event.target,options,event));}catch(ex){if(console&&console.log){console.log('Failed to extract data:'+ex);return;}}}
options.fire(options,data);return true;}};Track=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}};})();
(function(){window.TrackPageTransitions=function(Track,$,o){o=o||{};var $elements=$('*[data-track]');if(!$elements.length){return;}
Track('setup',{ajax:{url:o.url||'/action/analytics',method:'POST',useBeacon:true}});var captureAllPageTransitions=$('html[data-track]').length!=0;Track({body:[{on:'mousedown keydown',selector:captureAllPageTransitions?'a[href]':'*[data-track] a[href], a[href][data-track]',addData:extractData,acceptEvent:function(e){return e.which==1||e.keyCode==13;},data:{EventType:'PageTransition'}},{on:'submit',selector:captureAllPageTransitions?'form':'*[data-track] form, form[data-track]',addData:extractData,data:{EventType:'PageTransition'}}]});};if(typeof Track!='undefined'){if(typeof jQuery!='undefined'){jQuery(document).ready(function(){TrackPageTransitions(Track,jQuery);});}else if(typeof window.Prototype!='undefined'){document.observe('dom:loaded',function(){TrackPageTransitions(Track,$$);});}}
function collectData(el){var d={};$.each(el.attributes,function(i,attrib){var name=attrib.name;if(name.indexOf('data-')==0){name=name.substring("data-".length);name=name.replace(/-([a-z])/g,function(g){return g[1].toUpperCase();});d[name]=attrib.value;}});return d;}
function extractData(options,event){var data={};var $html=$(document.documentElement);var requestId=$html.data('requestId');if(requestId){data.OriginRequestId=requestId;data.OriginUrl=window.location.href;var date=new Date();date.setTime(date.getTime()+60*1000);var expires=date.toGMTString();document.cookie='OriginRequestId='+requestId+'; expires='+expires+"; path=/";}
var $this=$(this);var href;if($this.is("a")){data.LinkText=$this.text();href=$this.attr('href');}else if($this.is("form")){href=$this.attr('action');}
if(href){data.LinkHref=href;if(href.indexOf('/doi/')!=-1){data.doi=href.split("/doi/")[1];}}
var innerFound=false;$.each($this.add($this.parents()),function(){var $ancestor=$(this);var d=null;try{d=$ancestor.data();}catch(ex){d=false;}
if(d===false){d=collectData($ancestor.get(0));}
for(var property in d){if(d.hasOwnProperty(property)&&property.indexOf("track")==0){var name=property.substring("track".length);if(name=="Func"&&d[property]){var func=window[d[property]];if($.isFunction(func)){try{var extra=func.call($ancestor);if(extra){$.extend(data,extra);}}catch(ex){}}
continue;}
if(name.length){data['Track'+name]=d[property];}
if(!innerFound){innerFound=true;if($this.is('a')){var linkIndex=$('a[href*="/doi"], a[href*="/loi"], a[href*="/toc"]',$ancestor).index($this);if(linkIndex>-1){data.LinkIndex=linkIndex+1;}}}}}});if(event.which==1){data.ClickPageX=event.pageX;data.ClickPageY=event.pageY;}
return data;}})();
(function(){var TrackSearchResults=function(Track,$,undefined){var $searchResults=$('.searchResultContainer, #frmSearchResults, #frmSearch, #searchResultsAll, #searchResults, .searchResult, .search-result, #searchResultContent');if(!$searchResults.length){return;}
Track('setup',{ajax:{url:'/action/analytics',useBeacon:true}});var resultSelectorAction={selector:'a[href^="/doi"], a[href^="/article"]',addData:extractDataSearchResult,data:{EventType:'SearchResultClicked'}};Track({'.searchResultContainer .articleLinks, #frmSearch .articleEntry td, .searchResultsListing li':resultSelectorAction,'#searchResultsAll .articleEntry td, #searchResults .searchResultItem .articleInfo':resultSelectorAction,'#frmSearchResults .articleEntry td, #frmSearchResults .articleEntry div, #frmSearchResults .searchResultItem span':resultSelectorAction,'#frmSearchResults .searchResultItem .atcl-item, #frmSearchResults .searchResultItem div':resultSelectorAction,'#frmSearchResults .searchEntry .searchEntryTools, .searchResult .result-list li':resultSelectorAction,'.contentContainer .searchResult td, .search-result .items-results li span':resultSelectorAction,'#frmSearch .article-details, #frmSearchResults .search-results .search-result-item':resultSelectorAction,'#searchResultContent .o-results .m-result, #frmSearchResults .search-results li':resultSelectorAction});};if(typeof Track!='undefined'){if(typeof jQuery!='undefined'){jQuery(document).ready(function(){TrackSearchResults(Track,jQuery);});}else if(typeof window.Prototype!='undefined'){document.observe('dom:loaded',function(){TrackSearchResults(Track,$$);});}}
function extractCommonData(data,options,event){var $this=$(this);var searchResultRows;var clickedRow;var $searchResultRow=$this.closest('#searchResultItems, .search-results, .searchEntry, .contentContainer, #frmSearch, #frmSearchResults, #searchResultContent .o-results');if($searchResultRow.length){searchResultRows=$searchResultRow.find('.articleEntry, .searchResultItem, .searchEntry, .article-details, .search-result-item, .m-result');if(searchResultRows.length){clickedRow=$this.closest('.articleEntry, .searchResultItem, .searchEntry, .article-details, .search-result-item, .m-result');}else{searchResultRows=$searchResultRow.children('li');clickedRow=$this.closest('li');}}else{$searchResultRow=$this.closest('.searchResultsListing, .result-list, .items-results');if($searchResultRow.length){searchResultRows=$searchResultRow.children('li');clickedRow=$this.closest('li');}}
if(searchResultRows.length&&clickedRow.length){data.searchPageRank=searchResultRows.index(clickedRow)+1;}
var $container=$this.closest('.searchResultContainer, .type-search-results, .searchNav, .searchResult, .search-result, #searchResultContent');if(!$container.length){$container=$('.searchResults_paging, .searchResultsCont, .searchResults');}
if($container.length){var $selectedPage=$container.find('.pages .selected, .pages .activeLink, .pages .current, .searchPages .activeLink, .pagination .activeLink, .pagination .active, .pageLinks .selected, .paginationLinks .s-active ');if($selectedPage.length){data.resultPageNum=parseInt($selectedPage.text());}else{var $paginationElements=$container.find('.paginationControls, .paginationLinks').first().find('li:not(:has(a))');if($paginationElements.length){$paginationElements.each(function(){var $innerMostChildOfPagination=$(this).children();while($innerMostChildOfPagination.length){$innerMostChildOfPagination=$innerMostChildOfPagination.children();}
$selectedPage=$.trim($innerMostChildOfPagination.end().text());if($selectedPage.length&&isInt($selectedPage)){data.resultPageNum=parseInt($selectedPage);return false;}});}}}
if(!data.resultPageNum){var startPageFromSearchForm=$('#searchResultsAll, #frmSearch, #frmSearchResults').find('input[name=startPage]');if(startPageFromSearchForm.length){data.resultPageNum=parseInt(startPageFromSearchForm.val())+1;}}}
function isInt(n){return parseInt(n)+0===parseInt(n);}
function extractDataSearchResult(options,event){var data={};var $this=$(this);var $articleEntry=$this.closest('.articleEntry, .searchResultItem, .articleCitation, .m-result');if($articleEntry.length){data.doi=$articleEntry.find(':input[name="doi"]').val();if(!data.doi){data.pii=$articleEntry.find(':input[name="pii"]').val();}}
if(!data.doi&&!data.pii){var href=$this.attr('href');if(typeof href=='undefined'){var link=$this.closest('a');href=link.attr('href');}
if(href.includes("doi")){var doi=href.split("/doi/")[1];var doiPattern=new RegExp('^10\\.\\d\\d\\d\\d(\\d*)/(.+)');if(doiPattern.test(doi)){data.doi=doi;}else{data.doi=doi.substring(doi.indexOf('/')+1);}}else if(href.includes("article/")){var pii=href.split("/article/")[1];data.pii=pii.substring(0,pii.indexOf("/"));}}
extractCommonData.call(this,data,options,event);return data;}
function extractDataForPagination(options,event){var data={};var $this=$(this);var page=$this.text();if(page){data.SearchResultsPageClicked=page;}
extractCommonData(data,options,event);return data;}})();
(function($){$(document).ready(function(){if($('.video-source').length>0){var vids=$('.flowPlayer');for(var i=0;i<vids.length;i++){var srcId=$(vids[i]).attr('id');srcId=srcId+"_src";var sourceEl=vids[i].getElementsByTagName("source")[0];$(sourceEl).attr("src",document.getElementById(srcId).innerHTML);}
$.getScript("/templates/jsp/js/lib/flowplayer/flowplayer.min.js",function(){$.getScript("/templates/jsp/js/lib/flowplayer/flowplayer.hlsjs.min.js",function(){$(".flowPlayer").flowplayer({swfHls:"/templates/jsp/js/lib/flowplayer/flowplayerhls.swf",script:"/templates/jsp/js/lib/flowplayer/embed.min.js",swf:"/templates/jsp/js/lib/flowplayer/flowplayer.swf"});});flowplayer(function(api,root){api.on("error",function(e,api,err){if(err.code==4){$(".fp-message",root).html("An error has occurred trying to display this video. Please reload the page. If reloading the page doesn't work then please contact the support administrator.");}});});});}
if($(".fp-audio").length>0){var audios=$('.fp-audio');for(var i=0;i<audios.length;i++){var srcId=$(audios[i]).attr('id');srcId=srcId+"_"+i;$(audios[i]).attr('id',srcId);}
$.getScript("/templates/jsp/js/lib/flowplayer/flowplayer.min.js",function(){$.getScript("/templates/jsp/js/lib/flowplayer/flowplayer.audio.min.js",function(){$(".fp-audio").flowplayer({splash:true});$(".fp-ui").removeAttr("title");});});}});})(jQuery);
var googletag=googletag||{};googletag.cmd=googletag.cmd||[];(function(){var gpt=document.createElement('script');gpt.async=true;gpt.type='text/javascript';gpt.src=document.location.protocol+'//www.googletagservices.com/tag/js/gpt.js';gpt.setAttribute('rel','preconnect');var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(gpt,node);})();
(function($,window,document,undefined){$(document).ready(function(){function loadDialogContent(data){var $deferred=$.Deferred();$.ajax({url:'/pb/widgets/taggedPublications/dialog',method:'post',data:$.extend({},data,{'do':'tagPublicationDialog'}),asc:false}).done(function(html){$deferred.resolve(html,data);}).fail(function(){$deferred.reject(arguments);});return $deferred.promise();}
function appendHiddenFields($container,data){data=data||{};for(var key in data){if(data.hasOwnProperty(key)){var value=data[key];var $input=$(document.createElement('input'));$input.attr('name',key);$input.attr('type','hidden');$input.attr('value',value);$input.appendTo($container);}}}
function serializeObject(obj){var o={};var a=obj.serializeArray();$.each(a,function(){if(o[this.name]){if(!o[this.name].push){o[this.name]=[o[this.name]];}
o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;}
function showDialog(html,data){var $deferred=$.Deferred();var $html=$(document.createElement('div'));$html.html(html);var $tags=$html.find('.tags');var title=$html.data('title')||'Add to favorites';var usedTags=[];var usedTagsCsv=$html.find('.used-tags').text();if(usedTagsCsv){usedTags=usedTagsCsv.split(',');}
var options={allowSpaces:true,tagLimit:10};if(usedTags.length){options.availableTags=usedTags;}
$tags.tagit(options);var $form=$html.is('form')?$html:$html.find('form');appendHiddenFields($form,data);$html.dialog({title:title,modal:true,autoOpen:true,resizable:false,buttons:{OK:function(){var data=serializeObject($form);$deferred.resolve(data);$tags.tagit('destroy');$(this).dialog('close');},Cancel:function(){$tags.tagit('destroy');$(this).dialog('close');$deferred.reject();}}});return $deferred.promise();}
function updatePublicationTags(data){var $deferred=$.Deferred();$.post('/pb/widgets/taggedPublications/tagPublication',data).done(function(response){$deferred.resolve(data,response);}).fail(function(){$deferred.reject(arguments);});return $deferred;}
var $taggedPublications=$('.taggedPublications');if($taggedPublications.length){var $form=$taggedPublications.find('form');$taggedPublications.find('.highlight').animate({backgroundColor:'#eeeeff'},100,function(){$(this).animate({backgroundColor:'white'},100,function(){$(this).css({backgroundColor:''})})});$taggedPublications.find('td.button').each(function(){var $editButton=$(document.createElement('button'));$editButton.attr('type','button');$editButton.addClass('edit');$editButton.text('Edit');$(this).append($editButton);});$taggedPublications.find(':input[name="delete"]').click(function(event){event.preventDefault();var $selected=$taggedPublications.find(':input[name="tagged"]:checked');var $rows=$([]);$selected.each(function(){var $checkbox=$(this);var $tr=$checkbox.closest('tr');$rows=$rows.add($tr);});$rows.fadeOut('normal',function(){$(this).hide();submitForm({'delete':'delete'});})});var selectALL=$taggedPublications.find(':input[name=select-all]');var selectAllPages=$taggedPublications.find(':input[name=selectAllPages]');selectALL.change(function(event){if(selectALL.is(":checked")){$taggedPublications.find(':input[name="doi"]').prop('checked',true);selectALL.prop("checked",true);selectAllPages.attr("disabled",true);}else{$taggedPublications.find(':input[name="doi"]').prop("checked",false);selectALL.prop("checked",false);selectAllPages.attr("disabled",false);}});selectAllPages.change(function(event){if(selectAllPages.is(":checked")){$taggedPublications.find(':input[name="doi"]').prop('checked',true);selectAllPages.prop("checked",true);selectALL.prop("disabled",true);}else{$taggedPublications.find(':input[name="doi"]').prop("checked",false);selectAllPages.prop("checked",false);selectALL.prop("disabled",false);}});$taggedPublications.find(':input[name="doi"]').change(function(event){var selected=$(this);if(!(selected.is(":checked"))){$taggedPublications.find(':input[name="select-all"]').prop("checked",false);}});function activateDropdown($dropdown,reset){if(reset){$dropdown.find('option').removeAttr('selected');$dropdown.find('option:first').attr('selected','selected');}
$dropdown.change(function(event){var $selected=reset?$dropdown.find("option:not(:first):selected"):$dropdown.find("option:selected");if($selected.length){var data=$selected.data();submitForm(data);}});$dropdown.css({display:'block'});}
var $actions=$form.find(':input[name="action"]');if($actions.length){activateDropdown($actions,true);$form.find(':input[name="delete"]').hide();}
var $filter=$form.find(':input[name="filter"]');activateDropdown($filter,false);function submitForm(data){appendHiddenFields($form,data);$form.submit();}
function onEditClicked(event){var $target=$(event.target||event.srcElement);var $publication=$target.closest('.publication');var data=$publication.data();loadDialogContent(data).then(showDialog).then(updatePublicationTags).then(function(data){submitForm({highlight:data.doi});})}
$taggedPublications.on('click','button.edit',onEditClicked);}
var $addLink=$('.tagPublication a[data-doi], .addToFav a[data-doi]');if($addLink.length){$addLink.click(function(event){event.preventDefault();event.stopPropagation();var data=$addLink.data();function updateAddLinkOnSuccess(){var $span=$(document.createElement('span'));var message=$addLink.data('success-message')||'Added to favorites';$span.html(message);$addLink.replaceWith($span);}
function goToFavorites(){window.location.href="/action/showTaggedPublications";}
loadDialogContent(data).then(showDialog).then(updatePublicationTags).then(updateAddLinkOnSuccess).then(goToFavorites);});}});})
(jQuery,window,document);
(function($){$.widget('ui.tagit',{options:{allowDuplicates:false,caseSensitive:true,fieldName:'tags',placeholderText:null,readOnly:false,removeConfirmation:false,tagLimit:null,availableTags:[],autocomplete:{},showAutocompleteOnFocus:false,allowSpaces:false,singleField:false,singleFieldDelimiter:',',singleFieldNode:null,animate:true,tabIndex:null,beforeTagAdded:null,afterTagAdded:null,beforeTagRemoved:null,afterTagRemoved:null,onTagClicked:null,onTagLimitExceeded:null,onTagAdded:null,onTagRemoved:null,tagSource:null},_create:function(){var that=this;if(this.element.is('input')){this.tagList=$('<ul></ul>').insertAfter(this.element);this.options.singleField=true;this.options.singleFieldNode=this.element;this.element.addClass('tagit-hidden-field');}else{this.tagList=this.element.find('ul, ol').andSelf().last();}
this.tagInput=$('<input type="text" />').addClass('ui-widget-content');if(this.options.readOnly)this.tagInput.attr('disabled','disabled');if(this.options.tabIndex){this.tagInput.attr('tabindex',this.options.tabIndex);}
if(this.options.placeholderText){this.tagInput.attr('placeholder',this.options.placeholderText);}
if(!this.options.autocomplete.source){this.options.autocomplete.source=function(search,showChoices){var filter=search.term.toLowerCase();var choices=$.grep(this.options.availableTags,function(element){return(element.toLowerCase().indexOf(filter)===0);});if(!this.options.allowDuplicates){choices=this._subtractArray(choices,this.assignedTags());}
showChoices(choices);};}
if(this.options.showAutocompleteOnFocus){this.tagInput.focus(function(event,ui){that._showAutocomplete();});if(typeof this.options.autocomplete.minLength==='undefined'){this.options.autocomplete.minLength=0;}}
if($.isFunction(this.options.autocomplete.source)){this.options.autocomplete.source=$.proxy(this.options.autocomplete.source,this);}
if($.isFunction(this.options.tagSource)){this.options.tagSource=$.proxy(this.options.tagSource,this);}
this.tagList.addClass('tagit').addClass('ui-widget ui-widget-content ui-corner-all').append($('<li class="tagit-new"></li>').append(this.tagInput)).click(function(e){var target=$(e.target);if(target.hasClass('tagit-label')){var tag=target.closest('.tagit-choice');if(!tag.hasClass('removed')){that._trigger('onTagClicked',e,{tag:tag,tagLabel:that.tagLabel(tag)});}}else{that.tagInput.focus();}});var addedExistingFromSingleFieldNode=false;if(this.options.singleField){if(this.options.singleFieldNode){var node=$(this.options.singleFieldNode);var tags=node.val().split(this.options.singleFieldDelimiter);node.val('');$.each(tags,function(index,tag){that.createTag(tag,null,true);addedExistingFromSingleFieldNode=true;});}else{this.options.singleFieldNode=$('<input type="hidden" style="display:none;" value="" name="'+this.options.fieldName+'" />');this.tagList.after(this.options.singleFieldNode);}}
if(!addedExistingFromSingleFieldNode){this.tagList.children('li').each(function(){if(!$(this).hasClass('tagit-new')){that.createTag($(this).text(),$(this).attr('class'),true);$(this).remove();}});}
this.tagInput.keydown(function(event){if(event.which==$.ui.keyCode.BACKSPACE&&that.tagInput.val()===''){var tag=that._lastTag();if(!that.options.removeConfirmation||tag.hasClass('remove')){that.removeTag(tag);}else if(that.options.removeConfirmation){tag.addClass('remove ui-state-highlight');}}else if(that.options.removeConfirmation){that._lastTag().removeClass('remove ui-state-highlight');}
if((event.which===$.ui.keyCode.COMMA&&event.shiftKey===false)||event.which===$.ui.keyCode.ENTER||(event.which==$.ui.keyCode.TAB&&that.tagInput.val()!=='')||(event.which==$.ui.keyCode.SPACE&&that.options.allowSpaces!==true&&($.trim(that.tagInput.val()).replace(/^s*/,'').charAt(0)!='"'||($.trim(that.tagInput.val()).charAt(0)=='"'&&$.trim(that.tagInput.val()).charAt($.trim(that.tagInput.val()).length-1)=='"'&&$.trim(that.tagInput.val()).length-1!==0)))){if(!(event.which===$.ui.keyCode.ENTER&&that.tagInput.val()==='')){event.preventDefault();}
if(!(that.options.autocomplete.autoFocus&&that.tagInput.data('autocomplete-open'))){that.tagInput.autocomplete('close');that.createTag(that._cleanedInput());}}}).blur(function(e){if(!that.tagInput.data('autocomplete-open')){that.createTag(that._cleanedInput());}});if(this.options.availableTags||this.options.tagSource||this.options.autocomplete.source){var autocompleteOptions={select:function(event,ui){that.createTag(ui.item.value);return false;}};$.extend(autocompleteOptions,this.options.autocomplete);autocompleteOptions.source=this.options.tagSource||autocompleteOptions.source;this.tagInput.autocomplete(autocompleteOptions).bind('autocompleteopen.tagit',function(event,ui){that.tagInput.data('autocomplete-open',true);}).bind('autocompleteclose.tagit',function(event,ui){that.tagInput.data('autocomplete-open',false)});this.tagInput.autocomplete('widget').addClass('tagit-autocomplete');}},destroy:function(){$.Widget.prototype.destroy.call(this);this.element.unbind('.tagit');this.tagList.unbind('.tagit');this.tagInput.removeData('autocomplete-open');this.tagList.removeClass(['tagit','ui-widget','ui-widget-content','ui-corner-all','tagit-hidden-field'].join(' '));if(this.element.is('input')){this.element.removeClass('tagit-hidden-field');this.tagList.remove();}else{this.element.children('li').each(function(){if($(this).hasClass('tagit-new')){$(this).remove();}else{$(this).removeClass(['tagit-choice','ui-widget-content','ui-state-default','ui-state-highlight','ui-corner-all','remove','tagit-choice-editable','tagit-choice-read-only'].join(' '));$(this).text($(this).children('.tagit-label').text());}});if(this.singleFieldNode){this.singleFieldNode.remove();}}
return this;},_cleanedInput:function(){return $.trim(this.tagInput.val().replace(/^"(.*)"$/,'$1'));},_lastTag:function(){return this.tagList.find('.tagit-choice:last:not(.removed)');},_tags:function(){return this.tagList.find('.tagit-choice:not(.removed)');},assignedTags:function(){var that=this;var tags=[];if(this.options.singleField){tags=$(this.options.singleFieldNode).val().split(this.options.singleFieldDelimiter);if(tags[0]===''){tags=[];}}else{this._tags().each(function(){tags.push(that.tagLabel(this));});}
return tags;},_updateSingleTagsField:function(tags){$(this.options.singleFieldNode).val(tags.join(this.options.singleFieldDelimiter)).trigger('change');},_subtractArray:function(a1,a2){var result=[];for(var i=0;i<a1.length;i++){if($.inArray(a1[i],a2)==-1){result.push(a1[i]);}}
return result;},tagLabel:function(tag){if(this.options.singleField){return $(tag).find('.tagit-label:first').text();}else{return $(tag).find('input:first').val();}},_showAutocomplete:function(){this.tagInput.autocomplete('search','');},_findTagByLabel:function(name){var that=this;var tag=null;this._tags().each(function(i){if(that._formatStr(name)==that._formatStr(that.tagLabel(this))){tag=$(this);return false;}});return tag;},_isNew:function(name){return!this._findTagByLabel(name);},_formatStr:function(str){if(this.options.caseSensitive){return str;}
return $.trim(str.toLowerCase());},_effectExists:function(name){return Boolean($.effects&&($.effects[name]||($.effects.effect&&$.effects.effect[name])));},createTag:function(value,additionalClass,duringInitialization){var that=this;value=$.trim(value);if(this.options.preprocessTag){value=this.options.preprocessTag(value);}
if(value===''){return false;}
if(!this.options.allowDuplicates&&!this._isNew(value)){var existingTag=this._findTagByLabel(value);if(this._trigger('onTagExists',null,{existingTag:existingTag,duringInitialization:duringInitialization})!==false){if(this._effectExists('highlight')){existingTag.effect('highlight');}}
return false;}
if(this.options.tagLimit&&this._tags().length>=this.options.tagLimit){this._trigger('onTagLimitExceeded',null,{duringInitialization:duringInitialization});return false;}
var label=$(this.options.onTagClicked?'<a class="tagit-label"></a>':'<span class="tagit-label"></span>').text(value);var tag=$('<li></li>').addClass('tagit-choice ui-widget-content ui-state-default ui-corner-all').addClass(additionalClass).append(label);if(this.options.readOnly){tag.addClass('tagit-choice-read-only');}else{tag.addClass('tagit-choice-editable');var removeTagIcon=$('<span></span>').addClass('ui-icon ui-icon-close');var removeTag=$('<a><span class="text-icon">\xd7</span></a>').addClass('tagit-close').append(removeTagIcon).click(function(e){that.removeTag(tag);});tag.append(removeTag);}
if(!this.options.singleField){var escapedValue=label.html();tag.append('<input type="hidden" value="'+escapedValue+'" name="'+this.options.fieldName+'" class="tagit-hidden-field" />');}
if(this._trigger('beforeTagAdded',null,{tag:tag,tagLabel:this.tagLabel(tag),duringInitialization:duringInitialization})===false){return;}
if(this.options.singleField){var tags=this.assignedTags();tags.push(value);this._updateSingleTagsField(tags);}
this._trigger('onTagAdded',null,tag);this.tagInput.val('');this.tagInput.parent().before(tag);this._trigger('afterTagAdded',null,{tag:tag,tagLabel:this.tagLabel(tag),duringInitialization:duringInitialization});if(this.options.showAutocompleteOnFocus&&!duringInitialization){setTimeout(function(){that._showAutocomplete();},0);}},removeTag:function(tag,animate){animate=typeof animate==='undefined'?this.options.animate:animate;tag=$(tag);this._trigger('onTagRemoved',null,tag);if(this._trigger('beforeTagRemoved',null,{tag:tag,tagLabel:this.tagLabel(tag)})===false){return;}
if(this.options.singleField){var tags=this.assignedTags();var removedTagLabel=this.tagLabel(tag);tags=$.grep(tags,function(el){return el!=removedTagLabel;});this._updateSingleTagsField(tags);}
if(animate){tag.addClass('removed');var hide_args=this._effectExists('blind')?['blind',{direction:'horizontal'},'fast']:['fast'];var thisTag=this;hide_args.push(function(){tag.remove();thisTag._trigger('afterTagRemoved',null,{tag:tag,tagLabel:thisTag.tagLabel(tag)});});tag.fadeOut('fast').hide.apply(tag,hide_args).dequeue();}else{tag.remove();this._trigger('afterTagRemoved',null,{tag:tag,tagLabel:this.tagLabel(tag)});}},removeTagByLabel:function(tagLabel,animate){var toRemove=this._findTagByLabel(tagLabel);if(!toRemove){throw"No such tag exists with the name '"+tagLabel+"'";}
this.removeTag(toRemove,animate);},removeAll:function(){var that=this;this._tags().each(function(index,tag){that.removeTag(tag,false);});}});})(jQuery);/*! DataTables 1.10.0
 * ©2008-2014 SpryMedia Ltd - datatables.net/license
 */
(function(window,document,undefined){(function(factory){"use strict";if(typeof define==='function'&&define.amd){define('datatables',['jquery-ui'],factory);}
else if(typeof exports==='object'){factory(require('jquery-ui'));}
else if(jQuery&&!jQuery.fn.dataTable){factory(jQuery);}}
(function($){"use strict";var DataTable;var _ext;var _Api;var _api_register;var _api_registerPlural;var _re_dic={};var _re_new_lines=/[\r\n]/g;var _re_html=/<.*?>/g;var _re_date_start=/^[\d\+\-a-zA-Z]/;var _re_escape_regex=new RegExp('(\\'+['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'].join('|\\')+')','g');var _re_formatted_numeric=/[',$£€¥%\u2009\u202F]/g;var _empty=function(d){return!d||d==='-'?true:false;};var _intVal=function(s){var integer=parseInt(s,10);return!isNaN(integer)&&isFinite(s)?integer:null;};var _numToDecimal=function(num,decimalPoint){if(!_re_dic[decimalPoint]){_re_dic[decimalPoint]=new RegExp(_fnEscapeRegex(decimalPoint),'g');}
return typeof num==='string'?num.replace(/\./g,'').replace(_re_dic[decimalPoint],'.'):num;};var _isNumber=function(d,decimalPoint,formatted){var strType=typeof d==='string';if(decimalPoint&&strType){d=_numToDecimal(d,decimalPoint);}
if(formatted&&strType){d=d.replace(_re_formatted_numeric,'');}
return!d||d==='-'||(!isNaN(parseFloat(d))&&isFinite(d));};var _isHtml=function(d){return!d||typeof d==='string';};var _htmlNumeric=function(d,decimalPoint,formatted){if(_empty(d)){return true;}
var html=_isHtml(d);return!html?null:_isNumber(_stripHtml(d),decimalPoint,formatted)?true:null;};var _pluck=function(a,prop,prop2){var out=[];var i=0,ien=a.length;if(prop2!==undefined){for(;i<ien;i++){if(a[i]&&a[i][prop]){out.push(a[i][prop][prop2]);}}}
else{for(;i<ien;i++){if(a[i]){out.push(a[i][prop]);}}}
return out;};var _pluck_order=function(a,order,prop,prop2)
{var out=[];var i=0,ien=order.length;if(prop2!==undefined){for(;i<ien;i++){out.push(a[order[i]][prop][prop2]);}}
else{for(;i<ien;i++){out.push(a[order[i]][prop]);}}
return out;};var _range=function(len,start)
{var out=[];var end;if(start===undefined){start=0;end=len;}
else{end=start;start=len;}
for(var i=start;i<end;i++){out.push(i);}
return out;};var _stripHtml=function(d){return d.replace(_re_html,'');};var _unique=function(src)
{var
out=[],val,i,ien=src.length,j,k=0;again:for(i=0;i<ien;i++){val=src[i];for(j=0;j<k;j++){if(out[j]===val){continue again;}}
out.push(val);k++;}
return out;};function _fnHungarianMap(o)
{var
hungarian='a aa ai ao as b fn i m o s ',match,newKey,map={};$.each(o,function(key,val){match=key.match(/^([^A-Z]+?)([A-Z])/);if(match&&hungarian.indexOf(match[1]+' ')!==-1)
{newKey=key.replace(match[0],match[2].toLowerCase());map[newKey]=key;if(match[1]==='o')
{_fnHungarianMap(o[key]);}}});o._hungarianMap=map;}
function _fnCamelToHungarian(src,user,force)
{if(!src._hungarianMap){_fnHungarianMap(src);}
var hungarianKey;$.each(user,function(key,val){hungarianKey=src._hungarianMap[key];if(hungarianKey!==undefined&&(force||user[hungarianKey]===undefined))
{if(hungarianKey.charAt(0)==='o')
{if(!user[hungarianKey]){user[hungarianKey]={};}
$.extend(true,user[hungarianKey],user[key]);_fnCamelToHungarian(src[hungarianKey],user[hungarianKey],force);}
else{user[hungarianKey]=user[key];}}});}
function _fnLanguageCompat(lang)
{var defaults=DataTable.defaults.oLanguage;var zeroRecords=lang.sZeroRecords;if(!lang.sEmptyTable&&zeroRecords&&defaults.sEmptyTable==="No data available in table")
{_fnMap(lang,lang,'sZeroRecords','sEmptyTable');}
if(!lang.sLoadingRecords&&zeroRecords&&defaults.sLoadingRecords==="Loading...")
{_fnMap(lang,lang,'sZeroRecords','sLoadingRecords');}
if(lang.sInfoThousands){lang.sThousands=lang.sInfoThousands;}
var decimal=lang.sDecimal;if(decimal){_addNumericSort(decimal);}}
var _fnCompatMap=function(o,knew,old){if(o[knew]!==undefined){o[old]=o[knew];}};function _fnCompatOpts(init)
{_fnCompatMap(init,'ordering','bSort');_fnCompatMap(init,'orderMulti','bSortMulti');_fnCompatMap(init,'orderClasses','bSortClasses');_fnCompatMap(init,'orderCellsTop','bSortCellsTop');_fnCompatMap(init,'order','aaSorting');_fnCompatMap(init,'orderFixed','aaSortingFixed');_fnCompatMap(init,'paging','bPaginate');_fnCompatMap(init,'pagingType','sPaginationType');_fnCompatMap(init,'pageLength','iDisplayLength');_fnCompatMap(init,'searching','bFilter');}
function _fnCompatCols(init)
{_fnCompatMap(init,'orderable','bSortable');_fnCompatMap(init,'orderData','aDataSort');_fnCompatMap(init,'orderSequence','asSorting');_fnCompatMap(init,'orderDataType','sortDataType');}
function _fnBrowserDetect(settings)
{var browser=settings.oBrowser;var n=$('<div/>').css({position:'absolute',top:0,left:0,height:1,width:1,overflow:'hidden'}).append($('<div/>').css({position:'absolute',top:1,left:1,width:100,overflow:'scroll'}).append($('<div class="test"/>').css({width:'100%',height:10}))).appendTo('body');var test=n.find('.test');browser.bScrollOversize=test[0].offsetWidth===100;browser.bScrollbarLeft=test.offset().left!==1;n.remove();}
function _fnReduce(that,fn,init,start,end,inc)
{var
i=start,value,isSet=false;if(init!==undefined){value=init;isSet=true;}
while(i!==end){if(!that.hasOwnProperty(i)){continue;}
value=isSet?fn(value,that[i],i,that):that[i];isSet=true;i+=inc;}
return value;}
function _fnAddColumn(oSettings,nTh)
{var oDefaults=DataTable.defaults.column;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.mData:iCol,idx:iCol});oSettings.aoColumns.push(oCol);var searchCols=oSettings.aoPreSearchCols;searchCols[iCol]=$.extend({},DataTable.models.oSearch,searchCols[iCol]);_fnColumnOptions(oSettings,iCol,null);}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];var oClasses=oSettings.oClasses;var th=$(oCol.nTh);if(!oCol.sWidthOrig){oCol.sWidthOrig=th.attr('width')||null;var t=(th.attr('style')||'').match(/width:\s*(\d+[pxem%])/);if(t){oCol.sWidthOrig=t[1];}}
if(oOptions!==undefined&&oOptions!==null)
{_fnCompatCols(oOptions);_fnCamelToHungarian(DataTable.defaults.column,oOptions);if(oOptions.mDataProp!==undefined&&!oOptions.mData)
{oOptions.mData=oOptions.mDataProp;}
if(oOptions.sType)
{oCol._sManualType=oOptions.sType;}
if(oOptions.className&&!oOptions.sClass)
{oOptions.sClass=oOptions.className;}
$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");if(typeof oOptions.iDataSort==='number')
{oCol.aDataSort=[oOptions.iDataSort];}
_fnMap(oCol,oOptions,"aDataSort");}
var mDataSrc=oCol.mData;var mData=_fnGetObjectDataFn(mDataSrc);var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var attrTest=function(src){return typeof src==='string'&&src.indexOf('@')!==-1;};oCol._bAttrSrc=$.isPlainObject(mDataSrc)&&(attrTest(mDataSrc.sort)||attrTest(mDataSrc.type)||attrTest(mDataSrc.filter));oCol.fnGetData=function(oData,sSpecific){var innerData=mData(oData,sSpecific);if(oCol.mRender&&(sSpecific&&sSpecific!==''))
{return mRender(innerData,sSpecific,oData);}
return innerData;};oCol.fnSetData=_fnSetObjectDataFn(mDataSrc);if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;th.addClass(oClasses.sSortableNone);}
var bAsc=$.inArray('asc',oCol.asSorting)!==-1;var bDesc=$.inArray('desc',oCol.asSorting)!==-1;if(!oCol.bSortable||(!bAsc&&!bDesc))
{oCol.sSortingClass=oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if(bAsc&&!bDesc)
{oCol.sSortingClass=oClasses.sSortableAsc;oCol.sSortingClassJUI=oClasses.sSortJUIAscAllowed;}
else if(!bAsc&&bDesc)
{oCol.sSortingClass=oClasses.sSortableDesc;oCol.sSortingClassJUI=oClasses.sSortJUIDescAllowed;}
else
{oCol.sSortingClass=oClasses.sSortable;oCol.sSortingClassJUI=oClasses.sSortJUI;}}
function _fnAdjustColumnSizing(settings)
{if(settings.oFeatures.bAutoWidth!==false)
{var columns=settings.aoColumns;_fnCalculateColumnWidths(settings);for(var i=0,iLen=columns.length;i<iLen;i++)
{columns[i].nTh.style.width=columns[i].sWidth;}}
var scroll=settings.oScroll;if(scroll.sY!==''||scroll.sX!=='')
{_fnScrollDraw(settings);}
_fnCallbackFire(settings,null,'column-sizing',[settings]);}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}
function _fnVisbleColumns(oSettings)
{return _fnGetColumns(oSettings,'bVisible').length;}
function _fnGetColumns(oSettings,sParam)
{var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}
function _fnColumnTypes(settings)
{var columns=settings.aoColumns;var data=settings.aoData;var types=DataTable.ext.type.detect;var i,ien,j,jen,k,ken;var col,cell,detectedType,cache;for(i=0,ien=columns.length;i<ien;i++){col=columns[i];cache=[];if(!col.sType&&col._sManualType){col.sType=col._sManualType;}
else if(!col.sType){for(j=0,jen=types.length;j<jen;j++){for(k=0,ken=data.length;k<ken;k++){if(cache[k]===undefined){cache[k]=_fnGetCellData(settings,k,i,'type');}
detectedType=types[j](cache[k],settings);if(!detectedType||detectedType==='html'){break;}}
if(detectedType){col.sType=detectedType;break;}}
if(!col.sType){col.sType='string';}}}}
function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn)
{var i,iLen,j,jLen,k,kLen,def;var columns=oSettings.aoColumns;if(aoColDefs)
{for(i=aoColDefs.length-1;i>=0;i--)
{def=aoColDefs[i];var aTargets=def.targets!==undefined?def.targets:def.aTargets;if(!$.isArray(aTargets))
{aTargets=[aTargets];}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]==='number'&&aTargets[j]>=0)
{while(columns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
fn(aTargets[j],def);}
else if(typeof aTargets[j]==='number'&&aTargets[j]<0)
{fn(columns.length+aTargets[j],def);}
else if(typeof aTargets[j]==='string')
{for(k=0,kLen=columns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||$(columns[k].nTh).hasClass(aTargets[j]))
{fn(k,def);}}}}}}
if(aoCols)
{for(i=0,iLen=aoCols.length;i<iLen;i++)
{fn(i,aoCols[i]);}}}
function _fnAddData(oSettings,aDataIn,nTr,anTds)
{var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow,{src:nTr?'dom':'data'});oData._aData=aDataIn;oSettings.aoData.push(oData);var nTd,sThisType;var columns=oSettings.aoColumns;for(var i=0,iLen=columns.length;i<iLen;i++)
{if(nTr){_fnSetCellData(oSettings,iRow,i,_fnGetCellData(oSettings,iRow,i));}
columns[i].sType=null;}
oSettings.aiDisplayMaster.push(iRow);if(!oSettings.oFeatures.bDeferRender)
{_fnCreateTr(oSettings,iRow,nTr,anTds);}
return iRow;}
function _fnAddTr(settings,trs)
{var row;if(!(trs instanceof $)){trs=$(trs);}
return trs.map(function(i,el){row=_fnGetRowElements(settings,el);return _fnAddData(settings,row.data,el,row.cells);});}
function _fnNodeToDataIndex(oSettings,n)
{return(n._DT_RowIndex!==undefined)?n._DT_RowIndex:null;}
function _fnNodeToColumnIndex(oSettings,iRow,n)
{return $.inArray(n,oSettings.aoData[iRow].anCells);}
function _fnGetCellData(oSettings,iRow,iCol,sSpecific)
{var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;var sData=oCol.fnGetData(oData,sSpecific);if(sData===undefined)
{if(oSettings.iDrawError!=oSettings.iDraw&&oCol.sDefaultContent===null)
{_fnLog(oSettings,0,"Requested unknown parameter "+
(typeof oCol.mData=='function'?'{function}':"'"+oCol.mData+"'")+" for row "+iRow,4);oSettings.iDrawError=oSettings.iDraw;}
return oCol.sDefaultContent;}
if((sData===oData||sData===null)&&oCol.sDefaultContent!==null)
{sData=oCol.sDefaultContent;}
else if(typeof sData==='function')
{return sData();}
if(sData===null&&sSpecific=='display')
{return'';}
return sData;}
function _fnSetCellData(oSettings,iRow,iCol,val)
{var oCol=oSettings.aoColumns[iCol];var oData=oSettings.aoData[iRow]._aData;oCol.fnSetData(oData,val);}
var __reArray=/\[.*?\]$/;var __reFn=/\(\)$/;function _fnSplitObjNotation(str)
{return $.map(str.match(/(\\.|[^\.])+/g),function(s){return s.replace('\\.','.');});}
function _fnGetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{var o={};$.each(mSource,function(key,val){if(val){o[key]=_fnGetObjectDataFn(val);}});return function(data,type,extra){var t=o[type]||o._;return t!==undefined?t(data,type,extra):data;};}
else if(mSource===null)
{return function(data,type){return data;};}
else if(typeof mSource==='function')
{return function(data,type,extra){return mSource(data,type,extra);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var fetchData=function(data,type,src){var arrayNotation,funcNotation,out,innerSrc;if(src!=="")
{var a=_fnSplitObjNotation(src);for(var i=0,iLen=a.length;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');if(a[i]!==""){data=data[a[i]];}
out=[];a.splice(0,i+1);innerSrc=a.join('.');for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=(join==="")?out:out.join(join);break;}
else if(funcNotation)
{a[i]=a[i].replace(__reFn,'');data=data[a[i]]();continue;}
if(data===null||data[a[i]]===undefined)
{return undefined;}
data=data[a[i]];}}
return data;};return function(data,type){return fetchData(data,type,mSource);};}
else
{return function(data,type){return data[mSource];};}}
function _fnSetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{return _fnSetObjectDataFn(mSource._);}
else if(mSource===null)
{return function(data,val){};}
else if(typeof mSource==='function')
{return function(data,val){mSource(data,'set',val);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var setData=function(data,val,src){var a=_fnSplitObjNotation(src),b;var aLast=a[a.length-1];var arrayNotation,funcNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');data[a[i]]=[];b=a.slice();b.splice(0,i+1);innerSrc=b.join('.');for(var j=0,jLen=val.length;j<jLen;j++)
{o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}
return;}
else if(funcNotation)
{a[i]=a[i].replace(__reFn,'');data=data[a[i]](val);}
if(data[a[i]]===null||data[a[i]]===undefined)
{data[a[i]]={};}
data=data[a[i]];}
if(aLast.match(__reFn))
{data=data[aLast.replace(__reFn,'')](val);}
else
{data[aLast.replace(__reArray,'')]=val;}};return function(data,val){return setData(data,val,mSource);};}
else
{return function(data,val){data[mSource]=val;};}}
function _fnGetDataMaster(settings)
{return _pluck(settings.aoData,'_aData');}
function _fnClearTable(settings)
{settings.aoData.length=0;settings.aiDisplayMaster.length=0;settings.aiDisplay.length=0;}
function _fnDeleteIndex(a,iTarget,splice)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1&&splice===undefined)
{a.splice(iTargetIndex,1);}}
function _fnInvalidateRow(settings,rowIdx,src,column)
{var row=settings.aoData[rowIdx];var i,ien;if(src==='dom'||((!src||src==='auto')&&row.src==='dom')){row._aData=_fnGetRowElements(settings,row).data;}
else{var cells=row.anCells;if(cells){for(i=0,ien=cells.length;i<ien;i++){cells[i].innerHTML=_fnGetCellData(settings,rowIdx,i,'display');}}}
row._aSortData=null;row._aFilterData=null;var cols=settings.aoColumns;if(column!==undefined){cols[column].sType=null;}
else{for(i=0,ien=cols.length;i<ien;i++){cols[i].sType=null;}}
_fnRowAttributes(row);}
function _fnGetRowElements(settings,row)
{var
d=[],tds=[],td=row.firstChild,name,col,o,i=0,contents,columns=settings.aoColumns;var attr=function(str,data,td){if(typeof str==='string'){var idx=str.indexOf('@');if(idx!==-1){var src=str.substring(idx+1);o['@'+src]=td.getAttribute(src);}}};var cellProcess=function(cell){col=columns[i];contents=$.trim(cell.innerHTML);if(col&&col._bAttrSrc){o={display:contents};attr(col.mData.sort,o,cell);attr(col.mData.type,o,cell);attr(col.mData.filter,o,cell);d.push(o);}
else{d.push(contents);}
tds.push(cell);i++;};if(td){while(td){name=td.nodeName.toUpperCase();if(name=="TD"||name=="TH"){cellProcess(td);}
td=td.nextSibling;}}
else{tds=row.anCells;for(var j=0,jen=tds.length;j<jen;j++){cellProcess(tds[j]);}}
return{data:d,cells:tds};}
function _fnCreateTr(oSettings,iRow,nTrIn,anTds)
{var
row=oSettings.aoData[iRow],rowData=row._aData,cells=[],nTr,nTd,oCol,i,iLen;if(row.nTr===null)
{nTr=nTrIn||document.createElement('tr');row.nTr=nTr;row.anCells=cells;nTr._DT_RowIndex=iRow;_fnRowAttributes(row);for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oCol=oSettings.aoColumns[i];nTd=nTrIn?anTds[i]:document.createElement(oCol.sCellType);cells.push(nTd);if(!nTrIn||oCol.mRender||oCol.mData!==i)
{nTd.innerHTML=_fnGetCellData(oSettings,iRow,i,'display');}
if(oCol.sClass)
{nTd.className+=' '+oCol.sClass;}
if(oCol.bVisible&&!nTrIn)
{nTr.appendChild(nTd);}
else if(!oCol.bVisible&&nTrIn)
{nTd.parentNode.removeChild(nTd);}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i,'display'),rowData,iRow,i);}}
_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[nTr,rowData,iRow]);}
row.nTr.setAttribute('role','row');}
function _fnRowAttributes(row)
{var tr=row.nTr;var data=row._aData;if(tr){if(data.DT_RowId){tr.id=data.DT_RowId;}
if(data.DT_RowClass){var a=data.DT_RowClass.split(' ');row.__rowc=row.__rowc?_unique(row.__rowc.concat(a)):a;$(tr).removeClass(row.__rowc.join(' ')).addClass(data.DT_RowClass);}
if(data.DT_RowData){$(tr).data(data.DT_RowData);}}}
function _fnBuildHead(oSettings)
{var i,ien,cell,row,column;var thead=oSettings.nTHead;var tfoot=oSettings.nTFoot;var createHeader=$('th, td',thead).length===0;var classes=oSettings.oClasses;var columns=oSettings.aoColumns;if(createHeader){row=$('<tr/>').appendTo(thead);}
for(i=0,ien=columns.length;i<ien;i++){column=columns[i];cell=$(column.nTh).addClass(column.sClass);if(createHeader){cell.appendTo(row);}
if(oSettings.oFeatures.bSort){cell.addClass(column.sSortingClass);if(column.bSortable!==false){cell.attr('tabindex',oSettings.iTabIndex).attr('aria-controls',oSettings.sTableId);_fnSortAttachListener(oSettings,column.nTh,i);}}
if(column.sTitle!=cell.html()){cell.html(column.sTitle);}
_fnRenderer(oSettings,'header')(oSettings,cell,column,classes);}
if(createHeader){_fnDetectHeader(oSettings.aoHeader,thead);}
$(thead).find('>tr').attr('role','row');$(thead).find('>tr>th, >tr>td').addClass(classes.sHeaderTH);$(tfoot).find('>tr>th, >tr>td').addClass(classes.sFooterTH);if(tfoot!==null){var cells=oSettings.aoFooter[0];for(i=0,ien=cells.length;i<ien;i++){column=columns[i];column.nTf=cells[i].cell;if(column.sClass){$(column.nTf).addClass(column.sClass);}}}}
function _fnDrawHead(oSettings,aoSource,bIncludeHidden)
{var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(!aoSource)
{return;}
if(bIncludeHidden===undefined)
{bIncludeHidden=false;}
for(i=0,iLen=aoSource.length;i<iLen;i++)
{aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;for(j=iColumns-1;j>=0;j--)
{if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden)
{aoLocal[i].splice(j,1);}}
aApplied.push([]);}
for(i=0,iLen=aoLocal.length;i<iLen;i++)
{nLocalTr=aoLocal[i].nTr;if(nLocalTr)
{while((n=nLocalTr.firstChild))
{nLocalTr.removeChild(n);}}
for(j=0,jLen=aoLocal[i].length;j<jLen;j++)
{iRowspan=1;iColspan=1;if(aApplied[i][j]===undefined)
{nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell)
{aApplied[i+iRowspan][j]=1;iRowspan++;}
while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell)
{for(k=0;k<iRowspan;k++)
{aApplied[i+k][j+iColspan]=1;}
iColspan++;}
$(aoLocal[i][j].cell).attr('rowspan',iRowspan).attr('colspan',iColspan);}}}}
function _fnDraw(oSettings)
{var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1)
{_fnProcessingDisplay(oSettings,false);return;}
var i,iLen,n;var anRows=[];var iRowCount=0;var asStripeClasses=oSettings.asStripeClasses;var iStripes=asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;var oLang=oSettings.oLanguage;var iInitDisplayStart=oSettings.iInitDisplayStart;var bServerSide=_fnDataSource(oSettings)=='ssp';var aiDisplay=oSettings.aiDisplay;oSettings.bDrawing=true;if(iInitDisplayStart!==undefined&&iInitDisplayStart!==-1)
{oSettings._iDisplayStart=bServerSide?iInitDisplayStart:iInitDisplayStart>=oSettings.fnRecordsDisplay()?0:iInitDisplayStart;oSettings.iInitDisplayStart=-1;}
var iDisplayStart=oSettings._iDisplayStart;var iDisplayEnd=oSettings.fnDisplayEnd();if(oSettings.bDeferLoading)
{oSettings.bDeferLoading=false;oSettings.iDraw++;_fnProcessingDisplay(oSettings,false);}
else if(!bServerSide)
{oSettings.iDraw++;}
else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings))
{return;}
if(aiDisplay.length!==0)
{var iStart=bServerSide?0:iDisplayStart;var iEnd=bServerSide?oSettings.aoData.length:iDisplayEnd;for(var j=iStart;j<iEnd;j++)
{var iDataIndex=aiDisplay[j];var aoData=oSettings.aoData[iDataIndex];if(aoData.nTr===null)
{_fnCreateTr(oSettings,iDataIndex);}
var nRow=aoData.nTr;if(iStripes!==0)
{var sStripe=asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,aoData._aData,iRowCount,j]);anRows.push(nRow);iRowCount++;}}
else
{var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&_fnDataSource(oSettings)=='ajax')
{sZero=oLang.sLoadingRecords;}
else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0)
{sZero=oLang.sEmptyTable;}
anRows[0]=$('<tr/>',{'class':iStripes?asStripeClasses[0]:''}).append($('<td />',{'valign':'top','colSpan':_fnVisbleColumns(oSettings),'class':oSettings.oClasses.sRowEmpty}).html(sZero))[0];}
_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);var body=$(oSettings.nTBody);body.children().detach();body.append($(anRows));_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;}
function _fnReDraw(settings,holdPosition)
{var
features=settings.oFeatures,sort=features.bSort,filter=features.bFilter;if(sort){_fnSort(settings);}
if(filter){_fnFilterComplete(settings,settings.oPreviousSearch);}
else{settings.aiDisplay=settings.aiDisplayMaster.slice();}
if(holdPosition!==true){settings._iDisplayStart=0;}
_fnDraw(settings);}
function _fnAddOptionsHtml(oSettings)
{var classes=oSettings.oClasses;var table=$(oSettings.nTable);var holding=$('<div/>').insertBefore(table);var features=oSettings.oFeatures;var insert=$('<div/>',{id:oSettings.sTableId+'_wrapper','class':classes.sWrapper+(oSettings.nTFoot?'':' '+classes.sNoFooter)});oSettings.nHolding=holding[0];oSettings.nTableWrapper=insert[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;var aDom=oSettings.sDom.split('');var featureNode,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{featureNode=null;cOption=aDom[i];if(cOption=='<')
{nNewNode=$('<div/>')[0];cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr=classes.sJUIHeader;}
else if(sAttr=="F")
{sAttr=classes.sJUIFooter;}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.id=sAttr.substr(1,sAttr.length-1);}
else
{nNewNode.className=sAttr;}
i+=j;}
insert.append(nNewNode);insert=$(nNewNode);}
else if(cOption=='>')
{insert=insert.parent();}
else if(cOption=='l'&&features.bPaginate&&features.bLengthChange)
{featureNode=_fnFeatureHtmlLength(oSettings);}
else if(cOption=='f'&&features.bFilter)
{featureNode=_fnFeatureHtmlFilter(oSettings);}
else if(cOption=='r'&&features.bProcessing)
{featureNode=_fnFeatureHtmlProcessing(oSettings);}
else if(cOption=='t')
{featureNode=_fnFeatureHtmlTable(oSettings);}
else if(cOption=='i'&&features.bInfo)
{featureNode=_fnFeatureHtmlInfo(oSettings);}
else if(cOption=='p'&&features.bPaginate)
{featureNode=_fnFeatureHtmlPaginate(oSettings);}
else if(DataTable.ext.feature.length!==0)
{var aoFeatures=DataTable.ext.feature;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{featureNode=aoFeatures[k].fnInit(oSettings);break;}}}
if(featureNode)
{var aanFeatures=oSettings.aanFeatures;if(!aanFeatures[cOption])
{aanFeatures[cOption]=[];}
aanFeatures[cOption].push(featureNode);insert.append(featureNode);}}
holding.replaceWith(insert);}
function _fnDetectHeader(aLayout,nThead)
{var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function(a,i,j){var k=a[i];while(k[j]){j++;}
return j;};aLayout.splice(0,aLayout.length);for(i=0,iLen=nTrs.length;i<iLen;i++)
{aLayout.push([]);}
for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTr=nTrs[i];iColumn=0;nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH")
{iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=(!iColspan||iColspan===0||iColspan===1)?1:iColspan;iRowspan=(!iRowspan||iRowspan===0||iRowspan===1)?1:iRowspan;iColShifted=fnShiftCol(aLayout,i,iColumn);bUnique=iColspan===1?true:false;for(l=0;l<iColspan;l++)
{for(k=0;k<iRowspan;k++)
{aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}
nCell=nCell.nextSibling;}}}
function _fnGetUniqueThs(oSettings,nHeader,aLayout)
{var aReturn=[];if(!aLayout)
{aLayout=oSettings.aoHeader;if(nHeader)
{aLayout=[];_fnDetectHeader(aLayout,nHeader);}}
for(var i=0,iLen=aLayout.length;i<iLen;i++)
{for(var j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop))
{aReturn[j]=aLayout[i][j].cell;}}}
return aReturn;}
function _fnBuildAjax(oSettings,data,fn)
{_fnCallbackFire(oSettings,'aoServerParams','serverParams',[data]);if(data&&$.isArray(data)){var tmp={};var rbracket=/(.*?)\[\]$/;$.each(data,function(key,val){var match=val.name.match(rbracket);if(match){var name=match[0];if(!tmp[name]){tmp[name]=[];}
tmp[name].push(val.value);}
else{tmp[val.name]=val.value;}});data=tmp;}
var ajaxData;var ajax=oSettings.ajax;var instance=oSettings.oInstance;if($.isPlainObject(ajax)&&ajax.data)
{ajaxData=ajax.data;var newData=$.isFunction(ajaxData)?ajaxData(data):ajaxData;data=$.isFunction(ajaxData)&&newData?newData:$.extend(true,data,newData);delete ajax.data;}
var baseAjax={"data":data,"success":function(json){var error=json.error||json.sError;if(error){oSettings.oApi._fnLog(oSettings,0,error);}
oSettings.json=json;_fnCallbackFire(oSettings,null,'xhr',[oSettings,json]);fn(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function(xhr,error,thrown){var log=oSettings.oApi._fnLog;if(error=="parsererror"){log(oSettings,0,'Invalid JSON response',1);}
else if(xhr.readyState===4){log(oSettings,0,'Ajax error',7);}
_fnProcessingDisplay(oSettings,false);}};oSettings.oAjaxData=data;_fnCallbackFire(oSettings,null,'preXhr',[oSettings,data]);if(oSettings.fnServerData)
{oSettings.fnServerData.call(instance,oSettings.sAjaxSource,$.map(data,function(val,key){return{name:key,value:val};}),fn,oSettings);}
else if(oSettings.sAjaxSource||typeof ajax==='string')
{oSettings.jqXHR=$.ajax($.extend(baseAjax,{url:ajax||oSettings.sAjaxSource}));}
else if($.isFunction(ajax))
{oSettings.jqXHR=ajax.call(instance,data,fn,oSettings);}
else
{oSettings.jqXHR=$.ajax($.extend(baseAjax,ajax));ajax.data=ajaxData;}}
function _fnAjaxUpdate(oSettings)
{if(oSettings.bAjaxDataGet)
{oSettings.iDraw++;_fnProcessingDisplay(oSettings,true);var iColumns=oSettings.aoColumns.length;var aoData=_fnAjaxParameters(oSettings);_fnBuildAjax(oSettings,aoData,function(json){_fnAjaxUpdateDraw(oSettings,json);},oSettings);return false;}
return true;}
function _fnAjaxParameters(settings)
{var
columns=settings.aoColumns,columnCount=columns.length,features=settings.oFeatures,preSearch=settings.oPreviousSearch,preColSearch=settings.aoPreSearchCols,i,data=[],dataProp,column,columnSearch,sort=_fnSortFlatten(settings),displayStart=settings._iDisplayStart,displayLength=features.bPaginate!==false?settings._iDisplayLength:-1;var param=function(name,value){data.push({'name':name,'value':value});};param('sEcho',settings.iDraw);param('iColumns',columnCount);param('sColumns',_pluck(columns,'sName').join(','));param('iDisplayStart',displayStart);param('iDisplayLength',displayLength);var d={draw:settings.iDraw,columns:[],order:[],start:displayStart,length:displayLength,search:{value:preSearch.sSearch,regex:preSearch.bRegex}};for(i=0;i<columnCount;i++){column=columns[i];columnSearch=preColSearch[i];dataProp=typeof column.mData=="function"?'function':column.mData;d.columns.push({data:dataProp,name:column.sName,searchable:column.bSearchable,orderable:column.bSortable,search:{value:columnSearch.sSearch,regex:columnSearch.bRegex}});param("mDataProp_"+i,dataProp);if(features.bFilter){param('sSearch_'+i,columnSearch.sSearch);param('bRegex_'+i,columnSearch.bRegex);param('bSearchable_'+i,column.bSearchable);}
if(features.bSort){param('bSortable_'+i,column.bSortable);}}
if(features.bFilter){param('sSearch',preSearch.sSearch);param('bRegex',preSearch.bRegex);}
if(features.bSort){$.each(sort,function(i,val){d.order.push({column:val.col,dir:val.dir});param('iSortCol_'+i,val.col);param('sSortDir_'+i,val.dir);});param('iSortingCols',sort.length);}
var legacy=DataTable.ext.legacy.ajax;if(legacy===null){return settings.sAjaxSource?data:d;}
return legacy?data:d;}
function _fnAjaxUpdateDraw(settings,json)
{var compat=function(old,modern){return json[old]!==undefined?json[old]:json[modern];};var draw=compat('sEcho','draw');var recordsTotal=compat('iTotalRecords','recordsTotal');var rocordsFiltered=compat('iTotalDisplayRecords','recordsFiltered');if(draw){if(draw*1<settings.iDraw){return;}
settings.iDraw=draw*1;}
_fnClearTable(settings);settings._iRecordsTotal=parseInt(recordsTotal,10);settings._iRecordsDisplay=parseInt(rocordsFiltered,10);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
settings.aiDisplay=settings.aiDisplayMaster.slice();settings.bAjaxDataGet=false;_fnDraw(settings);if(!settings._bInitComplete){_fnInitComplete(settings,json);}
settings.bAjaxDataGet=true;_fnProcessingDisplay(settings,false);}
function _fnAjaxDataSrc(oSettings,json)
{var dataSrc=$.isPlainObject(oSettings.ajax)&&oSettings.ajax.dataSrc!==undefined?oSettings.ajax.dataSrc:oSettings.sAjaxDataProp;if(dataSrc==='data'){return json.aaData||json[dataSrc];}
return dataSrc!==""?_fnGetObjectDataFn(dataSrc)(json):json;}
function _fnFeatureHtmlFilter(settings)
{var classes=settings.oClasses;var tableId=settings.sTableId;var previousSearch=settings.oPreviousSearch;var features=settings.aanFeatures;var input='<input type="search" class="'+classes.sFilterInput+'"/>';var str=settings.oLanguage.sSearch;str=str.match(/_INPUT_/)?str.replace('_INPUT_',input):str+input;var filter=$('<div/>',{'id':!features.f?tableId+'_filter':null,'class':classes.sFilter}).append($('<label/>').append(str));var searchFn=function(){var n=features.f;var val=!this.value?"":this.value;if(val!=previousSearch.sSearch){_fnFilterComplete(settings,{"sSearch":val,"bRegex":previousSearch.bRegex,"bSmart":previousSearch.bSmart,"bCaseInsensitive":previousSearch.bCaseInsensitive});settings._iDisplayStart=0;_fnDraw(settings);}};var jqFilter=$('input',filter).val(previousSearch.sSearch.replace('"','&quot;')).bind('keyup.DT search.DT input.DT paste.DT cut.DT',_fnDataSource(settings)==='ssp'?_fnThrottle(searchFn,400):searchFn).bind('keypress.DT',function(e){if(e.keyCode==13){return false;}}).attr('aria-controls',tableId);$(settings.nTable).on('filter.DT',function(){try{if(jqFilter[0]!==document.activeElement){jqFilter.val(previousSearch.sSearch);}}
catch(e){}});return filter[0];}
function _fnFilterComplete(oSettings,oInput,iForce)
{var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function(oFilter){oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};var fnRegex=function(o){return o.bEscapeRegex!==undefined?!o.bEscapeRegex:o.bRegex;};_fnColumnTypes(oSettings);if(_fnDataSource(oSettings)!='ssp')
{_fnFilter(oSettings,oInput.sSearch,iForce,fnRegex(oInput),oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);for(var i=0;i<aoPrevSearch.length;i++)
{_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,fnRegex(aoPrevSearch[i]),aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}
_fnFilterCustom(oSettings);}
else
{fnSaveFilter(oInput);}
oSettings.bFiltered=true;_fnCallbackFire(oSettings,null,'search',[oSettings]);}
function _fnFilterCustom(settings)
{var filters=DataTable.ext.search;var displayRows=settings.aiDisplay;var row,rowIdx;for(var i=0,iLen=filters.length;i<iLen;i++){for(var j=displayRows.length-1;j>=0;j--){rowIdx=displayRows[j];row=settings.aoData[rowIdx];if(!filters[i](settings,row._aFilterData,rowIdx,row._aData)){displayRows.splice(j,1);}}}}
function _fnFilterColumn(settings,searchStr,colIdx,regex,smart,caseInsensitive)
{if(searchStr===''){return;}
var data;var display=settings.aiDisplay;var rpSearch=_fnFilterCreateSearch(searchStr,regex,smart,caseInsensitive);for(var i=display.length-1;i>=0;i--){data=settings.aoData[display[i]]._aFilterData[colIdx];if(!rpSearch.test(data)){display.splice(i,1);}}}
function _fnFilter(settings,input,force,regex,smart,caseInsensitive)
{var rpSearch=_fnFilterCreateSearch(input,regex,smart,caseInsensitive);var prevSearch=settings.oPreviousSearch.sSearch;var displayMaster=settings.aiDisplayMaster;var display,invalidated,i;if(DataTable.ext.search.length!==0){force=true;}
invalidated=_fnFilterData(settings);if(input.length<=0){settings.aiDisplay=displayMaster.slice();}
else{if(invalidated||force||prevSearch.length>input.length||input.indexOf(prevSearch)!==0||settings.bSorted){settings.aiDisplay=displayMaster.slice();}
display=settings.aiDisplay;for(i=display.length-1;i>=0;i--){if(!rpSearch.test(settings.aoData[display[i]]._sFilterRow)){display.splice(i,1);}}}}
function _fnFilterCreateSearch(search,regex,smart,caseInsensitive)
{search=regex?search:_fnEscapeRegex(search);if(smart){var a=$.map(search.match(/"[^"]+"|[^ ]+/g)||'',function(word){return word.charAt(0)==='"'?word.match(/^"(.*)"$/)[1]:word;});search='^(?=.*?'+a.join(')(?=.*?')+').*$';}
return new RegExp(search,caseInsensitive?'i':'');}
function _fnEscapeRegex(sVal)
{return sVal.replace(_re_escape_regex,'\\$1');}
var __filter_div=$('<div>')[0];var __filter_div_textContent=__filter_div.textContent!==undefined;function _fnFilterData(settings)
{var columns=settings.aoColumns;var column;var i,j,ien,jen,filterData,cellData,row;var fomatters=DataTable.ext.type.search;var wasInvalidated=false;for(i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aFilterData){filterData=[];for(j=0,jen=columns.length;j<jen;j++){column=columns[j];if(column.bSearchable){cellData=_fnGetCellData(settings,i,j,'filter');cellData=fomatters[column.sType]?fomatters[column.sType](cellData):cellData!==null?cellData:'';}
else{cellData='';}
if(cellData.indexOf&&cellData.indexOf('&')!==-1){__filter_div.innerHTML=cellData;cellData=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText;}
if(cellData.replace){cellData=cellData.replace(/[\r\n]/g,'');}
filterData.push(cellData);}
row._aFilterData=filterData;row._sFilterRow=filterData.join('  ');wasInvalidated=true;}}
return wasInvalidated;}
function _fnFeatureHtmlInfo(settings)
{var
tid=settings.sTableId,nodes=settings.aanFeatures.i,n=$('<div/>',{'class':settings.oClasses.sInfo,'id':!nodes?tid+'_info':null});if(!nodes){settings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});n.attr('role','status').attr('aria-live','polite');$(settings.nTable).attr('aria-describedby',tid+'_info');}
return n[0];}
function _fnUpdateInfo(settings)
{var nodes=settings.aanFeatures.i;if(nodes.length===0){return;}
var
lang=settings.oLanguage,start=settings._iDisplayStart+1,end=settings.fnDisplayEnd(),max=settings.fnRecordsTotal(),total=settings.fnRecordsDisplay(),out=total?lang.sInfo:lang.sInfoEmpty;if(total!==max){out+=' '+lang.sInfoFiltered;}
out+=lang.sInfoPostFix;out=_fnInfoMacros(settings,out);var callback=lang.fnInfoCallback;if(callback!==null){out=callback.call(settings.oInstance,settings,start,end,max,total,out);}
$(nodes).html(out);}
function _fnInfoMacros(settings,str)
{var
formatter=settings.fnFormatNumber,start=settings._iDisplayStart+1,len=settings._iDisplayLength,vis=settings.fnRecordsDisplay(),all=len===-1;return str.replace(/_START_/g,formatter.call(settings,start)).replace(/_END_/g,formatter.call(settings,settings.fnDisplayEnd())).replace(/_MAX_/g,formatter.call(settings,settings.fnRecordsTotal())).replace(/_TOTAL_/g,formatter.call(settings,vis)).replace(/_PAGE_/g,formatter.call(settings,all?1:Math.ceil(start/len))).replace(/_PAGES_/g,formatter.call(settings,all?1:Math.ceil(vis/len)));}
function _fnInitialise(settings)
{var i,iLen,iAjaxStart=settings.iInitDisplayStart;var columns=settings.aoColumns,column;var features=settings.oFeatures;if(!settings.bInitialised){setTimeout(function(){_fnInitialise(settings);},200);return;}
_fnAddOptionsHtml(settings);_fnBuildHead(settings);_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnProcessingDisplay(settings,true);if(features.bAutoWidth){_fnCalculateColumnWidths(settings);}
for(i=0,iLen=columns.length;i<iLen;i++){column=columns[i];if(column.sWidth){column.nTh.style.width=_fnStringToCss(column.sWidth);}}
_fnReDraw(settings);var dataSrc=_fnDataSource(settings);if(dataSrc!='ssp'){if(dataSrc=='ajax'){_fnBuildAjax(settings,[],function(json){var aData=_fnAjaxDataSrc(settings,json);for(i=0;i<aData.length;i++){_fnAddData(settings,aData[i]);}
settings.iInitDisplayStart=iAjaxStart;_fnReDraw(settings);_fnProcessingDisplay(settings,false);_fnInitComplete(settings,json);},settings);}
else{_fnProcessingDisplay(settings,false);_fnInitComplete(settings);}}}
function _fnInitComplete(settings,json)
{settings._bInitComplete=true;if(json){_fnAdjustColumnSizing(settings);}
_fnCallbackFire(settings,'aoInitComplete','init',[settings,json]);}
function _fnLengthChange(settings,val)
{var len=parseInt(val,10);settings._iDisplayLength=len;_fnLengthOverflow(settings);_fnCallbackFire(settings,null,'length',[settings,len]);}
function _fnFeatureHtmlLength(settings)
{var
classes=settings.oClasses,tableId=settings.sTableId,menu=settings.aLengthMenu,d2=$.isArray(menu[0]),lengths=d2?menu[0]:menu,language=d2?menu[1]:menu;var select=$('<select/>',{'name':tableId+'_length','aria-controls':tableId,'class':classes.sLengthSelect});for(var i=0,ien=lengths.length;i<ien;i++){select[0][i]=new Option(language[i],lengths[i]);}
var div=$('<div><label/></div>').addClass(classes.sLength);if(!settings.aanFeatures.l){div[0].id=tableId+'_length';}
var a=settings.oLanguage.sLengthMenu.split(/(_MENU_)/);div.children().append(a.length>1?[a[0],select,a[2]]:a[0]);$('select',div).val(settings._iDisplayLength).bind('change.DT',function(e){_fnLengthChange(settings,$(this).val());_fnDraw(settings);});$(settings.nTable).bind('length.dt.DT',function(e,s,len){$('select',div).val(len);});return div[0];}
function _fnFeatureHtmlPaginate(settings)
{var
type=settings.sPaginationType,plugin=DataTable.ext.pager[type],modern=typeof plugin==='function',redraw=function(settings){_fnDraw(settings);},node=$('<div/>').addClass(settings.oClasses.sPaging+type)[0],features=settings.aanFeatures;if(!modern){plugin.fnInit(settings,node,redraw);}
if(!features.p)
{node.id=settings.sTableId+'_paginate';settings.aoDrawCallback.push({"fn":function(settings){if(modern){var
start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1,page=all?0:Math.ceil(start/len),pages=all?1:Math.ceil(visRecords/len),buttons=plugin(page,pages),i,ien;for(i=0,ien=features.p.length;i<ien;i++){_fnRenderer(settings,'pageButton')(settings,features.p[i],i,buttons,page,pages);}}
else{plugin.fnUpdate(settings,redraw);}},"sName":"pagination"});}
return node;}
function _fnPageChange(settings,action,redraw)
{var
start=settings._iDisplayStart,len=settings._iDisplayLength,records=settings.fnRecordsDisplay();if(records===0||len===-1)
{start=0;}
else if(typeof action==="number")
{start=action*len;if(start>records)
{start=0;}}
else if(action=="first")
{start=0;}
else if(action=="previous")
{start=len>=0?start-len:0;if(start<0)
{start=0;}}
else if(action=="next")
{if(start+len<records)
{start+=len;}}
else if(action=="last")
{start=Math.floor((records-1)/len)*len;}
else
{_fnLog(settings,0,"Unknown paging action: "+action,5);}
var changed=settings._iDisplayStart!==start;settings._iDisplayStart=start;if(changed){_fnCallbackFire(settings,null,'page',[settings]);if(redraw){_fnDraw(settings);}}
return changed;}
function _fnFeatureHtmlProcessing(settings)
{return $('<div/>',{'id':!settings.aanFeatures.r?settings.sTableId+'_processing':null,'class':settings.oClasses.sProcessing}).html(settings.oLanguage.sProcessing).insertBefore(settings.nTable)[0];}
function _fnProcessingDisplay(settings,show)
{if(settings.oFeatures.bProcessing){$(settings.aanFeatures.r).css('display',show?'block':'none');}
_fnCallbackFire(settings,null,'processing',[settings,show]);}
function _fnFeatureHtmlTable(settings)
{var table=$(settings.nTable);table.attr('role','grid');var scroll=settings.oScroll;if(scroll.sX===''&&scroll.sY===''){return settings.nTable;}
var scrollX=scroll.sX;var scrollY=scroll.sY;var classes=settings.oClasses;var caption=table.children('caption');var captionSide=caption.length?caption[0]._captionSide:null;var headerClone=$(table[0].cloneNode(false));var footerClone=$(table[0].cloneNode(false));var footer=table.children('tfoot');var _div='<div/>';var size=function(s){return!s?null:_fnStringToCss(s);};if(scroll.sX&&table.attr('width')==='100%'){table.removeAttr('width');}
if(!footer.length){footer=null;}
var scroller=$(_div,{'class':classes.sScrollWrapper}).append($(_div,{'class':classes.sScrollHead}).css({overflow:'hidden',position:'relative',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollHeadInner}).css({'box-sizing':'content-box',width:scroll.sXInner||'100%'}).append(headerClone.removeAttr('id').css('margin-left',0).append(table.children('thead')))).append(captionSide==='top'?caption:null)).append($(_div,{'class':classes.sScrollBody}).css({overflow:'auto',height:size(scrollY),width:size(scrollX)}).append(table));if(footer){scroller.append($(_div,{'class':classes.sScrollFoot}).css({overflow:'hidden',border:0,width:scrollX?size(scrollX):'100%'}).append($(_div,{'class':classes.sScrollFootInner}).append(footerClone.removeAttr('id').css('margin-left',0).append(table.children('tfoot')))).append(captionSide==='bottom'?caption:null));}
var children=scroller.children();var scrollHead=children[0];var scrollBody=children[1];var scrollFoot=footer?children[2]:null;if(scrollX){$(scrollBody).scroll(function(e){var scrollLeft=this.scrollLeft;scrollHead.scrollLeft=scrollLeft;if(footer){scrollFoot.scrollLeft=scrollLeft;}});}
settings.nScrollHead=scrollHead;settings.nScrollBody=scrollBody;settings.nScrollFoot=scrollFoot;settings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});return scroller[0];}
function _fnScrollDraw(settings)
{var
scroll=settings.oScroll,scrollX=scroll.sX,scrollXInner=scroll.sXInner,scrollY=scroll.sY,barWidth=scroll.iBarWidth,divHeader=$(settings.nScrollHead),divHeaderStyle=divHeader[0].style,divHeaderInner=divHeader.children('div'),divHeaderInnerStyle=divHeaderInner[0].style,divHeaderTable=divHeaderInner.children('table'),divBodyEl=settings.nScrollBody,divBody=$(divBodyEl),divBodyStyle=divBodyEl.style,divFooter=$(settings.nScrollFoot),divFooterInner=divFooter.children('div'),divFooterTable=divFooterInner.children('table'),header=$(settings.nTHead),table=$(settings.nTable),tableEl=table[0],tableStyle=tableEl.style,footer=settings.nTFoot?$(settings.nTFoot):null,browser=settings.oBrowser,ie67=browser.bScrollOversize,headerTrgEls,footerTrgEls,headerSrcEls,footerSrcEls,headerCopy,footerCopy,headerWidths=[],footerWidths=[],headerContent=[],idx,correction,sanityWidth,zeroOut=function(nSizer){var style=nSizer.style;style.paddingTop="0";style.paddingBottom="0";style.borderTopWidth="0";style.borderBottomWidth="0";style.height=0;};table.children('thead, tfoot').remove();headerCopy=header.clone().prependTo(table);headerTrgEls=header.find('tr');headerSrcEls=headerCopy.find('tr');headerCopy.find('th, td').removeAttr('tabindex');if(footer){footerCopy=footer.clone().prependTo(table);footerTrgEls=footer.find('tr');footerSrcEls=footerCopy.find('tr');}
if(!scrollX)
{divBodyStyle.width='100%';divHeader[0].style.width='100%';}
$.each(_fnGetUniqueThs(settings,headerCopy),function(i,el){idx=_fnVisibleToColumnIndex(settings,i);el.style.width=settings.aoColumns[idx].sWidth;});if(footer){_fnApplyToChildren(function(n){n.style.width="";},footerSrcEls);}
if(scroll.bCollapse&&scrollY!==""){divBodyStyle.height=(divBody[0].offsetHeight+header[0].offsetHeight)+"px";}
sanityWidth=table.outerWidth();if(scrollX===""){tableStyle.width="100%";if(ie67&&(table.find('tbody').height()>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(table.outerWidth()-barWidth);}}
else
{if(scrollXInner!==""){tableStyle.width=_fnStringToCss(scrollXInner);}
else if(sanityWidth==divBody.width()&&divBody.height()<table.height()){tableStyle.width=_fnStringToCss(sanityWidth-barWidth);if(table.outerWidth()>sanityWidth-barWidth){tableStyle.width=_fnStringToCss(sanityWidth);}}
else{tableStyle.width=_fnStringToCss(sanityWidth);}}
sanityWidth=table.outerWidth();_fnApplyToChildren(zeroOut,headerSrcEls);_fnApplyToChildren(function(nSizer){headerContent.push(nSizer.innerHTML);headerWidths.push(_fnStringToCss($(nSizer).css('width')));},headerSrcEls);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=headerWidths[i];},headerTrgEls);$(headerSrcEls).height(0);if(footer)
{_fnApplyToChildren(zeroOut,footerSrcEls);_fnApplyToChildren(function(nSizer){footerWidths.push(_fnStringToCss($(nSizer).css('width')));},footerSrcEls);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=footerWidths[i];},footerTrgEls);$(footerSrcEls).height(0);}
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';nSizer.style.width=headerWidths[i];},headerSrcEls);if(footer)
{_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML="";nSizer.style.width=footerWidths[i];},footerSrcEls);}
if(table.outerWidth()<sanityWidth)
{correction=((divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll"))?sanityWidth+barWidth:sanityWidth;if(ie67&&(divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(correction-barWidth);}
if(scrollX===""||scrollXInner!==""){_fnLog(settings,1,'Possible column misalignment',6);}}
else
{correction='100%';}
divBodyStyle.width=_fnStringToCss(correction);divHeaderStyle.width=_fnStringToCss(correction);if(footer){settings.nScrollFoot.style.width=_fnStringToCss(correction);}
if(!scrollY){if(ie67){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+barWidth);}}
if(scrollY&&scroll.bCollapse){divBodyStyle.height=_fnStringToCss(scrollY);var iExtra=(scrollX&&tableEl.offsetWidth>divBodyEl.offsetWidth)?barWidth:0;if(tableEl.offsetHeight<divBodyEl.offsetHeight){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+iExtra);}}
var iOuterWidth=table.outerWidth();divHeaderTable[0].style.width=_fnStringToCss(iOuterWidth);divHeaderInnerStyle.width=_fnStringToCss(iOuterWidth);var bScrolling=table.height()>divBodyEl.clientHeight||divBody.css('overflow-y')=="scroll";var padding='padding'+(browser.bScrollbarLeft?'Left':'Right');divHeaderInnerStyle[padding]=bScrolling?barWidth+"px":"0px";if(footer){divFooterTable[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style[padding]=bScrolling?barWidth+"px":"0px";}
divBody.scroll();if(settings.bSorted||settings.bFiltered){divBodyEl.scrollTop=0;}}
function _fnApplyToChildren(fn,an1,an2)
{var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen){nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1){if(nNode1.nodeType===1){if(an2){fn(nNode1,nNode2,index);}
else{fn(nNode1,index);}
index++;}
nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}
i++;}}
var __re_html_remove=/<.*?>/g;function _fnCalculateColumnWidths(oSettings)
{var
table=oSettings.nTable,columns=oSettings.aoColumns,scroll=oSettings.oScroll,scrollY=scroll.sY,scrollX=scroll.sX,scrollXInner=scroll.sXInner,columnCount=columns.length,visibleColumns=_fnGetColumns(oSettings,'bVisible'),headerCells=$('th',oSettings.nTHead),tableWidthAttr=table.getAttribute('width'),tableContainer=table.parentNode,userInputs=false,i,column,columnIdx,width,outerWidth;for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];if(column.sWidth!==null){column.sWidth=_fnConvertToWidth(column.sWidthOrig,tableContainer);userInputs=true;}}
if(!userInputs&&!scrollX&&!scrollY&&columnCount==_fnVisbleColumns(oSettings)&&columnCount==headerCells.length){for(i=0;i<columnCount;i++){columns[i].sWidth=_fnStringToCss(headerCells.eq(i).width());}}
else
{var tmpTable=$(table.cloneNode(false)).css('visibility','hidden').removeAttr('id').append($(oSettings.nTHead).clone(false)).append($(oSettings.nTFoot).clone(false)).append($('<tbody><tr/></tbody>'));tmpTable.find('tfoot th, tfoot td').css('width','');var tr=tmpTable.find('tbody tr');headerCells=_fnGetUniqueThs(oSettings,tmpTable.find('thead')[0]);for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];headerCells[i].style.width=column.sWidthOrig!==null&&column.sWidthOrig!==''?_fnStringToCss(column.sWidthOrig):'';}
if(oSettings.aoData.length){for(i=0;i<visibleColumns.length;i++){columnIdx=visibleColumns[i];column=columns[columnIdx];$(_fnGetWidestNode(oSettings,columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);}}
tmpTable.appendTo(tableContainer);if(scrollX&&scrollXInner){tmpTable.width(scrollXInner);}
else if(scrollX){tmpTable.css('width','auto');if(tmpTable.width()<tableContainer.offsetWidth){tmpTable.width(tableContainer.offsetWidth);}}
else if(scrollY){tmpTable.width(tableContainer.offsetWidth);}
else if(tableWidthAttr){tmpTable.width(tableWidthAttr);}
_fnScrollingWidthAdjust(oSettings,tmpTable[0]);if(scrollX)
{var total=0;for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];outerWidth=$(headerCells[i]).outerWidth();total+=column.sWidthOrig===null?outerWidth:parseInt(column.sWidth,10)+outerWidth-$(headerCells[i]).width();}
tmpTable.width(_fnStringToCss(total));table.style.width=_fnStringToCss(total);}
for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];width=$(headerCells[i]).width();if(width){column.sWidth=_fnStringToCss(width);}}
table.style.width=_fnStringToCss(tmpTable.css('width'));tmpTable.remove();}
if(tableWidthAttr){table.style.width=_fnStringToCss(tableWidthAttr);}
if((tableWidthAttr||scrollX)&&!oSettings._reszEvt){$(window).bind('resize.DT-'+oSettings.sInstance,_fnThrottle(function(){_fnAdjustColumnSizing(oSettings);}));oSettings._reszEvt=true;}}
function _fnThrottle(fn,freq){var
frequency=freq||200,last,timer;return function(){var
that=this,now=+new Date(),args=arguments;if(last&&now<last+frequency){clearTimeout(timer);timer=setTimeout(function(){last=undefined;fn.apply(that,args);},frequency);}
else if(last){last=now;fn.apply(that,args);}
else{last=now;}};}
function _fnConvertToWidth(width,parent)
{if(!width){return 0;}
var n=$('<div/>').css('width',_fnStringToCss(width)).appendTo(parent||document.body);var val=n[0].offsetWidth;n.remove();return val;}
function _fnScrollingWidthAdjust(settings,n)
{var scroll=settings.oScroll;if(scroll.sX||scroll.sY){var correction=!scroll.sX?scroll.iBarWidth:0;n.style.width=_fnStringToCss($(n).outerWidth()-correction);}}
function _fnGetWidestNode(settings,colIdx)
{var idx=_fnGetMaxLenString(settings,colIdx);if(idx<0){return null;}
var data=settings.aoData[idx];return!data.nTr?$('<td/>').html(_fnGetCellData(settings,idx,colIdx,'display'))[0]:data.anCells[colIdx];}
function _fnGetMaxLenString(settings,colIdx)
{var s,max=-1,maxIdx=-1;for(var i=0,ien=settings.aoData.length;i<ien;i++){s=_fnGetCellData(settings,i,colIdx,'display')+'';s=s.replace(__re_html_remove,'');if(s.length>max){max=s.length;maxIdx=i;}}
return maxIdx;}
function _fnStringToCss(s)
{if(s===null){return'0px';}
if(typeof s=='number'){return s<0?'0px':s+'px';}
return s.match(/\d$/)?s+'px':s;}
function _fnScrollBarWidth()
{if(!DataTable.__scrollbarWidth){var inner=$('<p/>').css({width:'100%',height:200,padding:0})[0];var outer=$('<div/>').css({position:'absolute',top:0,left:0,width:200,height:150,padding:0,overflow:'hidden',visibility:'hidden'}).append(inner).appendTo('body');var w1=inner.offsetWidth;outer.css('overflow','scroll');var w2=inner.offsetWidth;if(w1===w2){w2=outer[0].clientWidth;}
outer.remove();DataTable.__scrollbarWidth=w1-w2;}
return DataTable.__scrollbarWidth;}
function _fnSortFlatten(settings)
{var
i,iLen,k,kLen,aSort=[],aiOrig=[],aoColumns=settings.aoColumns,aDataSort,iCol,sType,srcCol,fixed=settings.aaSortingFixed,fixedObj=$.isPlainObject(fixed),nestedSort=[],add=function(a){if(a.length&&!$.isArray(a[0])){nestedSort.push(a);}
else{nestedSort.push.apply(nestedSort,a);}};if($.isArray(fixed)){add(fixed);}
if(fixedObj&&fixed.pre){add(fixed.pre);}
add(settings.aaSorting);if(fixedObj&&fixed.post){add(fixed.post);}
for(i=0;i<nestedSort.length;i++)
{srcCol=nestedSort[i][0];aDataSort=aoColumns[srcCol].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++)
{iCol=aDataSort[k];sType=aoColumns[iCol].sType||'string';aSort.push({src:srcCol,col:iCol,dir:nestedSort[i][1],index:nestedSort[i][2],type:sType,formatter:DataTable.ext.type.order[sType+"-pre"]});}}
return aSort;}
function _fnSort(oSettings)
{var
i,ien,iLen,j,jLen,k,kLen,sDataType,nTh,aiOrig=[],oExtSort=DataTable.ext.type.order,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,aDataSort,data,iCol,sType,oSort,formatters=0,sortCol,displayMaster=oSettings.aiDisplayMaster,aSort;_fnColumnTypes(oSettings);aSort=_fnSortFlatten(oSettings);for(i=0,ien=aSort.length;i<ien;i++){sortCol=aSort[i];if(sortCol.formatter){formatters++;}
_fnSortData(oSettings,sortCol.col);}
if(_fnDataSource(oSettings)!='ssp'&&aSort.length!==0)
{for(i=0,iLen=displayMaster.length;i<iLen;i++){aiOrig[displayMaster[i]]=i;}
if(formatters===aSort.length){displayMaster.sort(function(a,b){var
x,y,k,test,sort,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];test=x<y?-1:x>y?1:0;if(test!==0){return sort.dir==='asc'?test:-test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}
else{displayMaster.sort(function(a,b){var
x,y,k,l,test,sort,fn,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];fn=oExtSort[sort.type+"-"+sort.dir]||oExtSort["string-"+sort.dir];test=fn(x,y);if(test!==0){return test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}}
oSettings.bSorted=true;}
function _fnSortAria(settings)
{var label;var nextSort;var columns=settings.aoColumns;var aSort=_fnSortFlatten(settings);var oAria=settings.oLanguage.oAria;for(var i=0,iLen=columns.length;i<iLen;i++)
{var col=columns[i];var asSorting=col.asSorting;var sTitle=col.sTitle.replace(/<.*?>/g,"");var th=col.nTh;th.removeAttribute('aria-sort');if(col.bSortable){if(aSort.length>0&&aSort[0].col==i){th.setAttribute('aria-sort',aSort[0].dir=="asc"?"ascending":"descending");nextSort=asSorting[aSort[0].index+1]||asSorting[0];}
else{nextSort=asSorting[0];}
label=sTitle+(nextSort==="asc"?oAria.sSortAscending:oAria.sSortDescending);}
else{label=sTitle;}
th.setAttribute('aria-label',label);}}
function _fnSortListener(settings,colIdx,append,callback)
{var col=settings.aoColumns[colIdx];var sorting=settings.aaSorting;var asSorting=col.asSorting;var nextSortIdx;var next=function(a){var idx=a._idx;if(idx===undefined){idx=$.inArray(a[1],asSorting);}
return idx+1>=asSorting.length?0:idx+1;};if(append&&settings.oFeatures.bSortMulti){var sortIdx=$.inArray(colIdx,_pluck(sorting,'0'));if(sortIdx!==-1){nextSortIdx=next(sorting[sortIdx]);sorting[sortIdx][1]=asSorting[nextSortIdx];sorting[sortIdx]._idx=nextSortIdx;}
else{sorting.push([colIdx,asSorting[0],0]);sorting[sorting.length-1]._idx=0;}}
else if(sorting.length&&sorting[0][0]==colIdx){nextSortIdx=next(sorting[0]);sorting.length=1;sorting[0][1]=asSorting[nextSortIdx];sorting[0]._idx=nextSortIdx;}
else{sorting.length=0;sorting.push([colIdx,asSorting[0]]);sorting[0]._idx=0;}
_fnReDraw(settings);if(typeof callback=='function'){callback(settings);}}
function _fnSortAttachListener(settings,attachTo,colIdx,callback)
{var col=settings.aoColumns[colIdx];_fnBindAction(attachTo,{},function(e){if(col.bSortable===false){return;}
if(settings.oFeatures.bProcessing){_fnProcessingDisplay(settings,true);setTimeout(function(){_fnSortListener(settings,colIdx,e.shiftKey,callback);if(_fnDataSource(settings)!=='ssp'){_fnProcessingDisplay(settings,false);}},0);}
else{_fnSortListener(settings,colIdx,e.shiftKey,callback);}});}
function _fnSortingClasses(settings)
{var oldSort=settings.aLastSort;var sortClass=settings.oClasses.sSortColumn;var sort=_fnSortFlatten(settings);var features=settings.oFeatures;var i,ien,colIdx;if(features.bSort&&features.bSortClasses){for(i=0,ien=oldSort.length;i<ien;i++){colIdx=oldSort[i].src;$(_pluck(settings.aoData,'anCells',colIdx)).removeClass(sortClass+(i<2?i+1:3));}
for(i=0,ien=sort.length;i<ien;i++){colIdx=sort[i].src;$(_pluck(settings.aoData,'anCells',colIdx)).addClass(sortClass+(i<2?i+1:3));}}
settings.aLastSort=sort;}
function _fnSortData(settings,idx)
{var column=settings.aoColumns[idx];var customSort=DataTable.ext.order[column.sSortDataType];var customData;if(customSort){customData=customSort.call(settings.oInstance,settings,idx,_fnColumnIndexToVisible(settings,idx));}
var row,cellData;var formatter=DataTable.ext.type.order[column.sType+"-pre"];for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aSortData){row._aSortData=[];}
if(!row._aSortData[idx]||customSort){cellData=customSort?customData[i]:_fnGetCellData(settings,i,idx,'sort');row._aSortData[idx]=formatter?formatter(cellData):cellData;}}}
function _fnSaveState(oSettings)
{if(!oSettings.oFeatures.bStateSave||oSettings.bDestroying)
{return;}
var i,iLen;var oState={"iCreate":+new Date(),"iStart":oSettings._iDisplayStart,"iLength":oSettings._iDisplayLength,"aaSorting":$.extend(true,[],oSettings.aaSorting),"oSearch":$.extend(true,{},oSettings.oPreviousSearch),"aoSearchCols":$.extend(true,[],oSettings.aoPreSearchCols),"abVisCols":_pluck(oSettings.aoColumns,'bVisible')};_fnCallbackFire(oSettings,"aoStateSaveParams",'stateSaveParams',[oSettings,oState]);oSettings.fnStateSaveCallback.call(oSettings.oInstance,oSettings,oState);}
function _fnLoadState(oSettings,oInit)
{var i,ien;var columns=oSettings.aoColumns;if(!oSettings.oFeatures.bStateSave){return;}
var oData=oSettings.fnStateLoadCallback.call(oSettings.oInstance,oSettings);if(!oData){return;}
var abStateLoad=_fnCallbackFire(oSettings,'aoStateLoadParams','stateLoadParams',[oSettings,oData]);if($.inArray(false,abStateLoad)!==-1){return;}
var duration=oSettings.iStateDuration;if(duration>0&&oData.iCreate<+new Date()-(duration*1000)){return;}
if(columns.length!==oData.aoSearchCols.length){return;}
oSettings.oLoadedState=$.extend(true,{},oData);oSettings._iDisplayStart=oData.iStart;oSettings.iInitDisplayStart=oData.iStart;oSettings._iDisplayLength=oData.iLength;oSettings.aaSorting=$.map(oData.aaSorting,function(col,i){return col[0]>=columns.length?[0,col[1]]:col;});$.extend(oSettings.oPreviousSearch,oData.oSearch);$.extend(true,oSettings.aoPreSearchCols,oData.aoSearchCols);var visColumns=oData.abVisCols;for(i=0,ien=visColumns.length;i<ien;i++){columns[i].bVisible=visColumns[i];}
_fnCallbackFire(oSettings,'aoStateLoaded','stateLoaded',[oSettings,oData]);}
function _fnSettingsFromNode(table)
{var settings=DataTable.settings;var idx=$.inArray(table,_pluck(settings,'nTable'));return idx!==-1?settings[idx]:null;}
function _fnLog(settings,level,msg,tn)
{msg='DataTables warning: '+
(settings!==null?'table id='+settings.sTableId+' - ':'')+msg;if(tn){msg+='. For more information about this error, please see '+'http://datatables.net/tn/'+tn;}
if(!level){var ext=DataTable.ext;var type=ext.sErrMode||ext.errMode;if(type=='alert'){alert(msg);}
else{throw new Error(msg);}}
else if(window.console&&console.log){console.log(msg);}}
function _fnMap(ret,src,name,mappedName)
{if($.isArray(name)){$.each(name,function(i,val){if($.isArray(val)){_fnMap(ret,src,val[0],val[1]);}
else{_fnMap(ret,src,val);}});return;}
if(mappedName===undefined){mappedName=name;}
if(src[name]!==undefined){ret[mappedName]=src[name];}}
function _fnExtend(out,extender,breakRefs)
{var val;for(var prop in extender){if(extender.hasOwnProperty(prop)){val=extender[prop];if($.isPlainObject(val)){if(!$.isPlainObject(out[prop])){out[prop]={};}
$.extend(true,out[prop],val);}
else if(breakRefs&&prop!=='data'&&prop!=='aaData'&&$.isArray(val)){out[prop]=val.slice();}
else{out[prop]=val;}}}
return out;}
function _fnBindAction(n,oData,fn)
{$(n).bind('click.DT',oData,function(e){n.blur();fn(e);}).bind('keypress.DT',oData,function(e){if(e.which===13){e.preventDefault();fn(e);}}).bind('selectstart.DT',function(){return false;});}
function _fnCallbackReg(oSettings,sStore,fn,sName)
{if(fn)
{oSettings[sStore].push({"fn":fn,"sName":sName});}}
function _fnCallbackFire(settings,callbackArr,event,args)
{var ret=[];if(callbackArr){ret=$.map(settings[callbackArr].slice().reverse(),function(val,i){return val.fn.apply(settings.oInstance,args);});}
if(event!==null){$(settings.nTable).trigger(event+'.dt',args);}
return ret;}
function _fnLengthOverflow(settings)
{var
start=settings._iDisplayStart,end=settings.fnDisplayEnd(),len=settings._iDisplayLength;if(end===settings.fnRecordsDisplay())
{start=end-len;}
if(len===-1||start<0)
{start=0;}
settings._iDisplayStart=start;}
function _fnRenderer(settings,type)
{var renderer=settings.renderer;var host=DataTable.ext.renderer[type];if($.isPlainObject(renderer)&&renderer[type]){return host[renderer[type]]||host._;}
else if(typeof renderer==='string'){return host[renderer]||host._;}
return host._;}
function _fnDataSource(settings)
{if(settings.oFeatures.bServerSide){return'ssp';}
else if(settings.ajax||settings.sAjaxSource){return'ajax';}
return'dom';}
DataTable=function(options)
{this.$=function(sSelector,oOpts)
{return this.api(true).$(sSelector,oOpts);};this._=function(sSelector,oOpts)
{return this.api(true).rows(sSelector,oOpts).data();};this.api=function(traditional)
{return traditional?new _Api(_fnSettingsFromNode(this[_ext.iApiIndex])):new _Api(this);};this.fnAddData=function(data,redraw)
{var api=this.api(true);var rows=$.isArray(data)&&($.isArray(data[0])||$.isPlainObject(data[0]))?api.rows.add(data):api.row.add(data);if(redraw===undefined||redraw){api.draw();}
return rows.flatten().toArray();};this.fnAdjustColumnSizing=function(bRedraw)
{var api=this.api(true).columns.adjust();var settings=api.settings()[0];var scroll=settings.oScroll;if(bRedraw===undefined||bRedraw){api.draw(false);}
else if(scroll.sX!==""||scroll.sY!==""){_fnScrollDraw(settings);}};this.fnClearTable=function(bRedraw)
{var api=this.api(true).clear();if(bRedraw===undefined||bRedraw){api.draw();}};this.fnClose=function(nTr)
{this.api(true).row(nTr).child.hide();};this.fnDeleteRow=function(target,callback,redraw)
{var api=this.api(true);var rows=api.rows(target);var settings=rows.settings()[0];var data=settings.aoData[rows[0][0]];rows.remove();if(callback){callback.call(this,settings,data);}
if(redraw===undefined||redraw){api.draw();}
return data;};this.fnDestroy=function(remove)
{this.api(true).destroy(remove);};this.fnDraw=function(complete)
{this.api(true).draw(!complete);};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive)
{var api=this.api(true);if(iColumn===null||iColumn===undefined){api.search(sInput,bRegex,bSmart,bCaseInsensitive);}
else{api.column(iColumn).search(sInput,bRegex,bSmart,bCaseInsensitive);}
api.draw();};this.fnGetData=function(src,col)
{var api=this.api(true);if(src!==undefined){var type=src.nodeName?src.nodeName.toLowerCase():'';return col!==undefined||type=='td'||type=='th'?api.cell(src,col).data():api.row(src).data()||null;}
return api.data().toArray();};this.fnGetNodes=function(iRow)
{var api=this.api(true);return iRow!==undefined?api.row(iRow).node():api.rows().nodes().flatten().toArray();};this.fnGetPosition=function(node)
{var api=this.api(true);var nodeName=node.nodeName.toUpperCase();if(nodeName=='TR'){return api.row(node).index();}
else if(nodeName=='TD'||nodeName=='TH'){var cell=api.cell(node).index();return[cell.row,cell.columnVisible,cell.column];}
return null;};this.fnIsOpen=function(nTr)
{return this.api(true).row(nTr).child.isShown();};this.fnOpen=function(nTr,mHtml,sClass)
{return this.api(true).row(nTr).child(mHtml,sClass).show().child()[0];};this.fnPageChange=function(mAction,bRedraw)
{var api=this.api(true).page(mAction);if(bRedraw===undefined||bRedraw){api.draw(false);}};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var api=this.api(true).column(iCol).visible(bShow);if(bRedraw===undefined||bRedraw){api.columns.adjust().draw();}};this.fnSettings=function()
{return _fnSettingsFromNode(this[_ext.iApiIndex]);};this.fnSort=function(aaSort)
{this.api(true).order(aaSort).draw();};this.fnSortListener=function(nNode,iColumn,fnCallback)
{this.api(true).order.listener(nNode,iColumn,fnCallback);};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var api=this.api(true);if(iColumn===undefined||iColumn===null){api.row(mRow).data(mData);}
else{api.cell(mRow,iColumn).data(mData);}
if(bAction===undefined||bAction){api.columns.adjust();}
if(bRedraw===undefined||bRedraw){api.draw();}
return 0;};this.fnVersionCheck=_ext.fnVersionCheck;var _that=this;var emptyInit=options===undefined;var len=this.length;if(emptyInit){options={};}
this.oApi=this.internal=_ext.internal;for(var fn in DataTable.ext.internal){if(fn){this[fn]=_fnExternApiFunc(fn);}}
this.each(function(){var o={};var oInit=len>1?_fnExtend(o,options,true):options;var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var defaults=DataTable.defaults;if(this.nodeName.toLowerCase()!='table')
{_fnLog(null,0,'Non-table node initialisation ('+this.nodeName+')',2);return;}
_fnCompatOpts(defaults);_fnCompatCols(defaults.column);_fnCamelToHungarian(defaults,defaults,true);_fnCamelToHungarian(defaults.column,defaults.column,true);_fnCamelToHungarian(defaults,oInit);var allSettings=DataTable.settings;for(i=0,iLen=allSettings.length;i<iLen;i++)
{if(allSettings[i].nTable==this)
{var bRetrieve=oInit.bRetrieve!==undefined?oInit.bRetrieve:defaults.bRetrieve;var bDestroy=oInit.bDestroy!==undefined?oInit.bDestroy:defaults.bDestroy;if(emptyInit||bRetrieve)
{return allSettings[i].oInstance;}
else if(bDestroy)
{allSettings[i].oInstance.fnDestroy();break;}
else
{_fnLog(allSettings[i],0,'Cannot reinitialise DataTable',3);return;}}
if(allSettings[i].sTableId==this.id)
{allSettings.splice(i,1);break;}}
if(sId===null||sId==="")
{sId="DataTables_Table_"+(DataTable.ext._unique++);this.id=sId;}
var oSettings=$.extend(true,{},DataTable.models.oSettings,{"nTable":this,"oApi":_that.internal,"oInit":oInit,"sDestroyWidth":$(this)[0].style.width,"sInstance":sId,"sTableId":sId});allSettings.push(oSettings);oSettings.oInstance=(_that.length===1)?_that:$(this).dataTable();_fnCompatOpts(oInit);if(oInit.oLanguage)
{_fnLanguageCompat(oInit.oLanguage);}
if(oInit.aLengthMenu&&!oInit.iDisplayLength)
{oInit.iDisplayLength=$.isArray(oInit.aLengthMenu[0])?oInit.aLengthMenu[0][0]:oInit.aLengthMenu[0];}
oInit=_fnExtend($.extend(true,{},defaults),oInit);_fnMap(oSettings.oFeatures,oInit,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);_fnMap(oSettings,oInit,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);_fnMap(oSettings.oScroll,oInit,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user');var oClasses=oSettings.oClasses;if(oInit.bJQueryUI)
{$.extend(oClasses,DataTable.ext.oJUIClasses,oInit.oClasses);if(oInit.sDom===defaults.sDom&&defaults.sDom==="lfrtip")
{oSettings.sDom='<"H"lfr>t<"F"ip>';}
if(!oSettings.renderer){oSettings.renderer='jqueryui';}
else if($.isPlainObject(oSettings.renderer)&&!oSettings.renderer.header){oSettings.renderer.header='jqueryui';}}
else
{$.extend(oClasses,DataTable.ext.classes,oInit.oClasses);}
$(this).addClass(oClasses.sTable);if(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")
{oSettings.oScroll.iBarWidth=_fnScrollBarWidth();}
if(oSettings.oScroll.sX===true){oSettings.oScroll.sX='100%';}
if(oSettings.iInitDisplayStart===undefined)
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(oInit.iDeferLoading!==null)
{oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}
if(oInit.oLanguage.sUrl!=="")
{oSettings.oLanguage.sUrl=oInit.oLanguage.sUrl;$.getJSON(oSettings.oLanguage.sUrl,null,function(json){_fnLanguageCompat(json);_fnCamelToHungarian(defaults.oLanguage,json);$.extend(true,oSettings.oLanguage,oInit.oLanguage,json);_fnInitialise(oSettings);});bInitHandedOff=true;}
else
{$.extend(true,oSettings.oLanguage,oInit.oLanguage);}
if(oInit.asStripeClasses===null)
{oSettings.asStripeClasses=[oClasses.sStripeOdd,oClasses.sStripeEven];}
var stripeClasses=oSettings.asStripeClasses;var rowOne=$('tbody tr:eq(0)',this);if($.inArray(true,$.map(stripeClasses,function(el,i){return rowOne.hasClass(el);}))!==-1){$('tbody tr',this).removeClass(stripeClasses.join(' '));oSettings.asDestroyStripes=stripeClasses.slice();}
var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0)
{_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}
if(oInit.aoColumns===null)
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{_fnAddColumn(oSettings,anThs?anThs[i]:null);}
_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});if(rowOne.length){var a=function(cell,name){return cell.getAttribute('data-'+name)?name:null;};$.each(_fnGetRowElements(oSettings,rowOne[0]).cells,function(i,cell){var col=oSettings.aoColumns[i];if(col.mData===i){var sort=a(cell,'sort')||a(cell,'order');var filter=a(cell,'filter')||a(cell,'search');if(sort!==null||filter!==null){col.mData={_:i+'.display',sort:sort!==null?i+'.@data-'+sort:undefined,type:sort!==null?i+'.@data-'+sort:undefined,filter:filter!==null?i+'.@data-'+filter:undefined};_fnColumnOptions(oSettings,i);}}});}
var features=oSettings.oFeatures;if(oInit.bStateSave)
{features.bStateSave=true;_fnLoadState(oSettings,oInit);_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');}
if(oInit.aaSorting===undefined)
{var sorting=oSettings.aaSorting;for(i=0,iLen=sorting.length;i<iLen;i++)
{sorting[i][1]=oSettings.aoColumns[i].asSorting[0];}}
_fnSortingClasses(oSettings);if(features.bSort)
{_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted){var aSort=_fnSortFlatten(oSettings);var sortedColumns={};$.each(aSort,function(i,val){sortedColumns[val.src]=val.dir;});_fnCallbackFire(oSettings,null,'order',[oSettings,aSort,sortedColumns]);_fnSortAria(oSettings);}});}
_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted||_fnDataSource(oSettings)==='ssp'||features.bDeferRender){_fnSortingClasses(oSettings);}},'sc');_fnBrowserDetect(oSettings);var captions=$(this).children('caption').each(function(){this._captionSide=$(this).css('caption-side');});var thead=$(this).children('thead');if(thead.length===0)
{thead=$('<thead/>').appendTo(this);}
oSettings.nTHead=thead[0];var tbody=$(this).children('tbody');if(tbody.length===0)
{tbody=$('<tbody/>').appendTo(this);}
oSettings.nTBody=tbody[0];var tfoot=$(this).children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!==""))
{tfoot=$('<tfoot/>').appendTo(this);}
if(tfoot.length===0||tfoot.children().length===0){$(this).addClass(oClasses.sNoFooter);}
else if(tfoot.length>0){oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}
if(oInit.aaData)
{for(i=0;i<oInit.aaData.length;i++)
{_fnAddData(oSettings,oInit.aaData[i]);}}
else if(oSettings.bDeferLoading||_fnDataSource(oSettings)=='dom')
{_fnAddTr(oSettings,$(oSettings.nTBody).children('tr'));}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false)
{_fnInitialise(oSettings);}});_that=null;return this;};var __apiStruct=[];var __arrayProto=Array.prototype;var _toSettings=function(mixed)
{var idx,jq;var settings=DataTable.settings;var tables=$.map(settings,function(el,i){return el.nTable;});if(!mixed){return[];}
else if(mixed.nTable&&mixed.oApi){return[mixed];}
else if(mixed.nodeName&&mixed.nodeName.toLowerCase()==='table'){idx=$.inArray(mixed,tables);return idx!==-1?[settings[idx]]:null;}
else if(mixed&&typeof mixed.settings==='function'){return mixed.settings().toArray();}
else if(typeof mixed==='string'){jq=$(mixed);}
else if(mixed instanceof $){jq=mixed;}
if(jq){return jq.map(function(i){idx=$.inArray(this,tables);return idx!==-1?settings[idx]:null;}).toArray();}};DataTable.Api=_Api=function(context,data)
{if(!this instanceof _Api){throw'DT API must be constructed as a new object';}
var settings=[];var ctxSettings=function(o){var a=_toSettings(o);if(a){settings.push.apply(settings,a);}};if($.isArray(context)){for(var i=0,ien=context.length;i<ien;i++){ctxSettings(context[i]);}}
else{ctxSettings(context);}
this.context=_unique(settings);if(data){this.push.apply(this,data.toArray?data.toArray():data);}
this.selector={rows:null,cols:null,opts:null};_Api.extend(this,this,__apiStruct);};_Api.prototype={concat:__arrayProto.concat,context:[],each:function(fn)
{if(__arrayProto.forEach){__arrayProto.forEach.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){fn.call(this,this[i],i,this);}}
return this;},eq:function(idx)
{var ctx=this.context;return ctx.length>idx?new _Api(ctx[idx],this[idx]):null;},filter:function(fn)
{var a=[];if(__arrayProto.filter){a=__arrayProto.filter.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){if(fn.call(this,this[i],i,this)){a.push(this[i]);}}}
return new _Api(this.context,a);},flatten:function()
{var a=[];return new _Api(this.context,a.concat.apply(a,this.toArray()));},join:__arrayProto.join,indexOf:__arrayProto.indexOf||function(obj,start)
{for(var i=(start||0),ien=this.length;i<ien;i++){if(this[i]===obj){return i;}}
return-1;},iterator:function(flatten,type,fn){var
a=[],ret,i,ien,j,jen,context=this.context,rows,items,item,selector=this.selector;if(typeof flatten==='string'){fn=type;type=flatten;flatten=false;}
for(i=0,ien=context.length;i<ien;i++){if(type==='table'){ret=fn(context[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='columns'||type==='rows'){ret=fn(context[i],this[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='column'||type==='column-rows'||type==='row'||type==='cell'){items=this[i];if(type==='column-rows'){rows=_selector_row_indexes(context[i],selector.opts);}
for(j=0,jen=items.length;j<jen;j++){item=items[j];if(type==='cell'){ret=fn(context[i],item.row,item.column,i,j);}
else{ret=fn(context[i],item,i,j,rows);}
if(ret!==undefined){a.push(ret);}}}}
if(a.length){var api=new _Api(context,flatten?a.concat.apply([],a):a);var apiSelector=api.selector;apiSelector.rows=selector.rows;apiSelector.cols=selector.cols;apiSelector.opts=selector.opts;return api;}
return this;},lastIndexOf:__arrayProto.lastIndexOf||function(obj,start)
{return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function(fn)
{var a=[];if(__arrayProto.map){a=__arrayProto.map.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){a.push(fn.call(this,this[i],i));}}
return new _Api(this.context,a);},pluck:function(prop)
{return this.map(function(el){return el[prop];});},pop:__arrayProto.pop,push:__arrayProto.push,reduce:__arrayProto.reduce||function(fn,init)
{return _fnReduce(this,fn,init,0,this.length,1);},reduceRight:__arrayProto.reduceRight||function(fn,init)
{return _fnReduce(this,fn,init,this.length-1,-1,-1);},reverse:__arrayProto.reverse,selector:null,shift:__arrayProto.shift,sort:__arrayProto.sort,splice:__arrayProto.splice,toArray:function()
{return __arrayProto.slice.call(this);},to$:function()
{return $(this);},toJQuery:function()
{return $(this);},unique:function()
{return new _Api(this.context,_unique(this));},unshift:__arrayProto.unshift};_Api.extend=function(scope,obj,ext)
{if(!obj||(!(obj instanceof _Api)&&!obj.__dt_wrapper)){return;}
var
i,ien,j,jen,struct,inner,methodScoping=function(fn,struc){return function(){var ret=fn.apply(scope,arguments);_Api.extend(ret,ret,struc.methodExt);return ret;};};for(i=0,ien=ext.length;i<ien;i++){struct=ext[i];obj[struct.name]=typeof struct.val==='function'?methodScoping(struct.val,struct):$.isPlainObject(struct.val)?{}:struct.val;obj[struct.name].__dt_wrapper=true;_Api.extend(scope,obj[struct.name],struct.propExt);}};_Api.register=_api_register=function(name,val)
{if($.isArray(name)){for(var j=0,jen=name.length;j<jen;j++){_Api.register(name[j],val);}
return;}
var
i,ien,heir=name.split('.'),struct=__apiStruct,key,method;var find=function(src,name){for(var i=0,ien=src.length;i<ien;i++){if(src[i].name===name){return src[i];}}
return null;};for(i=0,ien=heir.length;i<ien;i++){method=heir[i].indexOf('()')!==-1;key=method?heir[i].replace('()',''):heir[i];var src=find(struct,key);if(!src){src={name:key,val:{},methodExt:[],propExt:[]};struct.push(src);}
if(i===ien-1){src.val=val;}
else{struct=method?src.methodExt:src.propExt;}}
if(_Api.ready){DataTable.api.build();}};_Api.registerPlural=_api_registerPlural=function(pluralName,singularName,val){_Api.register(pluralName,val);_Api.register(singularName,function(){var ret=val.apply(this,arguments);if(ret===this){return this;}
else if(ret instanceof _Api){return ret.length?$.isArray(ret[0])?new _Api(ret.context,ret[0]):ret[0]:undefined;}
return ret;});};var __table_selector=function(selector,a)
{if(typeof selector==='number'){return[a[selector]];}
var nodes=$.map(a,function(el,i){return el.nTable;});return $(nodes).filter(selector).map(function(i){var idx=$.inArray(this,nodes);return a[idx];}).toArray();};_api_register('tables()',function(selector){return selector?new _Api(__table_selector(selector,this.context)):this;});_api_register('table()',function(selector){var tables=this.tables(selector);var ctx=tables.context;return ctx.length?new _Api(ctx[0]):tables;});_api_registerPlural('tables().nodes()','table().node()',function(){return this.iterator('table',function(ctx){return ctx.nTable;});});_api_registerPlural('tables().body()','table().body()',function(){return this.iterator('table',function(ctx){return ctx.nTBody;});});_api_registerPlural('tables().header()','table().header()',function(){return this.iterator('table',function(ctx){return ctx.nTHead;});});_api_registerPlural('tables().footer()','table().footer()',function(){return this.iterator('table',function(ctx){return ctx.nTFoot;});});_api_register('draw()',function(resetPaging){return this.iterator('table',function(settings){_fnReDraw(settings,resetPaging===false);});});_api_register('page()',function(action){if(action===undefined){return this.page.info().page;}
return this.iterator('table',function(settings){_fnPageChange(settings,action);});});_api_register('page.info()',function(action){if(this.context.length===0){return undefined;}
var
settings=this.context[0],start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1;return{"page":all?0:Math.floor(start/len),"pages":all?1:Math.ceil(visRecords/len),"start":start,"end":settings.fnDisplayEnd(),"length":len,"recordsTotal":settings.fnRecordsTotal(),"recordsDisplay":visRecords};});_api_register('page.len()',function(len){if(len===undefined){return this.context.length!==0?this.context[0]._iDisplayLength:undefined;}
return this.iterator('table',function(settings){_fnLengthChange(settings,len);});});var __reload=function(settings,holdPosition,callback){if(_fnDataSource(settings)=='ssp'){_fnReDraw(settings,holdPosition);}
else{_fnProcessingDisplay(settings,true);_fnBuildAjax(settings,[],function(json){_fnClearTable(settings);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
_fnReDraw(settings,holdPosition);_fnProcessingDisplay(settings,false);});}
if(callback){var api=new _Api(settings);api.one('draw',function(){callback(api.ajax.json());});}};_api_register('ajax.json()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].json;}});_api_register('ajax.params()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].oAjaxData;}});_api_register('ajax.reload()',function(callback,resetPaging){return this.iterator('table',function(settings){__reload(settings,resetPaging===false,callback);});});_api_register('ajax.url()',function(url){var ctx=this.context;if(url===undefined){if(ctx.length===0){return undefined;}
ctx=ctx[0];return ctx.ajax?$.isPlainObject(ctx.ajax)?ctx.ajax.url:ctx.ajax:ctx.sAjaxSource;}
return this.iterator('table',function(settings){if($.isPlainObject(settings.ajax)){settings.ajax.url=url;}
else{settings.ajax=url;}});});_api_register('ajax.url().load()',function(callback,resetPaging){return this.iterator('table',function(ctx){__reload(ctx,resetPaging===false,callback);});});var _selector_run=function(selector,select)
{var
out=[],res,a,i,ien,j,jen;if(!selector||typeof selector==='string'||selector.length===undefined){selector=[selector];}
for(i=0,ien=selector.length;i<ien;i++){a=selector[i]&&selector[i].split?selector[i].split(','):[selector[i]];for(j=0,jen=a.length;j<jen;j++){res=select(typeof a[j]==='string'?$.trim(a[j]):a[j]);if(res&&res.length){out.push.apply(out,res);}}}
return out;};var _selector_opts=function(opts)
{if(!opts){opts={};}
if(opts.filter&&!opts.search){opts.search=opts.filter;}
return{search:opts.search||'none',order:opts.order||'current',page:opts.page||'all'};};var _selector_first=function(inst)
{for(var i=0,ien=inst.length;i<ien;i++){if(inst[i].length>0){inst[0]=inst[i];inst.length=1;inst.context=[inst.context[i]];return inst;}}
inst.length=0;return inst;};var _selector_row_indexes=function(settings,opts)
{var
i,ien,tmp,a=[],displayFiltered=settings.aiDisplay,displayMaster=settings.aiDisplayMaster;var
search=opts.search,order=opts.order,page=opts.page;if(_fnDataSource(settings)=='ssp'){return search==='removed'?[]:_range(0,displayMaster.length);}
else if(page=='current'){for(i=settings._iDisplayStart,ien=settings.fnDisplayEnd();i<ien;i++){a.push(displayFiltered[i]);}}
else if(order=='current'||order=='applied'){a=search=='none'?displayMaster.slice():search=='applied'?displayFiltered.slice():$.map(displayMaster,function(el,i){return $.inArray(el,displayFiltered)===-1?el:null;});}
else if(order=='index'||order=='original'){for(i=0,ien=settings.aoData.length;i<ien;i++){if(search=='none'){a.push(i);}
else{tmp=$.inArray(i,displayFiltered);if((tmp===-1&&search=='removed')||(tmp===1&&search=='applied'))
{a.push(i);}}}}
return a;};var __row_selector=function(settings,selector,opts)
{return _selector_run(selector,function(sel){var selInt=_intVal(sel);if(selInt!==null&&!opts){return[selInt];}
var rows=_selector_row_indexes(settings,opts);if(selInt!==null&&$.inArray(selInt,rows)!==-1){return[selInt];}
else if(!sel){return rows;}
var nodes=[];for(var i=0,ien=rows.length;i<ien;i++){nodes.push(settings.aoData[rows[i]].nTr);}
if(sel.nodeName){if($.inArray(sel,nodes)!==-1){return[sel._DT_RowIndex];}}
return $(nodes).filter(sel).map(function(){return this._DT_RowIndex;}).toArray();});};_api_register('rows()',function(selector,opts){if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __row_selector(settings,selector,opts);});inst.selector.rows=selector;inst.selector.opts=opts;return inst;});_api_register('rows().nodes()',function(){return this.iterator('row',function(settings,row){return settings.aoData[row].nTr||undefined;});});_api_register('rows().data()',function(){return this.iterator(true,'rows',function(settings,rows){return _pluck_order(settings.aoData,rows,'_aData');});});_api_registerPlural('rows().cache()','row().cache()',function(type){return this.iterator('row',function(settings,row){var r=settings.aoData[row];return type==='search'?r._aFilterData:r._aSortData;});});_api_registerPlural('rows().invalidate()','row().invalidate()',function(src){return this.iterator('row',function(settings,row){_fnInvalidateRow(settings,row,src);});});_api_registerPlural('rows().indexes()','row().index()',function(){return this.iterator('row',function(settings,row){return row;});});_api_registerPlural('rows().remove()','row().remove()',function(){var that=this;return this.iterator('row',function(settings,row,thatIdx){var data=settings.aoData;data.splice(row,1);for(var i=0,ien=data.length;i<ien;i++){if(data[i].nTr!==null){data[i].nTr._DT_RowIndex=i;}}
var displayIndex=$.inArray(row,settings.aiDisplay);_fnDeleteIndex(settings.aiDisplayMaster,row);_fnDeleteIndex(settings.aiDisplay,row);_fnDeleteIndex(that[thatIdx],row,false);_fnLengthOverflow(settings);});});_api_register('rows.add()',function(rows){var newRows=this.iterator('table',function(settings){var row,i,ien;var out=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){out.push(_fnAddTr(settings,row)[0]);}
else{out.push(_fnAddData(settings,row));}}
return out;});var modRows=this.rows(-1);modRows.pop();modRows.push.apply(modRows,newRows.toArray());return modRows;});_api_register('row()',function(selector,opts){return _selector_first(this.rows(selector,opts));});_api_register('row().data()',function(data){var ctx=this.context;if(data===undefined){return ctx.length&&this.length?ctx[0].aoData[this[0]]._aData:undefined;}
ctx[0].aoData[this[0]]._aData=data;_fnInvalidateRow(ctx[0],this[0],'data');return this;});_api_register('row().node()',function(){var ctx=this.context;return ctx.length&&this.length?ctx[0].aoData[this[0]].nTr||null:null;});_api_register('row.add()',function(row){if(row instanceof $&&row.length){row=row[0];}
var rows=this.iterator('table',function(settings){if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){return _fnAddTr(settings,row)[0];}
return _fnAddData(settings,row);});return this.row(rows[0]);});var __details_add=function(ctx,row,data,klass)
{var rows=[];var addRow=function(r,k){if(r.nodeName&&r.nodeName.toLowerCase()==='tr'){rows.push(r);}
else{var created=$('<tr><td/></tr>');$('td',created).addClass(k).html(r)
[0].colSpan=_fnVisbleColumns(ctx);rows.push(created[0]);}};if($.isArray(data)||data instanceof $){for(var i=0,ien=data.length;i<ien;i++){addRow(data[i],klass);}}
else{addRow(data,klass);}
if(row._details){row._details.remove();}
row._details=$(rows);if(row._detailsShow){row._details.insertAfter(row.nTr);}};var __details_display=function(show){var ctx=this.context;if(ctx.length&&this.length){var row=ctx[0].aoData[this[0]];if(row._details){row._detailsShow=show;if(show){row._details.insertAfter(row.nTr);}
else{row._details.remove();}
__details_events(ctx[0]);}}
return this;};var __details_events=function(settings)
{var api=new _Api(settings);var namespace='.dt.DT_details';var drawEvent='draw'+namespace;var colvisEvent='column-visibility'+namespace;api.off(drawEvent+' '+colvisEvent);if(_pluck(settings.aoData,'_details').length>0){api.on(drawEvent,function(){api.rows({page:'current'}).eq(0).each(function(idx){var row=settings.aoData[idx];if(row._detailsShow){row._details.insertAfter(row.nTr);}});});api.on(colvisEvent,function(e,settings,idx,vis){var row,visible=_fnVisbleColumns(settings);for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(row._details){row._details.children('td[colspan]').attr('colspan',visible);}}});}};_api_register('row().child()',function(data,klass){var ctx=this.context;if(data===undefined){return ctx.length&&this.length?ctx[0].aoData[this[0]]._details:undefined;}
else if(ctx.length&&this.length){__details_add(ctx[0],ctx[0].aoData[this[0]],data,klass);}
return this;});_api_register(['row().child.show()','row().child().show()'],function(){__details_display.call(this,true);return this;});_api_register(['row().child.hide()','row().child().hide()'],function(){__details_display.call(this,false);return this;});_api_register('row().child.isShown()',function(){var ctx=this.context;if(ctx.length&&this.length){return ctx[0].aoData[this[0]]._detailsShow||false;}
return false;});var __re_column_selector=/^(.*):(name|visIdx|visible)$/;var __column_selector=function(settings,selector,opts)
{var
columns=settings.aoColumns,names=_pluck(columns,'sName'),nodes=_pluck(columns,'nTh');return _selector_run(selector,function(s){var selInt=_intVal(s);if(s===''){return _range(columns.length);}
else if(selInt!==null){return[selInt>=0?selInt:columns.length+selInt];}
else{var match=typeof s==='string'?s.match(__re_column_selector):'';if(match){switch(match[2]){case'visIdx':case'visible':var idx=parseInt(match[1],10);if(idx<0){var visColumns=$.map(columns,function(col,i){return col.bVisible?i:null;});return[visColumns[visColumns.length+idx]];}
return[_fnVisibleToColumnIndex(settings,idx)];case'name':return $.map(names,function(name,i){return name===match[1]?i:null;});}}
else{return $(nodes).filter(s).map(function(){return $.inArray(this,nodes);}).toArray();}}});};var __setColumnVis=function(settings,column,vis){var
cols=settings.aoColumns,col=cols[column],data=settings.aoData,row,cells,i,ien,tr;if(vis===undefined){return col.bVisible;}
if(col.bVisible===vis){return;}
if(vis){var insertBefore=$.inArray(true,_pluck(cols,'bVisible'),column+1);for(i=0,ien=data.length;i<ien;i++){tr=data[i].nTr;cells=data[i].anCells;if(tr){tr.insertBefore(cells[column],cells[insertBefore]||null);}}}
else{$(_pluck(settings.aoData,'anCells',column)).detach();col.bVisible=false;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnSaveState(settings);}
col.bVisible=vis;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnAdjustColumnSizing(settings);if(settings.oScroll.sX||settings.oScroll.sY){_fnScrollDraw(settings);}
_fnCallbackFire(settings,null,'column-visibility',[settings,column,vis]);_fnSaveState(settings);};_api_register('columns()',function(selector,opts){if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __column_selector(settings,selector,opts);});inst.selector.cols=selector;inst.selector.opts=opts;return inst;});_api_registerPlural('columns().header()','column().header()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTh;});});_api_registerPlural('columns().footer()','column().footer()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTf;});});_api_registerPlural('columns().data()','column().data()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){var a=[];for(var row=0,ien=rows.length;row<ien;row++){a.push(_fnGetCellData(settings,rows[row],column,''));}
return a;});});_api_registerPlural('columns().cache()','column().cache()',function(type){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,type==='search'?'_aFilterData':'_aSortData',column);});});_api_registerPlural('columns().nodes()','column().nodes()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,'anCells',column);});});_api_registerPlural('columns().visible()','column().visible()',function(vis){return this.iterator('column',function(settings,column){return vis===undefined?settings.aoColumns[column].bVisible:__setColumnVis(settings,column,vis);});});_api_registerPlural('columns().indexes()','column().index()',function(type){return this.iterator('column',function(settings,column){return type==='visible'?_fnColumnIndexToVisible(settings,column):column;});});_api_register('columns.adjust()',function(){return this.iterator('table',function(settings){_fnAdjustColumnSizing(settings);});});_api_register('column.index()',function(type,idx){if(this.context.length!==0){var ctx=this.context[0];if(type==='fromVisible'||type==='toData'){return _fnVisibleToColumnIndex(ctx,idx);}
else if(type==='fromData'||type==='toVisible'){return _fnColumnIndexToVisible(ctx,idx);}}});_api_register('column()',function(selector,opts){return _selector_first(this.columns(selector,opts));});var __cell_selector=function(settings,selector,opts)
{var data=settings.aoData;var rows=_selector_row_indexes(settings,opts);var cells=_pluck_order(data,rows,'anCells');var allCells=$([].concat.apply([],cells));var row;var columns=settings.aoColumns.length;var a,i,ien,j;return _selector_run(selector,function(s){if(!s){a=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];for(j=0;j<columns;j++){a.push({row:row,column:j});}}
return a;}
else if($.isPlainObject(s)){return[s];}
return allCells.filter(s).map(function(i,el){row=el.parentNode._DT_RowIndex;return{row:row,column:$.inArray(el,data[row].anCells)};}).toArray();});};_api_register('cells()',function(rowSelector,columnSelector,opts){if($.isPlainObject(rowSelector)){if(rowSelector.row){opts=columnSelector;columnSelector=null;}
else{opts=rowSelector;rowSelector=null;}}
if($.isPlainObject(columnSelector)){opts=columnSelector;columnSelector=null;}
if(columnSelector===null||columnSelector===undefined){return this.iterator('table',function(settings){return __cell_selector(settings,rowSelector,_selector_opts(opts));});}
var columns=this.columns(columnSelector,opts);var rows=this.rows(rowSelector,opts);var a,i,ien,j,jen;var cells=this.iterator('table',function(settings,idx){a=[];for(i=0,ien=rows[idx].length;i<ien;i++){for(j=0,jen=columns[idx].length;j<jen;j++){a.push({row:rows[idx][i],column:columns[idx][j]});}}
return a;});$.extend(cells.selector,{cols:columnSelector,rows:rowSelector,opts:opts});return cells;});_api_registerPlural('cells().nodes()','cell().node()',function(){return this.iterator('cell',function(settings,row,column){return settings.aoData[row].anCells[column];});});_api_register('cells().data()',function(){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column);});});_api_registerPlural('cells().cache()','cell().cache()',function(type){type=type==='search'?'_aFilterData':'_aSortData';return this.iterator('cell',function(settings,row,column){return settings.aoData[row][type][column];});});_api_registerPlural('cells().indexes()','cell().index()',function(){return this.iterator('cell',function(settings,row,column){return{row:row,column:column,columnVisible:_fnColumnIndexToVisible(settings,column)};});});_api_register(['cells().invalidate()','cell().invalidate()'],function(src){var selector=this.selector;this.rows(selector.rows,selector.opts).invalidate(src);return this;});_api_register('cell()',function(rowSelector,columnSelector,opts){return _selector_first(this.cells(rowSelector,columnSelector,opts));});_api_register('cell().data()',function(data){var ctx=this.context;var cell=this[0];if(data===undefined){return ctx.length&&cell.length?_fnGetCellData(ctx[0],cell[0].row,cell[0].column):undefined;}
_fnSetCellData(ctx[0],cell[0].row,cell[0].column,data);_fnInvalidateRow(ctx[0],cell[0].row,'data',cell[0].column);return this;});_api_register('order()',function(order,dir){var ctx=this.context;if(order===undefined){return ctx.length!==0?ctx[0].aaSorting:undefined;}
if(typeof order==='number'){order=[[order,dir]];}
else if(!$.isArray(order[0])){order=Array.prototype.slice.call(arguments);}
return this.iterator('table',function(settings){settings.aaSorting=order.slice();});});_api_register('order.listener()',function(node,column,callback){return this.iterator('table',function(settings){_fnSortAttachListener(settings,node,column,callback);});});_api_register(['columns().order()','column().order()'],function(dir){var that=this;return this.iterator('table',function(settings,i){var sort=[];$.each(that[i],function(j,col){sort.push([col,dir]);});settings.aaSorting=sort;});});_api_register('search()',function(input,regex,smart,caseInsen){var ctx=this.context;if(input===undefined){return ctx.length!==0?ctx[0].oPreviousSearch.sSearch:undefined;}
return this.iterator('table',function(settings){if(!settings.oFeatures.bFilter){return;}
_fnFilterComplete(settings,$.extend({},settings.oPreviousSearch,{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen}),1);});});_api_register(['columns().search()','column().search()'],function(input,regex,smart,caseInsen){return this.iterator('column',function(settings,column){var preSearch=settings.aoPreSearchCols;if(input===undefined){return preSearch[column].sSearch;}
if(!settings.oFeatures.bFilter){return;}
$.extend(preSearch[column],{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen});_fnFilterComplete(settings,settings.oPreviousSearch,1);});});DataTable.versionCheck=DataTable.fnVersionCheck=function(version)
{var aThis=DataTable.version.split('.');var aThat=version.split('.');var iThis,iThat;for(var i=0,iLen=aThat.length;i<iLen;i++){iThis=parseInt(aThis[i],10)||0;iThat=parseInt(aThat[i],10)||0;if(iThis===iThat){continue;}
return iThis>iThat;}
return true;};DataTable.isDataTable=DataTable.fnIsDataTable=function(table)
{var t=$(table).get(0);var is=false;$.each(DataTable.settings,function(i,o){if(o.nTable===t||o.nScrollHead===t||o.nScrollFoot===t){is=true;}});return is;};DataTable.tables=DataTable.fnTables=function(visible)
{return jQuery.map(DataTable.settings,function(o){if(!visible||(visible&&$(o.nTable).is(':visible'))){return o.nTable;}});};DataTable.camelToHungarian=_fnCamelToHungarian;_api_register('$()',function(selector,opts){var
rows=this.rows(opts).nodes(),jqRows=$(rows);return $([].concat(jqRows.filter(selector).toArray(),jqRows.find(selector).toArray()));});$.each(['on','one','off'],function(i,key){_api_register(key+'()',function(){var args=Array.prototype.slice.call(arguments);if(args[0].indexOf('.dt')===-1){args[0]+='.dt';}
var inst=$(this.tables().nodes());inst[key].apply(inst,args);return this;});});_api_register('clear()',function(){return this.iterator('table',function(settings){_fnClearTable(settings);});});_api_register('settings()',function(){return new _Api(this.context,this.context);});_api_register('data()',function(){return this.iterator('table',function(settings){return _pluck(settings.aoData,'_aData');}).flatten();});_api_register('destroy()',function(remove){remove=remove||false;return this.iterator('table',function(settings){var orig=settings.nTableWrapper.parentNode;var classes=settings.oClasses;var table=settings.nTable;var tbody=settings.nTBody;var thead=settings.nTHead;var tfoot=settings.nTFoot;var jqTable=$(table);var jqTbody=$(tbody);var jqWrapper=$(settings.nTableWrapper);var rows=$.map(settings.aoData,function(r){return r.nTr;});var i,ien;settings.bDestroying=true;_fnCallbackFire(settings,"aoDestroyCallback","destroy",[settings]);if(!remove){new _Api(settings).columns().visible(true);}
jqWrapper.unbind('.DT').find(':not(tbody *)').unbind('.DT');$(window).unbind('.DT-'+settings.sInstance);if(table!=thead.parentNode){jqTable.children('thead').detach();jqTable.append(thead);}
if(tfoot&&table!=tfoot.parentNode){jqTable.children('tfoot').detach();jqTable.append(tfoot);}
jqTable.detach();jqWrapper.detach();settings.aaSorting=[];settings.aaSortingFixed=[];_fnSortingClasses(settings);$(rows).removeClass(settings.asStripeClasses.join(' '));$('th, td',thead).removeClass(classes.sSortable+' '+
classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone);if(settings.bJUI){$('th span.'+classes.sSortIcon+', td span.'+classes.sSortIcon,thead).detach();$('th, td',thead).each(function(){var wrapper=$('div.'+classes.sSortJUIWrapper,this);$(this).append(wrapper.contents());wrapper.detach();});}
if(!remove&&orig){orig.insertBefore(table,settings.nTableReinsertBefore);}
jqTbody.children().detach();jqTbody.append(rows);jqTable.css('width',settings.sDestroyWidth).removeClass(classes.sTable);ien=settings.asDestroyStripes.length;if(ien){jqTbody.children().each(function(i){$(this).addClass(settings.asDestroyStripes[i%ien]);});}
var idx=$.inArray(settings,DataTable.settings);if(idx!==-1){DataTable.settings.splice(idx,1);}});});DataTable.version="1.10.0";DataTable.settings=[];DataTable.models={};DataTable.models.oSearch={"bCaseInsensitive":true,"sSearch":"","bRegex":false,"bSmart":true};DataTable.models.oRow={"nTr":null,"anCells":null,"_aData":[],"_aSortData":null,"_aFilterData":null,"_sFilterRow":null,"_sRowStripe":"","src":null};DataTable.models.oColumn={"idx":null,"aDataSort":null,"asSorting":null,"bSearchable":null,"bSortable":null,"bVisible":null,"_sManualType":null,"_bAttrSrc":false,"fnCreatedCell":null,"fnGetData":null,"fnSetData":null,"mData":null,"mRender":null,"nTh":null,"nTf":null,"sClass":null,"sContentPadding":null,"sDefaultContent":null,"sName":null,"sSortDataType":'std',"sSortingClass":null,"sSortingClassJUI":null,"sTitle":null,"sType":null,"sWidth":null,"sWidthOrig":null};DataTable.defaults={"aaData":null,"aaSorting":[[0,'asc']],"aaSortingFixed":[],"ajax":null,"aLengthMenu":[10,25,50,100],"aoColumns":null,"aoColumnDefs":null,"aoSearchCols":[],"asStripeClasses":null,"bAutoWidth":true,"bDeferRender":false,"bDestroy":false,"bFilter":true,"bInfo":true,"bJQueryUI":false,"bLengthChange":true,"bPaginate":true,"bProcessing":false,"bRetrieve":false,"bScrollCollapse":false,"bServerSide":false,"bSort":true,"bSortMulti":true,"bSortCellsTop":false,"bSortClasses":true,"bStateSave":false,"fnCreatedRow":null,"fnDrawCallback":null,"fnFooterCallback":null,"fnFormatNumber":function(toFormat){return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands);},"fnHeaderCallback":null,"fnInfoCallback":null,"fnInitComplete":null,"fnPreDrawCallback":null,"fnRowCallback":null,"fnServerData":null,"fnServerParams":null,"fnStateLoadCallback":function(settings){try{return JSON.parse((settings.iStateDuration===-1?sessionStorage:localStorage).getItem('DataTables_'+settings.sInstance+'_'+location.pathname));}catch(e){}},"fnStateLoadParams":null,"fnStateLoaded":null,"fnStateSaveCallback":function(settings,data){try{(settings.iStateDuration===-1?sessionStorage:localStorage).setItem('DataTables_'+settings.sInstance+'_'+location.pathname,JSON.stringify(data));}catch(e){}},"fnStateSaveParams":null,"iStateDuration":7200,"iDeferLoading":null,"iDisplayLength":10,"iDisplayStart":0,"iTabIndex":0,"oClasses":{},"oLanguage":{"oAria":{"sSortAscending":": activate to sort column ascending","sSortDescending":": activate to sort column descending"},"oPaginate":{"sFirst":"First","sLast":"Last","sNext":"Next","sPrevious":"Previous"},"sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sDecimal":"","sThousands":",","sLengthMenu":"Show _MENU_ entries","sLoadingRecords":"Loading...","sProcessing":"Processing...","sSearch":"Search:","sUrl":"","sZeroRecords":"No matching records found"},"oSearch":$.extend({},DataTable.models.oSearch),"sAjaxDataProp":"data","sAjaxSource":null,"sDom":"lfrtip","sPaginationType":"simple_numbers","sScrollX":"","sScrollXInner":"","sScrollY":"","sServerMethod":"GET","renderer":null};_fnHungarianMap(DataTable.defaults);DataTable.defaults.column={"aDataSort":null,"iDataSort":-1,"asSorting":['asc','desc'],"bSearchable":true,"bSortable":true,"bVisible":true,"fnCreatedCell":null,"mData":null,"mRender":null,"sCellType":"td","sClass":"","sContentPadding":"","sDefaultContent":null,"sName":"","sSortDataType":"std","sTitle":null,"sType":null,"sWidth":null};_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings={"oFeatures":{"bAutoWidth":null,"bDeferRender":null,"bFilter":null,"bInfo":null,"bLengthChange":null,"bPaginate":null,"bProcessing":null,"bServerSide":null,"bSort":null,"bSortMulti":null,"bSortClasses":null,"bStateSave":null},"oScroll":{"bCollapse":null,"iBarWidth":0,"sX":null,"sXInner":null,"sY":null},"oLanguage":{"fnInfoCallback":null},"oBrowser":{"bScrollOversize":false,"bScrollbarLeft":false},"ajax":null,"aanFeatures":[],"aoData":[],"aiDisplay":[],"aiDisplayMaster":[],"aoColumns":[],"aoHeader":[],"aoFooter":[],"oPreviousSearch":{},"aoPreSearchCols":[],"aaSorting":null,"aaSortingFixed":[],"asStripeClasses":null,"asDestroyStripes":[],"sDestroyWidth":0,"aoRowCallback":[],"aoHeaderCallback":[],"aoFooterCallback":[],"aoDrawCallback":[],"aoRowCreatedCallback":[],"aoPreDrawCallback":[],"aoInitComplete":[],"aoStateSaveParams":[],"aoStateLoadParams":[],"aoStateLoaded":[],"sTableId":"","nTable":null,"nTHead":null,"nTFoot":null,"nTBody":null,"nTableWrapper":null,"bDeferLoading":false,"bInitialised":false,"aoOpenRows":[],"sDom":null,"sPaginationType":"two_button","iStateDuration":0,"aoStateSave":[],"aoStateLoad":[],"oLoadedState":null,"sAjaxSource":null,"sAjaxDataProp":null,"bAjaxDataGet":true,"jqXHR":null,"json":undefined,"oAjaxData":undefined,"fnServerData":null,"aoServerParams":[],"sServerMethod":null,"fnFormatNumber":null,"aLengthMenu":null,"iDraw":0,"bDrawing":false,"iDrawError":-1,"_iDisplayLength":10,"_iDisplayStart":0,"_iRecordsTotal":0,"_iRecordsDisplay":0,"bJUI":null,"oClasses":{},"bFiltered":false,"bSorted":false,"bSortCellsTop":null,"oInit":null,"aoDestroyCallback":[],"fnRecordsTotal":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsTotal*1:this.aiDisplayMaster.length;},"fnRecordsDisplay":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsDisplay*1:this.aiDisplay.length;},"fnDisplayEnd":function()
{var
len=this._iDisplayLength,start=this._iDisplayStart,calc=start+len,records=this.aiDisplay.length,features=this.oFeatures,paginate=features.bPaginate;if(features.bServerSide){return paginate===false||len===-1?start+records:Math.min(start+len,this._iRecordsDisplay);}
else{return!paginate||calc>records||len===-1?records:calc;}},"oInstance":null,"sInstance":null,"iTabIndex":0,"nScrollHead":null,"nScrollFoot":null,"aLastSort":[],"oPlugins":{}};DataTable.ext=_ext={classes:{},errMode:"alert",feature:[],search:[],internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:DataTable.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:DataTable.version};$.extend(_ext,{afnFiltering:_ext.search,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oApi:_ext.internal,oStdClasses:_ext.classes,oPagination:_ext.pager});$.extend(DataTable.ext.classes,{"sTable":"dataTable","sNoFooter":"no-footer","sPageButton":"paginate_button","sPageButtonActive":"current","sPageButtonDisabled":"disabled","sStripeOdd":"odd","sStripeEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sFilterInput":"","sLengthSelect":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sHeaderTH":"","sFooterTH":"","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sJUIHeader":"","sJUIFooter":""});(function(){var _empty='';_empty='';var _stateDefault=_empty+'ui-state-default';var _sortIcon=_empty+'css_right ui-icon ui-icon-';var _headerFooter=_empty+'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';$.extend(DataTable.ext.oJUIClasses,DataTable.ext.classes,{"sPageButton":"fg-button ui-button "+_stateDefault,"sPageButtonActive":"ui-state-disabled","sPageButtonDisabled":"ui-state-disabled","sPaging":"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi "+"ui-buttonset-multi paging_","sSortAsc":_stateDefault+" sorting_asc","sSortDesc":_stateDefault+" sorting_desc","sSortable":_stateDefault+" sorting","sSortableAsc":_stateDefault+" sorting_asc_disabled","sSortableDesc":_stateDefault+" sorting_desc_disabled","sSortableNone":_stateDefault+" sorting_disabled","sSortJUIAsc":_sortIcon+"triangle-1-n","sSortJUIDesc":_sortIcon+"triangle-1-s","sSortJUI":_sortIcon+"carat-2-n-s","sSortJUIAscAllowed":_sortIcon+"carat-1-n","sSortJUIDescAllowed":_sortIcon+"carat-1-s","sSortJUIWrapper":"DataTables_sort_wrapper","sSortIcon":"DataTables_sort_icon","sScrollHead":"dataTables_scrollHead "+_stateDefault,"sScrollFoot":"dataTables_scrollFoot "+_stateDefault,"sHeaderTH":_stateDefault,"sFooterTH":_stateDefault,"sJUIHeader":_headerFooter+" ui-corner-tl ui-corner-tr","sJUIFooter":_headerFooter+" ui-corner-bl ui-corner-br"});}());var extPagination=DataTable.ext.pager;function _numbers(page,pages){var
numbers=[],buttons=extPagination.numbers_length,half=Math.floor(buttons/2),i=1;if(pages<=buttons){numbers=_range(0,pages);}
else if(page<=half){numbers=_range(0,buttons-2);numbers.push('ellipsis');numbers.push(pages-1);}
else if(page>=pages-1-half){numbers=_range(pages-(buttons-2),pages);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
else{numbers=_range(page-1,page+2);numbers.push('ellipsis');numbers.push(pages-1);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
numbers.DT_el='span';return numbers;}
$.extend(extPagination,{simple:function(page,pages){return['previous','next'];},full:function(page,pages){return['first','previous','next','last'];},simple_numbers:function(page,pages){return['previous',_numbers(page,pages),'next'];},full_numbers:function(page,pages){return['first','previous',_numbers(page,pages),'next','last'];},_numbers:_numbers,numbers_length:7});$.extend(true,DataTable.ext.renderer,{pageButton:{_:function(settings,host,idx,buttons,page,pages){var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var btnDisplay,btnClass,counter=0;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){_fnPageChange(settings,e.data.action,true);};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){var inner=$('<'+(button.DT_el||'div')+'/>').appendTo(container);attach(inner,button);}
else{btnDisplay='';btnClass='';switch(button){case'ellipsis':container.append('<span>&hellip;</span>');break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;default:btnDisplay=button+1;btnClass=page===button?classes.sPageButtonActive:'';break;}
if(btnDisplay){node=$('<a>',{'class':classes.sPageButton+' '+btnClass,'aria-controls':settings.sTableId,'data-dt-idx':counter,'tabindex':settings.iTabIndex,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null}).html(btnDisplay).appendTo(container);_fnBindAction(node,{action:button},clickHandler);counter++;}}}};var activeEl=$(document.activeElement).data('dt-idx');attach($(host).empty(),buttons);if(activeEl!==null){$(host).find('[data-dt-idx='+activeEl+']').focus();}}}});var __numericReplace=function(d,decimalPlace,re1,re2){if(!d||d==='-'){return-Infinity;}
if(decimalPlace){d=_numToDecimal(d,decimalPlace);}
if(d.replace){if(re1){d=d.replace(re1,'');}
if(re2){d=d.replace(re2,'');}}
return d*1;};function _addNumericSort(decimalPlace){$.each({"num":function(d){return __numericReplace(d,decimalPlace);},"num-fmt":function(d){return __numericReplace(d,decimalPlace,_re_formatted_numeric);},"html-num":function(d){return __numericReplace(d,decimalPlace,_re_html);},"html-num-fmt":function(d){return __numericReplace(d,decimalPlace,_re_html,_re_formatted_numeric);}},function(key,fn){_ext.type.order[key+decimalPlace+'-pre']=fn;});}
$.extend(_ext.type.order,{"date-pre":function(d){return Date.parse(d)||0;},"html-pre":function(a){return!a?'':a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+'';},"string-pre":function(a){return typeof a==='string'?a.toLowerCase():!a||!a.toString?'':a.toString();},"string-asc":function(x,y){return((x<y)?-1:((x>y)?1:0));},"string-desc":function(x,y){return((x<y)?1:((x>y)?-1:0));}});_addNumericSort('');$.extend(DataTable.ext.type.detect,[function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal)?'num'+decimal:null;},function(d,settings)
{if(d&&!_re_date_start.test(d)){return null;}
var parsed=Date.parse(d);return(parsed!==null&&!isNaN(parsed))||_empty(d)?'date':null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal,true)?'num-fmt'+decimal:null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal)?'html-num'+decimal:null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal,true)?'html-num-fmt'+decimal:null;},function(d,settings)
{return _empty(d)||(typeof d==='string'&&d.indexOf('<')!==-1)?'html':null;}]);$.extend(DataTable.ext.type.search,{html:function(data){return _empty(data)?'':typeof data==='string'?data.replace(_re_new_lines," ").replace(_re_html,""):'';},string:function(data){return _empty(data)?'':typeof data==='string'?data.replace(_re_new_lines," "):data;}});$.extend(true,DataTable.ext.renderer,{header:{_:function(settings,cell,column,classes){$(settings.nTable).on('order.dt.DT',function(e,settings,sorting,columns){var colIdx=column.idx;cell.removeClass(column.sSortingClass+' '+
classes.sSortAsc+' '+
classes.sSortDesc).addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);});},jqueryui:function(settings,cell,column,classes){var colIdx=column.idx;$('<div/>').addClass(classes.sSortJUIWrapper).append(cell.contents()).append($('<span/>').addClass(classes.sSortIcon+' '+column.sSortingClassJUI)).appendTo(cell);$(settings.nTable).on('order.dt.DT',function(e,settings,sorting,columns){cell.removeClass(classes.sSortAsc+" "+classes.sSortDesc).addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);cell.find('span.'+classes.sSortIcon).removeClass(classes.sSortJUIAsc+" "+
classes.sSortJUIDesc+" "+
classes.sSortJUI+" "+
classes.sSortJUIAscAllowed+" "+
classes.sSortJUIDescAllowed).addClass(columns[colIdx]=='asc'?classes.sSortJUIAsc:columns[colIdx]=='desc'?classes.sSortJUIDesc:column.sSortingClassJUI);});}}});DataTable.render={number:function(thousands,decimal,precision,prefix){return{display:function(d){d=parseFloat(d);var intPart=parseInt(d,10);var floatPart=precision?(decimal+(d-intPart).toFixed(precision)).substring(2):'';return(prefix||'')+
intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,thousands)+
floatPart;}};}};function _fnExternApiFunc(fn)
{return function(){var args=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.internal[fn].apply(this,args);};}
$.extend(DataTable.ext.internal,{_fnExternApiFunc:_fnExternApiFunc,_fnBuildAjax:_fnBuildAjax,_fnAjaxUpdate:_fnAjaxUpdate,_fnAjaxParameters:_fnAjaxParameters,_fnAjaxUpdateDraw:_fnAjaxUpdateDraw,_fnAjaxDataSrc:_fnAjaxDataSrc,_fnAddColumn:_fnAddColumn,_fnColumnOptions:_fnColumnOptions,_fnAdjustColumnSizing:_fnAdjustColumnSizing,_fnVisibleToColumnIndex:_fnVisibleToColumnIndex,_fnColumnIndexToVisible:_fnColumnIndexToVisible,_fnVisbleColumns:_fnVisbleColumns,_fnGetColumns:_fnGetColumns,_fnColumnTypes:_fnColumnTypes,_fnApplyColumnDefs:_fnApplyColumnDefs,_fnHungarianMap:_fnHungarianMap,_fnCamelToHungarian:_fnCamelToHungarian,_fnLanguageCompat:_fnLanguageCompat,_fnBrowserDetect:_fnBrowserDetect,_fnAddData:_fnAddData,_fnAddTr:_fnAddTr,_fnNodeToDataIndex:_fnNodeToDataIndex,_fnNodeToColumnIndex:_fnNodeToColumnIndex,_fnGetCellData:_fnGetCellData,_fnSetCellData:_fnSetCellData,_fnSplitObjNotation:_fnSplitObjNotation,_fnGetObjectDataFn:_fnGetObjectDataFn,_fnSetObjectDataFn:_fnSetObjectDataFn,_fnGetDataMaster:_fnGetDataMaster,_fnClearTable:_fnClearTable,_fnDeleteIndex:_fnDeleteIndex,_fnInvalidateRow:_fnInvalidateRow,_fnGetRowElements:_fnGetRowElements,_fnCreateTr:_fnCreateTr,_fnBuildHead:_fnBuildHead,_fnDrawHead:_fnDrawHead,_fnDraw:_fnDraw,_fnReDraw:_fnReDraw,_fnAddOptionsHtml:_fnAddOptionsHtml,_fnDetectHeader:_fnDetectHeader,_fnGetUniqueThs:_fnGetUniqueThs,_fnFeatureHtmlFilter:_fnFeatureHtmlFilter,_fnFilterComplete:_fnFilterComplete,_fnFilterCustom:_fnFilterCustom,_fnFilterColumn:_fnFilterColumn,_fnFilter:_fnFilter,_fnFilterCreateSearch:_fnFilterCreateSearch,_fnEscapeRegex:_fnEscapeRegex,_fnFilterData:_fnFilterData,_fnFeatureHtmlInfo:_fnFeatureHtmlInfo,_fnUpdateInfo:_fnUpdateInfo,_fnInfoMacros:_fnInfoMacros,_fnInitialise:_fnInitialise,_fnInitComplete:_fnInitComplete,_fnLengthChange:_fnLengthChange,_fnFeatureHtmlLength:_fnFeatureHtmlLength,_fnFeatureHtmlPaginate:_fnFeatureHtmlPaginate,_fnPageChange:_fnPageChange,_fnFeatureHtmlProcessing:_fnFeatureHtmlProcessing,_fnProcessingDisplay:_fnProcessingDisplay,_fnFeatureHtmlTable:_fnFeatureHtmlTable,_fnScrollDraw:_fnScrollDraw,_fnApplyToChildren:_fnApplyToChildren,_fnCalculateColumnWidths:_fnCalculateColumnWidths,_fnThrottle:_fnThrottle,_fnConvertToWidth:_fnConvertToWidth,_fnScrollingWidthAdjust:_fnScrollingWidthAdjust,_fnGetWidestNode:_fnGetWidestNode,_fnGetMaxLenString:_fnGetMaxLenString,_fnStringToCss:_fnStringToCss,_fnScrollBarWidth:_fnScrollBarWidth,_fnSortFlatten:_fnSortFlatten,_fnSort:_fnSort,_fnSortAria:_fnSortAria,_fnSortListener:_fnSortListener,_fnSortAttachListener:_fnSortAttachListener,_fnSortingClasses:_fnSortingClasses,_fnSortData:_fnSortData,_fnSaveState:_fnSaveState,_fnLoadState:_fnLoadState,_fnSettingsFromNode:_fnSettingsFromNode,_fnLog:_fnLog,_fnMap:_fnMap,_fnBindAction:_fnBindAction,_fnCallbackReg:_fnCallbackReg,_fnCallbackFire:_fnCallbackFire,_fnLengthOverflow:_fnLengthOverflow,_fnRenderer:_fnRenderer,_fnDataSource:_fnDataSource,_fnRowAttributes:_fnRowAttributes,_fnCalculateEnd:function(){}});$.fn.dataTable=DataTable;$.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;$.fn.DataTable=function(opts){return $(this).dataTable(opts).api();};$.each(DataTable,function(prop,val){$.fn.DataTable[prop]=val;});return $.fn.dataTable;}));}(window,document));$(function() {
    $('.avg-score-histogram').each(function() {
        var $this = $(this);
        var context = $this.find('canvas');
        var data = JSON.parse($this.find('.data').text());
        var values = [];
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                values.push(data[key] * 100);
            }
        }
        new Chart(context, {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Avg score',
                    data: values,
                    borderColor: '#9fce70',
                    borderWidth: 2,
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'transparent',
                    pointHoverBackgroundColor: '#425e6a',
                    pointHoverBorderColor: '#425e6a',
                    tension: 0,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        ticks: {
                            maxRotation: 0
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            max: 100,
                            min: 0,
                            stepSize: 10
                        }
                    }]
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Average Exam Score Tracked Over Time'
                },
                tooltips: {
                    mode: 'label'
                },
                hover: {
                    mode: 'label'
                }
            }
        });
    })
});
$(function() {
    var $timers = $('.timer .value');
    if ($timers.length) {
        var interval = 0;
        var format = function(total) {
            var hours = Math.floor(total / 3600);
            var minutes = Math.floor((total - (hours * 3600)) / 60);
            var seconds = total - (hours * 3600) - (minutes * 60);

            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            return hours + ':' + minutes + ':' + seconds;
        };
        var increment = function() {
            console.log(interval);
            interval++;
            $.get('/exam/updateTimeSpent/' + $("input[name='questionIndex']").val());
            $timers.each(function() {
                var $value = $(this);
                var original = parseInt($value.data().value, 10);
                $value.html(format(original + interval));
            });
        };
        setInterval(increment, 1000);
    }
});
$(function() {
    $('.show-subjects').change(function() {
        $('.subjects-table').removeClass('hidden');
    });
    $('.hide-subjects').change(function() {
        $('.subjects-table').addClass('hidden');
    });
});
$(function() {
    $('.show-areas').change(function() {
        $('.areas-table').removeClass('hidden');
    });
    $('.hide-areas').change(function() {
        $('.areas-table').addClass('hidden');
        $('.questions-area')[0].checked = false;
        $('.questions-area')[1].checked = false;
        $('.questions-area')[2].checked = false;
    });
});

$(function() {
    $("input[name='dryRun']").click(function (e) {
        var url = "/pb/widgets/digitalQuestion/calculate"; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: $(".create__test__form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                var jsonData = JSON.parse(data);
                if(jsonData.errorMsg) {
                    $("div.error").text(jsonData.errorMsg); // show response from the php script.
                    $("span.result-count").text("");
                }else {
                    $("span.result-count").text(" There are "+jsonData.resultCount+" available questions.");
                    $("div.error").text("");
                }
            }
        });
        e.preventDefault();// avoid to execute the actual submit of the form.
    });
});
function showFigures(element,e){if(!e)var e=$.event;if(!imageSize)var imageSize="medium";initViewer(element,e,imageSize);displayWithEffect('#figureViewer-wrap',e,offClickFigViewer);}
function displayWithEffect(viewerId,e,funct){if(!e)var e=$.event;var n=0;var viewer=$(viewerId);if(!viewer)return;if(viewer.css('display')!='block'){if($("#figureViewer-wrap").height()&&$("#figureViewer-wrap").width()){posY=(($(window).height()-(($("#figureViewer-wrap").height()<590)?590:$("#figureViewer-wrap").height()))/2)+$(document).scrollTop();posX=($(window).width()-(($("#figureViewer-wrap").width()<850)?850:$("#figureViewer-wrap").width()))/2;}
else if(e.clientY&&e.clientX){posY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;posX=e.clientX+document.body.width+document.documentElement.width;}else{posY=$(window).scrollTop()+Math.floor($(window).height()/2);posX=$(window).width()+Math.floor($(window).width()/4);}
$('.overlay-bg').show();$(viewerId).show("slow");if(posY<0){posY=0;}
if(posX<0){posX=0;}
viewer.css("left",posX+"px");viewer.css("top",posY+"px");viewer.mouseSelectionFixed=true;var refViewer=$("#refViewer-wrap");if(refViewer[0]!=null)
refViewer.draggable({cancel:"div#refCanvas"});clearRefLinksFromDialog();}
else{$(viewerId).hide("slow");$('.overlay-bg').hide();}}
function initViewer(element,e,imageSize){if(!window.figureViewer)return false;var fvw=$('#figureViewer-wrap');var figures=window.figureViewer.figures;for(var i=figures.length-1;i>=0;i--){var figureMeta=figures[i];if(!figureMeta||!$(figureMeta.i))figures.splice(i,1);}
if(figures.length==0){window.figureViewer=null;return false;}
if(!fvw.length){var c=$('#container');if(!c.length)
c=$('#pb-page-content');if(c.length){fvw=$(document.createElement("div"));fvw.addClass("overlay-bg");c.append(fvw);fvw=$(document.createElement("div"));fvw.attr('id','figureViewer-wrap');fvw.css("display",'none');c.append(fvw);$(fvw).html('<div id="figureViewer">\
                        <div id="figureViewerNav">\
                            <a title="Close Figure Viewer" href="#" onclick="showFigures(event); return false;" class="close"></a>\
                            <div class="figureNav">\
                                <a class="prev" title="Previous Figure" href="#" class="disabled"></a>\
                                <span id="NavText">Figure <span class="index">1</span> of '+figures.length+'</span>\
                                <a class="next" title="Next Figure" href="#" class="disabled"></a>\
                            </div>\
                        </div>\
                        <div id="figureCanvas">\
                            <div id="figTools">\
                            </div>\
                            <div class="figBox">\
                            </div>\
                            <div class="caption">&nbsp;\
                            </div>\
                            <div id="figureViewer-footer">\
                                <img alt="" src="/templates/jsp/images/figureViewer-bg3.gif"/>\
                            </div>\
                        </div>\
                    </div>');fvw=$(fvw);}}
var index=0;var figureId;var figureElement=$("#"+$(element).closest(".figure").attr("id"));if(figureElement&&figureElement.attr('id')){if(figureElement.attr('id').indexOf('ref-')>-1){figureId=figureElement.attr('id').substring('ref-'.length);}else if(figureElement.attr('id').indexOf('extrafiglink-')>-1){figureId=figureElement.attr('id').substring('extrafiglink-'.length)}else{figureId=figureElement.attr('id')}
while(index<figures.length&&figures[index].i!=figureId)index++;}
showImage(index,imageSize);}
function showImage(index,imageSize){var figures=window.figureViewer.figures;var figureMeta=figures[index];if(!figureMeta)figureMeta=figures[index=0];var graphics=figureMeta.g;var figureElement=$("#"+figureMeta.i);var fvw=$('#figureViewer-wrap');var html="";for(var i=0;i<graphics.length;i++){html+='<img alt="Figure" src="'+window.figureViewer.path+'/images/'+imageSize+'/'+((imageSize=='medium')?graphics[i].m:graphics[i].l)+'"/>';}
$(".figBox",fvw).html(html);var captionElement=$(".caption",figureElement);var cap=$("<div/>");cap.html(captionElement.html());cap.find("a").each(function(){$(this).replaceWith($(this).text());});$(".caption",fvw).html(cap.html());var figureAttributesNotPopulatedYet=$(".attributes",fvw).length>=0;var showFigureAttributes=($("#showFigureAttributes").val()=='true');if(showFigureAttributes&&figureAttributesNotPopulatedYet){var attributesDiv=$(document.createElement("div"));$(attributesDiv).addClass("attributes");var attributesItems=$(".NLM_attrib",figureElement);for(var i=0;i<attributesItems.length;i++){var attributeSpan=$(attributesItems[i]).clone();$(attributesDiv).append(attributeSpan);if(i<attributesItems.length-1){$(attributesDiv).append("<br/>");}}
if($(".attributes",fvw).length>=0){$(".attributes").remove();$(".caption",fvw).after(attributesDiv);}}
$(".caption p",fvw).css("display","block");var pLink=$('.prev',fvw);if(index==0){pLink.addClass("disabled");pLink.attr("href","#");}else{pLink.removeClass("disabled");pLink.attr("href","JavaScript:showImage("+(index-1)+",'"+imageSize+"')");}
index++;var nLink=$('.next',fvw);if(index==figures.length){nLink.addClass("disabled");nLink.attr("href","#");}else{nLink.removeClass("disabled");nLink.attr("href","JavaScript:showImage("+index+",'"+imageSize+"')");}
$('.index',fvw).html(index);var ftHtml='';if(figureMeta.weo){for(var i=0;i<figureMeta.weo.length;i++){var weo=figureMeta.weo[i];if(weo&&weo.h){ftHtml+='<div class="weo"><a title="View this Web Enhanced Object'
if(weo.t){ftHtml+=': '+weo.t;}
ftHtml+='" href="'+weo.h+'" target="_blank"><span>Web Enhanced Object</span></a></div>';}}}
html='';for(var i=0;i<graphics.length;i++){if(graphics[i].l){if(html)html+='<br />';var largerImgCaption=$("#viewLargeImageCaption").length?$("#viewLargeImageCaption").val():"View larger image";html+='<a target=_blank href="'+window.figureViewer.path+'/images/large/'+graphics[i].l+'"><span>'+largerImgCaption+'</span></a>';}}
if(html){ftHtml+='<div class="highRes">'+html+'</div>';}
$('#figureViewer-footer').html(ftHtml);}
offClickFigViewer=function(event,elementId){var target=$(elementId);var fvw=$('#figureViewer-wrap');if(fvw.css("display")!="none"&&target!=fvw){fvw.css("display","none");}};function clearRefLinksFromDialog(){$("#refViewer-wrap a.refNumLink").each(function(){var cont=$(this).contents();$(this).replaceWith(cont);});}
$(document).bind('mouseup.FigureViewer',(function(e){var fvw=$('#figureViewer-wrap');if(!fvw.is(e.target)&&fvw.has(e.target).length===0){fvw.hide("slow");$('.overlay-bg').hide();}}));(function($){$.fn.down=function(){return $(this[0]&&this[0].children&&this[0].children[0]);};})(jQuery);$(window).resize(function(){var n=0;if($("#figureViewer-wrap").is(':visible')){var posY=0;var posX=0;if($("#figureViewer-wrap").height()&&$("#figureViewer-wrap").width()){posY=(($(window).height()-(($("#figureViewer-wrap").height()<590)?590:$("#figureViewer-wrap").height()))/2)+document.body.scrollTop;posX=($(window).width()-(($("#figureViewer-wrap").width()<850)?850:$("#figureViewer-wrap").width()))/2;}
else if(e.clientY&&e.clientX){posY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;posX=e.clientX+document.body.width+document.documentElement.width;}else{posY=$(window).scrollTop()+Math.floor($(window).height()/2);posX=$(window).width()+Math.floor($(window).width()/4);}
$('#figureViewer-wrap').show("slow");$('.overlay-bg').show();if(posY<0){posY=0;}
if(posX<0){posX=0;}
$('#figureViewer-wrap').css("left",posX+"px");$('#figureViewer-wrap').css("top",posY+"px");$('#figureViewer-wrap').mouseSelectionFixed=true;var refViewer=$("#refViewer-wrap");if(refViewer[0]!=null)
refViewer.draggable({cancel:"div#refCanvas"});clearRefLinksFromDialog();}});try{$(document).on("click",'.showFiguresEEvent',function(e){e.preventDefault();showFigures(this,e);return false;});$(document).on("click",'.showFiguresEvent',function(e){e.preventDefault();showFigures(e);return false;});}catch(err){$(document).ready(function(){$(".showFiguresEEvent").click(function(e){e.preventDefault();showFigures(this,e);});$(".showFiguresEvent").click(function(e){e.preventDefault();showFigures(this,e);});});};/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function($){function sc_setScroll(a,b,c){return"transition"==c.transition&&"swing"==b&&(b="ease"),{anims:[],duration:a,orgDuration:a,easing:b,startTime:getTime()}}function sc_startScroll(a,b){for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e&&e[0][b.transition](e[1],a.duration,a.easing,e[2])}}function sc_stopScroll(a,b){is_boolean(b)||(b=!0),is_object(a.pre)&&sc_stopScroll(a.pre,b);for(var c=0,d=a.anims.length;d>c;c++){var e=a.anims[c];e[0].stop(!0),b&&(e[0].css(e[1]),is_function(e[2])&&e[2]())}is_object(a.post)&&sc_stopScroll(a.post,b)}function sc_afterScroll(a,b,c){switch(b&&b.remove(),c.fx){case"fade":case"crossfade":case"cover-fade":case"uncover-fade":a.css("opacity",1),a.css("filter","")}}function sc_fireCallbacks(a,b,c,d,e){if(b[c]&&b[c].call(a,d),e[c].length)for(var f=0,g=e[c].length;g>f;f++)e[c][f].call(a,d);return[]}function sc_fireQueue(a,b,c){return b.length&&(a.trigger(cf_e(b[0][0],c),b[0][1]),b.shift()),b}function sc_hideHiddenItems(a){a.each(function(){var a=$(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function sc_showHiddenItems(a){a&&a.each(function(){var a=$(this);a.data("_cfs_isHidden")||a.show()})}function sc_clearTimers(a){return a.auto&&clearTimeout(a.auto),a.progress&&clearInterval(a.progress),a}function sc_mapCallbackArguments(a,b,c,d,e,f,g){return{width:g.width,height:g.height,items:{old:a,skipped:b,visible:c},scroll:{items:d,direction:e,duration:f}}}function sc_getDuration(a,b,c,d){var e=a.duration;return"none"==a.fx?0:("auto"==e?e=b.scroll.duration/b.scroll.items*c:10>e&&(e=d/e),1>e?0:("fade"==a.fx&&(e/=2),Math.round(e)))}function nv_showNavi(a,b,c){var d=is_number(a.items.minimum)?a.items.minimum:a.items.visible+1;if("show"==b||"hide"==b)var e=b;else if(d>b){debug(c,"Not enough items ("+b+" total, "+d+" needed): Hiding navigation.");var e="hide"}else var e="show";var f="show"==e?"removeClass":"addClass",g=cf_c("hidden",c);a.auto.button&&a.auto.button[e]()[f](g),a.prev.button&&a.prev.button[e]()[f](g),a.next.button&&a.next.button[e]()[f](g),a.pagination.container&&a.pagination.container[e]()[f](g)}function nv_enableNavi(a,b,c){if(!a.circular&&!a.infinite){var d="removeClass"==b||"addClass"==b?b:!1,e=cf_c("disabled",c);if(a.auto.button&&d&&a.auto.button[d](e),a.prev.button){var f=d||0==b?"addClass":"removeClass";a.prev.button[f](e)}if(a.next.button){var f=d||b==a.items.visible?"addClass":"removeClass";a.next.button[f](e)}}}function go_getObject(a,b){return is_function(b)?b=b.call(a):is_undefined(b)&&(b={}),b}function go_getItemsObject(a,b){return b=go_getObject(a,b),is_number(b)?b={visible:b}:"variable"==b?b={visible:b,width:b,height:b}:is_object(b)||(b={}),b}function go_getScrollObject(a,b){return b=go_getObject(a,b),is_number(b)?b=50>=b?{items:b}:{duration:b}:is_string(b)?b={easing:b}:is_object(b)||(b={}),b}function go_getNaviObject(a,b){if(b=go_getObject(a,b),is_string(b)){var c=cf_getKeyCode(b);b=-1==c?$(b):c}return b}function go_getAutoObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_boolean(b)?b={play:b}:is_number(b)&&(b={timeoutDuration:b}),b.progress&&(is_string(b.progress)||is_jquery(b.progress))&&(b.progress={bar:b.progress}),b}function go_complementAutoObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_boolean(b.play)||(b.play=!0),is_number(b.delay)||(b.delay=0),is_undefined(b.pauseOnEvent)&&(b.pauseOnEvent=!0),is_boolean(b.pauseOnResize)||(b.pauseOnResize=!0),is_number(b.timeoutDuration)||(b.timeoutDuration=10>b.duration?2500:5*b.duration),b.progress&&(is_function(b.progress.bar)&&(b.progress.bar=b.progress.bar.call(a)),is_string(b.progress.bar)&&(b.progress.bar=$(b.progress.bar)),b.progress.bar?(is_function(b.progress.updater)||(b.progress.updater=$.fn.carouFredSel.progressbarUpdater),is_number(b.progress.interval)||(b.progress.interval=50)):b.progress=!1),b}function go_getPrevNextObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={button:b}:is_number(b)&&(b={key:b}),b}function go_complementPrevNextObject(a,b){return is_function(b.button)&&(b.button=b.button.call(a)),is_string(b.button)&&(b.button=$(b.button)),is_string(b.key)&&(b.key=cf_getKeyCode(b.key)),b}function go_getPaginationObject(a,b){return b=go_getNaviObject(a,b),is_jquery(b)?b={container:b}:is_boolean(b)&&(b={keys:b}),b}function go_complementPaginationObject(a,b){return is_function(b.container)&&(b.container=b.container.call(a)),is_string(b.container)&&(b.container=$(b.container)),is_number(b.items)||(b.items=!1),is_boolean(b.keys)||(b.keys=!1),is_function(b.anchorBuilder)||is_false(b.anchorBuilder)||(b.anchorBuilder=$.fn.carouFredSel.pageAnchorBuilder),is_number(b.deviation)||(b.deviation=0),b}function go_getSwipeObject(a,b){return is_function(b)&&(b=b.call(a)),is_undefined(b)&&(b={onTouch:!1}),is_true(b)?b={onTouch:b}:is_number(b)&&(b={items:b}),b}function go_complementSwipeObject(a,b){return is_boolean(b.onTouch)||(b.onTouch=!0),is_boolean(b.onMouse)||(b.onMouse=!1),is_object(b.options)||(b.options={}),is_boolean(b.options.triggerOnTouchEnd)||(b.options.triggerOnTouchEnd=!1),b}function go_getMousewheelObject(a,b){return is_function(b)&&(b=b.call(a)),is_true(b)?b={}:is_number(b)?b={items:b}:is_undefined(b)&&(b=!1),b}function go_complementMousewheelObject(a,b){return b}function gn_getItemIndex(a,b,c,d,e){if(is_string(a)&&(a=$(a,e)),is_object(a)&&(a=$(a,e)),is_jquery(a)?(a=e.children().index(a),is_boolean(c)||(c=!1)):is_boolean(c)||(c=!0),is_number(a)||(a=0),is_number(b)||(b=0),c&&(a+=d.first),a+=b,d.total>0){for(;a>=d.total;)a-=d.total;for(;0>a;)a+=d.total}return a}function gn_getVisibleItemsPrev(a,b,c){for(var d=0,e=0,f=c;f>=0;f--){var g=a.eq(f);if(d+=g.is(":visible")?g[b.d.outerWidth](!0):0,d>b.maxDimension)return e;0==f&&(f=a.length),e++}}function gn_getVisibleItemsPrevFilter(a,b,c){return gn_getItemsPrevFilter(a,b.items.filter,b.items.visibleConf.org,c)}function gn_getScrollItemsPrevFilter(a,b,c,d){return gn_getItemsPrevFilter(a,b.items.filter,d,c)}function gn_getItemsPrevFilter(a,b,c,d){for(var e=0,f=0,g=d,h=a.length;g>=0;g--){if(f++,f==h)return f;var i=a.eq(g);if(i.is(b)&&(e++,e==c))return f;0==g&&(g=h)}}function gn_getVisibleOrg(a,b){return b.items.visibleConf.org||a.children().slice(0,b.items.visible).filter(b.items.filter).length}function gn_getVisibleItemsNext(a,b,c){for(var d=0,e=0,f=c,g=a.length-1;g>=f;f++){var h=a.eq(f);if(d+=h.is(":visible")?h[b.d.outerWidth](!0):0,d>b.maxDimension)return e;if(e++,e==g+1)return e;f==g&&(f=-1)}}function gn_getVisibleItemsNextTestCircular(a,b,c,d){var e=gn_getVisibleItemsNext(a,b,c);return b.circular||c+e>d&&(e=d-c),e}function gn_getVisibleItemsNextFilter(a,b,c){return gn_getItemsNextFilter(a,b.items.filter,b.items.visibleConf.org,c,b.circular)}function gn_getScrollItemsNextFilter(a,b,c,d){return gn_getItemsNextFilter(a,b.items.filter,d+1,c,b.circular)-1}function gn_getItemsNextFilter(a,b,c,d){for(var f=0,g=0,h=d,i=a.length-1;i>=h;h++){if(g++,g>=i)return g;var j=a.eq(h);if(j.is(b)&&(f++,f==c))return g;h==i&&(h=-1)}}function gi_getCurrentItems(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsPrev(a,b,c){return a.slice(c,b.items.visibleConf.old+c)}function gi_getNewItemsPrev(a,b){return a.slice(0,b.items.visible)}function gi_getOldItemsNext(a,b){return a.slice(0,b.items.visibleConf.old)}function gi_getNewItemsNext(a,b,c){return a.slice(c,b.items.visible+c)}function sz_storeMargin(a,b,c){b.usePadding&&(is_string(c)||(c="_cfs_origCssMargin"),a.each(function(){var a=$(this),d=parseInt(a.css(b.d.marginRight),10);is_number(d)||(d=0),a.data(c,d)}))}function sz_resetMargin(a,b,c){if(b.usePadding){var d=is_boolean(c)?c:!1;is_number(c)||(c=0),sz_storeMargin(a,b,"_cfs_tempCssMargin"),a.each(function(){var a=$(this);a.css(b.d.marginRight,d?a.data("_cfs_tempCssMargin"):c+a.data("_cfs_origCssMargin"))})}}function sz_storeOrigCss(a){a.each(function(){var a=$(this);a.data("_cfs_origCss",a.attr("style")||"")})}function sz_restoreOrigCss(a){a.each(function(){var a=$(this);a.attr("style",a.data("_cfs_origCss")||"")})}function sz_setResponsiveSizes(a,b){var d=(a.items.visible,a.items[a.d.width]),e=a[a.d.height],f=is_percentage(e);b.each(function(){var b=$(this),c=d-ms_getPaddingBorderMargin(b,a,"Width");b[a.d.width](c),f&&b[a.d.height](ms_getPercentage(c,e))})}function sz_setSizes(a,b){var c=a.parent(),d=a.children(),e=gi_getCurrentItems(d,b),f=cf_mapWrapperSizes(ms_getSizes(e,b,!0),b,!1);if(c.css(f),b.usePadding){var g=b.padding,h=g[b.d[1]];b.align&&0>h&&(h=0);var i=e.last();i.css(b.d.marginRight,i.data("_cfs_origCssMargin")+h),a.css(b.d.top,g[b.d[0]]),a.css(b.d.left,g[b.d[3]])}return a.css(b.d.width,f[b.d.width]+2*ms_getTotalSize(d,b,"width")),a.css(b.d.height,ms_getLargestSize(d,b,"height")),f}function ms_getSizes(a,b,c){return[ms_getTotalSize(a,b,"width",c),ms_getLargestSize(a,b,"height",c)]}function ms_getLargestSize(a,b,c,d){return is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d?b[b.d[c]]:is_number(b.items[b.d[c]])?b.items[b.d[c]]:(c=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",ms_getTrueLargestSize(a,b,c))}function ms_getTrueLargestSize(a,b,c){for(var d=0,e=0,f=a.length;f>e;e++){var g=a.eq(e),h=g.is(":visible")?g[b.d[c]](!0):0;h>d&&(d=h)}return d}function ms_getTotalSize(a,b,c,d){if(is_boolean(d)||(d=!1),is_number(b[b.d[c]])&&d)return b[b.d[c]];if(is_number(b.items[b.d[c]]))return b.items[b.d[c]]*a.length;for(var e=c.toLowerCase().indexOf("width")>-1?"outerWidth":"outerHeight",f=0,g=0,h=a.length;h>g;g++){var i=a.eq(g);f+=i.is(":visible")?i[b.d[e]](!0):0}return f}function ms_getParentSize(a,b,c){var d=a.is(":visible");d&&a.hide();var e=a.parent()[b.d[c]]();return d&&a.show(),e}function ms_getMaxDimension(a,b){return is_number(a[a.d.width])?a[a.d.width]:b}function ms_hasVariableSizes(a,b,c){for(var d=!1,e=!1,f=0,g=a.length;g>f;f++){var h=a.eq(f),i=h.is(":visible")?h[b.d[c]](!0):0;d===!1?d=i:d!=i&&(e=!0),0==d&&(e=!0)}return e}function ms_getPaddingBorderMargin(a,b,c){return a[b.d["outer"+c]](!0)-a[b.d[c.toLowerCase()]]()}function ms_getPercentage(a,b){if(is_percentage(b)){if(b=parseInt(b.slice(0,-1),10),!is_number(b))return a;a*=b/100}return a}function cf_e(a,b,c,d,e){return is_boolean(c)||(c=!0),is_boolean(d)||(d=!0),is_boolean(e)||(e=!1),c&&(a=b.events.prefix+a),d&&(a=a+"."+b.events.namespace),d&&e&&(a+=b.serialNumber),a}function cf_c(a,b){return is_string(b.classnames[a])?b.classnames[a]:a}function cf_mapWrapperSizes(a,b,c){is_boolean(c)||(c=!0);var d=b.usePadding&&c?b.padding:[0,0,0,0],e={};return e[b.d.width]=a[0]+d[1]+d[3],e[b.d.height]=a[1]+d[0]+d[2],e}function cf_sortParams(a,b){for(var c=[],d=0,e=a.length;e>d;d++)for(var f=0,g=b.length;g>f;f++)if(b[f].indexOf(typeof a[d])>-1&&is_undefined(c[f])){c[f]=a[d];break}return c}function cf_getPadding(a){if(is_undefined(a))return[0,0,0,0];if(is_number(a))return[a,a,a,a];if(is_string(a)&&(a=a.split("px").join("").split("em").join("").split(" ")),!is_array(a))return[0,0,0,0];for(var b=0;4>b;b++)a[b]=parseInt(a[b],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function cf_getAlignPadding(a,b){var c=is_number(b[b.d.width])?Math.ceil(b[b.d.width]-ms_getTotalSize(a,b,"width")):0;switch(b.align){case"left":return[0,c];case"right":return[c,0];case"center":default:return[Math.ceil(c/2),Math.floor(c/2)]}}function cf_getDimensions(a){for(var b=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],c=b[0].length,d="right"==a.direction||"left"==a.direction?0:1,e={},f=0;c>f;f++)e[b[0][f]]=b[d][f];return e}function cf_getAdjust(a,b,c,d){var e=a;if(is_function(c))e=c.call(d,e);else if(is_string(c)){var f=c.split("+"),g=c.split("-");if(g.length>f.length)var h=!0,i=g[0],j=g[1];else var h=!1,i=f[0],j=f[1];switch(i){case"even":e=1==a%2?a-1:a;break;case"odd":e=0==a%2?a-1:a;break;default:e=a}j=parseInt(j,10),is_number(j)&&(h&&(j=-j),e+=j)}return(!is_number(e)||1>e)&&(e=1),e}function cf_getItemsAdjust(a,b,c,d){return cf_getItemAdjustMinMax(cf_getAdjust(a,b,c,d),b.items.visibleConf)}function cf_getItemAdjustMinMax(a,b){return is_number(b.min)&&b.min>a&&(a=b.min),is_number(b.max)&&a>b.max&&(a=b.max),1>a&&(a=1),a}function cf_getSynchArr(a){is_array(a)||(a=[[a]]),is_array(a[0])||(a=[a]);for(var b=0,c=a.length;c>b;b++)is_string(a[b][0])&&(a[b][0]=$(a[b][0])),is_boolean(a[b][1])||(a[b][1]=!0),is_boolean(a[b][2])||(a[b][2]=!0),is_number(a[b][3])||(a[b][3]=0);return a}function cf_getKeyCode(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function cf_setCookie(a,b,c){if(a){var d=b.triggerHandler(cf_e("currentPosition",c));$.fn.carouFredSel.cookie.set(a,d)}}function cf_getCookie(a){var b=$.fn.carouFredSel.cookie.get(a);return""==b?0:b}function in_mapCss(a,b){for(var c={},d=0,e=b.length;e>d;d++)c[b[d]]=a.css(b[d]);return c}function in_complementItems(a,b,c,d){return is_object(a.visibleConf)||(a.visibleConf={}),is_object(a.sizesConf)||(a.sizesConf={}),0==a.start&&is_number(d)&&(a.start=d),is_object(a.visible)?(a.visibleConf.min=a.visible.min,a.visibleConf.max=a.visible.max,a.visible=!1):is_string(a.visible)?("variable"==a.visible?a.visibleConf.variable=!0:a.visibleConf.adjust=a.visible,a.visible=!1):is_function(a.visible)&&(a.visibleConf.adjust=a.visible,a.visible=!1),is_string(a.filter)||(a.filter=c.filter(":hidden").length>0?":visible":"*"),a[b.d.width]||(b.responsive?(debug(!0,"Set a "+b.d.width+" for the items!"),a[b.d.width]=ms_getTrueLargestSize(c,b,"outerWidth")):a[b.d.width]=ms_hasVariableSizes(c,b,"outerWidth")?"variable":c[b.d.outerWidth](!0)),a[b.d.height]||(a[b.d.height]=ms_hasVariableSizes(c,b,"outerHeight")?"variable":c[b.d.outerHeight](!0)),a.sizesConf.width=a.width,a.sizesConf.height=a.height,a}function in_complementVisibleItems(a,b){return"variable"==a.items[a.d.width]&&(a.items.visibleConf.variable=!0),a.items.visibleConf.variable||(is_number(a[a.d.width])?a.items.visible=Math.floor(a[a.d.width]/a.items[a.d.width]):(a.items.visible=Math.floor(b/a.items[a.d.width]),a[a.d.width]=a.items.visible*a.items[a.d.width],a.items.visibleConf.adjust||(a.align=!1)),("Infinity"==a.items.visible||1>a.items.visible)&&(debug(!0,'Not a valid number of visible items: Set to "variable".'),a.items.visibleConf.variable=!0)),a}function in_complementPrimarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerWidth")),a}function in_complementSecondarySize(a,b,c){return"auto"==a&&(a=ms_getTrueLargestSize(c,b,"outerHeight")),a||(a=b.items[b.d.height]),a}function in_getAlignPadding(a,b){var c=cf_getAlignPadding(gi_getCurrentItems(b,a),a);return a.padding[a.d[1]]=c[1],a.padding[a.d[3]]=c[0],a}function in_getResponsiveValues(a,b){var d=cf_getItemAdjustMinMax(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>b.length&&(d=b.length);var e=Math.floor(a[a.d.width]/d);return a.items.visible=d,a.items[a.d.width]=e,a[a.d.width]=d*e,a}function bt_pauseOnHoverConfig(a){if(is_string(a))var b=a.indexOf("immediate")>-1?!0:!1,c=a.indexOf("resume")>-1?!0:!1;else var b=c=!1;return[b,c]}function bt_mousesheelNumber(a){return is_number(a)?a:null}function is_null(a){return null===a}function is_undefined(a){return is_null(a)||a===void 0||""===a||"undefined"===a}function is_array(a){return a instanceof Array}function is_jquery(a){return a instanceof jQuery}function is_object(a){return(a instanceof Object||"object"==typeof a)&&!is_null(a)&&!is_jquery(a)&&!is_array(a)&&!is_function(a)}function is_number(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function is_string(a){return(a instanceof String||"string"==typeof a)&&!is_undefined(a)&&!is_true(a)&&!is_false(a)}function is_function(a){return a instanceof Function||"function"==typeof a}function is_boolean(a){return a instanceof Boolean||"boolean"==typeof a||is_true(a)||is_false(a)}function is_true(a){return a===!0||"true"===a}function is_false(a){return a===!1||"false"===a}function is_percentage(a){return is_string(a)&&"%"==a.slice(-1)}function getTime(){return(new Date).getTime()}function deprecated(a,b){debug(!0,a+" is DEPRECATED, support for it will be removed. Use "+b+" instead.")}function debug(a,b){if(!is_undefined(window.console)&&!is_undefined(window.console.log)){if(is_object(a)){var c=" ("+a.selector+")";a=a.debug}else var c="";if(!a)return!1;b=is_string(b)?"carouFredSel"+c+": "+b:["carouFredSel"+c+":",b],window.console.log(b)}return!1}$.fn.carouFredSel||($.fn.caroufredsel=$.fn.carouFredSel=function(options,configs){if(0==this.length)return debug(!0,'No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){$(this).carouFredSel(options,configs)});var $cfs=this,$tt0=this[0],starting_position=!1;$cfs.data("_cfs_isCarousel")&&(starting_position=$cfs.triggerHandler("_cfs_triggerEvent","currentPosition"),$cfs.trigger("_cfs_triggerEvent",["destroy",!0]));var FN={};FN._init=function(a,b,c){a=go_getObject($tt0,a),a.items=go_getItemsObject($tt0,a.items),a.scroll=go_getScrollObject($tt0,a.scroll),a.auto=go_getAutoObject($tt0,a.auto),a.prev=go_getPrevNextObject($tt0,a.prev),a.next=go_getPrevNextObject($tt0,a.next),a.pagination=go_getPaginationObject($tt0,a.pagination),a.swipe=go_getSwipeObject($tt0,a.swipe),a.mousewheel=go_getMousewheelObject($tt0,a.mousewheel),b&&(opts_orig=$.extend(!0,{},$.fn.carouFredSel.defaults,a)),opts=$.extend(!0,{},$.fn.carouFredSel.defaults,a),opts.d=cf_getDimensions(opts),crsl.direction="up"==opts.direction||"left"==opts.direction?"next":"prev";var d=$cfs.children(),e=ms_getParentSize($wrp,opts,"width");if(is_true(opts.cookie)&&(opts.cookie="caroufredsel_cookie_"+conf.serialNumber),opts.maxDimension=ms_getMaxDimension(opts,e),opts.items=in_complementItems(opts.items,opts,d,c),opts[opts.d.width]=in_complementPrimarySize(opts[opts.d.width],opts,d),opts[opts.d.height]=in_complementSecondarySize(opts[opts.d.height],opts,d),opts.responsive&&(is_percentage(opts[opts.d.width])||(opts[opts.d.width]="100%")),is_percentage(opts[opts.d.width])&&(crsl.upDateOnWindowResize=!0,crsl.primarySizePercentage=opts[opts.d.width],opts[opts.d.width]=ms_getPercentage(e,crsl.primarySizePercentage),opts.items.visible||(opts.items.visibleConf.variable=!0)),opts.responsive?(opts.usePadding=!1,opts.padding=[0,0,0,0],opts.align=!1,opts.items.visibleConf.variable=!1):(opts.items.visible||(opts=in_complementVisibleItems(opts,e)),opts[opts.d.width]||(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d.width])&&"*"==opts.items.filter?(opts[opts.d.width]=opts.items.visible*opts.items[opts.d.width],opts.align=!1):opts[opts.d.width]="variable"),is_undefined(opts.align)&&(opts.align=is_number(opts[opts.d.width])?"center":!1),opts.items.visibleConf.variable&&(opts.items.visible=gn_getVisibleItemsNext(d,opts,0))),"*"==opts.items.filter||opts.items.visibleConf.variable||(opts.items.visibleConf.org=opts.items.visible,opts.items.visible=gn_getVisibleItemsNextFilter(d,opts,0)),opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts.responsive)opts.items.visibleConf.min||(opts.items.visibleConf.min=opts.items.visible),opts.items.visibleConf.max||(opts.items.visibleConf.max=opts.items.visible),opts=in_getResponsiveValues(opts,d,e);else switch(opts.padding=cf_getPadding(opts.padding),"top"==opts.align?opts.align="left":"bottom"==opts.align&&(opts.align="right"),opts.align){case"center":case"left":case"right":"variable"!=opts[opts.d.width]&&(opts=in_getAlignPadding(opts,d),opts.usePadding=!0);break;default:opts.align=!1,opts.usePadding=0==opts.padding[0]&&0==opts.padding[1]&&0==opts.padding[2]&&0==opts.padding[3]?!1:!0}is_number(opts.scroll.duration)||(opts.scroll.duration=500),is_undefined(opts.scroll.items)&&(opts.scroll.items=opts.responsive||opts.items.visibleConf.variable||"*"!=opts.items.filter?"visible":opts.items.visible),opts.auto=$.extend(!0,{},opts.scroll,opts.auto),opts.prev=$.extend(!0,{},opts.scroll,opts.prev),opts.next=$.extend(!0,{},opts.scroll,opts.next),opts.pagination=$.extend(!0,{},opts.scroll,opts.pagination),opts.auto=go_complementAutoObject($tt0,opts.auto),opts.prev=go_complementPrevNextObject($tt0,opts.prev),opts.next=go_complementPrevNextObject($tt0,opts.next),opts.pagination=go_complementPaginationObject($tt0,opts.pagination),opts.swipe=go_complementSwipeObject($tt0,opts.swipe),opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel),opts.synchronise&&(opts.synchronise=cf_getSynchArr(opts.synchronise)),opts.auto.onPauseStart&&(opts.auto.onTimeoutStart=opts.auto.onPauseStart,deprecated("auto.onPauseStart","auto.onTimeoutStart")),opts.auto.onPausePause&&(opts.auto.onTimeoutPause=opts.auto.onPausePause,deprecated("auto.onPausePause","auto.onTimeoutPause")),opts.auto.onPauseEnd&&(opts.auto.onTimeoutEnd=opts.auto.onPauseEnd,deprecated("auto.onPauseEnd","auto.onTimeoutEnd")),opts.auto.pauseDuration&&(opts.auto.timeoutDuration=opts.auto.pauseDuration,deprecated("auto.pauseDuration","auto.timeoutDuration"))},FN._build=function(){$cfs.data("_cfs_isCarousel",!0);var a=$cfs.children(),b=in_mapCss($cfs,["textAlign","float","position","top","right","bottom","left","zIndex","width","height","marginTop","marginRight","marginBottom","marginLeft"]),c="relative";switch(b.position){case"absolute":case"fixed":c=b.position}"parent"==conf.wrapper?sz_storeOrigCss($wrp):$wrp.css(b),$wrp.css({overflow:"hidden",position:c}),sz_storeOrigCss($cfs),$cfs.data("_cfs_origCssZindex",b.zIndex),$cfs.css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),sz_storeMargin(a,opts),sz_storeOrigCss(a),opts.responsive&&sz_setResponsiveSizes(opts,a)},FN._bind_events=function(){FN._unbind_events(),$cfs.bind(cf_e("stop",conf),function(a,b){return a.stopPropagation(),crsl.isStopped||opts.auto.button&&opts.auto.button.addClass(cf_c("stopped",conf)),crsl.isStopped=!0,opts.auto.play&&(opts.auto.play=!1,$cfs.trigger(cf_e("pause",conf),b)),!0}),$cfs.bind(cf_e("finish",conf),function(a){return a.stopPropagation(),crsl.isScrolling&&sc_stopScroll(scrl),!0}),$cfs.bind(cf_e("pause",conf),function(a,b,c){if(a.stopPropagation(),tmrs=sc_clearTimers(tmrs),b&&crsl.isScrolling){scrl.isStopped=!0;var d=getTime()-scrl.startTime;scrl.duration-=d,scrl.pre&&(scrl.pre.duration-=d),scrl.post&&(scrl.post.duration-=d),sc_stopScroll(scrl,!1)}if(crsl.isPaused||crsl.isScrolling||c&&(tmrs.timePassed+=getTime()-tmrs.startTime),crsl.isPaused||opts.auto.button&&opts.auto.button.addClass(cf_c("paused",conf)),crsl.isPaused=!0,opts.auto.onTimeoutPause){var e=opts.auto.timeoutDuration-tmrs.timePassed,f=100-Math.ceil(100*e/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,f,e)}return!0}),$cfs.bind(cf_e("play",conf),function(a,b,c,d){a.stopPropagation(),tmrs=sc_clearTimers(tmrs);var e=[b,c,d],f=["string","number","boolean"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],"prev"!=b&&"next"!=b&&(b=crsl.direction),is_number(c)||(c=0),is_boolean(d)||(d=!1),d&&(crsl.isStopped=!1,opts.auto.play=!0),!opts.auto.play)return a.stopImmediatePropagation(),debug(conf,"Carousel stopped: Not scrolling.");crsl.isPaused&&opts.auto.button&&(opts.auto.button.removeClass(cf_c("stopped",conf)),opts.auto.button.removeClass(cf_c("paused",conf))),crsl.isPaused=!1,tmrs.startTime=getTime();var h=opts.auto.timeoutDuration+c;return dur2=h-tmrs.timePassed,perc=100-Math.ceil(100*dur2/h),opts.auto.progress&&(tmrs.progress=setInterval(function(){var a=getTime()-tmrs.startTime+tmrs.timePassed,b=Math.ceil(100*a/h);opts.auto.progress.updater.call(opts.auto.progress.bar[0],b)},opts.auto.progress.interval)),tmrs.auto=setTimeout(function(){opts.auto.progress&&opts.auto.progress.updater.call(opts.auto.progress.bar[0],100),opts.auto.onTimeoutEnd&&opts.auto.onTimeoutEnd.call($tt0,perc,dur2),crsl.isScrolling?$cfs.trigger(cf_e("play",conf),b):$cfs.trigger(cf_e(b,conf),opts.auto)},dur2),opts.auto.onTimeoutStart&&opts.auto.onTimeoutStart.call($tt0,perc,dur2),!0}),$cfs.bind(cf_e("resume",conf),function(a){return a.stopPropagation(),scrl.isStopped?(scrl.isStopped=!1,crsl.isPaused=!1,crsl.isScrolling=!0,scrl.startTime=getTime(),sc_startScroll(scrl,conf)):$cfs.trigger(cf_e("play",conf)),!0}),$cfs.bind(cf_e("prev",conf)+" "+cf_e("next",conf),function(a,b,c,d,e){if(a.stopPropagation(),crsl.isStopped||$cfs.is(":hidden"))return a.stopImmediatePropagation(),debug(conf,"Carousel stopped or hidden: Not scrolling.");var f=is_number(opts.items.minimum)?opts.items.minimum:opts.items.visible+1;if(f>itms.total)return a.stopImmediatePropagation(),debug(conf,"Not enough items ("+itms.total+" total, "+f+" needed): Not scrolling.");var g=[b,c,d,e],h=["object","number/string","function","boolean"],i=cf_sortParams(g,h);b=i[0],c=i[1],d=i[2],e=i[3];var j=a.type.slice(conf.events.prefix.length);if(is_object(b)||(b={}),is_function(d)&&(b.onAfter=d),is_boolean(e)&&(b.queue=e),b=$.extend(!0,{},opts[j],b),b.conditions&&!b.conditions.call($tt0,j))return a.stopImmediatePropagation(),debug(conf,'Callback "conditions" returned false.');if(!is_number(c)){if("*"!=opts.items.filter)c="visible";else for(var k=[c,b.items,opts[j].items],i=0,l=k.length;l>i;i++)if(is_number(k[i])||"page"==k[i]||"visible"==k[i]){c=k[i];break}switch(c){case"page":return a.stopImmediatePropagation(),$cfs.triggerHandler(cf_e(j+"Page",conf),[b,d]);case"visible":opts.items.visibleConf.variable||"*"!=opts.items.filter||(c=opts.items.visible)}}if(scrl.isStopped)return $cfs.trigger(cf_e("resume",conf)),$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]]),a.stopImmediatePropagation(),debug(conf,"Carousel resumed scrolling.");if(b.duration>0&&crsl.isScrolling)return b.queue&&("last"==b.queue&&(queu=[]),("first"!=b.queue||0==queu.length)&&$cfs.trigger(cf_e("queue",conf),[j,[b,c,d]])),a.stopImmediatePropagation(),debug(conf,"Carousel currently scrolling.");if(tmrs.timePassed=0,$cfs.trigger(cf_e("slide_"+j,conf),[b,c]),opts.synchronise)for(var m=opts.synchronise,n=[b,c],o=0,l=m.length;l>o;o++){var p=j;m[o][2]||(p="prev"==p?"next":"prev"),m[o][1]||(n[0]=m[o][0].triggerHandler("_cfs_triggerEvent",["configuration",p])),n[1]=c+m[o][3],m[o][0].trigger("_cfs_triggerEvent",["slide_"+p,n])}return!0}),$cfs.bind(cf_e("slide_prev",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&0==itms.first)return opts.infinite&&$cfs.trigger(cf_e("next",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if(opts.items.visibleConf.variable)c=gn_getVisibleItemsPrev(d,opts,itms.total-1);else if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsPrevFilter(d,opts,itms.total-1,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}if(opts.circular||itms.total-c<itms.first&&(c=itms.total-itms.first),opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){var f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0);f>=opts.items.visible+c&&itms.total>c&&(c++,f=cf_getItemsAdjust(gn_getVisibleItemsNext(d,opts,itms.total-c),opts,opts.items.visibleConf.adjust,$tt0)),opts.items.visible=f}else if("*"!=opts.items.filter){var f=gn_getVisibleItemsNextFilter(d,opts,itms.total-c);opts.items.visible=cf_getItemsAdjust(f,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items backward."),itms.first+=c;itms.first>=itms.total;)itms.first-=itms.total;opts.circular||(0==itms.first&&b.onEnd&&b.onEnd.call($tt0,"prev"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),$cfs.children().slice(itms.total-c,itms.total).prependTo($cfs),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),g=gi_getOldItemsPrev(d,opts,c),h=gi_getNewItemsPrev(d,opts),i=d.eq(c-1),j=g.last(),k=h.last();sz_resetMargin(d,opts);var l=0,m=0;if(opts.align){var n=cf_getAlignPadding(h,opts);l=n[0],m=n[1]}var o=0>l?opts.padding[opts.d[3]]:0,p=!1,q=$();if(c>opts.items.visible&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,i=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(h,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B={},C={},D=sc_getDuration(b,opts,c,t);switch(b.fx){case"cover":case"cover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visible),opts,"width")}p&&(opts.items[opts.d.width]=r),sz_resetMargin(d,opts,!0),m>=0&&sz_resetMargin(j,opts,opts.padding[opts.d[1]]),l>=0&&sz_resetMargin(i,opts,opts.padding[opts.d[3]]),opts.align&&(opts.padding[opts.d[1]]=m,opts.padding[opts.d[3]]=l),B[opts.d.left]=-(t-o),C[opts.d.left]=-(v-o),x[opts.d.left]=u[opts.d.width];var E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){},L=function(){},M=function(){},N=function(){},O=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp)}switch(b.fx){case"crossfade":case"uncover":case"uncover-fade":s.children().slice(0,c).remove(),s.children().slice(opts.items.visibleConf.old).remove();break;case"cover":case"cover-fade":s.children().slice(opts.items.visible).remove(),s.css(C)}if($cfs.css(B),scrl=sc_setScroll(D,b.easing,conf),w[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0,("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(E=function(){$wrp.css(u)},F=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){switch(k.not(i).length&&(y[opts.d.marginRight]=i.data("_cfs_origCssMargin"),0>l?i.css(y):(K=function(){i.css(y)},L=function(){scrl.anims.push([i,y])})),b.fx){case"cover":case"cover-fade":s.children().eq(c-1).css(y)}k.not(j).length&&(z[opts.d.marginRight]=j.data("_cfs_origCssMargin"),G=function(){j.css(z)},H=function(){scrl.anims.push([j,z])}),m>=0&&(A[opts.d.marginRight]=k.data("_cfs_origCssMargin")+opts.padding[opts.d[1]],I=function(){k.css(A)},J=function(){scrl.anims.push([k,A])})}O=function(){$cfs.css(w)};var P=opts.items.visible+c-itms.total;N=function(){if(P>0&&($cfs.children().slice(itms.total).remove(),g=$($cfs.children().slice(itms.total-(opts.items.visible-P)).get().concat($cfs.children().slice(0,P).get()))),sc_showHiddenItems(p),opts.usePadding){var a=$cfs.children().eq(opts.items.visible+c-1);a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var Q=sc_mapCallbackArguments(g,q,h,c,"prev",D,u);switch(M=function(){sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",Q,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",Q,clbk),b.fx){case"none":$cfs.css(w),E(),G(),I(),K(),O(),N(),M();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){E(),G(),I(),K(),O(),N(),scrl=sc_setScroll(D,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},M]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},M]),F(),G(),I(),K(),O(),N();break;case"cover":scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"cover-fade":scrl.anims.push([$cfs,{opacity:0}]),scrl.anims.push([s,w,function(){G(),I(),K(),O(),N(),M()}]),F();break;case"uncover":scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,M]),F(),G(),I(),K(),O(),N();break;default:scrl.anims.push([$cfs,w,function(){N(),M()}]),F(),H(),J(),L()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0
}),$cfs.bind(cf_e("slide_next",conf),function(a,b,c){a.stopPropagation();var d=$cfs.children();if(!opts.circular&&itms.first==opts.items.visible)return opts.infinite&&$cfs.trigger(cf_e("prev",conf),itms.total-1),a.stopImmediatePropagation();if(sz_resetMargin(d,opts),!is_number(c)){if("*"!=opts.items.filter){var e=is_number(b.items)?b.items:gn_getVisibleOrg($cfs,opts);c=gn_getScrollItemsNextFilter(d,opts,0,e)}else c=opts.items.visible;c=cf_getAdjust(c,opts,b.items,$tt0)}var f=0==itms.first?itms.total:itms.first;if(!opts.circular){if(opts.items.visibleConf.variable)var g=gn_getVisibleItemsNext(d,opts,c),e=gn_getVisibleItemsPrev(d,opts,f-1);else var g=opts.items.visible,e=opts.items.visible;c+g>f&&(c=f-e)}if(opts.items.visibleConf.old=opts.items.visible,opts.items.visibleConf.variable){for(var g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible-c>=g&&itms.total>c;)c++,g=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d,opts,c,f),opts,opts.items.visibleConf.adjust,$tt0);opts.items.visible=g}else if("*"!=opts.items.filter){var g=gn_getVisibleItemsNextFilter(d,opts,c);opts.items.visible=cf_getItemsAdjust(g,opts,opts.items.visibleConf.adjust,$tt0)}if(sz_resetMargin(d,opts,!0),0==c)return a.stopImmediatePropagation(),debug(conf,"0 items to scroll: Not scrolling.");for(debug(conf,"Scrolling "+c+" items forward."),itms.first-=c;0>itms.first;)itms.first+=itms.total;opts.circular||(itms.first==opts.items.visible&&b.onEnd&&b.onEnd.call($tt0,"next"),opts.infinite||nv_enableNavi(opts,itms.first,conf)),itms.total<opts.items.visible+c&&$cfs.children().slice(0,opts.items.visible+c-itms.total).clone(!0).appendTo($cfs);var d=$cfs.children(),h=gi_getOldItemsNext(d,opts),i=gi_getNewItemsNext(d,opts,c),j=d.eq(c-1),k=h.last(),l=i.last();sz_resetMargin(d,opts);var m=0,n=0;if(opts.align){var o=cf_getAlignPadding(i,opts);m=o[0],n=o[1]}var p=!1,q=$();if(c>opts.items.visibleConf.old&&(q=d.slice(opts.items.visibleConf.old,c),"directscroll"==b.fx)){var r=opts.items[opts.d.width];p=q,j=k,sc_hideHiddenItems(p),opts.items[opts.d.width]="variable"}var s=!1,t=ms_getTotalSize(d.slice(0,c),opts,"width"),u=cf_mapWrapperSizes(ms_getSizes(i,opts,!0),opts,!opts.usePadding),v=0,w={},x={},y={},z={},A={},B=sc_getDuration(b,opts,c,t);switch(b.fx){case"uncover":case"uncover-fade":v=ms_getTotalSize(d.slice(0,opts.items.visibleConf.old),opts,"width")}p&&(opts.items[opts.d.width]=r),opts.align&&0>opts.padding[opts.d[1]]&&(opts.padding[opts.d[1]]=0),sz_resetMargin(d,opts,!0),sz_resetMargin(k,opts,opts.padding[opts.d[1]]),opts.align&&(opts.padding[opts.d[1]]=n,opts.padding[opts.d[3]]=m),A[opts.d.left]=opts.usePadding?opts.padding[opts.d[3]]:0;var C=function(){},D=function(){},E=function(){},F=function(){},G=function(){},H=function(){},I=function(){},J=function(){},K=function(){};switch(b.fx){case"crossfade":case"cover":case"cover-fade":case"uncover":case"uncover-fade":s=$cfs.clone(!0).appendTo($wrp),s.children().slice(opts.items.visibleConf.old).remove()}switch(b.fx){case"crossfade":case"cover":case"cover-fade":$cfs.css("zIndex",1),s.css("zIndex",0)}if(scrl=sc_setScroll(B,b.easing,conf),w[opts.d.left]=-t,x[opts.d.left]=-v,0>m&&(w[opts.d.left]+=m),("variable"==opts[opts.d.width]||"variable"==opts[opts.d.height])&&(C=function(){$wrp.css(u)},D=function(){scrl.anims.push([$wrp,u])}),opts.usePadding){var L=l.data("_cfs_origCssMargin");n>=0&&(L+=opts.padding[opts.d[1]]),l.css(opts.d.marginRight,L),j.not(k).length&&(z[opts.d.marginRight]=k.data("_cfs_origCssMargin")),E=function(){k.css(z)},F=function(){scrl.anims.push([k,z])};var M=j.data("_cfs_origCssMargin");m>0&&(M+=opts.padding[opts.d[3]]),y[opts.d.marginRight]=M,G=function(){j.css(y)},H=function(){scrl.anims.push([j,y])}}K=function(){$cfs.css(A)};var N=opts.items.visible+c-itms.total;J=function(){N>0&&$cfs.children().slice(itms.total).remove();var a=$cfs.children().slice(0,c).appendTo($cfs).last();if(N>0&&(i=gi_getCurrentItems(d,opts)),sc_showHiddenItems(p),opts.usePadding){if(itms.total<opts.items.visible+c){var b=$cfs.children().eq(opts.items.visible-1);b.css(opts.d.marginRight,b.data("_cfs_origCssMargin")+opts.padding[opts.d[1]])}a.css(opts.d.marginRight,a.data("_cfs_origCssMargin"))}};var O=sc_mapCallbackArguments(h,q,i,c,"next",B,u);switch(I=function(){$cfs.css("zIndex",$cfs.data("_cfs_origCssZindex")),sc_afterScroll($cfs,s,b),crsl.isScrolling=!1,clbk.onAfter=sc_fireCallbacks($tt0,b,"onAfter",O,clbk),queu=sc_fireQueue($cfs,queu,conf),crsl.isPaused||$cfs.trigger(cf_e("play",conf))},crsl.isScrolling=!0,tmrs=sc_clearTimers(tmrs),clbk.onBefore=sc_fireCallbacks($tt0,b,"onBefore",O,clbk),b.fx){case"none":$cfs.css(w),C(),E(),G(),K(),J(),I();break;case"fade":scrl.anims.push([$cfs,{opacity:0},function(){C(),E(),G(),K(),J(),scrl=sc_setScroll(B,b.easing,conf),scrl.anims.push([$cfs,{opacity:1},I]),sc_startScroll(scrl,conf)}]);break;case"crossfade":$cfs.css({opacity:0}),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,{opacity:1},I]),D(),E(),G(),K(),J();break;case"cover":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"cover-fade":$cfs.css(opts.d.left,$wrp[opts.d.width]()),scrl.anims.push([s,{opacity:0}]),scrl.anims.push([$cfs,A,I]),D(),E(),G(),J();break;case"uncover":scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;case"uncover-fade":$cfs.css({opacity:0}),scrl.anims.push([$cfs,{opacity:1}]),scrl.anims.push([s,x,I]),D(),E(),G(),K(),J();break;default:scrl.anims.push([$cfs,w,function(){K(),J(),I()}]),D(),F(),H()}return sc_startScroll(scrl,conf),cf_setCookie(opts.cookie,$cfs,conf),$cfs.trigger(cf_e("updatePageStatus",conf),[!1,u]),!0}),$cfs.bind(cf_e("slideTo",conf),function(a,b,c,d,e,f,g){a.stopPropagation();var h=[b,c,d,e,f,g],i=["string/number/object","number","boolean","object","string","function"],j=cf_sortParams(h,i);return e=j[3],f=j[4],g=j[5],b=gn_getItemIndex(j[0],j[1],j[2],itms,$cfs),0==b?!1:(is_object(e)||(e=!1),"prev"!=f&&"next"!=f&&(f=opts.circular?itms.total/2>=b?"next":"prev":0==itms.first||itms.first>b?"next":"prev"),"prev"==f&&(b=itms.total-b),$cfs.trigger(cf_e(f,conf),[e,b,g]),!0)}),$cfs.bind(cf_e("prevPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d-1,b,"prev",c])}),$cfs.bind(cf_e("nextPage",conf),function(a,b,c){a.stopPropagation();var d=$cfs.triggerHandler(cf_e("currentPage",conf));return $cfs.triggerHandler(cf_e("slideToPage",conf),[d+1,b,"next",c])}),$cfs.bind(cf_e("slideToPage",conf),function(a,b,c,d,e){a.stopPropagation(),is_number(b)||(b=$cfs.triggerHandler(cf_e("currentPage",conf)));var f=opts.pagination.items||opts.items.visible,g=Math.ceil(itms.total/f)-1;return 0>b&&(b=g),b>g&&(b=0),$cfs.triggerHandler(cf_e("slideTo",conf),[b*f,0,!0,c,d,e])}),$cfs.bind(cf_e("jumpToStart",conf),function(a,b){if(a.stopPropagation(),b=b?gn_getItemIndex(b,0,!0,itms,$cfs):0,b+=itms.first,0!=b){if(itms.total>0)for(;b>itms.total;)b-=itms.total;$cfs.prepend($cfs.children().slice(b,itms.total))}return!0}),$cfs.bind(cf_e("synchronise",conf),function(a,b){if(a.stopPropagation(),b)b=cf_getSynchArr(b);else{if(!opts.synchronise)return debug(conf,"No carousel to synchronise.");b=opts.synchronise}for(var c=$cfs.triggerHandler(cf_e("currentPosition",conf)),d=!0,e=0,f=b.length;f>e;e++)b[e][0].triggerHandler(cf_e("slideTo",conf),[c,b[e][3],!0])||(d=!1);return d}),$cfs.bind(cf_e("queue",conf),function(a,b,c){return a.stopPropagation(),is_function(b)?b.call($tt0,queu):is_array(b)?queu=b:is_undefined(b)||queu.push([b,c]),queu}),$cfs.bind(cf_e("insertItem",conf),function(a,b,c,d,e){a.stopPropagation();var f=[b,c,d,e],g=["string/object","string/number/object","boolean","number"],h=cf_sortParams(f,g);if(b=h[0],c=h[1],d=h[2],e=h[3],is_object(b)&&!is_jquery(b)?b=$(b):is_string(b)&&(b=$(b)),!is_jquery(b)||0==b.length)return debug(conf,"Not a valid object.");is_undefined(c)&&(c="end"),sz_storeMargin(b,opts),sz_storeOrigCss(b);var i=c,j="before";"end"==c?d?(0==itms.first?(c=itms.total-1,j="after"):(c=itms.first,itms.first+=b.length),0>c&&(c=0)):(c=itms.total-1,j="after"):c=gn_getItemIndex(c,e,d,itms,$cfs);var k=$cfs.children().eq(c);return k.length?k[j](b):(debug(conf,"Correct insert-position not found! Appending item to the end."),$cfs.append(b)),"end"==i||d||itms.first>c&&(itms.first+=b.length),itms.total=$cfs.children().length,itms.first>=itms.total&&(itms.first-=itms.total),$cfs.trigger(cf_e("updateSizes",conf)),$cfs.trigger(cf_e("linkAnchors",conf)),!0}),$cfs.bind(cf_e("removeItem",conf),function(a,b,c,d){a.stopPropagation();var e=[b,c,d],f=["string/number/object","boolean","number"],g=cf_sortParams(e,f);if(b=g[0],c=g[1],d=g[2],b instanceof $&&b.length>1)return i=$(),b.each(function(){var e=$cfs.trigger(cf_e("removeItem",conf),[$(this),c,d]);e&&(i=i.add(e))}),i;if(is_undefined(b)||"end"==b)i=$cfs.children().last();else{b=gn_getItemIndex(b,d,c,itms,$cfs);var i=$cfs.children().eq(b);i.length&&itms.first>b&&(itms.first-=i.length)}return i&&i.length&&(i.detach(),itms.total=$cfs.children().length,$cfs.trigger(cf_e("updateSizes",conf))),i}),$cfs.bind(cf_e("onBefore",conf)+" "+cf_e("onAfter",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length);return is_array(b)&&(clbk[c]=b),is_function(b)&&clbk[c].push(b),clbk[c]}),$cfs.bind(cf_e("currentPosition",conf),function(a,b){if(a.stopPropagation(),0==itms.first)var c=0;else var c=itms.total-itms.first;return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("currentPage",conf),function(a,b){a.stopPropagation();var e,c=opts.pagination.items||opts.items.visible,d=Math.ceil(itms.total/c-1);return e=0==itms.first?0:itms.first<itms.total%c?0:itms.first!=c||opts.circular?Math.round((itms.total-itms.first)/c):d,0>e&&(e=0),e>d&&(e=d),is_function(b)&&b.call($tt0,e),e}),$cfs.bind(cf_e("currentVisible",conf),function(a,b){a.stopPropagation();var c=gi_getCurrentItems($cfs.children(),opts);return is_function(b)&&b.call($tt0,c),c}),$cfs.bind(cf_e("slice",conf),function(a,b,c,d){if(a.stopPropagation(),0==itms.total)return!1;var e=[b,c,d],f=["number","number","function"],g=cf_sortParams(e,f);if(b=is_number(g[0])?g[0]:0,c=is_number(g[1])?g[1]:itms.total,d=g[2],b+=itms.first,c+=itms.first,items.total>0){for(;b>itms.total;)b-=itms.total;for(;c>itms.total;)c-=itms.total;for(;0>b;)b+=itms.total;for(;0>c;)c+=itms.total}var i,h=$cfs.children();return i=c>b?h.slice(b,c):$(h.slice(b,itms.total).get().concat(h.slice(0,c).get())),is_function(d)&&d.call($tt0,i),i}),$cfs.bind(cf_e("isPaused",conf)+" "+cf_e("isStopped",conf)+" "+cf_e("isScrolling",conf),function(a,b){a.stopPropagation();var c=a.type.slice(conf.events.prefix.length),d=crsl[c];return is_function(b)&&b.call($tt0,d),d}),$cfs.bind(cf_e("configuration",conf),function(e,a,b,c){e.stopPropagation();var reInit=!1;if(is_function(a))a.call($tt0,opts);else if(is_object(a))opts_orig=$.extend(!0,{},opts_orig,a),b!==!1?reInit=!0:opts=$.extend(!0,{},opts,a);else if(!is_undefined(a))if(is_function(b)){var val=eval("opts."+a);is_undefined(val)&&(val=""),b.call($tt0,val)}else{if(is_undefined(b))return eval("opts."+a);"boolean"!=typeof c&&(c=!0),eval("opts_orig."+a+" = b"),c!==!1?reInit=!0:eval("opts."+a+" = b")}if(reInit){sz_resetMargin($cfs.children(),opts),FN._init(opts_orig),FN._bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e("updatePageStatus",conf),[!0,sz])}return opts}),$cfs.bind(cf_e("linkAnchors",conf),function(a,b,c){return a.stopPropagation(),is_undefined(b)?b=$("body"):is_string(b)&&(b=$(b)),is_jquery(b)&&0!=b.length?(is_string(c)||(c="a.caroufredsel"),b.find(c).each(function(){var a=this.hash||"";a.length>0&&-1!=$cfs.children().index($(a))&&$(this).unbind("click").click(function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),a)})}),!0):debug(conf,"Not a valid object.")}),$cfs.bind(cf_e("updatePageStatus",conf),function(a,b){if(a.stopPropagation(),opts.pagination.container){var d=opts.pagination.items||opts.items.visible,e=Math.ceil(itms.total/d);b&&(opts.pagination.anchorBuilder&&(opts.pagination.container.children().remove(),opts.pagination.container.each(function(){for(var a=0;e>a;a++){var b=$cfs.children().eq(gn_getItemIndex(a*d,0,!0,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(b[0],a+1))}})),opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(b){b.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[a*d,-opts.pagination.deviation,!0,opts.pagination])})})}));var f=$cfs.triggerHandler(cf_e("currentPage",conf))+opts.pagination.deviation;return f>=e&&(f=0),0>f&&(f=e-1),opts.pagination.container.each(function(){$(this).children().removeClass(cf_c("selected",conf)).eq(f).addClass(cf_c("selected",conf))}),!0}}),$cfs.bind(cf_e("updateSizes",conf),function(){var b=opts.items.visible,c=$cfs.children(),d=ms_getParentSize($wrp,opts,"width");if(itms.total=c.length,crsl.primarySizePercentage?(opts.maxDimension=d,opts[opts.d.width]=ms_getPercentage(d,crsl.primarySizePercentage)):opts.maxDimension=ms_getMaxDimension(opts,d),opts.responsive?(opts.items.width=opts.items.sizesConf.width,opts.items.height=opts.items.sizesConf.height,opts=in_getResponsiveValues(opts,c,d),b=opts.items.visible,sz_setResponsiveSizes(opts,c)):opts.items.visibleConf.variable?b=gn_getVisibleItemsNext(c,opts,0):"*"!=opts.items.filter&&(b=gn_getVisibleItemsNextFilter(c,opts,0)),!opts.circular&&0!=itms.first&&b>itms.first){if(opts.items.visibleConf.variable)var e=gn_getVisibleItemsPrev(c,opts,itms.first)-itms.first;else if("*"!=opts.items.filter)var e=gn_getVisibleItemsPrevFilter(c,opts,itms.first)-itms.first;else var e=opts.items.visible-itms.first;debug(conf,"Preventing non-circular: sliding "+e+" items backward."),$cfs.trigger(cf_e("prev",conf),e)}opts.items.visible=cf_getItemsAdjust(b,opts,opts.items.visibleConf.adjust,$tt0),opts.items.visibleConf.old=opts.items.visible,opts=in_getAlignPadding(opts,c);var f=sz_setSizes($cfs,opts);return $cfs.trigger(cf_e("updatePageStatus",conf),[!0,f]),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),f}),$cfs.bind(cf_e("destroy",conf),function(a,b){return a.stopPropagation(),tmrs=sc_clearTimers(tmrs),$cfs.data("_cfs_isCarousel",!1),$cfs.trigger(cf_e("finish",conf)),b&&$cfs.trigger(cf_e("jumpToStart",conf)),sz_restoreOrigCss($cfs.children()),sz_restoreOrigCss($cfs),FN._unbind_events(),FN._unbind_buttons(),"parent"==conf.wrapper?sz_restoreOrigCss($wrp):$wrp.replaceWith($cfs),!0}),$cfs.bind(cf_e("debug",conf),function(){return debug(conf,"Carousel width: "+opts.width),debug(conf,"Carousel height: "+opts.height),debug(conf,"Item widths: "+opts.items.width),debug(conf,"Item heights: "+opts.items.height),debug(conf,"Number of items visible: "+opts.items.visible),opts.auto.play&&debug(conf,"Number of items scrolled automatically: "+opts.auto.items),opts.prev.button&&debug(conf,"Number of items scrolled backward: "+opts.prev.items),opts.next.button&&debug(conf,"Number of items scrolled forward: "+opts.next.items),conf.debug}),$cfs.bind("_cfs_triggerEvent",function(a,b,c){return a.stopPropagation(),$cfs.triggerHandler(cf_e(b,conf),c)})},FN._unbind_events=function(){$cfs.unbind(cf_e("",conf)),$cfs.unbind(cf_e("",conf,!1)),$cfs.unbind("_cfs_triggerEvent")},FN._bind_buttons=function(){if(FN._unbind_buttons(),nv_showNavi(opts,itms.total,conf),nv_enableNavi(opts,itms.first,conf),opts.auto.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.auto.button&&opts.auto.button.bind(cf_e(opts.auto.event,conf,!1),function(a){a.preventDefault();var b=!1,c=null;crsl.isPaused?b="play":opts.auto.pauseOnEvent&&(b="pause",c=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)),b&&$cfs.trigger(cf_e(b,conf),c)}),opts.prev.button&&(opts.prev.button.bind(cf_e(opts.prev.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("prev",conf))}),opts.prev.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.next.button&&(opts.next.button.bind(cf_e(opts.next.event,conf,!1),function(a){a.preventDefault(),$cfs.trigger(cf_e("next",conf))}),opts.next.pauseOnHover)){var a=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if(opts.pagination.container&&opts.pagination.pauseOnHover){var a=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e("mouseenter",conf,!1),function(){$cfs.trigger(cf_e("pause",conf),a)}).bind(cf_e("mouseleave",conf,!1),function(){$cfs.trigger(cf_e("resume",conf))})}if((opts.prev.key||opts.next.key)&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b==opts.next.key&&(a.preventDefault(),$cfs.trigger(cf_e("next",conf))),b==opts.prev.key&&(a.preventDefault(),$cfs.trigger(cf_e("prev",conf)))}),opts.pagination.keys&&$(document).bind(cf_e("keyup",conf,!1,!0,!0),function(a){var b=a.keyCode;b>=49&&58>b&&(b=(b-49)*opts.items.visible,itms.total>=b&&(a.preventDefault(),$cfs.trigger(cf_e("slideTo",conf),[b,0,!0,opts.pagination])))}),$.fn.swipe){var b="ontouchstart"in window;if(b&&opts.swipe.onTouch||!b&&opts.swipe.onMouse){var c=$.extend(!0,{},opts.prev,opts.swipe),d=$.extend(!0,{},opts.next,opts.swipe),e=function(){$cfs.trigger(cf_e("prev",conf),[c])},f=function(){$cfs.trigger(cf_e("next",conf),[d])};switch(opts.direction){case"up":case"down":opts.swipe.options.swipeUp=f,opts.swipe.options.swipeDown=e;break;default:opts.swipe.options.swipeLeft=f,opts.swipe.options.swipeRight=e}crsl.swipe&&$cfs.swipe("destroy"),$wrp.swipe(opts.swipe.options),$wrp.css("cursor","move"),crsl.swipe=!0}}if($.fn.mousewheel&&opts.mousewheel){var g=$.extend(!0,{},opts.prev,opts.mousewheel),h=$.extend(!0,{},opts.next,opts.mousewheel);crsl.mousewheel&&$wrp.unbind(cf_e("mousewheel",conf,!1)),$wrp.bind(cf_e("mousewheel",conf,!1),function(a,b){a.preventDefault(),b>0?$cfs.trigger(cf_e("prev",conf),[g]):$cfs.trigger(cf_e("next",conf),[h])}),crsl.mousewheel=!0}if(opts.auto.play&&$cfs.trigger(cf_e("play",conf),opts.auto.delay),crsl.upDateOnWindowResize){var i=function(){$cfs.trigger(cf_e("finish",conf)),opts.auto.pauseOnResize&&!crsl.isPaused&&$cfs.trigger(cf_e("play",conf)),sz_resetMargin($cfs.children(),opts),$cfs.trigger(cf_e("updateSizes",conf))},j=$(window),k=null;if($.debounce&&"debounce"==conf.onWindowResize)k=$.debounce(200,i);else if($.throttle&&"throttle"==conf.onWindowResize)k=$.throttle(300,i);else{var l=0,m=0;k=function(){var a=j.width(),b=j.height();(a!=l||b!=m)&&(i(),l=a,m=b)}}j.bind(cf_e("resize",conf,!1,!0,!0),k)}},FN._unbind_buttons=function(){var b=(cf_e("",conf),cf_e("",conf,!1));ns3=cf_e("",conf,!1,!0,!0),$(document).unbind(ns3),$(window).unbind(ns3),$wrp.unbind(b),opts.auto.button&&opts.auto.button.unbind(b),opts.prev.button&&opts.prev.button.unbind(b),opts.next.button&&opts.next.button.unbind(b),opts.pagination.container&&(opts.pagination.container.unbind(b),opts.pagination.anchorBuilder&&opts.pagination.container.children().remove()),crsl.swipe&&($cfs.swipe("destroy"),$wrp.css("cursor","default"),crsl.swipe=!1),crsl.mousewheel&&(crsl.mousewheel=!1),nv_showNavi(opts,"hide",conf),nv_enableNavi(opts,"removeClass",conf)},is_boolean(configs)&&(configs={debug:configs});var crsl={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},itms={total:$cfs.children().length,first:0},tmrs={auto:null,progress:null,startTime:getTime(),timePassed:0},scrl={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},clbk={onBefore:[],onAfter:[]},queu=[],conf=$.extend(!0,{},$.fn.carouFredSel.configs,configs),opts={},opts_orig=$.extend(!0,{},options),$wrp="parent"==conf.wrapper?$cfs.parent():$cfs.wrap("<"+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();if(conf.selector=$cfs.selector,conf.serialNumber=$.fn.carouFredSel.serialNumber++,conf.transition=conf.transition&&$.fn.transition?"transition":"animate",FN._init(opts_orig,!0,starting_position),FN._build(),FN._bind_events(),FN._bind_buttons(),is_array(opts.items.start))var start_arr=opts.items.start;else{var start_arr=[];0!=opts.items.start&&start_arr.push(opts.items.start)}if(opts.cookie&&start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10)),start_arr.length>0)for(var a=0,l=start_arr.length;l>a;a++){var s=start_arr[a];if(0!=s){if(s===!0){if(s=window.location.hash,1>s.length)continue}else"random"===s&&(s=Math.floor(Math.random()*itms.total));if($cfs.triggerHandler(cf_e("slideTo",conf),[s,0,!0,{fx:"none"}]))break}}var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);return opts.onCreate&&opts.onCreate.call($tt0,{width:siz.width,height:siz.height,items:itm}),$cfs.trigger(cf_e("updatePageStatus",conf),[!0,siz]),$cfs.trigger(cf_e("linkAnchors",conf)),conf.debug&&$cfs.trigger(cf_e("debug",conf)),$cfs},$.fn.carouFredSel.serialNumber=1,$.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1,direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},$.fn.carouFredSel.configs={debug:!1,transition:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},$.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},$.fn.carouFredSel.progressbarUpdater=function(a){$(this).css("width",a+"%")},$.fn.carouFredSel.cookie={get:function(a){a+="=";for(var b=document.cookie.split(";"),c=0,d=b.length;d>c;c++){for(var e=b[c];" "==e.charAt(0);)e=e.slice(1);if(0==e.indexOf(a))return e.slice(a.length)}return 0},set:function(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"},remove:function(a){$.fn.carouFredSel.cookie.set(a,"",-1)}},$.extend($.easing,{quadratic:function(a){var b=a*a;return a*(-b*a+4*b-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var b=a*a;return a*(33*b*b-106*b*a+126*b-67*a+15)}}))})(jQuery);

(function($){$.fn.Tabs=function(){TabsWidget.init();};var TabsWidget={init:function(){if($(".tabs-widget").length>0){$(".tabs").each(function(){var $tabs=$(this);if(!$tabs.data("tab")){TabsWidget.initTabs($(this));$tabs.data("tab",true);}});$("a[href^='#']:not(.tab-nav a):not(.coolBar a)").off("click.tabsWidget").on("click.tabsWidget",function(e){var href=$(this).attr("href");if($(href).closest(".tab-nav").length)return;var target=$(href);var pane=target.closest(".tab-pane");if(!pane.length)return;$(".tab-nav [href='#"+pane.attr("id")+"']").click();var anchor=target.offset().top;var layoutTabs=target.closest(".layout-tabs");if(layoutTabs.length){var tabTop=target.closest(".layout-tabs").offset().top;if(anchor-tabTop<window.innerHeight/2){$('html, body').scrollTop(tabTop);}else{$('html, body').scrollTop(anchor);}}else{if(target.is(':visible')===!target.is(':hidden'))
$('html, body').scrollTop(anchor);}
e.preventDefault();});$(document).on("click",".tab-nav .active > a",function(e){e.preventDefault();});$("li[role='tab']").each(function(){if($(this).hasClass('active')){$(this).attr("aria-selected","true");}else{$(this).attr("aria-selected","false");}});$(".accordion-heading").off("click");$(".accordion-heading").on("click",function(){if($(this).hasClass("active"))
$(this).removeClass("active");else{$(this).parent('.tab-pane').children(".accordion-heading.active").removeClass("active");$(this).addClass("active");}});var hashCode=location.href.split('#')[1];if(hashCode){try{var targetTag=$('a[href="#'+hashCode+'"]');if(targetTag.length>0){targetTag.click();}else{var nodeToShow=$("#"+hashCode);if(nodeToShow.length>0){var tabPane=nodeToShow.parents(".tab-pane");if(tabPane.length>0){var id=tabPane.attr("id");targetTag=$('a[href="#'+id+'"]');if(targetTag.length>0){targetTag.click();}}}}}catch(ex){}}}},initTabs:function($tabs){$tabs.find(".tab-nav li a").off("click.tabsWidget").on("click.tabsWidget",TabsWidget.tabClicked);if(!(window.PB&&window.PB.$)){$tabs.find(" .tab-content .tab-pane").each(function(){if($(this).text().trim().length>0)return;var id='#'+$(this).attr('id');$tabs.find(".listing-view .tab-nav li a[href=\'"+id+"\']").css("display","none");});}
var $menuTabs=$tabs.closest(".menu-tabs");if($menuTabs.length!==0){$(document).click(function(event){if($(event.target).parents().index($menuTabs)==-1){$menuTabs.children(".tab-nav").children().removeClass("active");$menuTabs.children(".tab-content").children(".tab-pane").removeClass("active");}})}else{var $activeTab=[];var $activePane=$tabs.find(".tab-content .activeWidget").closest('.tab-pane');if($activePane.length!=0){var tabId=$activePane.get(0).id;$activeTab=$tabs.find('.tab-nav li a[href="#'+tabId+'"]').closest('li');}
if($activeTab.length==0){$activeTab=$tabs.find(".tab-nav li.active");if($activeTab.length==0){$activeTab=$tabs.find(".tab-nav li").first();}}
$activeTab.children("a").click();}},tabClicked:function(event){var $tabModule=$(this).closest(".tabs");var href=$(this).attr("href")||"";if(href.indexOf("#")==0){var isEmpty=$(this).hasClass("tab-has-no-content");if(!isEmpty){$tabModule.children(".tab-nav").children().removeClass("active");$tabModule.children(".tab-content").children(".tab-pane").removeClass("active");$tabModule.children(".tab-nav").find("li[aria-selected='true']").attr({"aria-selected":"false"});$tabModule.children(".accordion-heading.active").removeClass("active");$(this).closest("li").attr({"aria-selected":"true"}).addClass("active");$(this).closest("li").siblings("li").find("a").not(".tab-ext-link").attr({"aria-selected":"false","aria-expanded":"false"});$(href).addClass("active");$(href).find(".accordion-heading").addClass("active");}
event.preventDefault();}
if($tabModule.hasClass("lazy-tabs-widget")){if($(this).closest("li").hasClass("loaded")||(event.originalEvent===undefined)){return;}
var selectedTabIndex=$(this).closest("li").prevAll().length;var $tab=$($tabModule.find(".tab-pane").get(selectedTabIndex));var $form=$tabModule.children(".tabContextData");var data={};$form.find(':input').each(function(){data[$(this).attr('name')]=$(this).val();});data['tabId']=$tab.attr('data-pb-dropzone');$tab.html('');$tab.addClass("loading");renderTabContent(data,$tab,$tabModule.closest(".layout-tabs"));$(this).parent().addClass("loaded");}
$.event.trigger("TabsWidgetChangedTab");}};$(document).ready(TabsWidget.init);$(document).on("reloadTabsWidget",function(){TabsWidget.init;});if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.layout-tabs",function(){try{TabsWidget.init()}catch(ex){if(console&&console.log){console.log("Error reinitializing tabs",ex);}}});}})(jQuery);function renderTabContent(data,$target,$widget){$widget.pbAjax({type:'GET',url:'/pb/widgets/lazyTabs/loadTab',dataType:'html',async:'false',data:data,success:function(data){renderDynamicContent(data,$target);}});}
function renderDynamicContent(data,$tab){$tab.removeClass("loading");$tab.html(data);$.event.trigger("reloadTabsWidget");};
(function($){var CarouselWidget={init:function(){try{CarouselWidget.checkForNewElements();}catch(ex){}},checkForNewElements:function(){$(".carousel").each(function(){var $C=$(this);if(!$C.data("initialized")||insideTab){$C.data("initialized",true);var carouselOption={width:"variable"};carouselOption.items=$C.data("visibleitems")||2;var auto=carouselOption.auto={play:false};if($C.data("autoplay")){auto.play=true;auto.timeoutDuration=$C.data("delay")||3000;auto.button='.play';}
if($C.data("positioncontrol")=="Bookend"){carouselOption.next=$C.find(".next");carouselOption.prev=$C.find(".prev");}else{carouselOption.next=$C.find(".overlayNext");carouselOption.prev=$C.find(".overlayPrev");if($C.data("pageindicator")){carouselOption.pagination=$C.find(".pagination");}
$C.find(".overlayNav").removeClass("overlay-left overlay-right overlay-center overlay-top overlay-bottom").addClass("overlay-"+$C.data("positioncontrolhorizontalalignment")).addClass("overlay-"+$C.data("positioncontrolverticalalignment"));$C.find(".overlayNav").css("display",'block');}
carouselOption.scroll=1200;$C.find(".items").carouFredSel(carouselOption);if($C.data("positioncontrol")=="Overlay"){if($C.find(".overlayNav").hasClass("overlay-center")){var w=$C.find(".overlayNav").width();$C.find(".overlayNav").css("margin-left",-1*w/2);}
var cW=$C.find(".items :first-child").width();}else{var h=$C.find(".items").height();$C.find(".next").css("line-height",h+"px");$C.find(".prev").css("line-height",h+"px");}}});}};var insideTab=false;$(document).ready(function(){var loadables=$(".carousel *[src]");if(loadables.length){var total=loadables.length;function onLoaded(){total--;if(total==0){CarouselWidget.init();}}
loadables.load(onLoaded);loadables.error(onLoaded);setTimeout(CarouselWidget.init,500);}else{CarouselWidget.init();}
$(".carousel .next").on('focus',function(){$(window).keydown(function(e){if((e.which===13)||(e.which===32)){$(".carousel .next").click();}});});$(".carousel .prev").on('focus',function(){$(window).keydown(function(e){if((e.which===13)||(e.which===32)){$(".carousel .prev").click();}});});$(document).on('TabsWidgetChangedTab',function(){if($('.carousel').closest('div.lazyTab').length==0){insideTab=true;CarouselWidget.init();}});});if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.layout-carousel-dropzones",CarouselWidget.init);}})(jQuery);
(function($){function init(){$('.slideshowWidget').each(function(){var $slideshow=$(this);makeDirectNav($slideshow);enablePrevNext($slideshow);enableAnimation($slideshow);pauseAnimation($slideshow);manualPause($slideshow);collpase();bindTouchEvents($slideshow);var $img=$(this).find("img");$img.one("load",function(){responsiveSlideShowResize();}).each(function(){if(this.complete)
$(this).load();});setTimeout(function(){exposeDelayedContent($slideshow);},0);});}
function exposeDelayedContent($context){$context.find('noscript').each(function(){var $n=$(this);var t=$n.text()||$n.attr('alt');if(t.indexOf('<')==-1)t=$('<div />').html(t).text();$n.after(t);}).remove();}
function activateSlide($slideshow,$slide){if($slide.hasClass('active'))return;if($slideshow.hasClass('pause'))return;var $currentSlide=$slideshow.find('li.active');$currentSlide.removeClass('active');var newSlideNum=$slide.attr('data-relatedSlide');var newSlideClass="slide"+newSlideNum;var $newSlide=$slideshow.find('.'+newSlideClass);exposeDelayedContent($newSlide);if($slideshow.hasClass("animate-fade")){$slideshow.find('div.slide:visible').stop(true,true).fadeOut(500);$newSlide.stop(true,true).fadeIn(500);populateCaption($slideshow,$newSlide);}
else if($slideshow.hasClass("animate-slide")){var slideLeft=$newSlide.position().left;$('.slides').animate({left:-slideLeft},{duration:300,easing:"linear"});populateCaption($slideshow,$newSlide);$(window).resize(function(){var slideLeft=$newSlide.position().left;$('.slides').css({left:-slideLeft});});}
else{$slideshow.find('div.slide:visible').hide();$($newSlide).show();populateCaption($slideshow,$newSlide);}
$slide.addClass('active');}
function makeDirectNav($slideshow){var numSlides=$slideshow.find('.slide').length;var $navIndicator=$slideshow.find('ul.navIndicator');$navIndicator.empty();for(var n=1;n<numSlides+1;n++){var navElement=createNavigationElement(n);navElement.appendTo($navIndicator);}
$navIndicator.find('li').off().bind('click keypress',function(e){var eType=e.type;if(eType=='click'||(eType=='keypress'&&e.which==13)){if($slideshow.hasClass('pause'))return;disableAnimation($slideshow);activateSlide($slideshow,$(this));}});}
function previousSlide($slideshow){var $currentSlide=$slideshow.find('.navIndicator li.active');var $prev=$currentSlide.prev();if($prev.length>0){$currentSlide=$prev;}else{$currentSlide=$slideshow.find(".navIndicator li").last();}
activateSlide($slideshow,$currentSlide);}
function nextSlide($slideshow){var $currentSlide=$slideshow.find('.navIndicator li.active');var $next=$currentSlide.next();if($next.length>0){$currentSlide=$next;}else{$currentSlide=$slideshow.find(".navIndicator li").first();}
activateSlide($slideshow,$currentSlide);}
function enablePrevNext($slideshow){$('.slideNav',$slideshow).show();$slideshow.find('.previousSlide').off().click(function(){if($slideshow.hasClass('pause'))return;previousSlide($slideshow);});$slideshow.find('.nextSlide').off().click(function(){if($slideshow.hasClass('pause'))return;nextSlide($slideshow);})}
function enableAnimation($slideshow){var autoplay=$slideshow.data('autoplay');if(autoplay){clearInterval(autoplay);}
var autoplayTime=$('.autoplayTime',$slideshow).val();if(autoplayTime){exposeDelayedContent($slideshow);autoplayTime=autoplayTime*1000;function nextSlideFunc(){var attached=$slideshow.closest('body').length;if(!attached){disableAnimation($slideshow);return;}
nextSlide($slideshow);}
autoplay=window.setInterval(nextSlideFunc,autoplayTime);$slideshow.data('autoplay',autoplay);$slideshow.off().bind({mouseenter:function(){clearInterval(autoplay);},mouseleave:function(){enableAnimation($slideshow);}});}}
function pauseAnimation($slideShow){var pauseBtn=$($slideShow).find('.playSlide');if(pauseBtn.length>0){pauseBtn.on('click keypress',function(e){var eType=e.type;if(eType=='click'||(eType=='keypress'&&e.which==13)){$slideShow.toggleClass('pause');pauseBtn.toggleClass('pauseSlide');}});}}
function manualPause(){$(".play-options .manual-pause").click(function(){$(".slideshowWidget").toggleClass("pause");if($(".icon-pause-outline").length>0){$(".manual-pause").removeClass("icon-pause-outline");$(".manual-pause").addClass("icon-play-outline");}
else{$(".manual-pause").addClass("icon-pause-outline");$(".manual-pause").removeClass("icon-play-outline");}});}
function collpase(){$(".play-options .icon-arrow_u_p").click(function(){$(".slideshow.constrained-and-centered").closest(".jumbotron").slideToggle();$(".play-options,.slide-show-control").toggleClass("collapsed");})}
function disableAnimation($slideshow){var autoplay=$slideshow.data('autoplay');if(autoplay){$('.autoplayTime',$slideshow).remove();clearInterval(autoplay);}}
function populateCaption($slideshow,$slide){var $slideshowCaption=$slideshow.find('div.slideshowCaption');var caption=$slide.find('div.slideCaption').html()||"";$slideshowCaption.html(caption);}
function bindTouchEvents($slideshow){var holder=$slideshow.find(".slidePort"),touchstartx=undefined,touchmovex=undefined,movex,longTouch=undefined,slideWidth=holder.width(),touchstarty=undefined,touchmovey=undefined;holder.on("touchstart",function(event){touchStart(event);});holder.on("touchmove",function(event){touchMove(event);});holder.on("touchend",function(event){touchEnd(event);});function touchStart(event){longTouch=false;setTimeout(function(){longTouch=true;},250);touchstartx=event.originalEvent.touches[0].pageX;touchstarty=event.originalEvent.touches[0].pageY;movex=undefined;}
function touchMove(event){touchmovex=event.originalEvent.touches[0].pageX;touchmovey=event.originalEvent.touches[0].pageY;movex=slideWidth+(touchstartx-touchmovex);}
function touchEnd(event){if(movex!=undefined){var absMovex=Math.abs(slideWidth-movex);var absMovey=Math.abs(touchmovey-touchstarty);if(!(absMovey>absMovex)){if(absMovex>slideWidth/4||longTouch===false){if(touchmovex>touchstartx){previousSlide($slideshow);}else{nextSlide($slideshow);}}}}}}
function createNavigationElement(index){var elem=$('<li role="button" tabindex="0"/>');elem.attr('aria-describedby','offscreen'+index);elem.attr('data-relatedSlide',index);if(parseInt(index)==1){elem.attr('class','active');}
var descriptionHeader=$('<label class="off-screen"/>');descriptionHeader.attr('id','offscreen'+index);descriptionHeader.html('show Slide '+index);var descriptionSpan=$('<span />');descriptionSpan.html(index);descriptionHeader.appendTo(elem);descriptionSpan.appendTo(elem);return elem;}
$(document).ready(init);if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.genericSlideshow WidgetReinit.imageSlideshow",init);}
$(window).resize(function(){responsiveSlideShowResize();});function responsiveSlideShowResize(){$('.slideshowWidget.res-slider .slidePort .slide').each(function(){if($(this).height()!=0){$(this).closest('.slidePort').css('min-height',$(this).height());}});}})(jQuery);
(function($){function init(){var $fragmentNavigation=$('.fragmentNavigationContent');var $fragmentNavigationWrapper=$(".fragment-navigation");if($fragmentNavigation){$fragmentNavigation.each(function(index,element){$(element).empty();var className=element.getAttribute("data-pb-class-name")?element.getAttribute("data-pb-class-name"):"fragmentNavigationMarker";var fragmentsByClass=document.getElementsByClassName(className);var list=document.createElement("ul");var textCategory;if(fragmentsByClass.length<1){$fragmentNavigationWrapper.hide();}
for(var i=0;i<fragmentsByClass.length;i++){var fragment=fragmentsByClass[i];if(!($(fragment).parent(".about-this").length)){var id=fragment.id;if(!id){id="fragmentNav_"+i;fragment.setAttribute("id",id);}
var text=fragment.getAttribute("data-pb-title");if(!text){if(document.body.innerText){text=fragment.innerText.length?fragment.innerText:null;}else{var regFragment=fragment.innerHTML;regFragment=regFragment.replace(/(&nbsp;|<([^>]+)>)/ig,"\n").replace(/(&lt;([^&gt;]+)&gt;)/gi,"").replace(/\n\s*\n/g,'\n');text=regFragment.length?regFragment:null;}
if(text){text=text.trim();var link,listItem,sublist,sublistItem;if(!(text.split('\n')[1])){text=text.split('\n')[0];link=document.createElement("a");link.setAttribute("href","#"+id);link.setAttribute("onclick","EscapeDrawer()");link.innerHTML=text;listItem=document.createElement("li");listItem.setAttribute("class","fragmentList");listItem.appendChild(link);}else{text=text.split('\n')[0];if(textCategory!=text){textCategory=text.split('\n')[0];link=document.createElement("a");link.setAttribute("href","#"+id);link.setAttribute("class","fragmentList_expand expander");link.innerHTML=text;listItem=document.createElement("li");listItem.setAttribute("class","fragmentList");listItem.appendChild(link);sublist=document.createElement("ul");sublist.setAttribute("class","hidden");for(var ii=0;ii<fragmentsByClass.length;ii++){var subfragment=fragmentsByClass[ii];id=subfragment.id;if(!id){id="subFragmentNav_"+ii;subfragment.setAttribute("id",id);}
var subText=subfragment.getAttribute("data-pb-title");if(!subText){if(document.body.innerText){subText=subfragment.innerText.length?subfragment.innerText:i;}else{var regSubfragment=subfragment.innerHTML;regSubfragment=regSubfragment.replace(/(&nbsp;|<([^>]+)>)/ig,"\n").replace(/(&lt;([^&gt;]+)&gt;)/gi,"").replace(/\n\s*\n/g,'\n');subText=regSubfragment.length?regSubfragment:i;}
if(subText)
subText=subText.trim();if((subText.split('\n')[0])==(text.split('\n')[0])&&(subText.split('\n')[1])){subText=subText.split('\n')[1];link=document.createElement("a");link.setAttribute("href","#"+id);link.innerHTML=subText;sublistItem=document.createElement("li");sublistItem.setAttribute("class","fragmentSubList");sublistItem.appendChild(link);sublist.appendChild(sublistItem);listItem.appendChild(sublist);}}}}}
list.appendChild(listItem);}}}}
element.appendChild(list);});}}
$(document).ready(init);})(jQuery);function EscapeDrawer(){if($(window).width()<992){$(".fragment-navigation").parents(".toc-right-column").slideUp(300);$(".is-sticky-fixed").css("visibility","hidden");$(".is-sticky-fixed").css("top","0px");}};
$(document).ready(function(){$(".addthis_toolbox").attr("addthis:url",window.location.href.replace("(","%28").replace(")","%29"));});
(function($){$.fn.pbAjax=function(args){var widgetId=$(this).attr('widget-id');if(!widgetId){widgetId=$(this).data('widget-id');}
if(!widgetId){widgetId=$(this).attr('id');}
var pbContext=$("[name='pbContext']").attr('content');if((widgetId!==null)&&(widgetId!=="undefined")){var data=args['data']?args['data']:{};data['pbContext']=pbContext;data['widgetId']=widgetId;var targetUrl=args['url'];var requestMethod=args.hasOwnProperty('type')?args['type']:'GET';var requestDataType=args.hasOwnProperty('dataType')?args['dataType']:'html';var asyncRequest=args.hasOwnProperty('async')?args['async']:true;var successFunction=args['success'];var failFunction=args['error'];return $.ajax({type:requestMethod,dataType:requestDataType,async:asyncRequest,url:targetUrl,data:data,success:successFunction,error:failFunction});}
else{console.log("widgetId not found");}};})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),a.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),(e.active===!1&&e.collapsible===!0||!this.headers.length)&&(e.active=!1,this.active=t()),e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,a=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),a=n.attr("id");s||(s=o+"-header-"+e,i.attr("id",s)),a||(a=o+"-panel-"+e,n.attr("id",a)),i.attr("aria-controls",a),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=a.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?t():n,newPanel:r};e.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-expanded":"false","aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr("tabIndex",-1):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(t,e,n){var a,o,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(a=t.show().outerHeight(),e.animate(i,{duration:r,easing:o,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:o,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(a-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,o,p):t.animate(s,r,o,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})})(jQuery);
$(document).ready(function($){$('#accordionWidget:not(.js__accordionWidget)').accordion({collapsible:true,heightStyle:"content",icons:null});$(".js__accordionWidget").accordion({collapsible:true,heightStyle:"content",icons:null});});
$(document).ready(function(){$(".general-rss-feed-reader").each(function(){var $this=$(this);var $resultsTarget=$(this).find('.rss-body');var url=$(this).data('rss-url');var data={};if(url){data.url=url;}
$this.pbAjax({type:'GET',url:'/pb/widgets/rssWidget/loadWidget',data:data,dataType:'html',async:'false',success:function(data){$resultsTarget.html(data);}});});});
(function($){function init(){$(".transplant-target").each(function(){var $transplantTarget=$(this);var cssSelector=$transplantTarget.data("cssSelector");if(cssSelector.length>0){var $transplantSource=$(cssSelector+":not(.transplant "+cssSelector+")");if($transplantSource.length>0){var newClass=$transplantTarget.data("newClassname");var removeOriginal=$transplantTarget.data("removeOriginal");var $transplantEl=$transplantSource.clone();$transplantEl.removeClass("hide");cleanup($transplantEl);$transplantTarget.html($transplantEl);if(removeOriginal&&!$transplantTarget.data("isPbedit")){$transplantSource.addClass("hide");}else{$transplantSource.removeClass("hide");}
if(typeof(newClass)!=="undefined"&&newClass.length>0)$transplantSource.addClass(newClass);}else{if($transplantTarget.data("isPbedit")){$transplantTarget.html("<div class='transplant-error'>CSS Selector not found in the DOM</div>");}}}else{if($transplantTarget.data("isPbedit")){$transplantTarget.html("<div class='transplant-error'>No CSS Selector Defined</div>");}}})}
function cleanup($transplantEl){findAndRemoveAttr($transplantEl,"id");findAndRemoveAttr($transplantEl,"data-pb-widget");}
function findAndRemoveAttr($element,attr){$element.find("["+attr+"]").each(function(){$(this).removeAttr(attr);});}
function findAndRemoveClass($element,className){$element.find("."+className).each(function(el){$(this).removeClass(className);})}
function findAndRemoveElement($element,selector){$element.find(selector).each(function(){$(this).remove();})}
$(document).ready(init);if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.transplant",init);}})(jQuery);/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */!function($){var SmartBanner=function(options){this.origHtmlMargin=parseFloat($('html').css('margin-top'))
this.options=$.extend({},$.smartbanner.defaults,options)
var standalone=navigator.standalone,UA=navigator.userAgent
if(this.options.force){this.type=this.options.force}else if(UA.match(/Windows Phone 8/i)!=null&&UA.match(/Touch/i)!==null){this.type='windows'}else if(UA.match(/iPhone|iPod/i)!=null||(UA.match(/iPad/)&&this.options.iOSUniversalApp)){if(UA.match(/Safari/i)!=null&&(UA.match(/CriOS/i)!=null||window.Number(UA.substr(UA.indexOf('OS ')+3,3).replace('_','.'))<6))this.type='ios'}else if(UA.match(/\bSilk\/(.*\bMobile Safari\b)?/)||UA.match(/\bKF\w/)||UA.match('Kindle Fire')){this.type='kindle'}else if(UA.match(/Android/i)!=null){this.type='android'}
if(!this.type||standalone||this.getCookie('sb-closed')||this.getCookie('sb-installed')){return}
this.scale=this.options.scale=='auto'?$(window).width()/window.screen.width:this.options.scale
if(this.scale<1)this.scale=1
var meta=$(this.type=='android'?'meta[name="google-play-app"]':this.type=='ios'?'meta[name="apple-itunes-app"]':this.type=='kindle'?'meta[name="kindle-fire-app"]':'meta[name="msApplication-ID"]');if(meta.length==0)return
if(this.type=='windows'){this.appId=$('meta[name="msApplication-PackageFamilyName"]').attr('content');}else{var parsedMetaContent=/app-id=([^\s,]+)/.exec(meta.attr('content'));if(parsedMetaContent){this.appId=parsedMetaContent[1];}else{return;}}
this.title=this.options.title?this.options.title:meta.data('title')||$('title').text().replace(/\s*[|\-·].*$/,'')
this.author=this.options.author?this.options.author:meta.data('author')||($('meta[name="author"]').length?$('meta[name="author"]').attr('content'):window.location.hostname)
this.iconUrl=meta.data('icon-url');this.price=meta.data('price');if(typeof this.options.onInstall==='function'){this.options.onInstall=this.options.onInstall;}else{this.options.onInstall=function(){};}
if(typeof this.options.onClose==='function'){this.options.onClose=this.options.onClose;}else{this.options.onClose=function(){};}
this.create()
this.show()
this.listen()}
SmartBanner.prototype={constructor:SmartBanner,create:function(){var iconURL,link=(this.options.url?this.options.url:(this.type=='windows'?'ms-windows-store:navigate?appid=':(this.type=='android'?'market://details?id=':(this.type=='kindle'?'amzn://apps/android?asin=':'https://itunes.apple.com/'+this.options.appStoreLanguage+'/app/id')))+this.appId),price=this.price||this.options.price,inStore=price?price+' - '+(this.type=='android'?this.options.inGooglePlay:this.type=='kindle'?this.options.inAmazonAppStore:this.type=='ios'?this.options.inAppStore:this.options.inWindowsStore):'',gloss=this.options.iconGloss===null?(this.type=='ios'):this.options.iconGloss
if(this.type=='android'&&this.options.GooglePlayParams){link=link+'&referrer='+this.options.GooglePlayParams;}
var banner='<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+'</strong><span>'+this.author+'</span><span>'+inStore+'</span></div><a href="'+link+'" class="sb-button"><span>'+this.options.button+'</span></a></div></div>';(this.options.layer)?$(this.options.appendToSelector).append(banner):$(this.options.appendToSelector).prepend(banner);if(this.options.icon){iconURL=this.options.icon}else if(this.iconUrl){iconURL=this.iconUrl;}else if($('link[rel="apple-touch-icon-precomposed"]').length>0){iconURL=$('link[rel="apple-touch-icon-precomposed"]').attr('href')
if(this.options.iconGloss===null)gloss=false}else if($('link[rel="apple-touch-icon"]').length>0){iconURL=$('link[rel="apple-touch-icon"]').attr('href')}else if($('meta[name="msApplication-TileImage"]').length>0){iconURL=$('meta[name="msApplication-TileImage"]').attr('content')}else if($('meta[name="msapplication-TileImage"]').length>0){iconURL=$('meta[name="msapplication-TileImage"]').attr('content')}
if(iconURL){$('#smartbanner .sb-icon').css('background-image','url('+iconURL+')')
if(gloss)$('#smartbanner .sb-icon').addClass('gloss')}else{$('#smartbanner').addClass('no-icon')}
this.bannerHeight=$('#smartbanner').outerHeight()+2
if(this.scale>1){$('#smartbanner').css('top',parseFloat($('#smartbanner').css('top'))*this.scale).css('height',parseFloat($('#smartbanner').css('height'))*this.scale).hide()
$('#smartbanner .sb-container').css('-webkit-transform','scale('+this.scale+')').css('-msie-transform','scale('+this.scale+')').css('-moz-transform','scale('+this.scale+')').css('width',$(window).width()/this.scale)}
$('#smartbanner').css('position',(this.options.layer)?'absolute':'static')},listen:function(){$('#smartbanner .sb-close').on('click',$.proxy(this.close,this))
$('#smartbanner .sb-button').on('click',$.proxy(this.install,this))},show:function(callback){var banner=$('#smartbanner');banner.stop();if(this.options.layer){banner.animate({top:0,display:'block'},this.options.speedIn).addClass('shown').show();$(this.pushSelector).animate({paddingTop:this.origHtmlMargin+(this.bannerHeight*this.scale)},this.options.speedIn,'swing',callback);}else{if($.support.transition){banner.animate({top:0},this.options.speedIn).addClass('shown');var transitionCallback=function(){$('html').removeClass('sb-animation');if(callback){callback();}};$(this.pushSelector).addClass('sb-animation').one($.support.transition.end,transitionCallback).emulateTransitionEnd(this.options.speedIn).css('margin-top',this.origHtmlMargin+(this.bannerHeight*this.scale));}else{banner.slideDown(this.options.speedIn).addClass('shown');}}},hide:function(callback){var banner=$('#smartbanner');banner.stop();if(this.options.layer){banner.animate({top:-1*this.bannerHeight*this.scale,display:'block'},this.options.speedIn).removeClass('shown');$(this.pushSelector).animate({paddingTop:this.origHtmlMargin},this.options.speedIn,'swing',callback);}else{if($.support.transition){if(this.type!=='android')
banner.css('top',-1*this.bannerHeight*this.scale).removeClass('shown');else
banner.css({display:'none'}).removeClass('shown');var transitionCallback=function(){$('html').removeClass('sb-animation');if(callback){callback();}};$(this.pushSelector).addClass('sb-animation').one($.support.transition.end,transitionCallback).emulateTransitionEnd(this.options.speedOut).css('margin-top',this.origHtmlMargin);}else{banner.slideUp(this.options.speedOut).removeClass('shown');}}},close:function(e){e.preventDefault()
this.hide()
this.setCookie('sb-closed','true',this.options.daysHidden);this.options.onClose(e);},install:function(e){if(this.options.hideOnInstall){this.hide()}
this.setCookie('sb-installed','true',this.options.daysReminder)
this.options.onInstall(e);},setCookie:function(name,value,exdays){var exdate=new Date()
exdate.setDate(exdate.getDate()+exdays)
value=encodeURI(value)+((exdays==null)?'':'; expires='+exdate.toUTCString())
document.cookie=name+'='+value+'; path=/;'},getCookie:function(name){var i,x,y,ARRcookies=document.cookie.split(";")
for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="))
y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1)
x=x.replace(/^\s+|\s+$/g,"")
if(x==name){return decodeURI(y)}}
return null},switchType:function(){var that=this
this.hide(function(){that.type=that.type=='android'?'ios':'android'
var meta=$(that.type=='android'?'meta[name="google-play-app"]':'meta[name="apple-itunes-app"]').attr('content')
that.appId=/app-id=([^\s,]+)/.exec(meta)[1]
$('#smartbanner').detach()
that.create()
that.show()})}}
$.smartbanner=function(option){var $window=$(window),data=$window.data('smartbanner'),options=typeof option=='object'&&option
if(!data)$window.data('smartbanner',(data=new SmartBanner(options)))
if(typeof option=='string')data[option]()}
$.smartbanner.defaults={title:null,author:null,price:'FREE',appStoreLanguage:'us',inAppStore:'On the App Store',inGooglePlay:'In Google Play',inAmazonAppStore:'In the Amazon Appstore',inWindowsStore:'In the Windows Store',GooglePlayParams:null,icon:null,iconGloss:null,button:'VIEW',url:null,scale:'auto',speedIn:300,speedOut:400,daysHidden:15,daysReminder:90,force:null,hideOnInstall:true,layer:false,iOSUniversalApp:true,appendToSelector:'body',pushSelector:'html'}
$.smartbanner.Constructor=SmartBanner;function transitionEnd(){var el=document.createElement('smartbanner')
var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
return false}
if($.support.transition!==undefined)
return
$.fn.emulateTransitionEnd=function(duration){var called=false,$el=this
$(this).one($.support.transition.end,function(){called=true})
var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
setTimeout(callback,duration)
return this}
$(function(){$.support.transition=transitionEnd()})}(window.jQuery);
jQuery(document).ready(function($){$.smartbanner({layer:true,title:($('meta[name="AppTitle"]').attr('content')),author:($('meta[name="AppAuthor"]').attr('content')),icon:($('meta[name="AppIconUrl"]').attr('content'))});});
$(document).ready(function($){$('#articleTools,.publicationToolSelect').change(function(){var action=$(this).val();if(!action)
return;if($(this).parents('form[name="frmAbs"]').length){var result=submitArticles($(this).parents('form[name="frmAbs"]').get(0),action);if(result){$('#articleTools')[0].selectedIndex=0;$('#articleTools').selectmenu("refresh");}}else{window.location.href=action;}});});
function searchResultPage(aForm,page,aSubject)
{getFormInput(aForm.name,'startPage').value=page;aForm.submit();}
$(document).ready(function($){$('#select_all').change(function(){$(this).closest('form').find(':checkbox').prop('checked',this.checked)});$('#menuAction').click(function(){var hasMarked=false;$('#browsePublicationsForm input[type=checkbox][name="doi"]:checked').each(function(){hasMarked=true;return true;});if(!hasMarked){alert("Please select publications.");return;}
var form=$('#browsePublicationsForm');form.submit();});$('.subjectListing .subjectList').parent().closest('.subjectList').addClass('hideSubList').prepend('<a href="javascript:void(0)" class="toggle">+</a>');$('.subjectList .toggle').click(function(){$(this).closest('.subjectList').toggleClass('hideSubList');var txt=$(this).text();if(txt.indexOf('+')>-1)
txt='-';else
txt="+";$(this).text(txt);});$(".subjectList span.selected").parents('.hideSubList').toggleClass('hideSubList').children('.toggle').text('-');});
$(document).ready(function(){$('.js__searchInSelector').on('change',function(){var form=$('.quickSearchForm');var inputJournal=$(form.find('input[name="quickLinkJournal"]'));var inputYear=$(form.find('input[name="quickLinkYear"]'));var inputVolume=$(form.find('input[name="quickLinkVolume"]'));var inputIssue=$(form.find('input[name="quickLinkIssue"]'));var inputPage=$(form.find('input[name="quickLinkPage"]'));if($(inputJournal).val()){$(inputYear).removeAttr("disabled");$(inputVolume).removeAttr("disabled");if($(inputYear).val()||$(inputVolume).val()){$(inputIssue).removeAttr("disabled");if($(inputIssue).val()){$(inputPage).removeAttr("disabled");}}}});var args=window.location.search.slice(1).split("&");var year;var volume;$(args).each(function(i,elm){var arg=elm.split('=');if(arg[0]=='year'){year=arg[1]}else if(arg[0]=='volume'){volume=arg[1]};});if(volume){var elem=$(".volume-list").find("[data-attr-vol='"+volume+"']").addClass("open");if(elem.length){$("html, body").animate({scrollTop:elem.offset().top},800);}}else if(year){var decades=$(".decade > h3 > .title.expander");var currentDecade;for(i=0;i<decades.length;i++){dec=$(decades[i]).data("attr-vol");var bot=dec.split("-")[0];var top=dec.split("-")[1];if(year==top||year==bot||(year>bot&&year<top)){currentDecade=dec;break;}}
var elem=$(".volume-list").find("[data-attr-vol='"+currentDecade+"']").addClass("open").parent().siblings(".expandable").addClass("expandedDiv").find("[data-attr-vol='"+year+"']").addClass("open").parent().siblings(".expandable").addClass("expandedDiv");if(elem.length){$("html, body").animate({scrollTop:elem.offset().top},800);}}else{$('.slider:first-child').addClass('opened');}
$(".volume-list .expander.open").each(function(){$(this).siblings(".expandable").addClass("expandedDiv");$(this).closest(".decade").find(".title.expander").siblings(".expandable.years").addClass("expandedDiv");if($(this).closest(".slider").length>0){$(this).closest(".slider").parents(".expandable").addClass("expandedDiv");$(this).closest(".slider").closest(".expandable.volumes").prev(".expander").addClass("open");}
else if($(this).parent().find(".slider").length>0){$(this).parent().find(".slider").children(".expandable").addClass("expandedDiv");$(this).parent().find(".slider").closest(".expandable.volumes").prev(".expander").addClass("open");}});$('.opener, .volume-list .expander:not(.js__noloi)').click(function(e){e.preventDefault();$(this).closest('.slider').toggleClass('opened');var vol=$(this).attr("data-attr-vol");var url=window.location.href;var state_to_push="";if(url.indexOf("&expanded="+vol)>0){state_to_push=url.replace("&expanded="+vol,"");}
else if(url.indexOf("?expanded="+vol)>0){state_to_push=url.replace("?expanded="+vol,"?");}
else{var connector="";if(url.indexOf("?")>=0&&url.lastIndexOf("&")<(url.length-1)&&url.lastIndexOf("?")<(url.length-1))
connector="&";else
if(url.lastIndexOf("?")<(url.length-1)&&url.lastIndexOf("&")<(url.length-1))
connector="?";state_to_push=url+connector+"expanded="+vol;}
if(state_to_push.slice(-1)=="?")
state_to_push=state_to_push.replace("?","");state_to_push=state_to_push.replace("?&","?");history.replaceState(null,null,state_to_push);});var yearQueried=$("input[data-name='yearQueried']").data('year');var volumeQueried=$("input[data-name='volumeQueried']").data('volume');if(!yearQueried||!volumeQueried){$(".js_issue").each(function(){var elem=$(this).closest(".slider");if(yearQueried){var currentIssueYear=$(this).data('year');if(yearQueried==currentIssueYear){elem.toggleClass("opened");return false;}}else{var currentVolumeId=$(this).data("volume");if(volumeQueried==currentVolumeId){elem.toggleClass("opened");return false;}}});}else{$(".js_issue").each(function(){var elem=$(this).closest(".slider");var currentYearId=$(this).data("year");var currentVolumeId=$(this).data("volume");if((yearQueried==currentYearId)&&(volumeQueried==currentVolumeId)){elem.toggleClass("opened");return false;}});}});
function onChangeSavedQuerySort(aOpt,aAsc)
{var url='/search/saved';if(url.indexOf('?')>0)
window.location=url+="&asc="+aAsc+"&sortOption="+aOpt;else
window.location=url+="?asc="+aAsc+"&sortOption="+aOpt;};
(function($){function init(){$(".accessWidget .sortBy").change(function(e){var sortByUrl=$(this).val();window.location.href=sortByUrl;});}
$(document).ready(init);if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.accessWidget WidgetReinit.literatumAccessWidget",init);}})(jQuery);$(document).ready(function($){$(".collectionItem").click(function(e){e.preventDefault();var $target=$(this).closest('tr');if($(this).hasClass('loaded')){renderAccessWidgetContent('',$target,true);}
else{var $widget=$(this).closest(".literatumAccessWidget");var code=$(this).attr('data-id');$widget.pbAjax({type:'GET',url:'/pb/widgets/AccessWidgetController/category',dataType:'html',async:'false',data:{categoryCode:code},success:function(data){renderAccessWidgetContent(data,$target,false);}});$(this).addClass("loaded");}})});function renderAccessWidgetContent(data,$target,loaded){if(loaded)
$target.next().toggle();else
$target.after(data);};
$(document).ready(addSelectAllHandlerForscheduledReprt);if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.*",addSelectAllHandlerForscheduledReprt);}
function addSelectAllHandlerForscheduledReprt(){addSelectAllHandler("#counterIdsAll",'.report-type',"#counterReportTypes");}
function addSelectAllHandler(selectAll,checkAll,parent){checkSelectAllIfNecessary(selectAll,checkAll,parent);$(selectAll).click(function(){var check=$(this).is(":checked");var boxes;if(parent==""){boxes=$(this).parents().find("input[type=checkbox]");}
else
{boxes=$(this).closest(parent).find("input[type=checkbox]");}
boxes.prop("checked",check);});$(checkAll).change(function(){checkSelectAllIfNecessary(selectAll,checkAll,parent);});}
function selectRangeRadio(){document.getElementById("monthRange").checked=true;}
function selectYearOnlyRadio(){document.getElementById("yearOnlyRadioOption").checked=true;}
function checkSelectAllIfNecessary(selectAll,checkboxes,parent){var $parent=$(parent);var allCheckboxes;var checkedCheckboxes;var $selectAllField;if($parent.length==0){allCheckboxes=$(checkboxes);checkedCheckboxes=$(checkboxes+':checked');$selectAllField=$(selectAll);}else{allCheckboxes=$parent.find(checkboxes);checkedCheckboxes=$parent.find(checkboxes+':checked');$selectAllField=$parent.find(selectAll);}
if($selectAllField.length==0){return;}
if(allCheckboxes.length!=0&&allCheckboxes.length==checkedCheckboxes.length){$selectAllField.prop('checked',true);}else{$selectAllField.prop('checked',false);}};
$(document).ready(function($){$(".selectAll").change(function(){var selectAll=$(this);if(selectAll.hasClass("selectAllCitation")){if(selectAll.is(":checked")){$("input[type=checkbox][name=citId]").prop('checked',true);$(".selectAll.selectAllCitation").prop("checked",true);}else{$("input[type=checkbox][name=citId]").prop("checked",false);$(".selectAll.selectAllCitation").prop("checked",false);}}else if(selectAll.hasClass("customAlert")){if(selectAll.is(":checked")){$("input[type=checkbox][name=code]").prop('checked',true);$(".selectAll.customAlert").prop("checked",true);}else{$("input[type=checkbox][name=code]").prop("checked",false);$(".selectAll.customAlert").prop("checked",false);}}else if(selectAll.hasClass("allCategories")){if($(this).is(":checked")){$("[name='selectedCategory']").prop('checked',true);}else{$("[name='selectedCategory']").prop('checked',false);}}else{var $inputs=selectAll.closest("fieldset,form , form .profile-sections").find("input[type=checkbox]");$inputs.prop("checked",selectAll.is(":checked"));if(selectAll.closest('.jcf-unchecked,.jcf-checked').length){$inputs.each(function(){var $this=$(this);if($this.is(":checked")){$this.closest('.jcf-unchecked,.jcf-checked').removeClass('jcf-unchecked').addClass('jcf-checked');}
else{$this.closest('.jcf-unchecked,.jcf-checked').removeClass('jcf-checked').addClass('jcf-unchecked');}});}}});$(".axafrequency").change(function(){$(".axafrequency").val($(this).val());var form=$(this).parents("form");form.find("input[name=action]").val("");createAndAppendInput("save","true",form);createAndAppendInput("updateAxa","true",form);form.submit();});$(".axafrequencyWithButton").change(function(){$(".axafrequencyWithButton").val($(this).val());});$(".axafrequencyButton").click(function(){var form=$(this).closest("form");form.find("input[name=action]").val("");createAndAppendInput("save","true",form);createAndAppendInput("updateAxa","true",form);form.submit();});$("[name='sortBy1']").change(function(){var sortBy=$(this).val();$('<form action="/action/showAlertSettings">'+'<input type="hidden" name="type" value="citation" />'+'<input type="hidden" name="menuTab" value="Alerts"/>'+'<input type="hidden" name="sortBy" value="'+sortBy+'"/>'+'</form>').appendTo('body').submit();});if(window.location.hash=='#customAlerts'){$('.active').removeClass('active');$('#customsTabLabel').parent().addClass('active');}
var $categoriesList=$(".categoriesList");$categoriesList.hide();$("[name='selectedTitles']").click(function(){if("custom"==$(this).val()||"customDigest"==$(this).val()){$categoriesList.show();}else{$categoriesList.hide();}});if($("#customTitles").is(":checked")){$categoriesList.show();}
$(".close").click(function(){$categoriesList.hide();});});function createAndAppendInput(name,value,form){var inp=document.createElement("input");inp.type="hidden";inp.name=name;inp.value=value;form.append(inp);};
$(document).ready(function($){$(".favoritePublicationsOptions").change(function(){if(!$('input[type=checkbox][name="doi"]:checked').length){showErrorMsg();$(this).val('');return;}
var val=$(this).val();var form=$(this).parents("form");var action='';if(!val)
return;if(val=='email'){$(form).append($('<input>').attr({"name":"title","type":"hidden","value":"email to a friend"}));action='/action/showMailPage';}
else if(val=='alert'){action='/action/doUpdateAlertSettings';$('option[value='+val+']',this).val('addJournalBookAlert');}
else if(val=='delete'){action=form.attr('action');}else if(val=='publicationAddJournalBookAlert'){action='/action/doUpdateAlertSettings';$('option[value='+val+']',this).val('addJournalBookAlert');$("input[type=checkbox][name=doi]").each(function(){$(this).val($(this).parent("td").attr("serialDoi"));});}else{action=val;}
form.attr('action',action);form.get(0).submit();});$(".js__actionsDropdown .action").click(function(e){$(this).closest(".slct").find(".js__favPubOpts").val($(this).data("value"));$(this).closest(".slct").find(".js__favPubOpts").trigger("change");});$(".js__actionsDropdown .default").click(function(e){$(this).siblings(".actions").toggle();$(this).find(".icon-arrow_d_n").toggle();$(this).find(".icon-arrow_u_p").toggle();e.stopPropagation();});$("body").click(function(){$(".js__actionsDropdown .actions").hide();$(".js__actionsDropdown .default").find(".icon-arrow_d_n").show();$(".js__actionsDropdown .default").find(".icon-arrow_u_p").hide();});try{$(document).on('click','#removeArticle',function(e){if(!$('input[type=checkbox][name="citId"]:checked').length){showErrorMsg();e.preventDefault();}});}catch(err){$('#removeArticle').click(function(e){if(!$('input[type=checkbox][name="citId"]:checked').length){showErrorMsg();e.preventDefault();}});}
$(".sortOptions").change(function(){var val=$(this).val();if(!val)
return;var action=$('[name="currentUrl"]').val();var form=['<form method="GET" action="'+action+'">'];form.push('<input type="hidden" name="'+'menuTab'+'" value="'+'favorites'+'"/>');form.push('<input type="hidden" name="'+'sortBy'+'" value="'+val+'"/>');form.push('<input type="hidden" name="'+'publicationSortBy'+'" value="'+$("select.publicationSortOptions").val()+'"/>');form.push('<input type="hidden" name="'+'type'+'" value="'+'articles'+'"/>');form.push('<input type="hidden" name="'+'tabIndex'+'" value="'+'0'+'"/>');form.push('</form>');$(form.join('')).appendTo('body')[0].submit();form.submit();$(form).remove();});$(".publicationSortOptions").change(function(){var val=$(this).val();if(!val)
return;var action=$('[name="currentUrl"]').val();var form=['<form method="GET" action="'+action+'">'];form.push('<input type="hidden" name="'+'menuTab'+'" value="'+'favorites'+'"/>');form.push('<input type="hidden" name="'+'publicationSortBy'+'" value="'+val+'"/>');form.push('<input type="hidden" name="'+'sortBy'+'" value="'+$("select.sortOptions").val()+'"/>');form.push('<input type="hidden" name="'+'type'+'" value="'+'articles'+'"/>');form.push('<input type="hidden" name="'+'tabIndex'+'" value="'+'1'+'"/>');form.push('</form>');$(form.join('')).appendTo('body')[0].submit();form.submit();$(form).remove();});selectCorrectTab();});function selectCorrectTab(){try{var tabIndex=parseInt(getParameterByName("tabIndex"));if(tabIndex!=null){$($("div.manageFavorites ul li")[tabIndex]).find("a").trigger("click");$($("div.manageFavorites ul li")[tabIndex]).addClass("active");}}catch(e){}}
function getParameterByName(name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return results==null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
function showErrorMsg(){alert('Please select one publication at least');};
$(document).ready(function(){var pairedDevicesTable=$(".pairedDevicesTable");if(pairedDevicesTable.length){$.get("/pb/widgets/DevicePairingController/pairedDevices").done(function(html){$(".pairedDevicesTable tbody").html(html);pairedDevicesTable.trigger("update");addDeviceSelectionChangeListener();});$("#unpairSelected").click(function(){var selectedDevicesArray=[];$(".pairedDevicesTable input[name='deviceId']:checked").each(function(){selectedDevicesArray.push($(this).attr('id'));});unpairSelectedDevices(selectedDevicesArray);});$("#unpairAll").click(function(){var selectedDevicesArray=[];$(".pairedDevicesTable input[name='deviceId']").each(function(){selectedDevicesArray.push($(this).attr('id'));});unpairSelectedDevices(selectedDevicesArray);});pairedDevicesTable.tablesorter({theme:'ice',headers:{0:{sorter:false}},dateFormat:'us',widgets:['zebra']});}
function unpairSelectedDevices(selectedDevicesArray){$.get("/pb/widgets/DevicePairingController/unpairSelected",{devices:JSON.stringify(selectedDevicesArray)}).done(function(html){$(".pairedDevicesTable tbody").html(html);pairedDevicesTable.trigger("update");addDeviceSelectionChangeListener();});}
function addDeviceSelectionChangeListener(){$("#unpairSelected").prop("disabled",true);$("input[name=deviceId]").change(function(){if($("input[name=deviceId]:checked").length>0){$("#unpairSelected").prop("disabled",false);}else{$("#unpairSelected").prop("disabled",true);}});}});
$(document).ready(function(){var pairedEmailsTable=$(".pairedEmailsTable");function refreshPairedDevices(){$.get("/pb/widgets/DevicePairingManagementController/institutionPairedDevices",{serviceName:$(".serviceNameHidden").text(),emailFilter:$('input[name=emailFilter]:checked').attr("id"),permissionFilter:$('input[name=permissionFilter]:checked').attr("id"),emailAddress:$('input[name=emailAddress]').val(),name:$('input[name=name]').val(),fromDate:$('input[name=fromDate]').val(),toDate:$('input[name=toDate]').val()}).done(function(html){$(".pairedEmailsTable tbody").html(html);pairedEmailsTable.trigger("update");addEmailSelectionChangeListener();showPager();});}
function addEmailSelectionChangeListener(){$("#extendReinstateButton").prop("disabled",true);$("#revokeButton").prop("disabled",true);$("#viewDetailButton").prop("disabled",true);$("input[name=userEmail]").change(function(){$("#extendReinstateButton").prop("disabled",false);$("#revokeButton").prop("disabled",false);$("#viewDetailButton").prop("disabled",false);});}
function showPager(){if($('.pairedEmailsTable > tbody > tr').length>pagerOptions.size){pairedEmailsTable.tablesorterPager(pagerOptions);}else{pagerOptions.container.hide();}}
if(pairedEmailsTable.length){refreshPairedDevices();var pagerOptions={container:$(".pager"),ajaxUrl:null,customAjaxUrl:function(table,url){return url;},ajaxObject:{dataType:'json'},ajaxProcessing:null,processAjaxOnInit:false,output:'',updateArrows:true,page:0,size:25,savePages:false,storageKey:'tablesorter-pager',pageReset:0,fixedHeight:false,removeRows:true,countChildRows:false,cssNext:'.next',cssPrev:'.prev',cssFirst:'.first',cssLast:'.last',cssGoto:'.gotoPage',cssPageDisplay:'.pagedisplay',cssPageSize:'.pagesize',cssDisabled:'disabled',cssErrorRow:'tablesorter-errorRow'};pairedEmailsTable.tablesorter({theme:'ice',headers:{0:{sorter:false}},sortList:[[3,1]],dateFormat:'us',widgets:['zebra']});var fromDateElement=$("#fromDate");var toDateElement=$("#toDate");fromDateElement.datepicker({defaultDate:"-1w",changeMonth:true,numberOfMonths:1,onClose:function(selectedDate){$("#toDate").datepicker("option","minDate",selectedDate);}});fromDateElement.datepicker("setDate","-180d");toDateElement.datepicker({defaultDate:"+0",changeMonth:true,numberOfMonths:1,onClose:function(selectedDate){$("#fromDate").datepicker("option","maxDate",selectedDate);}});toDateElement.datepicker("setDate","+1d");$("#refreshButton").click(function(event){event.preventDefault();refreshPairedDevices();});$(".next,.prev").click(function(){$("input[name=userEmail]").prop("checked",false);addEmailSelectionChangeListener();});var intRegex=/^\d+$/;var addExtEmailEmailField=$("#addExternalEmail");var addExtEmailExpDaysField=$("#addExternalEmailExp");var addExtEmailReasonField=$("#addExternalEmailReason");var addExtEmailInputFields=$([]).add(addExtEmailEmailField).add(addExtEmailExpDaysField).add(addExtEmailReasonField);var addExternalEmailDialog=$("#externalEmailDialogForm").dialog({autoOpen:false,height:300,width:400,modal:true,dialogClass:'device-pairing-dialog',buttons:{Confirm:addExternalEmail,Cancel:function(){addExternalEmailDialog.dialog("close");}},close:function(){addExternalEmailDialog.find("form")[0].reset();addExtEmailInputFields.removeClass("ui-state-error");}});$("#addExternalEmailButton").click(function(){addExternalEmailDialog.dialog("open");});var extendReinstateEmailField=$("#extendEmail");var extendReinstateExpDaysField=$("#extendEmailExp");var extendReinstateReasonField=$("#extendEmailReason");var extendReinstateInputFields=$([]).add(extendReinstateEmailField).add(extendReinstateExpDaysField).add(extendReinstateReasonField);var extendReinstateEmailDialog=$("#extendReinstateAccessDialogForm").dialog({autoOpen:false,height:300,width:400,modal:true,dialogClass:'device-pairing-dialog',buttons:{Confirm:extendReinstateEmail,Cancel:function(){extendReinstateEmailDialog.dialog("close");}},close:function(){extendReinstateEmailDialog.find("form")[0].reset();extendReinstateInputFields.removeClass("ui-state-error");}});$("#extendReinstateButton").click(function(){var selectedEmail=$("input[name=userEmail]:checked").val();extendReinstateEmailField.val(selectedEmail);extendReinstateEmailDialog.dialog("open");});var revokeEmailField=$("#revokeAccessEmail");var revokeReasonField=$("#revokeAccessReason");var revokeInputFields=$([]).add(revokeEmailField).add(revokeReasonField);var revokeAccessDialog=$("#revokeAccessDialogForm").dialog({autoOpen:false,height:300,width:400,modal:true,dialogClass:'device-pairing-dialog',buttons:{Confirm:revokeAccess,Cancel:function(){revokeAccessDialog.dialog("close");}},close:function(){revokeAccessDialog.find("form")[0].reset();revokeInputFields.removeClass("ui-state-error");}});$("#revokeButton").click(function(){var selectedEmail=$("input[name=userEmail]:checked").val();revokeEmailField.val(selectedEmail);revokeAccessDialog.dialog("open");});$("#viewDetailButton").click(function(){var userEmail=$("input[name=userEmail]:checked").attr("id");$(this).closest("form").append("<input type='hidden' name='userEmail' value='"+userEmail+"'/>");});}
function checkExpirationDays(expirationDaysField){if(!intRegex.test(expirationDaysField.val())){expirationDaysField.addClass("ui-state-error");return false;}
return true;}
function checkReason(reasonField){if(!reasonField.val()){reasonField.addClass("ui-state-error");return false;}
return true;}
function checkEmail(emailField){if(!emailField.val()||$.trim($(emailField).val()).length==0){emailField.addClass("ui-state-error");return false;}
return true;}
function addExternalEmail(){addExtEmailInputFields.removeClass("ui-state-error");var valid=true;valid=valid&&checkEmail(addExtEmailEmailField);valid=valid&&checkExpirationDays(addExtEmailExpDaysField);valid=valid&&checkReason(addExtEmailReasonField);if(valid){$.get("/pb/widgets/DevicePairingManagementController/addExternalEmail",{serviceName:$(".serviceNameHidden").text(),email:addExtEmailEmailField.val(),daysToExpiration:addExtEmailExpDaysField.val(),reason:addExtEmailReasonField.val(),antiForgeryToken:$(".antiForgeryToken").text()}).done(function(html){if(html.indexOf("externalEmailError")==-1){$(".pairedEmailsTable tbody").html(html);pairedEmailsTable.trigger("update");addEmailSelectionChangeListener();showPager();$("input[name=emailFilter]").prop("checked",function(){return this.getAttribute("checked")=="checked";});$("input[name=permissionFilter]").prop("checked",function(){return this.getAttribute("checked")=="checked";});$("input[name=emailAddress]").val("");$("input[name=name]").val("");fromDateElement.datepicker({defaultDate:"-1w",changeMonth:true,numberOfMonths:1,onClose:function(selectedDate){$("#toDate").datepicker("option","minDate",selectedDate);}});fromDateElement.datepicker("setDate","-180d");toDateElement.datepicker({defaultDate:"+0",changeMonth:true,numberOfMonths:1,onClose:function(selectedDate){$("#fromDate").datepicker("option","maxDate",selectedDate);}});toDateElement.datepicker("setDate","+1d");if(html){pairedEmailsTable.trigger("sorton",[[0,1]]);}}else{$(".pairingManagementBody").append(html);displayAddExternalEmailErrorDialog();}});addExternalEmailDialog.dialog("close");}
return valid;}
function displayAddExternalEmailErrorDialog(){$("#externalEmailError").dialog({modal:true,buttons:{Ok:function(){$(this).dialog("close");$(".pairingManagementBody").remove("#externalEmailError");}}});}
function extendReinstateEmail(){extendReinstateInputFields.removeClass("ui-state-error");var valid=true;valid=valid&&checkExpirationDays(extendReinstateExpDaysField);valid=valid&&checkReason(extendReinstateReasonField);var selectedEmail=extendReinstateEmailField.val();if(valid){$.get("/pb/widgets/DevicePairingManagementController/extendReinstateEmail",{serviceName:$(".serviceNameHidden").text(),extendReinstateEmail:selectedEmail,daysToExpiration:extendReinstateExpDaysField.val(),reason:extendReinstateReasonField.val(),emailFilter:$('input[name=emailFilter]:checked').attr("id"),permissionFilter:$('input[name=permissionFilter]:checked').attr("id"),emailAddress:$('input[name=emailAddress]').val(),name:$('input[name=name]').val(),fromDate:$('input[name=fromDate]').val(),toDate:$('input[name=toDate]').val(),antiForgeryToken:$(".antiForgeryToken").text()}).done(function(html){$(".pairedEmailsTable tbody").html(html);pairedEmailsTable.trigger("update");$("input[value="+"'"+selectedEmail+"'"+"]").prop("checked",true);});extendReinstateEmailDialog.dialog("close");}
return valid;}
function revokeAccess(){revokeInputFields.removeClass("ui-state-error");var valid=true;var selectedEmail=revokeEmailField.val();if(valid){$.get("/pb/widgets/DevicePairingManagementController/revokeAccess",{serviceName:$(".serviceNameHidden").text(),revokeEmail:selectedEmail,reason:revokeReasonField.val(),emailFilter:$('input[name=emailFilter]:checked').attr("id"),permissionFilter:$('input[name=permissionFilter]:checked').attr("id"),emailAddress:$('input[name=emailAddress]').val(),name:$('input[name=name]').val(),fromDate:$('input[name=fromDate]').val(),toDate:$('input[name=toDate]').val(),antiForgeryToken:$(".antiForgeryToken").text()}).done(function(html){$(".pairedEmailsTable tbody").html(html);pairedEmailsTable.trigger("update");$("input[value="+"'"+selectedEmail+"'"+"]").prop("checked",true);});revokeAccessDialog.dialog("close");}
return valid;}
var instAdminPairedDevicesTable=$(".inst_admin_userPairedDevicesTable");if(instAdminPairedDevicesTable.length){var pairingHistoryPagerOptions={container:$(".pager"),ajaxUrl:null,customAjaxUrl:function(table,url){return url;},ajaxObject:{dataType:'json'},ajaxProcessing:null,processAjaxOnInit:false,output:'',updateArrows:true,page:0,size:10,savePages:false,storageKey:'pairingHistory-pager',pageReset:0,fixedHeight:false,removeRows:true,countChildRows:false,cssNext:'.next',cssPrev:'.prev',cssFirst:'.first',cssLast:'.last',cssGoto:'.gotoPage',cssPageDisplay:'.pagedisplay',cssPageSize:'.pagesize',cssDisabled:'disabled',cssErrorRow:'tablesorter-errorRow'};$.get("/pb/widgets/DevicePairingManagementController/pairedDevicesOfUser",{serviceName:$(".serviceNameHidden").text(),userEmail:$(".userEmailHidden").text()}).done(function(html){$(".inst_admin_userPairedDevicesTable tbody").html(html);instAdminPairedDevicesTable.trigger("update");addDeviceSelectionChangeListener();handleEmptyPairedDevices(html);handleNonEmptyPairedDevices(html);});instAdminPairedDevicesTable.tablesorter({theme:'ice',headers:{0:{sorter:false}},dateFormat:'us',widgets:['zebra']});var selectedDevicesArray=[];var unpairDialog=$("#unpairDialogForm").dialog({autoOpen:false,height:300,width:400,modal:true,dialogClass:'device-pairing-dialog',buttons:{Confirm:function(){instAdmin_unpairSelectedDevices(selectedDevicesArray);unpairDialog.dialog("close");},Cancel:function(){unpairDialog.dialog("close");}},close:function(){selectedDevicesArray=[];}});$("#instAdminUnpairSelected").click(function(){selectedDevicesArray=[];var unpairDialogForm=$("#unpairDialogForm");unpairDialogForm.empty();$(".inst_admin_userPairedDevicesTable input[name='deviceId']:checked").each(function(){selectedDevicesArray.push($(this).attr('id'));unpairDialogForm.append("<p>"+$(this).val()+"</p>");});unpairDialog.dialog("open");});$("#instAdminUnpairAll").click(function(){selectedDevicesArray=[];var unpairDialogForm=$("#unpairDialogForm");unpairDialogForm.empty();$(".inst_admin_userPairedDevicesTable input[name='deviceId']").each(function(){selectedDevicesArray.push($(this).attr('id'));unpairDialogForm.append("<p>"+$(this).val()+"</p>");});unpairDialog.dialog("open");});$.get("/pb/widgets/DevicePairingManagementController/pairingHistory",{serviceName:$(".serviceNameHidden").text(),userEmail:$(".userEmailHidden").text()}).done(function(html){if(html.indexOf("<tr>")>=0){$(".pairingHistoryTable tbody").html(html);$(".pairingHistoryTable").trigger("update");if($('.pairingHistoryTable > tbody > tr').length>pairingHistoryPagerOptions.size)
$(".pairingHistoryTable").tablesorterPager(pairingHistoryPagerOptions);}else{$(".pairingHistoryTable").replaceWith("<p>None</p>");}});$(".pairingHistoryTable").tablesorter({theme:'ice',dateFormat:'us',widgets:['zebra']});}
function instAdmin_unpairSelectedDevices(selectedDevicesArray){$.get("/pb/widgets/DevicePairingManagementController/unpairSelected",{serviceName:$(".serviceNameHidden").text(),userEmail:$(".userEmailHidden").text(),devices:JSON.stringify(selectedDevicesArray),antiForgeryToken:$(".antiForgeryToken").text()}).done(function(html){$(".inst_admin_userPairedDevicesTable tbody").html(html);$(".inst_admin_userPairedDevicesTable").trigger("update");addDeviceSelectionChangeListener();handleEmptyPairedDevices(html);});}
function addDeviceSelectionChangeListener(){$("#instAdminUnpairSelected").prop("disabled",true);$("input[name=deviceId]").change(function(){if($("input[name=deviceId]:checked").length>0){$("#instAdminUnpairSelected").prop("disabled",false);}else{$("#instAdminUnpairSelected").prop("disabled",true);}});}
function handleEmptyPairedDevices(tableData){if(tableData.indexOf("<tr>")<0){$(".inst_admin_userPairedDevicesTable").replaceWith("<p>None</p>");$("#instAdminUnpairSelected").remove();$("#instAdminUnpairAll").remove();}}
function handleNonEmptyPairedDevices(tableData){if(tableData.indexOf("<tr>")>0){$(".inst_admin_userPairedDevicesTable").show();$(".unpairButtonsPanel").show();}}});
function emailDomainsConfirmation(){$(".confirmation").toggleClass("showEmailDomainsConfirmation");};/*! TableSorter (FORK) v2.24.5 */;(function($){'use strict';var ts=$.tablesorter={version:'2.24.5',parsers:[],widgets:[],defaults:{theme:'default',widthFixed:false,showProcessing:false,headerTemplate:'{content}',onRenderTemplate:null,onRenderHeader:null,cancelSelection:true,tabIndex:true,dateFormat:'mmddyyyy',sortMultiSortKey:'shiftKey',sortResetKey:'ctrlKey',usNumberFormat:true,delayInit:false,serverSideSorting:false,resort:true,headers:{},ignoreCase:true,sortForce:null,sortList:[],sortAppend:null,sortStable:false,sortInitialOrder:'asc',sortLocaleCompare:false,sortReset:false,sortRestart:false,emptyTo:'bottom',stringTo:'max',textExtraction:'basic',textAttribute:'data-text',textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:['even','odd']},initWidgets:true,widgetClass:'widget-{name}',initialized:null,tableClass:'',cssAsc:'',cssDesc:'',cssNone:'',cssHeader:'',cssHeaderRow:'',cssProcessing:'',cssChildRow:'tablesorter-childRow',cssInfoBlock:'tablesorter-infoOnly',cssNoSort:'tablesorter-noSort',cssIgnoreRow:'tablesorter-ignoreRow',cssIcon:'tablesorter-icon',cssIconNone:'',cssIconAsc:'',cssIconDesc:'',pointerClick:'click',pointerDown:'mousedown',pointerUp:'mouseup',selectorHeaders:'> thead th, > thead td',selectorSort:'th, td',selectorRemove:'.remove-me',debug:false,headerList:[],empties:{},strings:{},parsers:[]},css:{table:'tablesorter',cssHasChild:'tablesorter-hasChildRow',childRow:'tablesorter-childRow',colgroup:'tablesorter-colgroup',header:'tablesorter-header',headerRow:'tablesorter-headerRow',headerIn:'tablesorter-header-inner',icon:'tablesorter-icon',processing:'tablesorter-processing',sortAsc:'tablesorter-headerAsc',sortDesc:'tablesorter-headerDesc',sortNone:'tablesorter-headerUnSorted'},language:{sortAsc:'Ascending sort applied, ',sortDesc:'Descending sort applied, ',sortNone:'No sort applied, ',sortDisabled:'sorting is disabled',nextAsc:'activate to apply an ascending sort',nextDesc:'activate to apply a descending sort',nextNone:'activate to remove the sort'},regex:{templateContent:/\{content\}/g,templateIcon:/\{icon\}/g,templateName:/\{name\}/i,spaces:/\s+/g,nonWord:/\W/g,formElements:/(input|select|button|textarea)/i,chunk:/(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i,comma:/,/g,digitNonUS:/[\s|\.]/g,digitNegativeTest:/^\s*\([.\d]+\)/,digitNegativeReplace:/^\s*\(([.\d]+)\)/,digitTest:/^[\-+(]?\d+[)]?$/,digitReplace:/[,.'"\s]/g},string:{max:1,min:-1,emptymin:1,emptymax:-1,zero:0,none:0,'null':0,top:true,bottom:false},instanceMethods:{},setup:function(table,c){if(!table||!table.tHead||table.tBodies.length===0||table.hasInitialized===true){if(c.debug){if(table.hasInitialized){console.warn('Stopping initialization. Tablesorter has already been initialized');}else{console.error('Stopping initialization! No table, thead or tbody');}}
return;}
var tmp='',$table=$(table),meta=$.metadata;table.hasInitialized=false;table.isProcessing=true;table.config=c;$.data(table,'tablesorter',c);if(c.debug){console[console.group?'group':'log']('Initializing tablesorter');$.data(table,'startoveralltimer',new Date());}
c.supportsDataObject=(function(version){version[0]=parseInt(version[0],10);return(version[0]>1)||(version[0]===1&&parseInt(version[1],10)>=4);})($.fn.jquery.split('.'));c.emptyTo=c.emptyTo.toLowerCase();c.stringTo=c.stringTo.toLowerCase();c.last={sortList:[],clickedIndex:-1};if(!/tablesorter\-/.test($table.attr('class'))){tmp=(c.theme!==''?' tablesorter-'+c.theme:'');}
c.table=table;c.$table=$table.addClass(ts.css.table+' '+c.tableClass+tmp).attr('role','grid');c.$headers=$table.find(c.selectorHeaders);if(!c.namespace){c.namespace='.tablesorter'+Math.random().toString(16).slice(2);}else{c.namespace='.'+c.namespace.replace(ts.regex.nonWord,'');}
c.$table.children().children('tr').attr('role','row');c.$tbodies=$table.children('tbody:not(.'+c.cssInfoBlock+')').attr({'aria-live':'polite','aria-relevant':'all'});if(c.$table.children('caption').length){tmp=c.$table.children('caption')[0];if(!tmp.id){tmp.id=c.namespace.slice(1)+'caption';}
c.$table.attr('aria-labelledby',tmp.id);}
c.widgetInit={};c.textExtraction=c.$table.attr('data-text-extraction')||c.textExtraction||'basic';ts.buildHeaders(c);ts.fixColumnWidth(table);ts.addWidgetFromClass(table);ts.applyWidgetOptions(table);ts.setupParsers(c);c.totalRows=0;if(!c.delayInit){ts.buildCache(c);}
ts.bindEvents(table,c.$headers,true);ts.bindMethods(c);if(c.supportsDataObject&&typeof $table.data().sortlist!=='undefined'){c.sortList=$table.data().sortlist;}else if(meta&&($table.metadata()&&$table.metadata().sortlist)){c.sortList=$table.metadata().sortlist;}
ts.applyWidget(table,true);if(c.sortList.length>0){ts.sortOn(c,c.sortList,{},!c.initWidgets);}else{ts.setHeadersCss(c);if(c.initWidgets){ts.applyWidget(table,false);}}
if(c.showProcessing){$table.unbind('sortBegin'+c.namespace+' sortEnd'+c.namespace).bind('sortBegin'+c.namespace+' sortEnd'+c.namespace,function(e){clearTimeout(c.processTimer);ts.isProcessing(table);if(e.type==='sortBegin'){c.processTimer=setTimeout(function(){ts.isProcessing(table,true);},500);}});}
table.hasInitialized=true;table.isProcessing=false;if(c.debug){console.log('Overall initialization time: '+ts.benchmark($.data(table,'startoveralltimer')));if(c.debug&&console.groupEnd){console.groupEnd();}}
$table.trigger('tablesorter-initialized',table);if(typeof c.initialized==='function'){c.initialized(table);}},bindMethods:function(c){var $table=c.$table,namespace=c.namespace,events=('sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete '+'sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup '+'mouseleave ').split(' ').join(namespace+' ');$table.unbind(events.replace(ts.regex.spaces,' ')).bind('sortReset'+namespace,function(e,callback){e.stopPropagation();ts.sortReset(this.config,callback);}).bind('updateAll'+namespace,function(e,resort,callback){e.stopPropagation();ts.updateAll(this.config,resort,callback);}).bind('update'+namespace+' updateRows'+namespace,function(e,resort,callback){e.stopPropagation();ts.update(this.config,resort,callback);}).bind('updateHeaders'+namespace,function(e,callback){e.stopPropagation();ts.updateHeaders(this.config,callback);}).bind('updateCell'+namespace,function(e,cell,resort,callback){e.stopPropagation();ts.updateCell(this.config,cell,resort,callback);}).bind('addRows'+namespace,function(e,$row,resort,callback){e.stopPropagation();ts.addRows(this.config,$row,resort,callback);}).bind('updateComplete'+namespace,function(){this.isUpdating=false;}).bind('sorton'+namespace,function(e,list,callback,init){e.stopPropagation();ts.sortOn(this.config,list,callback,init);}).bind('appendCache'+namespace,function(e,callback,init){e.stopPropagation();ts.appendCache(this.config,init);if($.isFunction(callback)){callback(this);}}).bind('updateCache'+namespace,function(e,callback,$tbodies){e.stopPropagation();ts.updateCache(this.config,callback,$tbodies);}).bind('applyWidgetId'+namespace,function(e,id){e.stopPropagation();ts.getWidgetById(id).format(this,this.config,this.config.widgetOptions);}).bind('applyWidgets'+namespace,function(e,init){e.stopPropagation();ts.applyWidget(this,init);}).bind('refreshWidgets'+namespace,function(e,all,dontapply){e.stopPropagation();ts.refreshWidgets(this,all,dontapply);}).bind('destroy'+namespace,function(e,removeClasses,callback){e.stopPropagation();ts.destroy(this,removeClasses,callback);}).bind('resetToLoadState'+namespace,function(e){e.stopPropagation();ts.removeWidget(this,true,false);c=$.extend(true,ts.defaults,c.originalSettings);this.hasInitialized=false;ts.setup(this,c);});},bindEvents:function(table,$headers,core){table=$(table)[0];var tmp,c=table.config,namespace=c.namespace,downTarget=null;if(core!==true){$headers.addClass(namespace.slice(1)+'_extra_headers');tmp=$.fn.closest?$headers.closest('table')[0]:$headers.parents('table')[0];if(tmp&&tmp.nodeName==='TABLE'&&tmp!==table){$(tmp).addClass(namespace.slice(1)+'_extra_table');}}
tmp=(c.pointerDown+' '+c.pointerUp+' '+c.pointerClick+' sort keyup ').replace(ts.regex.spaces,' ').split(' ').join(namespace+' ');$headers.find(c.selectorSort).add($headers.filter(c.selectorSort)).unbind(tmp).bind(tmp,function(e,external){var $cell,cell,temp,$target=$(e.target),type=' '+e.type+' ';if(((e.which||e.button)!==1&&!type.match(' '+c.pointerClick+' | sort | keyup '))||(type===' keyup '&&e.which!==13)||(type.match(' '+c.pointerClick+' ')&&typeof e.which!=='undefined')){return;}
if(type.match(' '+c.pointerUp+' ')&&downTarget!==e.target&&external!==true){return;}
if(type.match(' '+c.pointerDown+' ')){downTarget=e.target;temp=$target.jquery.split('.');if(temp[0]==='1'&&temp[1]<4){e.preventDefault();}
return;}
downTarget=null;if(ts.regex.formElements.test(e.target.nodeName)||$target.hasClass(c.cssNoSort)||$target.parents('.'+c.cssNoSort).length>0||$target.parents('button').length>0){return!c.cancelSelection;}
if(c.delayInit&&ts.isEmptyObject(c.cache)){ts.buildCache(c);}
$cell=$.fn.closest?$(this).closest('th, td'):/TH|TD/.test(this.nodeName)?$(this):$(this).parents('th, td');temp=$headers.index($cell);c.last.clickedIndex=(temp<0)?$cell.attr('data-column'):temp;cell=c.$headers[c.last.clickedIndex];if(cell&&!cell.sortDisabled){ts.initSort(c,cell,e);}});if(c.cancelSelection){$headers.attr('unselectable','on').bind('selectstart',false).css({'user-select':'none','MozUserSelect':'none'});}},buildHeaders:function(c){var $temp,icon,timer,indx;c.headerList=[];c.headerContent=[];c.sortVars=[];if(c.debug){timer=new Date();}
c.columns=ts.computeColumnIndex(c.$table.children('thead, tfoot').children('tr'));icon=c.cssIcon?'<i class="'+(c.cssIcon===ts.css.icon?ts.css.icon:c.cssIcon+' '+ts.css.icon)+'"></i>':'';c.$headers=$($.map(c.$table.find(c.selectorHeaders),function(elem,index){var configHeaders,header,column,template,tmp,$elem=$(elem);if($elem.parent().hasClass(c.cssIgnoreRow)){return;}
configHeaders=ts.getColumnData(c.table,c.headers,index,true);c.headerContent[index]=$elem.html();if(c.headerTemplate!==''&&!$elem.find('.'+ts.css.headerIn).length){template=c.headerTemplate.replace(ts.regex.templateContent,$elem.html()).replace(ts.regex.templateIcon,$elem.find('.'+ts.css.icon).length?'':icon);if(c.onRenderTemplate){header=c.onRenderTemplate.apply($elem,[index,template]);if(header&&typeof header==='string'){template=header;}}
$elem.html('<div class="'+ts.css.headerIn+'">'+template+'</div>');}
if(c.onRenderHeader){c.onRenderHeader.apply($elem,[index,c,c.$table]);}
column=parseInt($elem.attr('data-column'),10);elem.column=column;tmp=ts.getData($elem,configHeaders,'sortInitialOrder')||c.sortInitialOrder;c.sortVars[column]={count:-1,order:ts.formatSortingOrder(tmp)?[1,0,2]:[0,1,2],lockedOrder:false};tmp=ts.getData($elem,configHeaders,'lockedOrder')||false;if(typeof tmp!=='undefined'&&tmp!==false){c.sortVars[column].lockedOrder=true;c.sortVars[column].order=ts.formatSortingOrder(tmp)?[1,1,1]:[0,0,0];}
c.headerList[index]=elem;$elem.addClass(ts.css.header+' '+c.cssHeader).parent().addClass(ts.css.headerRow+' '+c.cssHeaderRow).attr('role','row');if(c.tabIndex){$elem.attr('tabindex',0);}
return elem;}));c.$headerIndexed=[];for(indx=0;indx<c.columns;indx++){if(ts.isEmptyObject(c.sortVars[indx])){c.sortVars[indx]={};}
$temp=c.$headers.filter('[data-column="'+indx+'"]');c.$headerIndexed[indx]=$temp.length?$temp.not('.sorter-false').length?$temp.not('.sorter-false').filter(':last'):$temp.filter(':last'):$();}
c.$table.find(c.selectorHeaders).attr({scope:'col',role:'columnheader'});ts.updateHeader(c);if(c.debug){console.log('Built headers:'+ts.benchmark(timer));console.log(c.$headers);}},addInstanceMethods:function(methods){$.extend(ts.instanceMethods,methods);},setupParsers:function(c,$tbodies){var rows,list,span,max,colIndex,indx,header,configHeaders,noParser,parser,extractor,time,tbody,len,table=c.table,tbodyIndex=0,debug={};c.$tbodies=c.$table.children('tbody:not(.'+c.cssInfoBlock+')');tbody=typeof $tbodies==='undefined'?c.$tbodies:$tbodies;len=tbody.length;if(len===0){return c.debug?console.warn('Warning: *Empty table!* Not building a parser cache'):'';}else if(c.debug){time=new Date();console[console.group?'group':'log']('Detecting parsers for each column');}
list={extractors:[],parsers:[]};while(tbodyIndex<len){rows=tbody[tbodyIndex].rows;if(rows.length){colIndex=0;max=c.columns;for(indx=0;indx<max;indx++){header=c.$headerIndexed[colIndex];if(header&&header.length){configHeaders=ts.getColumnData(table,c.headers,colIndex);extractor=ts.getParserById(ts.getData(header,configHeaders,'extractor'));parser=ts.getParserById(ts.getData(header,configHeaders,'sorter'));noParser=ts.getData(header,configHeaders,'parser')==='false';c.empties[colIndex]=(ts.getData(header,configHeaders,'empty')||c.emptyTo||(c.emptyToBottom?'bottom':'top')).toLowerCase();c.strings[colIndex]=(ts.getData(header,configHeaders,'string')||c.stringTo||'max').toLowerCase();if(noParser){parser=ts.getParserById('no-parser');}
if(!extractor){extractor=false;}
if(!parser){parser=ts.detectParserForColumn(c,rows,-1,colIndex);}
if(c.debug){debug['('+colIndex+') '+header.text()]={parser:parser.id,extractor:extractor?extractor.id:'none',string:c.strings[colIndex],empty:c.empties[colIndex]};}
list.parsers[colIndex]=parser;list.extractors[colIndex]=extractor;span=header[0].colSpan-1;if(span>0){colIndex+=span;max+=span;}}
colIndex++;}}
tbodyIndex+=(list.parsers.length)?len:1;}
if(c.debug){if(!ts.isEmptyObject(debug)){console[console.table?'table':'log'](debug);}else{console.warn('  No parsers detected!');}
console.log('Completed detecting parsers'+ts.benchmark(time));if(console.groupEnd){console.groupEnd();}}
c.parsers=list.parsers;c.extractors=list.extractors;},addParser:function(parser){var indx,len=ts.parsers.length,add=true;for(indx=0;indx<len;indx++){if(ts.parsers[indx].id.toLowerCase()===parser.id.toLowerCase()){add=false;}}
if(add){ts.parsers.push(parser);}},getParserById:function(name){if(name=='false'){return false;}
var indx,len=ts.parsers.length;for(indx=0;indx<len;indx++){if(ts.parsers[indx].id.toLowerCase()===(name.toString()).toLowerCase()){return ts.parsers[indx];}}
return false;},detectParserForColumn:function(c,rows,rowIndex,cellIndex){var cur,$node,indx=ts.parsers.length,node=false,nodeValue='',keepLooking=true;while(nodeValue===''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=rows[rowIndex].cells[cellIndex];nodeValue=ts.getElementText(c,node,cellIndex);$node=$(node);if(c.debug){console.log('Checking if value was empty on row '+rowIndex+', column: '+
cellIndex+': "'+nodeValue+'"');}}else{keepLooking=false;}}
while(--indx>=0){cur=ts.parsers[indx];if(cur&&cur.id!=='text'&&cur.is&&cur.is(nodeValue,c.table,node,$node)){return cur;}}
return ts.getParserById('text');},getElementText:function(c,node,cellIndex){if(!node){return'';}
var tmp,extract=c.textExtraction||'',$node=node.jquery?node:$(node);if(typeof extract==='string'){if(extract==='basic'&&typeof(tmp=$node.attr(c.textAttribute))!=='undefined'){return $.trim(tmp);}
return $.trim(node.textContent||$node.text());}else{if(typeof extract==='function'){return $.trim(extract($node[0],c.table,cellIndex));}else if(typeof(tmp=ts.getColumnData(c.table,extract,cellIndex))==='function'){return $.trim(tmp($node[0],c.table,cellIndex));}}
return $.trim($node[0].textContent||$node.text());},getParsedText:function(c,cell,colIndex,txt){if(typeof txt==='undefined'){txt=ts.getElementText(c,cell,colIndex);}
var val=''+txt,parser=c.parsers[colIndex],extractor=c.extractors[colIndex];if(parser){if(extractor&&typeof extractor.format==='function'){txt=extractor.format(txt,c.table,cell,colIndex);}
val=parser.id==='no-parser'?'':parser.format(''+txt,c.table,cell,colIndex);if(c.ignoreCase&&typeof val==='string'){val=val.toLowerCase();}}
return val;},buildCache:function(c,callback,$tbodies){var cache,val,txt,rowIndex,colIndex,tbodyIndex,$tbody,$row,cols,$cells,cell,cacheTime,totalRows,rowData,prevRowData,colMax,span,cacheIndex,max,len,table=c.table,parsers=c.parsers;c.$tbodies=c.$table.children('tbody:not(.'+c.cssInfoBlock+')');$tbody=typeof $tbodies==='undefined'?c.$tbodies:$tbodies,c.cache={};c.totalRows=0;if(!parsers){return c.debug?console.warn('Warning: *Empty table!* Not building a cache'):'';}
if(c.debug){cacheTime=new Date();}
if(c.showProcessing){ts.isProcessing(table,true);}
for(tbodyIndex=0;tbodyIndex<$tbody.length;tbodyIndex++){colMax=[];cache=c.cache[tbodyIndex]={normalized:[]};totalRows=($tbody[tbodyIndex]&&$tbody[tbodyIndex].rows.length)||0;for(rowIndex=0;rowIndex<totalRows;++rowIndex){rowData={child:[],raw:[]};$row=$($tbody[tbodyIndex].rows[rowIndex]);cols=[];if($row.hasClass(c.cssChildRow)&&rowIndex!==0){len=cache.normalized.length-1;prevRowData=cache.normalized[len][c.columns];prevRowData.$row=prevRowData.$row.add($row);if(!$row.prev().hasClass(c.cssChildRow)){$row.prev().addClass(ts.css.cssHasChild);}
$cells=$row.children('th, td');len=prevRowData.child.length;prevRowData.child[len]=[];cacheIndex=0;max=c.columns;for(colIndex=0;colIndex<max;colIndex++){cell=$cells[colIndex];if(cell){prevRowData.child[len][colIndex]=ts.getParsedText(c,cell,colIndex);span=$cells[colIndex].colSpan-1;if(span>0){cacheIndex+=span;max+=span;}}
cacheIndex++;}
continue;}
rowData.$row=$row;rowData.order=rowIndex;cacheIndex=0;max=c.columns;for(colIndex=0;colIndex<max;++colIndex){cell=$row[0].cells[colIndex];if(typeof parsers[cacheIndex]==='undefined'){if(c.debug){console.warn('No parser found for column '+colIndex+'; cell:',cell,'does it have a header?');}}else if(cell){val=ts.getElementText(c,cell,cacheIndex);rowData.raw[cacheIndex]=val;txt=ts.getParsedText(c,cell,cacheIndex,val);cols[cacheIndex]=txt;if((parsers[cacheIndex].type||'').toLowerCase()==='numeric'){colMax[cacheIndex]=Math.max(Math.abs(txt)||0,colMax[cacheIndex]||0);}
span=cell.colSpan-1;if(span>0){cacheIndex+=span;max+=span;}}
cacheIndex++;}
cols[c.columns]=rowData;cache.normalized.push(cols);}
cache.colMax=colMax;c.totalRows+=cache.normalized.length;}
if(c.showProcessing){ts.isProcessing(table);}
if(c.debug){console.log('Building cache for '+totalRows+' rows'+ts.benchmark(cacheTime));}
if($.isFunction(callback)){callback(table);}},getColumnText:function(table,column,callback,rowFilter){table=$(table)[0];var tbodyIndex,rowIndex,cache,row,tbodyLen,rowLen,raw,parsed,$cell,result,hasCallback=typeof callback==='function',allColumns=column==='all',data={raw:[],parsed:[],$cell:[]},c=table.config;if(ts.isEmptyObject(c)){if(c.debug){console.warn('No cache found - aborting getColumnText function!');}}else{tbodyLen=c.$tbodies.length;for(tbodyIndex=0;tbodyIndex<tbodyLen;tbodyIndex++){cache=c.cache[tbodyIndex].normalized;rowLen=cache.length;for(rowIndex=0;rowIndex<rowLen;rowIndex++){row=cache[rowIndex];if(rowFilter&&!row[c.columns].$row.is(rowFilter)){continue;}
result=true;parsed=(allColumns)?row.slice(0,c.columns):row[column];row=row[c.columns];raw=(allColumns)?row.raw:row.raw[column];$cell=(allColumns)?row.$row.children():row.$row.children().eq(column);if(hasCallback){result=callback({tbodyIndex:tbodyIndex,rowIndex:rowIndex,parsed:parsed,raw:raw,$row:row.$row,$cell:$cell});}
if(result!==false){data.parsed.push(parsed);data.raw.push(raw);data.$cell.push($cell);}}}
return data;}},setHeadersCss:function(c){var $sorted,indx,column,list=c.sortList,len=list.length,none=ts.css.sortNone+' '+c.cssNone,css=[ts.css.sortAsc+' '+c.cssAsc,ts.css.sortDesc+' '+c.cssDesc],cssIcon=[c.cssIconAsc,c.cssIconDesc,c.cssIconNone],aria=['ascending','descending'],$headers=c.$table.find('tfoot tr').children().add($(c.namespace+'_extra_headers')).removeClass(css.join(' '));c.$headers.removeClass(css.join(' ')).addClass(none).attr('aria-sort','none').find('.'+ts.css.icon).removeClass(cssIcon.join(' ')).addClass(cssIcon[2]);for(indx=0;indx<len;indx++){if(list[indx][1]!==2){$sorted=c.$headers.filter(function(i){var include=true,$el=c.$headers.eq(i),col=parseInt($el.attr('data-column'),10),end=col+c.$headers[i].colSpan;for(;col<end;col++){include=include?ts.isValueInArray(col,c.sortList)>-1:false;}
return include;});$sorted=$sorted.not('.sorter-false').filter('[data-column="'+list[indx][0]+'"]'+(len===1?':last':''));if($sorted.length){for(column=0;column<$sorted.length;column++){if(!$sorted[column].sortDisabled){$sorted.eq(column).removeClass(none).addClass(css[list[indx][1]]).attr('aria-sort',aria[list[indx][1]]).find('.'+ts.css.icon).removeClass(cssIcon[2]).addClass(cssIcon[list[indx][1]]);}}
if($headers.length){$headers.filter('[data-column="'+list[indx][0]+'"]').removeClass(none).addClass(css[list[indx][1]]);}}}}
len=c.$headers.length;for(indx=0;indx<len;indx++){ts.setColumnAriaLabel(c,c.$headers.eq(indx));}},setColumnAriaLabel:function(c,$header,nextSort){if($header.length){var column=parseInt($header.attr('data-column'),10),tmp=$header.hasClass(ts.css.sortAsc)?'sortAsc':$header.hasClass(ts.css.sortDesc)?'sortDesc':'sortNone',txt=$.trim($header.text())+': '+ts.language[tmp];if($header.hasClass('sorter-false')||nextSort===false){txt+=ts.language.sortDisabled;}else{nextSort=c.sortVars[column].order[(c.sortVars[column].count+1)%(c.sortReset?3:2)];txt+=ts.language[nextSort===0?'nextAsc':nextSort===1?'nextDesc':'nextNone'];}
$header.attr('aria-label',txt);}},updateHeader:function(c){var index,isDisabled,$header,col,table=c.table,len=c.$headers.length;for(index=0;index<len;index++){$header=c.$headers.eq(index);col=ts.getColumnData(table,c.headers,index,true);isDisabled=ts.getData($header,col,'sorter')==='false'||ts.getData($header,col,'parser')==='false';ts.setColumnSort(c,$header,isDisabled);}},setColumnSort:function(c,$header,isDisabled){var id=c.table.id;$header[0].sortDisabled=isDisabled;$header[isDisabled?'addClass':'removeClass']('sorter-false').attr('aria-disabled',''+isDisabled);if(c.tabIndex){if(isDisabled){$header.removeAttr('tabindex');}else{$header.attr('tabindex','0');}}
if(id){if(isDisabled){$header.removeAttr('aria-controls');}else{$header.attr('aria-controls',id);}}},updateHeaderSortCount:function(c,list){var col,dir,group,indx,primary,temp,val,order,sortList=list||c.sortList,len=sortList.length;c.sortList=[];for(indx=0;indx<len;indx++){val=sortList[indx];col=parseInt(val[0],10);if(col<c.columns){order=c.sortVars[col].order;dir=(''+val[1]).match(/^(1|d|s|o|n)/);dir=dir?dir[0]:'';switch(dir){case'1':case'd':dir=1;break;case's':dir=primary||0;break;case'o':temp=order[(primary||0)%(c.sortReset?3:2)];dir=temp===0?1:temp===1?0:2;break;case'n':dir=order[(++c.sortVars[col].count)%(c.sortReset?3:2)];break;default:dir=0;break;}
primary=indx===0?dir:primary;group=[col,parseInt(dir,10)||0];c.sortList.push(group);dir=$.inArray(group[1],order);c.sortVars[col].count=dir>=0?dir:group[1]%(c.sortReset?3:2);}}},updateAll:function(c,resort,callback){var table=c.table;table.isUpdating=true;ts.refreshWidgets(table,true,true);ts.buildHeaders(c);ts.bindEvents(table,c.$headers,true);ts.bindMethods(c);ts.commonUpdate(c,resort,callback);},update:function(c,resort,callback){var table=c.table;table.isUpdating=true;ts.updateHeader(c);ts.commonUpdate(c,resort,callback);},updateHeaders:function(c,callback){c.table.isUpdating=true;ts.buildHeaders(c);ts.bindEvents(c.table,c.$headers,true);ts.resortComplete(c,callback);},updateCell:function(c,cell,resort,callback){c.table.isUpdating=true;c.$table.find(c.selectorRemove).remove();var tmp,indx,row,icell,cache,len,$tbodies=c.$tbodies,$cell=$(cell),tbodyIndex=$tbodies.index($.fn.closest?$cell.closest('tbody'):$cell.parents('tbody').filter(':first')),tbcache=c.cache[tbodyIndex],$row=$.fn.closest?$cell.closest('tr'):$cell.parents('tr').filter(':first');cell=$cell[0];if($tbodies.length&&tbodyIndex>=0){row=$tbodies.eq(tbodyIndex).find('tr').index($row);cache=tbcache.normalized[row];len=$row[0].cells.length;if(len!==c.columns){icell=0;tmp=false;for(indx=0;indx<len;indx++){if(!tmp&&$row[0].cells[indx]!==cell){icell+=$row[0].cells[indx].colSpan;}else{tmp=true;}}}else{icell=$cell.index();}
tmp=ts.getElementText(c,cell,icell);cache[c.columns].raw[icell]=tmp;tmp=ts.getParsedText(c,cell,icell,tmp);cache[icell]=tmp;cache[c.columns].$row=$row;if((c.parsers[icell].type||'').toLowerCase()==='numeric'){tbcache.colMax[icell]=Math.max(Math.abs(tmp)||0,tbcache.colMax[icell]||0);}
tmp=resort!=='undefined'?resort:c.resort;if(tmp!==false){ts.checkResort(c,tmp,callback);}else{ts.resortComplete(c,callback);}}},addRows:function(c,$row,resort,callback){var txt,val,tbodyIndex,rowIndex,rows,cellIndex,len,cacheIndex,rowData,cells,cell,span,valid=typeof $row==='string'&&c.$tbodies.length===1&&/<tr/.test($row||''),table=c.table;if(valid){$row=$($row);c.$tbodies.append($row);}else if(!$row||!($row instanceof jQuery)||($.fn.closest?$row.closest('table')[0]:$row.parents('table')[0])!==c.table){if(c.debug){console.error('addRows method requires (1) a jQuery selector reference to rows that have already '+'been added to the table, or (2) row HTML string to be added to a table with only one tbody');}
return false;}
table.isUpdating=true;if(ts.isEmptyObject(c.cache)){ts.updateHeader(c);ts.commonUpdate(c,resort,callback);}else{rows=$row.filter('tr').attr('role','row').length;tbodyIndex=c.$tbodies.index($row.parents('tbody').filter(':first'));if(!(c.parsers&&c.parsers.length)){ts.setupParsers(c);}
for(rowIndex=0;rowIndex<rows;rowIndex++){cacheIndex=0;len=$row[rowIndex].cells.length;cells=[];rowData={child:[],raw:[],$row:$row.eq(rowIndex),order:c.cache[tbodyIndex].normalized.length};for(cellIndex=0;cellIndex<len;cellIndex++){cell=$row[rowIndex].cells[cellIndex];txt=ts.getElementText(c,cell,cacheIndex);rowData.raw[cacheIndex]=txt;val=ts.getParsedText(c,cell,cacheIndex,txt);cells[cacheIndex]=val;if((c.parsers[cacheIndex].type||'').toLowerCase()==='numeric'){c.cache[tbodyIndex].colMax[cacheIndex]=Math.max(Math.abs(val)||0,c.cache[tbodyIndex].colMax[cacheIndex]||0);}
span=cell.colSpan-1;if(span>0){cacheIndex+=span;}
cacheIndex++;}
cells[c.columns]=rowData;c.cache[tbodyIndex].normalized.push(cells);}
ts.checkResort(c,resort,callback);}},updateCache:function(c,callback,$tbodies){if(!(c.parsers&&c.parsers.length)){ts.setupParsers(c,$tbodies);}
ts.buildCache(c,callback,$tbodies);},appendCache:function(c,init){var parsed,totalRows,$tbody,$curTbody,rowIndex,tbodyIndex,appendTime,table=c.table,wo=c.widgetOptions,$tbodies=c.$tbodies,rows=[],cache=c.cache;if(ts.isEmptyObject(cache)){return c.appender?c.appender(table,rows):table.isUpdating?c.$table.trigger('updateComplete',table):'';}
if(c.debug){appendTime=new Date();}
for(tbodyIndex=0;tbodyIndex<$tbodies.length;tbodyIndex++){$tbody=$tbodies.eq(tbodyIndex);if($tbody.length){$curTbody=ts.processTbody(table,$tbody,true);parsed=cache[tbodyIndex].normalized;totalRows=parsed.length;for(rowIndex=0;rowIndex<totalRows;rowIndex++){rows.push(parsed[rowIndex][c.columns].$row);if(!c.appender||(c.pager&&(!c.pager.removeRows||!wo.pager_removeRows)&&!c.pager.ajax)){$curTbody.append(parsed[rowIndex][c.columns].$row);}}
ts.processTbody(table,$curTbody,false);}}
if(c.appender){c.appender(table,rows);}
if(c.debug){console.log('Rebuilt table'+ts.benchmark(appendTime));}
if(!init&&!c.appender){ts.applyWidget(table);}
if(table.isUpdating){c.$table.trigger('updateComplete',table);}},commonUpdate:function(c,resort,callback){c.$table.find(c.selectorRemove).remove();ts.setupParsers(c);ts.buildCache(c);ts.checkResort(c,resort,callback);},initSort:function(c,cell,event){if(c.table.isUpdating){return setTimeout(function(){ts.initSort(c,cell,event);},50);}
var arry,indx,headerIndx,dir,temp,tmp,$header,notMultiSort=!event[c.sortMultiSortKey],table=c.table,len=c.$headers.length,col=parseInt($(cell).attr('data-column'),10),order=c.sortVars[col].order;c.$table.trigger('sortStart',table);c.sortVars[col].count=event[c.sortResetKey]?2:(c.sortVars[col].count+1)%(c.sortReset?3:2);if(c.sortRestart){for(headerIndx=0;headerIndx<len;headerIndx++){$header=c.$headers.eq(headerIndx);tmp=parseInt($header.attr('data-column'),10);if(col!==tmp&&(notMultiSort||$header.hasClass(ts.css.sortNone))){c.sortVars[tmp].count=-1;}}}
if(notMultiSort){c.sortList=[];c.last.sortList=[];if(c.sortForce!==null){arry=c.sortForce;for(indx=0;indx<arry.length;indx++){if(arry[indx][0]!==col){c.sortList.push(arry[indx]);}}}
dir=order[c.sortVars[col].count];if(dir<2){c.sortList.push([col,dir]);if(cell.colSpan>1){for(indx=1;indx<cell.colSpan;indx++){c.sortList.push([col+indx,dir]);c.sortVars[col+indx].count=$.inArray(dir,order);}}}}else{c.sortList=$.extend([],c.last.sortList);if(ts.isValueInArray(col,c.sortList)>=0){for(indx=0;indx<c.sortList.length;indx++){tmp=c.sortList[indx];if(tmp[0]===col){tmp[1]=order[c.sortVars[col].count];if(tmp[1]===2){c.sortList.splice(indx,1);c.sortVars[col].count=-1;}}}}else{dir=order[c.sortVars[col].count];if(dir<2){c.sortList.push([col,dir]);if(cell.colSpan>1){for(indx=1;indx<cell.colSpan;indx++){c.sortList.push([col+indx,dir]);c.sortVars[col+indx].count=$.inArray(dir,order);}}}}}
c.last.sortList=$.extend([],c.sortList);if(c.sortList.length&&c.sortAppend){arry=$.isArray(c.sortAppend)?c.sortAppend:c.sortAppend[c.sortList[0][0]];if(!ts.isEmptyObject(arry)){for(indx=0;indx<arry.length;indx++){if(arry[indx][0]!==col&&ts.isValueInArray(arry[indx][0],c.sortList)<0){dir=arry[indx][1];temp=(''+dir).match(/^(a|d|s|o|n)/);if(temp){tmp=c.sortList[0][1];switch(temp[0]){case'd':dir=1;break;case's':dir=tmp;break;case'o':dir=tmp===0?1:0;break;case'n':dir=(tmp+1)%(c.sortReset?3:2);break;default:dir=0;break;}}
c.sortList.push([arry[indx][0],dir]);}}}}
c.$table.trigger('sortBegin',table);setTimeout(function(){ts.setHeadersCss(c);ts.multisort(c);ts.appendCache(c);c.$table.trigger('sortEnd',table);},1);},multisort:function(c){var tbodyIndex,sortTime,colMax,rows,table=c.table,dir=0,textSorter=c.textSorter||'',sortList=c.sortList,sortLen=sortList.length,len=c.$tbodies.length;if(c.serverSideSorting||ts.isEmptyObject(c.cache)){return;}
if(c.debug){sortTime=new Date();}
for(tbodyIndex=0;tbodyIndex<len;tbodyIndex++){colMax=c.cache[tbodyIndex].colMax;rows=c.cache[tbodyIndex].normalized;rows.sort(function(a,b){var sortIndex,num,col,order,sort,x,y;for(sortIndex=0;sortIndex<sortLen;sortIndex++){col=sortList[sortIndex][0];order=sortList[sortIndex][1];dir=order===0;if(c.sortStable&&a[col]===b[col]&&sortLen===1){return a[c.columns].order-b[c.columns].order;}
num=/n/i.test(ts.getSortType(c.parsers,col));if(num&&c.strings[col]){if(typeof(ts.string[c.strings[col]])==='boolean'){num=(dir?1:-1)*(ts.string[c.strings[col]]?-1:1);}else{num=(c.strings[col])?ts.string[c.strings[col]]||0:0;}
sort=c.numberSorter?c.numberSorter(a[col],b[col],dir,colMax[col],table):ts['sortNumeric'+(dir?'Asc':'Desc')](a[col],b[col],num,colMax[col],col,c);}else{x=dir?a:b;y=dir?b:a;if(typeof textSorter==='function'){sort=textSorter(x[col],y[col],dir,col,table);}else if(typeof textSorter==='object'&&textSorter.hasOwnProperty(col)){sort=textSorter[col](x[col],y[col],dir,col,table);}else{sort=ts['sortNatural'+(dir?'Asc':'Desc')](a[col],b[col],col,c);}}
if(sort){return sort;}}
return a[c.columns].order-b[c.columns].order;});}
if(c.debug){console.log('Applying sort '+sortList.toString()+ts.benchmark(sortTime));}},resortComplete:function(c,callback){if(c.table.isUpdating){c.$table.trigger('updateComplete',c.table);}
if($.isFunction(callback)){callback(c.table);}},checkResort:function(c,resort,callback){var sortList=$.isArray(resort)?resort:c.sortList,resrt=typeof resort==='undefined'?c.resort:resort;if(resrt!==false&&!c.serverSideSorting&&!c.table.isProcessing){if(sortList.length){ts.sortOn(c,sortList,function(){ts.resortComplete(c,callback);},true);}else{ts.sortReset(c,function(){ts.resortComplete(c,callback);ts.applyWidget(c.table,false);});}}else{ts.resortComplete(c,callback);ts.applyWidget(c.table,false);}},sortOn:function(c,list,callback,init){var table=c.table;c.$table.trigger('sortStart',table);ts.updateHeaderSortCount(c,list);ts.setHeadersCss(c);if(c.delayInit&&ts.isEmptyObject(c.cache)){ts.buildCache(c);}
c.$table.trigger('sortBegin',table);ts.multisort(c);ts.appendCache(c,init);c.$table.trigger('sortEnd',table);ts.applyWidget(table);if($.isFunction(callback)){callback(table);}},sortReset:function(c,callback){c.sortList=[];ts.setHeadersCss(c);ts.multisort(c);ts.appendCache(c);if($.isFunction(callback)){callback(c.table);}},getSortType:function(parsers,column){return(parsers&&parsers[column])?parsers[column].type||'':'';},formatSortingOrder:function(val){return(/^d/i.test(val)||val===1);},sortNatural:function(a,b){if(a===b){return 0;}
var aNum,bNum,aFloat,bFloat,indx,max,regex=ts.regex;if(regex.hex.test(b)){aNum=parseInt(a.match(regex.hex),16);bNum=parseInt(b.match(regex.hex),16);if(aNum<bNum){return-1;}
if(aNum>bNum){return 1;}}
aNum=a.replace(regex.chunk,'\\0$1\\0').replace(regex.chunks,'').split('\\0');bNum=b.replace(regex.chunk,'\\0$1\\0').replace(regex.chunks,'').split('\\0');max=Math.max(aNum.length,bNum.length);for(indx=0;indx<max;indx++){aFloat=isNaN(aNum[indx])?aNum[indx]||0:parseFloat(aNum[indx])||0;bFloat=isNaN(bNum[indx])?bNum[indx]||0:parseFloat(bNum[indx])||0;if(isNaN(aFloat)!==isNaN(bFloat)){return isNaN(aFloat)?1:-1;}
if(typeof aFloat!==typeof bFloat){aFloat+='';bFloat+='';}
if(aFloat<bFloat){return-1;}
if(aFloat>bFloat){return 1;}}
return 0;},sortNaturalAsc:function(a,b,col,c){if(a===b){return 0;}
var empty=ts.string[(c.empties[col]||c.emptyTo)];if(a===''&&empty!==0){return typeof empty==='boolean'?(empty?-1:1):-empty||-1;}
if(b===''&&empty!==0){return typeof empty==='boolean'?(empty?1:-1):empty||1;}
return ts.sortNatural(a,b);},sortNaturalDesc:function(a,b,col,c){if(a===b){return 0;}
var empty=ts.string[(c.empties[col]||c.emptyTo)];if(a===''&&empty!==0){return typeof empty==='boolean'?(empty?-1:1):empty||1;}
if(b===''&&empty!==0){return typeof empty==='boolean'?(empty?1:-1):-empty||-1;}
return ts.sortNatural(b,a);},sortText:function(a,b){return a>b?1:(a<b?-1:0);},getTextValue:function(val,num,max){if(max){var indx,len=val?val.length:0,n=max+num;for(indx=0;indx<len;indx++){n+=val.charCodeAt(indx);}
return num*n;}
return 0;},sortNumericAsc:function(a,b,num,max,col,c){if(a===b){return 0;}
var empty=ts.string[(c.empties[col]||c.emptyTo)];if(a===''&&empty!==0){return typeof empty==='boolean'?(empty?-1:1):-empty||-1;}
if(b===''&&empty!==0){return typeof empty==='boolean'?(empty?1:-1):empty||1;}
if(isNaN(a)){a=ts.getTextValue(a,num,max);}
if(isNaN(b)){b=ts.getTextValue(b,num,max);}
return a-b;},sortNumericDesc:function(a,b,num,max,col,c){if(a===b){return 0;}
var empty=ts.string[(c.empties[col]||c.emptyTo)];if(a===''&&empty!==0){return typeof empty==='boolean'?(empty?-1:1):empty||1;}
if(b===''&&empty!==0){return typeof empty==='boolean'?(empty?1:-1):-empty||-1;}
if(isNaN(a)){a=ts.getTextValue(a,num,max);}
if(isNaN(b)){b=ts.getTextValue(b,num,max);}
return b-a;},sortNumeric:function(a,b){return a-b;},addWidget:function(widget){ts.widgets.push(widget);},hasWidget:function($table,name){$table=$($table);return $table.length&&$table[0].config&&$table[0].config.widgetInit[name]||false;},getWidgetById:function(name){var indx,widget,len=ts.widgets.length;for(indx=0;indx<len;indx++){widget=ts.widgets[indx];if(widget&&widget.id&&widget.id.toLowerCase()===name.toLowerCase()){return widget;}}},applyWidgetOptions:function(table){var indx,widget,c=table.config,len=c.widgets.length;if(len){for(indx=0;indx<len;indx++){widget=ts.getWidgetById(c.widgets[indx]);if(widget&&widget.options){c.widgetOptions=$.extend(true,{},widget.options,c.widgetOptions);}}}},addWidgetFromClass:function(table){var len,indx,c=table.config,regex='\\s'+c.widgetClass.replace(ts.regex.templateName,'([\\w-]+)')+'\\s',widgetClass=new RegExp(regex,'g'),widget=(' '+c.table.className+' ').match(widgetClass);if(widget){len=widget.length;for(indx=0;indx<len;indx++){c.widgets.push(widget[indx].replace(widgetClass,'$1'));}}},applyWidget:function(table,init,callback){table=$(table)[0];var indx,len,names,widget,name,applied,time,time2,c=table.config,widgets=[];if(init!==false&&table.hasInitialized&&(table.isApplyingWidgets||table.isUpdating)){return;}
if(c.debug){time=new Date();}
ts.addWidgetFromClass(table);if(c.widgets.length){table.isApplyingWidgets=true;c.widgets=$.grep(c.widgets,function(val,index){return $.inArray(val,c.widgets)===index;});names=c.widgets||[];len=names.length;for(indx=0;indx<len;indx++){widget=ts.getWidgetById(names[indx]);if(widget&&widget.id){if(!widget.priority){widget.priority=10;}
widgets[indx]=widget;}}
widgets.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1;});len=widgets.length;if(c.debug){console[console.group?'group':'log']('Start '+(init?'initializing':'applying')+' widgets');}
for(indx=0;indx<len;indx++){widget=widgets[indx];if(widget){name=widget.id;applied=false;if(c.debug){time2=new Date();}
if(init||!(c.widgetInit[name])){c.widgetInit[name]=true;if(table.hasInitialized){ts.applyWidgetOptions(table);}
if(typeof widget.init==='function'){applied=true;if(c.debug){console[console.group?'group':'log']('Initializing '+name+' widget');}
widget.init(table,widget,table.config,table.config.widgetOptions);}}
if(!init&&typeof widget.format==='function'){applied=true;if(c.debug){console[console.group?'group':'log']('Updating '+name+' widget');}
widget.format(table,table.config,table.config.widgetOptions,false);}
if(c.debug){if(applied){console.log('Completed '+(init?'initializing ':'applying ')+name+' widget'+ts.benchmark(time2));if(console.groupEnd){console.groupEnd();}}}}}
if(c.debug&&console.groupEnd){console.groupEnd();}
if(!init&&typeof callback==='function'){callback(table);}}
setTimeout(function(){table.isApplyingWidgets=false;$.data(table,'lastWidgetApplication',new Date());c.$table.trigger('tablesorter-ready');},0);if(c.debug){widget=c.widgets.length;console.log('Completed '+
(init===true?'initializing ':'applying ')+widget+' widget'+(widget!==1?'s':'')+ts.benchmark(time));}},removeWidget:function(table,name,refreshing){table=$(table)[0];var index,widget,indx,len,c=table.config;if(name===true){name=[];len=ts.widgets.length;for(indx=0;indx<len;indx++){widget=ts.widgets[indx];if(widget&&widget.id){name.push(widget.id);}}}else{name=($.isArray(name)?name.join(','):name||'').toLowerCase().split(/[\s,]+/);}
len=name.length;for(index=0;index<len;index++){widget=ts.getWidgetById(name[index]);indx=$.inArray(name[index],c.widgets);if(widget&&widget.remove){if(c.debug){console.log((refreshing?'Refreshing':'Removing')+' "'+name[index]+'" widget');}
widget.remove(table,c,c.widgetOptions,refreshing);c.widgetInit[name[index]]=false;}
if(indx>=0&&refreshing!==true){c.widgets.splice(indx,1);}}},refreshWidgets:function(table,doAll,dontapply){table=$(table)[0];var indx,widget,c=table.config,curWidgets=c.widgets,widgets=ts.widgets,len=widgets.length,list=[],callback=function(table){$(table).trigger('refreshComplete');};for(indx=0;indx<len;indx++){widget=widgets[indx];if(widget&&widget.id&&(doAll||$.inArray(widget.id,curWidgets)<0)){list.push(widget.id);}}
ts.removeWidget(table,list.join(','),true);if(dontapply!==true){ts.applyWidget(table,doAll||false,callback);if(doAll){ts.applyWidget(table,false,callback);}}else{callback(table);}},benchmark:function(diff){return(' ( '+(new Date().getTime()-diff.getTime())+'ms )');},log:function(){console.log(arguments);},isEmptyObject:function(obj){for(var name in obj){return false;}
return true;},isValueInArray:function(column,arry){var indx,len=arry&&arry.length||0;for(indx=0;indx<len;indx++){if(arry[indx][0]===column){return indx;}}
return-1;},formatFloat:function(str,table){if(typeof str!=='string'||str===''){return str;}
var num,usFormat=table&&table.config?table.config.usNumberFormat!==false:typeof table!=='undefined'?table:true;if(usFormat){str=str.replace(ts.regex.comma,'');}else{str=str.replace(ts.regex.digitNonUS,'').replace(ts.regex.comma,'.');}
if(ts.regex.digitNegativeTest.test(str)){str=str.replace(ts.regex.digitNegativeReplace,'-$1');}
num=parseFloat(str);return isNaN(num)?$.trim(str):num;},isDigit:function(str){return isNaN(str)?ts.regex.digitTest.test(str.toString().replace(ts.regex.digitReplace,'')):str!=='';},computeColumnIndex:function($rows){var i,j,k,l,$cell,cell,cells,rowIndex,cellId,rowSpan,colSpan,firstAvailCol,matrix=[],matrixrow=[];for(i=0;i<$rows.length;i++){cells=$rows[i].cells;for(j=0;j<cells.length;j++){cell=cells[j];$cell=$(cell);rowIndex=cell.parentNode.rowIndex;cellId=rowIndex+'-'+$cell.index();rowSpan=cell.rowSpan||1;colSpan=cell.colSpan||1;if(typeof matrix[rowIndex]==='undefined'){matrix[rowIndex]=[];}
for(k=0;k<matrix[rowIndex].length+1;k++){if(typeof matrix[rowIndex][k]==='undefined'){firstAvailCol=k;break;}}
if(cell.setAttribute){cell.setAttribute('data-column',firstAvailCol);}else{$cell.attr('data-column',firstAvailCol);}
for(k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof matrix[k]==='undefined'){matrix[k]=[];}
matrixrow=matrix[k];for(l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]='x';}}}}
return matrixrow.length;},fixColumnWidth:function(table){table=$(table)[0];var overallWidth,percent,$tbodies,len,index,c=table.config,$colgroup=c.$table.children('colgroup');if($colgroup.length&&$colgroup.hasClass(ts.css.colgroup)){$colgroup.remove();}
if(c.widthFixed&&c.$table.children('colgroup').length===0){$colgroup=$('<colgroup class="'+ts.css.colgroup+'">');overallWidth=c.$table.width();$tbodies=c.$tbodies.find('tr:first').children(':visible');len=$tbodies.length;for(index=0;index<len;index++){percent=parseInt(($tbodies.eq(index).width()/overallWidth)*1000,10)/10+'%';$colgroup.append($('<col>').css('width',percent));}
c.$table.prepend($colgroup);}},getData:function(header,configHeader,key){var meta,cl4ss,val='',$header=$(header);if(!$header.length){return'';}
meta=$.metadata?$header.metadata():false;cl4ss=' '+($header.attr('class')||'');if(typeof $header.data(key)!=='undefined'||typeof $header.data(key.toLowerCase())!=='undefined'){val+=$header.data(key)||$header.data(key.toLowerCase());}else if(meta&&typeof meta[key]!=='undefined'){val+=meta[key];}else if(configHeader&&typeof configHeader[key]!=='undefined'){val+=configHeader[key];}else if(cl4ss!==' '&&cl4ss.match(' '+key+'-')){val=cl4ss.match(new RegExp('\\s'+key+'-([\\w-]+)'))[1]||'';}
return $.trim(val);},getColumnData:function(table,obj,indx,getCell,$headers){if(typeof obj==='undefined'||obj===null){return;}
table=$(table)[0];var $header,key,c=table.config,$cells=($headers||c.$headers),$cell=c.$headerIndexed&&c.$headerIndexed[indx]||$cells.filter('[data-column="'+indx+'"]:last');if(obj[indx]){return getCell?obj[indx]:obj[$cells.index($cell)];}
for(key in obj){if(typeof key==='string'){$header=$cell.filter(key).add($cell.find(key));if($header.length){return obj[key];}}}
return;},isProcessing:function($table,toggle,$headers){$table=$($table);var c=$table[0].config,$header=$headers||$table.find('.'+ts.css.header);if(toggle){if(typeof $headers!=='undefined'&&c.sortList.length>0){$header=$header.filter(function(){return this.sortDisabled?false:ts.isValueInArray(parseFloat($(this).attr('data-column')),c.sortList)>=0;});}
$table.add($header).addClass(ts.css.processing+' '+c.cssProcessing);}else{$table.add($header).removeClass(ts.css.processing+' '+c.cssProcessing);}},processTbody:function(table,$tb,getIt){table=$(table)[0];if(getIt){table.isProcessing=true;$tb.before('<colgroup class="tablesorter-savemyplace"/>');return $.fn.detach?$tb.detach():$tb.remove();}
var holdr=$(table).find('colgroup.tablesorter-savemyplace');$tb.insertAfter(holdr);holdr.remove();table.isProcessing=false;},clearTableBody:function(table){$(table)[0].config.$tbodies.children().detach();},characterEquivalents:{'a':'\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5','A':'\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5','c':'\u00e7\u0107\u010d','C':'\u00c7\u0106\u010c','e':'\u00e9\u00e8\u00ea\u00eb\u011b\u0119','E':'\u00c9\u00c8\u00ca\u00cb\u011a\u0118','i':'\u00ed\u00ec\u0130\u00ee\u00ef\u0131','I':'\u00cd\u00cc\u0130\u00ce\u00cf','o':'\u00f3\u00f2\u00f4\u00f5\u00f6\u014d','O':'\u00d3\u00d2\u00d4\u00d5\u00d6\u014c','ss':'\u00df','SS':'\u1e9e','u':'\u00fa\u00f9\u00fb\u00fc\u016f','U':'\u00da\u00d9\u00db\u00dc\u016e'},replaceAccents:function(str){var chr,acc='[',eq=ts.characterEquivalents;if(!ts.characterRegex){ts.characterRegexArray={};for(chr in eq){if(typeof chr==='string'){acc+=eq[chr];ts.characterRegexArray[chr]=new RegExp('['+eq[chr]+']','g');}}
ts.characterRegex=new RegExp(acc+']');}
if(ts.characterRegex.test(str)){for(chr in eq){if(typeof chr==='string'){str=str.replace(ts.characterRegexArray[chr],chr);}}}
return str;},restoreHeaders:function(table){var index,$cell,c=$(table)[0].config,$headers=c.$table.find(c.selectorHeaders),len=$headers.length;for(index=0;index<len;index++){$cell=$headers.eq(index);if($cell.find('.'+ts.css.headerIn).length){$cell.html(c.headerContent[index]);}}},destroy:function(table,removeClasses,callback){table=$(table)[0];if(!table.hasInitialized){return;}
ts.removeWidget(table,true,false);var events,$t=$(table),c=table.config,debug=c.debug,$h=$t.find('thead:first'),$r=$h.find('tr.'+ts.css.headerRow).removeClass(ts.css.headerRow+' '+c.cssHeaderRow),$f=$t.find('tfoot:first > tr').children('th, td');if(removeClasses===false&&$.inArray('uitheme',c.widgets)>=0){$t.trigger('applyWidgetId',['uitheme']);$t.trigger('applyWidgetId',['zebra']);}
$h.find('tr').not($r).remove();events='sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton '+'appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress '+'sortBegin sortEnd resetToLoadState '.split(' ').join(c.namespace+' ');$t.removeData('tablesorter').unbind(events.replace(ts.regex.spaces,' '));c.$headers.add($f).removeClass([ts.css.header,c.cssHeader,c.cssAsc,c.cssDesc,ts.css.sortAsc,ts.css.sortDesc,ts.css.sortNone].join(' ')).removeAttr('data-column').removeAttr('aria-label').attr('aria-disabled','true');$r.find(c.selectorSort).unbind(('mousedown mouseup keypress '.split(' ').join(c.namespace+' ')).replace(ts.regex.spaces,' '));ts.restoreHeaders(table);$t.toggleClass(ts.css.table+' '+c.tableClass+' tablesorter-'+c.theme,removeClasses===false);table.hasInitialized=false;delete table.config.cache;if(typeof callback==='function'){callback(table);}
if(debug){console.log('tablesorter has been removed');}}};$.fn.tablesorter=function(settings){return this.each(function(){var table=this,c=$.extend(true,{},ts.defaults,settings,ts.instanceMethods);c.originalSettings=settings;if(!table.hasInitialized&&ts.buildTable&&this.nodeName!=='TABLE'){ts.buildTable(table,c);}else{ts.setup(table,c);}});};if(!(window.console&&window.console.log)){ts.logs=[];console={};console.log=console.warn=console.error=console.table=function(){var arg=arguments.length>1?arguments:arguments[0];ts.logs.push({date:Date.now(),log:arg});};}
ts.addParser({id:'no-parser',is:function(){return false;},format:function(){return'';},type:'text'});ts.addParser({id:'text',is:function(){return true;},format:function(str,table){var c=table.config;if(str){str=$.trim(c.ignoreCase?str.toLocaleLowerCase():str);str=c.sortLocaleCompare?ts.replaceAccents(str):str;}
return str;},type:'text'});ts.regex.nondigit=/[^\w,. \-()]/g;ts.addParser({id:'digit',is:function(str){return ts.isDigit(str);},format:function(str,table){var num=ts.formatFloat((str||'').replace(ts.regex.nondigit,''),table);return str&&typeof num==='number'?num:str?$.trim(str&&table.config.ignoreCase?str.toLocaleLowerCase():str):str;},type:'numeric'});ts.regex.currencyReplace=/[+\-,. ]/g;ts.regex.currencyTest=/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/;ts.addParser({id:'currency',is:function(str){str=(str||'').replace(ts.regex.currencyReplace,'');return ts.regex.currencyTest.test(str);},format:function(str,table){var num=ts.formatFloat((str||'').replace(ts.regex.nondigit,''),table);return str&&typeof num==='number'?num:str?$.trim(str&&table.config.ignoreCase?str.toLocaleLowerCase():str):str;},type:'numeric'});ts.regex.urlProtocolTest=/^(https?|ftp|file):\/\//;ts.regex.urlProtocolReplace=/(https?|ftp|file):\/\//;ts.addParser({id:'url',is:function(str){return ts.regex.urlProtocolTest.test(str);},format:function(str){return str?$.trim(str.replace(ts.regex.urlProtocolReplace,'')):str;},parsed:true,type:'text'});ts.regex.dash=/-/g;ts.regex.isoDate=/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/;ts.addParser({id:'isoDate',is:function(str){return ts.regex.isoDate.test(str);},format:function(str,table){var date=str?new Date(str.replace(ts.regex.dash,'/')):str;return date instanceof Date&&isFinite(date)?date.getTime():str;},type:'numeric'});ts.regex.percent=/%/g;ts.regex.percentTest=/(\d\s*?%|%\s*?\d)/;ts.addParser({id:'percent',is:function(str){return ts.regex.percentTest.test(str)&&str.length<15;},format:function(str,table){return str?ts.formatFloat(str.replace(ts.regex.percent,''),table):str;},type:'numeric'});ts.addParser({id:'image',is:function(str,table,node,$node){return $node.find('img').length>0;},format:function(str,table,cell){return $(cell).find('img').attr(table.config.imgAttr||'alt')||str;},parsed:true,type:'text'});ts.regex.dateReplace=/(\S)([AP]M)$/i;ts.regex.usLongDateTest1=/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i;ts.regex.usLongDateTest2=/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i;ts.addParser({id:'usLongDate',is:function(str){return ts.regex.usLongDateTest1.test(str)||ts.regex.usLongDateTest2.test(str);},format:function(str,table){var date=str?new Date(str.replace(ts.regex.dateReplace,'$1 $2')):str;return date instanceof Date&&isFinite(date)?date.getTime():str;},type:'numeric'});ts.regex.shortDateTest=/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/;ts.regex.shortDateReplace=/[\-.,]/g;ts.regex.shortDateXXY=/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/;ts.regex.shortDateYMD=/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/;ts.convertFormat=function(dateString,format){dateString=(dateString||'').replace(ts.regex.spaces,' ').replace(ts.regex.shortDateReplace,'/');if(format==='mmddyyyy'){dateString=dateString.replace(ts.regex.shortDateXXY,'$3/$1/$2');}else if(format==='ddmmyyyy'){dateString=dateString.replace(ts.regex.shortDateXXY,'$3/$2/$1');}else if(format==='yyyymmdd'){dateString=dateString.replace(ts.regex.shortDateYMD,'$1/$2/$3');}
var date=new Date(dateString);return date instanceof Date&&isFinite(date)?date.getTime():'';};ts.addParser({id:'shortDate',is:function(str){str=(str||'').replace(ts.regex.spaces,' ').replace(ts.regex.shortDateReplace,'/');return ts.regex.shortDateTest.test(str);},format:function(str,table,cell,cellIndex){if(str){var c=table.config,$header=c.$headerIndexed[cellIndex],format=$header.length&&$header.data('dateFormat')||ts.getData($header,ts.getColumnData(table,c.headers,cellIndex),'dateFormat')||c.dateFormat;if($header.length){$header.data('dateFormat',format);}
return ts.convertFormat(str,format)||str;}
return str;},type:'numeric'});ts.regex.timeTest=/^([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)$/i;ts.regex.timeMatch=/([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i;ts.addParser({id:'time',is:function(str){return ts.regex.timeTest.test(str);},format:function(str,table){var temp,timePart=(str||'').match(ts.regex.timeMatch),orig=new Date(str),time=str&&(timePart!==null?timePart[0]:'00:00 AM'),date=time?new Date('2000/01/01 '+time.replace(ts.regex.dateReplace,'$1 $2')):time;if(date instanceof Date&&isFinite(date)){temp=orig instanceof Date&&isFinite(orig)?orig.getTime():0;return temp?parseFloat(date.getTime()+'.'+orig.getTime()):date.getTime();}
return str;},type:'numeric'});ts.addParser({id:'metadata',is:function(){return false;},format:function(str,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:'numeric'});ts.addWidget({id:'zebra',priority:90,format:function(table,c,wo){var $visibleRows,$row,count,isEven,tbodyIndex,rowIndex,len,child=new RegExp(c.cssChildRow,'i'),$tbodies=c.$tbodies.add($(c.namespace+'_extra_table').children('tbody:not(.'+c.cssInfoBlock+')'));for(tbodyIndex=0;tbodyIndex<$tbodies.length;tbodyIndex++){count=0;$visibleRows=$tbodies.eq(tbodyIndex).children('tr:visible').not(c.selectorRemove);len=$visibleRows.length;for(rowIndex=0;rowIndex<len;rowIndex++){$row=$visibleRows.eq(rowIndex);if(!child.test($row[0].className)){count++;}
isEven=(count%2===0);$row.removeClass(wo.zebra[isEven?1:0]).addClass(wo.zebra[isEven?0:1]);}}},remove:function(table,c,wo,refreshing){if(refreshing){return;}
var tbodyIndex,$tbody,$tbodies=c.$tbodies,toRemove=(wo.zebra||['even','odd']).join(' ');for(tbodyIndex=0;tbodyIndex<$tbodies.length;tbodyIndex++){$tbody=ts.processTbody(table,$tbodies.eq(tbodyIndex),true);$tbody.children().removeClass(toRemove);ts.processTbody(table,$tbody,false);}}});})(jQuery);/*!
 * tablesorter (FORK) pager plugin
 * updated 11/10/2015 (v2.24.5)
 */
/*jshint browser:true, jquery:true, unused:false */
;(function($) {
	'use strict';
	/*jshint supernew:true */
	var ts = $.tablesorter;

	$.extend({ tablesorterPager: new function() {

		this.defaults = {
			// target the pager markup
			container: null,

			// use this format: "http://mydatabase.com?page={page}&size={size}&{sortList:col}&{filterList:fcol}"
			// where {page} is replaced by the page number, {size} is replaced by the number of records to show,
			// {sortList:col} adds the sortList to the url into a "col" array, and {filterList:fcol} adds
			// the filterList to the url into an "fcol" array.
			// So a sortList = [[2,0],[3,0]] becomes "&col[2]=0&col[3]=0" in the url
			// and a filterList = [[2,Blue],[3,13]] becomes "&fcol[2]=Blue&fcol[3]=13" in the url
			ajaxUrl: null,

			// modify the url after all processing has been applied
			customAjaxUrl: function(table, url) { return url; },

			// ajax error callback from $.tablesorter.showError function
			// ajaxError: function( config, xhr, settings, exception ){ return exception; };
			// returning false will abort the error message
			ajaxError: null,

			// modify the $.ajax object to allow complete control over your ajax requests
			ajaxObject: {
				dataType: 'json'
			},

			// set this to false if you want to block ajax loading on init
			processAjaxOnInit: true,

			// process ajax so that the following information is returned:
			// [ total_rows (number), rows (array of arrays), headers (array; optional) ]
			// example:
			// [
			//   100,  // total rows
			//   [
			//     [ "row1cell1", "row1cell2", ... "row1cellN" ],
			//     [ "row2cell1", "row2cell2", ... "row2cellN" ],
			//     ...
			//     [ "rowNcell1", "rowNcell2", ... "rowNcellN" ]
			//   ],
			//   [ "header1", "header2", ... "headerN" ] // optional
			// ]
			ajaxProcessing: function(ajax){ return [ 0, [], null ]; },

			// output default: '{page}/{totalPages}'
			// possible variables: {size}, {page}, {totalPages}, {filteredPages}, {startRow},
			// {endRow}, {filteredRows} and {totalRows}
			output: '{startRow} to {endRow} of {totalRows} rows', // '{page}/{totalPages}'

			// apply disabled classname to the pager arrows when the rows at either extreme is visible
			updateArrows: true,

			// starting page of the pager (zero based index)
			page: 0,

			// reset pager after filtering; set to desired page #
			// set to false to not change page at filter start
			pageReset: 0,

			// Number of visible rows
			size: 10,

			// Number of options to include in the pager number selector
			maxOptionSize: 20,

			// Save pager page & size if the storage script is loaded (requires $.tablesorter.storage in jquery.tablesorter.widgets.js)
			savePages: true,

			// defines custom storage key
			storageKey: 'tablesorter-pager',

			// if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
			// table row set to a height to compensate; default is false
			fixedHeight: false,

			// count child rows towards the set page size? (set true if it is a visible table row within the pager)
			// if true, child row(s) may not appear to be attached to its parent row, may be split across pages or
			// may distort the table if rowspan or cellspans are included.
			countChildRows: false,

			// remove rows from the table to speed up the sort of large tables.
			// setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
			removeRows: false, // removing rows in larger tables speeds up the sort

			// css class names of pager arrows
			cssFirst: '.first', // go to first page arrow
			cssPrev: '.prev', // previous page arrow
			cssNext: '.next', // next page arrow
			cssLast: '.last', // go to last page arrow
			cssGoto: '.gotoPage', // go to page selector - select dropdown that sets the current page
			cssPageDisplay: '.pagedisplay', // location of where the "output" is displayed
			cssPageSize: '.pagesize', // page size selector - select dropdown that sets the "size" option
			cssErrorRow: 'tablesorter-errorRow', // error information row

			// class added to arrows when at the extremes (i.e. prev/first arrows are "disabled" when on the first page)
			cssDisabled: 'disabled', // Note there is no period "." in front of this class name

			// stuff not set by the user
			totalRows: 0,
			totalPages: 0,
			filteredRows: 0,
			filteredPages: 0,
			ajaxCounter: 0,
			currentFilters: [],
			startRow: 0,
			endRow: 0,
			$size: null,
			last: {}

		};

		var pagerEvents = 'filterInit filterStart filterEnd sortEnd disablePager enablePager destroyPager updateComplete ' +
				'pageSize pageSet pageAndSize pagerUpdate refreshComplete ',

			$this = this,

		// hide arrows at extremes
			pagerArrows = function(p, disable) {
				var a = 'addClass',
					r = 'removeClass',
					d = p.cssDisabled,
					dis = !!disable,
					first = ( dis || p.page === 0 ),
					tp = Math.min( p.totalPages, p.filteredPages ),
					last = ( dis || (p.page === tp - 1) || tp === 0 );
				if ( p.updateArrows ) {
					p.$container.find(p.cssFirst + ',' + p.cssPrev)[ first ? a : r ](d).attr('aria-disabled', first);
					p.$container.find(p.cssNext + ',' + p.cssLast)[ last ? a : r ](d).attr('aria-disabled', last);
				}
			},

			calcFilters = function(table, p) {
				var normalized, indx, len,
					c = table.config,
					hasFilters = c.$table.hasClass('hasFilters');
				if (hasFilters && !p.ajaxUrl) {
					if (ts.isEmptyObject(c.cache)) {
						// delayInit: true so nothing is in the cache
						p.filteredRows = p.totalRows = c.$tbodies.eq(0).children('tr').not( p.countChildRows ? '' : '.' + c.cssChildRow ).length;
					} else {
						p.filteredRows = 0;
						normalized = c.cache[0].normalized;
						len = normalized.length;
						for (indx = 0; indx < len; indx++) {
							p.filteredRows += p.regexRows.test(normalized[indx][c.columns].$row[0].className) ? 0 : 1;
						}
					}
				} else if (!hasFilters) {
					p.filteredRows = p.totalRows;
				}
			},

			updatePageDisplay = function(table, p, completed) {
				if ( p.initializing ) { return; }
				var s, t, $out, indx, len, options,
					c = table.config,
					namespace = c.namespace + 'pager',
					sz = parsePageSize( p, p.size, 'get' ); // don't allow dividing by zero
				if (p.countChildRows) { t.push(c.cssChildRow); }
				p.totalPages = Math.ceil( p.totalRows / sz ); // needed for "pageSize" method
				c.totalRows = p.totalRows;
				parsePageNumber( p );
				calcFilters(table, p);
				c.filteredRows = p.filteredRows;
				p.filteredPages = Math.ceil( p.filteredRows / sz ) || 0;
				if ( Math.min( p.totalPages, p.filteredPages ) >= 0 ) {
					t = (p.size * p.page > p.filteredRows) && completed;
					p.page = (t) ? p.pageReset || 0 : p.page;
					p.startRow = (t) ? p.size * p.page + 1 : (p.filteredRows === 0 ? 0 : p.size * p.page + 1);
					p.endRow = Math.min( p.filteredRows, p.totalRows, p.size * ( p.page + 1 ) );
					$out = p.$container.find(p.cssPageDisplay);
					// form the output string (can now get a new output string from the server)
					s = ( p.ajaxData && p.ajaxData.output ? p.ajaxData.output || p.output : p.output )
						// {page} = one-based index; {page+#} = zero based index +/- value
						.replace(/\{page([\-+]\d+)?\}/gi, function(m, n){
							return p.totalPages ? p.page + (n ? parseInt(n, 10) : 1) : 0;
						})
						// {totalPages}, {extra}, {extra:0} (array) or {extra : key} (object)
						.replace(/\{\w+(\s*:\s*\w+)?\}/gi, function(m){
							var len, indx,
								str = m.replace(/[{}\s]/g, ''),
								extra = str.split(':'),
								data = p.ajaxData,
							// return zero for default page/row numbers
								deflt = /(rows?|pages?)$/i.test(str) ? 0 : '';
							if (/(startRow|page)/.test(extra[0]) && extra[1] === 'input') {
								len = ('' + (extra[0] === 'page' ? p.totalPages : p.totalRows)).length;
								indx = extra[0] === 'page' ? p.page + 1 : p.startRow;
								return '<input type="text" class="ts-' + extra[0] + '" style="max-width:' + len + 'em" value="' + indx + '"/>';
							}
							return extra.length > 1 && data && data[extra[0]] ? data[extra[0]][extra[1]] : p[str] || (data ? data[str] : deflt) || deflt;
						});
					if ( p.$goto.length ) {
						t = '';
						options = buildPageSelect(p);
						len = options.length;
						for (indx = 0; indx < len; indx++) {
							t += '<option value="' + options[indx] + '">' + options[indx] + '</option>';
						}
						// innerHTML doesn't work in IE9 - http://support2.microsoft.com/kb/276228
						p.$goto.html(t).val( p.page + 1 );
					}
					if ($out.length) {
						$out[ ($out[0].nodeName === 'INPUT') ? 'val' : 'html' ](s);
						// rebind startRow/page inputs
						$out.find('.ts-startRow, .ts-page').unbind('change' + namespace).bind('change' + namespace, function(){
							var v = $(this).val(),
								pg = $(this).hasClass('ts-startRow') ? Math.floor( v / p.size ) + 1 : v;
							c.$table.trigger('pageSet' + namespace, [ pg ]);
						});
					}
				}
				pagerArrows(p);
				fixHeight(table, p);
				if (p.initialized && completed !== false) {
					if (c.debug) {
						console.log('Pager: Triggering pagerComplete');
					}
					c.$table.trigger('pagerComplete', p);
					// save pager info to storage
					if (p.savePages && ts.storage) {
						ts.storage(table, p.storageKey, {
							page : p.page,
							size : p.size
						});
					}
				}
			},

			buildPageSelect = function(p) {
				// Filter the options page number link array if it's larger than 'maxOptionSize'
				// as large page set links will slow the browser on large dom inserts
				var i, central_focus_size, focus_option_pages, insert_index, option_length, focus_length,
					pg = Math.min( p.totalPages, p.filteredPages ) || 1,
				// make skip set size multiples of 5
					skip_set_size = Math.ceil( ( pg / p.maxOptionSize ) / 5 ) * 5,
					large_collection = pg > p.maxOptionSize,
					current_page = p.page + 1,
					start_page = skip_set_size,
					end_page = pg - skip_set_size,
					option_pages = [ 1 ],
				// construct default options pages array
					option_pages_start_page = (large_collection) ? skip_set_size : 1;

				for ( i = option_pages_start_page; i <= pg; ) {
					option_pages.push(i);
					i = i + ( large_collection ? skip_set_size : 1 );
				}
				option_pages.push(pg);
				if (large_collection) {
					focus_option_pages = [];
					// don't allow central focus size to be > 5 on either side of current page
					central_focus_size = Math.max( Math.floor( p.maxOptionSize / skip_set_size ) - 1, 5 );

					start_page = current_page - central_focus_size;
					if (start_page < 1) { start_page = 1; }
					end_page = current_page + central_focus_size;
					if (end_page > pg) { end_page = pg; }
					// construct an array to get a focus set around the current page
					for (i = start_page; i <= end_page ; i++) {
						focus_option_pages.push(i);
					}

					// keep unique values
					option_pages = $.grep(option_pages, function(value, indx) {
						return $.inArray(value, option_pages) === indx;
					});

					option_length = option_pages.length;
					focus_length = focus_option_pages.length;

					// make sure at all option_pages aren't replaced
					if (option_length - focus_length > skip_set_size / 2 && option_length + focus_length > p.maxOptionSize ) {
						insert_index = Math.floor(option_length / 2) - Math.floor(focus_length / 2);
						Array.prototype.splice.apply(option_pages, [ insert_index, focus_length ]);
					}
					option_pages = option_pages.concat(focus_option_pages);

				}

				// keep unique values again
				option_pages = $.grep(option_pages, function(value, indx) {
					return $.inArray(value, option_pages) === indx;
				})
					.sort(function(a, b) { return a - b; });

				return option_pages;
			},

			fixHeight = function(table, p) {
				var d, h,
					c = table.config,
					$b = c.$tbodies.eq(0);
				$b.find('tr.pagerSavedHeightSpacer').remove();
				if (p.fixedHeight && !p.isDisabled) {
					h = $.data(table, 'pagerSavedHeight');
					if (h) {
						d = h - $b.height();
						if ( d > 5 && $.data(table, 'pagerLastSize') === p.size && $b.children('tr:visible').length < p.size ) {
							$b.append('<tr class="pagerSavedHeightSpacer ' + c.selectorRemove.slice(1) + '" style="height:' + d + 'px;"></tr>');
						}
					}
				}
			},

			changeHeight = function(table, p) {
				var h,
					c = table.config,
					$b = c.$tbodies.eq(0);
				$b.find('tr.pagerSavedHeightSpacer').remove();
				if (!$b.children('tr:visible').length) {
					$b.append('<tr class="pagerSavedHeightSpacer ' + c.selectorRemove.slice(1) + '"><td>&nbsp</td></tr>');
				}
				h = $b.children('tr').eq(0).height() * p.size;
				$.data(table, 'pagerSavedHeight', h);
				fixHeight(table, p);
				$.data(table, 'pagerLastSize', p.size);
			},

			hideRows = function(table, p){
				if (!p.ajaxUrl) {
					var i,
						lastIndex = 0,
						c = table.config,
						rows = c.$tbodies.eq(0).children('tr'),
						l = rows.length,
						s = ( p.page * p.size ),
						e =  s + p.size,
						f = c.widgetOptions && c.widgetOptions.filter_filteredRow || 'filtered',
						last = 0, // for cache indexing
						j = 0; // size counter
					p.cacheIndex = [];
					for ( i = 0; i < l; i++ ){
						if ( !rows[i].className.match(f) ) {
							if (j === s && rows[i].className.match(c.cssChildRow)) {
								// hide child rows @ start of pager (if already visible)
								rows[i].style.display = 'none';
							} else {
								rows[i].style.display = ( j >= s && j < e ) ? '' : 'none';
								if (last !== j && j >= s && j < e) {
									p.cacheIndex.push(i);
									last = j;
								}
								// don't count child rows
								j += rows[i].className.match(c.cssChildRow + '|' + c.selectorRemove.slice(1)) && !p.countChildRows ? 0 : 1;
								if ( j === e && rows[i].style.display !== 'none' && rows[i].className.match(ts.css.cssHasChild) ) {
									lastIndex = i;
								}
							}
						}
					}
					// add any attached child rows to last row of pager. Fixes part of issue #396
					if ( lastIndex > 0 && rows[lastIndex].className.match(ts.css.cssHasChild) ) {
						while ( ++lastIndex < l && rows[lastIndex].className.match(c.cssChildRow) ) {
							rows[lastIndex].style.display = '';
						}
					}
				}
			},

			hideRowsSetup = function(table, p){
				p.size = parsePageSize( p, p.$size.val(), 'get' );
				p.$size.val( parsePageSize( p, p.size, 'set' ) );
				$.data(table, 'pagerLastSize', p.size);
				pagerArrows(p);
				if ( !p.removeRows ) {
					hideRows(table, p);
					$(table).bind('sortEnd filterEnd '.split(' ').join(table.config.namespace + 'pager '), function(){
						hideRows(table, p);
					});
				}
			},

			renderAjax = function(data, table, p, xhr, settings, exception){
				// process data
				if ( typeof p.ajaxProcessing === 'function' ) {

					// in case nothing is returned by ajax, empty out the table; see #1032
					// but do it before calling pager_ajaxProcessing because that function may add content
					// directly to the table
					table.config.$tbodies.eq(0).empty();

					// ajaxProcessing result: [ total, rows, headers ]
					var i, j, t, hsh, $f, $sh, $headers, $h, icon, th, d, l, rr_count, len,
						c = table.config,
						$table = c.$table,
						tds = '',
						result = p.ajaxProcessing(data, table, xhr) || [ 0, [] ],
						hl = $table.find('thead th').length;

					// Clean up any previous error.
					ts.showError( table );

					if ( exception ) {
						if (c.debug) {
							console.error('Pager: >> Ajax Error', xhr, settings, exception);
						}
						ts.showError( table, xhr, settings, exception );
						c.$tbodies.eq(0).children('tr').detach();
						p.totalRows = 0;
					} else {
						// process ajax object
						if (!$.isArray(result)) {
							p.ajaxData = result;
							c.totalRows = p.totalRows = result.total;
							c.filteredRows = p.filteredRows = typeof result.filteredRows !== 'undefined' ? result.filteredRows : result.total;
							th = result.headers;
							d = result.rows || [];
						} else {
							// allow [ total, rows, headers ]  or [ rows, total, headers ]
							t = isNaN(result[0]) && !isNaN(result[1]);
							// ensure a zero returned row count doesn't fail the logical ||
							rr_count = result[t ? 1 : 0];
							p.totalRows = isNaN(rr_count) ? p.totalRows || 0 : rr_count;
							// can't set filtered rows when returning an array
							c.totalRows = c.filteredRows = p.filteredRows = p.totalRows;
							// set row data to empty array if nothing found - see http://stackoverflow.com/q/30875583/145346
							d = p.totalRows === 0 ? [] : result[t ? 0 : 1] || []; // row data
							th = result[2]; // headers
						}
						l = d && d.length;
						if (d instanceof jQuery) {
							if (p.processAjaxOnInit) {
								// append jQuery object
								c.$tbodies.eq(0).empty();
								c.$tbodies.eq(0).append(d);
							}
						} else if (l) {
							// build table from array
							for ( i = 0; i < l; i++ ) {
								tds += '<tr>';
								for ( j = 0; j < d[i].length; j++ ) {
									// build tbody cells; watch for data containing HTML markup - see #434
									tds += /^\s*<td/.test(d[i][j]) ? $.trim(d[i][j]) : '<td>' + d[i][j] + '</td>';
								}
								tds += '</tr>';
							}
							// add rows to first tbody
							if (p.processAjaxOnInit) {
								c.$tbodies.eq(0).html( tds );
							}
						}
						p.processAjaxOnInit = true;
						// only add new header text if the length matches
						if ( th && th.length === hl ) {
							hsh = $table.hasClass('hasStickyHeaders');
							$sh = hsh ? c.widgetOptions.$sticky.children('thead:first').children('tr').children() : '';
							$f = $table.find('tfoot tr:first').children();
							// don't change td headers (may contain pager)
							$headers = c.$headers.filter( 'th ' );
							len = $headers.length;
							for ( j = 0; j < len; j++ ) {
								$h = $headers.eq( j );
								// add new test within the first span it finds, or just in the header
								if ( $h.find('.' + ts.css.icon).length ) {
									icon = $h.find('.' + ts.css.icon).clone(true);
									$h.find('.tablesorter-header-inner').html( th[j] ).append(icon);
									if ( hsh && $sh.length ) {
										icon = $sh.eq(j).find('.' + ts.css.icon).clone(true);
										$sh.eq(j).find('.tablesorter-header-inner').html( th[j] ).append(icon);
									}
								} else {
									$h.find('.tablesorter-header-inner').html( th[j] );
									if (hsh && $sh.length) {
										$sh.eq(j).find('.tablesorter-header-inner').html( th[j] );
									}
								}
								$f.eq(j).html( th[j] );
							}
						}
					}
					if (c.showProcessing) {
						ts.isProcessing(table); // remove loading icon
					}
					// make sure last pager settings are saved, prevents multiple server side calls with
					// the same parameters
					p.totalPages = Math.ceil( p.totalRows / parsePageSize( p, p.size, 'get' ) );
					p.last.totalRows = p.totalRows;
					p.last.currentFilters = p.currentFilters;
					p.last.sortList = (c.sortList || []).join(',');
					updatePageDisplay(table, p, false);
					// tablesorter core updateCache (not pager)
					ts.updateCache( c, function(){
						if (p.initialized) {
							// apply widgets after table has rendered & after a delay to prevent
							// multiple applyWidget blocking code from blocking this trigger
							setTimeout(function(){
								if (c.debug) {
									console.log('Pager: Triggering pagerChange');
								}
								$table.trigger( 'pagerChange', p );
								ts.applyWidget( table );
								updatePageDisplay(table, p, true);
							}, 0);
						}
					});

				}
				if (!p.initialized) {
					p.initialized = true;
					p.initializing = false;
					if (table.config.debug) {
						console.log('Pager: Triggering pagerInitialized');
					}
					$(table).trigger( 'pagerInitialized', p );
					ts.applyWidget( table );
					updatePageDisplay(table, p);
				}
			},

			getAjax = function(table, p) {
				var url = getAjaxUrl(table, p),
					$doc = $(document),
					counter,
					c = table.config,
					namespace = c.namespace + 'pager';
				if ( url !== '' ) {
					if (c.showProcessing) {
						ts.isProcessing(table, true); // show loading icon
					}
					$doc.bind('ajaxError' + namespace, function(e, xhr, settings, exception) {
						renderAjax(null, table, p, xhr, settings, exception);
						$doc.unbind('ajaxError' + namespace);
					});

					counter = ++p.ajaxCounter;

					p.last.ajaxUrl = url; // remember processed url
					p.ajaxObject.url = url; // from the ajaxUrl option and modified by customAjaxUrl
					p.ajaxObject.success = function(data, status, jqxhr) {
						// Refuse to process old ajax commands that were overwritten by new ones - see #443
						if (counter < p.ajaxCounter){
							return;
						}
						renderAjax(data, table, p, jqxhr);
						$doc.unbind('ajaxError' + namespace);
						if (typeof p.oldAjaxSuccess === 'function') {
							p.oldAjaxSuccess(data);
						}
					};
					if (c.debug) {
						console.log('Pager: Ajax initialized', p.ajaxObject);
					}
					$.ajax(p.ajaxObject);
				}
			},

			getAjaxUrl = function(table, p) {
				var indx, len,
					c = table.config,
					url = (p.ajaxUrl) ? p.ajaxUrl
						// allow using "{page+1}" in the url string to switch to a non-zero based index
						.replace(/\{page([\-+]\d+)?\}/, function(s, n){ return p.page + (n ? parseInt(n, 10) : 0); })
						.replace(/\{size\}/g, p.size) : '',
					sortList = c.sortList,
					filterList = p.currentFilters || $(table).data('lastSearch') || [],
					sortCol = url.match(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/),
					filterCol = url.match(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/),
					arry = [];
				if (sortCol) {
					sortCol = sortCol[1];
					len = sortList.length;
					for (indx = 0; indx < len; indx++) {
						arry.push(sortCol + '[' + sortList[indx][0] + ']=' + sortList[indx][1]);
					}
					// if the arry is empty, just add the col parameter... "&{sortList:col}" becomes "&col"
					url = url.replace(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/g, arry.length ? arry.join('&') : sortCol );
					arry = [];
				}
				if (filterCol) {
					filterCol = filterCol[1];
					len = filterList.length;
					for (indx = 0; indx < len; indx++) {
						if (filterList[indx]) {
							arry.push(filterCol + '[' + indx + ']=' + encodeURIComponent(filterList[indx]));
						}
					}
					// if the arry is empty, just add the fcol parameter... "&{filterList:fcol}" becomes "&fcol"
					url = url.replace(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/g, arry.length ? arry.join('&') : filterCol );
					p.currentFilters = filterList;
				}
				if ( typeof p.customAjaxUrl === 'function' ) {
					url = p.customAjaxUrl(table, url);
				}
				if (c.debug) {
					console.log('Pager: Ajax url = ' + url);
				}
				return url;
			},

			renderTable = function(table, rows, p) {
				var $tb, index, count, added,
					$t = $(table),
					c = table.config,
					f = c.$table.hasClass('hasFilters'),
					l = rows && rows.length || 0, // rows may be undefined
					s = ( p.page * p.size ),
					e = p.size;
				if ( l < 1 ) {
					if (c.debug) {
						console.warn('Pager: >> No rows for pager to render');
					}
					// empty table, abort!
					return;
				}
				if ( p.page >= p.totalPages ) {
					// lets not render the table more than once
					moveToLastPage(table, p);
				}
				p.cacheIndex = [];
				p.isDisabled = false; // needed because sorting will change the page and re-enable the pager
				if (p.initialized) {
					if (c.debug) {
						console.log('Pager: Triggering pagerChange');
					}
					$t.trigger( 'pagerChange', p );
				}
				if ( !p.removeRows ) {
					hideRows(table, p);
				} else {
					ts.clearTableBody(table);
					$tb = ts.processTbody(table, c.$tbodies.eq(0), true);
					// not filtered, start from the calculated starting point (s)
					// if filtered, start from zero
					index = f ? 0 : s;
					count = f ? 0 : s;
					added = 0;
					while (added < e && index < rows.length) {
						if (!f || !/filtered/.test(rows[index][0].className)){
							count++;
							if (count > s && added <= e) {
								added++;
								p.cacheIndex.push(index);
								$tb.append(rows[index]);
							}
						}
						index++;
					}
					ts.processTbody(table, $tb, false);
				}
				updatePageDisplay(table, p);
				if (table.isUpdating) {
					if (c.debug) {
						console.log('Pager: Triggering updateComplete');
					}
					$t.trigger('updateComplete', [ table, true ]);
				}
			},

			showAllRows = function(table, p) {
				var index, $controls, len;
				if ( p.ajax ) {
					pagerArrows(p, true);
				} else {
					$.data(table, 'pagerLastPage', p.page);
					$.data(table, 'pagerLastSize', p.size);
					p.page = 0;
					p.size = p.totalRows;
					p.totalPages = 1;
					$(table)
						.addClass('pagerDisabled')
						.removeAttr('aria-describedby')
						.find('tr.pagerSavedHeightSpacer').remove();
					renderTable(table, table.config.rowsCopy, p);
					p.isDisabled = true;
					ts.applyWidget( table );
					if (table.config.debug) {
						console.log('Pager: Disabled');
					}
				}
				// disable size selector
				$controls = p.$size
					.add( p.$goto )
					.add( p.$container.find( '.ts-startRow, .ts-page' ) );
				len = $controls.length;
				for ( index = 0; index < len; index++ ) {
					$controls.eq( index )
						.attr( 'aria-disabled', 'true' )
						.addClass( p.cssDisabled )[0].disabled = true;
				}
			},

		// updateCache if delayInit: true
			updateCache = function(table) {
				var c = table.config,
					p = c.pager;
				// tablesorter core updateCache (not pager)
				ts.updateCache( c, function(){
					var i,
						rows = [],
						n = table.config.cache[0].normalized;
					p.totalRows = n.length;
					for (i = 0; i < p.totalRows; i++) {
						rows.push(n[i][c.columns].$row);
					}
					c.rowsCopy = rows;
					moveToPage(table, p, true);
				});
			},

			moveToPage = function(table, p, pageMoved) {
				if ( p.isDisabled ) { return; }
				var c = table.config,
					$t = $(table),
					l = p.last;
				if ( pageMoved !== false && p.initialized && ts.isEmptyObject(c.cache)) {
					return updateCache(table);
				}
				// abort page move if the table has filters and has not been initialized
				if (p.ajax && ts.hasWidget(table, 'filter') && !c.widgetOptions.filter_initialized) { return; }

				parsePageNumber( p );
				calcFilters(table, p);
				// fixes issue where one currentFilter is [] and the other is ['','',''],
				// making the next if comparison think the filters are different (joined by commas). Fixes #202.
				l.currentFilters = (l.currentFilters || []).join('') === '' ? [] : l.currentFilters;
				p.currentFilters = (p.currentFilters || []).join('') === '' ? [] : p.currentFilters;
				// don't allow rendering multiple times on the same page/size/totalRows/filters/sorts
				if ( l.page === p.page && l.size === p.size && l.totalRows === p.totalRows &&
					(l.currentFilters || []).join(',') === (p.currentFilters || []).join(',') &&
						// check for ajax url changes see #730
					(l.ajaxUrl || '') === (p.ajaxObject.url || '') &&
						// & ajax url option changes (dynamically add/remove/rename sort & filter parameters)
					(l.optAjaxUrl || '') === (p.ajaxUrl || '') &&
					l.sortList === (c.sortList || []).join(',') ) { return; }
				if (c.debug) {
					console.log('Pager: Changing to page ' + p.page);
				}
				p.last = {
					page : p.page,
					size : p.size,
					// fixes #408; modify sortList otherwise it auto-updates
					sortList : (c.sortList || []).join(','),
					totalRows : p.totalRows,
					currentFilters : p.currentFilters || [],
					ajaxUrl : p.ajaxObject.url || '',
					optAjaxUrl : p.ajaxUrl || ''
				};
				if (p.ajax) {
					getAjax(table, p);
				} else if (!p.ajax) {
					renderTable(table, c.rowsCopy, p);
				}
				$.data(table, 'pagerLastPage', p.page);
				if (p.initialized && pageMoved !== false) {
					if (c.debug) {
						console.log('Pager: Triggering pageMoved');
					}
					$t.trigger('pageMoved', p);
					ts.applyWidget( table );
					if (table.isUpdating) {
						if (c.debug) {
							console.log('Pager: Triggering updateComplete');
						}
						$t.trigger('updateComplete', [ table, true ]);
					}
				}
			},

		// set to either set or get value
			parsePageSize = function( p, size, mode ) {
				var s = parseInt( size, 10 ) || p.size || p.settings.size || 10,
				// if select does not contain an "all" option, use size
					setAll = p.$size.find( 'option[value="all"]' ).length ? 'all' : p.totalRows;
				return /all/i.test( size ) || s === p.totalRows ?
					// "get" to set `p.size` or "set" to set `p.$size.val()`
					( mode === 'get' ? p.totalRows : setAll ) :
					( mode === 'get' ? s : p.size );
			},

			parsePageNumber = function( p ) {
				var min = Math.min( p.totalPages, p.filteredPages ) - 1;
				p.page = parseInt( p.page, 10 );
				if ( p.page < 0 || isNaN( p.page ) ) { p.page = 0; }
				if ( p.page > min && p.page !== 0 ) { p.page = min; }
				return p.page;
			},

			setPageSize = function(table, size, p) {
				p.size = parsePageSize( p, size, 'get' );
				p.$size.val( parsePageSize( p, p.size, 'set' ) );
				$.data(table, 'pagerLastPage', parsePageNumber( p ) );
				$.data(table, 'pagerLastSize', p.size);
				p.totalPages = Math.ceil( p.totalRows / p.size );
				p.filteredPages = Math.ceil( p.filteredRows / p.size );
				moveToPage(table, p);
			},

			moveToFirstPage = function(table, p) {
				p.page = 0;
				moveToPage(table, p);
			},

			moveToLastPage = function(table, p) {
				p.page = ( Math.min( p.totalPages, p.filteredPages ) - 1 );
				moveToPage(table, p);
			},

			moveToNextPage = function(table, p) {
				p.page++;
				if ( p.page >= ( Math.min( p.totalPages, p.filteredPages ) - 1 ) ) {
					p.page = ( Math.min( p.totalPages, p.filteredPages ) - 1 );
				}
				moveToPage(table, p);
			},

			moveToPrevPage = function(table, p) {
				p.page--;
				if ( p.page <= 0 ) {
					p.page = 0;
				}
				moveToPage(table, p);
			},

			destroyPager = function(table, p) {
				var c = table.config,
					namespace = c.namespace + 'pager',
					ctrls = [ p.cssFirst, p.cssPrev, p.cssNext, p.cssLast, p.cssGoto, p.cssPageSize ].join( ',' );
				showAllRows(table, p);
				p.$container
					// hide pager controls
					.hide()
					// unbind
					.find( ctrls )
					.unbind( namespace );
				c.appender = null; // remove pager appender function
				c.$table.unbind( namespace );
				if (ts.storage) {
					ts.storage(table, p.storageKey, '');
				}
				delete c.pager;
				delete c.rowsCopy;
			},

			enablePager = function(table, p, triggered) {
				var info, size,
					c = table.config;
				p.$size.add(p.$goto).add(p.$container.find('.ts-startRow, .ts-page'))
					.removeClass(p.cssDisabled)
					.removeAttr('disabled')
					.attr('aria-disabled', 'false');
				p.isDisabled = false;
				p.page = $.data(table, 'pagerLastPage') || p.page || 0;
				size = p.$size.find('option[selected]').val();
				p.size = $.data(table, 'pagerLastSize') || parsePageSize( p, p.size, 'get' );
				p.$size.val( parsePageSize( p, p.size, 'set' ) ); // set page size
				p.totalPages = Math.ceil( Math.min( p.totalRows, p.filteredRows ) / p.size );
				// if table id exists, include page display with aria info
				if ( table.id ) {
					info = table.id + '_pager_info';
					p.$container.find(p.cssPageDisplay).attr('id', info);
					c.$table.attr('aria-describedby', info);
				}
				changeHeight(table, p);
				if ( triggered ) {
					// tablesorter core update table
					ts.update( c );
					setPageSize(table, p.size, p);
					hideRowsSetup(table, p);
					if (c.debug) {
						console.log('Pager: Enabled');
					}
				}
			};

		$this.appender = function(table, rows) {
			var c = table.config,
				p = c.pager;
			if ( !p.ajax ) {
				c.rowsCopy = rows;
				p.totalRows = p.countChildRows ? c.$tbodies.eq(0).children('tr').length : rows.length;
				p.size = $.data(table, 'pagerLastSize') || p.size || p.settings.size || 10;
				p.totalPages = Math.ceil( p.totalRows / p.size );
				renderTable(table, rows, p);
				// update display here in case all rows are removed
				updatePageDisplay(table, p, false);
			}
		};

		$this.construct = function(settings) {
			return this.each(function() {
				// check if tablesorter has initialized
				if (!(this.config && this.hasInitialized)) { return; }
				var t, ctrls, fxn,
					table = this,
					c = table.config,
					wo = c.widgetOptions,
					p = c.pager = $.extend( true, {}, $.tablesorterPager.defaults, settings ),
					$t = c.$table,
					namespace = c.namespace + 'pager',
				// added in case the pager is reinitialized after being destroyed.
					pager = p.$container = $(p.container).addClass('tablesorter-pager').show();
				// save a copy of the original settings
				p.settings = $.extend( true, {}, $.tablesorterPager.defaults, settings );
				if (c.debug) {
					console.log('Pager: Initializing');
				}
				p.oldAjaxSuccess = p.oldAjaxSuccess || p.ajaxObject.success;
				c.appender = $this.appender;
				p.initializing = true;
				if (p.savePages && ts.storage) {
					t = ts.storage(table, p.storageKey) || {}; // fixes #387
					p.page = isNaN(t.page) ? p.page : t.page;
					p.size = ( isNaN(t.size) ? p.size : t.size ) || p.settings.size || 10;
					$.data(table, 'pagerLastSize', p.size);
				}

				// skipped rows
				p.regexRows = new RegExp('(' + (wo.filter_filteredRow || 'filtered') + '|' + c.selectorRemove.slice(1) + '|' + c.cssChildRow + ')');

				$t
					// .unbind( namespace ) adding in jQuery 1.4.3 ( I think )
					.unbind( pagerEvents.split(' ').join(namespace + ' ').replace(/\s+/g, ' ') )
					.bind('filterInit filterStart '.split(' ').join(namespace + ' '), function(e, filters) {
						p.currentFilters = $.isArray(filters) ? filters : c.$table.data('lastSearch');
						// don't change page if filters are the same (pager updating, etc)
						if (e.type === 'filterStart' && p.pageReset !== false && (c.lastCombinedFilter || '') !== (p.currentFilters || []).join('')) {
							p.page = p.pageReset; // fixes #456 & #565
						}
					})
					// update pager after filter widget completes
					.bind('filterEnd sortEnd '.split(' ').join(namespace + ' '), function() {
						p.currentFilters = c.$table.data('lastSearch');
						if (p.initialized || p.initializing) {
							if (c.delayInit && c.rowsCopy && c.rowsCopy.length === 0) {
								// make sure we have a copy of all table rows once the cache has been built
								updateCache(table);
							}
							updatePageDisplay(table, p, false);
							moveToPage(table, p, false);
							ts.applyWidget( table );
						}
					})
					.bind('disablePager' + namespace, function(e){
						e.stopPropagation();
						showAllRows(table, p);
					})
					.bind('enablePager' + namespace, function(e){
						e.stopPropagation();
						enablePager(table, p, true);
					})
					.bind('destroyPager' + namespace, function(e){
						e.stopPropagation();
						destroyPager(table, p);
					})
					.bind('updateComplete' + namespace, function(e, table, triggered){
						e.stopPropagation();
						// table can be unintentionally undefined in tablesorter v2.17.7 and earlier
						// don't recalculate total rows/pages if using ajax
						if ( !table || triggered || p.ajax ) { return; }
						var $rows = c.$tbodies.eq(0).children('tr').not(c.selectorRemove);
						p.totalRows = $rows.length - ( p.countChildRows ? 0 : $rows.filter('.' + c.cssChildRow).length );
						p.totalPages = Math.ceil( p.totalRows / p.size );
						if ($rows.length && c.rowsCopy && c.rowsCopy.length === 0) {
							// make a copy of all table rows once the cache has been built
							updateCache(table);
						}
						if ( p.page >= p.totalPages ) {
							moveToLastPage(table, p);
						}
						hideRows(table, p);
						changeHeight(table, p);
						updatePageDisplay(table, p, true);
					})
					.bind('pageSize refreshComplete '.split(' ').join(namespace + ' '), function(e, size){
						e.stopPropagation();
						setPageSize(table, parsePageSize( p, size, 'get' ), p);
						hideRows(table, p);
						updatePageDisplay(table, p, false);
					})
					.bind('pageSet pagerUpdate '.split(' ').join(namespace + ' '), function(e, num){
						e.stopPropagation();
						// force pager refresh
						if (e.type === 'pagerUpdate') {
							num = typeof num === 'undefined' ? p.page + 1 : num;
							p.last.page = true;
						}
						p.page = (parseInt(num, 10) || 1) - 1;
						moveToPage(table, p, true);
						updatePageDisplay(table, p, false);
					})
					.bind('pageAndSize' + namespace, function(e, page, size){
						e.stopPropagation();
						p.page = (parseInt(page, 10) || 1) - 1;
						setPageSize(table, parsePageSize( p, size, 'get' ), p);
						moveToPage(table, p, true);
						hideRows(table, p);
						updatePageDisplay(table, p, false);
					});

				// clicked controls
				ctrls = [ p.cssFirst, p.cssPrev, p.cssNext, p.cssLast ];
				fxn = [ moveToFirstPage, moveToPrevPage, moveToNextPage, moveToLastPage ];
				if (c.debug && !pager.length) {
					console.warn('Pager: >> Container not found');
				}
				pager.find(ctrls.join(','))
					.attr('tabindex', 0)
					.unbind('click' + namespace)
					.bind('click' + namespace, function(e){
						e.stopPropagation();
						var i, $t = $(this), l = ctrls.length;
						if ( !$t.hasClass(p.cssDisabled) ) {
							for (i = 0; i < l; i++) {
								if ($t.is(ctrls[i])) {
									fxn[i](table, p);
									break;
								}
							}
						}
					});

				// goto selector
				p.$goto = pager.find(p.cssGoto);
				if ( p.$goto.length ) {
					p.$goto
						.unbind('change' + namespace)
						.bind('change' + namespace, function(){
							p.page = $(this).val() - 1;
							moveToPage(table, p, true);
							updatePageDisplay(table, p, false);
						});
				} else if (c.debug) {
					console.warn('Pager: >> Goto selector not found');
				}
				// page size selector
				p.$size = pager.find(p.cssPageSize);
				if ( p.$size.length ) {
					// setting an option as selected appears to cause issues with initial page size
					p.$size.find('option').removeAttr('selected');
					p.$size.unbind('change' + namespace).bind('change' + namespace, function() {
						if ( !$(this).hasClass(p.cssDisabled) ) {
							var size = $(this).val();
							p.$size.val( size ); // in case there are more than one pagers
							setPageSize(table, size, p);
							changeHeight(table, p);
						}
						return false;
					});
				} else if (c.debug) {
					console.warn('Pager: >> Size selector not found');
				}

				// clear initialized flag
				p.initialized = false;
				// before initialization event
				$t.trigger('pagerBeforeInitialized', p);

				enablePager(table, p, false);
				if ( typeof p.ajaxUrl === 'string' ) {
					// ajax pager; interact with database
					p.ajax = true;
					// When filtering with ajax, allow only custom filtering function, disable default
					// filtering since it will be done server side.
					c.widgetOptions.filter_serversideFiltering = true;
					c.serverSideSorting = true;
					moveToPage(table, p);
				} else {
					p.ajax = false;
					// Regular pager; all rows stored in memory
					ts.appendCache( c, true ); // true = don't apply widgets
					hideRowsSetup(table, p);
				}

				// pager initialized
				if (!p.ajax && !p.initialized) {
					p.initializing = false;
					p.initialized = true;
					moveToPage(table, p);
					if (c.debug) {
						console.log('Pager: Triggering pagerInitialized');
					}
					c.$table.trigger( 'pagerInitialized', p );
					if ( !( c.widgetOptions.filter_initialized && ts.hasWidget(table, 'filter') ) ) {
						updatePageDisplay(table, p, false);
					}
				}

				// make the hasWidget function think that the pager widget is being used
				c.widgetInit.pager = true;
			});
		};

	}() });

	// see #486
	ts.showError = function( table, xhr, settings, exception ) {
		var $row,
			$table = $( table ),
			c = $table[0].config,
			wo = c && c.widgetOptions,
			errorRow = c.pager && c.pager.cssErrorRow ||
				wo && wo.pager_css && wo.pager_css.errorRow ||
				'tablesorter-errorRow',
			typ = typeof xhr,
			valid = true,
			message = '',
			removeRow = function(){
				c.$table.find( 'thead' ).find( '.' + errorRow ).remove();
			};

		if ( !$table.length ) {
			console.error('tablesorter showError: no table parameter passed');
			return;
		}

		// ajaxError callback for plugin or widget - see #992
		if ( typeof c.pager.ajaxError === 'function' ) {
			valid = c.pager.ajaxError( c, xhr, settings, exception );
			if ( valid === false ) {
				return removeRow();
			} else {
				message = valid;
			}
		} else if ( typeof wo.pager_ajaxError === 'function' ) {
			valid = wo.pager_ajaxError( c, xhr, settings, exception );
			if ( valid === false ) {
				return removeRow();
			} else {
				message = valid;
			}
		}

		if ( message === '' ) {
			if ( typ === 'object' ) {
				message =
					xhr.status === 0 ? 'Not connected, verify Network' :
						xhr.status === 404 ? 'Requested page not found [404]' :
							xhr.status === 500 ? 'Internal Server Error [500]' :
								exception === 'parsererror' ? 'Requested JSON parse failed' :
									exception === 'timeout' ? 'Time out error' :
										exception === 'abort' ? 'Ajax Request aborted' :
										'Uncaught error: ' + xhr.statusText + ' [' + xhr.status + ']';
			} else if ( typ === 'string'  ) {
				// keep backward compatibility (external usage just passes a message string)
				message = xhr;
			} else {
				// remove all error rows
				return removeRow();
			}
		}

		// allow message to include entire row HTML!
		$row = ( /tr\>/.test(message) ? $(message) : $('<tr><td colspan="' + c.columns + '">' + message + '</td></tr>') )
			.click( function() {
				$( this ).remove();
			})
			// add error row to thead instead of tbody, or clicking on the header will result in a parser error
			.appendTo( c.$table.find( 'thead:first' ) )
			.addClass( errorRow + ' ' + c.selectorRemove.slice(1) )
			.attr({
				role : 'alert',
				'aria-live' : 'assertive'
			});

	};

	// extend plugin scope
	$.fn.extend({
		tablesorterPager: $.tablesorterPager.construct
	});

})(jQuery);

function doExtraWorkAfterOfferRemove(){}
$(document).on("keyup",".offerQuantity",function(e){var offer=$(this).attr('name');$(this).parent().find('span').html('<a class="updateLink" href="/action/updateCart?updateQuantity=true&'+offer+'_quantity='+$(this).val()+'">Update</a>');});$(document).on("click",".updateLink",function(e){var url=$(this).attr('href');$.ajax({type:'GET',url:url,dataType:'html',data:{forwardPage:'/pb2/widgets/pageBuilderLiteratum/ecomm/cart/offersTable.jsp',attributesParameter:'editCartView',editCartView:true},async:'false',success:renderOffers});$(this).trigger("AddedToCart");return false;});function renderOffers(data){$("div#offersTable").html(data);};
$(document).ready(function($){$(".moreAddress a").click(function(){$(".paymentAddress2").toggle('slow',function(){var $link=$(".moreAddress a");if($link.html().indexOf("+")>-1){$link.html("-")}else{$link.html("+");}});});});
function volumeOrYearChanged(selectedYearOrVolumeElement){var currentForm=$(selectedYearOrVolumeElement).closest('form'),partialLink=$(currentForm).attr('action')+'?'+(currentForm).serialize()+'&partial=true';jQuery('.CoverGallery').load(partialLink);checkAndDisableNavigation();}
function checkAndDisableNavigation(){var currentYearElem=$('#currentYear'),currentOptionElem=currentYearElem.find('option:selected');if(currentOptionElem.next()&&currentOptionElem.next().attr('value')){$('.pagingPrev').removeClass('disabled');}else{$('.pagingPrev').addClass('disabled');}
if(currentOptionElem.prev()&&currentOptionElem.prev().attr('value')){$('.pagingNext').removeClass('disabled');}else{$('.pagingNext').addClass('disabled');}}
$(document).ready(function(){checkAndDisableNavigation();});$(document).on('click','.ui-widget-overlay.ui-front',function(){$('.modalCoverDialog').dialog('close');});$(document).on('click','.coverArt-ajax-link',function(evt){evt.preventDefault();var link=$(this).attr('href'),windowHeight=$(window).height(),windowWidth=$(window).width()*0.9;jQuery('.modalCoverDialog').load(link,function(){$(this).dialog({modal:true,resizable:false,width:windowWidth,maxHeight:windowHeight,position:{my:"center",at:"top",of:window}});});});$(document).on('click','.pagingPrev',function(evt){evt.preventDefault();var currentYearElem=$('#currentYear'),currentOptionElem=currentYearElem.find('option:selected');if(currentOptionElem.next()&&currentOptionElem.next().attr('value')){currentYearElem.val(currentOptionElem.next().attr('value'));currentYearElem.trigger('change');currentYearElem[0].jcf.refreshSelectedText();}});$(document).on('click','.pagingNext',function(evt){evt.preventDefault();var currentYearElem=$('#currentYear'),currentOptionElem=currentYearElem.find('option:selected');if(currentOptionElem.prev()&&currentOptionElem.prev().attr('value')){currentYearElem.val(currentOptionElem.prev().attr('value'));currentYearElem.trigger('change');currentYearElem[0].jcf.refreshSelectedText();}});
$(document).ready(function(){$(document).on('click','.showTableEvent',function(e){e.preventDefault();var ID=$(e.target).closest("a").attr("data-id");showTable('div-'+ID+'');});$('.showTableEEvent').click(function(e){e.preventDefault();var ID=$(".showtable_wrap a.showTableEvent").attr("data-id");showTable('div-'+ID+'');});$(".tableWrapper").scroll(function(e){$(this).find("#tableCloseButton").css({"right":10-$(this).scrollLeft()});});});function showTable(id){$('.tableWrapper').addClass("visuallyhidden");var target=$("#"+id);var tables=$(".tableWrapper");var len=tables.length;var i=0;var index=-1;var nextTarget,prevTarget;for(i;i<len;i++){if(tables[i].id==id)
index=i;if((index-1)>=0)
prevTarget="'"+tables[index-1].id+"'";if((index+1)<len)
nextTarget="'"+tables[index+1].id+"'";}
var hideParam="'"+id+"'";var nLink=(index+1)<len?'<a class="next" title="Next Table" href="javascript:void(0)" onclick="showTable('+nextTarget+')"></a>':'';var pLink=(index-1)>-1?'<a class="prev" title="Previous Table" href="javascript:void(0)" onclick="showTable('+prevTarget+')"></a>':'';var navigator='<a title="Close Table Viewer" id="tableCloseButton" href="#" onclick="hideTable('+hideParam+'); return false;" class="close"></a>\
                        <div class="tableNav">\
                            '+pLink+'\
                            <span id="NavText">Table <span class="index">'+(index+1)+'</span> of '+len+'</span>\
                            '+nLink+'\
                        </div>';$(".tableViewerNav",target).html(navigator);target.find("#tableCloseButton").css({"right":10-target.scrollLeft()});target.removeClass("visuallyhidden");}
function hideTable(id){$('.tableWrapper').addClass("visuallyhidden");}
$(document).mouseup(function(e)
{var tableWrapper=$('.tableWrapper');if(!tableWrapper.is(e.target)&&tableWrapper.has(e.target).length===0){tableWrapper.addClass("visuallyhidden");}});
function showHideTocPublicationAbs(doi,idToShow){if(!$("#"+idToShow).is(":visible")){showTocPublicationAbstract(doi,idToShow+" .previewContent",idToShow);}else{$("#"+idToShow).hide();$("#show"+idToShow+" a").text(previewLabel());}}
function previewLabel(){return"Preview";}
function hidePreviewLabel(){return"Hide Preview";}
function showTocPublicationAbstract(doi_param,div,idToShow){if($("#"+div).html()==""){var data={ajax:'true',doi:doi_param};jQuery.ajax({url:'/action/PB2showAjaxAbstract',type:'POST',data:data,success:function(data,status){populateTocPublicationAbstract(data,div,idToShow,true);}});}else{populateTocPublicationAbstract(data,div,idToShow,false)}}
function populateTocPublicationAbstract(msg,div,idToShow,importData){if(importData){$("#"+div).html(msg);renderMathJax();}
$("#"+idToShow).css("display","block");$("#show"+idToShow+" a").text(hidePreviewLabel());}
function renderMathJax(){}
$(document).ready(initTocTasks);function initTocTasks(){hideViewChaptersLink();}
function hideViewChaptersLink(){if($(".tocContent input[type='checkbox'][name='doi']").length==0){$("span.bookViewChaptersLink").css("display","none");}};
$(document).ready(function(){var citationDetails=$(".citation-details");var $issue=citationDetails.find("input[name='quickLinkIssue']");var $page=citationDetails.find("input[name='quickLinkPage']");var $volume=citationDetails.find("input[name='quickLinkVolume']");var $year=citationDetails.find("input[name='quickLinkYear']");disableAndCleanInput($year);disableAndCleanInput($volume);disableAndCleanInput($page);disableAndCleanInput($issue);function enableInput(input){input.removeAttr("disabled");}
function disableAndCleanInput(input){if((input.attr("name")!="quickLinkIssue")||(input.attr("name")=="quickLinkIssue"&&!(input.attr("type")=="hidden"))){input.attr("disabled",true);input.val("");}}
citationDetails.on("focusout change paste textInput input",issuePageControl);$(".citationSearchBoxContainer").on("focusout change paste textInput input",issuePageControl);function issuePageControl(event){var $elem=$(event.target);var $year=$(this).find('input[name="quickLinkYear"]');var $volume=$(this).find('input[name="quickLinkVolume"]');var $issue=$(this).find('input[name="quickLinkIssue"]');var $page=$(this).find('input[name="quickLinkPage"]');if($elem.attr("name")=="quickLinkJournal"){if($elem.val()||$(this).find('input[name="quickLinkJournal"]').val()){enableInput($year);enableInput($volume);}else{disableAndCleanInput($year);disableAndCleanInput($volume);disableAndCleanInput($page);disableAndCleanInput($issue);}}else if($elem.attr("name")=="quickLinkVolume"){if($elem.val()||$(this).find('input[name="quickLinkYear"]').val()){enableInput($issue);if($issue.val()||$issue.hasClass("enable")){enableInput($page);}}else{disableAndCleanInput($page);disableAndCleanInput($issue);}}else if($elem.attr("name")=="quickLinkYear"){if($elem.val()||$(this).find('input[name="quickLinkVolume"]').val()){enableInput($issue);if($issue.val()||$issue.hasClass("enable")){enableInput($page);}}else{disableAndCleanInput($page);disableAndCleanInput($issue);}}else if($elem.attr("name")=="quickLinkIssue"){if($elem.val()){enableInput($page);}
else{if(!$issue.hasClass("enable"))
disableAndCleanInput($page);}}};prepareCitationEvents();});if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.*",function(){try{prepareCitationEvents();}catch(ex){}});}
function prepareCitationEvents(){var citationJournal=$(".citation.magicsuggest");var $citationSelectElement=$(".citation.citation-search-title");var ms=$(citationJournal).magicSuggest({allowFreeEntries:'false',maxSelection:1,resultAsString:true,cls:'citationJournalName',expandOnFocus:true,placeholder:$(citationJournal).data('placeholder')});$(ms).on('selectionchange',function(){if(this.getValue()!=""){SearchUtil.enableButton('citationSearchSubmitButton');}
else{SearchUtil.disableButton('citationSearchSubmitButton');}
if(this.getSelection().length){$('#citationSearchForm input[name="quickLinkYear"]').removeAttr("disabled");$('#citationSearchForm input[name="quickLinkVolume"]').removeAttr("disabled");}else{$('#citationSearchForm input[name="quickLinkYear"]').attr("disabled",true).val("");$('#citationSearchForm input[name="quickLinkVolume"]').attr("disabled",true).val("");$('#citationSearchForm input[name="quickLinkIssue"]').attr("disabled",true).val("");$('#citationSearchForm input[name="quickLinkPage"]').attr("disabled",true).val("");}});$('.ms-trigger').on('click',function(){if($('.citationJournalName').find('.dropdown-menu').is(':visible'))
{ms.getValue().length>0?ms.collapse():ms.expand();}
else
ms.getValue().length>0?ms.expand():ms.collapse();});if($citationSelectElement.length<1){return;}
$citationSelectElement.on('change',function(){if(this.value!=""){SearchUtil.enableButton('citationSearchSubmitButton');}
else{SearchUtil.disableButton('citationSearchSubmitButton');}});};
$(document).ready(function($){$(".subject .moreLess").click(function(e){$(this).toggleClass("hideIcon");$(this).siblings(".booksList").toggle('slow');});});
$(document).ready(function($){$(".jsOnly").removeClass("jsOnly");});
function onDecadeChange(select){var volumes=[];if(select.selectedIndex>0){var selectedOption=select.options[select.selectedIndex];var decadesVols=$(select).closest('.author-index-container').find('.decadesVolumes');var decadesVolsJson=$.parseJSON($(decadesVols).val());volumes=decadesVolsJson.map[$(selectedOption).val()];}
var volumeSelect=$(select).closest('.volumes-nav').find('.volumeSelect');$(volumeSelect).empty().append("<option value=''>Volume</option>");for(i=0;i<volumes.length;i++){$(volumeSelect).append("<option value='"+volumes[i]+"'>"+volumes[i]+"</option>");}}
function goToLetter(a,index,volume){var linkHref=$(a).attr('href');var selectVolume=$(a).closest('.author-index-container').find('.volumeSelect').val();if(selectVolume>0){volume=selectVolume;}
if(linkHref.indexOf('?')<0){linkHref=linkHref+'?';}
linkHref=linkHref+"&volume="+volume;if(index!=null){linkHref=linkHref+"&index="+index;}
$(a).attr('href',linkHref);return true;};
if(document.addEventListener){document.addEventListener("DOMContentLoaded",twoFactorAuthentication,false);}
else{document.onreadystatechange=twoFactorAuthentication;}
function twoFactorAuthentication(){if(document.getElementById('select-list-hidden')){var first=document.getElementById('container-all');var scrollableList=document.createElement("div");scrollableList.setAttribute('class','scrollableList');first.appendChild(scrollableList);var parent_node=document.querySelectorAll('.scrollableList');var selectOneOfTheOptions=document.createElement("div");selectOneOfTheOptions.setAttribute('id','selectOneOfTheOptions');parent_node[0].appendChild(selectOneOfTheOptions);var js__countries_select=document.createElement("ul");js__countries_select.setAttribute('tabindex','-1');js__countries_select.setAttribute('id','js__countries-select');js__countries_select.setAttribute('class','f32 hide');parent_node[0].appendChild(js__countries_select);var selectList=document.getElementById('select-list-hidden').getElementsByTagName('option');for(var j=0;j<selectList.length;j++){var a=selectList[j];var countries_text=selectList[j].text;var ulss=document.getElementById('js__countries-select');var classesAll=selectList[j].getAttribute("class");var node=document.createElement("li");ulss.appendChild(node);var ulss=document.getElementById('js__countries-select').getElementsByTagName('li')[j];var linkes_to_add=document.createElement("a");var textnode=document.createTextNode(countries_text);if(j==0){linkes_to_add.setAttribute('tabindex','0');}
linkes_to_add.setAttribute('href','#');linkes_to_add.appendChild(textnode);linkes_to_add.setAttribute('class',classesAll);ulss.appendChild(linkes_to_add);}
var li23=document.createElement('i');li23.innerHTML='';li23.setAttribute('class','countries-select ');document.getElementById("selectOneOfTheOptions").appendChild(li23);var true2=document.getElementById('selectOneOfTheOptions').getElementsByTagName("a");var innerdeep=document.getElementById("js__countries-select").getElementsByTagName("li")[0].getElementsByTagName("a")[0];document.createElement('a');var like=innerdeep;true2.innerHTML=like;var clon3=like.cloneNode(true);var res=clon3.innerHTML.split("+");clon3.innerHTML='+'+res[1];document.getElementById("selectOneOfTheOptions").appendChild(clon3);document.getElementById("selectOneOfTheOptions").onclick=function(e){if(typeof e=='undefined')e=window.event;e.preventDefault?e.preventDefault():(e.returnValue=false);if(document.getElementById("js__countries-select").className=="f32 hide"){e.preventDefault?e.preventDefault():(e.returnValue=false);document.getElementById("js__countries-select").className="f32";var focusedElement=document.getElementById("js__countries-select").getElementsByTagName('a')[0];focusedElement.focus();e=e||window.event;document.getElementById("js__countries-select").className="f32";}
else{document.getElementById("js__countries-select").className="f32 hide";}};var ul=document.getElementById('js__countries-select');if(ul.addEventListener){ul.addEventListener("click",function(e){functionX((e||event))},false);}
else{ul.attachEvent("onclick",function(e){functionX((e||event))});}
function functionX(e){var targetedElement=null;if(typeof e=='undefined')e=window.event;if(typeof e.srcElement=='undefined'){targetedElement=e.originalTarget;}else{targetedElement=e.srcElement;}
if(targetedElement.tagName==='A'){e.preventDefault?e.preventDefault():(e.returnValue=false);var firstchildnew=document.getElementById('selectOneOfTheOptions').getElementsByTagName('a')[0];var true1=document.getElementById('selectOneOfTheOptions').getElementsByTagName("a");if(true1){e.preventDefault?e.preventDefault():(e.returnValue=false);true1.innerHTML=targetedElement;var clon3=targetedElement.cloneNode(true);var res=clon3.innerHTML.split("+");clon3.innerHTML='+'+res[1];document.getElementById("selectOneOfTheOptions").appendChild(clon3);firstchildnew.remove();}
functionaddToHidden(e);}}
document.getElementById('js__mobile-countries').onkeydown=function(e){if(typeof e=='undefined'){e=window.event;}
functionaddToHidden(e);};function stripNonNumbers(val){return val.replace(/\D/g,'');}
document.getElementById('js__mobile-countries').onkeyup=function(e){var start=this.selectionStart,end=this.selectionEnd;this.value=stripNonNumbers(this.value);this.setSelectionRange(start,end);};document.getElementById('js__mobile-countries').addEventListener("focusout",function(e){this.value=stripNonNumbers(this.value);});document.getElementById('js__countries-select').getElementsByTagName('a').onmousedown=function(e){if(typeof e=='undefined')e=window.event;functionaddToHidden(e);};function functionaddToHidden(e){var input=document.getElementById('js__mobile-countries');var messages=document.getElementById('codeAndPhone');e=e||window.event;if(typeof e=='undefined')e=window.event;if(typeof e.srcElement=='undefined'){var sourceb=e.originalTarget;}else{var sourceb=e.srcElement;}
if(sourceb.tagName=="A"){var code2=sourceb.innerHTML;var res=code2.split("+");code2='+'+res[1];var messages=document.getElementById('codeAndPhone');messages.value=code2+input.value;}
else if(sourceb.tagName=="INPUT"){if(input.addEventListener){input.addEventListener("input",function(e){functionY((e||event))},false);}
else{input.attachEvent("onpropertychange",function(e){functionY((e||event))});}
function functionY(e){var code=document.getElementById('selectOneOfTheOptions').getElementsByTagName('a')[0].innerHTML;var res=code.split("+");code='+'+res[1];messages.value=code+input.value;};}
document.getElementById("js__countries-select").className="f32 hide";}
if(!Array.prototype.some)
{Array.prototype.some=function(func)
{for(var i in this)
{if(func(i))return true;}
return false;};}
function hasClass(element,cls){return(' '+element.className+' ').indexOf(' '+cls+' ')>-1;}
document.onmousedown=function(e){if(typeof e=='undefined')e=window.event;if(typeof e.srcElement=='undefined'){var sourceE=e.originalTarget;}else{var sourceE=e.srcElement;}
if((closestt(sourceE,'.js__pincode-container')==null)&&!(sourceE.id=="js__countries-select")){if(document.getElementById('js__mobile-countries')){document.getElementById("js__countries-select").className="f32 hide";}}};function closestt(el,selector){while(el!==null){elementParent=el.parentElement;if(elementParent!==null&&(hasClass(elementParent,selector)||hasClass(el,"flag"))){return elementParent;}
el=elementParent;}
return null;}
function hide(){var elem=document.getElementById('select-list-hidden');elem.style.display='none';}
window.onload=hide;Element.prototype.remove=function(){this.parentElement.removeChild(this);}
NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var i=this.length-1;i>=0;i--){if(this[i]&&this[i].parentElement){this[i].parentElement.removeChild(this[i]);}}}
if(!Array.prototype.filter)
{Array.prototype.filter=function(fun)
{"use strict";if(this===void 0||this===null)
throw new TypeError();var t=Object(this);var len=t.length>>>0;if(typeof fun!=="function")
throw new TypeError();var res=[];var thisp=arguments[1];for(var i=0;i<len;i++)
{if(i in t)
{var val=t[i];if(fun.call(thisp,val,i,t))
res.push(val);}}
return res;};}
if(!Array.prototype.indexOf)
{Array.prototype.indexOf=function(elt)
{var len=this.length>>>0;var from=Number(arguments[1])||0;from=(from<0)?Math.ceil(from):Math.floor(from);if(from<0)
from+=len;for(;from<len;from++)
{if(from in this&&this[from]===elt)
return from;}
return-1;};}
function findNextTabStop(el,dir){var universe=document.querySelectorAll('#js__countries-select a');var list=Array.prototype.filter.call(universe,function(item){return item.tabIndex>="-1"});var index=list.indexOf(el);if(dir=="next"){return list[index+1]||list[0];}else{return list[index-1]||list[0];}}
document.onkeydown=function(event){event=event||window.event;if(typeof event.srcElement=='undefined'){var classes=event.originalTarget;}else{var classes=event.srcElement;}
if(event.keyCode==40||event.which==40){event.preventDefault?event.preventDefault():(event.returnValue=false);var nextEl=findNextTabStop(classes,"next");nextEl.focus();}
else if(event.keyCode==38||event.which==38){event.preventDefault?event.preventDefault():(event.returnValue=false);var nextEl=findNextTabStop(classes,"prev");nextEl.focus();}
var isEscape=false;if("key"in event){isEscape=event.key=="Escape";}else{isEscape=event.keyCode==27;}
if(isEscape){document.getElementById("js__countries-select").className="f32 hide";}
var targetEL=event.target;if((event.keyCode==13||event.which==13)&&hasClass(targetEL,"flag")){if(document.getElementById("js__countries-select").className=="f32 hide"){var focusedElement=document.getElementById("js__countries-select").getElementsByTagName('a')[0];focusedElement.focus();event=event||window.event;document.getElementById("js__countries-select").className="f32";}else{if(!(hasClass(document.getElementById("js__countries-select"),"hide"))){event.preventDefault?event.preventDefault():(event.returnValue=false);document.getElementById("js__mobile-countries").focus();document.getElementById("js__countries-select").className="f32 hide"}}
var keycode1=(event.keyCode?event.keyCode:event.which);var targetedElement=event.target;if(targetedElement.tagName==='A'){var firstchildnew=document.getElementById('selectOneOfTheOptions').getElementsByTagName('a')[0];var true1=document.getElementById('selectOneOfTheOptions').getElementsByTagName("a");if(true1){var targetedElement=event.target;var like=targetedElement;var li2=document.createElement('a');li2.setAttribute('href','#');true1.innerHTML=li2;var toremove=document.getElementById('selectOneOfTheOptions').getElementsByTagName("a")[0];var toremoveinner=toremove;var clon3=like.cloneNode(true);var res=clon3.innerHTML.split("+");clon3.innerHTML='+'+res[1];document.getElementById("selectOneOfTheOptions").appendChild(clon3);firstchildnew.remove();}}}
e=event||document.event;if(typeof e=='undefined')e=document.event;if((e.keyCode>=65&&e.keyCode<=130)||(e.which>=65&&e.which<=130)){var keycode1=(e.keyCode?e.keyCode:e.which);var string1=String.fromCharCode(keycode1);var searchon1=document.getElementById('js__countries-select').getElementsByTagName('a');for(var j=0;j<searchon1.length;j++){var a=searchon1[j];var countries_text=searchon1[j].innerHTML;var chare=countries_text.charAt(0);var lowercase=chare.toLowerCase();var lowString1=string1.toLowerCase();if(lowString1==lowercase){searchon1[j].focus();return true;}}}};}
if(document.getElementById('check-if-exist')){setTimeout(function(){document.getElementById('hidden-message').style.visibility="visible";document.getElementById('hidden-message').style.display="block";},30000);}
var submit,passPin=document.getElementsByClassName("type-pass-pin")[0];if(passPin){passPin.addEventListener('keyup',function(){var children=this.form.children;for(var i=0;i<children.length;i++){if(children[i].className=="OK-btn"){submit=children[i];break;}}
submit.disabled=(this.value?false:true);});}
var pinForm=document.getElementsByClassName('js__pinCode')[0];if(pinForm){pinForm.addEventListener('submit',function(){var passPin=document.getElementsByClassName('type-pass-pin')[0];var pinValue=passPin.value;var numeric=isNumeric(pinValue);if(!numeric||pinValue==''||pinValue=="Type the 6 diget PIN  Code"){var errorMsg=this.querySelector('.error-msg')
errorMsg.innerHTML="Please fill this field with numbers";errorMsg.className=errorMsg.className.replace(/\bhidden\b/,'');return false;}});}}
function isNumeric(n){return!isNaN(parseFloat(n))&&isFinite(n);}
if(!(typeof jQuery=='undefined')){(function($){var selectElement=$(".scrollableList").siblings("select");$(".scrollableList").siblings().each(function(){if($(this).hasClass("sbHolder")){selectElement.selectbox("detach");}else if($(this).hasClass("bootstrap-select")){$(this).hide();}});selectElement.hide();})(jQuery);jQuery(document).ready(function(){jQuery('.pb-collapse').click(function(){jQuery(".notAuth-msg-container").toggleClass('collapsed');jQuery(this).find('img').toggle();});});}
function tfaOptionVisible(event){event.preventDefault()
if(document.getElementById('tfa-options')){if(document.getElementById('tfa-options').style.display=='none'){document.getElementById('tfa-options').style.display='block';}
else{document.getElementById('tfa-options').style.display='none';}}}
function tfaResetAuthentication(){if(document.getElementById('reset-verification-warning').style.display=='none'){document.getElementById('reset-verification-warning').style.display='block';document.getElementsByClassName('reset-verification-option')[0].style.display='none';}
var redirectUri=document.getElementsByName('redirectUri')[0].value;document.getElementsByName('redirectUri')[0].value=encodeURI('/action/resetTfaMethod?redirectUri='+redirectUri);};
(function($){function init(){var stored={};var localStorageKey="widget-disclosure-storage";if(localStorage){stored=localStorage.getItem(localStorageKey);if(stored==null){stored={};}else{stored=JSON.parse(stored);}}
$(".widget-disclosure").each(function(){var defaultHidden=$(this).hasClass("widget-disclosure-hidden");var widgetId=$(this).attr("id");var $header=$(this).find(".widget-header");var $disclosure=$("<div class='disclosure-icon'></div>");var $body=$(this).find(".widget-body");var storedState=stored[widgetId];if(storedState!=undefined)defaultHidden=storedState;function updateVisibility(hide,updateStore){$disclosure.toggleClass("disclosure-hidden",hide);$body.toggle(!hide);if(localStorage&&updateStore){stored[widgetId]=hide;var stringData=JSON.stringify(stored);localStorage.setItem(localStorageKey,stringData);}}
updateVisibility(defaultHidden);$header.click(function(){if($disclosure.hasClass("disclosure-hidden")){updateVisibility(false,true);}else{updateVisibility(true,true);}});$(this).find(".header-disclosure").append($disclosure);});}
$(document).ready(function(){if(window.PB&&window.PB.$){window.PB.$(document.documentElement).on("WidgetReinit.*",init);}else{init();}
$('.subscOption label').click(false);if($('#noTitlesNewAlert').is(':checked'))
{$(".subAllTitles input,.subCustom input,.publicationTypes input").attr('disabled','disabled');}
else
{$(".subAllTitles input,.subCustom input,.publicationTypes input").removeAttr('disabled','');}
$('.unsubscribe #noTitlesNewAlert').click(function(){$(".subAllTitles input,.subCustom input").removeAttr('checked');if($('#noTitlesNewAlert').is(':checked'))
{$(".subAllTitles input,.subCustom input,.publicationTypes input").attr('disabled','disabled');}
else
{$(".subAllTitles input,.subCustom input,.publicationTypes input").removeAttr('disabled','');}});$(".close").click(function(){if(!$('.changeLink').length>0){$(".subCustom").next().after("<a href='javascript:;' onclick='$(\".categoriesList\").show();' class='changeLink'>Change</a>");}});if($('#customTitlesNewAlert').attr("checked")){$(".categoriesList").show();}else{$(".categoriesList").hide();}
$('.showAllList').hide();});$(document).on('click','#showLogin',function(e){var formLogin=$('#frmLogin');formLogin.slideToggle();if(formLogin.is(':visible')){$('#login').focus();}
e.preventDefault();});})(window.jQuery);function submitArticles(aForm,action){var hasMarked=false;var elmts=aForm.elements;for(var i=0;i<elmts.length;i++){if((elmts[i].name=="doi")&&(elmts[i].type=="checkbox")&&(elmts[i].checked)){hasMarked=true;break;}}
if(!hasMarked){alert("Please check at least one article.");return;}
for(var i=0;i<elmts.length;i++){if((elmts[i].name=="doi")&&(elmts[i].type!="checkbox")){elmts[i].name="xdoi";}}
aForm.setAttribute('action',action);aForm.method="post";aForm.submit();return false;}
$(document).on('click','span.expandable-author',function(e){var authorExList=$('div.expandable-author');var expandLink=$('span.expandable-author');if(authorExList.css('display')=='none'){authorExList.css('display','inline');expandLink.text('...Show less authors');}else{expandLink.text('...Show all authors');authorExList.css('display','none');}});$(document).on('click','a.expandedList-header',function(e){var expandedList=$('ul.tools2-expandedList');var expandedListHeader=$('a.expandedList-header');if(expandedList.css('display')=='none'){expandedList.css('display','block');expandedListHeader.text(' Less');expandedListHeader.addClass('switch');}else{expandedListHeader.text(' More');expandedList.css('display','none');expandedListHeader.removeClass('switch');}});$(document).on('click','a.citationAndRef-header',function(e){var expandedList=$('ul.tools3');var expandedListHeader=$('a.citationAndRef-header');if(expandedList.css('display')=='none'){expandedList.css('display','block');expandedListHeader.text(' Less');expandedListHeader.addClass('switch');}else{expandedListHeader.text(' More');expandedList.css('display','none');expandedListHeader.removeClass('switch');}});
$(document).ready(function(){$('#storySearchFormContainer').removeClass('noscript');if($('#searchTimeFormContainer').hasClass('hidden')){$('#newSearchLink').show();}
else{$('#newSearchLink').hide();}
$('.searchResultTabs').bind('click',function(){removeAllRestrictionsOfInput('frmSearch','KeywordStored','ContentItemType','ContribStored','Ppub','SeriesKey','Topic','ConceptID');});$('#newSearchLink').on('click',function(){$('#searchTimeFormContainer').removeClass('hidden');$('#contentTypeFilterContainer').removeClass('hidden');$('#narrowByContainer').removeClass('hidden');clearInputs('frmSearch');clearInputs('frmStorySearch');});$("input[name='sortBy']").change(function(){var sortByForm=$(this).closest('.sortControlForm');if(sortByForm.length>0){$(sortByForm).submit();}});$('#searchTarget').change(function(){var selectedItemID=$(this).find('option:selected').attr('id');if(selectedItemID=='thisJournal'||selectedItemID=='thisSeries'){$('#searchTarget').attr('name','publication');}
else{$('#searchTarget').attr('name','content');}});$('.showMore').on('click',showMoreFacetNodesHandler);$('.showLess').on('click',showLessFacetNodesHandler);$("#searchResultContainer .articlePreviewLink").off('click');$("#searchResultContainer .articlePreviewLink").on("click",function(e){SearchUtil.showHideAbs(e,$(this).data("doi"),$(this).data("id"));var prevText=$(this).find('.articlePreviewLinkText').text().trim();if($(this).hasClass('selected')){$(this).removeClass('selected');$(this).find('.articlePreviewLinkText').html(prevText.replace('Hide ',''));}
else{$(this).addClass('selected');$(this).find('.articlePreviewLinkText').html('Hide '+prevText);}});});function onSubmitActions(){SearchUtil.tinyUrl();checkBackfileEarlyCite();}
function checkBackfileEarlyCite(){if($('#earlycite').is(":checked")){$('#hiddenEarlyCite').attr('disabled',true);}
if($('#backfile').is(":checked")){$('#hiddenBackFile').attr('disabled',true);}}
function setFieldValue(aForm,aField,aValue){var input=$(aForm).find('input[name='+aField+']');if(input.length==0){input=document.createElement("input");input.type="hidden";input.name=aField;input.value=aValue;$(aForm).append(input);}
else{input.val(aValue);}}
function clearInputs(searchForm){var aForm=document.forms[searchForm];$(".mainSearchForm input:radio:first").prop('checked',true);$("#contentTypeFilterContainer input:radio:first").prop('checked',true);$("#searchTimeFormContainer input:radio:first").prop('checked',true);$(aForm).find(':text').val('');$(aForm).find(':checkbox').prop('checked',true);$(aForm).find('select').prop('selectedIndex',0);$(aForm).find('input[type=hidden]').not('[name=target]').remove();}
function addContentSearchParameterToUrl(value){var url=document.URL;var re=new RegExp("([?|&])"+"access"+"=.*?(&|$)","i");separator=url.indexOf('?')!==-1?"&":"?";if(url.match(re)){url=url.replace(re,'$1'+"access"+"="+value+'$2');}
else{url=url+separator+"access"+"="+value;}
window.location.href=url;};
function searchRestrictDate(aForm,yearValue,monthValue,dayValue){var form=$('form[name='+aForm+']');var now=new Date();var adjustedMonth=(now.getMonth()+1)%12;adjustedMonth='0'+adjustedMonth;var adjustedDate='0'+now.getUTCDate();setInput(form,"Ppub",yearValue+monthValue+dayValue+"-"+now.getUTCFullYear()+adjustedMonth.slice(-2)+adjustedDate.slice(-2));resetStartPage(form);onResultSearchFormSubmit(form);}
function onResultSearchFormSubmit(aForm,value)
{if(!value){value="enter new search term";}
$(aForm).submit();}
function removeRestrict(aForm,aField,aValue){var input=$(aForm).find("input[name='"+aField+"']");if(typeof input=='undefined'||input==null){return;}
else{$(input).each(function(index,input){var inputLowerCase=input.value.toLowerCase();inputLowerCase=inputLowerCase.replace(/\+/g,'%20');var aValueLowerCase=encodeURIComponent(aValue).toLowerCase();if(inputLowerCase==aValueLowerCase||aValueLowerCase=='undefined'){input.value='';input.parentNode.removeChild(input);}});}}
function removeAllRestrictionsOfInput(formName){var form=$('form[name='+formName+']');for(i=1;i<arguments.length;i++){removeRestrictionsOfInput(form,arguments[i]);}}
function removeRestrictionsOfInput(aForm,aField){var input=$(aForm).find('input[name='+aField+']');if(input==undefined||input==null||input.length==0){return 0;}
if(typeof input.length!=undefined){$(input).each(function(i,inputField){$(inputField).val('');$(inputField).remove('');});return input.length;}else{$(input).val('');$(input).remove();return 1;}}
function resetStartPage(aForm){var startPage=$(aForm).find('input[name="startPage"]');if(startPage)startPage.val(0);}
function setInput(aForm,aField,aValue)
{var input=$(aForm).find('input[name='+aField+']');$(aForm).append($('<input>').attr({"name":aField,"type":"hidden","value":aValue}));}
function showMoreFacetNodesHandler(){$(this).siblings('.hiddenChildrenFacets').slideToggle('slow');$(this).parent().find('.showLess').show();$(this).hide();var hiddenClassName=$(this).attr('id');}
function showLessFacetNodesHandler(){$(this).find('label').text("More ");$(this).siblings('.hiddenChildrenFacets').slideToggle('slow');$(this).parent().find('.showMore').show();$(this).hide();};
$(document).ready(function($){$('#select_all').click(function(){if($(this).is(":checked")){$('#browsePublicationsForm').find(':checkbox').prop('checked',true);}
else{$('#browsePublicationsForm').find(':checkbox').prop('checked',false);}});$('#favoritesAction').click(function(){var $form=$('#browsePublicationsForm');if($("#"+$form.attr('id')+" input:checkbox:checked").length>0){$form.submit();}
else{alert('Please select at least one publication');}});});
$(document).ready(function($){$(".markedListOptions").click(function(event){if(!$('input[type=checkbox]:checked').length){alert('Please select one publication at least');event.stopPropagation();return false;}
var val=$(this).val();var form=$(this).parents("form");var action='';if(!val)
return;if(val=='email'){$(form).append($('<input>').attr({"name":"title","type":"hidden","value":"email to a friend"}));action='/action/showMailPage';}
else if(val=='alert'){action='/action/doUpdateAlertSettings';$('option[value='+val+']',this).val('addJournalBookAlert');}
else if(val=='delete'){action=form.attr('action');}else if(val=='addSerialsAlert'){action='/action/doUpdateAlertSettings';$('option[value='+val+']',this).val('addJournalBookAlert');}else{action=val;}
form.attr('action',action);form.get(0).submit();});$(".sortOptions").change(function(){var val=$(this).val();if(!val)
return;var action=$('[name="currentUrl"]').val();var form=['<form method="GET" action="'+action+'">'];form.push('<input type="hidden" name="'+'menuTab'+'" value="'+'favorites'+'"/>');form.push('<input type="hidden" name="'+'sortBy'+'" value="'+val+'"/>');form.push('<input type="hidden" name="'+'type'+'" value="'+'articles'+'"/>');form.push('</form>');$(form.join('')).appendTo('body')[0].submit();form.submit();$(form).remove();});});
$(document).ready(function($){$("#deleteOffer").click(function(e){submitForm($(this).closest("form"),e);});$("#deleteOffer2").click(function(e){submitForm($(this).closest("form"),e);});$("[name='checkOut']").click(function(e){var $form=$(this).closest("form");$form.find("[name='offerId']").removeAttr('checked');});});function submitForm($form,e){if($form.find('input[type=checkbox]:checked').length==0)
{e.preventDefault();alert('Please select at least one item');}else{$form.submit();}};
$(document).ready(function($){$(".collectionItem").click(function(e){e.preventDefault();var $target=$(this).closest('tr');if($(this).hasClass('loaded')){renderAccessWidgetContent('',$target,true);}
else{var $widget=$(this).closest(".literatumAccessWidget");var code=$(this).attr('data-id');$widget.pbAjax({type:'GET',url:'/pb/widgets/AccessWidgetController/collectionPublication',dataType:'html',async:'false',data:{categoryCode:code},success:function(data){renderAccessWidgetContent(data,$target,false);}});$(this).addClass("loaded");}})});function renderAccessWidgetContent(data,$target,loaded){if(loaded)
$target.next().toggle();else
$target.after(data);};
$(document).ready(function($){$("#SSDelete").click(function(e){$(this).closest("form").submit();});$("#SSDelete2").click(function(e){$(this).closest("form").submit();});});