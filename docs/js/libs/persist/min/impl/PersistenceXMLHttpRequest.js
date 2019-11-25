define(["../persistenceUtils","./logger"],function(a,b){"use strict";function c(a){var b=this;Object.defineProperty(this,"_eventListeners",{value:[],writable:!0}),Object.defineProperty(this,"_browserXMLHttpRequest",{value:a}),Object.defineProperty(this,"_method",{value:null,writable:!0}),Object.defineProperty(this,"onabort",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"onerror",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"onload",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"onloadend",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"onloadstart",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"onprogress",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"onreadystatechange",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"ontimeout",{value:null,enumerable:!0,writable:!0}),Object.defineProperty(this,"_password",{value:null,writable:!0}),Object.defineProperty(this,"_readyState",{value:0,writable:!0}),Object.defineProperty(this,"readyState",{enumerable:!0,get:function(){return b._readyState}}),Object.defineProperty(this,"_requestHeaders",{value:{},writable:!0}),Object.defineProperty(this,"_response",{value:"",writable:!0}),Object.defineProperty(this,"response",{enumerable:!0,get:function(){return b._response}}),Object.defineProperty(this,"_responseHeaders",{value:{},writable:!0}),Object.defineProperty(this,"_responseText",{value:"",writable:!0}),Object.defineProperty(this,"responseText",{enumerable:!0,get:function(){return b._responseText}}),Object.defineProperty(this,"responseType",{value:"",enumerable:!0,writable:!0}),Object.defineProperty(this,"_responseURL",{value:"",writable:!0}),Object.defineProperty(this,"responseURL",{enumerable:!0,get:function(){return b._responseURL}}),Object.defineProperty(this,"_responseXML",{value:null,writable:!0}),Object.defineProperty(this,"responseXML",{enumerable:!0,get:function(){return b._responseXML}}),Object.defineProperty(this,"_status",{value:0,writable:!0}),Object.defineProperty(this,"status",{enumerable:!0,get:function(){return b._status}}),Object.defineProperty(this,"_statusText",{value:"",writable:!0}),Object.defineProperty(this,"statusText",{enumerable:!0,get:function(){return b._statusText}}),Object.defineProperty(this,"timeout",{value:0,enumerable:!0}),Object.defineProperty(this,"upload",{value:null,enumerable:!0}),Object.defineProperty(this,"_url",{value:null,writable:!0}),Object.defineProperty(this,"_username",{value:null,writable:!0}),Object.defineProperty(this,"withCredentials",{value:!1,enumerable:!0,writable:!0})}function d(a,b){a._readyState=b,a.dispatchEvent(new k("readystatechange")),a._readyState==c.DONE&&(a.dispatchEvent(new k("load",!1,!1,a)),a.dispatchEvent(new k("loadend",!1,!1,a)))}function e(a){var b=a.toLowerCase();if(0===b.indexOf("http:")||0===b.indexOf("https:"))return!1;if(0===b.indexOf("file:")||0===b.indexOf("cdvfile:"))return!0;if(URL&&URL.prototype&&(b=new URL(a,window.location.href).origin,null!=b&&"null"!=b&&b.length>0))return 0===b.toLowerCase().indexOf("file:");var c=document.createElement("a");return c.href=a,b=c.protocol,!(!b||0!==b.toLowerCase().indexOf("file:"))}function f(a){function b(b){c.append(b,a._requestHeaders[b])}var c=new Headers;return Object.keys(a._requestHeaders).forEach(b),c}function g(a,b){var c=f(a),d=a.withCredentials?"include":"same-origin",e={method:a._method,headers:c,mode:"cors",cache:"default",credentials:d};return"GET"!==a._method&&"HEAD"!==a._method&&"DELETE"!==a._method&&(e.body=b),e}function h(e,f,g){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: Processing Response"),i(e,g.headers);var h=g.headers.get("Content-Type");e._status=g.status,e._statusText=g.statusText,e._responseURL=f.url;var j=a._derivePayloadType(e,g);if("blob"===j)b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: Calling response.blob()"),g.blob().then(function(a){e._responseType="blob",e._response=a,d(e,c.DONE),"function"==typeof e.onload&&e.onload()},function(a){b.error(a)});else if("arraybuffer"===j)b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: Calling response.arrayBuffer()"),g.arrayBuffer().then(function(a){e._responseType="arrayBuffer",e._response=a,d(e,c.DONE),"function"==typeof e.onload&&e.onload()},function(a){b.error("error reading response as arrayBuffer!")});else if("multipart"===j){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: Calling response.formData()"),e._responseType="formData";var k=function(b){var f="",g=a.parseMultipartFormData(b,h);g.forEach(function(a){f+=a.data}),e._response=f,e._responseText=f,d(e,c.DONE),"function"==typeof e.onload&&e.onload()};if(g.formData)try{g.formData().then(function(a){var b,f,g="",h=a.values();do f=h.next(),b=f.value,b&&(g+=b);while(!f.done);e._response=g,e._responseText=g,d(e,c.DONE),"function"==typeof e.onload&&e.onload()})}catch(a){g.text().then(function(a){k(a)})}else g.text().then(function(a){k(a)})}else g.text().then(function(a){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: Calling response.text()"),e._responseType="",e._response=a,e._responseText=a,d(e,c.DONE),"function"==typeof e.onload&&e.onload()},function(a){b.error(a)})}function i(a,b){if(a._responseHeaders={},b.entries){var e,f,g,h=b.entries();do e=h.next(),e.value&&(f=e.value[0],g=e.value[1],a._forceMimeType&&"content-type"==f.toLowerCase()?a._responseHeaders[f]=a._forceMimeType:a._responseHeaders[f]=g);while(!e.done)}else b.forEach&&b.forEach(function(b,c){a._forceMimeType&&"content-type"==c.toLowerCase()?a._responseHeaders[c]=a._forceMimeType:a._responseHeaders[c]=b});d(a,c.HEADERS_RECEIVED)}function j(a){if(a._readyState!==c.OPENED)throw new Error("INVALID_STATE_ERR")}function k(a,b,c,d){Object.defineProperty(this,"type",{value:a,enumerable:!0}),Object.defineProperty(this,"bubbles",{value:b,enumerable:!0}),Object.defineProperty(this,"cancelable",{value:c,enumerable:!0}),Object.defineProperty(this,"target",{value:d,enumerable:!0})}return Object.defineProperty(c,"UNSENT",{value:0,enumerable:!0}),Object.defineProperty(c,"OPENED",{value:1,enumerable:!0}),Object.defineProperty(c,"HEADERS_RECEIVED",{value:2,enumerable:!0}),Object.defineProperty(c,"LOADING",{value:3,enumerable:!0}),Object.defineProperty(c,"DONE",{value:4,enumerable:!0}),c.prototype.open=function(a,f,g,h,i){if(b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: open() for method: "+a+", url: "+f),"boolean"==typeof g&&!g)throw new Error("InvalidAccessError: Failed to execute 'open' on 'XMLHttpRequest': Synchronous requests are disabled on the XHR Adapter");this._method=a,this._url=f;var j=e(f);if(j){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: open called for a File url");var k=this;this._passthroughXHR=new k._browserXMLHttpRequest,this._passthroughXHR.onreadystatechange=function(){var a=k._passthroughXHR.readyState;a==c.DONE&&(k._status=k._passthroughXHR.status,k._statusText=k._passthroughXHR.statusText,k._response=k._passthroughXHR.response,k._responseHeaders=k._passthroughXHR.responseHeaders,k._responseType=k._passthroughXHR.responseType,null!=k._responseType&&""!=k._responseType&&"text"!=k._responseType||(k._responseText=k._passthroughXHR.responseText),k._responseURL=k._passthroughXHR.responseURL,null!=k._responseType&&""!=k._responseType&&"document"!=k._responseType||(k._responseXML=k._passthroughXHR.responseXML)),d(k,k._passthroughXHR.readyState)},this._passthroughXHR.open(a,f,g,h,i)}else this._passthroughXHR=null;this._username=h,this._password=i,this._responseText=null,this._responseXML=null,this._requestHeaders={},d(this,c.OPENED)},c.prototype.setRequestHeader=function(a,c){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: setRequestHeader() with header: "+a+" ,value: "+c),j(this);var d=this._requestHeaders[a];this._requestHeaders[a]=d?d+=","+c:c},c.prototype.send=function(a){var e=this;if(b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: send()"),this._passthroughXHR)null!=this.responseType&&(this._passthroughXHR.responseType=this.responseType),this._passthroughXHR.send(a);else{j(this),d(this,c.OPENED);var f=g(this,a),i=new Request(this._url,f),e=this;try{fetch(i).then(function(a){h(e,i,a)},function(a){e.dispatchEvent(new k("error",!1,!1,e))})}catch(a){throw a}this.dispatchEvent(new k("loadstart",!1,!1,this))}},c.prototype.abort=function(){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: abort() is not supported by the XHR Adapter")},c.prototype.getResponseHeader=function(a){if(b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: getResponseHeader() for header: "+a),this._readyState<c.HEADERS_RECEIVED)return null;a=a.toLowerCase();for(var d in this._responseHeaders)if(d.toLowerCase()==a.toLowerCase())return this._responseHeaders[d];return null},c.prototype.getAllResponseHeaders=function(){function a(a){e+=a+": "+d._responseHeaders[a]+"\r\n"}b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: getAllResponseHeaders()");var d=this;if(this._readyState<c.HEADERS_RECEIVED)return"";var e="";return this._responseHeaders&&Object.keys(this._responseHeaders).forEach(a),e},c.prototype.overrideMimeType=function(a){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: overrideMimeType() for mimeType: "+a),"string"==typeof a&&(this._forceMimeType=a.toLowerCase())},c.prototype.addEventListener=function(a,c){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: addEventListener() for event type: "+a),this._eventListeners[a]=this._eventListeners[a]||[],this._eventListeners[a].push(c)},c.prototype.removeEventListener=function(a,c){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: removeEventListener() for event type: "+a);var d,e=this._eventListeners[a]||[],f=e.length;for(d=0;d<f;d++)if(e[d]==c)return e.splice(d,1)},c.prototype.dispatchEvent=function(a){b.log("Offline Persistence Toolkit PersistenceXMLHttpRequest: dispatchEvent() for event type: "+a.type);var c=this,d=a.type,e=this._eventListeners[d]||[];switch(e.forEach(function(b){"function"==typeof b?b.call(c,a):b.handleEvent(a)}),d){case"abort":this.onabort&&this.onabort(a);break;case"error":this.onerror&&this.onerror(a);break;case"load":this.onload&&this.onload(a);break;case"loadend":this.onloadend&&this.onloadend(a);break;case"loadstart":this.onloadstart&&this.onloadstart(a);break;case"progress":this.onprogress&&this.onprogress(a);break;case"readystatechange":this.onreadystatechange&&this.onreadystatechange(a);break;case"timeout":this.ontimeout&&this.ontimeout(a)}return!!a.defaultPrevented},k.prototype.stopPropagation=function(){},k.prototype.preventDefault=function(){this.defaultPrevented=!0},c});