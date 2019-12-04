/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["accUtils","knockout","ojs/ojmodule-element-utils","ojs/ojrouter","ojs/ojknockout","ojs/ojnavigationlist","ojs/ojdefer","ojs/ojmodule","ojs/ojmodule-element"],(function(e,o,n,t){return new function(){var e=this,i=t.rootInstance;e.router=i.createChildRouter("links").configure({before:{label:"Before",value:"before",isDefault:!0},after:{label:"After",value:"after"}}),t.sync(),e.moduleConfig=o.pureComputed((function(){var o=e.router.moduleConfig.name(),t="views/linkContent/"+o+".html",i="viewModels/linkContent/"+o;return Promise.all([n.createView({viewPath:t}),n.createViewModel({viewModelPath:i})]).then((function(e){return{view:e[0],viewModel:e[1]}}))})),e.changeHandler=function(o){e.router.go(o.detail.value)},e.connected=function(){},e.disconnected=function(){},e.transitionCompleted=function(){}}}));