(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6943f6ca"],{"4ffb":function(t,e,i){},"97fc":function(t,e,i){"use strict";var s=i("aebb"),a=i.n(s);a.a},a79e:function(t,e,i){"use strict";var s=i("4ffb"),a=i.n(s);a.a},aebb:function(t,e,i){},d784:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"m-header is-fixed"},[i("div",{staticClass:"m-header-button is-left"},[t._t("left")],2),i("h1",{staticClass:"m-header-title",domProps:{textContent:t._s(t.title)}}),i("div",{staticClass:"m-header-button is-right"},[t._t("right")],2)])},a=[],r={props:{title:{type:String,default:""}}},n=r,l=(i("97fc"),i("2877")),o=Object(l["a"])(n,s,a,!1,null,"48061a4a",null);e["a"]=o.exports},ecd6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.user_info?i("div",{staticClass:"main"},[i("m-header",{attrs:{title:"账户信息"}},[i("a",{attrs:{slot:"left",href:"javascript:;"},on:{click:t.goPrev},slot:"left"},[i("i",{staticClass:"el-icon-arrow-left"})])]),i("ul",{staticClass:"info_main"},[i("li",[i("p",[t._v("个人头像")]),i("div",{staticClass:"right"},[i("img",{staticClass:"head_img",attrs:{src:t.user_info.user_img,alt:""}})])]),i("li",[i("router-link",{attrs:{to:{name:"alter_info",query:{alter_id:1}}}},[i("p",[t._v("用户昵称")]),i("div",{staticClass:"right"},[i("p",[t._v(t._s(t.user_info.user_name||t.user_info.wechat_name))]),i("i",{staticClass:"el-icon-arrow-right"})])])],1),i("li",[i("p",[t._v("微信")]),i("div",{staticClass:"right"},[i("p",[t._v(t._s(t.user_info.wechat_name))])])]),i("li",[i("router-link",{attrs:{to:{name:"alter_info",query:{alter_id:2}}}},[i("p",[t._v("标识码")]),i("div",{staticClass:"right"},[i("p",[t._v(t._s(t.user_info.wifi_id||""))]),i("i",{staticClass:"el-icon-arrow-right"})])])],1)])],1):t._e()},a=[],r=i("d784"),n={components:{mHeader:r["a"]},data:function(){return{user_info:JSON.parse(localStorage.getItem("yice_user"))||null}},methods:{goPrev:function(){window.history.length>1?this.$router.back():this.$router.push("/")}},mounted:function(){this.user_info||this.$router.push("/login")}},l=n,o=(i("a79e"),i("2877")),c=Object(o["a"])(l,s,a,!1,null,"670ae4c4",null);e["default"]=c.exports}}]);