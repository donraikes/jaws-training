/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["accUtils"],(function(n){return function(){this.connected=function(){n.announce("Overviewpage loaded.","assertive"),document.title="Dashboard"},this.disconnected=function(){},this.transitionCompleted=function(){}}}));