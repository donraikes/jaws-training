/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","ojs/ojtranslation","ojs/ojconverterutils-i18n","ojs/ojconverterutils","ojs/ojvalidator","ojs/ojconverter-datetime","ojs/ojvalidation-error"],function(t,e,a,r,n,i){"use strict";var o=function(t){this.Init(t)};return t.Object.createSubclass(o,n,"oj.DateTimeRangeValidator"),o.prototype.Init=function(t){if(o.superclass.Init.call(this),this._converter=r.getConverterInstance(t.converter),this._converter||(this._converter=new i.IntlDateTimeConverter),!this._converter)throw new Error("oj.DateTimeRangeValidator missing a converter option");this._min=t.min||null,this._max=t.max||null,this._translationKey=t.translationKey||"datetime",t&&(this._hint=t.hint||{},this._customMessageSummary=t.messageSummary||{},this._customMessageDetail=t.messageDetail||{}),e.getTranslatedString("oj-validator.range."+this._translationKey+".messageSummary.rangeOverflow")||(this._translationKey="datetime")},o.prototype.validate=function(r){var n,i,o=this,s=this._customMessageSummary,l=this._customMessageDetail,m=l.rangeOverflow,g=l.rangeUnderflow,u=s.rangeOverflow,c=s.rangeUnderflow,h=a.IntlConverterUtils,v=this._min,_=this._max,d="",f="",y=e,j=null;if(null!==r){try{!function(t){if(v&&(v=h._minMaxIsoString(v,r),n=t?t.format(v):v),_&&(_=h._minMaxIsoString(_,r),i=t?t.format(_):_),null!==v&&null!==_){if(t.compareISODates(r,v)>=0&&t.compareISODates(r,_)<=0||t.compareISODates(v,_)>0)return r}else if(null!==v){if(t.compareISODates(r,v)>=0)return r}else if(null===_||t.compareISODates(r,_)<=0)return r;throw new Error}(this._converter)}catch(e){var p=function(t,e){return null!==_&&e.compareISODates(r,_)>0?(j={value:t,max:i},d=u||y.getTranslatedString("oj-validator.range."+o._translationKey+".messageSummary.rangeOverflow"),f=m?y.applyParameters(m,j):y.getTranslatedString("oj-validator.range."+o._translationKey+".messageDetail.rangeOverflow",j)):null!==v&&e.compareISODates(r,v)<0&&(j={value:t,min:n},d=c||y.getTranslatedString("oj-validator.range."+o._translationKey+".messageSummary.rangeUnderflow"),f=g?y.applyParameters(g,j):y.getTranslatedString("oj-validator.range."+o._translationKey+".messageDetail.rangeUnderflow",j)),[d,f]}(r?this._converter.format(r):r,this._converter);throw new t.ValidatorError(p[0],p[1])}}},o.prototype.getHint=function(){var t=null,a=this._hint,r=a.inRange,n=a.min,i=a.max,o=this._min,s=this._max,l=o&&this._converter?this._converter.format(o):o,m=s&&this._converter?this._converter.format(s):s,g=null,u=e;return null!==o&&null!==s?(g={min:l,max:m},t=r?u.applyParameters(r,g):u.getTranslatedString("oj-validator.range."+this._translationKey+".hint.inRange",g)):null!==o?(g={min:l},t=n?u.applyParameters(n,g):u.getTranslatedString("oj-validator.range."+this._translationKey+".hint.min",g)):null!==s&&(g={max:m},t=i?u.applyParameters(i,g):u.getTranslatedString("oj-validator.range."+this._translationKey+".hint.max",g)),t},o});