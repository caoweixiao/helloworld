webpackJsonp([16],{"3i9t":function(e,t,a){var n=a("NB3g");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("496d7709",n,!0,{})},NB3g:function(e,t,a){t=e.exports=a("l95E")(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},vPY9:function(e,t,a){"use strict";function n(e){a("3i9t")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("lcoF"),s=a("2sCs"),o=a.n(s),i=a("x1ym"),r={mixins:[l.a],data:function(){var e=i.a.required(),t=i.a.number();return{params:{},rules:{field:[e],label:[e],dataType:[e],priority:[e,t],required:[e],rows:[e,t],cols:[e,t],size:[e,t]},checkRes:!1}},methods:{getDataInfo:function(e){var t=this,a=this.$api;o.a.all([o.a.post(a.configRegisterItemGet,{id:e})]).then(o.a.spread(function(e){t.dataInfo=e.body,t.$refs.form.resetFields(),t.loading=!1})).catch(function(e){t.loading=!1})},update:function(){this.updateDataInfo(this.$api.configRegisterItemUpdate,this.dataInfo,"list")},add:function(e){this.checkRes||this.saveDataInfo(e,this.$api.configRegisterItemSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),e._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:e.dataInfo,rules:e.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"字段",prop:"field"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.field,callback:function(t){e.$set(e.dataInfo,"field",t)},expression:"dataInfo.field"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"label"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.label,callback:function(t){e.$set(e.dataInfo,"label",t)},expression:"dataInfo.label"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"数据类型",prop:"dataType"}},[a("el-select",{model:{value:e.dataInfo.dataType,callback:function(t){e.$set(e.dataInfo,"dataType",t)},expression:"dataInfo.dataType"}},[a("el-option",{attrs:{value:1,label:"字符串文本"}}),e._v(" "),a("el-option",{attrs:{value:2,label:"整型文本"}}),e._v(" "),a("el-option",{attrs:{value:3,label:"浮点型文本"}}),e._v(" "),a("el-option",{attrs:{value:4,label:"文本区"}}),e._v(" "),a("el-option",{attrs:{value:5,label:"日期"}}),e._v(" "),a("el-option",{attrs:{value:6,label:"下拉列表"}}),e._v(" "),a("el-option",{attrs:{value:7,label:"复选框"}}),e._v(" "),a("el-option",{attrs:{value:8,label:"单选框"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"排列顺序",prop:"priority"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.priority,callback:function(t){e.$set(e.dataInfo,"priority",t)},expression:"dataInfo.priority"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"帮助信息",prop:"help"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.help,callback:function(t){e.$set(e.dataInfo,"help",t)},expression:"dataInfo.help"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"帮助位置",prop:"helpPosition"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.helpPosition,callback:function(t){e.$set(e.dataInfo,"helpPosition",t)},expression:"dataInfo.helpPosition"}}),e._v(" "),a("span",{staticClass:"gray"},[e._v("上1，右2，下3，左4")])],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"默认值",prop:"defValue"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.defValue,callback:function(t){e.$set(e.dataInfo,"defValue",t)},expression:"dataInfo.defValue"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"宽",prop:"size"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.size,callback:function(t){e.$set(e.dataInfo,"size",t)},expression:"dataInfo.size"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"可选项",prop:"optValue"}},[a("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.optValue,callback:function(t){e.$set(e.dataInfo,"optValue",t)},expression:"dataInfo.optValue"}}),e._v(" "),a("span",{staticClass:"gray"},[e._v('多个值用","分开')])],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"行数",prop:"rows"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.rows,callback:function(t){e.$set(e.dataInfo,"rows",t)},expression:"dataInfo.rows"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"列数",prop:"cols"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.cols,callback:function(t){e.$set(e.dataInfo,"cols",t)},expression:"dataInfo.cols"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"必填项",prop:"required"}},[a("el-radio",{attrs:{label:!0},model:{value:e.dataInfo.required,callback:function(t){e.$set(e.dataInfo,"required",t)},expression:"dataInfo.required"}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:!1},model:{value:e.dataInfo.required,callback:function(t){e.$set(e.dataInfo,"required",t)},expression:"dataInfo.required"}},[e._v("否")])],1),e._v(" "),a("div",{staticClass:"form-footer"},[0==this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/registerModel/add",expression:"'/globel/registerModel/add'"}],attrs:{type:"warning"},on:{click:function(t){e.add(!0)}}},[e._v("保存并继续添加")]):e._e(),e._v(" "),0==this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/registerModel/add",expression:"'/globel/registerModel/add'"}],attrs:{type:"primary"},on:{click:function(t){e.add(!1)}}},[e._v("提交")]):e._e(),e._v(" "),0!=this.id?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/registerModel/edit",expression:"'/globel/registerModel/edit'"}],attrs:{type:"primary"},on:{click:function(t){e.update()}}},[e._v("修改")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},p=f,u=a("Z0/y"),m=n,v=u(r,p,!1,m,null,null);t.default=v.exports}});