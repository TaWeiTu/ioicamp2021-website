(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{245:function(t,e,o){var content=o(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("66a2b8fb",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";var n=o(245);o.n(n).a},248:function(t,e,o){(e=o(14)(!1)).push([t.i,'.background[data-v-64f33cc8]{background-color:#8f8f95;min-height:100vh}a[data-v-64f33cc8]{text-decoration:none;transition:.3s}a[data-v-64f33cc8],a[data-v-64f33cc8]:visited{color:#db6d42}a[data-v-64f33cc8]:hover{color:red}.section[data-v-64f33cc8]{background:#fff;padding:25px 5vw 30px}.section h1[data-v-64f33cc8],.section h2[data-v-64f33cc8]{font-family:"Noto Serif TC",serif;color:#000;font-weight:900;margin-bottom:10px!important}.section p[data-v-64f33cc8]{font-size:1.1em}.section form label.input[data-v-64f33cc8]{display:flex;margin:10px 0!important}.section form label.input span[data-v-64f33cc8]{font-weight:300;font-family:"Noto Sans TC",sans-serif;display:inline-block;min-width:70px;width:20%;padding:5px 10px;background:#333;color:#e0e0e0;margin-right:10px!important}.section form label.input input[type=email][data-v-64f33cc8],.section form label.input input[type=password][data-v-64f33cc8],.section form label.input input[type=text][data-v-64f33cc8]{font-size:1.2em;display:inline-block;width:calc(80% - 50px);max-width:calc(100% - 120px);background:transparent;border:none;border-bottom:1px solid #000;border-radius:0;outline:none}.section form label.input input[type=email][data-v-64f33cc8]:focus,.section form label.input input[type=password][data-v-64f33cc8]:focus,.section form label.input input[type=text][data-v-64f33cc8]:focus{border-bottom-width:2px}.section form label.input.error span[data-v-64f33cc8]{background-color:#900000}.section form label.input.error input[type=email][data-v-64f33cc8],.section form label.input.error input[type=password][data-v-64f33cc8],.section form label.input.error input[type=text][data-v-64f33cc8]{width:calc(100% - 30px);border-bottom-color:#900000;background-image:url(/flat-2126885.svg);background-size:contain;background-repeat:no-repeat;background-position:100%;padding-right:30px}.section form .right[data-v-64f33cc8]{text-align:right}.section form button.submit[data-v-64f33cc8]{font-size:1.2em;padding:5px 35px;border:none;outline:none;cursor:pointer;transition:.3s;background-color:#333;color:#fff}@-webkit-keyframes quake-data-v-64f33cc8{0%{transform:scale(1) rotate(0deg)}25%{transform:scale(1.06) rotate(3deg)}50%{transform:scale(1.02) rotate(0deg)}75%{transform:scale(1.06) rotate(-3deg)}to{transform:scale(1) rotate(0deg)}}@keyframes quake-data-v-64f33cc8{0%{transform:scale(1) rotate(0deg)}25%{transform:scale(1.06) rotate(3deg)}50%{transform:scale(1.02) rotate(0deg)}75%{transform:scale(1.06) rotate(-3deg)}to{transform:scale(1) rotate(0deg)}}.section form button.submit[data-v-64f33cc8]:hover{-webkit-animation:quake-data-v-64f33cc8 .6s infinite;animation:quake-data-v-64f33cc8 .6s infinite}@media (max-width:960px){.section form button.submit[data-v-64f33cc8]:hover{-webkit-animation:none;animation:none}}',""]),t.exports=e},249:function(t,e,o){"use strict";o.r(e);var n=o(0).a.extend({}),r=(o(247),o(7)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"section"},[this._t("default")],2)}),[],!1,null,"64f33cc8",null);e.default=component.exports},256:function(t,e,o){var content=o(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("48164489",content,!0,{sourceMap:!1})},271:function(t,e,o){"use strict";var n=o(256);o.n(n).a},272:function(t,e,o){(e=o(14)(!1)).push([t.i,".container[data-v-505f0183]{padding-top:140px;padding-left:20vw;padding-right:20vw}@media (max-width:960px){.container[data-v-505f0183]{padding-top:100px;padding-left:5vw;padding-right:5vw}}",""]),t.exports=e},294:function(t,e,o){"use strict";o.r(e);var n=o(0).a.extend({head:{title:"IOICcamp 2021 - 我要報名",meta:[{hid:"description",name:"description",content:"Home page description"}]},data:function(){return{password:"",password2:""}},computed:{passwordChecked:function(){return this.password!==this.password2}}}),r=(o(271),o(7)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form-section",[o("h1",[o("i",{staticClass:"fas fa-chevron-right"}),t._v(" 建立帳號")]),o("div",{staticClass:"content"},[o("form",{attrs:{id:"signup-form"}},[o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"far fa-envelope"}),t._v(" 信箱")]),o("input",{attrs:{type:"email",placeholder:"nobugnolife@gmail.com"}})]),o("label",{staticClass:"input"},[o("span",[o("i",{staticClass:"fas fa-key"}),t._v(" 密碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"your password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),o("label",{staticClass:"input",class:{error:t.passwordChecked}},[o("span",[o("i",{staticClass:"fas fa-check-double"}),t._v(" 確認密碼")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],attrs:{type:"password",placeholder:"your password"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}})]),o("div",{staticClass:"right"},[o("button",{staticClass:"submit",attrs:{id:"signup-btn"}},[t._v("報名")])])])]),o("h2",[o("i",{staticClass:"fas fa-chevron-right"}),t._v(" 已經有帳號？")]),o("div",{staticClass:"content"},[o("p",[o("NuxtLink",{attrs:{to:"/signin/"}},[t._v("馬上登入")]),t._v(" IOICamp 2021！")],1)])])],1)}),[],!1,null,"505f0183",null);e.default=component.exports;installComponents(component,{FormSection:o(249).default})}}]);