webpackJsonp([1],{"0sSl":function(t,e){},"1Bms":function(t,e){},"53Or":function(t,e){},"E/Iw":function(t,e){},HCWQ:function(t,e){},HpBX:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Dd8w"),r=n.n(s),i=n("NYxO"),o={data:function(){return{}},computed:r()({},Object(i.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:r()({},Object(i.b)(["checkLogin","logout"]),{onLogout:function(){var t=this;this.logout().then(function(){t.$router.push({path:"/"})})},showIdx:function(){this.$router.push({path:"/"})}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("h1",[t._v("布鹿共享博客")]),t._v(" "),n("p",[t._v("精彩博客，群英荟萃")]),t._v(" "),n("div",{attrs:{id:"btns"}},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("现在注册")])],1)],1)],t._v(" "),t.isLogin?[n("h1",{on:{click:t.showIdx}},[t._v("布鹿共享博客")]),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"iconfont icon-write"},[n("span",[t._v("写文章")])])]),t._v(" "),n("div",{staticClass:"userArea"},[n("img",{attrs:{src:t.user.avatar,alt:"user.username"}}),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),n("li",{on:{click:t.onLogout}},[t._v("注销")])])])]:t._e()],2)},staticRenderFns:[]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("Copyright \n      "),e("a",{attrs:{href:"mailto:fejavu@foxmail.com?subject=offer to fejavu"}},[this._v("fejavu")])])])}]};var u={name:"App",components:{Header:n("VU/8")(o,c,!1,function(t){n("1Bms")},null,null).exports,Footer:n("VU/8")(null,l,!1,function(t){n("HpBX")},null,null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("Main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var v=n("VU/8")(u,d,!1,function(t){n("53Or")},null,null).exports,p=n("/ocq"),g=n("//Fk"),h=n.n(g),_=n("mtWM"),f=n.n(_),m=n("zL8q"),b=n.n(m);function x(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e=e||"GET";return new h.a(function(a,s){var r={url:t,method:e};"get"===e.toLowerCase()?r.params=n:r.data=n,f()(r).then(function(t){"ok"===t.data.status?a(t.data):(m.Message.error(t.data.msg),s(t.data))}).catch(function(t){m.Message.error("network error"+t),s({msg:"network error"})})})}f.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",f.a.defaults.baseURL="https://blog-server.hunger-valley.com",f.a.defaults.withCredentials=!0;var C="/auth/register",I="/auth/login",w="/auth/logout",y="/auth",k="POST",L={register:function(t){var e=t.username,n=t.password;return x(C,k,{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return x(I,k,{username:e,password:n})},logout:function(){return x(w)},getInfo:function(){return x(y)}},E={GET_LIST:"/blog",GET_DETAIL:"/blog/:blogId",CREATE:"/blog",UPDATE:"/blog/:blogId",DELETE:"/blog/:blogId"},$="GET",D="PATCH",T="DELETE",P="POST",q={getBLogs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},e=t.page,n=void 0===e?1:e,a=t.userId,s=t.atIndex;return x(E.GET_LIST,$,{page:n,userId:a,atIndex:s})},getIndexBlogs:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1}).page,e=void 0===t?1:t;return this.getBLogs({page:e,atIndex:!0})},getBlogByUserId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=e.page,a=void 0===n?1:n,s=e.atIndex;return this.getBLogs({userId:t,page:a,atIndex:s})},getDetail:function(t){var e=t.blogId;return x(E.GET_DETAIL.replace(":blogId",e))},updateBlog:function(t,e){var n=t.blogId,a=e.title,s=e.content,r=e.description,i=e.atIndex;return x(E.UPDATE.replace(":blogId",n),D,{title:a,content:s,description:r,atIndex:i})},deleteBlog:function(t){var e=t.blogId;return x(E.DELETE.replace(":blogId",e),T)},createBlog:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",content:"",description:"",atIndex:!1},e=t.title,n=void 0===e?"":e,a=t.content,s=void 0===a?"":a,r=t.description,i=void 0===r?"":r,o=t.atIndex,c=void 0!==o&&o;return x(E.CREATE,P,{title:n,content:s,description:i,atIndex:c})}},B={data:function(){return{title:"",description:"",content:"",atIndex:!1}},methods:{showMD:function(){document.querySelector(".mdSyntax").classList.toggle("mdSyntaxShow")},onCreate:function(){var t=this;this.description=document.querySelector("div.description").innerText,this.content=document.querySelector("div.content").innerText,q.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create"}},[n("div",{staticClass:"writing"},[n("div",{staticClass:"tool-bar"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"headline",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("div",{staticClass:"description text-content",attrs:{contenteditable:"true","data-placeholder":"请输入概述"},domProps:{textContent:t._s(t.description)}}),t._v(" "),n("div",{staticClass:"content text-content",attrs:{contenteditable:"true","data-placeholder":"输入正文"},domProps:{textContent:t._s(t.content)}})]),t._v(" "),n("p",[n("label",[t._v("是否推送到首页")]),t._v(" "),n("el-switch",{attrs:{"action-color":"rgba(0, 200, 0, 1)","inactive-color":"#dfdfdf"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("button",{staticClass:"publish",on:{click:t.onCreate}},[t._v("发表文章")]),t._v(" "),n("button",{staticClass:"md",on:{click:t.showMD}},[t._v("MarkDown 语法")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdSyntax"},[n("p",[t._v("# 一级标题"),n("br"),t._v("## 二级标题"),n("br"),t._v("##### 五级标题")]),t._v(" "),n("p",[t._v("- 无序列表第一项"),n("br"),t._v("- 无序列表第二项"),n("br"),t._v("1. 有序列表第一项"),n("br"),t._v("2. 有序列表第二项")]),t._v(" "),n("p",[t._v("[标题](链接地址)"),n("br"),t._v("![图片描述](图片链接地址)")]),t._v(" "),n("p",[t._v("*斜体*"),n("br"),t._v("**粗体**")]),t._v(" "),n("p",[t._v("> 引用段落")]),t._v(" "),n("p",[t._v("```"),n("br"),t._v("代码块"),n("br"),t._v("```")])])}]};var A=n("VU/8")(B,U,!1,function(t){n("tKsD")},null,null).exports,S={data:function(){return{username:"",password:""}},methods:r()({},Object(i.b)(["login"]),{onLogin:function(){var t=this;this.login({username:this.username,password:this.password}).then(function(){t.$router.push({path:t.$route.query.redirect||"/"})})}})},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[t._m(0),t._v(" "),n("div",{staticClass:"formArea"},[n("div",{staticClass:"bar"},[t._v("现有账号登录")]),t._v(" "),n("div",{staticClass:"form"},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{placeholder:"密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sayEnter(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("el-button",{on:{click:t.onLogin}},[t._v("登录")])],1)],1),t._v(" "),n("a",{attrs:{href:"#/register"}},[t._v("新帐号注册>")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("img",{attrs:{src:"https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-mj1e9c5d.jpg"}})])}]};var R=n("VU/8")(S,F,!1,function(t){n("QPTH")},null,null).exports,M=n("EFqf"),j=n.n(M),H={data:function(){return{title:"",content:"",user:{},createdAt:""}},created:function(){var t=this;this.blogId=this.$route.params.blogId,q.getDetail({blogId:this.blogId}).then(function(e){console.log(e),t.title=e.data.title,t.content=e.data.content,t.createdAt=e.data.createdAt,t.user=e.data.user,console.log(t.user)})},computed:{markdown:function(){return j()(this.content)}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"detail"}},[n("section",{staticClass:"userInfo"},[n("h3",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.user.avatar,alt:t.user.username}}),t._v(" "),n("div",{staticClass:"editInfo"},[n("div",{staticClass:"name"},[n("router-link",{attrs:{to:"/user/"+t.user.id}},[t._v(t._s(t.user.username))])],1),t._v(" "),n("div",{staticClass:"date"},[t._v("编辑于"),n("span",[t._v(t._s(t.friendlyDate(t.createdAt)))])])])])]),t._v(" "),n("section",{staticClass:"article",domProps:{innerHTML:t._s(t.markdown)}})])},staticRenderFns:[]};var O=n("VU/8")(H,V,!1,function(t){n("HCWQ")},null,null).exports;window.request=x,window.auth=L;var N={data:function(){return{blogId:null,title:"",description:"",content:"",atIndex:!1}},created:function(){var t=this;this.blogId=this.$route.params.blogId,q.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.content=e.data.content,t.atIndex=e.data.atIndex})},methods:{onUpdate:function(){var t=this;this.description=document.querySelector("div.description").innerText,this.content=document.querySelector("div.content").innerText,q.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})},showMD:function(){document.querySelector(".mdSyntax").classList.toggle("mdSyntaxShow")}}},W={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("div",{staticClass:"writing"},[n("div",{staticClass:"tool-bar"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"headline",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("div",{staticClass:"description text-content",attrs:{contenteditable:"true","data-placeholder":"请输入概述"},domProps:{textContent:t._s(t.description)}}),t._v(" "),n("div",{staticClass:"content text-content",attrs:{contenteditable:"true","data-placeholder":"输入正文"},domProps:{textContent:t._s(t.content)}})]),t._v(" "),n("p",[n("label",[t._v("是否推送到首页")]),t._v(" "),n("el-switch",{attrs:{"action-color":"rgba(0, 200, 0, 1)","inactive-color":"#dfdfdf"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("button",{staticClass:"publish",on:{click:t.onUpdate}},[t._v("更新文章")]),t._v(" "),n("button",{staticClass:"md",on:{click:t.showMD}},[t._v("MarkDown 语法")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdSyntax"},[n("p",[t._v("# 一级标题"),n("br"),t._v("## 二级标题"),n("br"),t._v("##### 五级标题")]),t._v(" "),n("p",[t._v("- 无序列表第一项"),n("br"),t._v("- 无序列表第二项"),n("br"),t._v("1. 有序列表第一项"),n("br"),t._v("2. 有序列表第二项")]),t._v(" "),n("p",[t._v("[标题](链接地址)"),n("br"),t._v("![图片描述](图片链接地址)")]),t._v(" "),n("p",[t._v("*斜体*"),n("br"),t._v("**粗体**")]),t._v(" "),n("p",[t._v("> 引用段落")]),t._v(" "),n("p",[t._v("```"),n("br"),t._v("代码块"),n("br"),t._v("```")])])}]};var G=n("VU/8")(N,W,!1,function(t){n("0sSl")},null,null).exports,z={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,q.getIndexBlogs({page:this.page}).then(function(e){t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;q.getIndexBlogs({page:t}).then(function(n){e.blogs=n.data,e.total=n.total,e.page=n.page,e.$router.push({path:"/",query:{page:t}})})}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("section",{staticClass:"blog-post"},t._l(t.blogs,function(e){return n("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),n("span",[t._v(t._s(e.user.username))])]),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(t.friendlyDate(e.createdAt)))])])}),1),t._v(" "),n("section",[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var Y=n("VU/8")(z,Q,!1,function(t){n("Nqvn")},null,null).exports,X=n("pFYg"),J=n.n(X),K=n("Xxa5"),Z=n.n(K),tt=n("exGp"),et=n.n(tt),nt={data:function(){return{blogs:[],page:1,total:0}},computed:r()({},Object(i.c)(["user"])),created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,q.getBlogByUserId(this.user.id,{page:this.page}).then(function(e){t.page=e.page,t.total=e.totalPage,t.blogs=e.data})},methods:{onPageChange:function(t){var e=this;q.getBlogByUserId(this.user.id,{page:t}).then(function(n){e.blogs=n.data,e.total=n.total,e.page=n.page,e.$router.push({path:"/my",query:{page:t}})})},onDelete:function(t){var e=this;return et()(Z.a.mark(function n(){return Z.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm("确定删除这篇博客","删除博客",{confirmButtonText:"删除",cancleButtonText:"取消",type:"warning"});case 2:return n.next=4,q.deleteBlog({blogId:t});case 4:e.$message.success("已删除"),e.blogs=e.blogs.filter(function(e){return e.id!==t});case 6:case"end":return n.stop()}},n,e)}))()},splitDate:function(t){var e="object"===(void 0===e?"undefined":J()(e))?e:new Date(t);return{month:e.getMonth()+1+" 月",year:e.getFullYear()}}}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"my"}},[n("section",{staticClass:"userInfo"},[n("img",{attrs:{src:t.user.avatar,alt:t.user.username}}),t._v(" "),n("div",[n("div",{staticClass:"userName"},[t._v(t._s(t.user.username))]),t._v(" "),n("div",{staticClass:"artCount"},[t._v("文章"),n("span",[t._v(t._s(t.blogs.length))]),t._v("篇")])])]),t._v(" "),n("section",{staticClass:"articles"},t._l(t.blogs,function(e){return n("router-link",{key:e.id,attrs:{to:"/detail/"+e.id}},[n("div",{staticClass:"item"},[n("div",{staticClass:"date"},[n("div",{staticClass:"month"},[t._v(t._s(t.splitDate(e.createdAt).month))]),t._v(" "),n("div",{staticClass:"year"},[t._v(t._s(t.splitDate(e.createdAt).year))])]),t._v(" "),n("div",{staticClass:"artInfo"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("span",{staticClass:"edit"},[n("router-link",{attrs:{to:"/edit/"+e.id}},[t._v("编辑")])],1),t._v(" "),n("span",{staticClass:"delete",on:{click:function(n){return n.preventDefault(),t.onDelete(e.id)}}},[t._v("删除")])])])])}),1),t._v(" "),n("section",[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var st=n("VU/8")(nt,at,!1,function(t){n("E/Iw")},null,null).exports,rt={data:function(){return{username:"",password:"",secondPW:""}},methods:r()({},Object(i.b)(["register"]),{onRegister:function(){var t=this;this.secondPW===this.password?this.register({username:this.username,password:this.password}).then(function(){t.$router.push({path:"/"}),console.log(t)}):this.$message.error("两次密码输入不一致")}})},it={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[t._m(0),t._v(" "),n("div",{staticClass:"formArea"},[n("div",{staticClass:"bar"},[t._v("新用户注册")]),t._v(" "),n("div",{staticClass:"form"},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"确认密码"}},[n("el-input",{model:{value:t.secondPW,callback:function(e){t.secondPW=e},expression:"secondPW"}})],1),t._v(" "),n("el-button",{on:{click:t.onRegister}},[t._v("注册")])],1)],1),t._v(" "),n("a",{attrs:{href:"#/login"}},[t._v("已有帐号登录>")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("div",{staticClass:"introText"},[n("h2",[t._v("讲述你的故事")]),t._v(" "),n("p",[t._v("1994年")]),t._v(" "),n("p",[t._v("美国学生Justin Hall")]),t._v(" "),n("p",[t._v("编写了个人网页")]),t._v(" "),n("p",[t._v("发布了Links.net")]),t._v(" "),n("p",[t._v("此时的博客还被叫做个人网页")])]),t._v(" "),n("img",{attrs:{src:"https://rescdn.qqmail.com/zh_CN/htmledition/images/webp/tg-mail20f1b0.gif"}})])}]};var ot=n("VU/8")(rt,it,!1,function(t){n("VUc8")},null,null).exports,ct={data:function(){return{blogs:[],user:{},page:1,total:0}},created:function(){var t=this;this.userId=this.$route.params.userId,this.page=this.$route.query.page||1,q.getBlogByUserId(this.userId,{page:this.page}).then(function(e){t.page=e.page,t.total=e.totalPage,t.blogs=e.data,t.user=e.data.length>0?e.data[0].user:{}})},methods:{onPageChange:function(t){var e=this;q.getBlogByUserId(this.userId,{page:t}).then(function(n){e.blogs=n.data,e.total=n.total,e.page=n.page,e.$router.push({path:"/user/"+e.userId,query:{page:t}})})},splitDate:function(t){var e="object"===(void 0===e?"undefined":J()(e))?e:new Date(t);return{month:e.getMonth()+1+" 月",year:e.getFullYear()}}}},lt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user"}},[n("section",{staticClass:"userInfo"},[n("img",{attrs:{src:t.user.avatar,alt:t.user.username}}),t._v(" "),n("div",[n("div",{staticClass:"userName"},[t._v(t._s(t.user.username))]),t._v(" "),n("div",{staticClass:"artCount"},[t._v("文章"),n("span",[t._v(t._s(t.blogs.length))]),t._v("篇")])])]),t._v(" "),n("section",{staticClass:"articles"},t._l(t.blogs,function(e){return n("router-link",{key:e.id,attrs:{to:"/detail/"+e.id}},[n("div",{staticClass:"item"},[n("div",{staticClass:"date"},[n("div",{staticClass:"month"},[t._v(t._s(t.splitDate(e.createdAt).month))]),t._v(" "),n("div",{staticClass:"year"},[t._v(t._s(t.splitDate(e.createdAt).year))])]),t._v(" "),n("div",{staticClass:"artInfo"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))])])])])}),1),t._v(" "),n("section",[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var ut=n("VU/8")(ct,lt,!1,function(t){n("gzll")},null,null).exports,dt={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,a=e.username,s=e.password;return L.login({username:a,password:s}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,a=t.commit,s=e.username,r=e.password;return et()(Z.a.mark(function t(){var e;return Z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.register({username:s,password:r});case 2:return e=t.sent,a("setUser",{user:e.data}),a("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return et()(Z.a.mark(function t(){return Z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,a=t.state;return et()(Z.a.mark(function t(){var s;return Z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,L.getInfo();case 4:if(s=t.sent,n("setLogin",{isLogin:s.isLogin}),s.isLogin){t.next=8;break}return t.abrupt("return",!0);case 8:return n("setUser",{user:s.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}},vt=n("aWad"),pt=n.n(vt);a.default.use(i.a);var gt=new i.a.Store({modules:{auth:dt,blog:pt.a}});a.default.use(p.a);var ht=new p.a({routes:[{path:"/",name:"init page",component:Y},{path:"/login",name:"login page",component:R},{path:"/create",name:"create page",component:A,meta:{requiresAuth:!0}},{path:"/detail/:blogId",name:"detail page",component:O},{path:"/edit/:blogId",name:"edit page",component:G,meta:{requiresAuth:!0}},{path:"/index",name:"index page",component:Y},{path:"/my",name:"my page",component:st,meta:{requiresAuth:!0}},{path:"/register",name:"register page",component:ot},{path:"/user/:userId",name:"user page",component:ut}]});ht.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?gt.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var _t=ht;n("tvR6");function ft(t){var e=("object"===(void 0===t?"undefined":J()(t))?t:new Date(t)).getTime(),n=Date.now()-e,a="";switch(!0){case n<6e4:a="刚刚";break;case n<36e5:a=Math.floor(n/6e4)+"分钟前";break;case n<864e5:a=Math.floor(n/36e5)+"小时前";break;default:a=Math.floor(n/864e5)+"天前"}return a}var mt={install:function(t,e){t.prototype.friendlyDate=ft}};a.default.use(b.a),a.default.use(mt),a.default.config.productionTip=!1,new a.default({el:"#app",router:_t,store:gt,components:{App:v},template:"<App/>"})},Nqvn:function(t,e){},QPTH:function(t,e){},VUc8:function(t,e){},aWad:function(t,e){},gzll:function(t,e){},tKsD:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.270fc79bb310fa192923.js.map