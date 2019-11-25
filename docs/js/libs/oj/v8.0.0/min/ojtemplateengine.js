/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["knockout","ojs/ojcore","ojs/ojkoshared","ojs/ojhtmlutils","ojs/ojlogger"],function(t,e,n,r,o){"use strict";return new function(){this.execute=function(e,n,r,o){var i=a(n),s=n.getAttribute("data-oj-as");return t.applyBindingsToDescendants(u(e,n,r,o,s),i),Array.prototype.slice.call(i.childNodes,0)},this.clean=function(e){return t.cleanNode(e)},this.resolveProperties=function(r,o,s,c,l,f,d,p){var v=u(r,o,l,f,o.getAttribute("data-oj-as"));return function(n,r,o){return i=t.pureComputed(function(){var i={};n.evalMap.forEach(function(e,n){var a=t.utils.unwrapObservable(e(r));o&&o(n,a),i[n[0]]=function(t,e,n){if(e.length<2)return n;for(var r=t[e[0]]||{},o=r,i=e.length-1,a=1;a<i;a++){var u=e[a],s=o[u]||{};o[u]=s,o=s}return o[e[i]]=n,r}(i,n,a)});var a=e.CollectionUtils.copyInto,u=a({},n.staticMap,null,!0);return u=a(u,i,null,!0)}),a={},["peek","subscribe","dispose"].forEach(function(t){a[t]=i[t].bind(i)}),a;var i,a}(function(t,r,o,u,s){var c=i.get(t);if(!c){c={},i.set(t,c);var l=a(t),f=l.querySelector(o);c.evalMap=function(t,r,o){for(var i=new Map,a=t?t.attributes:[],u=0;u<a.length;u++){var s=a[u],c=e.__AttributeUtils.attributeToPropertyName(s.name),l=c.split(".");if(r.has(l[0])){var f=e.__AttributeUtils.getExpressionInfo(s.value),d=f.expr;d&&i.set(l,n.createBindingExpressionEvaluator(d,o))}}return i}(f,u,r),c.staticMap=function(t,e,n){var r={};if(t){var o=t.style;o.display="none",o.position="absolute",t.setAttribute("data-oj-binding-provider","none"),n.appendChild(t),e.forEach(function(e){void 0!==t[e]&&(r[e]=t[e])}),n.removeChild(t)}return r}(f,u,s)}return c}(o,v,s,c,p||r),v,d)},this.defineTrackableProperty=function(e,n,r,o){!function(e,n,r,o){var i=t.observable(r);Object.defineProperty(e,n,{get:function(){return i()},set:function(t){i(t),o&&o(t)},enumerable:!0})}(e,n,r,o)},this.getThrottlePromise=function(){return n.getThrottlePromise()};var i=new WeakMap;function a(t){for(var e=document.createElement("div"),n=r.getTemplateContent(t),o=0;o<n.length;o++)e.appendChild(n[o]);return e}function u(e,r,i,a,u){var s=r.__ojBindingContext?r.__ojBindingContext:t.contextFor(r);return s||(o.info("Binding context not found when processing template for element with id: "+e.id+". Using binding context for element instead."),s=t.contextFor(e)),n.extendBindingContext(s,i,a,u,e)}}});