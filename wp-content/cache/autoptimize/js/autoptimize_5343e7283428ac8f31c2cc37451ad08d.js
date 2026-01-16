/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){e.fn._fadeIn=e.fn.fadeIn;var t=e.noop||function(){},o=/MSIE/.test(navigator.userAgent),n=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),i=(document.documentMode,"function"==typeof document.createElement("div").style.setExpression&&document.createElement("div").style.setExpression);e.blockUI=function(e){d(window,e)},e.unblockUI=function(e){a(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.on("mouseover",function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).on("mouseout",function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var o=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var t=e(this);o.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,d(this,t)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){a(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var s=null,l=[];function d(d,c){var u,b,h=d==window,k=c&&c.message!==undefined?c.message:undefined;if(!(c=e.extend({},e.blockUI.defaults,c||{})).ignoreIfBlocked||!e(d).data("blockUI.isBlocked")){if(c.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,c.overlayCSS||{}),u=e.extend({},e.blockUI.defaults.css,c.css||{}),c.onOverlayClick&&(c.overlayCSS.cursor="pointer"),b=e.extend({},e.blockUI.defaults.themedCSS,c.themedCSS||{}),k=k===undefined?c.message:k,h&&s&&a(window,{fadeOut:0}),k&&"string"!=typeof k&&(k.parentNode||k.jquery)){var y=k.jquery?k[0]:k,m={};e(d).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(d).data("blockUI.onUnblock",c.onUnblock);var g,v,I,w,U=c.baseZ;g=o||c.forceIframe?e('<iframe class="blockUI" style="z-index:'+U+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+c.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),v=c.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+U+++';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+U+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),c.theme&&h?(w='<div class="blockUI '+c.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(U+10)+';display:none;position:fixed">',c.title&&(w+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),w+='<div class="ui-widget-content ui-dialog-content"></div>',w+="</div>"):c.theme?(w='<div class="blockUI '+c.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(U+10)+';display:none;position:absolute">',c.title&&(w+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),w+='<div class="ui-widget-content ui-dialog-content"></div>',w+="</div>"):w=h?'<div class="blockUI '+c.blockMsgClass+' blockPage" style="z-index:'+(U+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+c.blockMsgClass+' blockElement" style="z-index:'+(U+10)+';display:none;position:absolute"></div>',I=e(w),k&&(c.theme?(I.css(b),I.addClass("ui-widget-content")):I.css(u)),c.theme||v.css(c.overlayCSS),v.css("position",h?"fixed":"absolute"),(o||c.forceIframe)&&g.css("opacity",0);var x=[g,v,I],C=e(h?"body":d);e.each(x,function(){this.appendTo(C)}),c.theme&&c.draggable&&e.fn.draggable&&I.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var S=i&&(!e.support.boxModel||e("object,embed",h?null:d).length>0);if(n||S){if(h&&c.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(n||!e.support.boxModel)&&!h)var E=p(d,"borderTopWidth"),O=p(d,"borderLeftWidth"),T=E?"(0 - "+E+")":0,M=O?"(0 - "+O+")":0;e.each(x,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)h?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+c.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),h?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),M&&o.setExpression("left",M),T&&o.setExpression("top",T);else if(c.centerY)h&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!c.centerY&&h){var n="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(c.css&&c.css.top?parseInt(c.css.top,10):0)+') + "px"';o.setExpression("top",n)}})}if(k&&(c.theme?I.find(".ui-widget-content").append(k):I.append(k),(k.jquery||k.nodeType)&&e(k).show()),(o||c.forceIframe)&&c.showOverlay&&g.show(),c.fadeIn){var B=c.onBlock?c.onBlock:t,j=c.showOverlay&&!k?B:t,H=k?B:t;c.showOverlay&&v._fadeIn(c.fadeIn,j),k&&I._fadeIn(c.fadeIn,H)}else c.showOverlay&&v.show(),k&&I.show(),c.onBlock&&c.onBlock.bind(I)();if(r(1,d,c),h?(s=I[0],l=e(c.focusableElements,s),c.focusInput&&setTimeout(f,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-p(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-p(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0");o&&(i.top=l>0?l+"px":"0")}(I[0],c.centerX,c.centerY),c.timeout){var z=setTimeout(function(){h?e.unblockUI(c):e(d).unblock(c)},c.timeout);e(d).data("blockUI.timeout",z)}}}function a(t,o){var n,i,d=t==window,a=e(t),u=a.data("blockUI.history"),f=a.data("blockUI.timeout");f&&(clearTimeout(f),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),r(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock")),i=d?e(document.body).children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(i.length>1&&(i[1].style.cursor=o.cursorReset),i.length>2&&(i[2].style.cursor=o.cursorReset)),d&&(s=l=null),o.fadeOut?(n=i.length,i.stop().fadeOut(o.fadeOut,function(){0==--n&&c(i,u,o,t)})):c(i,u,o,t)}function c(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function r(t,o,n){var i=o==window,l=e(o);if((t||(!i||s)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).on(d,n,u):e(document).off(d,u)}}function u(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&s&&t.data.constrainTabKey){var o=l,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){f(i)},10),!1}var d=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&d.onOverlayClick&&d.onOverlayClick(t),a.parents("div."+d.blockMsgClass).length>0||0===a.parents().children().filter("div.blockUI").length}function f(e){if(l){var t=l[!0===e?l.length-1:0];t&&t.trigger("focus")}}function p(t,o){return parseInt(e.css(t,o),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
jQuery(function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;var a=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),this.$liveRegion=this.createLiveRegion(),t(document.body).on("click",".add_to_cart_button:not(.wc-interactive)",{addToCartHandler:this},this.onAddToCart).on("keydown",".add_to_cart_button:not(.wc-interactive)",{addToCartHandler:this},t=>{" "===t.key&&(t.preventDefault(),t.target.click())}).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("keydown",".remove_from_cart_button",this.onKeydownRemoveFromCart).on("added_to_cart",{addToCartHandler:this},this.onAddedToCart).on("removed_from_cart",{addToCartHandler:this},this.onRemovedFromCart).on("ajax_request_not_sent.adding_to_cart",this.updateButton)};a.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},a.prototype.run=function(){var a=this,e=a.requests[0].complete;a.requests[0].complete=function(){"function"==typeof e&&e(),a.requests.shift(),a.requests.length>0&&a.run()},t.ajax(this.requests[0])},a.prototype.onAddToCart=function(a){var e=t(this);if(e.is(".ajax_add_to_cart")){if(!e.attr("data-product_id"))return!0;if(a.data.addToCartHandler.$liveRegion.text("").removeAttr("aria-relevant"),a.preventDefault(),e.removeClass("added"),e.addClass("loading"),!1===t(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[e]))return t(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,e]),!0;var r={};t.each(e.data(),function(t,a){r[t]=a}),t.each(e[0].dataset,function(t,a){r[t]=a}),t(document.body).trigger("adding_to_cart",[e,r]),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:r,success:function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,e]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},a.prototype.onRemoveFromCart=function(a){var e=t(this),r=e.closest(".woocommerce-mini-cart-item");a.data.addToCartHandler.$liveRegion.text("").removeAttr("aria-relevant"),a.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:e.data("cart_item_key")},success:function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash,e]):window.location=e.attr("href")},error:function(){window.location=e.attr("href")},dataType:"json"})},a.prototype.onKeydownRemoveFromCart=function(a){" "===a.key&&(a.preventDefault(),t(this).trigger("click"))},a.prototype.updateButton=function(a,e,r,o){if(o=void 0!==o&&o){if(o.removeClass("loading"),e&&o.addClass("added"),e&&!wc_add_to_cart_params.is_cart&&0===o.parent().find(".added_to_cart").length){var d=document.createElement("a");d.href=wc_add_to_cart_params.cart_url,d.className="added_to_cart wc-forward",d.title=wc_add_to_cart_params.i18n_view_cart,d.textContent=wc_add_to_cart_params.i18n_view_cart,o.after(d)}t(document.body).trigger("wc_cart_button_updated",[o])}},a.prototype.updateFragments=function(a,e){e&&(t.each(e,function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),t.each(e,function(a,e){t(a).replaceWith(e),t(a).stop(!0).css("opacity","1").unblock()}),t(document.body).trigger("wc_fragments_loaded"))},a.prototype.alertCartUpdated=function(t,a,e,r){if(r=void 0!==r&&r){var o=r.data("success_message");if(!o)return;t.data.addToCartHandler.$liveRegion.delay(1e3).text(o).attr("aria-relevant","all")}},a.prototype.createLiveRegion=function(){var a=t(".widget_shopping_cart_live_region");return a.length?a:t('<div class="widget_shopping_cart_live_region screen-reader-text" role="status"></div>').appendTo("body")},a.prototype.onAddedToCart=function(t,a,e,r){t.data.addToCartHandler.updateButton(t,a,e,r),t.data.addToCartHandler.updateFragments(t,a),t.data.addToCartHandler.alertCartUpdated(t,a,e,r)},a.prototype.onRemovedFromCart=function(t,a,e,r){t.data.addToCartHandler.updateFragments(t,a),t.data.addToCartHandler.alertCartUpdated(t,a,e,r)},new a});
/*! js-cookie v3.0.5 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(f){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})});
function on_keydown_remove_from_cart(e){" "===e.key&&(e.preventDefault(),e.currentTarget.click())}function focus_populate_live_region(){var e=["woocommerce-message","woocommerce-error","wc-block-components-notice-banner"].map(function(e){return"."+e+'[role="alert"]'}).join(", "),o=document.querySelectorAll(e);if(0!==o.length){var t=o[0];t.setAttribute("tabindex","-1");var n=setTimeout(function(){t.focus(),clearTimeout(n)},500)}}function refresh_sorted_by_live_region(){var e=document.querySelector(".woocommerce-result-count");if(e){var o=e.innerHTML;e.setAttribute("aria-hidden","true");var t=setTimeout(function(){e.setAttribute("aria-hidden","false"),e.innerHTML="",e.innerHTML=o,clearTimeout(t)},2e3)}}function on_document_ready(){focus_populate_live_region(),refresh_sorted_by_live_region()}jQuery(function(e){e(".woocommerce-ordering").on("change","select.orderby",function(){e(this).closest("form").trigger("submit")}),e("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(e(this).attr("min"));o>=0&&parseFloat(e(this).val())<o&&e(this).val(o)});var o="store_notice"+(e(".woocommerce-store-notice").data("noticeId")||"");if("hidden"===Cookies.get(o))e(".woocommerce-store-notice").hide();else{function t(o){["Enter"," "].includes(o.key)&&(o.preventDefault(),e(".woocommerce-store-notice__dismiss-link").click())}e(".woocommerce-store-notice").show(),e(".woocommerce-store-notice__dismiss-link").on("click",function n(r){Cookies.set(o,"hidden",{path:"/"}),e(".woocommerce-store-notice").hide(),r.preventDefault(),e(".woocommerce-store-notice__dismiss-link").off("click",n).off("keydown",t)}).on("keydown",t)}e(".woocommerce-input-wrapper span.description").length&&e(document.body).on("click",function(){e(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),e(".woocommerce-input-wrapper").on("click",function(e){e.stopPropagation()}),e(".woocommerce-input-wrapper :input").on("keydown",function(o){var t=e(this).parent().find("span.description");if(27===o.which&&t.length&&t.is(":visible"))return t.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=e(this).parent(),t=o.find("span.description");o.addClass("currentTarget"),e(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),t.length&&t.is(":hidden")&&t.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),e.scroll_to_notices=function(o){o.length&&e("html, body").animate({scrollTop:o.offset().top-100},1e3)},e('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),e(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),e(".password-input").each(function(){const o=e(this).find("input").attr("id");e(this).append('<button type="button" class="show-password-input" aria-label="'+woocommerce_params.i18n_password_show+'" aria-describedBy="'+o+'"></button>')}),e(".show-password-input").on("click",function(o){o.preventDefault(),e(this).hasClass("display-password")?(e(this).removeClass("display-password"),e(this).attr("aria-label",woocommerce_params.i18n_password_show)):(e(this).addClass("display-password"),e(this).attr("aria-label",woocommerce_params.i18n_password_hide)),e(this).hasClass("display-password")?e(this).siblings(['input[type="password"]']).prop("type","text"):e(this).siblings('input[type="text"]').prop("type","password"),e(this).siblings("input").focus()}),e("a.coming-soon-footer-banner-dismiss").on("click",function(o){var t=e(o.target);e.ajax({type:"post",url:t.data("rest-url"),data:{woocommerce_meta:{coming_soon_banner_dismissed:"yes"}},beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",t.data("rest-nonce"))},complete:function(){e("#coming-soon-footer-banner").hide()}})}),"undefined"==typeof wc_add_to_cart_params&&e(document.body).on("keydown",".remove_from_cart_button",on_keydown_remove_from_cart),e(document.body).on("item_removed_from_classic_cart updated_wc_div",focus_populate_live_region)}),document.addEventListener("DOMContentLoaded",on_document_ready);
/*! This file is auto-generated */
!function(e,t){if("function"==typeof define&&define.amd)define("hoverintent",["module"],t);else if("undefined"!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e,n,o){function i(e,t){return y&&(y=clearTimeout(y)),b=0,p?void 0:o.call(e,t)}function r(e){m=e.clientX,d=e.clientY}function u(e,t){if(y&&(y=clearTimeout(y)),Math.abs(h-m)+Math.abs(E-d)<x.sensitivity)return b=1,p?void 0:n.call(e,t);h=m,E=d,y=setTimeout(function(){u(e,t)},x.interval)}function s(t){return L=!0,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1!==b&&(h=t.clientX,E=t.clientY,e.addEventListener("mousemove",r,!1),y=setTimeout(function(){u(e,t)},x.interval)),this}function c(t){return L=!1,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1===b&&(y=setTimeout(function(){i(e,t)},x.timeout)),this}function v(t){L||(p=!0,n.call(e,t))}function a(t){!L&&p&&(p=!1,o.call(e,t))}function f(){e.addEventListener("focus",v,!1),e.addEventListener("blur",a,!1)}function l(){e.removeEventListener("focus",v,!1),e.removeEventListener("blur",a,!1)}var m,d,h,E,L=!1,p=!1,T={},b=0,y=0,x={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return T.options=function(e){var n=e.handleFocus!==x.handleFocus;return x=t({},x,e),n&&(x.handleFocus?f():l()),T},T.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",c,!1),l())},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",c,!1)),T}});
window.socialWarfare = window.socialWarfare || {};
( function ( window, $ ) {
	'use strict';
	if ( typeof $ !== 'function' ) {
		if ( typeof jQuery === 'function' ) {
			var $ = jQuery;
		} else {
			console.log(
				'Social Warfare requires jQuery, or $ as an alias of jQuery. Please make sure your theme provides access to jQuery before activating Social Warfare.'
			);
			return;
		}
	}
	function isString( maybeString ) {
		return typeof maybeString === 'string' && maybeString.length > 0;
	}
	socialWarfare.paddingTop = parseInt( $( 'body' ).css( 'padding-top' ) );
	socialWarfare.paddingBottom = parseInt(
		$( 'body' ).css( 'padding-bottom' )
	);
	socialWarfare.initPlugin = function () {
		$( 'body' ).css( {
			paddingTop: socialWarfare.paddingTop,
			paddingBottom: socialWarfare.paddingBottom,
		} );
		socialWarfare.establishPanels();
		socialWarfare.establishBreakpoint();
		if (
			! socialWarfare.panels.staticHorizontal &&
			! socialWarfare.panels.floatingSide &&
			! socialWarfare.panels.floatingHorizontal
		) {
			return;
		}
		socialWarfare.emphasizeButtons();
		socialWarfare.createFloatHorizontalPanel();
		socialWarfare.positionFloatSidePanel();
		socialWarfare.activateHoverStates();
		socialWarfare.handleButtonClicks();
		socialWarfare.updateFloatingButtons();
		socialWarfare.closeLightboxOverlay();
		socialWarfare.preloadPinterestImages();
		if ( typeof swpPinIt === 'object' && swpPinIt.enabled == true ) {
			socialWarfare.createHoverSaveButton();
			socialWarfare.triggerImageListeners();
		}
		setTimeout( function () {
			socialWarfare.checkListeners( 0, 5 );
		}, 2e3 );
		let time = Date.now();
		const scrollDelay = 50;
		$( window ).on( 'scroll', function () {
			if ( time + scrollDelay - Date.now() < 0 ) {
				socialWarfare.updateFloatingButtons();
				time = Date.now();
			}
		} );
	};
	let resizeWait;
	socialWarfare.onWindowResize = function () {
		clearTimeout( resizeWait );
		resizeWait = setTimeout( socialWarfare.initPlugin, 100 );
	};
	socialWarfare.establishPanels = function () {
		socialWarfare.panels = {
			staticHorizontal: null,
			floatingSide: null,
			floatingHorizontal: null,
		};
		socialWarfare.panels.staticHorizontal = $( '.swp_social_panel' ).not(
			'.swp_social_panelSide'
		);
		socialWarfare.panels.floatingSide = $( '.swp_social_panelSide' );
		return socialWarfare.panels;
	};
	socialWarfare.emphasizeButtons = function () {
		if ( typeof socialWarfare.variables.emphasizeIcons === 'undefined' ) {
			return;
		}
		if ( socialWarfare.isMobile() ) {
			return;
		}
		jQuery( '.swp_social_panel:not(.swp_social_panelSide)' ).each(
			function ( i, panel ) {
				jQuery( panel )
					.find( '.nc_tweetContainer:not(.total_shares)' )
					.each( function ( index, button ) {
						if ( index < socialWarfare.variables.emphasizeIcons ) {
							const shareWidth = jQuery( button )
								.find( '.swp_share' )
								.width();
							const iconWidth = jQuery( button )
								.find( 'i.sw' )
								.outerWidth();
							const iconTextWidth = shareWidth + iconWidth + 35;
							const containerWidth = jQuery( button ).width();
							const change =
								1 + ( shareWidth + 35 ) / containerWidth;
							if ( change < 2 ) {
								jQuery( button )
									.addClass( 'swp_nohover' )
									.css( { flex: '2 1 0%' } )
									.find( '.iconFiller' )
									.width( iconTextWidth );
							} else {
								jQuery( button )
									.addClass( 'swp_nohover' )
									.css( { flex: change + ' 1 0%' } )
									.find( '.iconFiller' )
									.width( iconTextWidth );
							}
						}
					} );
			}
		);
	};
	socialWarfare.activateHoverStates = function () {
		socialWarfare.trigger( 'pre_activate_buttons' );
		$(
			'.swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer'
		).on( 'mouseenter', function () {
			if ( $( this ).hasClass( 'swp_nohover' ) ) {
				return;
			}
			socialWarfare.resetStaticPanel();
			const termWidth = $( this ).find( '.swp_share' ).outerWidth();
			const iconWidth = $( this ).find( 'i.sw' ).outerWidth();
			const containerWidth = $( this ).width();
			const change = 1 + ( termWidth + 35 ) / containerWidth;
			$( this )
				.find( '.iconFiller' )
				.width( termWidth + iconWidth + 25 + 'px' );
			$( this ).css( 'flex', change + ' 1 0%' );
		} );
		$( '.swp_social_panel:not(.swp_social_panelSide)' ).on(
			'mouseleave',
			socialWarfare.resetStaticPanel
		);
	};
	socialWarfare.resetStaticPanel = function () {
		$(
			'.swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover) .iconFiller'
		).removeAttr( 'style' );
		$(
			'.swp_social_panel:not(.swp_social_panelSide) .nc_tweetContainer:not(.swp_nohover)'
		).removeAttr( 'style' );
	};
	socialWarfare.handleButtonClicks = function () {
		$( '.nc_tweet, a.swp_CTT' ).off( 'click' );
		$( '.nc_tweet, a.swp_CTT' ).on( 'click', function ( event ) {
			if ( $( this ).parent( '.swp_print' ).length > 0 ) {
				event.preventDefault();
				window.print();
				return;
			}
			if (
				true === $( this ).hasClass( 'pinterest_multi_image_select' )
			) {
				event.preventDefault();
				socialWarfare.openMultiPinterestOverlay( $( this ) );
				return;
			}
			if ( $( this ).parent( '.swp_more' ).length > 0 ) {
				event.preventDefault();
				socialWarfare.openMoreOptions( $( this ) );
				return;
			}
			if ( $( this ).hasClass( 'noPop' ) ) {
				return event;
			}
			if (
				'undefined' === typeof $( this ).data( 'link' ) &&
				false === $( this ).is( '.swp-hover-pin-button' )
			) {
				return event;
			}
			event.preventDefault();
			const href = $( this ).data( 'link' ).replace( '’', "'" );
			let height, width, top, left, instance, windowAttributes, network;
			height = 270;
			width = 500;
			if (
				$( this ).is(
					'.swp_pinterest a, .buffer_link a, .flipboard a, .swp-hover-pin-button'
				)
			) {
				height = 550;
				width = 775;
			}
			if ( $( this ).hasClass( 'nc_tweet' ) ) {
				network = $( this )
					.parents( '.nc_tweetContainer' )
					.data( 'network' );
			} else if ( $( this ).hasClass( 'swp_CTT' ) ) {
				network = 'ctt';
			}
			top = window.screenY + ( window.innerHeight - height ) / 2;
			left = window.screenX + ( window.innerWidth - width ) / 2;
			windowAttributes =
				'height=' +
				height +
				',width=' +
				width +
				',top=' +
				top +
				',left=' +
				left;
			instance = window.open( href, network, windowAttributes );
			socialWarfare.trackClick( network );
		} );
	};
	socialWarfare.openMultiPinterestOverlay = function ( element ) {
		if ( $( '.pinterest-overlay' ).length > 0 ) {
			$( '.pinterest-overlay' ).fadeIn();
			$( '.swp-lightbox-inner' ).scrollTop( 0 );
			return;
		}
		let html = '';
		const pin_data = element.data( 'pins' );
		let pin_images = '';
		pin_data.images.forEach( function ( image ) {
			const share_url =
				'https://pinterest.com/pin/create/button/?url=' +
				pin_data.url +
				'&media=' +
				image +
				'&description=' +
				encodeURIComponent( pin_data.description );
			let pin_html = '';
			pin_html += '<div class="pin_image_select_wrapper">';
			pin_html += '<img class="pin_image" src="' + image + '" />';
			pin_html +=
				'<a class="swp-hover-pin-button" href="' +
				share_url +
				'" data-link="' +
				share_url +
				'">Save</a>';
			pin_html += '</div>';
			pin_images += pin_html;
		} );
		html +=
			'<div class="swp-lightbox-wrapper pinterest-overlay"><div class="swp-lightbox-inner">';
		html += '<i class="sw swp_pinterest_icon top_icon"></i>';
		html += '<div class="swp-lightbox-close"></div>';
		html += '<h5>Which image would you like to pin?</h5>';
		html += '<div class="pin_images_wrapper">';
		html += pin_images;
		html += '</div>';
		html += socialWarfare.buildPoweredByLink();
		html += '</div></div>';
		$( 'body' ).append( html );
		$( '.pinterest-overlay' ).hide().fadeIn();
		socialWarfare.handleButtonClicks();
		let max_height = 999999;
		let iteration = 0,
			images = $( '.pinterest-overlay .pin_images_wrapper img' );
		images.load( function () {
			if ( ++iteration === images.length ) {
				images
					.each( function () {
						if ( $( this ).height() < max_height ) {
							max_height = $( this ).height();
						}
					} )
					.promise()
					.done( function () {
						images.height( max_height + 'px' );
						const number_of_rows = Math.ceil( images.length / 4 );
						for ( i = 0; i < number_of_rows; i++ ) {
							const current_row_images = images.slice(
								i * 4,
								i * 4 + 4
							);
							var max_allowable_width =
								current_row_images.length / 4;
							var total_width = $(
								'.pin_images_wrapper'
							).width();
							var total_images_width = 0;
							current_row_images.each( function () {
								total_images_width =
									total_images_width + $( this ).width();
							} );
							var ratio = total_width / total_images_width;
							current_row_images.each( function () {
								const new_width =
									( ( $( this ).width() * ratio ) /
										total_width ) *
										100 *
										max_allowable_width -
									1;
								$( this )
									.parent()
									.width( new_width + '%' );
								$( this ).height( 'auto' );
							} );
							var height = current_row_images.first().height();
							current_row_images.each( function () {
								$( this )
									.width( $( this ).width() )
									.height( height );
							} );
						}
					} );
			}
		} );
	};
	socialWarfare.buildPoweredByLink = function () {
		let html = '';
		if ( true === socialWarfare.variables.powered_by_toggle ) {
			let anchor_tag_open = '';
			let anchor_tag_close = '';
			if ( false !== socialWarfare.variables.affiliate_link ) {
				anchor_tag_open =
					'<a href="' +
					socialWarfare.variables.affiliate_link +
					'" target="_blank">';
				anchor_tag_close = '</a>';
			}
			html =
				'<div class="swp_powered_by">' +
				anchor_tag_open +
				'<span>Powered by</span> <img src="/wp-content/plugins/social-warfare/assets/images/admin-options-page/social-warfare-pro-light.png">' +
				anchor_tag_close +
				'</div>';
		}
		return html;
	};
	socialWarfare.preloadPinterestImages = function () {
		if ( $( '.pinterest_multi_image_select' ).length < 1 ) {
			return;
		}
		const pin_data = $( '.pinterest_multi_image_select' ).data( 'pins' );
		pin_data.images.forEach( function ( image_url ) {
			const image_object = new Image();
			image_object.src = image_url;
		} );
	};
	socialWarfare.openMoreOptions = function ( element ) {
		if ( $( '.swp-more-wrapper' ).length > 0 ) {
			$( '.swp-more-wrapper' ).fadeIn();
			return;
		}
		const post_id = element
			.parents( '.swp_social_panel' )
			.data( 'post-id' );
		const data = {
			action: 'swp_buttons_panel',
			post_id,
			_ajax_nonce: swp_nonce,
		};
		jQuery.post( swp_ajax_url, data, function ( response ) {
			$( 'body' ).append( response );
			$( '.swp-lightbox-wrapper' ).hide().fadeIn();
			socialWarfare.activateHoverStates();
			socialWarfare.handleButtonClicks();
		} );
	};
	socialWarfare.closeLightboxOverlay = function () {
		$( 'body' ).on( 'click', '.swp-lightbox-close', function () {
			$( '.swp-lightbox-wrapper' ).fadeOut();
		} );
		$( document ).on( 'keyup', function ( e ) {
			if ( e.key === 'Escape' ) {
				$( '.swp-lightbox-wrapper' ).fadeOut();
			}
		} );
	};
	socialWarfare.createFloatHorizontalPanel = function () {
		if ( ! socialWarfare.panels.staticHorizontal.length ) {
			return;
		}
		const floatLocation =
			socialWarfare.panels.staticHorizontal.data( 'float' );
		const mobileFloatLocation =
			socialWarfare.panels.staticHorizontal.data( 'float-mobile' );
		const backgroundColor =
			socialWarfare.panels.staticHorizontal.data( 'float-color' );
		const wrapper = $(
			'<div class="nc_wrapper swp_floating_horizontal_wrapper" style="background-color:' +
				backgroundColor +
				'"></div>'
		);
		let barLocation = '';
		if ( $( '.nc_wrapper' ).length ) {
			$( '.nc_wrapper' ).remove();
		}
		if ( $( '.swp_floating_horizontal_wrapper' ).length ) {
			$( '.swp_floating_horizontal_wrapper' ).remove();
		}
		if (
			floatLocation != 'top' &&
			floatLocation != 'bottom' &&
			mobileFloatLocation != 'top' &&
			mobileFloatLocation != 'bottom'
		) {
			return;
		}
		if ( socialWarfare.isMobile() ) {
			barLocation = mobileFloatLocation;
		} else {
			barLocation = floatLocation;
		}
		wrapper.addClass( barLocation ).hide().appendTo( 'body' );
		socialWarfare.panels.floatingHorizontal =
			socialWarfare.panels.staticHorizontal.first().clone();
		socialWarfare.panels.floatingHorizontal
			.addClass( 'nc_floater' )
			.appendTo( wrapper );
		socialWarfare.updateFloatingHorizontalDimensions();
		$( '.swp_social_panel .swp_count' ).css( {
			transition: 'padding .1s linear',
		} );
	};
	socialWarfare.updateFloatingHorizontalDimensions = function () {
		if ( ! socialWarfare.panels.staticHorizontal.length ) {
			return;
		}
		if ( ! socialWarfare.panels.floatingHorizontal ) {
			return;
		}
		let width = '100%';
		let left = 0;
		const panel = socialWarfare.panels.staticHorizontal;
		let parent = panel.parent();
		if ( parent.hasClass( 'swp-hidden-panel-wrap' ) ) {
			parent = parent.parent();
		}
		if ( 'undefined' !== typeof panel.offset().left ) {
			left = panel.offset().left;
		}
		if ( 'undefined' !== typeof panel.width() ) {
			width = panel.width();
		}
		if ( left == 0 ) {
			left = parent.offset().left;
		}
		if ( width == 100 || width == 0 ) {
			width = parent.width();
		}
		socialWarfare.panels.floatingHorizontal.css( {
			width,
			left,
		} );
	};
	socialWarfare.staticPanelIsVisible = function () {
		let visible = false;
		const scrollPos = $( window ).scrollTop();
		$( '.swp_social_panel' )
			.not( '.swp_social_panelSide, .nc_floater' )
			.each( function ( index ) {
				const offset = $( this ).offset();
				if (
					typeof socialWarfare.floatBeforeContent !== 'undefined' &&
					'1' != socialWarfare.floatBeforeContent
				) {
					const theContent = $( '.swp-content-locator' ).parent();
					if (
						index === 0 &&
						theContent.length &&
						theContent.offset().top >
							scrollPos + $( window ).height()
					) {
						visible = true;
					}
				}
				if (
					$( this ).is( ':visible' ) &&
					offset.top + $( this ).height() > scrollPos &&
					offset.top < scrollPos + $( window ).height()
				) {
					visible = true;
				}
			} );
		return visible;
	};
	socialWarfare.updateFloatingButtons = function () {
		if ( socialWarfare.panels.staticHorizontal.length ) {
			var panel = socialWarfare.panels.staticHorizontal;
		} else if ( socialWarfare.panels.floatingSide.length ) {
			var panel = socialWarfare.panels.floatingSide;
		} else {
			return;
		}
		var location = panel.data( 'float' );
		if ( true == socialWarfare.isMobile() ) {
			var location = panel.data( 'float-mobile' );
		}
		if ( location == 'none' ) {
			return $(
				'.nc_wrapper, .swp_floating_horizontal_wrapper, .swp_social_panelSide'
			).hide();
		}
		if ( socialWarfare.isMobile() ) {
			socialWarfare.toggleMobileButtons();
			socialWarfare.toggleFloatingHorizontalPanel();
			return;
		}
		if ( location == 'right' || location == 'left' ) {
			socialWarfare.toggleFloatingVerticalPanel();
		}
		if ( location == 'bottom' || location == 'top' ) {
			socialWarfare.toggleFloatingHorizontalPanel();
		}
	};
	socialWarfare.toggleMobileButtons = function () {
		socialWarfare.panels.floatingSide.hide();
		const visibility = socialWarfare.staticPanelIsVisible()
			? 'collapse'
			: 'visible';
		$( '.nc_wrapper, .swp_floating_horizontal_wrapper' ).css(
			'visibility',
			visibility
		);
	};
	socialWarfare.toggleFloatingVerticalPanel = function () {
		let direction = '';
		const location = socialWarfare.panels.floatingSide.data( 'float' );
		let visible = socialWarfare.staticPanelIsVisible();
		let offset = '';
		if ( socialWarfare.isMobile() ) {
			return socialWarfare.panels.floatingSide.hide();
		}
		if (
			! socialWarfare.panels.floatingSide ||
			! socialWarfare.panels.floatingSide.length
		) {
			visible = true;
		}
		if (
			socialWarfare.panels.floatingSide.data( 'transition' ) == 'slide'
		) {
			direction = location;
			offset = visible ? '-150px' : '5px';
			socialWarfare.panels.floatingSide.css( direction, offset ).show();
		} else if ( visible ) {
			socialWarfare.panels.floatingSide
				.css( 'opacity', 1 )
				.fadeOut( 300 )
				.css( 'opacity', 0 );
		} else {
			socialWarfare.panels.floatingSide
				.css( 'opacity', 0 )
				.fadeIn( 300 )
				.css( 'display', 'flex' )
				.css( 'opacity', 1 );
		}
	};
	socialWarfare.hasReferencePanel = function () {
		return (
			typeof socialWarfare.panels.staticHorizontal !== 'undefined' &&
			socialWarfare.panels.staticHorizontal.length > 0
		);
	};
	socialWarfare.toggleFloatingHorizontalPanel = function () {
		if ( ! socialWarfare.hasReferencePanel() ) {
			return;
		}
		if ( ! socialWarfare.panels.floatingHorizontal ) {
			return;
		}
		const panel = socialWarfare.panels.floatingHorizontal.first();
		const location = socialWarfare.isMobile()
			? $( panel ).data( 'float-mobile' )
			: $( panel ).data( 'float' );
		let newPadding =
			location == 'bottom'
				? socialWarfare.paddingBottom
				: socialWarfare.paddingTop;
		const paddingProp = 'padding-' + location;
		if ( location == 'off' ) {
			return;
		}
		if ( socialWarfare.staticPanelIsVisible() ) {
			$( '.nc_wrapper, .swp_floating_horizontal_wrapper' ).hide();
			if ( socialWarfare.isMobile() && $( '#wpadminbar' ).length ) {
				$( '#wpadminbar' ).css( 'top', 0 );
			}
		} else {
			newPadding += 50;
			$( '.nc_wrapper, .swp_floating_horizontal_wrapper' ).show();
			if (
				socialWarfare.isMobile() &&
				location == 'top' &&
				$( '#wpadminbar' ).length
			) {
				$( '#wpadminbar' ).css( 'top', panel.parent().height() );
			}
		}
		$( 'body' ).css( paddingProp, newPadding );
	};
	socialWarfare.positionFloatSidePanel = function () {
		let panelHeight, windowHeight, offset;
		const sidePanel = socialWarfare.panels.floatingSide;
		if ( ! sidePanel || ! sidePanel.length ) {
			return;
		}
		if (
			sidePanel.hasClass( 'swp_side_top' ) ||
			sidePanel.hasClass( 'swp_side_bottom' )
		) {
			return;
		}
		panelHeight = sidePanel.outerHeight();
		windowHeight = window.innerHeight;
		if ( panelHeight > windowHeight ) {
			return sidePanel.css( 'top', 0 );
		}
		offset = ( windowHeight - panelHeight ) / 2;
		sidePanel.css( 'top', offset );
	};
	socialWarfare.createHoverSaveButton = function () {
		if ( $( '.tve_editor_page' ).length ) {
			$( '.sw-pinit-button' ).remove();
			$( '.sw-pinit' ).each( function () {
				const inner_content = $( '.sw-pinit' ).contents();
				$( this ).replaceWith( inner_content );
			} );
			return;
		}
		const button = $( document.createElement( 'a' ) );
		button.css( 'display: none' );
		button.addClass( 'swp-hover-pin-button' );
		button.text( 'Save' );
		socialWarfare.hoverSaveButton = $( button );
		return button;
	};
	socialWarfare.triggerImageListeners = function () {
		$( '.swp-content-locator' )
			.parent()
			.find( 'img' )
			.off( 'mouseenter', socialWarfare.renderPinterestSaveButton );
		$( '.swp-content-locator' )
			.parent()
			.find( 'img' )
			.on( 'mouseenter', socialWarfare.renderPinterestSaveButton );
		setTimeout( socialWarfare.triggerImageListeners, 2e3 );
	};
	socialWarfare.getPinMedia = function ( image ) {
		if ( isString( swpPinIt.image_source ) ) {
			return swpPinIt.image_source;
		}
		if ( isString( image.attr( 'src' ) ) ) {
			return image.attr( 'src' );
		}
		const dataSources = [ 'src', 'lazy-src', 'media' ];
		let media = '';
		dataSources.some( function ( maybeSource ) {
			if ( isString( image.data( maybeSource ) ) ) {
				media = image.data( maybeSource );
				return true;
			}
		} );
		if ( media == '' ) {
			return;
		}
		const i = $( '<img>' );
		i.attr( 'src', media );
		return i.prop( 'src' );
	};
	socialWarfare.getPinDescription = function ( image ) {
		if ( isString( image.data( 'pin-description' ) ) ) {
			return image.data( 'pin-description' );
		}
		if ( isString( swpPinIt.image_description ) ) {
			return swpPinIt.image_description;
		}
		if ( isString( image.attr( 'title' ) ) ) {
			return image.attr( 'title' );
		}
		if ( isString( image.attr( 'alt' ) ) ) {
			return image.attr( 'alt' );
		}
		if ( isString( swpPinIt.post_title ) ) {
			return swpPinIt.post_title;
		}
	};
	socialWarfare.enablePinterestSaveButtons = function () {
		jQuery( 'img' ).on( 'mouseenter', function () {
			const pinterestBrowserButtons =
				socialWarfare.findPinterestBrowserSaveButtons();
			if (
				typeof pinterestBrowserButtons !== 'undefined' &&
				pinterestBrowserButtons
			) {
				socialWarfare.removePinterestBrowserSaveButtons(
					pinterestBrowserButtons
				);
			}
		} );
	};
	socialWarfare.toggleHoverSaveDisplay = function ( image ) {
		let top = image.offset().top;
		let left = image.offset().left;
		const vMargin = 15;
		const hMargin = 15;
		const button_size = swpPinIt.button_size || 1;
		const buttonHeight = 24;
		const buttonWidth = 120;
		switch ( swpPinIt.vLocation ) {
			case 'top':
				top += vMargin;
				break;
			case 'middle':
				var offset =
					image.height() / 2 - vMargin / 2 - buttonHeight / 2;
				top += offset;
				break;
			case 'bottom':
				top += image.height() - vMargin - buttonHeight;
				break;
		}
		switch ( swpPinIt.hLocation ) {
			case 'left':
				left += hMargin;
				break;
			case 'center':
				var offset = image.width() / 2 - hMargin / 2 - buttonWidth / 2;
				left += offset;
				break;
			case 'right':
				left += image.width() - hMargin - buttonWidth;
				break;
		}
		socialWarfare.hoverSaveButton.css( {
			top,
			left,
			transform: 'scale(' + button_size + ')',
			'transform-origin': swpPinIt.vLocation + ' ' + swpPinIt.hLocation,
		} );
		image.on( 'mouseleave', function ( event ) {
			if (
				event.relatedTarget != null &&
				event.relatedTarget.className == 'swp-hover-pin-button'
			) {
				return;
			}
			$( '.swp-hover-pin-button' ).remove();
		} );
		$( document.body ).append( socialWarfare.hoverSaveButton );
	};
	socialWarfare.renderPinterestSaveButton = function ( event ) {
		if (
			event.relatedTarget &&
			event.relatedTarget.className == 'swp-hover-pin-button'
		) {
			return;
		}
		if ( $( '.swp-hover-pin-button' ).length > 0 ) {
			return;
		}
		const image = $( event.target );
		if (
			typeof swpPinIt.disableOnAnchors !== undefined &&
			swpPinIt.disableOnAnchors
		) {
			if ( image.parents().filter( 'a' ).length ) {
				return;
			}
		}
		if (
			image.outerHeight() < swpPinIt.minHeight ||
			image.outerWidth() < swpPinIt.minWidth
		) {
			return;
		}
		if ( image.hasClass( 'no_pin' ) || image.hasClass( 'no-pin' ) ) {
			return;
		}
		socialWarfare.toggleHoverSaveDisplay( image );
		const description = socialWarfare.getPinDescription( image );
		const media = socialWarfare.getPinMedia( image );
		const shareLink =
			'http://pinterest.com/pin/create/bookmarklet/?media=' +
			encodeURI( media ) +
			'&url=' +
			encodeURI( document.URL ) +
			'&is_video=false' +
			'&description=' +
			encodeURIComponent( description );
		function openPinterestDialogue( event ) {
			const offsetLeft = ( $( window ).width() - 775 ) / 2;
			const offsetTop = ( $( window ).height() - 550 ) / 2;
			const position = ',top=' + offsetTop + ',left=' + offsetLeft;
			window.open(
				shareLink,
				'Pinterest',
				'width=775,height=550,status=0,toolbar=0,menubar=0,location=1,scrollbars=1' +
					position
			);
			socialWarfare.trackClick( 'pin_image' );
			$( '.swp-hover-pin-button' ).remove();
		}
		$( '.swp-hover-pin-button' ).on( 'click', openPinterestDialogue );
	};
	socialWarfare.findPinterestBrowserSaveButtons = function () {
		let pinterestRed,
			pinterestRed2019,
			pinterestZIndex,
			pinterestBackgroundSize,
			button,
			style;
		pinterestRed = 'rgb(189, 8, 28)';
		pinterestRed2019 = 'rgb(230, 0, 35)';
		pinterestZIndex = '8675309';
		pinterestBackgroundSize = '14px 14px';
		button = null;
		document
			.querySelectorAll( 'span' )
			.forEach( function ( element, index ) {
				style = window.getComputedStyle( element );
				if (
					style.backgroundColor == pinterestRed ||
					style.backgroundColor == pinterestRed2019
				) {
					if (
						style.backgroundSize == pinterestBackgroundSize &&
						style.zIndex == pinterestZIndex
					) {
						button = element;
					}
				}
			} );
		return button;
	};
	socialWarfare.removePinterestBrowserSaveButtons = function ( button ) {
		let pinterestSquare, style, size;
		pinterestSquare = button.nextSibling;
		if (
			pinterestSquare != undefined &&
			pinterestSquare.nodeName == 'SPAN'
		) {
			style = window.getComputedStyle( pinterestSquare );
			size = '24px';
			if (
				style.width.indexOf( size ) === 0 &&
				style.height.indexOf( size ) === 0
			) {
				pinterestSquare.remove();
			}
		}
		button.remove();
	};
	socialWarfare.fetchFacebookShares = function () {
		const url1 =
			'https://graph.facebook.com/v18.0/?fields=og_object{engagement}&id=' +
			swp_post_url;
		const url2 = swp_post_recovery_url
			? 'https://graph.facebook.com/v18.0/?fields=og_object{engagement}&id=' +
			  swp_post_recovery_url
			: '';
		console.log( 'Facebook Share API: ' + url1 );
		console.log( 'Facebook Share API (recovery): ' + url2 );
		$.when( $.get( url1 ), $.get( url2 ) ).then(
			function ( response1, response2 ) {
				var shares, shares1, shares2, data;
				shares1 = socialWarfare.parseFacebookShares( response1[ 0 ] );
				shares2 = 0;
				if ( swp_post_recovery_url ) {
					shares2 = socialWarfare.parseFacebookShares(
						response2[ 0 ]
					);
				}
				shares = shares1;
				if ( shares1 !== shares2 ) {
					shares = shares1 + shares2;
				}
				var data = {
					action: 'swp_facebook_shares_update',
					post_id: swp_post_id,
					share_counts: shares,
				};
				$.post( swp_admin_ajax, data, function ( response ) {
					console.log( response );
				} );
			}
		);
	};
	socialWarfare.parseFacebookShares = function ( response ) {
		if ( 'undefined' === typeof response.og_object ) {
			console.log( 'Facebook Shares: 0' );
			return 0;
		}
		console.log(
			'Facebook Shares: ' + response.og_object.engagement.count
		);
		return parseInt( response.og_object.engagement.count );
	};
	socialWarfare.trigger = function ( event ) {
		$( window ).trigger( $.Event( event ) );
	};
	socialWarfare.trackClick = function ( event ) {
		if ( true === swpClickTracking ) {
			if ( 'function' === typeof ga ) {
				ga(
					'send',
					'event',
					'social_media',
					'swp_' + event + '_share'
				);
			}
			if ( 'object' === typeof dataLayer ) {
				dataLayer.push( { event: 'swp_' + event + '_share' } );
			}
		}
	};
	socialWarfare.checkListeners = function ( count, limit ) {
		if ( count > limit ) {
			return;
		}
		const panel = $( '.swp_social_panel' );
		if ( panel.length > 0 && panel.find( '.swp_pinterest' ) ) {
			socialWarfare.handleButtonClicks();
			return;
		}
		setTimeout( function () {
			socialWarfare.checkListeners( ++count, limit );
		}, 2e3 );
	};
	socialWarfare.establishBreakpoint = function () {
		const panel = $( '.swp_social_panel' );
		socialWarfare.breakpoint = 1100;
		if (
			( panel.length && panel.data( 'min-width' ) ) ||
			panel.data( 'min-width' ) == 0
		) {
			socialWarfare.breakpoint = parseInt( panel.data( 'min-width' ) );
		}
	};
	socialWarfare.isMobile = function () {
		return $( window ).width() < socialWarfare.breakpoint;
	};
	$( document ).ready( function () {
		socialWarfare.initPlugin();
		socialWarfare.panels.floatingSide.hide();
		$( window ).on( 'resize', socialWarfare.onWindowResize );
		if ( 'undefined' !== typeof swpPinIt && swpPinIt.enabled ) {
			socialWarfare.enablePinterestSaveButtons();
		}
	} );
	$( window ).on( 'load', function () {
		if ( 'undefined' !== typeof swpPinIt && swpPinIt.enabled ) {
			socialWarfare.enablePinterestSaveButtons();
		}
		window.clearCheckID = 0;
	} );
} )( this, jQuery );
;
;(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'));}else{factory(jQuery);}}(function($){var eventNamespace='waitForImages';var hasSrcset=(function(img){return img.srcset&&img.sizes;})(new Image());$.waitForImages={hasImageProperties:['backgroundImage','listStyleImage','borderImage','borderCornerImage','cursor'],hasImageAttributes:['srcset']};$.expr[':']['has-src']=function(obj){return $(obj).is('img[src][src!=""]');};$.expr[':'].uncached=function(obj){if(!$(obj).is(':has-src')){return false;}
return!obj.complete;};$.fn.waitForImages=function(){var allImgsLength=0;var allImgsLoaded=0;var deferred=$.Deferred();var originalCollection=this;var allImgs=[];var hasImgProperties=$.waitForImages.hasImageProperties||[];var hasImageAttributes=$.waitForImages.hasImageAttributes||[];var matchUrl=/url\(\s*(['"]?)(.*?)\1\s*\)/g;var finishedCallback;var eachCallback;var waitForAll;if($.isPlainObject(arguments[0])){waitForAll=arguments[0].waitForAll;eachCallback=arguments[0].each;finishedCallback=arguments[0].finished;}else{if(arguments.length===1&&$.type(arguments[0])==='boolean'){waitForAll=arguments[0];}else{finishedCallback=arguments[0];eachCallback=arguments[1];waitForAll=arguments[2];}}
finishedCallback=finishedCallback||$.noop;eachCallback=eachCallback||$.noop;waitForAll=!!waitForAll;if(!$.isFunction(finishedCallback)||!$.isFunction(eachCallback)){throw new TypeError('An invalid callback was supplied.');}
this.each(function(){var obj=$(this);if(waitForAll){obj.find('*').addBack().each(function(){var element=$(this);if(element.is('img:has-src')&&!element.is('[srcset]')){allImgs.push({src:element.attr('src'),element:element[0]});}
$.each(hasImgProperties,function(i,property){var propertyValue=element.css(property);var match;if(!propertyValue){return true;}
while(match=matchUrl.exec(propertyValue)){allImgs.push({src:match[2],element:element[0]});}});$.each(hasImageAttributes,function(i,attribute){var attributeValue=element.attr(attribute);var attributeValues;if(!attributeValue){return true;}
allImgs.push({src:element.attr('src'),srcset:element.attr('srcset'),element:element[0]});});});}else{obj.find('img:has-src').each(function(){allImgs.push({src:this.src,element:this});});}});allImgsLength=allImgs.length;allImgsLoaded=0;if(allImgsLength===0){finishedCallback.call(originalCollection);deferred.resolveWith(originalCollection);}
$.each(allImgs,function(i,img){var image=new Image();var events='load.'+eventNamespace+' error.'+eventNamespace;$(image).one(events,function me(event){var eachArguments=[allImgsLoaded,allImgsLength,event.type=='load'];allImgsLoaded++;eachCallback.apply(img.element,eachArguments);deferred.notifyWith(img.element,eachArguments);$(this).off(events,me);if(allImgsLoaded==allImgsLength){finishedCallback.call(originalCollection[0]);deferred.resolveWith(originalCollection[0]);return false;}});if(hasSrcset&&img.srcset){image.srcset=img.srcset;image.sizes=img.sizes;}
image.src=img.src;});return deferred.promise();};}));
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
;(function($){'use strict';$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]','object','embed'];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not('object object');$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('name')){var videoName='fitvid'+$.fn.fitVids._count;$this.attr('name',videoName);$.fn.fitVids._count++;}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+'%');$this.removeAttr('height').removeAttr('width');});});};$.fn.fitVids._count=0;})(window.jQuery||window.Zepto);;(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports!=='undefined'){module.exports=factory(require('jquery'));}else{factory(jQuery);}}(function($){'use strict';var Slick=window.Slick||{};Slick=(function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function(slider,i){return $('<button type="button" />').text(i+1);},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}
_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}
return Slick;}());Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof(index)==='boolean'){addBefore=index;index=null;}else if(index<0||(index>=_.slideCount)){return false;}
_.unload();if(typeof(index)==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}
if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-(_.currentLeft);}
$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+
now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+
now+'px)';_.$slideTrack.css(animProps);}},complete:function(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';}
_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}
return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;}
if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&(_.currentSlide+1)===(_.slideCount-1)){_.direction=0;}
else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}
_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}
if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}
if(_.options.infinite!==true){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));}
_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=(_.slideCount===0)?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}
$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass('draggable');}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>1){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=(a*slidesPerSection+((b*_.options.slidesPerRow)+c));if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}
slide.appendChild(row);}
newSlides.appendChild(slide);}
_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':(100/_.options.slidesPerRow)+'%','display':'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth;}else if(_.respondTo==='slider'){respondToWidth=sliderWidth;}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth);}
if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}
if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}
_.refresh(initial);}
triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}
_.refresh(initial);}
triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}
_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}
if(!initial&&triggerBreakpoint!==false){_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is('a')){event.preventDefault();}
if(!$target.is('li')){$target=$target.closest('li');}
unevenOffset=(_.slideCount%_.options.slidesToScroll!==0);indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}
break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}
break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}
prevNavigable=navigables[n];}}
return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off('keydown.slick',_.keyHandler);}}
_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.off('keydown.slick',_.keyHandler);_.$nextArrow.off('keydown.slick',_.keyHandler);}}
_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off('keydown.slick',_.keyHandler);}
if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off('click.slick',_.selectHandler);}
$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>1){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove();}
if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}
if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}
if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}
_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh){_.$slider.trigger('destroy',[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick','*',function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){_.focussed=$sf.is(':focus');_.autoPlay();}},0);});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty;}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}else if(_.options.centerMode===true){pagerQty=_.slideCount;}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}
return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=(_.slideWidth*_.options.slidesToShow)*-1;coef=-1
if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5;}else if(_.options.slidesToShow===1){coef=-2}}
verticalOffset=(verticalHeight*_.options.slidesToShow)*coef;}
if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth)*-1;verticalOffset=((_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight)*-1;}else{_.slideOffset=((_.slideCount%_.options.slidesToScroll)*_.slideWidth)*-1;verticalOffset=((_.slideCount%_.options.slidesToScroll)*verticalHeight)*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*_.slideWidth;verticalOffset=((slideIndex+_.options.slidesToShow)-_.slideCount)*verticalHeight;}}
if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}
if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=((_.slideWidth*Math.floor(_.options.slidesToShow))/2)-((_.slideWidth*_.slideCount)/2);}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}
if(_.options.vertical===false){targetLeft=((slideIndex*_.slideWidth)*-1)+_.slideOffset;}else{targetLeft=((slideIndex*verticalHeight)*-1)+verticalOffset;}
if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);}
if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}
if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);}
if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}
targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}
return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}
while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}
return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,centerOffset;centerOffset=_.options.centerMode===true?_.slideWidth*Math.floor(_.options.slidesToShow/2):0;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){if(slide.offsetLeft-centerOffset+($(slide).outerWidth()/2)>(_.swipeLeft*-1)){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}
if(creation){_.$slider.trigger('init',[_]);}
if(_.options.accessibility===true){_.initADA();}
if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return(val>=0)&&(val<_.slideCount);});_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({'role':'tabpanel','id':'slick-slide'+_.instanceUid+i,'tabindex':-1});if(slideControlIndex!==-1){$(this).attr({'aria-describedby':'slick-slide-control'+_.instanceUid+slideControlIndex});}});_.$dots.attr('role','tablist').find('li').each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({'role':'presentation'});$(this).find('button').first().attr({'role':'tab','id':'slick-slide-control'+_.instanceUid+i,'aria-controls':'slick-slide'+_.instanceUid+mappedSlideIndex,'aria-label':(i+1)+' of '+numDotGroups,'aria-selected':null,'tabindex':'-1'});}).eq(_.currentSlide).find('button').attr({'aria-selected':'true','tabindex':'0'}).end();}
for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){_.$slides.eq(i).attr('tabindex',0);}
_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on('keydown.slick',_.keyHandler);_.$nextArrow.on('keydown.slick',_.keyHandler);}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.accessibility===true){_.$dots.on('keydown.slick',_.keyHandler);}}
if(_.options.dots===true&&_.options.pauseOnDotsHover===true){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on('keydown.slick',_.keyHandler);}
if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}
$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}
if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}});}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}});}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}
image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');});_.$slider.trigger('lazyLoaded',[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);};imageToLoad.src=imageSource;});}
if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}}
loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++;}}
loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else
if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition();}
_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}
if(_.options.accessibility===true){_.initADA();if(!_.options.autoplay){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr('tabindex',0).focus();}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}
image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===true){_.setPosition();}
_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger('allImagesLoaded',[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&(_.currentSlide>lastVisibleIndex)){_.currentSlide=lastVisibleIndex;}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}
currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}
l--;}
_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}
_.breakpoints.sort(function(a,b){return(_.options.mobileFirst)?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}
_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}
_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof(index)==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}
if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}
_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}
_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}
x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:('0px '+_.options.centerPadding)});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:(_.options.centerPadding+' 0px')});}}
_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil((_.slideWidth*_.$slideTrack.children('.slick-slide').length)));}else if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length)));}
var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=(_.slideWidth*index)*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple';}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive';}else if(typeof arguments[1]!=='undefined'){type='single';}}
if(type==='single'){_.options[option]=value;}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val;});}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}
l--;}
_.options.responsive.push(value[item]);}}}
if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}
_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical');}else{_.$slider.removeClass('slick-vertical');}
if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}
if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}
if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}
if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;}
if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}
if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;}
if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';}
_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false);};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=(_.slideCount-1)-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');}
if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center');}}
_.$slides.eq(index).addClass('slick-center');}else{if(index>=0&&index<=(_.slideCount-_.options.slidesToShow)){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false');}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&(_.slideCount-index)<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}}}
if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}
if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}
for(i=_.slideCount;i>(_.slideCount-
infiniteCount);i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');}
for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');}
_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}
_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return;}
_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}
if(_.options.fade===true&&_.currentSlide===index){return;}
if(sync===false){_.asNavFor(index);}
targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}
return;}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>(_.slideCount-_.options.slidesToScroll))){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}
return;}
if(_.options.autoplay){clearInterval(_.autoPlayTimer);}
if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-(_.slideCount%_.options.slidesToScroll);}else{animSlide=_.slideCount+targetSlide;}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}
_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}
_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}
_.animateHeight();return;}
if(dontAnimate!==true){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}
if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}
_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}
if((swipeAngle<=45)&&(swipeAngle>=0)){return(_.options.rtl===false?'left':'right');}
if((swipeAngle<=360)&&(swipeAngle>=315)){return(_.options.rtl===false?'left':'right');}
if((swipeAngle>=135)&&(swipeAngle<=225)){return(_.options.rtl===false?'right':'left');}
if(_.options.verticalSwiping===true){if((swipeAngle>=35)&&(swipeAngle<=135)){return'down';}else{return'up';}}
return'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false;}
_.interrupted=false;_.shouldClick=(_.touchObject.swipeLength>10)?false:true;if(_.touchObject.curX===undefined){return false;}
if(_.touchObject.edgeHit===true){_.$slider.trigger('edge',[_,_.swipeDirection()]);}
if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}
if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if((_.options.swipe===false)||('ontouchend'in document&&_.options.swipe===false)){return;}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1){return;}
_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}
switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false;}
curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false;}
if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength;}
swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault();}
positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}
swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if((_.currentSlide===0&&swipeDirection==='right')||(_.currentSlide>=_.getDotCount()&&swipeDirection==='left')){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}
if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+(swipeLength*(_.$list.height()/_.listWidth))*positionOffset;}
if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}
if(_.options.fade===true||_.options.touchMove===false){return false;}
if(_.animating===true){_.swipeLeft=null;return false;}
_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}
if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}
_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove();}
if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}
if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}
_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').end();_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active');}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=='object'||typeof opt=='undefined')
_[i].slick=new Slick(_[i],opt);else
ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;}
return _;};}));(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";var t={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=function(){var e=0;return function(){var t=e;return e+=1,".perfect-scrollbar-"+t}}();e.fn.perfectScrollbar=function(o,r){return this.each(function(){var l=e.extend(!0,{},t),a=e(this);if("object"==typeof o?e.extend(!0,l,o):r=o,"update"===r)return a.data("perfect-scrollbar-update")&&a.data("perfect-scrollbar-update")(),a;if("destroy"===r)return a.data("perfect-scrollbar-destroy")&&a.data("perfect-scrollbar-destroy")(),a;if(a.data("perfect-scrollbar"))return a.data("perfect-scrollbar");a.addClass("ps-container");var s,i,c,u,d,p,f,h,v,g,b=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(a),m=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(a),w=e("<div class='ps-scrollbar-x'></div>").appendTo(b),T=e("<div class='ps-scrollbar-y'></div>").appendTo(m),y=parseInt(b.css("bottom"),10),L=parseInt(m.css("right"),10),S=n(),x=function(e,t){var n=e+t,o=u-v;g=0>n?0:n>o?o:n;var r=parseInt(g*(p-u)/(u-v),10);a.scrollTop(r),b.css({bottom:y-r})},M=function(e,t){var n=e+t,o=c-f;h=0>n?0:n>o?o:n;var r=parseInt(h*(d-c)/(c-f),10);a.scrollLeft(r),m.css({right:L-r})},P=function(e){return l.minScrollbarLength&&(e=Math.max(e,l.minScrollbarLength)),e},X=function(){b.css({left:a.scrollLeft(),bottom:y-a.scrollTop(),width:c,display:s?"inherit":"none"}),m.css({top:a.scrollTop(),right:L-a.scrollLeft(),height:u,display:i?"inherit":"none"}),w.css({left:h,width:f}),T.css({top:g,height:v})},D=function(){c=l.includePadding?a.innerWidth():a.width(),u=l.includePadding?a.innerHeight():a.height(),d=a.prop("scrollWidth"),p=a.prop("scrollHeight"),!l.suppressScrollX&&d>c+l.scrollXMarginOffset?(s=!0,f=P(parseInt(c*c/d,10)),h=parseInt(a.scrollLeft()*(c-f)/(d-c),10)):(s=!1,f=0,h=0,a.scrollLeft(0)),!l.suppressScrollY&&p>u+l.scrollYMarginOffset?(i=!0,v=P(parseInt(u*u/p,10)),g=parseInt(a.scrollTop()*(u-v)/(p-u),10)):(i=!1,v=0,g=0,a.scrollTop(0)),g>=u-v&&(g=u-v),h>=c-f&&(h=c-f),X()},I=function(){var t,n;w.bind("mousedown"+S,function(e){n=e.pageX,t=w.position().left,b.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+S,function(e){b.hasClass("in-scrolling")&&(M(t,e.pageX-n),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+S,function(){b.hasClass("in-scrolling")&&b.removeClass("in-scrolling")}),t=n=null},Y=function(){var t,n;T.bind("mousedown"+S,function(e){n=e.pageY,t=T.position().top,m.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+S,function(e){m.hasClass("in-scrolling")&&(x(t,e.pageY-n),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+S,function(){m.hasClass("in-scrolling")&&m.removeClass("in-scrolling")}),t=n=null},k=function(e,t){var n=a.scrollTop();if(0===e){if(!i)return!1;if(0===n&&t>0||n>=p-u&&0>t)return!l.wheelPropagation}
var o=a.scrollLeft();if(0===t){if(!s)return!1;if(0===o&&0>e||o>=d-c&&e>0)return!l.wheelPropagation}
return!0},C=function(){l.wheelSpeed/=10;var e=!1;a.bind("mousewheel"+S,function(t,n,o,r){var c=t.deltaX*t.deltaFactor||o,u=t.deltaY*t.deltaFactor||r;e=!1,l.useBothWheelAxes?i&&!s?(u?a.scrollTop(a.scrollTop()-u*l.wheelSpeed):a.scrollTop(a.scrollTop()+c*l.wheelSpeed),e=!0):s&&!i&&(c?a.scrollLeft(a.scrollLeft()+c*l.wheelSpeed):a.scrollLeft(a.scrollLeft()-u*l.wheelSpeed),e=!0):(a.scrollTop(a.scrollTop()-u*l.wheelSpeed),a.scrollLeft(a.scrollLeft()+c*l.wheelSpeed)),D(),e=e||k(c,u),e&&(t.stopPropagation(),t.preventDefault())}),a.bind("MozMousePixelScroll"+S,function(t){e&&t.preventDefault()})},j=function(){var t=!1;a.bind("mouseenter"+S,function(){t=!0}),a.bind("mouseleave"+S,function(){t=!1});var n=!1;e(document).bind("keydown"+S,function(o){if(t&&!e(document.activeElement).is(":input,[contenteditable]")){var r=0,l=0;switch(o.which){case 37:r=-30;break;case 38:l=30;break;case 39:r=30;break;case 40:l=-30;break;case 33:l=90;break;case 32:case 34:l=-90;break;case 35:l=-u;break;case 36:l=u;break;default:return}
a.scrollTop(a.scrollTop()-l),a.scrollLeft(a.scrollLeft()+r),n=k(r,l),n&&o.preventDefault()}})},O=function(){var e=function(e){e.stopPropagation()};T.bind("click"+S,e),m.bind("click"+S,function(e){var t=parseInt(v/2,10),n=e.pageY-m.offset().top-t,o=u-v,r=n/o;0>r?r=0:r>1&&(r=1),a.scrollTop((p-u)*r)}),w.bind("click"+S,e),b.bind("click"+S,function(e){var t=parseInt(f/2,10),n=e.pageX-b.offset().left-t,o=c-f,r=n/o;0>r?r=0:r>1&&(r=1),a.scrollLeft((d-c)*r)})},E=function(){var t=function(e,t){a.scrollTop(a.scrollTop()-t),a.scrollLeft(a.scrollLeft()-e),D()},n={},o=0,r={},l=null,s=!1;e(window).bind("touchstart"+S,function(){s=!0}),e(window).bind("touchend"+S,function(){s=!1}),a.bind("touchstart"+S,function(e){var t=e.originalEvent.targetTouches[0];n.pageX=t.pageX,n.pageY=t.pageY,o=(new Date).getTime(),null!==l&&clearInterval(l),e.stopPropagation()}),a.bind("touchmove"+S,function(e){if(!s&&1===e.originalEvent.targetTouches.length){var l=e.originalEvent.targetTouches[0],a={};a.pageX=l.pageX,a.pageY=l.pageY;var i=a.pageX-n.pageX,c=a.pageY-n.pageY;t(i,c),n=a;var u=(new Date).getTime(),d=u-o;d>0&&(r.x=i/d,r.y=c/d,o=u),e.preventDefault()}}),a.bind("touchend"+S,function(){clearInterval(l),l=setInterval(function(){return.01>Math.abs(r.x)&&.01>Math.abs(r.y)?(clearInterval(l),void 0):(t(30*r.x,30*r.y),r.x*=.8,r.y*=.8,void 0)},10)})},H=function(){a.bind("scroll"+S,function(){D()})},A=function(){a.unbind(S),e(window).unbind(S),e(document).unbind(S),a.data("perfect-scrollbar",null),a.data("perfect-scrollbar-update",null),a.data("perfect-scrollbar-destroy",null),w.remove(),T.remove(),b.remove(),m.remove(),w=T=c=u=d=p=f=h=y=v=g=L=null},W=function(t){a.addClass("ie").addClass("ie"+t);var n=function(){var t=function(){e(this).addClass("hover")},n=function(){e(this).removeClass("hover")};a.bind("mouseenter"+S,t).bind("mouseleave"+S,n),b.bind("mouseenter"+S,t).bind("mouseleave"+S,n),m.bind("mouseenter"+S,t).bind("mouseleave"+S,n),w.bind("mouseenter"+S,t).bind("mouseleave"+S,n),T.bind("mouseenter"+S,t).bind("mouseleave"+S,n)},o=function(){X=function(){w.css({left:h+a.scrollLeft(),bottom:y,width:f}),T.css({top:g+a.scrollTop(),right:L,height:v}),w.hide().show(),T.hide().show()}};6===t&&(n(),o())},q="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,F=function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&W(parseInt(e[2],10)),D(),H(),I(),Y(),O(),q&&E(),a.mousewheel&&C(),l.useKeyboard&&j(),a.data("perfect-scrollbar",a),a.data("perfect-scrollbar-update",D),a.data("perfect-scrollbar-destroy",A)};return F(),a})}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var a=t||window.event,s=i.call(arguments,1),c=0,u=0,d=0,p=0;if(t=e.event.fix(a),t.type="mousewheel","detail"in a&&(d=-1*a.detail),"wheelDelta"in a&&(d=a.wheelDelta),"wheelDeltaY"in a&&(d=a.wheelDeltaY),"wheelDeltaX"in a&&(u=-1*a.wheelDeltaX),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(u=-1*d,d=0),c=0===d?u:d,"deltaY"in a&&(d=-1*a.deltaY,c=d),"deltaX"in a&&(u=a.deltaX,0===d&&(c=-1*u)),0!==d||0!==u){if(1===a.deltaMode){var f=e.data(this,"mousewheel-line-height");c*=f,d*=f,u*=f}else if(2===a.deltaMode){var h=e.data(this,"mousewheel-page-height");c*=h,d*=h,u*=h}
return p=Math.max(Math.abs(d),Math.abs(u)),(!l||l>p)&&(l=p,o(a,p)&&(l/=40)),o(a,p)&&(c/=40,u/=40,d/=40),c=Math[c>=1?"floor":"ceil"](c/l),u=Math[u>=1?"floor":"ceil"](u/l),d=Math[d>=1?"floor":"ceil"](d/l),t.deltaX=u,t.deltaY=d,t.deltaFactor=l,t.deltaMode=0,s.unshift(t,c,u,d),r&&clearTimeout(r),r=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,s)}}
function n(){l=null}
function o(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&0===t%120}
var r,l,a=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],s="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(e.event.fixHooks)
for(var c=a.length;c;)e.event.fixHooks[a[--c]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)
for(var n=s.length;n;)this.addEventListener(s[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)
for(var e=s.length;e;)this.removeEventListener(s[--e],t,!1);else this.onmousewheel=null},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});(function(){var $,win;$=this.jQuery||window.jQuery;win=$(window);$.fn.stick_in_parent=function(opts){var doc,elm,enable_bottoming,fn,i,inner_scrolling,len,manual_spacer,offset_top,parent_selector,recalc_every,sticky_class;if(opts==null){opts={};}
sticky_class=opts.sticky_class,inner_scrolling=opts.inner_scrolling,recalc_every=opts.recalc_every,parent_selector=opts.parent,offset_top=opts.offset_top,manual_spacer=opts.spacer,enable_bottoming=opts.bottoming;if(offset_top==null){offset_top=0;}
if(parent_selector==null){parent_selector=void 0;}
if(inner_scrolling==null){inner_scrolling=true;}
if(sticky_class==null){sticky_class="is_stuck";}
doc=$(document);if(enable_bottoming==null){enable_bottoming=true;}
fn=function(elm,padding_bottom,parent_top,parent_height,top,height,el_float,detached){var bottomed,detach,fixed,last_pos,last_scroll_height,offset,parent,recalc,recalc_and_tick,recalc_counter,spacer,tick;if(elm.data("sticky_kit")){return;}
elm.data("sticky_kit",true);last_scroll_height=doc.height();parent=elm.parent();if(parent_selector!=null){parent=parent.closest(parent_selector);}
if(!parent.length){throw"failed to find stick parent";}
fixed=false;bottomed=false;spacer=manual_spacer!=null?manual_spacer&&elm.closest(manual_spacer):$("<div />");if(spacer){spacer.css('position',elm.css('position'));}
recalc=function(){var border_top,padding_top,restore;if(detached){return;}
last_scroll_height=doc.height();border_top=parseInt(parent.css("border-top-width"),10);padding_top=parseInt(parent.css("padding-top"),10);padding_bottom=parseInt(parent.css("padding-bottom"),10);parent_top=parent.offset().top+border_top+padding_top;parent_height=parent.height();if(fixed){fixed=false;bottomed=false;if(manual_spacer==null){elm.insertAfter(spacer);spacer.detach();}
elm.css({position:"",top:"",width:"",bottom:""}).removeClass(sticky_class);restore=true;}
top=elm.offset().top-(parseInt(elm.css("margin-top"),10)||0)-offset_top;height=elm.outerHeight(true);el_float=elm.css("float");if(spacer){spacer.css({width:elm.outerWidth(true),height:height,display:elm.css("display"),"vertical-align":elm.css("vertical-align"),"float":el_float});}
if(restore){return tick();}};recalc();if(height===parent_height){return;}
last_pos=void 0;offset=offset_top;recalc_counter=recalc_every;tick=function(){var css,delta,recalced,scroll,will_bottom,win_height;if(detached){return;}
recalced=false;if(recalc_counter!=null){recalc_counter-=1;if(recalc_counter<=0){recalc_counter=recalc_every;recalc();recalced=true;}}
if(!recalced&&doc.height()!==last_scroll_height){recalc();recalced=true;}
scroll=win.scrollTop();if(last_pos!=null){delta=scroll-last_pos;}
last_pos=scroll;if(fixed){if(enable_bottoming){will_bottom=scroll+height+offset>parent_height+parent_top;if(bottomed&&!will_bottom){bottomed=false;elm.css({position:"fixed",bottom:"",top:offset}).trigger("sticky_kit:unbottom");}}
if(scroll<top){fixed=false;offset=offset_top;if(manual_spacer==null){if(el_float==="left"||el_float==="right"){elm.insertAfter(spacer);}
spacer.detach();}
css={position:"",width:"",top:""};elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");}
if(inner_scrolling){win_height=win.height();if(height+offset_top>win_height){if(!bottomed){offset-=delta;offset=Math.max(win_height-height,offset);offset=Math.min(offset_top,offset);if(fixed){elm.css({top:offset+"px"});}}}}}else{if(scroll>top){fixed=true;css={position:"fixed",top:offset};css.width=elm.css("box-sizing")==="border-box"?elm.outerWidth()+"px":elm.width()+"px";elm.css(css).addClass(sticky_class);if(manual_spacer==null){elm.after(spacer);if(el_float==="left"||el_float==="right"){spacer.append(elm);}}
elm.trigger("sticky_kit:stick");}}
if(fixed&&enable_bottoming){if(will_bottom==null){will_bottom=scroll+height+offset>parent_height+parent_top;}
if(!bottomed&&will_bottom){bottomed=true;if(parent.css("position")==="static"){parent.css({position:"relative"});}
return elm.css({position:"absolute",bottom:padding_bottom,top:"auto"}).trigger("sticky_kit:bottom");}}};recalc_and_tick=function(){recalc();return tick();};detach=function(){detached=true;win.off("touchmove",tick);win.off("scroll",tick);win.off("resize",recalc_and_tick);$(document.body).off("sticky_kit:recalc",recalc_and_tick);elm.off("sticky_kit:detach",detach);elm.removeData("sticky_kit");elm.css({position:"",bottom:"",top:"",width:""});parent.position("position","");if(fixed){if(manual_spacer==null){if(el_float==="left"||el_float==="right"){elm.insertAfter(spacer);}
spacer.remove();}
return elm.removeClass(sticky_class);}};win.on("touchmove",tick);win.on("scroll",tick);win.on("resize",recalc_and_tick);$(document.body).on("sticky_kit:recalc",recalc_and_tick);elm.on("sticky_kit:detach",detach);return setTimeout(tick,0);};for(i=0,len=this.length;i<len;i++){elm=this[i];fn($(elm));}
return this;};}).call(this);
$=jQuery;jQuery(document).ready(function($){"use strict";$('#top-menu, #main-menu').find('li').on('mouseenter',function(){$(this).children('.sub-menu').stop().fadeIn(200);}).on('mouseleave',function(){$(this).children('.sub-menu').stop().fadeOut(200);});$('.mobile-menu-btn').on('click',function(){$('.mobile-menu-container').slideToggle();});$('#mobile-menu .menu-item-has-children').prepend('<div class="sub-menu-btn"></div>');$('#mobile-menu .sub-menu').before('<span class="sub-menu-btn-icon"><i class="fa-solid fa-angle-down"></i></span>');$('.sub-menu-btn').click(function(){$(this).closest('li').children('.sub-menu').slideToggle();$(this).closest('li').children('.sub-menu-btn-icon').children('i').toggleClass('fa-rotate-270');});$('.main-nav-icons').after($('.main-nav-search #searchform').remove());var mainNavSearch=$('#main-nav #searchform');mainNavSearch.find('#s').attr('placeholder',mainNavSearch.find('#s').data('placeholder'));$('.main-nav-search').click(function(){if(mainNavSearch.css('display')==='none'){mainNavSearch.show();$('.main-nav-search i:last-of-type').show();$('.main-nav-search i:first-of-type').hide();$('.dark-mode-switcher').css('visibility','hidden');}else{mainNavSearch.hide();$('.main-nav-search i:last-of-type').hide();$('.main-nav-search i:first-of-type').show();$('.dark-mode-switcher').css('visibility','visible');}});var RTL=false;if($('html').attr('dir')=='rtl'){RTL=true;}
$('#featured-slider').slick({prevArrow:'<span class="prev-arrow icon-left-open-big"></span>',nextArrow:'<span class="next-arrow icon-right-open-big"></span>',dotsClass:'slider-dots',adaptiveHeight:true,rtl:RTL,speed:750,customPaging:function(slider,i){return'';}});var singleNav=$('.single-navigation'),headerHeight=$('#page-header').outerHeight();$(window).scroll(function(){if($(this).scrollTop()>headerHeight){singleNav.fadeIn();}else{singleNav.fadeOut();}});$('.sidebar-alt').perfectScrollbar({suppressScrollX:true,includePadding:true,wheelSpeed:3.5});$('.main-nav-sidebar').on('click',function(){$('.sidebar-alt').css('left','0');$('.sidebar-alt-close').fadeIn(500);});function asheAltSidebarClose(){var leftPosition=parseInt($(".sidebar-alt").outerWidth(),10)+30;$('.sidebar-alt').css('left','-'+leftPosition+'px');$('.sidebar-alt-close').fadeOut(500);}
$('.sidebar-alt-close, .sidebar-alt-close-btn').on('click',function(){asheAltSidebarClose();});$('.scrolltop').on('click',function(){$('html, body').animate({scrollTop:0},800);return false;});$(window).on('scroll',function(){if($(this).scrollTop()>=800){$('.scrolltop').fadeIn(350);}else{$('.scrolltop').fadeOut(350);}});var darkModeSwitcher=$('.dark-mode-switcher');if(darkModeSwitcher.length===1){var boxedBackground='';if($('body').hasClass('ashe-boxed-style')){boxedBackground='.featured-slider-area #featured-slider,#featured-links,.category-description,.author-description,.comments-area,article.post,article.blog-post,.single .related-posts,.page-content article.page,.sidebar-left .ashe-widget,.sidebar-right .ashe-widget,.page-footer-inner,.blog-pagination,main#main{background:#333!important}';}
var darkModeCSS='<style id="ashe_dark_mode">.cssload-cube { background: #fff; !important}body{background: #222222 !important;}.mc4wp-form-fields,.widget_wysija_cont{background-color:#272727!important}#top-bar{background-color:#111}#top-bar a{color:#fff}#top-menu .sub-menu,#top-menu .sub-menu a{background-color:#111;border-color:rgba(0,0,0,0.35)}#main-nav{background-color:#111;box-shadow:0 1px 5px rgba(0,0,0,0.3)}#featured-links h6{background-color:rgba(34,34,34,0.85);color:#c4c4c4}#main-nav a,#main-nav i,#main-nav #s{color:#fff}.main-nav-sidebar span,.sidebar-alt-close-btn span{background-color:#fff}#main-menu .sub-menu,#main-menu .sub-menu a{background-color:#111;border-color:rgba(0,0,0,0.35)}#main-nav #s{background-color:#111}#main-nav #s::-webkit-input-placeholder{color:rgba(0,0,0,0.3)}#main-nav #s::-moz-placeholder{color:rgba(0,0,0,0.3)}#main-nav #s:-ms-input-placeholder{color:rgba(0,0,0,0.3)}#main-nav #s:-moz-placeholder{color:rgba(0,0,0,0.3)}.sidebar-alt,#featured-links,.main-content,.featured-slider-area,.page-content select,.page-content input,.page-content textarea{background-color:#222}.page-content,.page-content select,.page-content input,.page-content textarea,.page-content .post-author a,.page-content .ashe-widget a,.page-content .comment-author{color:#c4c4c4}.page-content h1,.page-content h2,.page-content h3,.page-content h4,.page-content h5,.page-content h6,.page-content .post-title a,.page-content .author-description h4 a,.page-content .related-posts h4 a,.page-content .blog-pagination .previous-page a,.page-content .blog-pagination .next-page a,blockquote,.page-content .post-share a{color:#fff}.page-content .post-title a:hover{color:rgba(255,255,255,0.75)}.page-content .post-date,.page-content .post-comments,.page-content .post-author,.page-content [data-layout*="list"] .post-author a,.page-content .related-post-date,.page-content .comment-meta a,.page-content .author-share a,.page-content .post-tags a,.page-content .tagcloud a,.widget_categories li,.widget_archive li,.ahse-subscribe-box p,.rpwwt-post-author,.rpwwt-post-categories,.rpwwt-post-date,.rpwwt-post-comments-number{color:#9e9e9e}.page-content input::-webkit-input-placeholder{color:#9e9e9e}.page-content input::-moz-placeholder{color:#9e9e9e}.page-content input:-ms-input-placeholder{color:#9e9e9e}.page-content input:-moz-placeholder{color:#9e9e9e}.ashe-boxed-style #searchform i{background:#ccc;color:#222}.widget_search i,.widget_search #searchsubmit,.single-navigation i,.page-content .submit,.page-content .blog-pagination.numeric a,.page-content .blog-pagination.load-more a,.page-content .ashe-subscribe-box input[type="submit"],.page-content .widget_wysija input[type="submit"],.page-content .post-password-form input[type="submit"],.page-content .wpcf7 [type="submit"]{color:#c4c4c4;background-color:#333}.ashe-boxed-style .page-content .blog-pagination.numeric a,.ashe-boxed-style.woocommerce .page-content .woocommerce-pagination ul li a { background: #272727; }.image-overlay,#infscr-loading,.page-content h4.image-overlay{background-color:rgba(0,0,0,0.3)}#page-footer,#page-footer select,#page-footer input,#page-footer textarea,.select2-container--default .select2-selection--single{background-color:#222}#page-footer,#page-footer a,#page-footer select,#page-footer input,#page-footer textarea{color:#c4c4c4}#page-footer #s::-webkit-input-placeholder{color:#c4c4c4}#page-footer #s::-moz-placeholder{color:#c4c4c4}#page-footer #s:-ms-input-placeholder{color:#c4c4c4}#page-footer #s:-moz-placeholder{color:#c4c4c4}#page-footer h1,#page-footer h2,#page-footer h3,#page-footer h4,#page-footer h5,#page-footer h6{color:#fff}.ashe-preloader-wrap{background-color:#333}.woocommerce div.product .stock,.woocommerce div.product p.price,.woocommerce div.product span.price,.woocommerce ul.products li.product .price,.woocommerce-Reviews .woocommerce-review__author,.woocommerce form .form-row .required,.woocommerce form .form-row.woocommerce-invalid label,.woocommerce .page-content div.product .woocommerce-tabs ul.tabs li a{color:#c4c4c4}.woocommerce a.remove:hover{color:#c4c4c4!important}.woocommerce a.remove,.woocommerce .product_meta,.page-content .woocommerce-breadcrumb,.page-content .woocommerce-review-link,.page-content .woocommerce-breadcrumb a,.page-content .woocommerce-MyAccount-navigation-link a,.woocommerce .woocommerce-info:before,.woocommerce .page-content .woocommerce-result-count,.woocommerce-page .page-content .woocommerce-result-count,.woocommerce-Reviews .woocommerce-review__published-date,.woocommerce .product_list_widget .quantity,.woocommerce .widget_products .amount,.woocommerce .widget_price_filter .price_slider_amount,.woocommerce .widget_recently_viewed_products .amount,.woocommerce .widget_top_rated_products .amount,.woocommerce .widget_recent_reviews .reviewer{color:#9e9e9e}.woocommerce a.remove{color:#9e9e9e!important}.woocommerce-cart #payment,#add_payment_method #payment,.woocommerce-checkout #payment,.woocommerce .woocommerce-info,.woocommerce .woocommerce-error,.woocommerce .woocommerce-message,.woocommerce div.product .woocommerce-tabs ul.tabs li{background-color:rgba(56,56,56,0.3)!important}.woocommerce-cart #payment div.payment_box::before,#add_payment_method #payment div.payment_box::before,.woocommerce-checkout #payment div.payment_box::before{border-color:rgba(56,56,56,0.5)}.woocommerce-cart #payment div.payment_box,#add_payment_method #payment div.payment_box,.woocommerce-checkout #payment div.payment_box{background-color:rgba(56,56,56,0.5)}.page-content .woocommerce input.button,.page-content .woocommerce a.button,.page-content .woocommerce a.button.alt,.page-content .woocommerce button.button.alt,.page-content .woocommerce input.button.alt,.page-content .woocommerce #respond input#submit.alt,.woocommerce .page-content .widget_product_search input[type="submit"],.woocommerce .page-content .woocommerce-message .button,.woocommerce .page-content a.button.alt,.woocommerce .page-content button.button.alt,.woocommerce .page-content #respond input#submit,.woocommerce .page-content .widget_price_filter .button,.woocommerce .page-content .woocommerce-message .button,.woocommerce-page .page-content .woocommerce-message .button,.woocommerce .page-content nav.woocommerce-pagination ul li a,.woocommerce .page-content nav.woocommerce-pagination ul li span{color:#c4c4c4;background-color:#333}.woocommerce .page-content nav.woocommerce-pagination ul li a.prev,.woocommerce .page-content nav.woocommerce-pagination ul li a.next{color:#333}.woocommerce .page-content nav.woocommerce-pagination ul li a.prev:after,.woocommerce .page-content nav.woocommerce-pagination ul li a.next:after{color:#fff}.woocommerce .page-content nav.woocommerce-pagination ul li a.prev:hover:after,.woocommerce .page-content nav.woocommerce-pagination ul li a.next:hover:after{color:#fff}.ashe-dropcaps .post-content>p:first-of-type:first-letter{color:#fff!important}.sticky{background:#2f2f2f}body.ashe-dark-mode img{filter:brightness(.8) contrast(1.2)}.widget-title h2:before,.widget-title h2:after{border-color:#969696!important}::-webkit-input-placeholder{color:#c4c4c4!important}:-ms-input-placeholder{color:#c4c4c4!important}::placeholder{color:#c4c4c4!important}#page-footer{background:#333}.woocommerce form.login,.woocommerce form.register,.woocommerce-account fieldset,.woocommerce form.checkout_coupon,.woocommerce .woocommerce-info,.woocommerce .woocommerce-error,.woocommerce .woocommerce-message,.woocommerce .widget_shopping_cart .total,.woocommerce.widget_shopping_cart .total,.woocommerce-Reviews .comment_container,.woocommerce-cart #payment ul.payment_methods,#add_payment_method #payment ul.payment_methods,.woocommerce-checkout #payment ul.payment_methods,.woocommerce div.product .woocommerce-tabs ul.tabs::before,.woocommerce div.product .woocommerce-tabs ul.tabs::after,.woocommerce div.product .woocommerce-tabs ul.tabs li,.woocommerce .woocommerce-MyAccount-navigation-link,.select2-container--default .select2-selection--single,.page-content .post-footer,[data-layout*="list"] .blog-grid>li,.page-content .author-description,.page-content .related-posts,.page-content .entry-comments,.page-content .ashe-widget li,.page-content #wp-calendar,.page-content #wp-calendar caption,.page-content #wp-calendar tbody td,.page-content .widget_nav_menu li a,.page-content .tagcloud a,.page-content select,.page-content input,.page-content textarea,.widget-title h2:before,.widget-title h2:after,.post-tags a,.gallery-caption,.wp-caption-text,table tr,table th,table td,pre,.category-description,#page-footer a,#page-footer .ashe-widget li,#page-footer #wp-calendar,#page-footer #wp-calendar caption,#page-footer #wp-calendar tbody td,#page-footer .widget_nav_menu li a,#page-footer select,#page-footer input,#page-footer textarea,#page-footer .widget-title h2:before,#page-footer .widget-title h2:after,.footer-widgets{border-color:#6d6d6d}hr,#page-footer hr{background-color:#6d6d6d}.ashe-boxed-style .page-content .woocommerce .wc-proceed-to-checkout a.button,.ashe-boxed-style.woocommerce .page-content button.button.alt,.page-content .woocommerce button.button.alt,.ashe-boxed-style .page-content .submit{background:#222}.ashe-boxed-style.woocommerce .woocommerce-message,.ashe-boxed-style .woocommerce .woocommerce-notice,.ashe-boxed-style .woocommerce-form-coupon-toggle .woocommerce-info,.ashe-boxed-style.woocommerce .woocommerce-error,.ashe-boxed-style.woocommerce .page-content #respond input#submit{color:#ccc;background:#222!important}.woocommerce table.shop_table{border-color:#6d6d6d}.woocommerce table.shop_table td,#add_payment_method .cart-collaterals .cart_totals tr td,#add_payment_method .cart-collaterals .cart_totals tr th,.woocommerce-cart .cart-collaterals .cart_totals tr td,.woocommerce-cart .cart-collaterals .cart_totals tr th,.woocommerce-checkout .cart-collaterals .cart_totals tr td,.woocommerce-checkout .cart-collaterals .cart_totals tr th,.woocommerce table.shop_table tfoot th{border-color:#6d6d6d!important}.ashe-boxed-style .related-posts,.ashe-boxed-style .author-description { border-bottom: 0;}.post-content > p:first-of-type:first-letter { color: #c4c4c4 !important;}#main-menu .sub-menu a,#top-menu .sub-menu a{border-color:rgba(255,255,255,0.15)}.ashe-dropcaps .post-content>p:first-of-type:first-letter{color:#fff!important}.woocommerce .woocommerce-message,.woocommerce .woocommerce-notice,.woocommerce-form-coupon-toggle .woocommerce-info,.woocommerce .woocommerce-error,.woocommerce .page-content #respond input#submit{color:#c4c4c4;border-color:#848383}'+boxedBackground+'</style>';darkModeSwitcher.on('click',function(){var body=$('body');if(body.hasClass('ashe-dark-mode')){body.removeClass('ashe-dark-mode');localStorage.setItem('asheDarkMode','off');darkModeSwitcher.find('i').removeAttr('class').addClass('fa-regular fa-moon');$('style#ashe_dark_mode').remove();}else{body.addClass('ashe-dark-mode');localStorage.setItem('asheDarkMode','on');darkModeSwitcher.find('i').removeAttr('class').addClass('fa-regular fa-sun');$('head').append(darkModeCSS);}});if('on'===localStorage.getItem('asheDarkMode')){$('body').addClass('ashe-dark-mode');darkModeSwitcher.find('i').removeAttr('class').addClass('fa-regular fa-sun');$('head').append(darkModeCSS);}}else{if('on'===localStorage.getItem('asheDarkMode')){localStorage.setItem('asheDarkMode','off');}}
$(window).on('resize',function(){if($('.mobile-menu-btn').css('display')==='none'){$('.mobile-menu-container').css({'display':'none'});}
asheStickySidebar();asheAltSidebarClose();});$('.slider-item, .post-media').fitVids();});jQuery(window).on('load',function(){asheStickySidebar();ashePreloader();});function ashePreloader(){if($('.ashe-preloader-wrap').length){setTimeout(function(){$('.ashe-preloader-wrap > div').fadeOut(600);$('.ashe-preloader-wrap').fadeOut(1500);},300);if($('body').hasClass('elementor-editor-active')){setTimeout(function(){$('.ashe-preloader-wrap > div').fadeOut(600);$('.ashe-preloader-wrap').fadeOut(1500);},300);}}}
function asheStickySidebar(){if($('.main-content').data('sidebar-sticky')===1){var SidebarOffset=0;if($("#main-nav").attr('data-fixed')==='1'){SidebarOffset=40;}
$('.sidebar-left,.sidebar-right').stick_in_parent({parent:".main-content",offset_top:SidebarOffset,spacer:'.sidebar-left-wrap,.sidebar-right-wrap'});if($('.mobile-menu-btn').css('display')!=='none'){$('.sidebar-left,.sidebar-right').trigger("sticky_kit:detach");}}};
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.sbjs=e()}}(function(){return function e(t,r,n){function a(s,o){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var p=r[s]={exports:{}};t[s][0].call(p.exports,function(e){var r=t[s][1][e];return a(r||e)},p,p.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(e,t,r){"use strict";var n=e("./init"),a={init:function(e){this.get=n(e),e&&e.callback&&"function"==typeof e.callback&&e.callback(this.get)}};t.exports=a},{"./init":6}],2:[function(e,t,r){"use strict";var n=e("./terms"),a=e("./helpers/utils"),i={containers:{current:"sbjs_current",current_extra:"sbjs_current_add",first:"sbjs_first",first_extra:"sbjs_first_add",session:"sbjs_session",udata:"sbjs_udata",promocode:"sbjs_promo"},service:{migrations:"sbjs_migrations"},delimiter:"|||",aliases:{main:{type:"typ",source:"src",medium:"mdm",campaign:"cmp",content:"cnt",term:"trm",id:"id",platform:"plt",format:"fmt",tactic:"tct"},extra:{fire_date:"fd",entrance_point:"ep",referer:"rf"},session:{pages_seen:"pgs",current_page:"cpg"},udata:{visits:"vst",ip:"uip",agent:"uag"},promo:"code"},pack:{main:function(e){return i.aliases.main.type+"="+e.type+i.delimiter+i.aliases.main.source+"="+e.source+i.delimiter+i.aliases.main.medium+"="+e.medium+i.delimiter+i.aliases.main.campaign+"="+e.campaign+i.delimiter+i.aliases.main.content+"="+e.content+i.delimiter+i.aliases.main.term+"="+e.term+i.delimiter+i.aliases.main.id+"="+e.id+i.delimiter+i.aliases.main.platform+"="+e.platform+i.delimiter+i.aliases.main.format+"="+e.format+i.delimiter+i.aliases.main.tactic+"="+e.tactic},extra:function(e){return i.aliases.extra.fire_date+"="+a.setDate(new Date,e)+i.delimiter+i.aliases.extra.entrance_point+"="+document.location.href+i.delimiter+i.aliases.extra.referer+"="+(document.referrer||n.none)},user:function(e,t){return i.aliases.udata.visits+"="+e+i.delimiter+i.aliases.udata.ip+"="+t+i.delimiter+i.aliases.udata.agent+"="+navigator.userAgent},session:function(e){return i.aliases.session.pages_seen+"="+e+i.delimiter+i.aliases.session.current_page+"="+document.location.href},promo:function(e){return i.aliases.promo+"="+a.setLeadingZeroToInt(a.randomInt(e.min,e.max),e.max.toString().length)}}};t.exports=i},{"./helpers/utils":5,"./terms":9}],3:[function(e,t,r){"use strict";var n=e("../data").delimiter;t.exports={useBase64:!1,setBase64Flag:function(e){this.useBase64=e},encodeData:function(e){return encodeURIComponent(e).replace(/\!/g,"%21").replace(/\~/g,"%7E").replace(/\*/g,"%2A").replace(/\'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29")},decodeData:function(e){try{return decodeURIComponent(e).replace(/\%21/g,"!").replace(/\%7E/g,"~").replace(/\%2A/g,"*").replace(/\%27/g,"'").replace(/\%28/g,"(").replace(/\%29/g,")")}catch(t){try{return unescape(e)}catch(r){return""}}},set:function(e,t,r,n,a){var i,s;if(r){var o=new Date;o.setTime(o.getTime()+60*r*1e3),i="; expires="+o.toGMTString()}else i="";s=n&&!a?";domain=."+n:"";var c=this.encodeData(t);this.useBase64&&(c=btoa(c).replace(/=+$/,"")),document.cookie=this.encodeData(e)+"="+c+i+s+"; path=/"},get:function(e){for(var t=this.encodeData(e)+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var a=r[n];" "===a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(t)){var i=a.substring(t.length,a.length);if(/^[A-Za-z0-9+/]+$/.test(i))try{i=atob(i.padEnd(4*Math.ceil(i.length/4),"="))}catch(s){}return this.decodeData(i)}}return null},destroy:function(e,t,r){this.set(e,"",-1,t,r)},parse:function(e){var t=[],r={};if("string"==typeof e)t.push(e);else for(var a in e)e.hasOwnProperty(a)&&t.push(e[a]);for(var i=0;i<t.length;i++){var s;r[this.unsbjs(t[i])]={},s=this.get(t[i])?this.get(t[i]).split(n):[];for(var o=0;o<s.length;o++){var c=s[o].split("="),u=c.splice(0,1);u.push(c.join("=")),r[this.unsbjs(t[i])][u[0]]=this.decodeData(u[1])}}return r},unsbjs:function(e){return e.replace("sbjs_","")}}},{"../data":2}],4:[function(e,t,r){"use strict";t.exports={parse:function(e){for(var t=this.parseOptions,r=t.parser[t.strictMode?"strict":"loose"].exec(e),n={},a=14;a--;)n[t.key[a]]=r[a]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(e,r,a){r&&(n[t.q.name][r]=a)}),n},parseOptions:{strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},getParam:function(e){for(var t={},r=(e||window.location.search.substring(1)).split("&"),n=0;n<r.length;n++){var a=r[n].split("=");if("undefined"==typeof t[a[0]])t[a[0]]=a[1];else if("string"==typeof t[a[0]]){var i=[t[a[0]],a[1]];t[a[0]]=i}else t[a[0]].push(a[1])}return t},getHost:function(e){return this.parse(e).host.replace("www.","")}}},{}],5:[function(e,t,r){"use strict";t.exports={escapeRegexp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},setDate:function(e,t){var r=e.getTimezoneOffset()/60,n=e.getHours(),a=t||0===t?t:-r;return e.setHours(n+r+a),e.getFullYear()+"-"+this.setLeadingZeroToInt(e.getMonth()+1,2)+"-"+this.setLeadingZeroToInt(e.getDate(),2)+" "+this.setLeadingZeroToInt(e.getHours(),2)+":"+this.setLeadingZeroToInt(e.getMinutes(),2)+":"+this.setLeadingZeroToInt(e.getSeconds(),2)},setLeadingZeroToInt:function(e,t){for(var r=e+"";r.length<t;)r="0"+r;return r},randomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}},{}],6:[function(e,t,r){"use strict";var n=e("./data"),a=e("./terms"),i=e("./helpers/cookies"),s=e("./helpers/uri"),o=e("./helpers/utils"),c=e("./params"),u=e("./migrations");t.exports=function(e){var t,r,p,f,m,d,l,g,h,y,_,v,b,x=c.fetch(e),k=s.getParam(),w=x.domain.host,q=x.domain.isolate,I=x.lifetime;function j(e){switch(e){case a.traffic.utm:t=a.traffic.utm,r="undefined"!=typeof k.utm_source?k.utm_source:"undefined"!=typeof k.gclid?"google":"undefined"!=typeof k.yclid?"yandex":a.none,p="undefined"!=typeof k.utm_medium?k.utm_medium:"undefined"!=typeof k.gclid?"cpc":"undefined"!=typeof k.yclid?"cpc":a.none,f="undefined"!=typeof k.utm_campaign?k.utm_campaign:"undefined"!=typeof k[x.campaign_param]?k[x.campaign_param]:"undefined"!=typeof k.gclid?"google_cpc":"undefined"!=typeof k.yclid?"yandex_cpc":a.none,m="undefined"!=typeof k.utm_content?k.utm_content:"undefined"!=typeof k[x.content_param]?k[x.content_param]:a.none,l=k.utm_id||a.none,g=k.utm_source_platform||a.none,h=k.utm_creative_format||a.none,y=k.utm_marketing_tactic||a.none,d="undefined"!=typeof k.utm_term?k.utm_term:"undefined"!=typeof k[x.term_param]?k[x.term_param]:function(){var e=document.referrer;if(k.utm_term)return k.utm_term;if(!(e&&s.parse(e).host&&s.parse(e).host.match(/^(?:.*\.)?yandex\..{2,9}$/i)))return!1;try{return s.getParam(s.parse(document.referrer).query).text}catch(t){return!1}}()||a.none;break;case a.traffic.organic:t=a.traffic.organic,r=r||s.getHost(document.referrer),p=a.referer.organic,f=a.none,m=a.none,d=a.none,l=a.none,g=a.none,h=a.none,y=a.none;break;case a.traffic.referral:t=a.traffic.referral,r=r||s.getHost(document.referrer),p=p||a.referer.referral,f=a.none,m=s.parse(document.referrer).path,d=a.none,l=a.none,g=a.none,h=a.none,y=a.none;break;case a.traffic.typein:t=a.traffic.typein,r=x.typein_attributes.source,p=x.typein_attributes.medium,f=a.none,m=a.none,d=a.none,l=a.none,g=a.none,h=a.none,y=a.none;break;default:t=a.oops,r=a.oops,p=a.oops,f=a.oops,m=a.oops,d=a.oops,l=a.oops,g=a.oops,h=a.oops,y=a.oops}var i={type:t,source:r,medium:p,campaign:f,content:m,term:d,id:l,platform:g,format:h,tactic:y};return n.pack.main(i)}function R(e){var t=document.referrer;switch(e){case a.traffic.organic:return!!t&&H(t)&&function(e){var t=new RegExp("^(?:.*\\.)?"+o.escapeRegexp("yandex")+"\\..{2,9}$"),n=new RegExp(".*"+o.escapeRegexp("text")+"=.*"),a=new RegExp("^(?:www\\.)?"+o.escapeRegexp("google")+"\\..{2,9}$");if(s.parse(e).query&&s.parse(e).host.match(t)&&s.parse(e).query.match(n))return r="yandex",!0;if(s.parse(e).host.match(a))return r="google",!0;if(!s.parse(e).query)return!1;for(var i=0;i<x.organics.length;i++){if(s.parse(e).host.match(new RegExp("^(?:.*\\.)?"+o.escapeRegexp(x.organics[i].host)+"$","i"))&&s.parse(e).query.match(new RegExp(".*"+o.escapeRegexp(x.organics[i].param)+"=.*","i")))return r=x.organics[i].display||x.organics[i].host,!0;if(i+1===x.organics.length)return!1}}(t);case a.traffic.referral:return!!t&&H(t)&&function(e){if(!(x.referrals.length>0))return r=s.getHost(e),!0;for(var t=0;t<x.referrals.length;t++){if(s.parse(e).host.match(new RegExp("^(?:.*\\.)?"+o.escapeRegexp(x.referrals[t].host)+"$","i")))return r=x.referrals[t].display||x.referrals[t].host,p=x.referrals[t].medium||a.referer.referral,!0;if(t+1===x.referrals.length)return r=s.getHost(e),!0}}(t);default:return!1}}function H(e){if(x.domain){if(q)return s.getHost(e)!==s.getHost(w);var t=new RegExp("^(?:.*\\.)?"+o.escapeRegexp(w)+"$","i");return!s.getHost(e).match(t)}return s.getHost(e)!==s.getHost(document.location.href)}function D(){i.set(n.containers.current_extra,n.pack.extra(x.timezone_offset),I,w,q),i.get(n.containers.first_extra)||i.set(n.containers.first_extra,n.pack.extra(x.timezone_offset),I,w,q)}return i.setBase64Flag(x.base64),u.go(I,w,q),i.set(n.containers.current,function(){var e;if("undefined"!=typeof k.utm_source||"undefined"!=typeof k.utm_medium||"undefined"!=typeof k.utm_campaign||"undefined"!=typeof k.utm_content||"undefined"!=typeof k.utm_term||"undefined"!=typeof k.utm_id||"undefined"!=typeof k.utm_source_platform||"undefined"!=typeof k.utm_creative_format||"undefined"!=typeof k.utm_marketing_tactic||"undefined"!=typeof k.gclid||"undefined"!=typeof k.yclid||"undefined"!=typeof k[x.campaign_param]||"undefined"!=typeof k[x.term_param]||"undefined"!=typeof k[x.content_param])D(),e=j(a.traffic.utm);else if(R(a.traffic.organic))D(),e=j(a.traffic.organic);else if(!i.get(n.containers.session)&&R(a.traffic.referral))D(),e=j(a.traffic.referral);else{if(i.get(n.containers.first)||i.get(n.containers.current))return i.get(n.containers.current);D(),e=j(a.traffic.typein)}return e}(),I,w,q),i.get(n.containers.first)||i.set(n.containers.first,i.get(n.containers.current),I,w,q),i.get(n.containers.udata)?(_=parseInt(i.parse(n.containers.udata)[i.unsbjs(n.containers.udata)][n.aliases.udata.visits])||1,_=i.get(n.containers.session)?_:_+1,v=n.pack.user(_,x.user_ip)):(_=1,v=n.pack.user(_,x.user_ip)),i.set(n.containers.udata,v,I,w,q),i.get(n.containers.session)?(b=parseInt(i.parse(n.containers.session)[i.unsbjs(n.containers.session)][n.aliases.session.pages_seen])||1,b+=1):b=1,i.set(n.containers.session,n.pack.session(b),x.session_length,w,q),x.promocode&&!i.get(n.containers.promocode)&&i.set(n.containers.promocode,n.pack.promo(x.promocode),I,w,q),i.parse(n.containers)}},{"./data":2,"./helpers/cookies":3,"./helpers/uri":4,"./helpers/utils":5,"./migrations":7,"./params":8,"./terms":9}],7:[function(e,t,r){"use strict";var n=e("./data"),a=e("./helpers/cookies");t.exports={go:function(e,t,r){var i,s=this.migrations,o={l:e,d:t,i:r};if(a.get(n.containers.first)||a.get(n.service.migrations)){if(!a.get(n.service.migrations))for(i=0;i<s.length;i++)s[i].go(s[i].id,o)}else{var c=[];for(i=0;i<s.length;i++)c.push(s[i].id);var u="";for(i=0;i<c.length;i++)u+=c[i]+"=1",i<c.length-1&&(u+=n.delimiter);a.set(n.service.migrations,u,o.l,o.d,o.i)}},migrations:[{id:"1418474375998",version:"1.0.0-beta",go:function(e,t){var r=e+"=1",i=e+"=0",s=function(e,t,r){return t||r?e:n.delimiter};try{var o=[];for(var c in n.containers)n.containers.hasOwnProperty(c)&&o.push(n.containers[c]);for(var u=0;u<o.length;u++)if(a.get(o[u])){var p=a.get(o[u]).replace(/(\|)?\|(\|)?/g,s);a.destroy(o[u],t.d,t.i),a.destroy(o[u],t.d,!t.i),a.set(o[u],p,t.l,t.d,t.i)}a.get(n.containers.session)&&a.set(n.containers.session,n.pack.session(0),t.l,t.d,t.i),a.set(n.service.migrations,r,t.l,t.d,t.i)}catch(f){a.set(n.service.migrations,i,t.l,t.d,t.i)}}}]}},{"./data":2,"./helpers/cookies":3}],8:[function(e,t,r){"use strict";var n=e("./terms"),a=e("./helpers/uri");t.exports={fetch:function(e){var t=e||{},r={};if(r.lifetime=this.validate.checkFloat(t.lifetime)||6,r.lifetime=parseInt(30*r.lifetime*24*60),r.session_length=this.validate.checkInt(t.session_length)||30,r.timezone_offset=this.validate.checkInt(t.timezone_offset),r.base64=t.base64||!1,r.campaign_param=t.campaign_param||!1,r.term_param=t.term_param||!1,r.content_param=t.content_param||!1,r.user_ip=t.user_ip||n.none,t.promocode?(r.promocode={},r.promocode.min=parseInt(t.promocode.min)||1e5,r.promocode.max=parseInt(t.promocode.max)||999999):r.promocode=!1,t.typein_attributes&&t.typein_attributes.source&&t.typein_attributes.medium?(r.typein_attributes={},r.typein_attributes.source=t.typein_attributes.source,r.typein_attributes.medium=t.typein_attributes.medium):r.typein_attributes={source:"(direct)",medium:"(none)"},t.domain&&this.validate.isString(t.domain)?r.domain={host:t.domain,isolate:!1}:t.domain&&t.domain.host?r.domain=t.domain:r.domain={host:a.getHost(document.location.hostname),isolate:!1},r.referrals=[],t.referrals&&t.referrals.length>0)for(var i=0;i<t.referrals.length;i++)t.referrals[i].host&&r.referrals.push(t.referrals[i]);if(r.organics=[],t.organics&&t.organics.length>0)for(var s=0;s<t.organics.length;s++)t.organics[s].host&&t.organics[s].param&&r.organics.push(t.organics[s]);return r.organics.push({host:"bing.com",param:"q",display:"bing"}),r.organics.push({host:"yahoo.com",param:"p",display:"yahoo"}),r.organics.push({host:"about.com",param:"q",display:"about"}),r.organics.push({host:"aol.com",param:"q",display:"aol"}),r.organics.push({host:"ask.com",param:"q",display:"ask"}),r.organics.push({host:"globososo.com",param:"q",display:"globo"}),r.organics.push({host:"go.mail.ru",param:"q",display:"go.mail.ru"}),r.organics.push({host:"rambler.ru",param:"query",display:"rambler"}),r.organics.push({host:"tut.by",param:"query",display:"tut.by"}),r.referrals.push({host:"t.co",display:"twitter.com"}),r.referrals.push({host:"plus.url.google.com",display:"plus.google.com"}),r},validate:{checkFloat:function(e){return!(!e||!this.isNumeric(parseFloat(e)))&&parseFloat(e)},checkInt:function(e){return!(!e||!this.isNumeric(parseInt(e)))&&parseInt(e)},isNumeric:function(e){return!isNaN(e)},isString:function(e){return"[object String]"===Object.prototype.toString.call(e)}}}},{"./helpers/uri":4,"./terms":9}],9:[function(e,t,r){"use strict";t.exports={traffic:{utm:"utm",organic:"organic",referral:"referral",typein:"typein"},referer:{referral:"referral",organic:"organic",social:"social"},none:"(none)",oops:"(Houston, we have a problem)"}},{}]},{},[1])(1)});
!function(t){"use strict";const e=t.params,n=(document.querySelector.bind(document),(t,e)=>e.split(".").reduce((t,e)=>t&&t[e],t)),s=()=>null,i=t=>null===t||t===undefined?"":t,o="wc/store/checkout";function a(t){window.wp&&window.wp.data&&window.wp.data.dispatch&&window.wc&&window.wc.wcBlocksData&&window.wp.data.dispatch(window.wc.wcBlocksData.CHECKOUT_STORE_KEY).setExtensionData("woocommerce/order-attribution",t,!0)}function r(){return"undefined"!=typeof sbjs}function c(){if(window.wp&&window.wp.data&&"function"==typeof window.wp.data.subscribe){const e=window.wp.data.subscribe(function(){e(),a(t.getAttributionData())},o)}}t.getAttributionData=function(){const i=e.allowTracking&&r()?n:s,o=r()?sbjs.get:{},a=Object.entries(t.fields).map(([t,e])=>[t,i(o,e)]);return Object.fromEntries(a)},t.setOrderTracking=function(n){if(e.allowTracking=n,n){if(!r())return;sbjs.init({lifetime:Number(e.lifetime),session_length:Number(e.session),base64:Boolean(e.base64),timezone_offset:"0"})}else!function(){const t=window.location.hostname;["sbjs_current","sbjs_current_add","sbjs_first","sbjs_first_add","sbjs_session","sbjs_udata","sbjs_migrations","sbjs_promo"].forEach(e=>{document.cookie=`${e}=; path=/; max-age=-999; domain=.${t};`})}();const s=t.getAttributionData();!function(t){for(const e of document.querySelectorAll("wc-order-attribution-inputs"))e.values=t}(s),a(s)},t.setOrderTracking(e.allowTracking),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",c):c(),window.customElements.define("wc-order-attribution-inputs",class extends HTMLElement{constructor(){if(super(),this._fieldNames=Object.keys(t.fields),this.hasOwnProperty("_values")){let t=this.values;delete this.values,this.values=t||{}}}connectedCallback(){this.innerHTML="";const t=new DocumentFragment;for(const n of this._fieldNames){const s=document.createElement("input");s.type="hidden",s.name=`${e.prefix}${n}`,s.value=i(this.values&&this.values[n]||""),t.appendChild(s)}this.appendChild(t)}set values(t){if(this._values=t,this.isConnected)for(const t of this._fieldNames){const n=this.querySelector(`input[name="${e.prefix}${t}"]`);n?n.value=i(this.values[t]):console.warn(`Field "${t}" not found. `+"Most likely, the '<wc-order-attribution-inputs>' element was manipulated.")}}get values(){return this._values}})}(window.wc_order_attribution);
jQuery(document).ready(function()
{var percentage=jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar').attr('percentage');var rotate=percentage*1.8;jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate('+rotate+'deg)','-ms-transform':'rotate('+rotate+'deg)','transform':'rotate('+rotate+'deg)'});jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .inset').css('background-color',jQuery('#wp-admin-bar-autoptimize .ab-sub-wrapper').css('background-color'));jQuery('#wp-admin-bar-autoptimize-delete-cache .ab-item').css('background-color',jQuery('#wpadminbar').css('background-color'));jQuery('#wp-admin-bar-autoptimize-default li').on('click',function(e)
{var id=(typeof e.target.id!='undefined'&&e.target.id)?e.target.id:jQuery(e.target).parent('li').attr('id');var action='';if(id=='wp-admin-bar-autoptimize-delete-cache'){action='autoptimize_delete_cache';}else{return;}
jQuery('#wp-admin-bar-autoptimize').removeClass('hover');var modal_loading=jQuery('<div class="autoptimize-loading"></div>').appendTo('body').show();var success=function(){jQuery('#wp-admin-bar-autoptimize-cache-info .size').attr('class','size green').html('0.00 B');jQuery('#wp-admin-bar-autoptimize-cache-info .files').html('0');jQuery('#wp-admin-bar-autoptimize-cache-info .percentage .numbers').attr('class','numbers green').html('0%');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').attr('class','fill bg-green');jQuery('#wp-admin-bar-autoptimize').attr('class','menupop bullet-green');jQuery('#wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .mask.full, #wp-admin-bar-autoptimize-cache-info .autoptimize-radial-bar .fill').css({'-webkit-transform':'rotate(0deg)','-ms-transform':'rotate(0deg)','transform':'rotate(0deg)'});};var notice=function(){jQuery('<div id="ao-delete-cache-timeout" class="notice notice-error is-dismissible"><p><strong><span style="display:block;clear:both;">'+autoptimize_ajax_object.error_msg+'</span></strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">'+autoptimize_ajax_object.dismiss_msg+'</span></button></div><br>').insertAfter('#wpbody .wrap h1:first-of-type').show();};jQuery.ajax({type:'GET',url:autoptimize_ajax_object.ajaxurl,data:{'action':action,'nonce':autoptimize_ajax_object.nonce},dataType:'json',cache:false,timeout:9000,success:function(cleared)
{modal_loading.remove();if(cleared){success();}else{notice();}},error:function(jqXHR,textStatus)
{modal_loading.remove();notice();}});});});
(function($){$.fn.validationEngineLanguage=function(){};$.validationEngineLanguage={newLang:function(){$.validationEngineLanguage.allRules={"required":{"regex":"none","alertText":"* Ce champ est requis","alertTextCheckboxMultiple":"* Choisir une option","alertTextCheckboxe":"* Cette option est requise"},"requiredInFunction":{"func":function(field,rules,i,options){return(field.val()=="test")?true:false;},"alertText":"* Field must equal test"},"minSize":{"regex":"none","alertText":"* Minimum ","alertText2":" caractères requis"},"groupRequired":{"regex":"none","alertText":"* Vous devez remplir un des champs suivant"},"maxSize":{"regex":"none","alertText":"* Maximum ","alertText2":" caractères requis"},"min":{"regex":"none","alertText":"* Valeur minimum requise "},"max":{"regex":"none","alertText":"* Valeur maximum requise "},"past":{"regex":"none","alertText":"* Date antérieure au "},"future":{"regex":"none","alertText":"* Date postérieure au "},"maxCheckbox":{"regex":"none","alertText":"* Nombre max de choix excédé"},"minCheckbox":{"regex":"none","alertText":"* Veuillez choisir ","alertText2":" options"},"equals":{"regex":"none","alertText":"* Votre champ n'est pas identique"},"creditCard":{"regex":"none","alertText":"* Numéro de carte bancaire valide"},"phone":{"regex":/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,"alertText":"* Numéro de téléphone invalide"},"email":{"regex":/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,"alertText":"* Adresse email invalide"},"integer":{"regex":/^[\-\+]?\d+$/,"alertText":"* Nombre entier invalide"},"number":{"regex":/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,"alertText":"* Nombre flottant invalide"},"date":{"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,"alertText":"* Date invalide, format YYYY-MM-DD requis"},"ipv4":{"regex":/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,"alertText":"* Adresse IP invalide"},"url":{"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,"alertText":"* URL invalide"},"onlyNumberSp":{"regex":/^[0-9\ ]+$/,"alertText":"* Seuls les chiffres sont acceptés"},"onlyLetterSp":{"regex":/^[a-zA-Z\u00C0-\u00D6\u00D9-\u00F6\u00F9-\u00FD\ \']+$/,"alertText":"* Seules les lettres sont acceptées"},"onlyLetterNumber":{"regex":/^[0-9a-zA-Z\u00C0-\u00D6\u00D9-\u00F6\u00F9-\u00FD]+$/,"alertText":"* Aucun caractère spécial n'est accepté"},"ajaxUserCall":{"url":"ajaxValidateFieldUser","extraData":"name=eric","alertTextLoad":"* Chargement, veuillez attendre","alertText":"* Ce nom est déjà pris"},"ajaxNameCall":{"url":"ajaxValidateFieldName","alertText":"* Ce nom est déjà pris","alertTextOk":"*Ce nom est disponible","alertTextLoad":"* Chargement, veuillez attendre"},"validate2fields":{"alertText":"Veuillez taper le mot HELLO"}};}};$.validationEngineLanguage.newLang();})(jQuery);
(function($){"use strict";var methods={init:function(options){var form=this;if(!form.data('jqv')||form.data('jqv')==null){options=methods._saveOptions(form,options);$(document).on("click",".formError",function(){$(this).fadeOut(150,function(){$(this).parent('.formErrorOuter').remove();$(this).remove();});});}
return this;},attach:function(userOptions){var form=this;var options;if(userOptions)
options=methods._saveOptions(form,userOptions);else
options=form.data('jqv');options.validateAttribute=(form.find("[data-validation-engine*=validate]").length)?"data-validation-engine":"class";if(options.binded){form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)",methods._onFieldEvent);form.on("click","["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]",methods._onFieldEvent);form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]",{"delay":300},methods._onFieldEvent);}
if(options.autoPositionUpdate){$(window).bind("resize",{"noAnimation":true,"formElem":form},methods.updatePromptsPosition);}
form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",methods._submitButtonClick);form.removeData('jqv_submitButton');form.on("submit",methods._onSubmitEvent);return this;},detach:function(){var form=this;var options=form.data('jqv');form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").off(options.validationEventTrigger,methods._onFieldEvent);form.find("["+options.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").off("click",methods._onFieldEvent);form.off("submit",methods.onAjaxFormComplete);form.off("submit",methods.onAjaxFormComplete);form.removeData('jqv');form.off("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",methods._submitButtonClick);form.removeData('jqv_submitButton');if(options.autoPositionUpdate)
$(window).unbind("resize",methods.updatePromptsPosition);return this;},validate:function(){var element=$(this);var valid=null;if(element.is("form")||element.hasClass("validationEngineContainer")){if(element.hasClass('validating')){return false;}else{element.addClass('validating');var options=element.data('jqv');var valid=methods._validateFields(this);setTimeout(function(){element.removeClass('validating');},100);if(valid&&options.onSuccess){options.onSuccess();}else if(!valid&&options.onFailure){options.onFailure();}}}else if(element.is('form')||element.hasClass('validationEngineContainer')){element.removeClass('validating');}else{var form=element.closest('form, .validationEngineContainer'),options=(form.data('jqv'))?form.data('jqv'):$.validationEngine.defaults,valid=methods._validateField(element,options);if(valid&&options.onFieldSuccess)
options.onFieldSuccess();else if(options.onFieldFailure&&options.InvalidFields.length>0){options.onFieldFailure();}}
if(options.onValidationComplete){return!!options.onValidationComplete(form,valid);}
return valid;},updatePromptsPosition:function(event){if(event&&this==window){var form=event.data.formElem;var noAnimation=event.data.noAnimation;}
else
var form=$(this.closest('form, .validationEngineContainer'));var options=form.data('jqv');form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){var field=$(this);if(options.prettySelect&&field.is(":hidden"))
field=form.find("#"+options.usePrefix+field.attr('id')+options.useSuffix);var prompt=methods._getPrompt(field);var promptText=$(prompt).find(".formErrorContent").html();if(prompt)
methods._updatePrompt(field,$(prompt),promptText,undefined,false,options,noAnimation);});return this;},showPrompt:function(promptText,type,promptPosition,showArrow){var form=this.closest('form, .validationEngineContainer');var options=form.data('jqv');if(!options)
options=methods._saveOptions(this,options);if(promptPosition)
options.promptPosition=promptPosition;options.showArrow=showArrow==true;methods._showPrompt(this,promptText,type,false,options);return this;},hide:function(){var form=$(this).closest('form, .validationEngineContainer');var options=form.data('jqv');var fadeDuration=(options&&options.fadeDuration)?options.fadeDuration:0.3;var closingtag;if($(this).is("form")||$(this).hasClass("validationEngineContainer")){closingtag="parentForm"+methods._getClassName($(this).attr("id"));}else{closingtag=methods._getClassName($(this).attr("id"))+"formError";}
$('.'+closingtag).fadeTo(fadeDuration,0.3,function(){$(this).parent('.formErrorOuter').remove();$(this).remove();});return this;},hideAll:function(){var form=this;var options=form.data('jqv');var duration=options?options.fadeDuration:300;$('.formError').fadeTo(duration,300,function(){$(this).parent('.formErrorOuter').remove();$(this).remove();});return this;},_onFieldEvent:function(event){var field=$(this);var form=field.closest('form, .validationEngineContainer');var options=form.data('jqv');options.eventTrigger="field";window.setTimeout(function(){methods._validateField(field,options);if(options.InvalidFields.length==0&&options.onFieldSuccess){options.onFieldSuccess();}else if(options.InvalidFields.length>0&&options.onFieldFailure){options.onFieldFailure();}},(event.data)?event.data.delay:0);},_onSubmitEvent:function(){var form=$(this);var options=form.data('jqv');if(form.data("jqv_submitButton")){var submitButton=$("#"+form.data("jqv_submitButton"));if(submitButton){if(submitButton.length>0){if(submitButton.hasClass("validate-skip")||submitButton.attr("data-validation-engine-skip")=="true")
return true;}}}
options.eventTrigger="submit";var r=methods._validateFields(form);if(r&&options.ajaxFormValidation){methods._validateFormWithAjax(form,options);return false;}
if(options.onValidationComplete){return!!options.onValidationComplete(form,r);}
return r;},_checkAjaxStatus:function(options){var status=true;$.each(options.ajaxValidCache,function(key,value){if(!value){status=false;return false;}});return status;},_checkAjaxFieldStatus:function(fieldid,options){return options.ajaxValidCache[fieldid]==true;},_validateFields:function(form){var options=form.data('jqv');var errorFound=false;form.trigger("jqv.form.validating");var first_err=null;form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){var field=$(this);var names=[];if($.inArray(field.attr('name'),names)<0){errorFound|=methods._validateField(field,options);if(errorFound&&first_err==null)
if(field.is(":hidden")&&options.prettySelect)
first_err=field=form.find("#"+options.usePrefix+methods._jqSelector(field.attr('id'))+options.useSuffix);else
first_err=field;if(options.doNotShowAllErrosOnSubmit)
return false;names.push(field.attr('name'));if(options.showOneMessage==true&&errorFound){return false;}}});form.trigger("jqv.form.result",[errorFound]);if(errorFound){if(options.scroll){var destination=first_err.offset().top;var fixleft=first_err.offset().left;var positionType=options.promptPosition;if(typeof(positionType)=='string'&&positionType.indexOf(":")!=-1)
positionType=positionType.substring(0,positionType.indexOf(":"));if(positionType!="bottomRight"&&positionType!="bottomLeft"){var prompt_err=methods._getPrompt(first_err);if(prompt_err){destination=prompt_err.offset().top;}}
if(options.scrollOffset){destination-=options.scrollOffset;}
if(options.isOverflown){var overflowDIV=$(options.overflownDIV);if(!overflowDIV.length)return false;var scrollContainerScroll=overflowDIV.scrollTop();var scrollContainerPos=-parseInt(overflowDIV.offset().top);destination+=scrollContainerScroll+scrollContainerPos-5;var scrollContainer=$(options.overflownDIV+":not(:animated)");scrollContainer.animate({scrollTop:destination},1100,function(){if(options.focusFirstField)first_err.focus();});}else{$("html, body").animate({scrollTop:destination},1100,function(){if(options.focusFirstField)first_err.focus();});$("html, body").animate({scrollLeft:fixleft},1100)}}else if(options.focusFirstField)
first_err.focus();return false;}
return true;},_validateFormWithAjax:function(form,options){var data=form.serialize();var type=(options.ajaxFormValidationMethod)?options.ajaxFormValidationMethod:"GET";var url=(options.ajaxFormValidationURL)?options.ajaxFormValidationURL:form.attr("action");var dataType=(options.dataType)?options.dataType:"json";$.ajax({type:type,url:url,cache:false,dataType:dataType,data:data,form:form,methods:methods,options:options,beforeSend:function(){return options.onBeforeAjaxFormValidation(form,options);},error:function(data,transport){methods._ajaxError(data,transport);},success:function(json){if((dataType=="json")&&(json!==true)){var errorInForm=false;for(var i=0;i<json.length;i++){var value=json[i];var errorFieldId=value[0];var errorField=$($("#"+errorFieldId)[0]);if(errorField.length==1){var msg=value[2];if(value[1]==true){if(msg==""||!msg){methods._closePrompt(errorField);}else{if(options.allrules[msg]){var txt=options.allrules[msg].alertTextOk;if(txt)
msg=txt;}
if(options.showPrompts)methods._showPrompt(errorField,msg,"pass",false,options,true);}}else{errorInForm|=true;if(options.allrules[msg]){var txt=options.allrules[msg].alertText;if(txt)
msg=txt;}
if(options.showPrompts)methods._showPrompt(errorField,msg,"",false,options,true);}}}
options.onAjaxFormComplete(!errorInForm,form,json,options);}else
options.onAjaxFormComplete(true,form,json,options);}});},_validateField:function(field,options,skipAjaxValidation){if(!field.attr("id")){field.attr("id","form-validation-field-"+$.validationEngine.fieldIdCounter);++$.validationEngine.fieldIdCounter;}
if(!options.validateNonVisibleFields&&(field.is(":hidden")&&!options.prettySelect||field.parent().is(":hidden")))
return false;var rulesParsing=field.attr(options.validateAttribute);var getRules=/validate\[(.*)\]/.exec(rulesParsing);if(!getRules)
return false;var str=getRules[1];var rules=str.split(/\[|,|\]/);var isAjaxValidator=false;var fieldName=field.attr("name");var promptText="";var promptType="";var required=false;var limitErrors=false;options.isError=false;options.showArrow=true;if(options.maxErrorsPerField>0){limitErrors=true;}
var form=$(field.closest("form, .validationEngineContainer"));for(var i=0;i<rules.length;i++){rules[i]=rules[i].replace(" ","");if(rules[i]===''){delete rules[i];}}
for(var i=0,field_errors=0;i<rules.length;i++){if(limitErrors&&field_errors>=options.maxErrorsPerField){if(!required){var have_required=$.inArray('required',rules);required=(have_required!=-1&&have_required>=i);}
break;}
var errorMsg=undefined;switch(rules[i]){case"required":required=true;errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._required);break;case"custom":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._custom);break;case"groupRequired":var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";var firstOfGroup=form.find(classGroup).eq(0);if(firstOfGroup[0]!=field[0]){methods._validateField(firstOfGroup,options,skipAjaxValidation);options.showArrow=true;}
errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._groupRequired);if(errorMsg)required=true;options.showArrow=false;break;case"ajax":errorMsg=methods._ajax(field,rules,i,options);if(errorMsg){promptType="load";}
break;case"minSize":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._minSize);break;case"maxSize":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._maxSize);break;case"min":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._min);break;case"max":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._max);break;case"past":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._past);break;case"future":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._future);break;case"dateRange":var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";options.firstOfGroup=form.find(classGroup).eq(0);options.secondOfGroup=form.find(classGroup).eq(1);if(options.firstOfGroup[0].value||options.secondOfGroup[0].value){errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._dateRange);}
if(errorMsg)required=true;options.showArrow=false;break;case"dateTimeRange":var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";options.firstOfGroup=form.find(classGroup).eq(0);options.secondOfGroup=form.find(classGroup).eq(1);if(options.firstOfGroup[0].value||options.secondOfGroup[0].value){errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._dateTimeRange);}
if(errorMsg)required=true;options.showArrow=false;break;case"maxCheckbox":field=$(form.find("input[name='"+fieldName+"']"));errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._maxCheckbox);break;case"minCheckbox":field=$(form.find("input[name='"+fieldName+"']"));errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._minCheckbox);break;case"equals":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._equals);break;case"funcCall":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._funcCall);break;case"creditCard":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._creditCard);break;case"condRequired":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._condRequired);if(errorMsg!==undefined){required=true;}
break;default:}
var end_validation=false;if(typeof errorMsg=="object"){switch(errorMsg.status){case"_break":end_validation=true;break;case"_error":errorMsg=errorMsg.message;break;case"_error_no_prompt":return true;break;default:break;}}
if(end_validation){break;}
if(typeof errorMsg=='string'){promptText+=errorMsg+"<br/>";options.isError=true;field_errors++;}}
if(!required&&!(field.val())&&field.val().length<1)options.isError=false;var fieldType=field.prop("type");var positionType=field.data("promptPosition")||options.promptPosition;if((fieldType=="radio"||fieldType=="checkbox")&&form.find("input[name='"+fieldName+"']").size()>1){if(positionType==='inline'){field=$(form.find("input[name='"+fieldName+"'][type!=hidden]:last"));}else{field=$(form.find("input[name='"+fieldName+"'][type!=hidden]:first"));}
options.showArrow=false;}
if(field.is(":hidden")&&options.prettySelect){field=form.find("#"+options.usePrefix+methods._jqSelector(field.attr('id'))+options.useSuffix);}
if(options.isError&&options.showPrompts){methods._showPrompt(field,promptText,promptType,false,options);}else{if(!isAjaxValidator)methods._closePrompt(field);}
if(!isAjaxValidator){field.trigger("jqv.field.result",[field,options.isError,promptText]);}
var errindex=$.inArray(field[0],options.InvalidFields);if(errindex==-1){if(options.isError)
options.InvalidFields.push(field[0]);}else if(!options.isError){options.InvalidFields.splice(errindex,1);}
methods._handleStatusCssClasses(field,options);if(options.isError&&options.onFieldFailure)
options.onFieldFailure(field);if(!options.isError&&options.onFieldSuccess)
options.onFieldSuccess(field);return options.isError;},_handleStatusCssClasses:function(field,options){if(options.addSuccessCssClassToField)
field.removeClass(options.addSuccessCssClassToField);if(options.addFailureCssClassToField)
field.removeClass(options.addFailureCssClassToField);if(options.addSuccessCssClassToField&&!options.isError)
field.addClass(options.addSuccessCssClassToField);if(options.addFailureCssClassToField&&options.isError)
field.addClass(options.addFailureCssClassToField);},_getErrorMessage:function(form,field,rule,rules,i,options,originalValidationMethod){var rule_index=jQuery.inArray(rule,rules);if(rule==="custom"||rule==="funcCall"){var custom_validation_type=rules[rule_index+1];rule=rule+"["+custom_validation_type+"]";delete(rules[rule_index]);}
var alteredRule=rule;var element_classes=(field.attr("data-validation-engine"))?field.attr("data-validation-engine"):field.attr("class");var element_classes_array=element_classes.split(" ");var errorMsg;if(rule=="future"||rule=="past"||rule=="maxCheckbox"||rule=="minCheckbox"){errorMsg=originalValidationMethod(form,field,rules,i,options);}else{errorMsg=originalValidationMethod(field,rules,i,options);}
if(errorMsg!=undefined){var custom_message=methods._getCustomErrorMessage($(field),element_classes_array,alteredRule,options);if(custom_message)errorMsg=custom_message;}
return errorMsg;},_getCustomErrorMessage:function(field,classes,rule,options){var custom_message=false;var validityProp=methods._validityProp[rule];if(validityProp!=undefined){custom_message=field.attr("data-errormessage-"+validityProp);if(custom_message!=undefined)
return custom_message;}
custom_message=field.attr("data-errormessage");if(custom_message!=undefined)
return custom_message;var id='#'+field.attr("id");if(typeof options.custom_error_messages[id]!="undefined"&&typeof options.custom_error_messages[id][rule]!="undefined"){custom_message=options.custom_error_messages[id][rule]['message'];}else if(classes.length>0){for(var i=0;i<classes.length&&classes.length>0;i++){var element_class="."+classes[i];if(typeof options.custom_error_messages[element_class]!="undefined"&&typeof options.custom_error_messages[element_class][rule]!="undefined"){custom_message=options.custom_error_messages[element_class][rule]['message'];break;}}}
if(!custom_message&&typeof options.custom_error_messages[rule]!="undefined"&&typeof options.custom_error_messages[rule]['message']!="undefined"){custom_message=options.custom_error_messages[rule]['message'];}
return custom_message;},_validityProp:{"required":"value-missing","custom":"custom-error","groupRequired":"value-missing","ajax":"custom-error","minSize":"range-underflow","maxSize":"range-overflow","min":"range-underflow","max":"range-overflow","past":"type-mismatch","future":"type-mismatch","dateRange":"type-mismatch","dateTimeRange":"type-mismatch","maxCheckbox":"range-overflow","minCheckbox":"range-underflow","equals":"pattern-mismatch","funcCall":"custom-error","creditCard":"pattern-mismatch","condRequired":"value-missing"},_required:function(field,rules,i,options,condRequired){switch(field.prop("type")){case"text":case"password":case"textarea":case"file":case"select-one":case"select-multiple":default:var field_val=$.trim(field.val());var dv_placeholder=$.trim(field.attr("data-validation-placeholder"));var placeholder=$.trim(field.attr("placeholder"));if((!field_val)||(dv_placeholder&&field_val==dv_placeholder)||(placeholder&&field_val==placeholder)){return options.allrules[rules[i]].alertText;}
break;case"radio":case"checkbox":if(condRequired){if(!field.attr('checked')){return options.allrules[rules[i]].alertTextCheckboxMultiple;}
break;}
var form=field.closest("form, .validationEngineContainer");var name=field.attr("name");if(form.find("input[name='"+name+"']:checked").size()==0){if(form.find("input[name='"+name+"']:visible").size()==1)
return options.allrules[rules[i]].alertTextCheckboxe;else
return options.allrules[rules[i]].alertTextCheckboxMultiple;}
break;}},_groupRequired:function(field,rules,i,options){var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";var isValid=false;field.closest("form, .validationEngineContainer").find(classGroup).each(function(){if(!methods._required($(this),rules,i,options)){isValid=true;return false;}});if(!isValid){return options.allrules[rules[i]].alertText;}},_custom:function(field,rules,i,options){var customRule=rules[i+1];var rule=options.allrules[customRule];var fn;if(!rule){alert("jqv:custom rule not found - "+customRule);return;}
if(rule["regex"]){var ex=rule.regex;if(!ex){alert("jqv:custom regex not found - "+customRule);return;}
var pattern=new RegExp(ex);if(!pattern.test(field.val()))return options.allrules[customRule].alertText;}else if(rule["func"]){fn=rule["func"];if(typeof(fn)!=="function"){alert("jqv:custom parameter 'function' is no function - "+customRule);return;}
if(!fn(field,rules,i,options))
return options.allrules[customRule].alertText;}else{alert("jqv:custom type not allowed "+customRule);return;}},_funcCall:function(field,rules,i,options){var functionName=rules[i+1];var fn;if(functionName.indexOf('.')>-1)
{var namespaces=functionName.split('.');var scope=window;while(namespaces.length)
{scope=scope[namespaces.shift()];}
fn=scope;}
else
fn=window[functionName]||options.customFunctions[functionName];if(typeof(fn)=='function')
return fn(field,rules,i,options);},_equals:function(field,rules,i,options){var equalsField=rules[i+1];if(field.val()!=$("#"+equalsField).val())
return options.allrules.equals.alertText;},_maxSize:function(field,rules,i,options){var max=rules[i+1];var len=field.val().length;if(len>max){var rule=options.allrules.maxSize;return rule.alertText+max+rule.alertText2;}},_minSize:function(field,rules,i,options){var min=rules[i+1];var len=field.val().length;if(len<min){var rule=options.allrules.minSize;return rule.alertText+min+rule.alertText2;}},_min:function(field,rules,i,options){var min=parseFloat(rules[i+1]);var len=parseFloat(field.val());if(len<min){var rule=options.allrules.min;if(rule.alertText2)return rule.alertText+min+rule.alertText2;return rule.alertText+min;}},_max:function(field,rules,i,options){var max=parseFloat(rules[i+1]);var len=parseFloat(field.val());if(len>max){var rule=options.allrules.max;if(rule.alertText2)return rule.alertText+max+rule.alertText2;return rule.alertText+max;}},_past:function(form,field,rules,i,options){var p=rules[i+1];var fieldAlt=$(form.find("input[name='"+p.replace(/^#+/,'')+"']"));var pdate;if(p.toLowerCase()=="now"){pdate=new Date();}else if(undefined!=fieldAlt.val()){if(fieldAlt.is(":disabled"))
return;pdate=methods._parseDate(fieldAlt.val());}else{pdate=methods._parseDate(p);}
var vdate=methods._parseDate(field.val());if(vdate>pdate){var rule=options.allrules.past;if(rule.alertText2)return rule.alertText+methods._dateToString(pdate)+rule.alertText2;return rule.alertText+methods._dateToString(pdate);}},_future:function(form,field,rules,i,options){var p=rules[i+1];var fieldAlt=$(form.find("input[name='"+p.replace(/^#+/,'')+"']"));var pdate;if(p.toLowerCase()=="now"){pdate=new Date();}else if(undefined!=fieldAlt.val()){if(fieldAlt.is(":disabled"))
return;pdate=methods._parseDate(fieldAlt.val());}else{pdate=methods._parseDate(p);}
var vdate=methods._parseDate(field.val());if(vdate<pdate){var rule=options.allrules.future;if(rule.alertText2)
return rule.alertText+methods._dateToString(pdate)+rule.alertText2;return rule.alertText+methods._dateToString(pdate);}},_isDate:function(value){var dateRegEx=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);return dateRegEx.test(value);},_isDateTime:function(value){var dateTimeRegEx=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);return dateTimeRegEx.test(value);},_dateCompare:function(start,end){return(new Date(start.toString())<new Date(end.toString()));},_dateRange:function(field,rules,i,options){if((!options.firstOfGroup[0].value&&options.secondOfGroup[0].value)||(options.firstOfGroup[0].value&&!options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._isDate(options.firstOfGroup[0].value)||!methods._isDate(options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._dateCompare(options.firstOfGroup[0].value,options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}},_dateTimeRange:function(field,rules,i,options){if((!options.firstOfGroup[0].value&&options.secondOfGroup[0].value)||(options.firstOfGroup[0].value&&!options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._isDateTime(options.firstOfGroup[0].value)||!methods._isDateTime(options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._dateCompare(options.firstOfGroup[0].value,options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}},_maxCheckbox:function(form,field,rules,i,options){var nbCheck=rules[i+1];var groupname=field.attr("name");var groupSize=form.find("input[name='"+groupname+"']:checked").size();if(groupSize>nbCheck){options.showArrow=false;if(options.allrules.maxCheckbox.alertText2)
return options.allrules.maxCheckbox.alertText+" "+nbCheck+" "+options.allrules.maxCheckbox.alertText2;return options.allrules.maxCheckbox.alertText;}},_minCheckbox:function(form,field,rules,i,options){var nbCheck=rules[i+1];var groupname=field.attr("name");var groupSize=form.find("input[name='"+groupname+"']:checked").size();if(groupSize<nbCheck){options.showArrow=false;return options.allrules.minCheckbox.alertText+" "+nbCheck+" "+options.allrules.minCheckbox.alertText2;}},_creditCard:function(field,rules,i,options){var valid=false,cardNumber=field.val().replace(/ +/g,'').replace(/-+/g,'');var numDigits=cardNumber.length;if(numDigits>=14&&numDigits<=16&&parseInt(cardNumber)>0){var sum=0,i=numDigits-1,pos=1,digit,luhn=new String();do{digit=parseInt(cardNumber.charAt(i));luhn+=(pos++%2==0)?digit*2:digit;}while(--i>=0)
for(i=0;i<luhn.length;i++){sum+=parseInt(luhn.charAt(i));}
valid=sum%10==0;}
if(!valid)return options.allrules.creditCard.alertText;},_ajax:function(field,rules,i,options){var errorSelector=rules[i+1];var rule=options.allrules[errorSelector];var extraData=rule.extraData;var extraDataDynamic=rule.extraDataDynamic;var data={"fieldId":field.attr("id"),"fieldValue":field.val()};if(typeof extraData==="object"){$.extend(data,extraData);}else if(typeof extraData==="string"){var tempData=extraData.split("&");for(var i=0;i<tempData.length;i++){var values=tempData[i].split("=");if(values[0]&&values[0]){data[values[0]]=values[1];}}}
if(extraDataDynamic){var tmpData=[];var domIds=String(extraDataDynamic).split(",");for(var i=0;i<domIds.length;i++){var id=domIds[i];if($(id).length){var inputValue=field.closest("form, .validationEngineContainer").find(id).val();var keyValue=id.replace('#','')+'='+escape(inputValue);data[id.replace('#','')]=inputValue;}}}
if(options.eventTrigger=="field"){delete(options.ajaxValidCache[field.attr("id")]);}
if(!options.isError&&!methods._checkAjaxFieldStatus(field.attr("id"),options)){$.ajax({type:options.ajaxFormValidationMethod,url:rule.url,cache:false,dataType:"json",data:data,field:field,rule:rule,methods:methods,options:options,beforeSend:function(){},error:function(data,transport){methods._ajaxError(data,transport);},success:function(json){var errorFieldId=json[0];var errorField=$("#"+errorFieldId).eq(0);if(errorField.length==1){var status=json[1];var msg=json[2];if(!status){options.ajaxValidCache[errorFieldId]=false;options.isError=true;if(msg){if(options.allrules[msg]){var txt=options.allrules[msg].alertText;if(txt){msg=txt;}}}
else
msg=rule.alertText;if(options.showPrompts)methods._showPrompt(errorField,msg,"",true,options);}else{options.ajaxValidCache[errorFieldId]=true;if(msg){if(options.allrules[msg]){var txt=options.allrules[msg].alertTextOk;if(txt){msg=txt;}}}
else
msg=rule.alertTextOk;if(options.showPrompts){if(msg)
methods._showPrompt(errorField,msg,"pass",true,options);else
methods._closePrompt(errorField);}
if(options.eventTrigger=="submit")
field.closest("form").submit();}}
errorField.trigger("jqv.field.result",[errorField,options.isError,msg]);}});return rule.alertTextLoad;}},_ajaxError:function(data,transport){if(data.status==0&&transport==null)
alert("The page is not served from a server! ajax call failed");else if(typeof console!="undefined")
console.log("Ajax error: "+data.status+" "+transport);},_dateToString:function(date){return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();},_parseDate:function(d){var dateParts=d.split("-");if(dateParts==d)
dateParts=d.split("/");if(dateParts==d){dateParts=d.split(".");return new Date(dateParts[2],(dateParts[1]-1),dateParts[0]);}
return new Date(dateParts[0],(dateParts[1]-1),dateParts[2]);},_showPrompt:function(field,promptText,type,ajaxed,options,ajaxform){var prompt=methods._getPrompt(field);if(ajaxform)prompt=false;if($.trim(promptText)){if(prompt)
methods._updatePrompt(field,prompt,promptText,type,ajaxed,options);else
methods._buildPrompt(field,promptText,type,ajaxed,options);}},_buildPrompt:function(field,promptText,type,ajaxed,options){var prompt=$('<div>');prompt.addClass(methods._getClassName(field.attr("id"))+"formError");prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));prompt.addClass("formError");switch(type){case"pass":prompt.addClass("greenPopup");break;case"load":prompt.addClass("blackPopup");break;default:}
if(ajaxed)
prompt.addClass("ajaxed");var promptContent=$('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);var positionType=field.data("promptPosition")||options.promptPosition;if(options.showArrow){var arrow=$('<div>').addClass("formErrorArrow");if(typeof(positionType)=='string')
{var pos=positionType.indexOf(":");if(pos!=-1)
positionType=positionType.substring(0,pos);}
switch(positionType){case"bottomLeft":case"bottomRight":prompt.find(".formErrorContent").before(arrow);arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');break;case"topLeft":case"topRight":arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');prompt.append(arrow);break;}}
if(options.addPromptClass)
prompt.addClass(options.addPromptClass);var requiredOverride=field.attr('data-required-class');if(requiredOverride!==undefined){prompt.addClass(requiredOverride);}else{if(options.prettySelect){if($('#'+field.attr('id')).next().is('select')){var prettyOverrideClass=$('#'+field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');if(prettyOverrideClass!==undefined){prompt.addClass(prettyOverrideClass);}}}}
prompt.css({"opacity":0});if(positionType==='inline'){prompt.addClass("inline");if(typeof field.attr('data-prompt-target')!=='undefined'&&$('#'+field.attr('data-prompt-target')).length>0){prompt.appendTo($('#'+field.attr('data-prompt-target')));}else{field.after(prompt);}}else{field.before(prompt);}
var pos=methods._calculatePosition(field,prompt,options);prompt.css({'position':positionType==='inline'?'relative':'absolute',"top":pos.callerTopPosition,"left":pos.callerleftPosition,"marginTop":pos.marginTopSize,"opacity":0}).data("callerField",field);if(options.autoHidePrompt){setTimeout(function(){prompt.animate({"opacity":0},function(){prompt.closest('.formErrorOuter').remove();prompt.remove();});},options.autoHideDelay);}
return prompt.animate({"opacity":0.87});},_updatePrompt:function(field,prompt,promptText,type,ajaxed,options,noAnimation){if(prompt){if(typeof type!=="undefined"){if(type=="pass")
prompt.addClass("greenPopup");else
prompt.removeClass("greenPopup");if(type=="load")
prompt.addClass("blackPopup");else
prompt.removeClass("blackPopup");}
if(ajaxed)
prompt.addClass("ajaxed");else
prompt.removeClass("ajaxed");prompt.find(".formErrorContent").html(promptText);var pos=methods._calculatePosition(field,prompt,options);var css={"top":pos.callerTopPosition,"left":pos.callerleftPosition,"marginTop":pos.marginTopSize};if(noAnimation)
prompt.css(css);else
prompt.animate(css);}},_closePrompt:function(field){var prompt=methods._getPrompt(field);if(prompt)
prompt.fadeTo("fast",0,function(){prompt.parent('.formErrorOuter').remove();prompt.remove();});},closePrompt:function(field){return methods._closePrompt(field);},_getPrompt:function(field){var formId=$(field).closest('form, .validationEngineContainer').attr('id');var className=methods._getClassName(field.attr("id"))+"formError";var match=$("."+methods._escapeExpression(className)+'.parentForm'+formId)[0];if(match)
return $(match);},_escapeExpression:function(selector){return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1");},isRTL:function(field)
{var $document=$(document);var $body=$('body');var rtl=(field&&field.hasClass('rtl'))||(field&&(field.attr('dir')||'').toLowerCase()==='rtl')||$document.hasClass('rtl')||($document.attr('dir')||'').toLowerCase()==='rtl'||$body.hasClass('rtl')||($body.attr('dir')||'').toLowerCase()==='rtl';return Boolean(rtl);},_calculatePosition:function(field,promptElmt,options){var promptTopPosition,promptleftPosition,marginTopSize;var fieldWidth=field.width();var fieldLeft=field.position().left;var fieldTop=field.position().top;var fieldHeight=field.height();var promptHeight=promptElmt.height();promptTopPosition=promptleftPosition=0;marginTopSize=-promptHeight;var positionType=field.data("promptPosition")||options.promptPosition;var shift1="";var shift2="";var shiftX=0;var shiftY=0;if(typeof(positionType)=='string'){if(positionType.indexOf(":")!=-1){shift1=positionType.substring(positionType.indexOf(":")+1);positionType=positionType.substring(0,positionType.indexOf(":"));if(shift1.indexOf(",")!=-1){shift2=shift1.substring(shift1.indexOf(",")+1);shift1=shift1.substring(0,shift1.indexOf(","));shiftY=parseInt(shift2);if(isNaN(shiftY))shiftY=0;};shiftX=parseInt(shift1);if(isNaN(shift1))shift1=0;};};switch(positionType){default:case"topRight":promptleftPosition+=fieldLeft+fieldWidth-30;promptTopPosition+=fieldTop;break;case"topLeft":promptTopPosition+=fieldTop;promptleftPosition+=fieldLeft;break;case"centerRight":promptTopPosition=fieldTop+4;marginTopSize=0;promptleftPosition=fieldLeft+field.outerWidth(true)+5;break;case"centerLeft":promptleftPosition=fieldLeft-(promptElmt.width()+2);promptTopPosition=fieldTop+4;marginTopSize=0;break;case"bottomLeft":promptTopPosition=fieldTop+field.height()+5;marginTopSize=0;promptleftPosition=fieldLeft;break;case"bottomRight":promptleftPosition=fieldLeft+fieldWidth-30;promptTopPosition=fieldTop+field.height()+5;marginTopSize=0;break;case"inline":promptleftPosition=0;promptTopPosition=0;marginTopSize=0;};promptleftPosition+=shiftX;promptTopPosition+=shiftY;return{"callerTopPosition":promptTopPosition+"px","callerleftPosition":promptleftPosition+"px","marginTopSize":marginTopSize+"px"};},_saveOptions:function(form,options){if($.validationEngineLanguage)
var allRules=$.validationEngineLanguage.allRules;else
$.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");$.validationEngine.defaults.allrules=allRules;var userOptions=$.extend(true,{},$.validationEngine.defaults,options);form.data('jqv',userOptions);return userOptions;},_getClassName:function(className){if(className)
return className.replace(/:/g,"_").replace(/\./g,"_");},_jqSelector:function(str){return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,'\\$1');},_condRequired:function(field,rules,i,options){var idx,dependingField;for(idx=(i+1);idx<rules.length;idx++){dependingField=jQuery("#"+rules[idx]).first();if(dependingField.length&&methods._required(dependingField,["required"],0,options,true)==undefined){return methods._required(field,["required"],0,options);}}},_submitButtonClick:function(event){var button=$(this);var form=button.closest('form, .validationEngineContainer');form.data("jqv_submitButton",button.attr("id"));}};$.fn.validationEngine=function(method){var form=$(this);if(!form[0])return form;if(typeof(method)=='string'&&method.charAt(0)!='_'&&methods[method]){if(method!="showPrompt"&&method!="hide"&&method!="hideAll")
methods.init.apply(form);return methods[method].apply(form,Array.prototype.slice.call(arguments,1));}else if(typeof method=='object'||!method){methods.init.apply(form,arguments);return methods.attach.apply(form);}else{$.error('Method '+method+' does not exist in jQuery.validationEngine');}};$.validationEngine={fieldIdCounter:0,defaults:{validationEventTrigger:"blur",scroll:true,focusFirstField:true,showPrompts:true,validateNonVisibleFields:false,promptPosition:"topRight",bindMethod:"bind",inlineAjax:false,ajaxFormValidation:false,ajaxFormValidationURL:false,ajaxFormValidationMethod:'get',onAjaxFormComplete:$.noop,onBeforeAjaxFormValidation:$.noop,onValidationComplete:false,doNotShowAllErrosOnSubmit:false,custom_error_messages:{},binded:true,showArrow:true,isError:false,maxErrorsPerField:false,ajaxValidCache:{},autoPositionUpdate:false,InvalidFields:[],onFieldSuccess:false,onFieldFailure:false,onSuccess:false,onFailure:false,validateAttribute:"class",addSuccessCssClassToField:"",addFailureCssClassToField:"",autoHidePrompt:false,autoHideDelay:10000,fadeDuration:0.3,prettySelect:false,addPromptClass:"",usePrefix:"",useSuffix:"",showOneMessage:false}};$(function(){$.validationEngine.defaults.promptPosition=methods.isRTL()?'topLeft':"topRight"});})(jQuery);
function version_compare(t,i){if(t===i)return 0;for(var a=t.split("."),n=i.split("."),e=Math.min(a.length,n.length),l=0;l<e;l++){if(parseInt(a[l])>parseInt(n[l]))return 1;if(parseInt(a[l])<parseInt(n[l]))return-1}return a.length>n.length?1:a.length<n.length?-1:0}jQuery(function(l){l.fn.on===undefined&&(l.fn.on=function(t,i,a,n){return"function"==typeof i?l(this.context).live(t,i):l(i).live(t,a,n),this}),l(document).on("click",".showerrors",function(){return l(".xdetailed-errors").toggle(),!1}),l(document).on("click",".shownotices",function(){return l(".xdetailed-updated").toggle(),!1}),l("form.widget_wysija").on("focus","input[placeholder]",function(){l(this).val()===l(this).attr("placeholder")&&l(this).val("")}),l("form.widget_wysija").on("blur","input[placeholder]",function(){""===l(this).val()&&l(this).val(l(this).attr("placeholder"))}),l("form.widget_wysija").on("focus","input.defaultlabels",function(){l(this).val()===l(this).attr("title")&&l(this).val("")}),l("form.widget_wysija").on("blur","input.defaultlabels",function(){""===l(this).val()&&l(this).val(l(this).attr("title"))}),l(document).on("submit","form.widget_wysija",function(t){if(t.preventDefault(),wysijaAJAX.noajax!==undefined)return l(this).validationEngine("validate");if(!0===l(this).validationEngine("validate")){var i=l(this).find('input[name="action"]').val(),a=l(this).find('input[name="controller"]').val(),n=l(this).attr("id"),e=l(this).serializeArray();wysijaAJAX.task=i,wysijaAJAX.controller=a,wysijaAJAX.formid=n,l.each(e,function(t,i){wysijaAJAX["data["+t+"][name]"]=i.name,wysijaAJAX["data["+t+"][value]"]=i.value}),l("#msg-"+n).html('<div class="allmsgs"><blink>'+wysijaAJAX.loadingTrans+"</blink></div>"),l("#"+n).fadeOut(),l.ajax({type:"post",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(t){l("#msg-"+n).html('<div class="allmsgs"></div>'),t.result||l("#"+n).fadeIn(),l.each(t.msgs,function(a,t){l("#msg-"+n+" .allmsgs ."+a+" ul").length||l("#msg-"+n+" .allmsgs").append('<div class="'+a+'"><ul></ul></div>'),l.each(t,function(t,i){l("#msg-"+n+" .allmsgs ."+a+" ul").append("<li>"+i+"</li>")})})},error:function(t,i,a){l("#msg-"+n).html('<div class="allmsgs"></div>'),l("#msg-"+n+" .allmsgs").html('<div class="error"><ul><li>Oops! There is a problem with this form:</li><li>textStatus:'+i+"</li><li>errorThrown:"+a+"</li><li>responseText:"+t.responseText+"</li></ul></div>")},dataType:"jsonp"})}return!1}),l(function(){var t="centerRight";wysijaAJAX.is_rtl&&(t="centerLeft"),l("form.widget_wysija").validationEngine("attach",{promptPosition:t,scroll:!1}),l("form.widget_wysija").bind("jqv.form.validating",function(){l(this).find("input[placeholder]").each(function(){l(this).val()===l(this).attr("placeholder")&&l(this).val("")})}),l("form.widget_wysija").find("input[placeholder]").each(function(){""===l(this).val()&&l(this).val(l(this).attr("placeholder"))}),l("form.widget_wysija").bind("jqv.form.validating",function(){l(this).find("input.defaultlabels").each(function(){l(this).val()===l(this).attr("title")&&l(this).val("")})}),l("form.widget_wysija").find("input.defaultlabels").each(function(){""===l(this).val()&&l(this).val(l(this).attr("title"))})})});