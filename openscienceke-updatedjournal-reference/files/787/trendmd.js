!function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var p=r[s]={exports:{}};e[s][0].call(p.exports,function(t){var r=e[s][1][t];return o(r?r:t)},p,p.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){!function(t,r){"undefined"!=typeof e?e.exports=r():"function"==typeof define&&"object"==typeof define.amd?define(r):this[t]=r()}("domready",function(t){function e(t){for(d=1;t=n.shift();)t()}var r,n=[],o=!1,i=document,s=i.documentElement,a=s.doScroll,u="DOMContentLoaded",p="addEventListener",c="onreadystatechange",h="readyState",l=a?/^loaded|^c/:/^loaded|c/,d=l.test(i[h]);return i[p]&&i[p](u,r=function(){i.removeEventListener(u,r,o),e()},o),a&&i.attachEvent(c,r=function(){/^c/.test(i[h])&&(i.detachEvent(c,r),e())}),t=a?function(e){self!=top?d?e():n.push(e):function(){try{s.doScroll("left")}catch(r){return setTimeout(function(){t(e)},50)}e()}()}:function(t){d?t():n.push(t)}})},{}],2:[function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}e.exports=n,n.prototype.on=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},e._off=r,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;var n=r.indexOf(e._off||e);return~n&&r.splice(n,1),this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],3:[function(t,e,r){e.exports=function(t,e,r){for(var n=0,o=t.length,i=3==arguments.length?r:t[n++];n<o;)i=e.call(null,i,t[n],++n,t);return i}},{}],4:[function(t,e,r){function n(){}function o(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function i(){if(_.XMLHttpRequest&&("file:"!=_.location.protocol||!_.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function s(t){return t===Object(t)}function a(t){if(!s(t))return t;var e=[];for(var r in t)null!=t[r]&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function u(t){for(var e,r,n={},o=t.split("&"),i=0,s=o.length;i<s;++i)r=o[i],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function p(t){var e,r,n,o,i=t.split(/\r?\n/),s={};i.pop();for(var a=0,u=i.length;a<u;++a)r=i[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),o=g(r.slice(e+1)),s[n]=o;return s}function c(t){return t.split(/ *; */).shift()}function h(t){return y(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text=this.xhr.responseText,this.setStatusProperties(this.xhr.status),this.header=this.headers=p(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text):null}function d(t,e){var r=this;m.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var e=new l(r);"HEAD"==t&&(e.text=null),r.callback(null,e)})}function f(t,e){return"function"==typeof e?new d("GET",t).end(e):1==arguments.length?new d("GET",t):new d(t,e)}var m=t("emitter"),y=t("reduce"),_="undefined"==typeof window?this:window,g="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};f.serializeObject=a,f.parseString=u,f.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},f.serialize={"application/x-www-form-urlencoded":a,"application/json":JSON.stringify},f.parse={"application/x-www-form-urlencoded":u,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=c(e);var r=h(e);for(var n in r)this[n]=r[n]},l.prototype.parseBody=function(t){var e=f.parse[this.type];return e?e(t):null},l.prototype.setStatusProperties=function(t){var e=t/100|0;this.status=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t||1223==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,r=t.path,n="cannot "+e+" "+r+" ("+this.status+")",o=new Error(n);return o.status=this.status,o.method=e,o.path=r,o},f.Response=l,m(d.prototype),d.prototype.timeout=function(t){return this._timeout=t,this},d.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},d.prototype.abort=function(){if(!this.aborted)return this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this},d.prototype.set=function(t,e){if(s(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},d.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},d.prototype.type=function(t){return this.set("Content-Type",f.types[t]||t),this},d.prototype.accept=function(t){return this.set("Accept",f.types[t]||t),this},d.prototype.auth=function(t,e){var r=btoa(t+":"+e);return this.set("Authorization","Basic "+r),this},d.prototype.query=function(t){return"string"!=typeof t&&(t=a(t)),t&&this._query.push(t),this},d.prototype.send=function(t){var e=s(t),r=this.getHeader("Content-Type");if(e&&s(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==r?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return e?(r||this.type("json"),this):this},d.prototype.callback=function(t,e){var r=this._callback;return 2==r.length?r(t,e):t?this.emit("error",t):void r(e)},d.prototype.crossDomainError=function(){var t=new Error("Origin is not allowed by Access-Control-Allow-Origin");t.crossDomain=!0,this.callback(t)},d.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},d.prototype.withCredentials=function(){return this._withCredentials=!0,this},d.prototype.end=function(t){var e=this,r=this.xhr=i(),s=this._query.join("&"),a=this._timeout,u=this._data;if(this._callback=t||n,r.onreadystatechange=function(){if(4==r.readyState)return 0==r.status?e.aborted?e.timeoutError():e.crossDomainError():void e.emit("end")},r.upload&&(r.upload.onprogress=function(t){t.percent=t.loaded/t.total*100,e.emit("progress",t)}),a&&!this._timer&&(this._timer=setTimeout(function(){e.abort()},a)),s&&(s=f.serializeObject(s),this.url+=~this.url.indexOf("?")?"&"+s:"?"+s),r.open(this.method,this.url,!0),this._withCredentials&&(r.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof u&&!o(u)){var p=f.serialize[this.getHeader("Content-Type")];p&&(u=p(u))}for(var c in this.header)null!=this.header[c]&&r.setRequestHeader(c,this.header[c]);return r.send(u),this},f.Request=d,f.get=function(t,e,r){var n=f("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},f.head=function(t,e,r){var n=f("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.del=function(t,e){var r=f("DELETE",t);return e&&r.end(e),r},f.patch=function(t,e,r){var n=f("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.post=function(t,e,r){var n=f("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.put=function(t,e,r){var n=f("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},e.exports=f},{emitter:2,reduce:3}],5:[function(t,e,r){var n;n=function(){function t(t){var e,r,n,o,i,s,a;for(o=t.split(","),e=0,n=o.length;e<n;e++)s=o[e],s.indexOf("=")!==-1?(i=s.split("="),r=i[0],a=i[1],this[this.trim(r)]=this.trim(a)):this[this.trim(s)]=!0;this.abstract=parseInt(this.abstract)}return t.prototype.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},t}(),e.exports={ArticleHeader:n}},{}],6:[function(t,e,r){var n,o,i;i=t("superagent"),o=t("./meta-extractor"),n=function(){function t(t,e){var r;this.api_url=t,this.options=e,this.options.journal_id?(this.endpoint="/journals/"+this.options.journal_id+"/selectors",this.params={}):(this.endpoint="/journals/identification",r=new o.MetaExtractor({sources:["HighWire","DublinCore","DCTerms","Prism","BEPress","EPrints","WolterKluwer"],tags:["doi","issn","journal_title"]}),this.params={doi:r.doi,issn:r.issn,url:this.options.url||window.location.href,custom_id:this.options.custom_id})}return t.prototype.retrieve=function(t){return i.get(this.api_url+this.endpoint).set("TrendMD-Widget-Version",TrendMD.version).withCredentials().query(this.params).end(function(e){return function(e,r){if(!e&&!r.error)return t(r.body.journal)}}(this))},t}(),e.exports={JournalRetriever:n}},{"./meta-extractor":7,superagent:4}],7:[function(t,e,r){var n,o,i;i=t("./meta-extractor/sources"),o=t("./meta-extractor/date-parser"),n=function(){function t(t){var e,r,n,s,a,u,p,c,h,l,d,f,m,y,_;for(this.options=null!=t?t:{},this.sources=function(){var t,e,r,n;for(r=this.options.sources||this.defaultSources,n=[],t=0,e=r.length;t<e;t++)y=r[t],s="string"==typeof y?i[y]:y,n.push(new s(this.options));return n}.call(this),h=document.querySelectorAll("meta"),e=0,a=h.length;e<a;e++)for(c=h[e],l=this.sources,r=0,u=l.length;r<u;r++)y=l[r],y.add(c);for(d=this.options.tags||this.defaultTags,n=0,p=d.length;n<p;n++)_=d[n],"publication_date"===_?(this.date_parser=new o.DateParser(this.for("publication_date")),this.publication_year=null!=(f=this.date_parser.publication_date)?f[0]:void 0,this.publication_month=null!=(m=this.date_parser.publication_date)?m[1]:void 0):this[_]=this["get_"+_]?this["get_"+_]():this.first_for(_)}return t.prototype.defaultSources=["HighWire","DublinCore","DCTerms","Prism","BEPress","EPrints","WolterKluwer","Selectors","OpenGraph"],t.prototype.defaultTags=["pubmed_id","doi","title","publication_date","authors","abstract"],t.prototype.get_doi=function(){var t;return null!=(t=this.first_for("doi"))?t.replace("doi:","").replace("info:doi/","").replace("http://dx.doi.org/",""):void 0},t.prototype.get_issn=function(){var t;return null!=(t=this.first_for("issn"))?t.replace("issn:","").replace("info:issn/",""):void 0},t.prototype.get_authors=function(){var t;return(t=this.uniq(this.for("authors"))).length>1?t[0]+" et al.":t[0]},t.prototype.get_abstract=function(){return this.sources[7].get("abstract")||this.first_for("abstract")},t.prototype.first_for=function(t){return this.for(t)[0]},t.prototype.for=function(t){var e;return this.compact((e=[]).concat.apply(e,this.sources.map(function(e){return e.get(t)})))},t.prototype.compact=function(t){var e,r,n,o;for(o=[],e=0,n=t.length;e<n;e++)r=t[e],void 0!==r&&null!==r&&o.push(r);return o},t.prototype.uniq=function(t){var e,r,n,o,i,s;for(n={},r=e=0,o=t.length-1;0<=o?e<=o:e>=o;r=0<=o?++e:--e)n[t[r]]=t[r];i=[];for(r in n)s=n[r],i.push(s);return i},t}(),e.exports={MetaExtractor:n}},{"./meta-extractor/date-parser":8,"./meta-extractor/sources":9}],8:[function(t,e,r){var n;n=function(){function t(t){var e;this.candidates=t,e=[{re:new RegExp(""+this.re.start+this.year_and_month_name.parts.map(function(t){return function(e){return t.re[e]}}(this)).join(this.re.separator_month)+this.re.end),year:this.year_and_month_name.year,month:this.year_and_month_name.month,name:!0}],this.patterns=e.concat(["year_and_month","month_day_year","month_name_day_year","month_year","month_name_and_year","year"].map(function(t){return function(e){return t[e]}}(this)).map(function(t){return function(e){return{re:new RegExp(""+t.re.start+e.parts.map(function(e){return t.re[e]}).join(t.re.separator)+t.re.end),year:e.year,month:e.month,name:e.name}}}(this))),this.extracted=this.compact(this.candidates.map(function(t){return function(e){return t.extract(e)}}(this))),this.sorted=this.extracted.sort(function(t,e){return t[0]+"-"+(t[1]||99)<e[0]+"-"+(e[1]||99)?-1:1}),this.publication_date=this.sorted[0]}return t.prototype.re={year:"(19\\d{2}|20\\d{2})",month:"(\\d{1,2})",month_name:"(\\w{3,9})",day:"\\d{1,2}",start:"(\\D|^)",end:"(\\D|$)",separator:"\\D+",separator_month:"\\W+"},t.prototype.year_and_month={parts:["year","month"],year:2,month:3},t.prototype.year_and_month_name={parts:["year","month_name"],year:2,month:3,name:!0},t.prototype.month_day_year={parts:["month","day","year"],year:3,month:2},t.prototype.month_name_day_year={parts:["month_name","day","year"],year:3,month:2,name:!0},t.prototype.month_year={parts:["month","year"],year:3,month:2},t.prototype.month_name_and_year={parts:["month_name","year"],year:3,month:2,name:!0},t.prototype.year={parts:["year"],year:2},t.prototype.extract=function(t){var e,r,n,o,i,s,a,u,p,c;for(u={january:"1",february:"2",march:"3",april:"4",may:"5",june:"6",july:"7",august:"8",september:"9",october:"10",november:"11",december:"12"},c=this.patterns,e=0,r=c.length;e<r;e++)if(p=c[e],o=t.match(p.re)){if(i=null,p.month&&(i=o[p.month],p.name)){a=i.toLowerCase();for(n in u)s=n.match(a),s&&(i=u[n])}return this.compact([o[p.year],i])}return null},t.prototype.compact=function(t){var e,r,n,o;for(o=[],e=0,n=t.length;e<n;e++)r=t[e],void 0!==r&&null!==r&&o.push(r);return o},t}(),e.exports={DateParser:n}},{}],9:[function(t,e,r){var n,o,i,s,a,u,p,c,h,l,d=function(t,e){function r(){this.constructor=t}for(var n in e)f.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},f={}.hasOwnProperty;h=function(){function t(t){var e,r,n,o,i,s,a,u,p,c;for(this.options=null!=t?t:{},this.tags=this.options.tags||this.defaultTags,this.tag_map={},this.buckets={},this.tag_order={},a=this.tags,r=0,o=a.length;r<o;r++)for(s=a[r],this.buckets[s]=[],this.tag_order[s]=[],u=[].concat(this[s]),n=0,i=u.length;n<i;n++)p=u[n],c=this.tag(p),null==(e=this.tag_map)[c]&&(e[c]=[]),this.tag_map[c].push(s),this.tag_order[s].push(c)}return t.prototype.prefix=[],t.prototype.separator=".",t.prototype.defaultTags=["pubmed_id","doi","title","authors","publication_date","abstract"],t.prototype.pubmed_id=["pubmed_id","pmid"],t.prototype.doi="doi",t.prototype.title="title",t.prototype.authors=["authors","author"],t.prototype.publication_date=["publication_date","date"],t.prototype.abstract="abstract",t.prototype.journal_title=["journal_title","journal_abbrev"],t.prototype.issn="issn",t.prototype.add=function(t){var e,r,n,o,i;if(""!==(t.getAttribute("content")||"")){for(o=this.tag_map[this.node_tag(t)]||[],i=[],e=0,r=o.length;e<r;e++)n=o[e],i.push(this.buckets[n].push(t));return i}},t.prototype.tag=function(t){return[].concat(this.prefix).concat(t).join(this.separator)},t.prototype.node_tag=function(t){var e;return(null!=(e=t.getAttribute("name"))?e.toLowerCase():void 0)||"invalid"},t.prototype.get=function(t){return this["get_"+t]?this["get_"+t]():this.first_for(t)},t.prototype.get_authors=function(){return this.for("authors")},t.prototype.get_publication_date=function(){return this.for("publication_date")},t.prototype.get_abstract=function(){return this.for("abstract").join(" ").trim()||null},t.prototype.get_doi=function(){var t,e,r,n;for(n=this.for("doi"),e=0,r=n.length;e<r;e++)if(t=n[e],this.check_doi(t))return t},t.prototype.check_doi=function(t){return t.match(/\//g)},t.prototype.first_for=function(t){return this.for(t)[0]},t.prototype.for=function(t){return this.buckets[t]?this.buckets[t].sort(function(e){return function(r,n){return e.sort_score(t,r)-e.sort_score(t,n)}}(this)).map(function(t){return function(e){return t.clean(e.getAttribute("content"))}}(this)):[]},t.prototype.sort_score=function(t,e){return this.tag_order[t].indexOf(this.node_tag(e))},t.prototype.clean=function(t){return this.htmlDecode(t).replace(/^\s+|\s+$/g,"").replace(/\s*[\n\t]+\s*/g," ")},t.prototype.htmlDecode=function(t){var e;return e=document.createElement("div"),e.innerHTML=t,0===e.childNodes.length?"":e.childNodes[0].textContent},t}(),a=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix="citation",e.prototype.separator="_",e}(h),i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix="dc",e.prototype.doi=["identifier.doi","identifier"],e.prototype.authors=["creator","contributor"],e.prototype.publication_date=["date","issued"],e.prototype.abstract=["abstract","description"],e.prototype.journal_title="publisher",e.prototype.issn=["identifier.issn","identifier"],e.prototype.get_issn=function(){var t,e,r,n;for(n=this.for("issn"),t=0,r=n.length;t<r;t++)if(e=n[t],!this.check_doi(e))return e},e.prototype.sort_score=function(t,r){var n,o;return o=e.__super__.sort_score.call(this,t,r),"doi"!==t&&"issn"!==t||(o*=10,(null!=(n=r.getAttribute("scheme"))?n.toLowerCase():void 0)===t&&(o-=5),0===this.clean(r.getAttribute("content")||"").toLowerCase().indexOf(t+":")&&(o-=1)),o},e}(h),p=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix="prism",e.prototype.publication_date="publicationdate",e.prototype.journal_title="publicationname",e.prototype.issn=["eissn","issn"],e}(h),n=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix=["bepress","citation"],e.prototype.separator="_",e}(h),s=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix="eprints",e.prototype.authors="creators_name",e.prototype.journal_title=["publication","publisher"],e}(h),u=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix="og",e.prototype.separator=":",e.prototype.authors=[],e.prototype.publication_date="article:published_time",e.prototype.abstract="description",e.prototype.node_tag=function(t){var r;return(null!=(r=t.getAttribute("property"))?r.toLowerCase():void 0)||e.__super__.node_tag.call(this,t)},e}(h),l=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.prefix="wkhealth",e.prototype.separator="_",e}(h),o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.defaultTags=["pubmed_id","doi","title","authors","abstract"],e.prototype.prefix="dcterms",e.prototype.authors="creator",e.prototype.abstract=["abstract","description"],e.prototype.journal_title="publisher",e.prototype.issn="identifier.issn",e}(h),c=function(t){function e(t){var e,r,n,o,i,s;for(this.options=null!=t?t:{},this.tags=this.options.tags||this.defaultTags,this.buckets={},i=this.tags,e=0,r=i.length;e<r;e++)n=i[e],(null!=(s=this.options.selectors)?s[n]:void 0)&&(this.buckets[n]=function(){var t,e,r,i;for(r=document.querySelectorAll(this.options.selectors[n]),i=[],t=0,e=r.length;t<e;t++)o=r[t],i.push(o.textContent);return i}.call(this))}return d(e,t),e.prototype.for=function(t){return this.buckets[t]||[]},e.prototype.add=function(){},e}(h),e.exports={Source:h,HighWire:a,DublinCore:i,Prism:p,BEPress:n,EPrints:s,OpenGraph:u,WolterKluwer:l,DCTerms:o,Selectors:c}},{}],10:[function(t,e,r){var n,o,i,s,a,u,p,c=[].slice,h=[].indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e;return-1};i=t("domready"),i.domready=i,u=t("superagent"),a=t("./meta-extractor"),p=t("./tracker"),s=t("./journal-retriever"),o=t("./article-header"),n=function(){function t(t,e,r,n){this.api_url=t,this.tracker_url=e,this.stylesheet=r,this.options=n,i.domready(function(t){return function(){if(t.element=document.querySelector(t.options.element),t.element)return t.retrieve(function(e){return t.extractor=new a.MetaExtractor(e),t.show()})}}(this))}return t.MetaExtractor=a.MetaExtractor,t.Tracker=p.Tracker,t.prototype.retrieve=function(t){return this.retriever=new s.JournalRetriever(this.api_url,this.options),this.retriever.retrieve(function(e){return function(r){return e.journal=r,e.widget_endpoint="/journals/"+r.id+"/similar",e.missing_endpoint="/journals/"+r.id+"/missing",e.articles_endpoint="/journals/"+r.id+"/articles",t(r)}}(this))},t.prototype.show=function(){var t;return t=this.query_params(),this.is_missing(t)?this.missing():(this.addStyle(),this.article(t,function(t){return function(e,r){var n,i,s;if(!(e||r.error&&404!==r.status&&403!==r.status)){if(404===r.status)return t.create();if(n=new o.ArticleHeader(r.header["trendmd-article"]),n.id&&n.meta_dated&&(n.missing_meta||n.abstract<(null!=(s=t.extractor.abstract)?s.trim().length:void 0))&&t.update(n.id),403!==r.status)return i=r.text.replace(/Pending(\<span.*?),\s/gm,"$1"),t.element.innerHTML=i,n.id&&(t.tracker=new p.Tracker(t.tracker_url,t.journal.id,n.id,t.element),t.tracker.track()),t.gaTracking()}}}(this)))},t.prototype.article=function(t,e){return u.get(this.api_url+this.widget_endpoint).set("TrendMD-Widget-Version",TrendMD.version).withCredentials().query(t).end(e)},t.prototype.missing=function(){if(!this.non_missing_url())return u.post(this.api_url+this.missing_endpoint).set("TrendMD-Widget-Version",TrendMD.version).send({url:this.options.url||window.location.href}).end()},t.prototype.create=function(t){return u.post(this.api_url+this.articles_endpoint).set("TrendMD-Widget-Version",TrendMD.version).send(this.store_params()).end(t)},t.prototype.update=function(t,e){return u.put(this.api_url+this.articles_endpoint+"/"+t).set("TrendMD-Widget-Version",TrendMD.version).send(this.store_params()).end(e)},t.prototype.query_params=function(){return this.params("pubmed_id","doi","title","authors","url","publication_year","publication_month")},t.prototype.store_params=function(){return this.params("pubmed_id","doi","title","authors","url","publication_year","publication_month","abstract")},t.prototype.params=function(){var t,e,r,n,o;for(n=1<=arguments.length?c.call(arguments,0):[],o={},h.call(n,"url")>=0&&(o.url=this.options.url||window.location.href),t=0,e=n.length;t<e;t++)r=n[t],"url"!==r&&(o[r]=this.checkParam(r,this.options[r]||this.extractor[r]));return o},t.prototype.checkParam=function(t,e){return"publication_year"===t?e>=1900&&e<=2100?e:null:"publication_month"===t?e>=1&&e<=12?e:null:e},t.prototype.is_missing=function(t){return this.missing_parameters(t)},t.prototype.missing_parameters=function(t){return!t.title&&!t.doi&&!t.pubmed_id},t.prototype.non_missing_url=function(){return this.file_url()||this.google_cache_url()},t.prototype.file_url=function(){return(this.options.url||window.location.href).match(/^file:\/\//)},t.prototype.google_cache_url=function(){return(this.options.url||window.location.href).match(/^http:\/\/webcache\.googleusercontent\.com\/search/)},t.prototype.addStyle=function(){var t;return t=document.createElement("link"),t.rel="stylesheet",t.type="text/css",t.href=this.stylesheet,t.media="all",document.getElementsByTagName("head")[0].appendChild(t)},t.prototype.gaTracking=function(){var t;return t=function(t,e,r,n,o,i,s){return t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){return(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,i=e.createElement(r),s=e.getElementsByTagName(r)[0],i.async=1,i.src=n,s.parentNode.insertBefore(i,s)},t(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-47018061-3","auto",{allowLinker:!0,storage:"none",name:"tmdWidget"}),ga("tmdWidget.send","pageview",window.location.hostname+"/"+this.journal.id)},t}(),e.exports={SimilarWidget:n}},{"./article-header":5,"./journal-retriever":6,"./meta-extractor":7,"./tracker":11,domready:1,superagent:4}],11:[function(t,e,r){var n,o;o=t("superagent"),n=function(){function t(t,e,r,n){var o;this.collector_url=t,this.journal_id=e,this.article_id=r,this.element=n,o=this.element.addEventListener?["addEventListener","click"]:["attachEvent","onclick"],this.listen_method=o[0],this.listen_event=o[1]}return t.prototype.events_endpoint="/events",t.prototype.attributes={article_id:"data-trendmd-id",journal_id:"data-trendmd-journal-id",sponsored:"data-trendmd-sponsored",campaign_id:"data-trendmd-campaign-id"},t.prototype.selectors={organic:'a[data-trendmd-sponsored="false"]',sponsored:'a[data-trendmd-sponsored="true"]'},t.prototype.track=function(){return this.trackImpressions(),this.trackRecommendations()},t.prototype.trackImpressions=function(){var t;return this.log({"organic-impressions":function(){var e,r,n,o;for(n=this.nodes("organic"),o=[],e=0,r=n.length;e<r;e++)t=n[e],o.push(this.params(t));return o}.call(this),"sponsored-impressions":function(){var e,r,n,o;for(n=this.nodes("sponsored"),o=[],e=0,r=n.length;e<r;e++)t=n[e],o.push(this.params(t));return o}.call(this)})},t.prototype.trackRecommendations=function(){var t,e,r,n,o;r=this.selectors,n=[];for(o in r)t=r[o],"all"!==o&&n.push(function(){var t,r,n,i;for(n=this.nodes(o),i=[],t=0,r=n.length;t<r;t++)e=n[t],i.push(this.addClickLogger(e,o));return i}.call(this));return n},t.prototype.addClickLogger=function(t,e){return t[this.listen_method](this.listen_event,function(r){return function(){var n;return r.log((n={},n[e+"-recommendations"]=[r.params(t)],n))}}(this))},t.prototype.nodes=function(t){return this.element.querySelectorAll(this.selectors[t])},t.prototype.params=function(t){return{from_journal_id:this.journal_id,from_article_id:this.article_id,to_journal_id:t.getAttribute(this.attributes.journal_id),to_article_id:t.getAttribute(this.attributes.article_id),campaign_id:t.getAttribute(this.attributes.campaign_id)}},t.prototype.log=function(t){return o.post(this.collector_url+this.events_endpoint).set("TrendMD-Widget-Version",TrendMD.version).withCredentials().send({events:t}).end()},t}(),e.exports={Tracker:n}},{superagent:4}],12:[function(t,e,r){(function(r){var n,o,i;i=t("./similar-widget"),o=function(){var t,e;if(t=document.currentScript||function(){var t;return t=document.getElementsByTagName("script"),t[t.length-1]}(),e=t.dataset.trendmdconfig)return JSON.parse(e)}(),n=function(){function t(){}return t.SimilarWidget=i.SimilarWidget,t.prototype.api_url="//www.trendmd.com",t.prototype.tracker_url="//collector.trendmd.com",t.prototype.widget_stylesheet="//trendmd.s3.amazonaws.com/trendmd.min.css",t.prototype.version="141216",t.prototype.register=function(t){var e;if(e=(null!=o?o.widget:void 0)||(null!=t?t.widget:void 0),e!==!1)return this.register_widget(o||t)},t.prototype.register_widget=function(t){return this.widget=new i.SimilarWidget(this.api_url,this.tracker_url,this.widget_stylesheet,t)},t}(),e.exports=n,r.TrendMD=new n,o&&(new n).register()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./similar-widget":10}]},{},[12]);