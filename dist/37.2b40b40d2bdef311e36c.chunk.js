webpackJsonp([37],{271:function(n,t,e){"use strict";function a(n){c||e(912)}Object.defineProperty(t,"__esModule",{value:!0});var i=e(801),r=e.n(i);for(var l in i)"default"!==l&&function(n){e.d(t,n,function(){return i[n]})}(l);var s=e(914),o=e.n(s),c=!1,d=e(1),u=a,v=d(r.a,o.a,!1,u,"data-v-38f2f363",null);v.options.__file="src\\views\\contents\\contents-list.vue",t.default=v.exports},801:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"contents-list",data:function(){var n=this;return{loading:!1,columns:[{type:"selection",width:60,align:"center"},{title:"排序",key:"sort",width:120,render:function(n,t){return n("div",[n("input",{props:{type:"default"},style:{width:"60px",height:"30px","padding-left":"5px"},attrs:{value:0,type:"number",min:0}})])}},{title:"ID",key:"id",width:100},{title:"栏目",key:"column",width:150},{title:"分类",key:"cato",width:150},{title:"标题",key:"title"},{title:"别名",key:"alias"},{title:"浏览",key:"views",width:70},{title:"审核",key:"checked",width:70},{title:"添加时间",key:"create_time",width:150},{title:"操作",key:"action",render:function(t,e){return t("div",[t("Button",{props:{type:"default",size:"small"},style:{marginRight:"5px"},on:{click:function(){n.show(e.index)}}},"查看"),t("Button",{props:{type:"default",size:"small"},style:{marginRight:"5px"},on:{click:function(){}}},"编辑"),t("Button",{props:{type:"default",size:"small"},on:{click:function(){n.remove(e.index)}}},"删除")])}}],data:[{id:1,name:"John Brown11",alias:"111",isNav:"是",create_time:"2017-03-09 21:20:51"},{id:2,name:"John Brown222",alias:"222",isNav:"是",create_time:"2017-03-09 21:20:51"},{id:3,name:"John Brown333",alias:"333",isNav:"是",create_time:"2017-03-09 21:20:51"},{id:4,name:"John Brown444",alias:"44",isNav:"是",create_time:"2017-03-09 21:20:51"}],cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}]}},methods:{show:function(n){this.$Modal.info({title:"User Info",content:"Name："+this.data[n].name+"<br>Age："+this.data[n].age+"<br>Address："+this.data[n].address})},remove:function(n){this.data.splice(n,1)}}}},912:function(n,t,e){var a=e(913);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(19)("33240c72",a,!1)},913:function(n,t,e){t=n.exports=e(18)(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},914:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"home-main"},[e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{md:24,lg:24}},[e("Card",{attrs:{"dis-hover":""}},[e("Row",{style:{marginBottom:"10px"},attrs:{gutter:10}},[e("Col",{attrs:{xs:24,sm:12,md:15}},[n._v("\n                        栏目：\n                        "),e("Select",{staticStyle:{width:"120px"},attrs:{name:"select",transfer:"",placement:"bottom",placeholder:"请选择..."}},n._l(n.cityList,function(n){return e("Option",{key:n.label,attrs:{value:n.value}})})),n._v("\n                        分类：\n                        "),e("Select",{staticStyle:{width:"120px"},attrs:{name:"select",transfer:"",placement:"bottom",placeholder:"请选择..."}},n._l(n.cityList,function(n){return e("Option",{key:n.label,attrs:{value:n.value}})})),n._v("\n                        专题：\n                        "),e("Select",{staticStyle:{width:"120px"},attrs:{name:"select",transfer:"",placement:"bottom",placeholder:"请选择..."}},n._l(n.cityList,function(n){return e("Option",{key:n.label,attrs:{value:n.value}})})),n._v("\n                        标题：\n                        "),e("Input",{staticStyle:{width:"20%"},attrs:{name:"name",placeholder:""}}),n._v(" "),e("Button",{attrs:{type:"primary"}},[n._v("提交")])],1),n._v(" "),e("Col",{attrs:{xs:24,sm:12,md:9}},[e("div",{staticStyle:{float:"right"}},[e("a",{attrs:{href:"#/contents/add-content"}},[e("Button",{attrs:{type:"primary"}},[n._v("添加内容")])],1),n._v(" "),e("a",{attrs:{href:"#/contents/add-content"}},[e("Button",{attrs:{type:"primary"}},[n._v("审核内容")])],1),n._v(" "),e("a",{attrs:{href:"#/contents/add-content"}},[e("Button",[n._v("回收站")])],1)])])],1),n._v(" "),e("Row",{style:{marginBottom:"10px"},attrs:{gutter:10}},[e("Table",{attrs:{loading:n.loading,border:"",columns:n.columns,data:n.data}}),n._v(" "),e("div",{staticStyle:{margin:"10px 0 10px 0",overflow:"hidden"}},[e("a",{attrs:{href:"javascript:void(0)"}},[e("Button",[n._v("排序")])],1),n._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("Button",[n._v("审核")])],1),n._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("Button",[n._v("删除")])],1),n._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("Button",[n._v("彻底删除")])],1)]),n._v(" "),e("div",{staticStyle:{margin:"10px 0 10px 0",overflow:"hidden"}},[e("div",{staticStyle:{float:"left"}},[n._v("\n                            移动内容到：\n                            "),e("Select",{staticStyle:{width:"120px"},attrs:{name:"select",transfer:"",placement:"top",placeholder:"请选择..."}},n._l(n.cityList,function(n){return e("Option",{key:n.label,attrs:{value:n.value}})})),n._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("Button",[n._v("移动")])],1)],1),n._v(" "),e("div",{staticStyle:{float:"right"}},[e("Page",{attrs:{total:100,current:1,"show-total":""}})],1)])],1)],1)],1)],1)],1)},i=[];a._withStripped=!0;var r={render:a,staticRenderFns:i};t.default=r}});