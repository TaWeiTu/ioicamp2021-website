(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{247:function(t,e,o){},249:function(t,e,o){"use strict";var n=o(247);o.n(n).a},250:function(t,e,o){"use strict";o.r(e);var n=o(0).a.extend({}),r=(o(249),o(8)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"d4e4a3c2",null);e.default=component.exports},255:function(t,e,o){},269:function(t,e,o){"use strict";var n=o(255);o.n(n).a},289:function(t,e,o){"use strict";o.r(e);o(13);var n=o(2),r=o(0).a.extend({head:{title:"登入"},middleware:"auth",auth:"guest",data:function(){return{login:{email:"",password:""},popout:{msg:"",status:""}}},methods:{scrollToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(scrollTo(0,t-t/5),requestAnimationFrame(this.scrollToTop))},signin:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.popout.msg="登入中...",t.popout.status="info",t.scrollToTop(),e.prev=3,e.next=6,t.$auth.loginWith("IOICStrategy",{data:t.login});case 6:e.sent,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),t.popout.status="error",e.t0.response&&e.t0.response.data?"User not found"===e.t0.response.data.error?t.popout.msg="帳號或密碼錯誤~":t.popout.msg="不知道發生什麼事了，可以聯絡我們嗎?":t.popout.msg="好像壞掉了，請跟我們聯絡 Q_Q";case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}}),l=(o(269),o(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form-section",[""!==t.popout.msg?o("div",{staticClass:"message",class:t.popout.status,attrs:{id:"msg-popout"}},[t._v(t._s(t.popout.msg))]):t._e(),o("h1",[o("font-awesome-icon",{attrs:{icon:"chevron-right"}}),t._v(" 登入")],1),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signin-form"},on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:["far","envelope"]}}),t._v(" 信箱")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"email",placeholder:"nobugnolife@ioicamp.org"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}})]),o("label",{staticClass:"input"},[o("span",[o("font-awesome-icon",{attrs:{icon:"key"}}),t._v(" 密碼")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"your password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}})]),o("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[o("span",[o("NuxtLink",{attrs:{to:"/user/requestPasswordReset/"}},[t._v("忘記密碼")]),t._v("？")],1),o("button",{staticClass:"submit",attrs:{id:"signin-btn",type:"submit"}},[t._v("登入")])])])]),o("h2",[o("font-awesome-icon",{attrs:{icon:"chevron-right"}}),t._v(" 沒有帳號？")],1),o("div",{staticClass:"padded content"},[o("p",[o("NuxtLink",{attrs:{to:"/signup/"}},[t._v("立即報名")]),t._v(" IOICamp 2021！")],1)])])],1)}),[],!1,null,"4faa135f",null);e.default=component.exports;installComponents(component,{FormSection:o(250).default})}}]);