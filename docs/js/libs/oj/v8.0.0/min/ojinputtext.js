/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojvalidator-regexp","ojs/ojlogger","ojs/ojfilter-length","ojs/ojeditablevalue"],function(e,t,n,i,s){"use strict";var r={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",enumValues:["none","notewindow"],value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"string",writeback:!0}},methods:{refresh:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}},a={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},clearIcon:{type:"string",enumValues:["always","conditional","never"],value:"never"},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",enumValues:["none","notewindow"],value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"],value:"codePoint"},max:{type:"number"}}},list:{type:"string",extension:{_COPY_TO_INNER_ELEM:!0}},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"any",writeback:!0},virtualKeyboard:{type:"string",enumValues:["auto","email","number","search","tel","text","url"],value:"auto"}},methods:{refresh:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}},o={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",enumValues:["none","notewindow"],value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"],value:"codePoint"},counter:{type:"string",enumValues:["none","remaining"],value:"none"},max:{type:"number"}}},maxRows:{type:"number",value:0},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},resizeBehavior:{type:"string",enumValues:["both","horizontal","none","vertical"],value:"none"},rows:{type:"number",extension:{_COPY_TO_INNER_ELEM:!0}},translations:{type:"object",value:{},properties:{regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"any",writeback:!0}},methods:{refresh:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}};e.__registerWidget("oj.inputBase",t.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS_FOR_WIDGET:[{attribute:"disabled",validateOption:!0},{attribute:"pattern"},{attribute:"placeholder"},{attribute:"value"},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"required",coerceDomValue:!0,validateOption:!0},{attribute:"title"},{attribute:"spellcheck"}],_INPUT_HELPER_KEY:"",_BLUR_HANDLER_KEY:"blur",_KEYDOWN_HANDLER_KEY:"keydown",_KEYUP_HANDLER_KEY:"keyup",_COMPOSITIONSTART_HANDLER_KEY:"compositionstart",_COMPOSITIONEND_HANDLER_KEY:"compositionend",_INPUT_HANDLER_KEY:"input",_DROP_HANDLER_KEY:"drop",_CLICK_HANDLER_KEY:"click",_TEXT_FIELD_COUNTER_CLASS:"oj-text-field-counter",_counterSpanEl:null,options:{asyncValidators:[],autocomplete:void 0,autofocus:!1,labelledBy:null,name:"",placeholder:"",rawValue:void 0,readOnly:!1,required:!1,validators:[]},_SaveAttributes:function(e){var t=this._superApply(arguments);return this._processAttrCheck(),t},_InitOptions:function(t,n){this._super(t,n),this._IsCustomElement()||e.EditableValueUtils.initializeOptionsFromDom(this._GET_INIT_OPTIONS_PROPS_FOR_WIDGET,n,this)},_ComponentCreate:function(){var e=this._superApply(arguments),n=this.options.readOnly;if(this._rtl="rtl"===this._GetReadingDirection(),"boolean"==typeof n&&this.element.prop("readonly",n),this._DoWrapElement()){var i,r;if(this.OuterWrapper?(i=this.OuterWrapper).className?i.className=i.className+" "+this._WIDGET_CLASS_NAMES:i.className=this._WIDGET_CLASS_NAMES:((i=document.createElement("div")).className=this._WIDGET_CLASS_NAMES,this.element[0].parentNode&&this.element[0].parentNode.insertBefore(i,this.element[0])),r=i,this._wrapper=t(i),this._DoWrapElementAndTriggers()){var a=this._CreateContainerWrapper();i.appendChild(a),r=a;var o=this._CreateMiddleWrapper();o&&(a.appendChild(o),r=o)}r.appendChild(this.element[0]),this._focusable({element:this._wrapper,applyHighlight:!0})}else this._focusable({element:this.element,applyHighlight:!0});if(this._defaultRegExpValidator={},this._eventHandlers=null,this._hasMaxLength()){this.lengthFilter=new s(this.options.length);var l=this.options.value;this._filterTextAndSetValues(l,l,!0,!0)}return e},_AfterCreate:function(){var n=this._superApply(arguments),i=this;return this._refreshRequired(this.options.required),this._CLASS_NAMES&&(this.element.addClass(this._CLASS_NAMES),this.element.addClass("oj-text-field-input")),this._attachDetachEventHandlers(),this._AppendInputHelper(),t.each(["disabled","readOnly"],function(e,t){i.options[t]&&i._processOptions(t,i.options[t])}),this._IsCustomElement()&&e.EditableValueUtils._setInputId(this._GetContentElement()[0],this.widget()[0].id,this.options.labelledBy),this._hasMaxLength()&&this._processLengthCounterAttr(this.options.length.counter),n},_IsRequired:function(){return this.options.required},_AfterSetOptionRequired:e.EditableValueUtils._AfterSetOptionRequired,_AfterSetOptionValidators:e.EditableValueUtils._AfterSetOptionValidators,_AfterSetOptionAsyncValidators:e.EditableValueUtils._AfterSetOptionAsyncValidators,_AfterSetOptionConverter:e.EditableValueUtils._AfterSetOptionConverter,_ResetConverter:e.EditableValueUtils._ResetConverter,_GetConverter:e.EditableValueUtils._GetConverter,_GetNormalizedValidatorsFromOption:e.EditableValueUtils._GetNormalizedValidatorsFromOption,_GetNormalizedAsyncValidatorsFromOption:e.EditableValueUtils._GetNormalizedAsyncValidatorsFromOption,_processOptions:function(e,t){"disabled"===e&&this.element.prop("disabled",t),"readOnly"===e&&(this.element.prop("readonly",t),this._refreshStateTheming("readOnly",t)),"disabled"!==e&&"readOnly"!==e||this._attachDetachEventHandlers()},_setOption:function(e,t,n){var i=this._superApply(arguments);if("disabled"===e||"readOnly"===e)this._processOptions(e,t);else if("pattern"===e)this._defaultRegExpValidator.regexp=this._getImplicitRegExpValidator(),this._AfterSetOptionValidators();else if("labelledBy"===e&&this.options.labelledBy){var s=this._GetContentElement()[0].id;this._labelledByChangedForInputComp(this.options.labelledBy,s)}return i},_AfterSetOption:function(t,n,i){switch(this._superApply(arguments),t){case"readOnly":this._AfterSetOptionDisabledReadOnly(t,e.EditableValueUtils.readOnlyOptionOptions);break;case"required":this._AfterSetOptionRequired(t);break;case"validators":this._AfterSetOptionValidators(t);break;case"asyncValidators":this._AfterSetOptionAsyncValidators(t);break;case"converter":this._AfterSetOptionConverter(t);break;case"length":this._AfterSetOptionLength(this.options.length)}},_hasMaxLength:function(){return this.options.length&&this.options.length.max&&!isNaN(this.options.length.max)},_filterTextOnValueChange:function(){if(this.options.length.max){var e=this.options.rawValue,t=this.options.value;this._filterTextAndSetValues(e,t,!0,!1)}},_destroy:function(){var t=this._superApply(arguments);return this.element.off("blur drop keydown keyup compositionstart compositionend input"),this._inputHelper&&this._inputHelper.remove(),this._DoWrapElement()&&!this._IsCustomElement()&&(this._DoWrapElementAndTriggers()?e.DomUtils.unwrap(this.element,this._wrapper):e.DomUtils.unwrap(this.element)),t},_SetLoading:function(){this._super(),this.element.prop("readonly",!0),this._refreshStateTheming("readOnly",!0)},_ClearLoading:function(){this._super(),this.element.prop("readonly",this.options.readOnly),this._refreshStateTheming("readOnly",this.options.readOnly)},_attachDetachEventHandlers:function(){if(this.options.readOnly||this.options.disabled){if(this._eventHandlers)for(var e=[this._BLUR_HANDLER_KEY,this._KEYDOWN_HANDLER_KEY,this._KEYUP_HANDLER_KEY,this._COMPOSITIONSTART_HANDLER_KEY,this._COMPOSITIONEND_HANDLER_KEY,this._INPUT_HANDLER_KEY,this._DROP_HANDLER_KEY],n=0,i=e.length;n<i;n++)this._eventHandlers[e[n]]&&(this.element.off(e[n],this._eventHandlers[e[n]]),delete this._eventHandlers[e[n]])}else{this._eventHandlers={};var s=t.proxy(this._onBlurHandler,this),r=t.proxy(this._onKeyDownHandler,this),a=t.proxy(this._onKeyUpHandler,this),o=t.proxy(this._onCompositionStartHandler,this),l=t.proxy(this._onCompositionEndHandler,this),p=t.proxy(this._onInputHandler,this),_=function(){this.focus()};this.element.on(this._BLUR_HANDLER_KEY,s),this.element.on(this._KEYDOWN_HANDLER_KEY,r),this.element.on(this._KEYUP_HANDLER_KEY,a),this.element.on(this._COMPOSITIONSTART_HANDLER_KEY,o),this.element.on(this._COMPOSITIONEND_HANDLER_KEY,l),this.element.on(this._INPUT_HANDLER_KEY,p),this.element.on(this._DROP_HANDLER_KEY,_),this._eventHandlers[this._BLUR_HANDLER_KEY]=s,this._eventHandlers[this._KEYDOWN_HANDLER_KEY]=r,this._eventHandlers[this._KEYUP_HANDLER_KEY]=a,this._eventHandlers[this._COMPOSITIONSTART_HANDLER_KEY]=o,this._eventHandlers[this._COMPOSITIONEND_HANDLER_KEY]=l,this._eventHandlers[this._INPUT_HANDLER_KEY]=p,this._eventHandlers[this._DROP_HANDLER_KEY]=_}},_OPTION_TO_CSS_MAPPING:{readOnly:"oj-read-only"},_processAttrCheck:function(){for(var e=this._ATTR_CHECK,t=0,n=e.length;t<n;t++){var i=e[t].attr;"setMandatory"in e[t]&&this.element.attr(i,e[t].setMandatory)}},_onBlurHandler:function(e){this._SetValue(this._GetDisplayValue(),e)},_onKeyDownHandler:function(e){},_onKeyUpHandler:function(e){e.keyCode===t.ui.keyCode.ENTER&&this._SetValue(this._GetDisplayValue(),e)},_onCompositionStartHandler:function(){this._isComposing=!0},_onCompositionEndHandler:function(e){this._isComposing=!1,this._SetRawValue(this._GetContentElement().val(),e),this._hasMaxLength()&&this._onInputHandler(e)},_onInputHandler:function(e){this._isComposing||(this._hasMaxLength()?this._filterTextAndSetValues(this.lastFilteredText,this._GetContentElement().val(),!1,!0):this._SetRawValue(this._GetContentElement().val(),e))},_DoWrapElement:function(){return this._WIDGET_CLASS_NAMES},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},_CreateContainerWrapper:function(){var e=document.createElement("div");return e.setAttribute("role","presentation"),e.className=this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES,e},_AppendInputHelper:function(){if(this._INPUT_HELPER_KEY&&this._DoWrapElement()){var e=this.element.attr("aria-describedby")||"",n=this._GetSubId(this._INPUT_HELPER_KEY);e+=" "+n,this.element.attr("aria-describedby",e),this._inputHelper=t("<div class='oj-helper-hidden-accessible' aria-hidden='true' id='"+n+"'>"+this._EscapeXSS(this.getTranslatedString(this._INPUT_HELPER_KEY))+"</div>"),this._AppendInputHelperParent().append(this._inputHelper)}},_EscapeXSS:function(e){return t("<span>"+e+"</span>").text()},_AppendInputHelperParent:function(){return this.widget()},_GetImplicitValidators:function(){var e=this._superApply(arguments);if(this.options.pattern){var t=this._getImplicitRegExpValidator();this._defaultRegExpValidator.regexp=t}return Object.assign(this._defaultRegExpValidator,e)},_CanSetValue:function(){return!!this._super()&&!(this.options.readOnly||!1)},_refreshStateTheming:function(e,t){-1!==Object.keys(this._OPTION_TO_CSS_MAPPING).indexOf(e)&&this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[e],!!t)},_getImplicitRegExpValidator:function(){if(!this.options.pattern)return null;var e={pattern:this.options.pattern,label:this._getLabelText()};return t.extend(e,this.options.translations.regexp||{}),new n(e)},_GetAriaLabelElement:function(){return this.element[0]},_GetSubId:function(e){return this.uuid+"_"+e},_IsRTL:function(){return this._rtl},_IsTextFieldComponent:function(){return!0},_GetContentWrapper:function(){var e=this._GetContentElement()[0];if(!e.parentElement.classList.contains("oj-text-field-middle")){var t=document.createElement("DIV");t.classList.add("oj-text-field-middle"),e.parentElement.insertBefore(t,e),t.appendChild(e)}return e.parentElement},_resetLengthFilter:function(e){this.lengthFilter=new s(e)},_AfterSetOptionLength:function(e){var t;e.max&&(this._resetLengthFilter(e),t=this._GetContentWrapper().parentElement.parentNode.classList.contains("oj-complete")?this.element[0].value:this.options.value,this._filterTextAndSetValues(t,t,!0,!1));this._processLengthCounterAttr(e.counter)},_setFocusOnTextAreaBind:function(){this._setFocusOnTextArea=function(){this.element[0].focus()}.bind(this)},_processLengthCounterAttr:function(e){var t=this._GetContentWrapper().parentElement,n=t.querySelector("."+this._TEXT_FIELD_COUNTER_CLASS);if("none"===e||null==e||0===this.options.length.max||this.options.disabled||this.options.readOnly)n&&(n.removeEventListener(this._CLICK_HANDLER_KEY,this._setFocusOnTextArea),t.removeChild(n)),this._counterSpanEl=null;else{if(null===n){var i=document.createElement("div");i.className=this._TEXT_FIELD_COUNTER_CLASS,this._TEXTAREA_COUNTER_CONTAINER&&(i.className+=" "+this._TEXTAREA_COUNTER_CONTAINER),n=document.createElement("span"),this._INPUTTEXT_COUNTER_EL&&(n.className+=" "+this._INPUTTEXT_COUNTER_EL),this._TEXTAREA_COUNTER_EL&&(n.className+=" "+this._TEXTAREA_COUNTER_EL,this._setFocusOnTextAreaBind(),i.addEventListener(this._CLICK_HANDLER_KEY,this._setFocusOnTextArea)),i.appendChild(n),t.appendChild(i),this._counterSpanEl=document.querySelector("."+this._TEXT_FIELD_COUNTER_CLASS+" span"),this._counterSpanEl.textContent=""}var s;s=this.lengthFilter.calcLength(this.options.rawValue),this._counterSpanEl.textContent=this.options.length.max-s}},_filterTextAndSetValues(e,t,n,i){var s=this.lengthFilter.filter(e,t);this.lastFilteredText=s,this._SetRawValue(s,null),this._SetDisplayValue(s,null),n&&this._SetValue(this.lastFilteredText),i&&this._processLengthCounterAttr(this.options.length.counter)},refresh:function(){var e=this._superApply(arguments);return this._rtl="rtl"===this._GetReadingDirection(),this._refreshRequired(this.options.required),e},_refreshRequired:e.EditableValueUtils._refreshRequired,_labelledByChangedForInputComp:e.EditableValueUtils._labelledByChangedForInputComp,_ValidateReturnBoolean:e.EditableValueUtils._ValidateReturnBoolean,_ValidateReturnPromise:e.EditableValueUtils._ValidateReturnPromise,getNodeBySubId:function(e){return this._super(e)},validate:e.EditableValueUtils.validate,_AriaRequiredUnsupported:function(){return!1},widget:function(){return this._DoWrapElement()?this._wrapper:this.element}},!0),e.__registerWidget("oj.ojInputPassword",t.oj.inputBase,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",_INPUT_CONTAINER_CLASS:"oj-text-field-container",options:{converter:null,pattern:"",value:void 0},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-inputpassword-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}}),e.__registerWidget("oj.ojInputText",t.oj.inputBase,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",_ALLOWED_TYPES:["email","number","search","tel","text","url"],_CLICK_HANDLER_KEY:"click",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_INPUTTEXT_COUNTER_EL:"oj-inputtext-counter-el",options:{clearIcon:"never",converter:null,list:"",pattern:"",virtualKeyboard:"auto",length:{max:null,countBy:"codePoint"}},_ComponentCreate:function(){var e=this._super(),t=this.options.clearIcon;return this._processClearIconAttr(t),this._processSlottedChildren(),this._AddHoverable(this._wrapper),this._SetInputType(this._ALLOWED_TYPES),e},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_processClearIconAttr:function(e){var t=this._GetContentWrapper().parentElement,n=t.querySelector("a.oj-inputtext-clear-icon-btn");if("never"===e||this.options.disabled||this.options.readOnly)n&&t.removeChild(n),t.classList.remove("oj-inputtext-clearicon-visible"),t.classList.remove("oj-inputtext-clearicon-conditional");else{var i,s;if(null===n)(n=document.createElement("a")).className="oj-inputtext-clear-icon-btn oj-component-icon oj-clickable-icon-nocontext",n.setAttribute("tabindex","-1"),n.setAttribute("aria-hidden","true"),n.setAttribute("target","_blank"),(i=document.createElement("span")).className="oj-inputtext-clear-icon",n.appendChild(i),t.appendChild(n),n.addEventListener(this._CLICK_HANDLER_KEY,this._onClearIconClickHandler.bind(this));if("always"===e)t.classList.add("oj-inputtext-clearicon-visible");else t.classList.remove("oj-inputtext-clearicon-visible"),t.classList.add("oj-inputtext-clearicon-conditional"),(s=t.classList.contains("oj-complete")?this.element[0].value:this.options.value)&&""!==s?t.classList.remove("oj-form-control-empty-clearicon"):t.classList.add("oj-form-control-empty-clearicon")}},_processSlottedChildren:function(){var t=e.BaseCustomElementBridge.getSlotMap(this._getRootElement());!function(e){for(var t={contextMenu:!0,start:!0,end:!0,"":!0},n=Object.keys(e),i=n.length-1;i>-1;i--){var s=n[i];if(!t[s])for(var r=e[s],a=0;a<r.length;a++){var o=r[a];o.parentElement.removeChild(o)}}}(t);var n=this._GetContentWrapper(),i="start";t[i]&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.classList.add("oj-inputtext-start"),e.parentElement.insertBefore(i,e)}}(n,t[i]),t[i="end"]&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.classList.add("oj-inputtext-end"),e.parentElement.appendChild(i)}}(n,t[i])},_AfterSetOption:function(e,t){switch(this._super(e,t),e){case"clearIcon":case"disabled":case"readOnly":this._processClearIconAttr(this.options.clearIcon);break;case"virtualKeyboard":this._SetInputType(this._ALLOWED_TYPES);break;case"value":this._processClearIconAttr(this.options.clearIcon),this._filterTextOnValueChange(),this._AfterSetOptionLength(this.options.length)}},_onInputHandler:function(e){this._super(e);var t=e.target,n=this._GetContentWrapper().parentElement;"conditional"===this.options.clearIcon&&(""!==t.value?n.classList.remove("oj-form-control-empty-clearicon"):n.classList.add("oj-form-control-empty-clearicon"))},_onClearIconClickHandler:function(e){var t=this.element[0];t.value="",this._SetRawValue(t.value,e),t.focus(),this._GetContentWrapper().parentElement.classList.add("oj-form-control-empty-clearicon"),this._processLengthCounterAttr(this.options.length.counter)},_onBlurHandler:function(t){var n=this._wrapper[0],i=t.relatedTarget;i&&i.classList.contains("oj-inputtext-clear-icon-btn")&&i.parentElement&&e.DomUtils.isAncestorOrSelf(n,i.parentElement)?n.classList.add("oj-focus"):this._super(t)},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-inputtext-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},_GetTranslationsSectionName:function(){return"oj-inputBase"},_SetInputType:e.EditableValueUtils._SetInputType}),e.__registerWidget("oj.ojTextArea",t.oj.inputBase,{version:"1.0.0",defaultElement:"<textarea>",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_TEXTAREA_COUNTER_CONTAINER:"oj-textarea-counter-container",_TEXTAREA_COUNTER_EL:"oj-textarea-counter-el",_INPUT_HANDLER_KEY:"input",options:{converter:null,maxRows:0,pattern:"",resizeBehavior:"none",rows:void 0,length:{max:null,countBy:"codePoint",counter:"none"}},_AfterSetOption:function(e,t){switch(this._super(e,t),e){case"value":this._filterTextOnValueChange(),this._AfterSetOptionLength(this.options.length)}},_AfterCreate:function(){var e=this._superApply(arguments),t=this._GetContentElement()[0],n=this.options.maxRows;return this._GetContentElement()[0].style.resize=this.options.resizeBehavior,(-1===n||n>t.rows)&&(this._isConverAsync()||(this._calculateLineHeight(t),this._resizeTextArea(),this._setupResizeTextareaBind())),e},_AfterCreateConverterCached:function(){var e=this._super();this._isConverAsync()&&Context.getContext(this.element[0]).getBusyContext().whenReady().then(function(){var e=this._GetContentElement()[0],t=this.options.maxRows;(-1===t||t>e.rows)&&(this._calculateLineHeight(e),this._resizeTextArea(),this._setupResizeTextareaBind())});return e},_setOption:function(e,t,n){var i=this._superApply(arguments);if("resizeBehavior"===e)this._GetContentElement()[0].style.resize=t;else if("value"===e){var s=this.options.maxRows;(-1===s||s>this._GetContentElement()[0].rows)&&this._resizeTextArea()}return i},_NotifyAttached:function(){this._super();var e=this.options.maxRows;(-1===e||e>this._GetContentElement()[0].rows)&&this._resizeTextArea()},_onInputHandler:function(e){this._super(e);var t=this._GetContentElement()[0],n=this.options.maxRows;(-1===n||n>t.rows)&&this._resizeTextArea()},_resizeTextArea:function(){var e,t,n=this.options.maxRows,i=this._GetContentElement()[0],s=i.rows;if(s&&(e=s*this._lineHeight),i.style.height=0,-1===n)t=i.scrollHeight;else if(n>s){var r=this._lineHeight*n,a=i.scrollHeight;t=a>r?r+this._getStylingHeight(i):a}e&&e>t&&(t=e+this._getStylingHeight(i)),i.style.height=t+"px"},_setupResizeTextareaBind:function(){this._resizeTextareaBind=function(){var e=this._GetContentElement()[0],t=this.options.maxRows;(-1===t||t>e.rows)&&this._resizeTextArea()}.bind(this),window.addEventListener("resize",this._resizeTextareaBind,!1)},_getStylingHeight:function(e){var t=window.getComputedStyle(e);return parseInt(t.paddingTop,10)+parseInt(t.paddingBottom,10)+parseInt(t.borderTopWidth,10)+parseInt(t.borderBottomWidth,10)},_calculateLineHeight:function(e){var t=e.offsetHeight-this._getStylingHeight(e);this._lineHeight=t/e.rows},_cleanUpListeners:function(){this._resizeTextareaBind&&window.removeEventListener("resize",this._resizeTextareaBind)},_ReleaseResources:function(){this._super(),this._cleanUpListeners()},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-textarea-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_GetDefaultStyleClass:function(){return"oj-textarea"},_GetTranslationsSectionName:function(){return"oj-inputBase"},_isConverAsync:function(){return this._GetConverter()instanceof Promise},_onKeyUpHandler:function(e){}}),r.extension._WIDGET_NAME="ojInputPassword",r.extension._INNER_ELEM="input",r.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],r.extension._ALIASED_PROPS={readonly:"readOnly"},e.CustomElementBridge.register("oj-input-password",{metadata:r}),a.extension._WIDGET_NAME="ojInputText",a.extension._INNER_ELEM="input",a.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],a.extension._ALIASED_PROPS={readonly:"readOnly"},e.CustomElementBridge.register("oj-input-text",{metadata:a}),o.extension._WIDGET_NAME="ojTextArea",o.extension._INNER_ELEM="textarea",o.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],o.extension._ALIASED_PROPS={readonly:"readOnly"},e.CustomElementBridge.register("oj-text-area",{metadata:o})});