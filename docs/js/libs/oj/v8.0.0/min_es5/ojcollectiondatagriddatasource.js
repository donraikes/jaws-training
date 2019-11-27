/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojmodel","ojs/ojlogger","ojs/ojdatasource-common"],function(t,e,o,l){"use strict";t.CollectionCellSet=function(e,o,l,n,i){t.Assert.assertArrayOrNull(i),this.m_startRow=e,this.m_endRow=o,this.m_startColumn=l,this.m_endColumn=n,this.m_columns=i},t.CollectionCellSet.prototype.setModels=function(e){t.Assert.assertArray(e),null!=e&&e.length===this.getCount("row")&&(this.m_models=e)},t.CollectionCellSet.prototype.getData=function(t){var e=this._getModel(t);if(null==e)return null;var o=this.m_columns[t.column],l={};return Object.defineProperty(l,"data",{enumerable:!0,get:function(){return e.get(o)},set:function(t){e.set(o,t,{silent:!0})}}),l},t.CollectionCellSet.prototype.getMetadata=function(e){var o=this._getModel(e);if(null==o)return null;var l=e.column;return{keys:{row:t.CollectionDataGridUtils._getModelKey(o),column:this.m_columns[l]}}},t.CollectionCellSet.prototype._getModel=function(e){if(null==this.m_models)return null;t.Assert.assertObject(e);var o=e.row,l=e.column;return t.Assert.assert(o>=this.m_startRow&&o<=this.m_endRow&&l>=this.m_startColumn&&l<=this.m_endColumn),this.m_models[o-this.m_startRow]},t.CollectionCellSet.prototype.getCount=function(t){return"row"===t?Math.max(0,this.m_endRow-this.m_startRow):"column"===t?Math.max(0,this.m_endColumn-this.m_startColumn):0},t.CollectionCellSet.prototype.getExtent=function(t){return{row:{extent:1,more:{before:!1,after:!1}},column:{extent:1,more:{before:!1,after:!1}}}},t.CollectionCellSet.prototype.getStartRow=function(){return this.m_startRow},t.CollectionCellSet.prototype.getEndRow=function(){return this.m_endRow},t.CollectionCellSet.prototype.getStartColumn=function(){return this.m_startColumn},t.CollectionCellSet.prototype.getEndColumn=function(){return this.m_endColumn},t.CollectionCellSet.prototype.getColumns=function(){return this.m_columns},t.CollectionDataGridDataSource=function(e,o){this.collection=e,null!=o&&(this.rowHeader=o.rowHeader,this.columns=o.columns),this._setSortInfo(),t.CollectionDataGridDataSource.superclass.constructor.call(this)},t.Object.createSubclass(t.CollectionDataGridDataSource,t.DataGridDataSource,"oj.CollectionDataGridDataSource"),t.CollectionDataGridDataSource.prototype.Init=function(){t.CollectionDataGridDataSource.superclass.Init.call(this),this.pendingHeaderCallback={},this._registerEventListeners()},t.CollectionDataGridDataSource.prototype._registerEventListeners=function(){this.collection.on("add",this._handleModelAdded.bind(this)),this.collection.on("remove",this._handleModelDeleted.bind(this)),this.collection.on("change",this._handleModelChanged.bind(this)),this.collection.on("refresh",this._handleCollectionRefresh.bind(this)),this.collection.on("reset",this._handleCollectionReset.bind(this))},t.CollectionDataGridDataSource.prototype._isDataAvailable=function(){return null!=this.data},t.CollectionDataGridDataSource.prototype.getCount=function(t){if(void 0===this.precision&&(this.precision={}),"row"===t){var e=this._totalSize();return-1===e||0===e&&(!this._isDataAvailable()||this._size()>0)?(this.precision[t]="estimate",-1):(this.precision[t]="exact",this._size())}return"column"===t?null!=this.columns?(this.precision[t]="exact",this.columns.length):(this.precision[t]="estimate",-1):0},t.CollectionDataGridDataSource.prototype.getCountPrecision=function(t){return void 0!==this.precision&&void 0!==this.precision[t]||this.getCount(t),this.precision[t]},t.CollectionDataGridDataSource.prototype.fetchHeaders=function(t,e,o){if(null!=e){var l=t.axis,n={};n.headerRange=t,n.callbacks=e,n.callbackObjects=o,this.pendingHeaderCallback[l]=n}},t.CollectionDataGridDataSource.prototype._handleHeaderFetchSuccess=function(e,o,l,n){var i,r,a=e.axis,s=e.start,c=e.count;if("column"===a)null!=this.columns&&(i=Math.min(this.columns.length,s+c),r=new t.CollectionHeaderSet(s,i,this.columns,void 0,this._sortInfo));else if("row"===a&&null!=this.rowHeader)return null!=n&&(c=n.count),i=Math.min(this._size(),s+c),r=new t.CollectionHeaderSet(s,i,this.columns,this.rowHeader),void this._resolveModels(s,i,r,e,o,l);null!=o&&o.success&&o.success.call(l.success,r,e,null)},t.CollectionDataGridDataSource.prototype._getRanges=function(t){for(var e,o,l,n,i=0;i<t.length;i++){var r=t[i];"row"===r.axis?(e=r.start,o=r.count):"column"===r.axis&&(l=r.start,n=r.count)}return{rowStart:e,rowCount:o,colStart:l,colCount:n}},t.CollectionDataGridDataSource.prototype._handleCellFetchSuccess=function(e,o,l,n){var i,r=this._getRanges(e),a=r.rowStart;i=null!=n?Math.min(this._size(),a+n.count):Math.min(this._size(),a+r.rowCount);var s=r.colStart,c=Math.min(null==this.columns?0:this.columns.length,s+r.colCount),u=new t.CollectionCellSet(a,i,s,c,this.columns);this._resolveModels(a,i,u,e,o,l)},t.CollectionDataGridDataSource.prototype._resolveModels=function(t,e,o,l,n,i){for(var r=[],a=t;a<e;a++)r.push(this.collection.at(a,{deferred:!0}));Promise.all(r).then(function(t){o.setModels(t),n.success.call(i.success,o,l)})},t.CollectionDataGridDataSource.prototype.fetchCells=function(t,e,o){null!=e&&(this.pendingCellCallback={},this.pendingCellCallback.cellRanges=t,this.pendingCellCallback.callbacks=e,this.pendingCellCallback.callbackObjects=o),this._fetchCells(t)},t.CollectionDataGridDataSource.prototype._processPendingHeaderCallbacks=function(t){var e=this.pendingHeaderCallback[t];if(null!=e){var o,l=e.headerRange,n=e.callbacks,i=e.callbackObjects;"row"===t&&(o=e.actualRange),this._handleHeaderFetchSuccess(l,n,i,o),this.pendingHeaderCallback[t]=null}},t.CollectionDataGridDataSource.prototype._processPendingCellCallbacks=function(){var t=this.pendingCellCallback.cellRanges,e=this.pendingCellCallback.callbacks,o=this.pendingCellCallback.callbackObjects,l=this.pendingCellCallback.actualRange;this._handleCellFetchSuccess(t,e,o,l),this.pendingCellCallback=null},t.CollectionDataGridDataSource.prototype._fetchCells=function(t){var e=this._getRanges(t),o=e.rowStart,l=e.rowCount;this.collection.setRangeLocal(o,l).then(function(e){this.data=!0,this._setActualCallbackRanges(e.start,e.count),void 0!==this.columns?this._fetchCellsComplete(t):this.collection.at(o,{deferred:!0}).then(function(e){null!=e&&this._setupColumns(e),this._fetchCellsComplete(t)}.bind(this))}.bind(this),function(t){this._fetchCellsError(t)}.bind(this))},t.CollectionDataGridDataSource.prototype._fetchCellsError=function(t){l.error(t),null!=this.pendingHeaderCallback&&(this._processPendingHeaderErrorCallbacks("column",t),this._processPendingHeaderErrorCallbacks("row",t)),null!=this.pendingCellCallback&&this._processPendingCellErrorCallbacks(t)},t.CollectionDataGridDataSource.prototype._processPendingHeaderErrorCallbacks=function(t,e){var o=this.pendingHeaderCallback[t];if(null!=o){var l=o.callbacks,n=o.callbackObjects,i=o.headerRange;l.error&&l.error.call(n.error,e,i),this.pendingHeaderCallback[t]=null}},t.CollectionDataGridDataSource.prototype._processPendingCellErrorCallbacks=function(t){var e=this.pendingCellCallback.callbacks,o=this.pendingCellCallback.callbackObjects,l=this.pendingCellCallback.cellRanges;e.error&&e.error.call(o.error,t,l),this.pendingCellCallback=null},t.CollectionDataGridDataSource.prototype._fetchCellsComplete=function(t){this.pendingCellCallback.cellRanges===t&&(null!=this.pendingHeaderCallback&&(this._processPendingHeaderCallbacks("column"),this._processPendingHeaderCallbacks("row")),null!=this.pendingCellCallback&&this._processPendingCellCallbacks())},t.CollectionDataGridDataSource.prototype._setActualCallbackRanges=function(t,e){var o={start:t,count:e};null!=this.pendingHeaderCallback.row&&(this.pendingHeaderCallback.row.actualRange=o),null!=this.pendingCellCallback&&(this.pendingCellCallback.actualRange=o)},t.CollectionDataGridDataSource.prototype._setupColumns=function(t){this.columns=t.keys(),-1!==this.columns.indexOf(this.rowHeader)&&this.columns.splice(this.columns.indexOf(this.rowHeader),1)},t.CollectionDataGridDataSource.prototype.keys=function(e){var o=e.row,l=e.column,n=this;return new Promise(function(e){n.collection.at(o,{deferred:!0}).then(function(o){if(null==o)e({row:null,column:null});else{var i=t.CollectionDataGridUtils._getModelKey(o);null==n.columns&&n._setupColumns(o);var r=n.columns[l];e({row:i,column:r})}})})},t.CollectionDataGridDataSource.prototype.indexes=function(t){var e=t.row,o=t.column,l=this;return new Promise(function(t){l.collection.indexOf(e,{deferred:!0}).then(function(e){var n=-1;-1!==e&&null==l.columns?l.collection.at(e,{deferred:!0}).then(function(i){l._setupColumns(i),n=l.columns.indexOf(o),t({row:e,column:n})}):(null!=l.columns&&(n=l.columns.indexOf(o)),t({row:e,column:n}))})})},t.CollectionDataGridDataSource.prototype.getCapability=function(t){return"sort"===t?"column":"move"===t?"row":null},t.CollectionDataGridDataSource.prototype.sort=function(t,e,o){if(null==o&&(o={}),null!=t){var l=t.direction,n=t.key;if("column"===t.axis){var i;if(this.collection.IsVirtual())this.collection.comparator=n,this.collection.sortDirection="ascending"===l?1:-1;else"ascending"===l?i=function(t,e){var o=t.get(n),l=e.get(n),i=isNaN(o),r=isNaN(l);return o instanceof Date&&(o=o.toISOString(),i=!0),l instanceof Date&&(l=l.toISOString(),r=!0),i&&r?o<l?-1:o===l?0:1:i?1:r?-1:o-l}:"descending"===l&&(i=function(t,e){var o=t.get(n),l=e.get(n),i=isNaN(o),r=isNaN(l);return o instanceof Date&&(o=o.toISOString()),l instanceof Date&&(l=l.toISOString()),i&&r?o>l?-1:o===l?0:1:i?-1:r?1:l-o}),this.collection.comparator=i;this.collection.sort(),this._setSortInfo(n),null!=e&&null!=e.success&&e.success.call(o.success)}else null!=e&&null!=e.error&&e.error.call(o.error,"Axis value not supported")}else this._resetSortOrder(e,o)},t.CollectionDataGridDataSource.prototype._resetSortOrder=function(t,e){this.collection.comparator=null,this.collection.reset(),null!=t&&null!=t.success&&t.success.call(e.success)},t.CollectionDataGridDataSource.prototype._setSortInfo=function(t){var e=this.collection.comparator,o=-1===this.collection.sortDirection?"descending":"ascending";null!=t||"function"!=typeof e?(this._sortInfo={},this._sortInfo.axis="column",this._sortInfo.direction=o,this._sortInfo.key=null==t?e:null):this._sortInfo={}},t.CollectionDataGridDataSource.prototype.move=function(t,e,o,l,n){this.collection.get(t,{deferred:!0}).then(function(o){var i;null==e?(this.collection.remove(o),this.collection.add(o),null!=l&&null!=l.success&&l.success.call(n.success)):(t===e?(i=this.collection.indexOf(e,{deferred:!0}),this.collection.remove(o)):(this.collection.remove(o),i=this.collection.indexOf(e,{deferred:!0})),i.then(function(t){this.collection.add(o,{at:t,force:!0}),null!=l&&null!=l.success&&l.success.call(n.success)}.bind(this)))}.bind(this))},t.CollectionDataGridDataSource.prototype.moveOK=function(t,e,o){return"valid"},t.CollectionDataGridDataSource.prototype._getModelEvent=function(t,e,o,l,n){var i={};return i.source=this,i.operation=t,i.keys={row:e,column:o},i.indexes={row:l,column:n},i},t.CollectionDataGridDataSource.prototype._handleModelAdded=function(e,o,l){var n=t.CollectionDataGridUtils._getModelKey(e),i=this._getModelEvent("insert",n,null,e.index,-1);this.handleEvent("change",i)},t.CollectionDataGridDataSource.prototype._handleModelDeleted=function(e,o,l){var n=t.CollectionDataGridUtils._getModelKey(e),i=this._getModelEvent("delete",n,null,l.index,-1);this.handleEvent("change",i)},t.CollectionDataGridDataSource.prototype._handleModelChanged=function(e,o,l){var n=t.CollectionDataGridUtils._getModelKey(e),i=this._getModelEvent("update",n,null,e.index,-1);this.handleEvent("change",i)},t.CollectionDataGridDataSource.prototype._handleCollectionRefresh=function(){this.data=null;var t=this._getModelEvent("refresh",null,null);this.handleEvent("change",t)},t.CollectionDataGridDataSource.prototype._handleCollectionReset=function(){this.data=null;var t=this._getModelEvent("reset",null,null);this.handleEvent("change",t)},t.CollectionDataGridDataSource.prototype._size=function(){return this.collection.size()},t.CollectionDataGridDataSource.prototype._totalSize=function(){return void 0===this.collection.totalResults?-1:this.collection.totalResults},t.CollectionDataGridDataSource.prototype.getCollection=function(){return this.collection},t.CollectionDataGridDataSource.prototype.getColumns=function(){return this.columns},t.CollectionDataGridDataSource.prototype.getRowHeader=function(){return this.rowHeader},t.CollectionDataGridDataSource.prototype.getData=function(){return this.data},t.CollectionDataGridUtils=function(){},t.CollectionDataGridUtils._getModelKey=function(t){var e=t.GetId();return null==e&&(e=t.GetCid()),e},t.CollectionHeaderSet=function(e,o,l,n,i){t.Assert.assertArrayOrNull(l),this.m_start=e,this.m_end=o,this.m_headers=l,this.m_rowHeader=n,this.m_sortInfo=i},t.CollectionHeaderSet.prototype.setModels=function(e){t.Assert.assertArray(e),null!=e&&e.length===this.getCount()&&(this.m_models=e)},t.CollectionHeaderSet.prototype.getData=function(e,o){return t.Assert.assert(e<=this.m_end&&e>=this.m_start,"index out of bounds"),t.Assert.assert(null==o||0===o,"level out of bounds"),null!=this.m_rowHeader?null==this.m_models?null:this.m_models[e-this.m_start].get(this.m_rowHeader):this.m_headers[e]},t.CollectionHeaderSet.prototype.getMetadata=function(e,o){if(t.Assert.assert(e<=this.m_end&&e>=this.m_start,"index out of bounds"),t.Assert.assert(null==o||0===o,"level out of bounds"),null!=this.m_rowHeader){if(null==this.m_models)return null;var l=this.m_models[e-this.m_start];return{key:t.CollectionDataGridUtils._getModelKey(l)}}var n=this.getData(e,o);return this.m_sortInfo.key===n?{key:n,sortDirection:this.m_sortInfo.direction}:{key:n}},t.CollectionHeaderSet.prototype.getLevelCount=function(){return this.getCount()>0?1:0},t.CollectionHeaderSet.prototype.getExtent=function(e,o){return t.Assert.assert(e<=this.m_end&&e>=this.m_start,"index out of bounds"),t.Assert.assert(null==o||0===o,"level out of bounds"),{extent:1,more:{before:!1,after:!1}}},t.CollectionHeaderSet.prototype.getLabel=function(){return null},t.CollectionHeaderSet.prototype.getDepth=function(e,o){return t.Assert.assert(e<=this.m_end&&e>=this.m_start,"index out of bounds"),t.Assert.assert(null==o||0===o,"level out of bounds"),1},t.CollectionHeaderSet.prototype.getCount=function(){return Math.max(0,this.m_end-this.m_start)},t.CollectionHeaderSet.prototype.getStart=function(){return this.m_start},t.CollectionHeaderSet.prototype.getEnd=function(){return this.m_end},t.CollectionHeaderSet.prototype.getHeaders=function(){return this.m_headers},t.CollectionHeaderSet.prototype.getRowHeader=function(){return this.m_rowHeader};var n={};return n.CollectionDataGridDataSource=t.CollectionDataGridDataSource,n.CollectionHeaderSet=t.CollectionHeaderSet,n.CollectionCellSet=t.CollectionCellSet,n});