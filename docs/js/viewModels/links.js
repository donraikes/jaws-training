/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["knockout","ojs/ojmodule-element-utils","ojs/ojrouter","ojs/ojknockout","ojs/ojnavigationlist","ojs/ojdefer","ojs/ojmodule","ojs/ojmodule-element"],(function(e,o,n){return new function(){var t=this,i=n.rootInstance;t.router=i.createChildRouter("form").configure({select:{label:"Select",value:"select",isDefault:!0},input:{label:"Input",value:"input"},validation:{label:"Validation",value:"validation"}}),n.sync(),t.moduleConfig=e.pureComputed((function(){var e=t.router.moduleConfig.name(),n="views/linksContent/"+e+".html",i="viewModels/linksContent/"+e;return Promise.all([o.createView({viewPath:n}),o.createViewModel({viewModelPath:i})]).then((function(e){return{view:e[0],viewModel:e[1]}}))})),t.changeHandler=function(e){t.router.go(e.detail.value)},t.connected=function(){},t.disconnected=function(){},t.transitionCompleted=function(){}}}));