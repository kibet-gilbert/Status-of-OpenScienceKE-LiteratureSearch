jQuery(function(){
  // init window-resizer
  initPageResizeHandler( [ 480, 960 ] );
  // init open-close for filter with checkbox
  initOpenClose();
  // init open-close
  initOpenCloseDropdown();
  // init custom-checkbox
  initCustomCheckbox();
  // init background stretch
  initBackgroundStretch();
  // init same height
  initSameHeight();

  initObserverPagination();
});


//add anchor to issue articles
function initObserverPagination() {
  jQuery('#observed .wp-pagenavi a').each(function(){
    var anchored = jQuery(this).attr('href') + '#observed';
    jQuery(this).attr('href', anchored);
  });
}

function initPageResizeHandler(stops) {
  var widthLevel;
  function pageResizeHandler() {
    var windowWidth = window.innerWidth;
    var stop = stops.filter( function(i) {return i <= windowWidth} ).length;
    if(widthLevel!=stop) {
      widthLevel = stop;
      jQuery(window).trigger("widthLevelChange", [ stop, windowWidth ] );
    }
  }
  jQuery(window).on('load resize orientationchange', pageResizeHandler);
}


function initOpenClose () {
    //switcher for filter-checkboxes on "Topics" page
        jQuery('.filter').dpOpenClose({
            controller          : '.open-link',
            contentMask         : '.mask',
            effect              : {
                type     : 'drop',
                showSpeed: 400,
                hideSpeed: 400
            }
        });
}


function initCustomCheckbox () {
    //init plugin and attach handler to each select
    jQuery('.filter [type="checkbox"]').dpCustomCheckbox({
        wrapperElement : 'span',
        checkElement   : 'span',
        wrapperClass   : 'dp-checkbox',

        inputPositionZIndex: -999,

        checkedClass  : 'dp-checked',
        unCheckedClass: 'dp-unchecked',
        focusedClass  : 'dp-focus',
        disabledClass : 'dp-disabled',

        labelCheckedClass: 'dp-label-active',
        enableWatcher    : false
    })
}

function initOpenCloseDropdown () {
  //switcher for dropdown menu on mobile version
  jQuery('.header-holder').dpOpenClose({
    controller          : '.header-opener',
    contentMask         : '.header-nav',
    effect              : {
      type     : 'drop',
      showSpeed: 400,
      hideSpeed: 400
    }
  });

  function hideDropDown( event, level, width ) {
    if( width >= 960) {
      // click on opened bars if found one to gracefully close menu
      jQuery('.header-holder').data("dpOpenClose").closeBlock();
    }
  }
  jQuery(window).on('widthLevelChange', hideDropDown );

}

function initBackgroundStretch () {
  jQuery('.teaser-img').dpBackgroundStretch({
    forceUsingIMG : false,
    backgroundSize: 'cover'
  });
}

function initSameHeight () {
  jQuery('.featured-list').dpSameHeight({
    alignBlocksSelector: '.btn',
    byRows: true
  });
}

//plugin open-close
(function(e,t){t.DP=t.DP||{};t.DP.Class=t.DP.Class||function(){function e(){}e.extend=function n(e,i){var s,o,r=this;i=i||{};if("function"===typeof e._constructor){s=function(){this._super=r;e._constructor.apply(this,arguments);this._super=null}}else{s=function(){r.apply(this,arguments)}}o=new Function;o.prototype=r.prototype;s.prototype=new o;for(var h in e)if(e.hasOwnProperty(h))(function(e,t){if(t==="_constructor"){return}if("function"===typeof e){s.prototype[t]=function(){var n,s;if(this._super){s=this._super}this._super=r.prototype[t];if("function"===typeof i["function"]){n=i["function"].call(this,t,e,r,arguments)}else{n=e.apply(this,arguments)}this._super=s||null;return n};return}if("function"===typeof i.other){s.prototype[t]=i.other.call(this,t,e,r);return}s.prototype[t]=e})(e[h],h);s.prototype.constructor=s;s.prototype._common={_instanceCounter:0};s.extend=n;s.extension=t;return s};function t(e,t,n){var i=this.extend(e,t);if(typeof n==="string"){n=[n]}n=(n||[]).concat("extend","extension");for(var s in this){if(this.hasOwnProperty(s)&&n.indexOf(s)===-1){i[s]=this[s]}}return i}e.extension=t;return e}();t.DP.Core=t.DP.Core||function(){var t=DP.Class.extend({name:"unnamed",_defaultSettings:{},init:function(){this._listeners=[];this.namespace="."+this.name+"-"+this._common._instanceCounter++},destroy:function(){this._unbindEvents()},_bindEvents:function(){},_applySettings:function(t){var n=this;t=e.extend(true,{},this._defaultSettings,t);e.each(this._defaultSettings,function(e){n[e]=t[e]})},_listenTo:function(){var t=e(Array.prototype.shift.apply(arguments)),n=arguments[0].split(" ");this._listeners.push(t);for(var i=0,s=n.length;i<s;i++){n[i]+=this.namespace}arguments[0]=n.join(" ");if("function"===typeof arguments[1]){arguments[1]=e.proxy(arguments[1],this)}else{arguments[2]=e.proxy(arguments[2],this)}e.fn.on.apply(t,arguments)},_unbindEvents:function(){for(var t=0,n=this._listeners.length;t<n;t++){e(this._listeners[t]).off(this.namespace)}}}),n=t.extend;t.extend=function s(t,o){var r;o=o||{};o.other=function(t,n,i){if(t==="_defaultSettings"){return e.extend(true,{},i.prototype[t],n)}return n};r=n.call(this,t,o);r.extend=s;r.defineModule=i;return r};function i(n,i){this.prototype._defaultSettings.modules={};i=i||{};i._constructor=function(t,i){if(i&&i.modules){e.extend(true,i,i.modules[n])}this._super(t,i)};return t.extension.call(this,i,{"function":function(e,t,i,s){if(n in this.modules){return t.apply(this,s)}else{if(this._super){return this._super.apply(this,s)}}}})}return t}();t.DP.Plugins=t.DP.Plugins||{};t.DP.Plugins.Core=t.DP.Plugins.Core||function(){var n=function(){var e=Array.prototype.slice.call(arguments),t=e.pop();e.push(function(){var e=Array.prototype.slice.call(arguments);e.shift();t.apply(null,e)});return e};var i=function(e){return[e[0],Array.prototype.slice.call(e,1)]};var s={on:function(){this.__observer=this.__observer||e({});this.__observer.on.apply(this.__observer,n.apply(null,arguments));return this},once:function(){this.__observer=this.__observer||e({});this.__observer.one.apply(this.__observer,n.apply(null,arguments));return this},off:function(){this.__observer=this.__observer||e({});this.__observer.off.apply(this.__observer,arguments);return this},trigger:function(){this.__observer=this.__observer||e({});this.__observer.trigger.apply(this.__observer,i(arguments));return this}};var o=DP.Core.extend(e.extend({},s,{_publicEvents:[],_constructor:function(t,n){this._container=t;var i=this._container.data(this._settingsData)||{};if(typeof i!=="object"){i={}}this._applySettings(e.extend(true,{},n,i))},init:function(){this._super();var e=this;o.messageBus.on("state:update"+this.namespace,function(t){if(e._container.parents().index(t)!==-1){e._updateState.apply(e,arguments)}})},_updateState:function(e){console.log("OVERRIDE THIS METHOD","PARENT = ",e)},destroy:function(){o.messageBus.off(this.namespace);this._super()},_checkIsMobile:function(){var e;return function(){if(e===undefined){var n="ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch,i=/Windows Phone/.test(navigator.userAgent);e=!!(n||i)}return e}}()}));var r=o.extend;o.extend=function a(){var e=r.apply(this,arguments);e.effects=function(){var e={},t;t=function(t){var n=t.type;if(e[(n||"").toLowerCase()]){return new(e[n.toLowerCase()])(t)}return new e["default"](t)};t.define=function(t,n){e[t]=n};return t}();e.extend=a;return e};o.messageBus=e.extend({},{},s);var h=o.prototype.trigger;o.prototype.trigger=function(t){if(e.inArray(t,this._publicEvents)!==-1){var n=Array.prototype.slice.call(arguments);n.unshift(this._container);n.unshift("state:update");o.messageBus.trigger.apply(o.messageBus,n)}h.apply(this,arguments)};return o}();t.DP.Effects=t.DP.Effects||{};t.DP.Effects.Core=t.DP.Effects.Core||DP.Core.extend({_constructor:function(e){this._applySettings(e)}});DP.Plugins.OpenClose=DP.Plugins.Core.extend({_defaultSettings:{controller:".open-link",effect:{type:"",showSpeed:400,hideSpeed:400},contentMask:".mask",classBeforeAnimation:"open",classOpened:"opened",bodyClose:true,modules:{}},name:"open-close",_dataName:"state",_constructor:function(e,t){this._super(e,t);this._mask=null;this._controlElement=null;this._effect=DP.Plugins.OpenClose.effects(this.effect);this.init()},init:function(){this._mask=this._container.find(this.contentMask).first();this._controlElement=this._container.find(this.controller).first();this._super();this._setInitState();this._bindEvents()},destroy:function(){this._super();this._mask=null;this._controlElement=null},_applyEffectClose:function(){return this._effect.hide({container:this._mask})},closeBlock:function(){var t=this,n=null;if(this._container.data(this._dataName)==="close"){return e.when(true)}this._container.data(this._dataName,"close");this._container.removeClass(this.classBeforeAnimation);n=this._applyEffectClose();n.then(function(){t._container.removeClass(t.classOpened);t.trigger("itemClosed",t._container)});return n},_applyEffectOpen:function(){return this._effect.show({container:this._mask})},openBlock:function(){var t=this,n=null;if(this._container.data(this._dataName)==="open"){return e.when(true)}this._container.data(this._dataName,"open");this._container.addClass(this.classBeforeAnimation);n=this._applyEffectOpen();n.then(function(){t._container.addClass(t.classOpened);t.trigger("itemOpened",t._container)});return n},setOpenClose:function(){if(this._container.data(this._dataName)==="open"){this.closeBlock()}else{this.openBlock()}},_bindEvents:function(){this._listenTo(this._controlElement,"click",this._onClick);this._listenTo(e("body"),"click",this._onOutsideClick)},_onClick:function(e){e.preventDefault();this.setOpenClose()},_setInitState:function(){if(this._container.hasClass(this.classOpened)){this.openBlock()}else{this.closeBlock()}},_onOutsideClick:function(t){if(!this.bodyClose){return}if(e(t.target).has(this._container).length){this.closeBlock()}}});e.fn.dpOpenClose=function(t){return this.each(function(){var n=e(this);n.data("dpOpenClose",new DP.Plugins.OpenClose(n,t))})};DP.Effects.VerticalDrop=DP.Effects.Core.extend({_defaultSettings:{showSpeed:200,hideSpeed:200},show:function(t){var n=e.Deferred(),i=t.container,s=t.height,o=this.showSpeed;if(!i){return}i.stop().animate({opacity:1,height:s},{duration:o,complete:n.resolve});return n.promise()},hide:function(t){var n=e.Deferred(),i=t.container,s=t.height||0,o=this.hideSpeed;if(!i){return}i.stop().animate({opacity:0,height:s},{duration:o,complete:n.resolve});return n.promise()}});DP.Effects.HeightDrop=DP.Effects.VerticalDrop.extend({show:function(t){var n=t.container,i;n.stop().height("");i=n.height();n.height(0).show();return this._super(e.extend({},t,{height:i})).done(function(){t.container.height("")})},hide:function(e){return this._super(e).done(function(){e.container.hide().height("")})}});DP.Effects.VerticalSize=DP.Effects.Core.extend({_defaultSettings:{showSpeed:200,hideSpeed:200},show:function(t){var n=e.Deferred(),i=t.container,s=t.height,o=this.showSpeed;if(!i){return}i.stop().animate({height:s},{duration:o,complete:n.resolve});return n.promise()},hide:function(t){var n=e.Deferred(),i=t.container,s=t.height||0,o=this.hideSpeed;if(!i){return}i.stop().animate({height:s},{duration:o,complete:n.resolve});return n.promise()}});DP.Plugins.OpenClose.effects.define("drop",DP.Effects.HeightDrop);DP.Plugins.OpenClose.effects.define("default",DP.Effects.HeightDrop);(function(){if(!DP.Effects.VerticalSize){return}var t=DP.Effects.VerticalSize.extend({show:function(t){var n=t.container,i=n.height(),s=0;if(t.showPreview){s=i;n.height("");i=n.height()}n.height(s).show();return this._super(e.extend({},t,{height:i})).done(function(){n.height("auto")})},hide:function(t){var n=t.container,i=t.closedHeight,s=n.outerHeight()-n.height();return this._super(e.extend({},t,{height:i-s})).done(function(){if(!t.showPreview){n.hide().height("auto");return}n.outerHeight(i)})}});DP.Plugins.OpenClose.effects.define("size",t)})();DP.Plugins.OpenClose=DP.Plugins.OpenClose.defineModule("preview",{_defaultSettings:{closedHeightToScreenWidth:[],classInactiveItem:"not-closed-block"},init:function(){this._setClosedHeightFromWidth();this._super();this._toggleHeightClass()},_setClosedHeightFromWidth:function(){this._closedHeight=0;var n=this,i=e(t).width();if(!this.closedHeightToScreenWidth.length){return}e.each(this.closedHeightToScreenWidth,function(e,t){if(t.width.from<=i&&(i<=t.width.to||!t.width.to)){n._closedHeight=t.height?t.height:n._closedHeight;return false}})},_toggleHeightClass:function(){var e=this._container;if(e.outerHeight()<this._closedHeight){e.addClass(this.classInactiveItem);return}e.removeClass(this.classInactiveItem)},_applyEffectClose:function(){return this._effect.hide({container:this._mask,showPreview:!!this._closedHeight,closedHeight:this._closedHeight})},_applyEffectOpen:function(){return this._effect.show({container:this._mask,showPreview:!!this._closedHeight})},_bindEvents:function(){this._super();this._listenTo(e(t),"resize orientationchange",this._onResize)},_onResize:function(){this._updateOpenClose()},_updateOpenClose:function(){var e=this._container,t=this._closedHeight;this._setClosedHeightFromWidth();if(this._closedHeight!==t&&e.data(this._dataName)==="close"){e.removeData(this._dataName);this._toggleHeightClass();this.closeBlock()}}})})(jQuery,window);
//plugin custom checkbox
(function(t,e){e.DP=e.DP||{};e.DP.Class=e.DP.Class||function(){function t(){}t.extend=function s(t,n){var i,r,o=this;n=n||{};if("function"===typeof t._constructor){i=function(){this._super=o;t._constructor.apply(this,arguments);this._super=null}}else{i=function(){o.apply(this,arguments)}}r=new Function;r.prototype=o.prototype;i.prototype=new r;for(var a in t)if(t.hasOwnProperty(a))(function(t,e){if(e==="_constructor"){return}if("function"===typeof t){i.prototype[e]=function(){var s,i;if(this._super){i=this._super}this._super=o.prototype[e];if("function"===typeof n["function"]){s=n["function"].call(this,e,t,o,arguments)}else{s=t.apply(this,arguments)}this._super=i||null;return s};return}if("function"===typeof n.other){i.prototype[e]=n.other.call(this,e,t,o);return}i.prototype[e]=t})(t[a],a);i.prototype.constructor=i;i.prototype._common={_instanceCounter:0};i.extend=s;i.extension=e;return i};function e(t,e,s){var n=this.extend(t,e);if(typeof s==="string"){s=[s]}s=(s||[]).concat("extend","extension");for(var i in this){if(this.hasOwnProperty(i)&&s.indexOf(i)===-1){n[i]=this[i]}}return n}t.extension=e;return t}();e.DP.Core=e.DP.Core||function(){var e=DP.Class.extend({name:"unnamed",_defaultSettings:{},init:function(){this._listeners=[];this.namespace="."+this.name+"-"+this._common._instanceCounter++},destroy:function(){this._unbindEvents()},_bindEvents:function(){},_applySettings:function(e){var s=this;e=t.extend(true,{},this._defaultSettings,e);t.each(this._defaultSettings,function(t){s[t]=e[t]})},_listenTo:function(){var e=t(Array.prototype.shift.apply(arguments)),s=arguments[0].split(" ");this._listeners.push(e);for(var n=0,i=s.length;n<i;n++){s[n]+=this.namespace}arguments[0]=s.join(" ");if("function"===typeof arguments[1]){arguments[1]=t.proxy(arguments[1],this)}else{arguments[2]=t.proxy(arguments[2],this)}t.fn.on.apply(e,arguments)},_unbindEvents:function(){for(var e=0,s=this._listeners.length;e<s;e++){t(this._listeners[e]).off(this.namespace)}}}),s=e.extend;e.extend=function i(e,r){var o;r=r||{};r.other=function(e,s,n){if(e==="_defaultSettings"){return t.extend(true,{},n.prototype[e],s)}return s};o=s.call(this,e,r);o.extend=i;o.defineModule=n;return o};function n(s,n){this.prototype._defaultSettings.modules={};n=n||{};n._constructor=function(e,n){if(n&&n.modules){t.extend(true,n,n.modules[s])}this._super(e,n)};return e.extension.call(this,n,{"function":function(t,e,n,i){if(s in this.modules){return e.apply(this,i)}else{if(this._super){return this._super.apply(this,i)}}}})}return e}();e.DP.Plugins=e.DP.Plugins||{};e.DP.Plugins.Core=e.DP.Plugins.Core||function(){var s=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();t.push(function(){var t=Array.prototype.slice.call(arguments);t.shift();e.apply(null,t)});return t};var n=function(t){return[t[0],Array.prototype.slice.call(t,1)]};var i={on:function(){this.__observer=this.__observer||t({});this.__observer.on.apply(this.__observer,s.apply(null,arguments));return this},once:function(){this.__observer=this.__observer||t({});this.__observer.one.apply(this.__observer,s.apply(null,arguments));return this},off:function(){this.__observer=this.__observer||t({});this.__observer.off.apply(this.__observer,arguments);return this},trigger:function(){this.__observer=this.__observer||t({});this.__observer.trigger.apply(this.__observer,n(arguments));return this}};var r=DP.Core.extend(t.extend({},i,{_publicEvents:[],_constructor:function(e,s){this._container=e;var n=this._container.data(this._settingsData)||{};if(typeof n!=="object"){n={}}this._applySettings(t.extend(true,{},s,n))},init:function(){this._super();var t=this;r.messageBus.on("state:update"+this.namespace,function(e){if(t._container.parents().index(e)!==-1){t._updateState.apply(t,arguments)}})},_updateState:function(t){console.log("OVERRIDE THIS METHOD","PARENT = ",t)},destroy:function(){r.messageBus.off(this.namespace);this._super()},_checkIsMobile:function(){var t;return function(){if(t===undefined){var s="ontouchstart"in e||e.DocumentTouch&&document instanceof DocumentTouch,n=/Windows Phone/.test(navigator.userAgent);t=!!(s||n)}return t}}()}));var o=r.extend;r.extend=function h(){var t=o.apply(this,arguments);t.effects=function(){var t={},e;e=function(e){var s=e.type;if(t[(s||"").toLowerCase()]){return new(t[s.toLowerCase()])(e)}return new t["default"](e)};e.define=function(e,s){t[e]=s};return e}();t.extend=h;return t};r.messageBus=t.extend({},{},i);var a=r.prototype.trigger;r.prototype.trigger=function(e){if(t.inArray(e,this._publicEvents)!==-1){var s=Array.prototype.slice.call(arguments);s.unshift(this._container);s.unshift("state:update");r.messageBus.trigger.apply(r.messageBus,s)}a.apply(this,arguments)};return r}();(function(){var t=function(t){if("keys"in Object&&typeof Object.keys==="function"){return Object.keys(t).length===0}var e=0,s;for(s in t){if(t.hasOwnProperty(s)){++e}}return e===0};e.mixWatcher=function(t,s,n){t.watch=t.watch||e.mixWatcher.watch;t.unwatch=t.unwatch||e.mixWatcher.unwatch;if(!("hasOwnProperty"in t)){this.hasOwnProperty=function(t){return function(e){return Object.hasOwnProperty.call(t,e)}}(t)}if(s&&n){t.watch(s,n)}};e.mixWatcher.watch=function(t,e){var s=this;this.__watcherCache=this.__watcherCache||{};this.__watcherCache[t]=this[t];this.__watcherHandlers=this.__watcherHandlers||{};this.__watcherHandlers[t]=e;this.__watcher=this.__watcher||setInterval(function(){var t=s.__watcherCache,e,n,i;if(s.hasOwnProperty("parentNode")&&s.parentNode==null){s.unwatch();return}for(e in t){if(!t.hasOwnProperty(e)){continue}n=s[e];i=t[e];if(n!==i){s.__watcherHandlers[e].call(this,e,i,n);t[e]=n}}},50)};e.mixWatcher.unwatch=function(e){if(!this.__watcher){return}if(e){this.__watcherCache[e]&&delete this.__watcherCache[e];this.__watcherHandlers[e]&&delete this.__watcherHandlers[e]}if(!e||t(this.__watcherCache)){clearInterval(this.__watcher);delete this.__watcher;delete this.__watcherCache;delete this.__watcherHandlers}}})();DP.Plugins.CustomForms=DP.Plugins.CustomForms||{};DP.Plugins.CustomForms.Core=DP.Plugins.Core.extend({_defaultSettings:{inputPositionZIndex:1,focusedClass:"dp-focus",disabledClass:"dp-disabled",wrapperElement:"span",enableWatcher:false},_settingsData:"custom",_constructor:function(t,e){this._super(t,e);this._input=null},_window:t(e),_document:t(document),init:function(){this._super();this._createWrapper();this._setDisable();this._setFocus();this._bindEvents();this._switchOnWatcher()},updateStatus:function(){this._setDisable();this._setFocus()},_createWrapper:function(){var t;this._input=this._container;t=this._createElement(this.wrapperElement,this.wrapperClass);this._input.wrap(t).css({opacity:0,position:"absolute",height:"100%",width:"100%",margin:"0px",zIndex:this.inputPositionZIndex});this._container=this._input.closest("."+this.wrapperClass);if(this.inputDisableTextSelection){this._disableTextSelection(this._container)}},_removeWrapper:function(){this._container.children().not(this._input).remove();this._input.unwrap().css({opacity:"",position:"",height:"",width:"",zIndex:""})},_createElement:function(e,s){var n=t("<"+e+">");if(s){n.addClass(s)}return n},_createElementWithChild:function(t,e,s){return this._createElement(t,e).append(s)},_createElementWithText:function(t,e,s){return this._createElement(t,e).text(s)},_disableTextSelection:function(t){t.on("selectstart",false);return t.attr("unselectable","on").css("user-select","none")},_onOutsideClick:function(t){if(t.target===this._container.get(0)||this._container.has(t.target).length){return}this._clearFocused()},_setFocused:function(){this._container.addClass(this.focusedClass)},_clearFocused:function(){this._container.removeClass(this.focusedClass)},_setDisable:function(){if(this._input.is(":disabled")){this._container.addClass(this.disabledClass);this.trigger("disabled",this._input);return}this._container.removeClass(this.disabledClass);this.trigger("enabled",this._input)},_setFocus:function(){if(this._input.is(":focus")){this._setFocused();return}this._clearFocused()},destroy:function(){this._super();this._switchOffWatcher();this._removeWrapper();this._container=this._input;this._input=null},_switchOnWatcher:function(){var s;if(!(this.enableWatcher&&e.mixWatcher&&this._watcherOptions)){return}s=this._input.get(0);mixWatcher(HTMLElement.prototype);t.each(this._watcherOptions,function(){s.watch(this.key,this.handler)})},_switchOffWatcher:function(){var t=this._input.get(0);if(t.unwatch&&typeof t.unwatch==="function"){this._input.get(0).unwatch()}}});DP.Plugins.CustomForms.Checkbox=DP.Plugins.CustomForms.Core.extend({_defaultSettings:{inputPositionZIndex:999,checkElement:"span",wrapperClass:"dp-checkbox",checkedClass:"dp-checked",unCheckedClass:"dp-unchecked",labelCheckedClass:"dp-label-active"},name:"custom-forms-checkbox",_constructor:function(e,s){var n,i;this._super(e,s);i=this._container.attr("id");this._label=t();if(i){n='[for="'+i+'"]';this._label=t(n)}this._watcherOptions=[{key:"checked",handler:t.proxy(this._setCheck,this)},{key:"disabled",handler:t.proxy(this._setDisable,this)}];this.init()},init:function(){this._super();this._setCheck()},updateStatus:function(){this._super();this._setCheck()},_createWrapper:function(){this._super();this._container.prepend(this._createElement(this.checkElement))},_bindEvents:function(){this._super();this._listenTo(this._container,"click",this._onContainerClick);this._listenTo(this._document,"click",this._onOutsideClick)},_onContainerClick:function(t){if(this._container.hasClass(this.disabledClass)){return}if(!this._input.is(t.target)){this._input.prop("checked",!this._input.prop("checked"))}this._setFocused();this._setCheck()},_setCheck:function(){if(this._input.is(":checked")){this._container.addClass(this.checkedClass).removeClass(this.unCheckedClass);this._label.addClass(this.labelCheckedClass);this.trigger("selected",this._input);return}this._container.addClass(this.unCheckedClass).removeClass(this.checkedClass);this._label.removeClass(this.labelCheckedClass);this.trigger("deselected",this._input)}});t.fn.dpCustomCheckbox=function(e){return this.each(function(){var s=t(this);s.data("dpCustomCheckbox",new DP.Plugins.CustomForms.Checkbox(s,e))})};DP.Plugins.CustomForms.Checkbox.matcher=function(e){if(t(e).is('[type="checkbox"]')){return{options:"checkbox",namespace:"dpCustomCheckbox"}}return false};DP.Plugins.CustomForms.modules&&DP.Plugins.CustomForms.modules.define(DP.Plugins.CustomForms.Checkbox,DP.Plugins.CustomForms.Checkbox.matcher)})(jQuery,window);
//plugin background stretch
(function(t,e){e.DP=e.DP||{};e.DP.Class=e.DP.Class||function(){function t(){}t.extend=function n(t,i){var r,s,o=this;i=i||{};if("function"===typeof t._constructor){r=function(){this._super=o;t._constructor.apply(this,arguments);this._super=null}}else{r=function(){o.apply(this,arguments)}}s=new Function;s.prototype=o.prototype;r.prototype=new s;for(var u in t)if(t.hasOwnProperty(u))(function(t,e){if(e==="_constructor"){return}if("function"===typeof t){r.prototype[e]=function(){var n,r;if(this._super){r=this._super}this._super=o.prototype[e];if("function"===typeof i["function"]){n=i["function"].call(this,e,t,o,arguments)}else{n=t.apply(this,arguments)}this._super=r||null;return n};return}if("function"===typeof i.other){r.prototype[e]=i.other.call(this,e,t,o);return}r.prototype[e]=t})(t[u],u);r.prototype.constructor=r;r.prototype._common={_instanceCounter:0};r.extend=n;r.extension=e;return r};function e(t,e,n){var i=this.extend(t,e);if(typeof n==="string"){n=[n]}n=(n||[]).concat("extend","extension");for(var r in this){if(this.hasOwnProperty(r)&&n.indexOf(r)===-1){i[r]=this[r]}}return i}t.extension=e;return t}();e.DP.Core=e.DP.Core||function(){var e=DP.Class.extend({name:"unnamed",_defaultSettings:{},init:function(){this._listeners=[];this.namespace="."+this.name+"-"+this._common._instanceCounter++},destroy:function(){this._unbindEvents()},_bindEvents:function(){},_applySettings:function(e){var n=this;e=t.extend(true,{},this._defaultSettings,e);t.each(this._defaultSettings,function(t){n[t]=e[t]})},_listenTo:function(){var e=t(Array.prototype.shift.apply(arguments)),n=arguments[0].split(" ");this._listeners.push(e);for(var i=0,r=n.length;i<r;i++){n[i]+=this.namespace}arguments[0]=n.join(" ");if("function"===typeof arguments[1]){arguments[1]=t.proxy(arguments[1],this)}else{arguments[2]=t.proxy(arguments[2],this)}t.fn.on.apply(e,arguments)},_unbindEvents:function(){for(var e=0,n=this._listeners.length;e<n;e++){t(this._listeners[e]).off(this.namespace)}}}),n=e.extend;e.extend=function r(e,s){var o;s=s||{};s.other=function(e,n,i){if(e==="_defaultSettings"){return t.extend(true,{},i.prototype[e],n)}return n};o=n.call(this,e,s);o.extend=r;o.defineModule=i;return o};function i(n,i){this.prototype._defaultSettings.modules={};i=i||{};i._constructor=function(e,i){if(i&&i.modules){t.extend(true,i,i.modules[n])}this._super(e,i)};return e.extension.call(this,i,{"function":function(t,e,i,r){if(n in this.modules){return e.apply(this,r)}else{if(this._super){return this._super.apply(this,r)}}}})}return e}();e.DP.Plugins=e.DP.Plugins||{};e.DP.Plugins.Core=e.DP.Plugins.Core||function(){var n=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();t.push(function(){var t=Array.prototype.slice.call(arguments);t.shift();e.apply(null,t)});return t};var i=function(t){return[t[0],Array.prototype.slice.call(t,1)]};var r={on:function(){this.__observer=this.__observer||t({});this.__observer.on.apply(this.__observer,n.apply(null,arguments));return this},once:function(){this.__observer=this.__observer||t({});this.__observer.one.apply(this.__observer,n.apply(null,arguments));return this},off:function(){this.__observer=this.__observer||t({});this.__observer.off.apply(this.__observer,arguments);return this},trigger:function(){this.__observer=this.__observer||t({});this.__observer.trigger.apply(this.__observer,i(arguments));return this}};var s=DP.Core.extend(t.extend({},r,{_publicEvents:[],_constructor:function(e,n){this._container=e;var i=this._container.data(this._settingsData)||{};if(typeof i!=="object"){i={}}this._applySettings(t.extend(true,{},n,i))},init:function(){this._super();var t=this;s.messageBus.on("state:update"+this.namespace,function(e){if(t._container.parents().index(e)!==-1){t._updateState.apply(t,arguments)}})},_updateState:function(t){console.log("OVERRIDE THIS METHOD","PARENT = ",t)},destroy:function(){s.messageBus.off(this.namespace);this._super()},_checkIsMobile:function(){var t;return function(){if(t===undefined){var n="ontouchstart"in e||e.DocumentTouch&&document instanceof DocumentTouch,i=/Windows Phone/.test(navigator.userAgent);t=!!(n||i)}return t}}()}));var o=s.extend;s.extend=function a(){var t=o.apply(this,arguments);t.effects=function(){var t={},e;e=function(e){var n=e.type;if(t[(n||"").toLowerCase()]){return new(t[n.toLowerCase()])(e)}return new t["default"](e)};e.define=function(e,n){t[e]=n};return e}();t.extend=a;return t};s.messageBus=t.extend({},{},r);var u=s.prototype.trigger;s.prototype.trigger=function(e){if(t.inArray(e,this._publicEvents)!==-1){var n=Array.prototype.slice.call(arguments);n.unshift(this._container);n.unshift("state:update");s.messageBus.trigger.apply(s.messageBus,n)}u.apply(this,arguments)};return s}();DP.Plugins.BackgroundStretch=DP.Plugins.Core.extend({_defaultSettings:{forceUsingIMG:false,backgroundSize:"cover"},name:"background-stretch",_constructor:function(t,e){this._super(t,e);this._imgToStretch=this._container.find("img");this.init()},init:function(){this._super();if(this.forceUsingIMG||!this._supportBackgroundSize()){this._loadImage(this._imgToStretch);this._bindEvents()}else{this._addBackgroundSize()}},_supportBackgroundSize:function(){var t;return function(){if(typeof t!=="undefined"){return t}t="backgroundSize"in document.documentElement.style;return t}}(),_addBackgroundSize:function(){var t=this._imgToStretch.attr("src");this._imgToStretch.css({display:"none"});this._container.css({backgroundImage:"url("+t+")",backgroundSize:this.backgroundSize})},_bindEvents:function(){this._listenTo(t(e),"resize orientationchange",this._onResize)},_stretchImage:function(){this._imgToStretch.css(this._getDimensions())},_loadImage:function(t){if(t.prop("complete")){this._stretchImage()}else{this._listenTo(t,"load",this._onImageLoaded)}},_getDimensions:function(){var t=this._container,e=this._imgToStretch,n=t.width(),i=t.height(),r=this._getRatio(e),s={};s.width=n;s.height=n/r;s.marginTop=-(s.height-i)/2;if(i>s.height){s.height=i;s.width=i*r}s.marginTop=-(s.height-i)/2;s.marginLeft=-(s.width-n)/2;return s},_getRatio:function(){var t={};return function(e){var n;if(!t.hasOwnProperty(e.src)){n=this._getNatural(e);t[e.src]=n.width/n.height}return t[e.src]}}(),_getNatural:function(t){var e=t.prop("naturalWidth"),n=t.prop("naturalHeight"),i;if(!e||!n){i=new Image;i.src=t.get(0).src;e=e||i.width;n=n||i.height}return{width:e,height:n}},_onResize:function(){this._stretchImage()},_onImageLoaded:function(){this._stretchImage()}});t.fn.dpBackgroundStretch=function(e){return this.each(function(){var n=t(this);n.data("dpBackgroundStretch",new DP.Plugins.BackgroundStretch(n,e))})}})(jQuery,window);
//plugin same height
(function(t,e){e.DP=e.DP||{};e.DP.Class=e.DP.Class||function(){function t(){}t.extend=function n(t,i){var s,r,o=this;i=i||{};if("function"===typeof t._constructor){s=function(){this._super=o;t._constructor.apply(this,arguments);this._super=null}}else{s=function(){o.apply(this,arguments)}}r=new Function;r.prototype=o.prototype;s.prototype=new r;for(var u in t)if(t.hasOwnProperty(u))(function(t,e){if(e==="_constructor"){return}if("function"===typeof t){s.prototype[e]=function(){var n,s;if(this._super){s=this._super}this._super=o.prototype[e];if("function"===typeof i["function"]){n=i["function"].call(this,e,t,o,arguments)}else{n=t.apply(this,arguments)}this._super=s||null;return n};return}if("function"===typeof i.other){s.prototype[e]=i.other.call(this,e,t,o);return}s.prototype[e]=t})(t[u],u);s.prototype.constructor=s;s.prototype._common={_instanceCounter:0};s.extend=n;s.extension=e;return s};function e(t,e,n){var i=this.extend(t,e);if(typeof n==="string"){n=[n]}n=(n||[]).concat("extend","extension");for(var s in this){if(this.hasOwnProperty(s)&&n.indexOf(s)===-1){i[s]=this[s]}}return i}t.extension=e;return t}();e.DP.Core=e.DP.Core||function(){var e=DP.Class.extend({name:"unnamed",_defaultSettings:{},init:function(){this._listeners=[];this.namespace="."+this.name+"-"+this._common._instanceCounter++},destroy:function(){this._unbindEvents()},_bindEvents:function(){},_applySettings:function(e){var n=this;e=t.extend(true,{},this._defaultSettings,e);t.each(this._defaultSettings,function(t){n[t]=e[t]})},_listenTo:function(){var e=t(Array.prototype.shift.apply(arguments)),n=arguments[0].split(" ");this._listeners.push(e);for(var i=0,s=n.length;i<s;i++){n[i]+=this.namespace}arguments[0]=n.join(" ");if("function"===typeof arguments[1]){arguments[1]=t.proxy(arguments[1],this)}else{arguments[2]=t.proxy(arguments[2],this)}t.fn.on.apply(e,arguments)},_unbindEvents:function(){for(var e=0,n=this._listeners.length;e<n;e++){t(this._listeners[e]).off(this.namespace)}}}),n=e.extend;e.extend=function s(e,r){var o;r=r||{};r.other=function(e,n,i){if(e==="_defaultSettings"){return t.extend(true,{},i.prototype[e],n)}return n};o=n.call(this,e,r);o.extend=s;o.defineModule=i;return o};function i(n,i){this.prototype._defaultSettings.modules={};i=i||{};i._constructor=function(e,i){if(i&&i.modules){t.extend(true,i,i.modules[n])}this._super(e,i)};return e.extension.call(this,i,{"function":function(t,e,i,s){if(n in this.modules){return e.apply(this,s)}else{if(this._super){return this._super.apply(this,s)}}}})}return e}();e.DP.Plugins=e.DP.Plugins||{};e.DP.Plugins.Core=e.DP.Plugins.Core||function(){var n=function(){var t=Array.prototype.slice.call(arguments),e=t.pop();t.push(function(){var t=Array.prototype.slice.call(arguments);t.shift();e.apply(null,t)});return t};var i=function(t){return[t[0],Array.prototype.slice.call(t,1)]};var s={on:function(){this.__observer=this.__observer||t({});this.__observer.on.apply(this.__observer,n.apply(null,arguments));return this},once:function(){this.__observer=this.__observer||t({});this.__observer.one.apply(this.__observer,n.apply(null,arguments));return this},off:function(){this.__observer=this.__observer||t({});this.__observer.off.apply(this.__observer,arguments);return this},trigger:function(){this.__observer=this.__observer||t({});this.__observer.trigger.apply(this.__observer,i(arguments));return this}};var r=DP.Core.extend(t.extend({},s,{_publicEvents:[],_constructor:function(e,n){this._container=e;var i=this._container.data(this._settingsData)||{};if(typeof i!=="object"){i={}}this._applySettings(t.extend(true,{},n,i))},init:function(){this._super();var t=this;r.messageBus.on("state:update"+this.namespace,function(e){if(t._container.parents().index(e)!==-1){t._updateState.apply(t,arguments)}})},_updateState:function(t){console.log("OVERRIDE THIS METHOD","PARENT = ",t)},destroy:function(){r.messageBus.off(this.namespace);this._super()},_checkIsMobile:function(){var t;return function(){if(t===undefined){var n="ontouchstart"in e||e.DocumentTouch&&document instanceof DocumentTouch,i=/Windows Phone/.test(navigator.userAgent);t=!!(n||i)}return t}}()}));var o=r.extend;r.extend=function a(){var t=o.apply(this,arguments);t.effects=function(){var t={},e;e=function(e){var n=e.type;if(t[(n||"").toLowerCase()]){return new(t[n.toLowerCase()])(e)}return new t["default"](e)};e.define=function(e,n){t[e]=n};return e}();t.extend=a;return t};r.messageBus=t.extend({},{},s);var u=r.prototype.trigger;r.prototype.trigger=function(e){if(t.inArray(e,this._publicEvents)!==-1){var n=Array.prototype.slice.call(arguments);n.unshift(this._container);n.unshift("state:update");r.messageBus.trigger.apply(r.messageBus,n)}u.apply(this,arguments)};return r}();DP.Plugins.SameHeight=DP.Plugins.Core.extend({_defaultSettings:{alignBlocksSelector:".block",byRows:false,calculationsClassPrefix:"same-height"},_heightCalculators:{"-half":function(t){return Math.round(t/2)},"-one-third":function(t){return Math.round(t/3)},"-double":function(t){return t*2}},name:"same-height",_constructor:function(t,e){this._super(t,e);this.init()},init:function(){this._blocks=this._container.find(this.alignBlocksSelector);if(this._blocks.length<2){return}this._super(this);this.setBlocksHeight();this._bindEvents()},destroy:function(){this._super();this.resetHeight();this._blocks=null},_bindEvents:function(){this._listenTo(t(e),"resize orientationchange load",this._onResize);this._blocks.find("img").one("load",t.proxy(this._onResize,this))},_getMaxHeight:function(e){var n=t.map(e,function(e){return t(e).outerHeight()});n.push(0);return Math.max.apply(Math,n)},setBlocksHeight:function(){var e=this,n=t(),i=this._blocks.eq(0).offset().top;if(!this.byRows){this._setBlocksHeightConsideringSuffix(this._blocks);return}this._blocks.each(function(){var s=t(this);if(s.offset().top===i){n=n.add(s);return}e._setBlocksHeightConsideringSuffix(n);n=s;i=s.offset().top});if(n.length){this._setBlocksHeightConsideringSuffix(n)}this.trigger("setHeight",this._blocks)},_setBlocksHeightConsideringSuffix:function(t){var e=this._heightCalculators,n=this._getMaxHeight(t),i,s,r;t.outerHeight(n);for(s in e){if(!e.hasOwnProperty(s)){continue}r="."+this.calculationsClassPrefix+s;i=t.filter(r);if(!i.length){continue}i.outerHeight(e[s](n))}},resetHeight:function(){this._blocks.height("")},_onResize:function(){this.resetHeight();this.setBlocksHeight()}});t.fn.dpSameHeight=function(e){return this.each(function(){var n=t(this);n.data("dpSameHeight",new DP.Plugins.SameHeight(n,e))})}})(jQuery,window);

