!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),i=o(r),a=n(17),s=o(a);(0,s["default"])(),window.MutationObserver=window.WebKitMutationObserver=window.File=void 0,window.WeixinJSBridge=i["default"]},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=e.command,n=e.msg||{},o=e.ext||{};if("WINDOW_GET_WEBAPP_ERROR"===t){var r=n.fileName,i=n.errStr;return console.group("%c加载 "+r+" 错误","color: red; font-size: x-large"),console.error("%c"+i,"color: red; font-size: x-large"),void console.groupEnd()}if("MSG_FROM_WEBVIEW"===t||"GET_ASSDK_RES"===t){var s=n.eventName||o.sdkName;a["default"].debugLog(new Date+" GetMsg "+s,[s,n,o]),a["default"].debugInfo({type:"GetMsg",eventName:s,data:[s,n,o],timesmap:new Date})}if("MSG_FROM_WEBVIEW"===t){var u=n.eventName,l=(n.type,n.data||{});0===u.indexOf("publish_")?(u=u.replace(/^publish_/,""),d["default"].emit("triggerSubscribeEvent",u,l,n.webviewID,{nativeTime:Date.now()})):(u=u.replace(/^sys_/,""),d["default"].emit("triggerOnEvent",u,l,n.webviewID))}else if("GET_APP_DATA"===t)c["default"].sendMsgToNW({appData:__wxAppData,sdkName:"send_app_data"});else if("WRITE_APP_DATA"===t)for(var f in n){var p=n[f],g=p.__webviewId__;(0,_["default"])("appDataChange",{data:{data:p}},[g],!0)}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),a=o(i),s=n(5),u=(o(s),n(3)),c=o(u),l=n(6),d=o(l),f=n(8),p=o(f),g=n(10),v=o(g),h=n(11),_=o(h),w=n(12),m=o(w);c["default"].registerCallback(r),t["default"]={invoke:m["default"],on:p["default"],subscribe:v["default"],publish:_["default"]}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=o(r),a=!1,s=[],u=100;window.showDebugInfo=function(e,t){var n=s.filter(function(n){var o=!e||(Array.isArray(e)?e.includes(n.type):n.type===e),r=!t||(Array.isArray(t)?t.includes(n.eventName):n.eventName===t);if(o&&r)return n});console.group("showDebugInfo"),n.forEach(function(e){console.group(e.timesmap+" WeixinJSBridge "+e.type+" "+e.eventName),console.debug.apply(window,e.data),console.groupEnd()}),console.groupEnd(),a=!0},window.closeDebug=function(){console.clear(),a=!1},window.showDebugInfoTable=function(){console.table(s)},window.help=function(){console.table([{fun:"showDebugInfo","arg[0]":"type -- String || Array; publish on subscribe invoke GetMsg","arg[1]":"eventName -- String || Array;",example:'showDebugInfo() showDebugInfo("publish") showDebugInfo(["publish", "invoke"], "onAppRoute")',openToolsLog:"open tools logs"},{fun:"closeDebug"},{fun:"showDebugInfoTable"},{fun:"openToolsLog","arg[0]":"","arg[1]":"",example:"openVendor() ",openToolsLog:"open log folder"},{fun:"openVendor","arg[0]":"","arg[1]":"",example:"openVendor() ",openToolsLog:"open vendor folder"},{fun:"showRequestInfo","arg[0]":"","arg[1]":"",example:"showRequestInfo() ",openToolsLog:"show request info"},{fun:"showSystemInfo","arg[0]":"","arg[1]":"",example:"showSystemInfo() ",openToolsLog:"show tools info"}])},window.showRequestInfo=function(){var e={};for(var t in window.securityDetails)if(0!==t.indexOf("http://"+__wxConfig.apphash)){var n=window.securityDetails[t];delete n.id,delete n.command,delete n.isReady,delete n.url,e[t]=n}console.table(e)},window.openToolsLog=function(){i["default"].sendMsgToNW({sdkName:"__open-tools-log"})},window.openVendor=function(){i["default"].sendMsgToNW({sdkName:"__open-tools-vendor"})},window.showNewFeatureCheck=function(){i["default"].sendMsgToNW({sdkName:"__show-new-feature-check"})},window.showSystemInfo=function(){i["default"].sendMsgToNW({sdkName:"__show-sys-info"})},window.hhdmb=function(){i["default"].sendMsgToNW({sdkName:"__hhdmbadmb"})},window.syncMessage=function(){i["default"].sendMsgToNW({sdkName:"__sync-messsage"})};var c=function(){return a},l=function(e,t){a&&(console.group(e),console.debug.apply(void 0,t),console.groupEnd(e))},d=function(e){a||(s.length>u&&(s=[]),s.push(e))};t["default"]={debugLog:l,debugInfo:d,isDev:c}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=(o(r),n(4)),a=__wxConfig.apphash,s=__wxConfig.appid,u=__wxConfig.extAppid||"",c=__wxConfig.appname,l=navigator.userAgent,d=parseInt(l.match(/webview\/(\d*)/)[1]),f=[],p=[],g=function(){var e=this,t=arguments;p.forEach(function(n){n.apply(e,t)})},v=function(e){p.push(e)},h=0,_=function(e){var t=JSON.parse(JSON.stringify(e));t.to="backgroundjs",t.comefrom="webframe",t.command="COMMAND_FROM_ASJS",t.appid=s,t.ext_appid=u,t.appname=c,t.apphash=a,t.webviewID=d,t.__id=h,h++,window.postMessage(t,"*")},w=function(e){e.command="COMMAND_FROM_ASJS",e.appid=s,e.appname=c,e.apphash=a,e.webviewID=d;var t="____sdk____"+JSON.stringify(e),n=prompt(t);n=JSON.parse(n),delete n.to,g(n)};window._____sendMsgToNW=_;var m=function(e){e.to="contentscript",e.comefrom="webframe",e.webviewID=d,window.postMessage(e,"*")},y=function(e,t,n){var o=(0,i.isSyncSDK)(e),r={sdkName:e,args:t,callbackID:n};o?w(r):_(r)};window.addEventListener("message",function(e){var t=e.data,n=t.to;if("appservice"===n)return delete n.appservice,"complete"!==document.readyState?void f.push(t):void g(t)}),window.addEventListener("load",function(){f.forEach(function(e){g(e)}),f=[]}),m({command:"SHAKE_HANDS"}),t["default"]={brigeToNW:y,sendMsgToNW:_,registerCallback:v}},function(e,t){"use strict";function n(e){return!!r[e]||/Sync$/.test(e)}function o(e){return"navigateTo"===e||"redirectTo"===e}Object.defineProperty(t,"__esModule",{value:!0}),t.isSyncSDK=n,t.isLockSDK=o;var r={getSystemInfo:!0,getBackgroundAudioState:!0,setBackgroundAudioState:!0,operateBackgroundAudio:!0,createRequestTask:!0,createUploadTask:!0,createDownloadTask:!0,createAudioInstance:!0},i=t.appconfig=Object.assign({domain:[""],networkTimeout:{request:3e4,connectSocket:3e4,uploadFile:3e4,downloadFile:3e4}},__wxConfig),a=t.projectConfig=i.projectConfig||{};t.MaxRequestConcurrent=a.Setting&&a.Setting.MaxRequestConcurrent||5,t.NetworkConfig=a&&a.Network||{},t.AppserviceMaxDataSize=__wxConfig.appserviceConfig.AppserviceMaxDataSize,t.Permission=a.permission||{}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return __wxConfig.isTourist},o=n()?Object.assign(__wxConfig.userInfo):{};delete __wxConfig.userInfo;var r={login:function(e,t,n){n({errMsg:"login:ok",code:"the code is a mock one"})},authorize:function(e,t,n){n({errMsg:"authorize:fail"})},operateWXData:function(e,t,n){n({errMsg:"operateWXData:ok",data:{data:JSON.stringify({nickName:o.nickName,avatarUrl:o.headUrl,gender:"male"===o.sex?1:2,province:o.province,city:o.city,country:o.country})}})},openSetting:function(e,t,n){n({errMsg:"openSetting:ok",authSetting:[{scope:"scope.userInfo",state:1}]})}},i=function(e){var t=this,o=arguments;return!(!n()||!r.hasOwnProperty(e))&&(console.group(new Date+" 无 AppID 关联"),console.warn("请注意无 AppID 关联下，调用 wx."+e+" 是受限的, API 的返回是工具的模拟返回"),console.groupEnd(),setTimeout(function(){r[e].apply(t,o)}),!0)};t["default"]={isTourist:n,fake:r,check:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7).EventEmitter;t["default"]=new o},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,s,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(i(n))for(s=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;u<r;u++)c[u].apply(this,s);return!0},n.prototype.addListener=function(e,t){var r;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,a,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(s=a;s-- >0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){a["default"].debugLog(new Date+" WeixinJSBridge on "+e,arguments),a["default"].debugInfo({type:"on",eventName:e,data:arguments,timesmap:new Date}),d[e]&&t&&(d[e]=[t]),f[e]&&t&&(f[e]=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(2),a=o(i),s=n(6),u=o(s),c=n(9),l=o(c),d={onSocketOpen:[],onSocketError:[],onSocketMessage:[],onSocketClose:[],onAppLaunch:[],onAppTerminate:[],onAppRoute:[],onAppRouteDone:[],onAppEnterBackground:[],onAppEnterForeground:[],onMusicPlay:[],onMusicPause:[],onMusicEnd:[],onMusicError:[],onPullDownRefresh:[],onAccelerometerChange:[],onNetworkStatusChange:[],onCanvasInsert:[],onDataPush:[],onBluetoothAdapterStateChange:[],onBluetoothDeviceFound:[],onBLEConnectionStateChanged:[],onBLECharacteristicValueChange:[],onBackgroundAudioStateChange:[],onAppRunningStatusChange:[],onRequestTaskStateChange:[],onUploadTaskStateChange:[],onDownloadTaskStateChange:[],onTapNavigationBarRightButton:[],onRecorderStateChange:[],onAudioStateChange:[],onAppConfig:[]},f={onShareAppMessage:!0};u["default"].on("triggerOnEvent",function(e,t,n){if(d[e]){var o=d[e],r=!0,i=!1,a=void 0;try{for(var s,u=o[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var c=s.value;c(t,n)}}catch(p){i=!0,a=p}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw a}}}f[e]&&"function"==typeof f[e]&&(0,l["default"])(t,n,f[e]),"insertContactButton"===e&&(console.group(new Date+"  调用临时会话成功"),console.log("sessionFrom: "+t.sessionFrom),console.groupEnd())}),window.DeviceOrientation=function(e,t,n){d.onAccelerometerChange.forEach(function(o){o({x:e,y:t,z:n})})}},function(e,t){"use strict";function n(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=Object.assign({title:decodeURIComponent(__wxConfig.app_nickname),path:__wxConfig.entryPagePath.replace(/\.html$/,""),desc:"",imgUrl:""},e);n(o,t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){a["default"].debugLog(new Date+" WeixinJSBridge subscribe",arguments),a["default"].debugInfo({type:"subscribe",eventName:e,data:arguments,timesmap:new Date}),c[e]=t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(2),a=o(i),s=n(6),u=o(s),c={};u["default"].on("triggerSubscribeEvent",function(e,t,n,o){c[e]&&c[e](t,n,o)})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n,o){if(a["default"].debugLog(new Date+" WeixinJSBridge publish "+e,arguments),t&&0!==e.indexOf("canvas")){var r=JSON.stringify(t),i=r.length;if(i>c.AppserviceMaxDataSize)return console.group(new Date+" 数据传输错误"),console.error(e+" 数据传输长度为 "+i+" 已经超过最大长度 "+c.AppserviceMaxDataSize),void console.groupEnd()}a["default"].debugInfo({type:"publish",eventName:e,data:arguments,timesmap:new Date}),"appDataChange"!==e&&"pageInitData"!==e&&"__updateAppData"!==e||(o||u["default"].sendMsgToNW({appData:__wxAppData,sdkName:"send_app_data"}),"appDataChange"===e&&(!f&&Date.now()-p<d&&(f=!0,console.group(new Date+"  Page.prototype.setData warning"),console.warn("调用 Page.prototype.setData 频繁，可能影响性能，请参考 "+l),console.log(__wxAppData),console.groupEnd()),p=Date.now())),u["default"].sendMsgToNW({eventName:e,data:t,webviewIds:n,sdkName:"publish"})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(2),a=o(i),s=n(3),u=o(s),c=n(4),l="https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html#setdata",d=50,f=!1,p=0},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(){var e=Math.random();return k[e]?r():e}function i(e){var t=e.command,n=e.msg||{},o=e.ext||{};if("GET_ASSDK_RES"===t){var r=o.callbackID;"function"==typeof k[r]&&(k[r](n),delete k[r])}}function a(e,t,n){if(d["default"].isTourist())return!0;if(S.Permission[e]){var o=S.Permission[e];0===o.state}return!0}function s(e,t,n){if(c["default"].debugLog(new Date+" WeixinJSBridge invoke "+e,arguments),!d["default"].check.apply(this,arguments)){c["default"].debugInfo({type:"invoke",eventName:e,data:arguments,timesmap:new Date});var o=(0,S.isSyncSDK)(e),i=function(){var e=arguments;"function"==typeof n&&(o?n.apply(n,arguments):setTimeout(function(){n.apply(n,e)},0))};if(a(e,t,i))if(b[e])b[e](e,t,i);else{if(y["default"][e]&&!y["default"][e].apply(this,arguments))return;var s=r(),u=function(e){i(e)};k[s]=u,g["default"].brigeToNW(e,t,s)}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s;var u=n(2),c=o(u),l=n(5),d=o(l),f=n(6),p=(o(f),n(3)),g=o(p),v=n(13),h=o(v),_=n(16),w=o(_),m=n(15),y=o(m),S=n(4),b=Object.assign(w["default"],h["default"]),k={};g["default"].registerCallback(i)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n=e.origin,o=(e.fullPath,e.tls);console.group(new Date+" wx.request 错误"),console.error(n+" 对应的服务器 TLS 为 "+o+" ，小程序要求的 TLS 版本必须大于等于 1.2 。控制台输入 showRequestInfo() 可以获取更详细信息。"),console.groupEnd(),t&&t({errMsg:"request:fail 小程序要求的 TLS 版本必须大于等于 1.2"})}function i(e,t){var n=e.origin;e.fullPath,e.tls;console.group(new Date+" wx.request 错误"),console.error(n+" 对应的服务器证书无效。控制台输入 showRequestInfo() 可以获取更详细信息。"),console.groupEnd(),t&&t({errMsg:"request:fail 对应的服务器证书无效。"})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),s=o(a),u=n(5),c=(o(u),n(14)),l=n(4),d=n(15),f={1e3:"normal closure",1001:"going away",1002:"protocol error",1003:"unsupported data",1004:"reserved",1005:"no status rcvd",1006:"abnormal closure",1007:"invalid frame payload data",1008:"policy violation",1009:"message too big",1010:"mandatory ext.",1011:"internal server error",1015:"tls handshake"},p={},g=1,v=null,h=0,_=function(e,t,n){h++;var o=function(e){h--,"function"==typeof n&&n(e)};if(h>l.MaxRequestConcurrent)return console.group(new Date+" request 错误"),console.error("同时最多发起 "+l.MaxRequestConcurrent+" 个 request 请求，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html"),console.groupEnd(),void o({errMsg:e+":fail exceed max task count"});var a=t.url;if(!(0,d.checkUrl)(a))return void o({errMsg:e+":fail"});var u=(0,c.getSecuryDetailsByURL)(a);if(u.isReady){if(!u.isSecuryTLS)return void r(u,o);if(!u.isSecuryCertificate)return void i(u,o)}var f=t.header||{},p=new XMLHttpRequest,g=t.method||"POST";p.timeout=l.appconfig.networkTimeout&&l.appconfig.networkTimeout.request||6e4,p.open(g,t.url,!0),p.onreadystatechange=function(){if(3==p.readyState,4==p.readyState){p.onreadystatechange=null;var t=p.status;if(0==t);else{var n=function(n){n.isSecuryTLS?n.isSecuryCertificate?o({errMsg:e+":ok",data:p.responseText,header:l,statusCode:t}):i(n,o):r(n,o)},u=(0,c.getSecuryDetailsByURL)(a),l=[];try{l=JSON.parse(p.getResponseHeader("for-weapp-devtools"))}catch(d){}u.isReady?n(u):s["default"].once("TLS_CHECK_READY_"+u.id,n)}}},p.onerror=function(){o({errMsg:e+":fail"})},p.ontimeout=function(){o({errMsg:e+":fail timeout"})};var v=0;for(var _ in f)"content-type"===_.toLowerCase()&&v++;v>=2&&delete f["content-type"];var w=!1;for(var m in f)if(f.hasOwnProperty(m)){var y=m.toLowerCase();w="content-type"==y||w,"cookie"===y?p.setRequestHeader("_Cookie",f[m]):p.setRequestHeader(m,f[m])}"POST"!=g||w||p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");var S="string"==typeof t.data?t.data:null;try{p.send(S)}catch(b){o({errMsg:e+":fail"})}return p},w=function(e,t,n){var o=t.url;t.header;return(0,d.checkUrl)(o,"webscoket")?(v=new WebSocket(o,t.protocols||[]),v.onopen=function(e){s["default"].emit("triggerOnEvent","onSocketOpen",{})},v.onmessage=function(e){s["default"].emit("triggerOnEvent","onSocketMessage",{data:e.data})},v.onclose=function(e){s["default"].emit("triggerOnEvent","onSocketClose",{code:e.code,reason:e.reason||f[e.code]||""})},v.onerror=function(e){s["default"].emit("triggerOnEvent","onSocketError",{})},void(n&&n({errMsg:"connectSocket:ok"}))):void(n&&n({errMsg:"connectSocket:fail"}))},m=function(e,t,n){v?(v.close(t.code,t.reason),v=null,n&&n({errMsg:"closeSocket:ok"})):n&&n({errMsg:"closeSocket:fail"})},y=function(e,t,n){var o=t.data;if(v)try{v.send(o),n&&n({errMsg:"sendSocketMessage:ok"})}catch(r){n&&n({errMsg:"sendSocketMessage:fail "+r.message})}else n&&n({errMsg:"sendSocketMessage:fail"})},S=function(e,t,n){var o={id:g++,url:t.url,data:t.data,header:t.header,method:t.method,callback:function(e,t){var n={};n=0===t.errMsg.indexOf("request:ok")?{requestTaskId:e,state:"success",data:t.data,header:t.header,statusCode:t.statusCode}:{requestTaskId:e,state:"fail",errMsg:t.errMsg},delete p[e],s["default"].emit("triggerOnEvent","onRequestTaskStateChange",n)}};n({errMsg:e+":ok",requestTaskId:o.id}),p[o.id]=o,o.xhr=_("request",t,o.callback.bind(void 0,o.id))},b=function(e,t,n){var o=t.requestTaskId,r=t.operationType,i=p[o];if(!i)return n({errMsg:e+":fail task not found"});if("abort"!==r)return n({errMsg:e+":fail illegal operationType"});try{i.xhr.abort()}catch(a){n({errMsg:e+":fail "+a})}};t["default"]={request:_,connectSocket:w,sendSocketMessage:y,closeSocket:m,createRequestTask:S,operateRequestTask:b}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=document.createElement("a");return t.href=e,{protocol:t.protocol,origin:t.origin,fullPath:t.origin+"/"+t.pathname}}function i(e){var t=r(e),n=t.protocol,o=t.origin,i=t.fullPath,a=l[o];return s["default"].isTourist()||!__wxConfig.urlCheck||"https:"!==n?(a={isReady:!0,isSecuryTLS:!0,isSecuryCertificate:!0},l[o]=a,a):a?a:(a={isReady:!1,id:d++,tls:"",isSecuryTLS:!1,securityState:"",isSecuryCertificate:!1,protocol:n,origin:o,fullPath:i,url:e},l[o]=a,a)}Object.defineProperty(t,"__esModule",{value:!0}),t.parseURL=t.getSecuryDetailsByURL=t.securityDetails=void 0;var a=n(5),s=o(a),u=n(6),c=o(u),l=window.securityDetails={},d=1e4;window.setSecurityDetails=function(e,t){var n=r(e),o=n.origin;t=JSON.parse(t),l[o]||(l[o]={});var i=t,a=i.protocol,s=i.securityState,u=!1;a&&(u=parseFloat(a.replace("TLS ",""))>=1.2),l[o].isSecuryTLS=u,l[o].tls=a,l[o].securityState=s,l[o].isSecuryCertificate="insecure"!==s,l[o].isReady=!0,l[o].remoteAddress=t.remoteAddress,l[o].statusCode=t.statusCode;var d=l[o].id;c["default"].emit("TLS_CHECK_READY_"+d,l[o])},t.securityDetails=l,t.getSecuryDetailsByURL=i,t.parseURL=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(a["default"].isTourist())return console.group(new Date+" 无 AppID 关联"),console.warn("工具未检查合法域名，更多请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html"),console.groupEnd(),!0;if(!__wxConfig.urlCheck)return console.group(new Date+" 配置中关闭 请求域名、TLS 版本以及 HTTPS 证书检查"),console.warn("工具未校验请求域名、TLS 版本以及 HTTPS 证书。"),console.groupEnd(),!0;try{var n=[];n="download"===t?s.NetworkConfig.DownloadDomain:"upload"===t?s.NetworkConfig.UploadDomain:"webscoket"===t?s.NetworkConfig.WsRequestDomain:s.NetworkConfig.RequestDomain;for(var o=0;o<n.length;o++)if(e&&0===e.indexOf(n[o]))return!0;var r=[];n.forEach(function(e){r.push([e])}),console.group(new Date+" 合法域名校验出错"),console.info("如若已经在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“项目-配置信息-刷新”"),console.error(" "+e+" 不在以下合法域名列表中，请参考文档：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html"),console.table(r),console.groupEnd()}catch(i){return console.error(i),!1}}var i=n(5),a=o(i),s=n(4),u=function(e,t,n){return!!r(t.url,"upload")||(n({errMsg:e+":fail illegal host"}),!1)},c=function(e,t,n){return!!r(t.url,"download")||(n({errMsg:e+":fail illegal host"}),!1)};e.exports={uploadFile:u,downloadFile:c,checkUrl:r}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={chooseContact:function(e,t,n){n&&n({errMsg:"chooseContact:ok",phoneNumber:"18688888888",firstName:"lin",middleName:"none",lastName:"chao"})},reportKeyValue:function(){},reportIDKey:function(){}}},function(e,t){"use strict";function n(){var e=["Caches","screen","performance ","getComputedStyle","openDatabase","btoa","Image"];e.forEach(function(e){delete window[e]}),window.chrome=void 0,window.addEventListener("load",function(e){history.replaceState({},{},location.href+"?load")})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}])});