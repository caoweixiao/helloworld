webpackJsonp([94],{DOs3:function(a,e,t){"use strict";function s(a){t("hRHx")}Object.defineProperty(e,"__esModule",{value:!0});var l=t("3cXf"),i=t.n(l),n=t("hRKE"),o=t.n(n),r=t("lcoF"),d=t("2sCs"),c=t.n(d),f=t("P9l9"),u=t("x1ym"),m={mixins:[r.a],data:function(){var a=this,e=u.a.required("此项必填"),t=u.a.number("只能输入数字"),s=u.a.email("请输入正确的邮箱地址"),l=u.a.validateName("用户名已存在"),i=u.a.tel("请输入正确的固定电话"),n=u.a.mobile("请输入正确的手机号");return{params:{queryUsername:"",https:""},rules:{username:[e,l],email:[s],password:[function(){return{validator:function(e,t,s){""===t?s():(""!==a.dataInfo.confirmPassword&&a.$refs.form.validateField("confirmPassword"),s())},trigger:"blur"}}(),e],confirmPassword:[function(){return{validator:function(e,t,s){""===t?s():t!==a.dataInfo.password?s(new Error("前后密码不一致")):s()},trigger:"blur"}}(),e],groupId:[e,t],grain:[e,t],phone:[i],mobile:[n],rank:[t,function(){return{validator:function(a,e,t){""!=e&&c.a.post(f.a.adminValRank,{id:"",rank:e}).then(function(a){""==e?t():"200"==a.code?a.body.result?t():t(new Error("不能大于自身级别")):t(new Error("服务器响应异常"))})},trigger:"blur"}}()],disabled:[e]},memberGroup:[],roles:[],dialogDepartments:!1,parents:[],departmentList:[],siteList:[],roleIds:[],siteIds:[],steps:[],allChannels:[],allControlChannels:[],defaultProps:{label:"name",value:"id",children:"child"},dialogVisible:!1}},methods:{getSiteIds:function(a,e){this.siteIds.indexOf(a)>=0?(this.allChannels[e]=!0,this.allControlChannels[e]=!0):(this.allChannels[e]=!1,this.allControlChannels[e]=!1)},getDataInfo:function(a,e){var t=this,s=this.$api;c.a.all([c.a.post(s.adminGlobleGet,{id:a,https:e}),c.a.post(s.groupList),c.a.post(s.roleList),c.a.post(s.siteList)]).then(c.a.spread(function(a,e,s,l){t.dataInfo=a.body,t.dataInfo.groupId=1,t.dataInfo.gender=!0,t.dataInfo.rank=1,t.memberGroup=e.body,t.roles=s.body,t.siteList=l.body;for(var i in t.siteList)t.steps[i]="",t.allChannels[i]=!1,t.allControlChannels[i]=!1;t.$refs.form.resetFields(),t.loading=!1})).catch(function(a){t.loading=!1})},add:function(a){var e={};for(var t in this.dataInfo)e[t]=this.dataInfo[t];e.roleIds=this.roleIds.join(",");var s=[];e.siteIds=this.siteIds.join(",");for(var l in e)"object"==o()(e[l])&&delete e[l];for(var n in this.siteIds)for(var r in this.siteList)if(this.siteList[r].id===this.siteIds[n]){var d={siteIds:this.siteIds[n],steps:this.steps[r],allChannels:this.allChannels[r],allControlChannels:this.allControlChannels[r]};s.push(d)}e.source=i()(s),this.saveDataInfo(a,this.$api.adminGlobleSave,e,"list")}},created:function(){this.getDataInfo(this.id)}},p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),a._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:a.dataInfo,rules:a.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"用户名",prop:"username"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.username,callback:function(e){a.$set(a.dataInfo,"username",e)},expression:"dataInfo.username"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"电子邮箱",prop:"email"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.email,callback:function(e){a.$set(a.dataInfo,"email",e)},expression:"dataInfo.email"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"密码",prop:"password"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:a.dataInfo.password,callback:function(e){a.$set(a.dataInfo,"password",e)},expression:"dataInfo.password"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"确认密码",prop:"confirmPassword"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:a.dataInfo.confirmPassword,callback:function(e){a.$set(a.dataInfo,"confirmPassword",e)},expression:"dataInfo.confirmPassword"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组",prop:"groupId"}},[t("el-select",{staticClass:"cms-width",model:{value:a.dataInfo.groupId,callback:function(e){a.$set(a.dataInfo,"groupId",e)},expression:"dataInfo.groupId"}},a._l(a.memberGroup,function(a,e){return t("el-option",{key:e,attrs:{label:a.name,value:a.id}})}))],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"等级",prop:"rank"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:a.dataInfo.rank,callback:function(e){a.$set(a.dataInfo,"rank",e)},expression:"dataInfo.rank"}}),a._v(" "),t("span",{staticClass:"gray"},[a._v("越大等级越高")])],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"真实姓名",prop:"realname"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"username"},model:{value:a.dataInfo.userRealName,callback:function(e){a.$set(a.dataInfo,"userRealName",e)},expression:"dataInfo.userRealName"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"性别",prop:"gender"}},[t("el-radio-group",{model:{value:a.dataInfo.gender,callback:function(e){a.$set(a.dataInfo,"gender",e)},expression:"dataInfo.gender"}},[t("el-radio",{attrs:{label:!0}},[a._v("男")]),a._v(" "),t("el-radio",{attrs:{label:!1}},[a._v("女")])],1)],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"受限管理员",prop:"selfAdmin"}},[t("el-radio-group",{model:{value:a.dataInfo.selfAdmin,callback:function(e){a.$set(a.dataInfo,"selfAdmin",e)},expression:"dataInfo.selfAdmin"}},[t("el-radio",{attrs:{label:!0}},[a._v("是")]),a._v(" "),t("el-radio",{attrs:{label:!1}},[a._v("否")])],1),a._v(" "),t("span",{staticClass:"gray"},[a._v("只能管理自己的数据")])],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"角色",prop:"roleIds"}},[t("el-checkbox-group",{model:{value:a.roleIds,callback:function(e){a.roleIds=e},expression:"roleIds"}},a._l(a.roles,function(e,s){return t("el-checkbox",{key:s,attrs:{value:e.id,label:e.id}},[a._v(a._s(e.name))])})),a._v(" "),t("span",{staticClass:"gray"},[a._v("功能权限的控制在角色中")])],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"站群权限"}},[t("el-button",{on:{click:function(e){a.dialogVisible=!0}}},[a._v("站群权限")]),a._v(" "),t("el-dialog",{attrs:{title:"站群权限设置",visible:a.dialogVisible},on:{"update:visible":function(e){a.dialogVisible=e}}},[t("div",{staticClass:"channels-box"},[t("el-checkbox-group",{staticClass:"pull-left check-vertical",model:{value:a.siteIds,callback:function(e){a.siteIds=e},expression:"siteIds"}},a._l(a.siteList,function(e,s){return t("el-checkbox",{key:s,attrs:{label:e.id},on:{change:function(t){a.getSiteIds(e.id,s)}}},[a._v(a._s(e.name))])})),a._v(" "),t("div",{staticClass:"pull-left"},a._l(a.siteList,function(e,s){return t("div",{key:s,staticClass:"cms-channels"},[t("div",{staticClass:"pull-left",staticStyle:{"margin-right":"12px"}},[t("label",{staticClass:"font-size:12px;",attrs:{for:""}},[a._v("审核级别")]),a._v(" "),t("el-input",{staticClass:"w50",attrs:{type:"number",disabled:"-1"==a.siteIds.indexOf(e.id)},model:{value:a.steps[s],callback:function(e){a.$set(a.steps,s,e)},expression:"steps[index]"}})],1),a._v(" "),t("el-checkbox",{staticClass:"pull-left",attrs:{"false-label":"",disabled:"-1"==a.siteIds.indexOf(e.id)},model:{value:a.allChannels[s],callback:function(e){a.$set(a.allChannels,s,e)},expression:"allChannels[index]"}},[a._v("所有栏目内容权限")])],1)}))],1),a._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{on:{click:function(e){a.dialogVisible=!1}}},[a._v("确定")])],1)]),a._v(" "),t("span",{staticClass:"gray"})],1),a._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlobal/add",expression:"'/adminGlobal/add'"}],attrs:{type:"warning"},on:{click:function(e){a.add(!0)}}},[a._v("保存并继续添加")]),a._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlobal/add",expression:"'/adminGlobal/add'"}],attrs:{type:"primary"},on:{click:function(e){a.add(!1)}}},[a._v("提交")]),a._v(" "),t("el-button",{attrs:{type:"info"},on:{click:a.reset}},[a._v("重置")])],1)],1)],1)},v=[],b={render:p,staticRenderFns:v},h=b,I=t("Z0/y"),C=s,_=I(m,h,!1,C,"data-v-50ea5890",null);e.default=_.exports},HSBr:function(a,e,t){e=a.exports=t("l95E")(!1),e.push([a.i,"",""])},hRHx:function(a,e,t){var s=t("HSBr");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);t("FIqI")("732c5c29",s,!0,{})}});