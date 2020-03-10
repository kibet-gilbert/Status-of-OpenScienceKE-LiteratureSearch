(function(n){Drupal.behaviors.whatsNewIn={attach:function(t,e){n('#mini-panel-whats_new_in .wni-dropdown',t).each(function(){n(this).addClass('js-processed');var e=n(this).children('.pane-title').first(),t=n('<button />').addClass('pane-title wni-button button-alt');t.text(e.text());e.replaceWith(t);n(this).children('.pane-content').hide()});n('.wni-button',t).click(function(){n(this).parent().siblings('.wni-dropdown').each(function(){n(this).children('.pane-title').removeClass('open');n(this).children('.pane-content').hide()});n(this).siblings('.pane-content').toggle();n(this).toggleClass('open')});window.onclick=function(t){if(!t.target.matches('.wni-button')){n('.wni-button').removeClass('open').siblings('.pane-content').hide()}}}}})(jQuery);(function(e){'use strict';var o;Drupal.behaviors.eu_cookie_compliance_popup={attach:function(o,i){e('body',o).once('eu-cookie-compliance',function(){if(Drupal.settings.eu_cookie_compliance.popup_eu_only_js){if(Drupal.eu_cookie_compliance.showBanner()){var i=Drupal.settings.basePath+Drupal.settings.pathPrefix+'eu-cookie-compliance-check',o={};e.getJSON(i,o,function(e){if(e.in_eu){Drupal.eu_cookie_compliance.execute()}
else{Drupal.eu_cookie_compliance.setStatus(2)}})}}
else{Drupal.eu_cookie_compliance.execute()}})}};Drupal.eu_cookie_compliance={};Drupal.eu_cookie_compliance.execute=function(){try{if(!Drupal.settings.eu_cookie_compliance.popup_enabled){return};if(!Drupal.eu_cookie_compliance.cookiesEnabled()){return};Drupal.eu_cookie_compliance.updateCheck();var e=Drupal.eu_cookie_compliance.getCurrentStatus();if((e===0&&Drupal.settings.eu_cookie_compliance.method==='default')||e===null){if(!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup||e===null){if(window.matchMedia('(max-width: '+Drupal.settings.eu_cookie_compliance.mobile_breakpoint+'px)').matches&&Drupal.settings.eu_cookie_compliance.use_mobile_message){Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.mobile_popup_html_info)}
else{Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_info)};Drupal.eu_cookie_compliance.attachAgreeEvents()}}
else if(e===1&&Drupal.settings.eu_cookie_compliance.popup_agreed_enabled){Drupal.eu_cookie_compliance.createPopup(Drupal.settings.eu_cookie_compliance.popup_html_agreed);Drupal.eu_cookie_compliance.attachHideEvents()}
else if(e===2&&Drupal.settings.eu_cookie_compliance.withdraw_enabled){Drupal.eu_cookie_compliance.createWithdrawBanner(Drupal.settings.eu_cookie_compliance.withdraw_markup);Drupal.eu_cookie_compliance.attachWithdrawEvents()}}catch(o){}};Drupal.eu_cookie_compliance.createWithdrawBanner=function(i){var o=e('<div></div>').html(i),p=e('.eu-cookie-withdraw-banner',o);o.attr('id','sliding-popup');o.addClass('eu-cookie-withdraw-wrapper');if(!Drupal.settings.eu_cookie_compliance.popup_use_bare_css){p.height(Drupal.settings.eu_cookie_compliance.popup_height).width(Drupal.settings.eu_cookie_compliance.popup_width)};o.hide();var c=0;if(Drupal.settings.eu_cookie_compliance.popup_position){o.prependTo('body');c=o.outerHeight();o.show().addClass('sliding-popup-top').addClass('clearfix').css({top:-1*c});setTimeout(function(){o.animate({top:-1*c},Drupal.settings.eu_cookie_compliance.popup_delay,null,function(){o.trigger('eu_cookie_compliance_popup_open')})}.bind(o,c),0)}
else{if(Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers){o.prependTo('body')}
else{o.appendTo('body')};c=o.outerHeight();o.show().addClass('sliding-popup-bottom').css({bottom:-1*c});setTimeout(function(){o.animate({bottom:-1*c},Drupal.settings.eu_cookie_compliance.popup_delay,null,function(){o.trigger('eu_cookie_compliance_popup_open')})}.bind(o,c),0)}};Drupal.eu_cookie_compliance.toggleWithdrawBanner=function(){var o=e('#sliding-popup'),p=e('.eu-cookie-withdraw-tab'),c=Drupal.settings.eu_cookie_compliance.popup_position?parseInt(o.css('top'))===0:parseInt(o.css('bottom'))===0,a=(Drupal.settings.eu_cookie_compliance.popup_position?'top':'bottom'),i=o.outerHeight();if(Drupal.settings.eu_cookie_compliance.popup_position){if(c){o.animate({'top':-1*i},Drupal.settings.eu_cookie_compliance.popup_delay)}
else{o.animate({'top':0},Drupal.settings.eu_cookie_compliance.popup_delay)}}
else{if(c){o.animate({'bottom':-1*i},Drupal.settings.eu_cookie_compliance.popup_delay)}
else{o.animate({'bottom':0},Drupal.settings.eu_cookie_compliance.popup_delay)}}};Drupal.eu_cookie_compliance.createPopup=function(i){var o=e('<div></div>').html(i);o.attr('id','sliding-popup');if(!Drupal.settings.eu_cookie_compliance.popup_use_bare_css){o.height(Drupal.settings.eu_cookie_compliance.popup_height).width(Drupal.settings.eu_cookie_compliance.popup_width)};o.hide();var c=0;if(Drupal.settings.eu_cookie_compliance.popup_position){o.prependTo('body');c=o.outerHeight();o.show().attr({'class':'sliding-popup-top clearfix'}).css({top:-1*c}).animate({top:0},Drupal.settings.eu_cookie_compliance.popup_delay,null,function(){o.trigger('eu_cookie_compliance_popup_open')})}
else{if(Drupal.settings.eu_cookie_compliance.better_support_for_screen_readers){o.prependTo('body')}
else{o.appendTo('body')};c=o.outerHeight();o.show().attr({'class':'sliding-popup-bottom'}).css({bottom:-1*c}).animate({bottom:0},Drupal.settings.eu_cookie_compliance.popup_delay,null,function(){o.trigger('eu_cookie_compliance_popup_open')})}};Drupal.eu_cookie_compliance.attachAgreeEvents=function(){var p=Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation,c=Drupal.settings.eu_cookie_compliance.popup_scrolling_confirmation;e('.agree-button').click(Drupal.eu_cookie_compliance.acceptAction);e('.decline-button').click(Drupal.eu_cookie_compliance.declineAction);if(p){e('a, input[type=submit], button[type=submit]').not('.popup-content *').bind('click.euCookieCompliance',Drupal.eu_cookie_compliance.acceptAction)};if(c){var o=!1,i=function(){if(o){Drupal.eu_cookie_compliance.acceptAction();e(window).off('scroll',i)}
else{o=!0}};e(window).bind('scroll',i)};e('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction)};Drupal.eu_cookie_compliance.attachHideEvents=function(){var i=Drupal.settings.eu_cookie_compliance.popup_hide_agreed,o=Drupal.settings.eu_cookie_compliance.popup_clicking_confirmation;e('.hide-popup-button').click(function(){Drupal.eu_cookie_compliance.changeStatus(2)});if(o){e('a, input[type=submit], button[type=submit]').unbind('click.euCookieCompliance')};if(i){e('a, input[type=submit], button[type=submit]').bind('click.euCookieComplianceHideAgreed',function(){Drupal.eu_cookie_compliance.changeStatus(2)})};e('.find-more-button').not('.find-more-button-processed').addClass('find-more-button-processed').click(Drupal.eu_cookie_compliance.moreInfoAction)};Drupal.eu_cookie_compliance.attachWithdrawEvents=function(){e('.eu-cookie-withdraw-button').click(Drupal.eu_cookie_compliance.withdrawAction);e('.eu-cookie-withdraw-tab').click(Drupal.eu_cookie_compliance.toggleWithdrawBanner)};Drupal.eu_cookie_compliance.acceptAction=function(){var c=Drupal.settings.eu_cookie_compliance.popup_agreed_enabled,e=1;if(!c){Drupal.eu_cookie_compliance.setStatus(1);e=2};if(!i){euCookieComplianceLoadScripts()};if(typeof o!=='undefined'){clearInterval(o)};Drupal.eu_cookie_compliance.changeStatus(e)};Drupal.eu_cookie_compliance.declineAction=function(){Drupal.eu_cookie_compliance.setStatus(0);var o=e('#sliding-popup');if(o.hasClass('sliding-popup-top')){o.animate({top:o.outerHeight()*-1}).trigger('eu_cookie_compliance_popup_close')}
else{o.animate({bottom:o.outerHeight()*-1}).trigger('eu_cookie_compliance_popup_close')}};Drupal.eu_cookie_compliance.withdrawAction=function(){Drupal.eu_cookie_compliance.setStatus(0);location.reload()};Drupal.eu_cookie_compliance.moreInfoAction=function(){if(Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup){Drupal.eu_cookie_compliance.setStatus(0);e('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove()}
else{if(Drupal.settings.eu_cookie_compliance.popup_link_new_window){window.open(Drupal.settings.eu_cookie_compliance.popup_link)}
else{window.location.href=Drupal.settings.eu_cookie_compliance.popup_link}}};Drupal.eu_cookie_compliance.getCurrentStatus=function(){var i=(typeof eu_cookie_compliance_cookie_name==='undefined'||eu_cookie_compliance_cookie_name==='')?'cookie-agreed':eu_cookie_compliance_cookie_name,o=e.cookie(i);o=parseInt(o);if(isNaN(o)){o=null};return o};Drupal.eu_cookie_compliance.changeStatus=function(o){var i=Drupal.eu_cookie_compliance.getCurrentStatus(),c=Drupal.settings.eu_cookie_compliance.reload_page;if(i===o){return};if(Drupal.settings.eu_cookie_compliance.popup_position){e('.sliding-popup-top').animate({top:e('#sliding-popup').outerHeight()*-1},Drupal.settings.eu_cookie_compliance.popup_delay,function(){if(i===null&&!c){e('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({top:0},Drupal.settings.eu_cookie_compliance.popup_delay);Drupal.eu_cookie_compliance.attachHideEvents()}
else if(i===1){e('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove()}})}
else{e('.sliding-popup-bottom').animate({bottom:e('#sliding-popup').outerHeight()*-1},Drupal.settings.eu_cookie_compliance.popup_delay,function(){if(i===null&&!c){e('#sliding-popup').html(Drupal.settings.eu_cookie_compliance.popup_html_agreed).animate({bottom:0},Drupal.settings.eu_cookie_compliance.popup_delay);Drupal.eu_cookie_compliance.attachHideEvents()}
else if(i===1){e('#sliding-popup').trigger('eu_cookie_compliance_popup_close').remove()}})};if(c){location.reload()};if(o===2&&Drupal.settings.eu_cookie_compliance.withdraw_enabled){Drupal.eu_cookie_compliance.createWithdrawBanner(Drupal.settings.eu_cookie_compliance.withdraw_markup);Drupal.eu_cookie_compliance.attachWithdrawEvents()};Drupal.eu_cookie_compliance.setStatus(o)};Drupal.eu_cookie_compliance.setStatus=function(o){var c=new Date(),a=Drupal.settings.eu_cookie_compliance.domain?Drupal.settings.eu_cookie_compliance.domain:'',i=Drupal.settings.basePath,p=(typeof eu_cookie_compliance_cookie_name==='undefined'||eu_cookie_compliance_cookie_name==='')?'cookie-agreed':eu_cookie_compliance_cookie_name;if(i.length>1){var t=i.length-1;if(i.lastIndexOf('/')===t){i=i.substring(0,t)}};var l=parseInt(Drupal.settings.eu_cookie_compliance.cookie_session);if(l){e.cookie(p,o,{path:i,domain:a})}
else{var u=parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime);c.setDate(c.getDate()+u);e.cookie(p,o,{expires:c,path:i,domain:a})};e(document).trigger('eu_cookie_compliance.changeStatus',[o]);if(Drupal.settings.eu_cookie_compliance.store_consent&&((o===1&&Drupal.settings.eu_cookie_compliance.popup_agreed_enabled)||(o===2&&!Drupal.settings.eu_cookie_compliance.popup_agreed_enabled))){var n=Drupal.settings.basePath+Drupal.settings.pathPrefix+'eu-cookie-compliance/store_consent/banner';e.post(n,{},function(e){})}};Drupal.eu_cookie_compliance.hasAgreed=function(){var e=Drupal.eu_cookie_compliance.getCurrentStatus();return(e===1||e===2)};Drupal.eu_cookie_compliance.showBanner=function(){var o=!1,e=Drupal.eu_cookie_compliance.getCurrentStatus();if((e===0&&Drupal.settings.eu_cookie_compliance.method==='default')||e===null){if(!Drupal.settings.eu_cookie_compliance.disagree_do_not_show_popup||e===null){o=!0}}
else if(e===1&&Drupal.settings.eu_cookie_compliance.popup_agreed_enabled){o=!0};return o};Drupal.eu_cookie_compliance.cookiesEnabled=function(){var e=navigator.cookieEnabled;if(typeof navigator.cookieEnabled==='undefined'&&!e){document.cookie='testCookie';e=(document.cookie.indexOf('testCookie')!==-1)};return e};Drupal.eu_cookie_compliance.updateCheck=function(){var i='cookie-agreed-'+Drupal.settings.eu_cookie_compliance.popup_language,a=Drupal.settings.eu_cookie_compliance.domain?Drupal.settings.eu_cookie_compliance.domain:'',p=Drupal.settings.basePath,o=e.cookie(i),c=new Date(),t=(typeof eu_cookie_compliance_cookie_name==='undefined'||eu_cookie_compliance_cookie_name==='')?'cookie-agreed':eu_cookie_compliance_cookie_name;if(o!==undefined&&o!==null&&o!=='null'){c.setDate(c.getDate()+parseInt(Drupal.settings.eu_cookie_compliance.cookie_lifetime));e.cookie(t,o,{expires:c,path:p,domain:a});if(typeof e.removeCookie!=='undefined'){e.removeCookie(i)}
else{e.cookie(i,null,{path:p,domain:a})}}};var i=!1;e(function(){if(Drupal.eu_cookie_compliance.hasAgreed()||(Drupal.eu_cookie_compliance.getCurrentStatus()===null&&Drupal.settings.eu_cookie_compliance.method!=='opt_in')){euCookieComplianceLoadScripts();i=!0}});Drupal.behaviors.eu_cookie_compliance_popup_block_cookies={initialized:!1,attach:function(i,c){if(!Drupal.behaviors.eu_cookie_compliance_popup_block_cookies.initialized&&c.eu_cookie_compliance){Drupal.behaviors.eu_cookie_compliance_popup_block_cookies.initialized=!0;if((c.eu_cookie_compliance.method==='opt_in'&&(Drupal.eu_cookie_compliance.getCurrentStatus()===null||!Drupal.eu_cookie_compliance.hasAgreed()))||(c.eu_cookie_compliance.method==='opt_out'&&!Drupal.eu_cookie_compliance.hasAgreed()&&Drupal.eu_cookie_compliance.getCurrentStatus()!==null)){var p=c.eu_cookie_compliance.whitelisted_cookies.split(/\r\n|\n|\r/g);p.push((typeof c.eu_cookie_compliance.cookie_name==='undefined'||c.eu_cookie_compliance.cookie_name==='')?'cookie-agreed':c.eu_cookie_compliance.cookie_name);o=setInterval(function(){var n=e.cookie();for(var i in n){var a=!0,o=window.location.hostname,c=!1,t=0;if(i.indexOf('SESS')===0||i.indexOf('SSESS')===0){a=!1};for(var u in p){if(i===p[u]){a=!1}};if(a){while(!c&&o!==''){c=e.removeCookie(i,{domain:'.'+o,path:'/'});if(!c){c=e.removeCookie(i,{domain:o,path:'/'})};t=o.indexOf('.');o=(t===-1)?'':o.substring(t+1)}}}},5000)}}}}})(jQuery);