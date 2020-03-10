(function(e){Drupal.behaviors.highwireFiguresMarkupProcessor={attach:function(i,o){e('body').bind('highwireResponsiveLayoutTransition',function(t,i){var o=Drupal.highwireResponsive.getMobileLayouts();if(i.from!=i.to){if(o.indexOf(i.to)!=-1){e('#cboxTitle').addClass('force-hide')}
else{e('#cboxTitle').removeClass('force-hide')}}
else if(o.indexOf(i.to)!=-1){e('#cboxTitle').addClass('force-hide')}});e('a.fragment-images.colorbox-load',i).once('highwireFiguresMarkupProcessor',function(){e(this,i).each(function(){var i=e(this),t=!1;if(i.is('[data-figure-caption]')){t=i.data('figure-caption')};cbsettings=e.extend(o.colorbox,{'preloading':!1,title:t});i.colorbox(cbsettings)})});e('.highwire-markup:empty').closest('#cboxTitle').addClass('force-hide')}}})(jQuery);(function(t){Drupal.behaviors.highwireTablesMarkupProcessor={attach:function(e,a){t('a.table-expand-inline',e).once('highwireTablesMarkupProcessor',function(){t(this,e).each(function(){var l,o,n,a=this,i=!0;t(a,e).each(function(){var e;e=t(a).closest('.table');if(e.find('.table-caption').length==0){e.append('<div class=\'table-caption\'> &nbsp;</div>');Drupal.attachBehaviors(e[0])}});t(a).click(function(e){e.preventDefault();if(i){l=t(a).closest('.table').find('.table-caption');o=l.html();if(!n){t.get(t(this).data('table-url'),function(t){l.html(n=t)}).fail(function(){l.html(o+'<strong>Sorry, there was a problem fetching the table. Please try again later.</strong>')}).always(function(){Drupal.attachBehaviors(l[0]);t(a).closest('.table').toggleClass('table-expand-inline');t(a).html('Collapse inline');i=!1})};t(a).html('Collapse inline');t(a).closest('.table').find('table').wrap('<div class="table-wrapper"></div>');l.html(n);Drupal.attachBehaviors(l[0]);var s=t(a).closest('.table').find('.table-label').text();t(a).closest('.table').find('table').attr('alt',s)}
else{l.html(o);t(a).html('View inline')};t(a).closest('.table').toggleClass('table-expand-inline');i=!i})});t('a.table-expand-popup',e).each(function(){cbsettings=t.extend(a.colorbox,{title:!1});t(this).colorbox(cbsettings)})})}};t(document).bind('cbox_complete',function(){if(colorbox){Drupal.attachBehaviors(t(colorbox)[0])}})})(jQuery);(function(i){Drupal.behaviors.highwire_google_scholar={attach:function(t,e){if(i('.cit-extra').length>0){i('.cit-list .ref-cit').once('google_scholar_link',function(){i(this).each(function(){var n='',s=0;i(this).find('.cit-auth').each(function(){var e=i(this).find('.cit-name-given-names')!=='undefined'?i(this).find('.cit-name-given-names').html():'',t=i(this).find('.cit-name-surname')!=='undefined'?i(this).find('.cit-name-surname').html():'';if(e||t){n+='&author['+s+']='+(e?e:'')+(t?'+'+t:'')}
else if(i(this).hasClass('cit-collab')){n+='&author['+s+']='+i(this).text()};s++});var r=i(this).find('.cit-article-title').length>0?i(this).find('.cit-article-title').text():!1,a=i(this).find('.cit-pub-date').length>0?i(this).find('.cit-pub-date').html():!1,l='';if(r!==!1&&a!==!1&&n!==''){var h={gsAuthor:n,gsTitle:r.replace(/< *img[^>]*src *= *["']?([^"']*)"\/>/gi,'').replace(/\ /g,'+'),publicationYear:a};extraFields={journal:i(this).find('.cit-jnl-abbrev').length>0?i(this).find('.cit-jnl-abbrev').html():!1,volume:i(this).find('.cit-vol').length>0?i(this).find('.cit-vol').html():!1,issn:i(this).find('.cit-issn').length>0?i(this).find('.cit-issn').html():!1,isbn:i(this).find('.cit-isbn').length>0?i(this).find('.cit-isbn').html():!1,doi:i(this).find('.cit-doi').length>0?i(this).find('.cit-doi').html():!1,pages:(i(this).find('.cit-fpage').length>0&&i(this).find('.cit-lpage').length>0)?i(this).find('.cit-fpage').html()+'-'+i(this).find('.cit-lpage').html():!1};extraFieldString='';i.each(extraFields,function(t,i){if(i!==!1){extraFieldString+='&'+t+'='+i.replace(/\ /g,'+')}});l=n+'&title='+h.gsTitle+'&publication_year='+h.publicationYear+extraFieldString}
else{var e=i(this).find('cite').clone().remove().end().text();if(e.length){e=e.replace(/< *img[^>]*src *= *["']?([^"']*)"\/>/i,'');var o=e.split(' '),c=[];i.each(o,function(t,i){if(i!==''){c.push(encodeURIComponent(i))}});e=c.join('+');l='&q_txt='+e}};var f='<a href="/lookup/google-scholar?link_type=googlescholar&gs_type=article'+l+'" target="_blank" class="cit-ref-sprinkles cit-ref-sprinkles-google-scholar cit-ref-sprinkles-google-scholar"><span>Google Scholar</span></a>';i(this,t).once('custom-js',function(){i(this).find('.cit-extra').append(f)})})})}}}})(jQuery);(function(a){Drupal.behaviors.highwire_user_salutation={attach:function(e,t){a('.highwire-user-message',e).once('highwire-user-message-once',function(){var t=[],e=a(this);e.children().each(function(){var e=a(this),i=e.data('id-type');t.push({name:i,data:e.data('identity')})});a.ajax({url:'/highwire/salutation',type:'POST',cache:!1,dataType:'json',data:{'salutation':t},success:function(t){for(var i in t){e.find('.'+i).html(unescape(t[i]))};e.children().each(function(){var t=a(this);if(t.text().length>0&&t.prevAll().text().length>0){t.before('<span class="highwire-user-msg-separator">'+e.data('separator')+'</span>')}})}})})}}}(jQuery));(function(a){Drupal.behaviors.activeTrail={attach:function(i,t){a('.nice-menu a.active',i).parents('li').addClass('active-trail')}}}(jQuery));