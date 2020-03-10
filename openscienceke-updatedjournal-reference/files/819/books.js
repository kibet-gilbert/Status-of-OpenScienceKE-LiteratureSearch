/*! render-assets-books 2018-11-26 */

function bkInlineAudio(){var e=jQuery("a.bk_listen");0!=e.length&&e.click(function(e){var t=jQuery("#"+jQuery(this).attr("data-player-rid"));return 1==t.length?(e.preventDefault(),t.ncbimedia("play"),!1):void 0})}function bkContents(){var r=jQuery(".bk_cntns"),o=jQuery("#bk_toc_contnr");if(0!=r.length){var n=function(n){if(0<jQuery("#source-contents").length)return r.bind("ncbipopperopencomplete",function(){bkPopperScroll(o)}),n(),o;var e=r.first().attr("href"),t=e+(e.match(/\?/)?"&":"?")+"report=toc",i=jQuery("meta[name=bk-non-canon-loc]").attr("content");jQuery.ajax({url:t,success:function(e){var t=jQuery(e).find(".toc-page-link,#source-contents"),r=t.find('a[href = "'+i+'"]');r.attr("id","bk_current_entry"),"book-part"==jQuery("meta[name=ncbi_pdid]").attr("content")&&r.attr("href","#top"),o.append(t),n(o),jQuery("body").bkInitToc(),o.trigger("tocloaded")}})};r.each(function(e){var t=0==e?"bottom left":"bottom right",r=0==e?"none":"autoAdjust";jQuery(this).ncbipopper({triggerPosition:t,destPosition:"top left",adjustFit:r,destText:n,openEvent:"click",openAnimation:"fadeIn",closeEvent:"click",closeAnimation:"fadeOut",isDestTextCacheable:!1})}),o.on("tocloaded",function(){bkPopperScroll(jQuery(this))})}}function bkPopperScroll(e){var t=jQuery("#bk_current_entry");0<t.length&&e.scrollTo(t,{offset:-200,duration:400})}function bkSearch(){jQuery("form#bk_srch").submit(function(e){var t=jQuery("#bk_term").attr("value");if(0==t.replace(/^\s+/,"").length)return!1;e.preventDefault();var r=jQuery(this).attr("data-bk-extr-lmt");t=null!=r?t+" AND "+r:t;var n=jQuery(this).attr("action")+"?term="+encodeURIComponent(t).replace(/%20/g,"+");location.href=n})}function bkEpubLink(){var e=jQuery(".bk_epub_link");if(e){var t=jQuery('<div title="Making content easier to read in Bookshelf"      id="epubDialog"      style="display: none">  <p>We are experimenting with display styles that make it easier to read books and documents     in Bookshelf.     Our first effort uses ebook readers, which have several "ease of reading"     features already built in.</p>  <p>The content is best viewed in the <em>iBooks     reader</em>. You may notice problems with the display of some features of books or documents    in other eReaders.</p>  <button id="cancelEpub">Cancel</button>  <button id="downloadEpub" style="float: left">Download</button>        </div>').ncbidialog({autoOpen:!1,modal:!0,width:"500px"});e.on("click",function(e){e.preventDefault(),t.ncbidialog("open"),t.height(t.height()+5)}),jQuery("#cancelEpub").click(function(){t.ncbidialog("close")}),jQuery("#downloadEpub").click(function(){t.ncbidialog("close"),window.location.href=e.prop("href")})}}function bkTglCit(){var e=jQuery("._bk_pgbnr_cit");if(e&&!(e.height()<126)){var t=jQuery("._bk_pgbnr_cit_ln"),r=0;t.each(function(e){r+=jQuery(this).height(),0!=e&&90<r&&jQuery(this).addClass("_bk_pgbnr_cit_ln_hdn")});var n=jQuery("._bk_pgbnr_cit_ln_hdn");n&&(n.hide(),e.after('<a href="#" class="small" id="_bk_cit_tgl">Show details</a>'),jQuery("#_bk_cit_tgl").click(function(){return n.is(":hidden")?(n.show(),jQuery(this).text("Hide details")):(n.hide(),jQuery(this).text("Show details")),!1}))}}function bkCitAvailLnk(){var e=jQuery(location);jQuery(".bk_cite_avail").text(" Available from: "+e.attr("href").replace(e.attr("hash"),""))}function bkTglGlossLnks(){var e=jQuery("a.toggle-glossary-link");e&&(checkGlossLinks("init"),e.click(function(){return checkGlossLinks(),!1}),jQuery("body").on("click","a.def",function(e){if(e.preventDefault(),jQuery(this).hasClass("def_inactive"))return!1;var t=jQuery(this).attr("href");return startTarget(t,"item",800,250)}))}function toggleglossarylinks_(e){var t=jQuery(".toggle-glossary-link"),r=jQuery(".def");"disabled"==e?(t.text("Enable Glossary Links"),r.addClass("def_inactive"),r.attr("style","color:#000000;cursor:default;border:0;text-decoration:none;")):(t.text("Disable Glossary Links"),r.removeClass("def_inactive"),r.removeAttr("style")),jQuery("body").trigger("glossarylinks")}function checkGlossLinks(e){var t="GlossaryLinks",r=pmcReadCookie(t),n="disabled";"init"==e?toggleglossarylinks_(r):r==n?(pmcEraseCookie(t),toggleglossarylinks_()):(pmcCreateCookie(t,n,7),toggleglossarylinks_(n))}function pmcCreateCookie(e,t,r){if(r){var n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);var i="; expires="+n.toGMTString()}else i="";document.cookie=e+"="+t+i+"; path=/"}function pmcReadCookie(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var i=r[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null}function pmcEraseCookie(e){pmcCreateCookie(e,"",-1)}jQuery(document).ready(function(){bkInlineAudio(),bkContents(),bkSearch(),bkEpubLink(),bkTglCit(),bkCitAvailLnk(),bkTglGlossLnks()}),BookPopLinks=function(s){var e,l,c={},u=function(r){var n=jQuery(this).attr("data-bk-pop-href");if(n){var e=jQuery(this).attr("data-bk-pop-others"),i=e?n+"_"+e.replace(/\s/g,"_"):n;if(c[i])return r(),c[i];var o=jQuery('<div id="__'+i+'__" class="content"></div>');jQuery("body").append(o),jQuery(".main-content").hasClass("lit-style")&&o.addClass("lit-style");var a='div[id= "'+n.replace(/^[^#]*#(.+)$/,"$1")+'"]';if(n.match(/^#/)){var s=jQuery(this),t=jQuery("body").find(a).clone();return t=d(t,s,n,1),o.append(t),e&&jQuery.each(e.split(" "),function(e,t){var r='div[id= "'+t+'"]',n=jQuery("body").find(r).clone();n=d(n,s,"#"+t,0),o.append(n)}),r(),c[i]=o}var l=jQuery(this).attr("data-bk-pop-rid")+(n.match(/\?/)?"&":"?")+"report=bare";jQuery.ajax({url:l,success:function(e){var t=jQuery(e).find(a);t=d(t,jQuery(this),n,1),o.append(t),c[i]=o,r(o)}})}};function d(e,t,r,n){if(e.removeAttr("id"),0==n&&e.addClass("half_rhythm"),e.hasClass("bk_ref")){var i=' [<a target="mainwindow" href="'+r+'">Reference list</a>]';e.append(i)}return e.find("a").each(function(){var e=jQuery(this);if(e.addClass("bk-pop-lnk"),e.hasClass("bk_pop")){var t=e.attr("data-bk-pop-href");e.attr("href",t)}}),jQuery("body").on("click",".bk-pop-lnk",function(){t.ncbipopper("close")}),e}return jQuery(document).ready(function(){if(void 0===e&&(e=jQuery("a.bk_pop"),l=e.get()),0!=e.length){var i=l.length,o=100,a=0;!function e(){for(var t=Math.min(a+o,i),r=a;r<t;++r){$this=s(l[r]);var n=$this.attr("href");$this.attr("href","#"),$this.attr("data-bk-pop-href",n),$this.ncbipopper({destText:u,openEvent:"click",closeEvent:"click",hasArrow:!0,arrowDirection:"top",width:"600px",triggerPosition:"bottom left",destPosition:"top left",adjustFit:"autoAdjust",isTriggerElementCloseClick:!1,isDestTextCacheable:!1})}(a+=o)<i&&window.setTimeout(e,1)}()}}),{getPopper:u,popperTexts:c}}(jQuery);