/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["knockout","ojs/ojmodule-element-utils","ojs/ojrouter","ojs/ojknockout","ojs/ojnavigationlist","ojs/ojdefer","ojs/ojmodule","ojs/ojmodule-element"],(function(e,o,t){return new function(){var n=this,r=t.rootInstance;n.router=r.createChildRouter("form").configure({before:{label:"Before",value:"before",isDefault:!0},after:{label:"After",value:"after"}}),t.sync(),n.moduleConfig=e.pureComputed((function(){var e=n.router.moduleConfig.name(),t="views/formContent/"+e+".html",r="viewModels/formContent/"+e;return Promise.all([o.createView({viewPath:t}),o.createViewModel({viewModelPath:r})]).then((function(e){return{view:e[0],viewModel:e[1]}}))})),n.changeHandler=function(e){n.router.go(e.detail.value)},n.connected=function(){},n.disconnected=function(){},n.transitionCompleted=function(){}}}));