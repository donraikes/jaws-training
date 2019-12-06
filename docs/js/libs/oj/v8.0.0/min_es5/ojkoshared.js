/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojconfig","knockout","ojs/ojlogger"],function(e,t,n){"use strict";function r(){this.Init()}function i(n,r){return function(i,o,a,s){var u=e.getExpressionEvaluator();return u?function(e,n,r,i){var o=i[e];if(!o){var a=t.expressionRewriting.preProcessBindings(e,n);o=r.createEvaluator("{"+a+"}").evaluate,i[e]=o}return o}(i,s,u,r)([o.$data||{},o,{$element:a}]):n(i,o,a,s)}}return oj.Object.createSubclass(r,oj.Object,"ComponentBinding.GlobalChangeQueue"),r.prototype.Init=function(){r.superclass.Init.call(this),this._trackers=[],this._queue=[]},r.prototype.registerComponentChanges=function(e){-1===this._trackers.indexOf(e)&&(this._trackers.push(e),this._delayTimer||(this._delayTimer=setTimeout(oj.Object.createCallback(this,this._deliverChangesImpl),1),this._delayPromise=new Promise(function(e){this._delayPromiseResolver=e}.bind(this))))},r.prototype.deliverChanges=function(){this._delayTimer&&clearTimeout(this._delayTimer),this._deliverChangesImpl()},r.prototype.getThrottlePromise=function(){return this._delayPromise||Promise.resolve()},r.prototype._deliverChangesImpl=function(){this._delayTimer=null,this._resolveDelayPromise();var e=this._trackers;this._trackers=[];for(var t=0;t<e.length;t++){var n=e[t];this._queue.push({tracker:n,changes:n.flushChanges()})}for(;this._queue.length>0;){var r=this._queue.shift();r.tracker.applyChanges(r.changes)}},r.prototype._resolveDelayPromise=function(){this._delayPromise&&(this._delayPromiseResolver(),this._delayPromiseResolver=null,this._delayPromise=null)},(new function(){var o=new WeakMap,a={},s={},u={},c="_ojExtended",l="_ojCacheScope",d=new r;function p(t){var n=e.getExpressionEvaluator();if(n){var r=n.createEvaluator(t).evaluate;return function(e,t){return r([e,e.$data||{},{$element:t}])}}return new Function("$context","$element","with($context.$data||{}){with($context){return "+t+"}}")}function h(e,t,n){if(!n)return e(t,n);var r,i=o,a=n[l]||n;(r=i.get(a))||(r={},i.set(a,r));var s=r[t];return s||(s=e(t,n),r[t]=s),s}function g(e,t,n){var r=t.getBindingsString;if(r)return r.call(t,e,n);switch(e.nodeType){case 1:return e.getAttribute("data-bind");case 8:var i=e.nodeValue.match(/^\s*ko(?:\s+([\s\S]+))?\s*$/);return i?i[1]:null;default:return null}}this.install=function(){var e=t.bindingProvider,r=e.instance;if(!r.getBindingAccessors)return n.error("JET's Knockout bindings are not compatible with the current binding provider since it does not implement getBindingAccessors()"),this;var o={getWrapped:function(){return r}};e.instance=o;var l=[];return l.push("getBindingAccessors","nodeHasBindings","getBindings"),l.forEach(function(e){o[e]=function(e,n,r){var i="nodeHasBindings"===n;return function(o){if(i){var s=o.nodeType;if(1!==s&&8!==s)return!1}var u=r(n,e[n]),c=u?u.apply(e,arguments):null,l=a[n];if(null!=l){var d=arguments;l.forEach(function(n){var r=Array.prototype.slice.call(d);r.push(c,e),c=t.ignoreDependencies(n,null,r)})}return c}}(r,e,function(e,n){return"getBindingAccessors"!==e?n:function(e,n){return function(r,i){if(i[c]){var o=g(r,n,i),a=o?function(e,n){return h(function(e){var n=t.expressionRewriting.preProcessBindings(e,{valueAccessors:!0});return p("{"+n+"}")},e,n)}(o,i)(i,r):null;if(1===r.nodeType&&t.components.isRegistered(r.tagName.toLowerCase())){var s=e.call(n,r,i),u=s.component;u&&((a=a||{}).component=u)}return a}return e.call(n,r,i)}}(n,r)})}),o.preprocessNode=function(e){var n=e.preprocessNode;return function(r){var i,o,a=null;return 1===r.nodeType&&(i=s[r.nodeName.toLowerCase()]),i||(i=n,a=e),i&&(o=t.ignoreDependencies(i,a,[r])),Array.isArray(o)&&(o=function(e,n){for(var r=t.bindingProvider.instance,i=n.slice(0),o=n[0],a=0,s=0;a>=0;){var u=t.virtualElements.nextSibling(o);if(o!==e){var c=r.preprocessNode(o);Array.isArray(c)&&(i.splice.apply(i,[s,1].concat(c)),s+=c.length-1)}s+=1;var l=a+1;a=(o=u)?n.indexOf(o,l):-1,s+=a-l}return i}(r,o)),o}}(r),function(e){var t=e.nativeTemplateEngine.prototype,n="renderTemplateSource",r=t[n];t[n]=function(e,t,n,i){return r.call(this,e,t,n,i||document)}}(t),function(e){for(var r,o=t.bindingProvider.instance;o&&!r;){var a=o.parseBindingsString;a?(r=!0,o.parseBindingsString=i(a.bind(o),e)):o=o.getWrapped?o.getWrapped():null}r||n.error("Unable to patch KO expression evaluation implementation. If you have a custom binding provider, make sure it implements the getWrapped() method that returns the default binding provider instance.")}(u),this},this.addPostprocessor=function(e){Object.keys(e).forEach(function(t){a[t]=a[t]||[],a[t].push(e[t])})},this.registerPreprocessor=function(e,t){s[e]=t},this.getBindingsString=function(e,t,n){return g(e,t,n)},this.extendBindingContext=function(e,t,n,r,i){var o={$current:t,$root:void 0,$parent:void 0,$parents:void 0};return n&&(o[n]=t),r&&(o[r]=t),e?o=e.extend(o):o.$data={},Object.defineProperty(o,l,{value:i}),Object.defineProperty(o,c,{value:!0}),o},this.createBindingExpressionEvaluator=function(t,n){if(n[c])return p(t);var r=e.getExpressionEvaluator();if(r){var i=r.createEvaluator(t).evaluate;return function(e){return i([e.$data||{},e])}}return new Function("$context","with($context){with($data||{}){return "+t+";}}")},this.createEvaluator=function(e,t){return h(this.createBindingExpressionEvaluator,e,t)},this.getGlobalChangeQueue=function(){return d},this.getThrottlePromise=function(){return this.getGlobalChangeQueue().getThrottlePromise()}}).install()});