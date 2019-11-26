/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var i=function(){function e(){t(this,e)}var i,r,s;return i=e,s=[{key:"applyMixin",value:function(t){[e].forEach(function(e){Object.getOwnPropertyNames(e.prototype).forEach(function(n){"constructor"!==n&&(t.prototype[n]=e.prototype[n])})})}}],(r=[{key:"addEventListener",value:function(e,t){this._eventListeners||(this._eventListeners=[]),this._eventListeners.push({type:e.toLowerCase(),listener:t})}},{key:"removeEventListener",value:function(e,t){var n;if(this._eventListeners)for(n=this._eventListeners.length-1;n>=0;n--)this._eventListeners[n].type==e&&this._eventListeners[n].listener==t&&this._eventListeners.splice(n,1)}},{key:"dispatchEvent",value:function(e){if(this._eventListeners){var t,n=this._eventListeners.slice(0);for(t=0;t<n.length;t++){var i=n[t];if(e&&e.type&&i.type==e.type.toLowerCase()&&!1===i.listener.apply(this,[e]))return!1}}return!0}}])&&n(i.prototype,r),s&&n(i,s),e}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.EventTargetMixin=i;e.GenericEvent=function e(n,i){t(this,e),this.type=n,this.options=i,null!=i&&(this.detail=i.detail)}});