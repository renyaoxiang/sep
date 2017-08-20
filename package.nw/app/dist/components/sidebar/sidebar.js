"use strict";function init(){var e,t=require("../../lib/react.js"),a=require("../../cssStr/cssStr.js"),i=require("../../actions/webviewActions.js"),r=require("../../actions/windowActions.js"),s=require("../../stores/windowStores.js"),n=require("../../actions/projectActions.js"),o=require("../../stores/projectStores.js"),c=(require("../../weapp/utils/projectManager.js"),require("../../stores/configStores.js")),l=require("../../config/weappConfig.js"),p=l.default_scene,d=require("./music.js"),m=require("./cache.js"),u=require("./backgroundAudio.js"),b=require("url"),h=require("querystring"),E=require("../../config/compileTypeConfig.js"),g=require("../../utils/newReport.js"),N=t.createClass({displayName:"Sidebar",getInitialState:function(){var e=this.props.project;return e&&g("project_debug",e.appid),{compileType:e?e.compileType:E.weapp,inForeground:!0}},_restart:function(){this.setState({inForeground:!0})},_onCompileTypeChange:function(e){this.setState({compileType:e})},_appEnterBackground:function(){this.setState({inForeground:!1})},_appEnterForeground:function(){this.setState({inForeground:!0})},componentDidMount:function(){o.on("RESTART_PROJECT",this._restart),o.on("ON_COMPILE_CHANGE",this._onCompileTypeChange),s.on("APP_ENTER_BACKGROUND",this._appEnterBackground),s.on("APP_ENTER_FOREGROUND",this._appEnterForeground)},componentWillUnmount:function(){o.removeListener("RESTART_PROJECT",this._restart),o.removeListener("ON_COMPILE_CHANGE",this._onCompileTypeChange),s.removeListener("APP_ENTER_BACKGROUND",this._appEnterBackground),s.removeListener("APP_ENTER_FOREGROUND",this._appEnterForeground)},handleOnclick:function(e){var t=e.currentTarget,a=t.dataset,i=a.type;this.props.optProject(i),g("project_"+i,this.props.project.appid)},handleAppTerminate:function(e){n.close(),g("project_close",this.props.project.appid)},handleAppRestart:function(t){var a=this;clearTimeout(e),e=setTimeout(function(){n.restart(a.props.project);"edit"===a.props.show?"project_compile":"project_restart"},200)},handleAppEnterBackground:function(e){r.appEnterBackground(),i.postMessageToAS({eventName:"onAppRunningStatusChange",data:{status:"background"}}),i.postMessageToAS({eventName:"onAppEnterBackground",type:"ON_APPLIFECYCLE_EVENT"}),g("project_background",this.props.project.appid)},handleAppEnterForeground:function(e){var t=o.getCurrentProject(),a=t.initPath.enable&&t.initPath.scene||p;a=parseInt(a);var n="";r.appEnterForeground({scene:a});try{var l=s.getCurrentWebviewUrl(),d=b.parse(l);n=d.pathname.replace(/^\//,"")}catch(e){}var m=void 0,u=void 0;if(a==c.getMiniProgramScene()||a==c.getMiniProgramBackScene()){if(m={},t.initPath.enable&&(t.initPath.appid&&(m.appId=t.initPath.appid),t.initPath.referData))try{m.extraData=JSON.parse(t.initPath.referData)}catch(e){}}else if(a==c.getGroupScene()&&(u={},t.initPath.enable)){var E=t.initPath.groupInfo;E&&(u.shareKey=E.shareKey,u.userName=E.shareName)}i.postMessageToAS({eventName:"onAppRunningStatusChange",data:{status:"active"}}),i.postMessageToAS({eventName:"onAppEnterForeground",data:{scene:a,path:n||"",query:h.parse(d.query||""),shareInfo:u,referrerInfo:m},type:"ON_APPLIFECYCLE_EVENT"})},showCustom:function(){var e=this,t=this.state.compileType;if(t==E.widget)return this.showWidgetCustom();if(t==E.search)return this.showSearchWidgetCustom();var a=this.props.project;r.showCustomPreview({project:a,callback:function(t){o.setProjectInitPath(a.hash,{enable:t.enable,page:t.page,scene:t.scene,query:t.query,referData:t.referData,groupInfo:t.groupInfo,appid:t.appid}),e.handleAppRestart()}})},showWidgetCustom:function(){var e=this.props.project;r.showWidgetCustom({project:e})},showSearchWidgetCustom:function(){var e=this.props.project;r.showSearchWidgetCustom({project:e})},render:function(){var e={detail:"sidebar-item",debug:"sidebar-item",edit:"sidebar-item",mobile:"sidebar-item"},i=this.props.show;if(e[i]="sidebar-item sidebar-item-active",!this.props.project)return t.createElement("div",{className:"sidebar"},t.createElement("div",{"data-type":"debug",onClick:this.handleOnclick,className:e.debug},t.createElement("i",{className:"sidebar-item-icon sidebar-item-icon-debug"}),t.createElement("label",{className:"sidebar-item-label"},"调试")),t.createElement("div",{className:"sidebar-item sidebar-item-sep"}),t.createElement("div",{className:"sidebar-item-toolbar"},t.createElement("div",{title:"返回","data-type":"appTerminate",onClick:this.handleAppTerminate,className:"sidebar-item"},t.createElement("i",{className:"sidebar-item-icon  sidebar-item-icon-close"}),t.createElement("label",{className:"sidebar-item-label"},"返回"))));var r=this.state.compileType===E.weapp,s=r&&this.state.inForeground?{}:a.displayNone,n=r&&!this.state.inForeground?{}:a.displayNone,o="debug"===i||"edit"===i?{}:a.displayNone,c="debug"===i||"edit"===i?{borderTop:"none"}:{};return t.createElement("div",{className:"sidebar"},t.createElement("div",{"data-type":"edit",onClick:this.handleOnclick,className:e.edit},t.createElement("i",{className:"sidebar-item-icon sidebar-item-icon-editor"}),t.createElement("label",{className:"sidebar-item-label"},"编辑")),t.createElement("div",{"data-type":"debug",onClick:this.handleOnclick,className:e.debug},t.createElement("i",{className:"sidebar-item-icon sidebar-item-icon-debug"}),t.createElement("label",{className:"sidebar-item-label"},"调试")),t.createElement("div",{"data-type":"detail",onClick:this.handleOnclick,className:e.detail},t.createElement("i",{className:"sidebar-item-icon sidebar-item-icon-detail"}),t.createElement("label",{className:"sidebar-item-label"},"项目")),t.createElement("div",{className:"sidebar-item sidebar-item-sep"}),t.createElement("div",{className:"sidebar-item-toolbar",style:o},t.createElement(d,null),t.createElement(u,null),t.createElement("div",{title:("darwin"===process.platform?"Command":"Ctrl")+" + b",onClick:this.handleAppRestart,className:"sidebar-item",style:{paddingBottom:0}},t.createElement("i",{className:"sidebar-item-icon  sidebar-item-icon-reset"})),t.createElement("div",{title:("darwin"===process.platform?"Command":"Ctrl")+" + b",onClick:this.showCustom,className:"sidebar-item",style:{paddingTop:0,paddingBottom:5}},t.createElement("i",{className:"sidebar-item-icon  sidebar-item-icon-custom",style:{marginRight:5}})),t.createElement("div",{onClick:this.handleAppRestart,className:"sidebar-item",style:{paddingTop:0,cursor:"default"}},t.createElement("label",{className:"sidebar-item-label",style:{cursor:"default"}},"编译")),t.createElement("div",{title:"切换到后台","data-type":"appEnterBackground",onClick:this.handleAppEnterBackground,style:s,className:"sidebar-item"},t.createElement("i",{className:"sidebar-item-icon sidebar-item-icon-backward"}),t.createElement("label",{className:"sidebar-item-label"},"后台")),t.createElement("div",{title:"切换到前台","data-type":"appEnterForeground",onClick:this.handleAppEnterForeground,style:n,className:"sidebar-item"},t.createElement("i",{className:"sidebar-item-icon  sidebar-item-icon-forward"}),t.createElement("label",{className:"sidebar-item-label"},"前台")),t.createElement(m,{project:this.props.project})),t.createElement("div",{className:"sidebar-item-toolbar",style:c},t.createElement("div",{title:"关闭项目","data-type":"appTerminate",onClick:this.handleAppTerminate,className:"sidebar-item"},t.createElement("i",{className:"sidebar-item-icon  sidebar-item-icon-close"}),t.createElement("label",{className:"sidebar-item-label"},"关闭"))))}});_exports=N}var _exports;init(),module.exports=_exports;