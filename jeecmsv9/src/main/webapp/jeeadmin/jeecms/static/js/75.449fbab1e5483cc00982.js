webpackJsonp([75],{"96w/":function(n,e,a){e=n.exports=a("l95E")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Mh0T:function(n,e,a){"use strict";function t(n){a("ViLG")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("lcoF"),o=a("2sCs"),r=a.n(o),l=a("x1ym"),i=a("P9l9"),c={mixins:[s.a],data:function(){return{params:{},rules:{msgTitle:[l.a.required("此项必填")],username:[function(){return{validator:function(n,e,a){r.a.post(i.a.memberCheckName,{username:e}).then(function(n){"200"==n.code?n.body.result?a(new Error("用户名不存在")):a():a(new Error("服务器响应异常"))})},trigger:"blur"}}()]},groups:[]}},methods:{getRoleIds:function(n){console.log(n)},getDataInfo:function(n){var e=this,a=this.$api;r.a.all([r.a.post(a.messageForward,{id:n}),r.a.post(a.groupList)]).then(r.a.spread(function(n,a){e.dataInfo=n.body,e.groups=a.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(n){e.loading=!1})},add:function(n){this.dataInfo.username=this.dataInfo.msgReceiverUserName,this.saveDataInfo(n,i.a.messageSend,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),n._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"收件人",prop:"username"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.username,callback:function(e){n.$set(n.dataInfo,"username",e)},expression:"dataInfo.username"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组管理",prop:"name"}},[a("el-select",{model:{value:n.dataInfo.groupId,callback:function(e){n.$set(n.dataInfo,"groupId",e)},expression:"dataInfo.groupId"}},[a("el-option",{attrs:{label:"所有会员组",value:""}}),n._v(" "),n._l(n.groups,function(n,e){return a("el-option",{key:e,attrs:{label:n.name,value:n.id}})})],2),n._v(" "),a("label",{staticClass:"cms-label"},[n._v("请填写收件人或者选择会员组（两者必选其一，选择会员组批量发送站内信）")])],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"标题",prop:"msgTitle"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.msgTitle,callback:function(e){n.$set(n.dataInfo,"msgTitle",e)},expression:"dataInfo.msgTitle"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"内容",prop:"msgContent"}},[a("el-input",{attrs:{type:"textarea",rows:15,placeholder:"请输入内容"},model:{value:n.dataInfo.msgContent,callback:function(e){n.$set(n.dataInfo,"msgContent",e)},expression:"dataInfo.msgContent"}})],1),n._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"cms-width",model:{value:n.dataInfo.msgReceiverUserName,callback:function(e){n.$set(n.dataInfo,"msgReceiverUserName",e)},expression:"dataInfo.msgReceiverUserName"}}),n._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"cms-width",model:{value:n.dataInfo.msgSendUserUserName,callback:function(e){n.$set(n.dataInfo,"msgSendUserUserName",e)},expression:"dataInfo.msgSendUserUserName"}}),n._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/message/add",expression:"'/message/add'"}],attrs:{type:"primary"},on:{click:function(e){n.add(!1)}}},[n._v("发送")]),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},m=[],u={render:d,staticRenderFns:m},f=u,p=a("Z0/y"),v=t,g=p(c,f,!1,v,null,null);e.default=g.exports},ViLG:function(n,e,a){var t=a("96w/");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);a("FIqI")("3b9f9f30",t,!0,{})}});