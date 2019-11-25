/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","ojs/ojlogger","ojs/ojconverter-color","ojs/ojvalidator-length","ojs/ojvalidator-regexp","ojs/ojvalidator-required"],function(e,r,t,o,a,n){"use strict";var i={_converterFactories:{},_validatorFactories:{},_defaultConverterFactories:{},_defaultValidatorFactories:{},converterFactory:function(e,t){var o;if(e&&!t){if(null===(o=i._getFactory(e,i._converterFactories))){var a="Converter of type "+e+" cannot be found.";switch(e.toLowerCase()){case"datetime":r.error(a+" Please import the ojs/ojvalidation-datetime module.");break;case"number":r.error(a+" Please import the ojs/ojvalidation-number module.");break;default:r.warn(a)}}}else e&&t&&(o=i._registerFactory(e,t,i._converterFactories,i._CONTRACTS.converter),r.error("Registering a custom type or overriding the standard types is no longer supported. Please directly set the converter on the component. Please consult the Release Notes for further information."));return o},validatorFactory:function(e,t){var o;if(e&&!t){if(null===(o=i._getFactory(e,i._validatorFactories))){var a="Unable to locate a validatorFactory for the requested type: "+e;switch(e.toLowerCase()){case"daterestriction":case"datetimerange":r.error(a+". Please import the ojs/ojvalidation-datetime module.");break;case"numberrange":r.error(a+". Please import the ojs/ojvalidation-number module.");break;default:r.warn(a)}}}else e&&t&&(o=i._registerFactory(e,t,i._validatorFactories,i._CONTRACTS.validator),r.error("Registering a custom type or overriding the standard types is no longer supported. Please directly set the converter on the component. Please consult the Release Notes for further information."));return o},getDefaultConverterFactory:function(e){return i._getFactory(e,i._defaultConverterFactories)},getDefaultValidatorFactory:function(e){return i._getFactory(e,i._defaultValidatorFactories)},__registerDefaultConverterFactory:function(e,r){var t=i._CONTRACTS.converter;i._registerFactory(e,r,i._defaultConverterFactories,t),i._registerFactory(e,r,i._converterFactories,t)},__registerDefaultValidatorFactory:function(e,r){var t=i._CONTRACTS.validator;i._registerFactory(e,r,i._defaultValidatorFactories,t),i._registerFactory(e,r,i._validatorFactories,t)},_doImplementsCheck:function(e,r,t){if(r&&!i._quacksLike(e,r))throw new Error("Factory instance does not implement the methods expected by the factory of type "+t)},_getFactory:function(r,t){e.Assert.assertString(r);return(t[r.toLowerCase()]||{}).instance||null},_quacksLike:function(r,t){var o=!0;e.Assert.assertObject(r),e.Assert.assertObject(t);for(var a=Object.keys(t),n=0;n<a.length;n++){var i=a[n];if("function"==typeof t[i]&&(!r[i]||"function"!=typeof r[i])){o=!1;break}}return o},_registerFactory:function(r,t,o,a){e.Assert.assertString(r),e.Assert.assertObject(t);var n={};n.instance=t,i._doImplementsCheck(t,a.type,a.name),o[r.toLowerCase()]=n}},c={CONVERTER_TYPE_NUMBER:"number",CONVERTER_TYPE_DATETIME:"datetime",CONVERTER_TYPE_COLOR:"color",createConverter:function(e){}},s={VALIDATOR_TYPE_REQUIRED:"required",VALIDATOR_TYPE_REGEXP:"regexp",VALIDATOR_TYPE_NUMBERRANGE:"numberRange",VALIDATOR_TYPE_LENGTH:"length",VALIDATOR_TYPE_DATETIMERANGE:"dateTimeRange",VALIDATOR_TYPE_DATERESTRICTION:"dateRestriction",createValidator:function(e){}};i._CONTRACTS={converter:{name:"oj.ConverterFactory",type:c},validator:{name:"oj.ValidatorFactory",type:s}};var u=function(){return{createConverter:function(e){return function(e){return new t(e)}(e)}}}();i.__registerDefaultConverterFactory(c.CONVERTER_TYPE_COLOR,u);var l=function(){return{createValidator:function(e){return function(e){return new n(e)}(e)}}}();i.__registerDefaultValidatorFactory(s.VALIDATOR_TYPE_REQUIRED,l);var _=function(){return{createValidator:function(e){return function(e){return new a(e)}(e)}}}();i.__registerDefaultValidatorFactory(s.VALIDATOR_TYPE_REGEXP,_);var d=function(){return{createValidator:function(e){return function(e){return new o(e)}(e)}}}();i.__registerDefaultValidatorFactory(s.VALIDATOR_TYPE_LENGTH,d);var f={};return f.Validation=i,f.ValidatorFactory=s,f.ConverterFactory=c,f});