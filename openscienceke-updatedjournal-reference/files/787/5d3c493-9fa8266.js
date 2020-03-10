/*
 headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 License: MIT
*/
!function(c,b){function a(h){this.callback=h;this.ticking=!1}function d(h){if(0>=arguments.length)throw Error("Missing arguments in extend function");var a,e,b=h||{};for(e=1;e<arguments.length;e++){var f=arguments[e]||{};for(a in f){var k=a,g;(g="object"!=typeof b[a])||(g=(g=b[a])&&"undefined"!=typeof c&&(g===c||g.nodeType));b[k]=g?b[a]||f[a]:d(b[a],f[a])}}return b}function e(h,b){b=d(b,e.options);this.lastKnownScrollY=0;this.elem=h;this.debouncer=new a(this.update.bind(this));var f=b.tolerance;this.tolerance=
f===Object(f)?f:{down:f,up:f};this.classes=b.classes;this.offset=b.offset;this.scroller=b.scroller;this.initialised=!1;this.onPin=b.onPin;this.onUnpin=b.onUnpin;this.onTop=b.onTop;this.onNotTop=b.onNotTop}var f={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame)};c.requestAnimationFrame=c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame;a.prototype={constructor:a,
update:function(){this.callback&&this.callback();this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}};e.prototype={constructor:e,init:function(){return e.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1;this.elem.classList.remove(a.unpinned,
a.pinned,a.top,a.initial);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,
b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:
void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return c.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,d=b.documentElement;return Math.max(a.scrollHeight,d.scrollHeight,a.offsetHeight,d.offsetHeight,a.clientHeight,d.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===
c||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a;a=a+this.getViewportHeight()>this.getScrollerHeight();return b||a},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var d=a>=this.offset;return a>this.lastKnownScrollY&&d&&b},shouldPin:function(a,b){var d=a<=this.offset;return a<this.lastKnownScrollY&&b||d},update:function(){var a=this.getScrollY(),b=this.toleranceExceeded(a,
a>this.lastKnownScrollY?"down":"up");this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,b)?this.unpin():this.shouldPin(a,b)&&this.pin(),this.lastKnownScrollY=a)}};e.options={tolerance:{up:0,down:0},offset:0,scroller:c,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}};e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList;c.Headroom=e}(window,document);
(function(c){c.fn.superStack=function(){this.filter("sub").each(function(){var b=c(this),a=b.next("sup");if(a.length){a.css({position:"relative",left:-b.width()});var d=c("<span/>").css({display:"inline-block","white-space":"nowrap",width:Math.max(b.width(),a.width())});b.add(a).wrapAll(d)}});return this}})(jQuery);
PeerJ.Article.Async=new function(){this.init=function(){$("[data-source]").each(c)};var c=function(){var b=$(this),a=b.data("source"),d=b.data("clone");$.ajax({url:a,dataType:"html",cache:!1,success:function(a){b.html(a).trigger("load.async");d&&$(d).html(a)}})}};$(PeerJ.Article.Async.init);
PeerJ.Article.Conditional=new function(){this.init=function(){$(document).on("click","[data-show-when]",function(){var b=$(this);window.requestAnimationFrame(function(){c(b,!0)})});$("[data-show-when]").each(function(){c($(this),!1)})};var c=function(b,a){var d=b.hasClass("radio")?b.find("input:checked").val():b.find("input").val(),e=b.attr("data-show-when").split(/\s*\|\s*/),d=-1!==$.inArray(d,e),e=b.closest(".show-when-container");e.length||(e=b.parent());var f=b.attr("data-show-target"),e=e.find(f);
e.toggle(d);d&&(e.hasClass("expanding")&&e.expanding(),a&&e.focus())}};$(PeerJ.Article.Conditional.init);$(".download-all").on("click",function(){$(this).next(".download-notice").fadeIn("fast")}).after('<span class="download-notice hide"><i class="icon-exclamation-sign" style="color:orange"></i> <span>The ZIP download will start after a short delay\u2026</span></span>');
$(function(){var c=$(".navbar-fixed-top").outerHeight();$(window).on("load hashchange",function(){if(location.hash){var b=$(location.hash);b.length&&$(document).scrollTop(b.offset().top-c)}}).trigger("hashchange")});
PeerJ.Article.MarkdownPreview=new function(){var c;this.init=function(){var d=$("[data-markdown-preview-target]");d.length&&(c=new Remarkable({html:!1}),window.setTimeout(function(){d.on("keyup",b).each(a).trigger("keyup")},1E3))};var b=function(){var a=$(this),b=a.data("markdown-preview-target"),a=$.trim(a.val());a.length?(0<=a.indexOf("[RESUBMISSION CHANGES]")&&(a=a.split("[RESUBMISSION CHANGES]")[0]),a=c.render(a),b.html(a)):b.empty()},a=function(){var a=$(this),b=a.data("markdown-preview-target"),
f=$(b);if(!f.length){var c=$(".message-preview-frame");c.length&&(f=c.contents().find(b))}a.data("markdown-preview-target",f).trigger("keyup")}};$(PeerJ.Article.MarkdownPreview.init);
PeerJ.Article.Markup=new function(){var c=[[/\[sup\](.*?)\[sup\]/g,"<sup>$1</sup>"],[/\[sub\](.*?)\[sub\]/g,"<sub>$1</sub>"],[/\[i\](.*?)\[i\]/g,"<i>$1</i>"],[/\[b\](.*?)\[b\]/g,"<b>$1</b>"],[/\[p\](.*?)\[p\]/g,"<p>$1</p>"],[/\[url\](https?:\/\/.*?)\[url\]/g,'<a href="$1">$1</a>']],b=RegExp("\\[(sub|sup|i|b|p|url)\\]","g");this.convertToHTML=function(a){a=a.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");$.each(c,function(){a=a.replace(this[0],
this[1])});a=a.replace(/\n/g,"<br>");return a=a.replace(/&nbsp;/g," ")};this.removeMarkupFromText=function(a){return a.replace(b,"")}};PeerJ.Article.Modal=new function(){this.init=function(){$("[target][data-toggle=modal]").on("click",c);$(".modal").on("hidden",function(){$(this).find("input[type=reset]").click()}).on("shown",function(){try{$(this).find("input[type=text]").first().focus()}catch(b){}})};var c=function(){var b=$(this),a=b.attr("target");$(a).attr("src",b.attr("href"))}};$(PeerJ.Article.Modal.init);
PeerJ.Article.Preview=new function(){this.init=function(){window.setTimeout(function(){$("[data-preview-target]").each(d).on("keyup change blur",b);$(".message-preview-frame").each(c);$("#note-to-reviewers-radio").on("change",e).change()},1E3);$('a[data-toggle="tab"]').on("shown.bs.tab",function(){$(".expanding").expanding();$(".message-preview-frame").each(c)})};var c=function(){var a=$(this),b=a.contents().find("body");b.length&&(a.css("height",1),b=b.outerHeight(!0),b=Math.max(b,500),a.css("height",
b))},b=function(){var a=$(this),b=a.data("preview-target"),d=$.trim(a.val());if(d.length){if(a=a.data("preview-append"))d.slice(a,-1),d+=a;d=PeerJ.Article.Markup.convertToHTML(d);b.html(d)}else b.empty()},a=function(a){var b=$(a);if(!b.length){var d=$(".message-preview-frame");d.length&&(b=d.contents().find(a))}return b},d=function(){var b=$(this),d=a(b.data("preview-target"));b.data("preview-target",d).trigger("keyup")},e=function(b){b=$(this).find("input:checked");a($(this).data("toggle-box-target")).toggle("0"!==
b.val())}};$(PeerJ.Article.Preview.init);PeerJ.Article.Recommendations=new function(){var c={accept:"Accept",major:"Major Revisions",minor:"Minor Revisions",reject:"Reject"};this.init=function(){$(".article-recommendation-input input:radio").each(b)};var b=function(){var a=$(this),b=a.val(),b=$("<span/>").addClass("label").addClass("article-recommendation article-recommendation-"+b).text(c[b]);a.next("label").prepend(b)}};$(PeerJ.Article.Recommendations.init);
PeerJ.Article.Toggle=new function(){this.init=function(){$("[data-action=toggle]").each(c)};var c=function(){var a=$(this),d=a.data("target");if($(d).length)a.on("click",b);else a.hide()},b=function(a){a.preventDefault();a=$(this);var b=a.data("target"),b=$(b).toggle();a.toggleClass("active",b.is(":visible"))}};$(PeerJ.Article.Toggle.init);
PeerJ.User.SubjectsModalMethods=new function(){this.setupRowSelectEvents=function(){$(".subject-list-row").on("click",function(a){$(a.target).parent().hasClass("subject-list-row")&&(a=$(this).find("[type=checkbox]"),a.prop("checked",!a.prop("checked")).change())})};this.setupPrimarySubjectEvents=function(a){PeerJ.User.SubjectsModalMethods.setupPrimaryIconActions(a);c(a)};this.setupPrimaryIconActions=function(a){var b=a.val();b&&$("#primary_subject_icon_"+b).addClass("subject-primary-selected");$(".subject-primary").on("click",
function(){var b=$(this),d=b.closest(".subject-list-row").find("[type=checkbox]");if(b.hasClass("subject-primary-selected"))a.val(null),b.removeClass("subject-primary-selected");else{a.val();var c=b.data("id");a.val(c);$(".subject-primary").removeClass("subject-primary-selected");b.addClass("subject-primary-selected");d.prop("checked",!0)}a.trigger("change")});$("[type=checkbox]").change(function(){var b=$(this);b.is(":checked")||(b=b.closest(".subject-list-row").find(".subject-primary"),b.hasClass("subject-primary-selected")&&
(b.removeClass("subject-primary-selected"),a.val(null).trigger("change")))})};var c=function(a){var d=a.val();b(d);a.change(function(){var d=a.val();b(d)})},b=function(a){var b=$("#no-primary-selected"),c=$("#sidebar-primary-selection"),f=c.closest("form");a?(a=f.find('label[for="peerj_subjects_categories_'+a+'"]').text(),b.hide(),c.text(a).show()):(b.show(),c.hide())};this.setupSubjectTableSearch=function(){$("#subject-table-search").on("keyup",function(){var a=$(this).val(),b=$(".subject-list-row"),
c=new RegExp(a,"i"),a=b.find(".subject-item-name").filter(function(){return $(this).text().match(c)}).closest("tr");b.hide();a.each(function(){$(this).show()})})};this.setupSidebarFilterEvents=function(){var a=$(".subjects-sidebar-filter p");a.on("click",function(){var b=$(this).data("id"),c=$(this).data("is-subject");a.removeClass("active");$(this).addClass("active");c?$(".subject-list-row").each(function(){var a=$(this),c=a.find(".subject-item-type").filter(function(){return $.trim(this.textContent)==
b});a.toggle(!!c.length)}):"new"==b?$(".subject-list-row").each(function(){var a=$(this),c=a.find(".subject-item-new").filter(function(){return $.trim(this.textContent)==b});a.toggle(!!c.length)}):"all"==b?$(".subject-list-row").show():$(".subject-list-row").each(function(){var a=$(this);a.find("[type=checkbox]").is(":checked")?a.show():a.hide()})})}};
