function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(t,n,e){"use strict";e.r(n),e.d(n,"UsersModule",(function(){return x}));var i=e("ofXK"),r=e("mrSG"),s=e("3Pt+"),o=e("fXoL"),a=e("lGQG"),c=e("tyNb");function b(t,n){1&t&&(o.Pb(0,"div"),o.Pb(1,"h1"),o.lc(2,"Create Account"),o.Ob(),o.Ob())}function l(t,n){1&t&&(o.Pb(0,"div"),o.Pb(1,"h1"),o.lc(2,"Sign In"),o.Ob(),o.Ob())}function u(t,n){if(1&t){var e=o.Qb();o.Pb(0,"div"),o.Pb(1,"button",13),o.Xb("click",(function(){return o.hc(e),o.Zb().changeType("login")})),o.lc(2," < Back"),o.Ob(),o.Pb(3,"h1"),o.lc(4,"Reset Password"),o.Ob(),o.Ob()}}function f(t,n){1&t&&(o.Pb(0,"span",8),o.lc(1," You must enter a valid email address "),o.Ob())}function d(t,n){1&t&&(o.Pb(0,"span",8),o.lc(1," Password must be at least 6 characters long "),o.Ob())}function g(t,n){if(1&t&&(o.Pb(0,"div",3),o.Pb(1,"label"),o.lc(2,"Password"),o.Ob(),o.Lb(3,"input",14),o.kc(4,d,2,0,"span",5),o.Ob()),2&t){var e=o.Zb();o.Ab(4),o.dc("ngIf",e.password.invalid&&e.password.dirty)}}function p(t,n){if(1&t){var e=o.Qb();o.Pb(0,"div",15),o.Pb(1,"span",16),o.Xb("click",(function(){return o.hc(e),o.Zb().changeType("reset")})),o.lc(2,"Forget Password"),o.Ob(),o.Ob()}}function m(t,n){1&t&&(o.Pb(0,"span",8),o.lc(1," Password does not match "),o.Ob())}function h(t,n){if(1&t&&(o.Pb(0,"div",3),o.Pb(1,"label"),o.lc(2,"Confirm Password"),o.Ob(),o.Lb(3,"input",17),o.kc(4,m,2,0,"span",5),o.Ob()),2&t){var e=o.Zb();o.Ab(4),o.dc("ngIf",e.passwordConfirm.dirty&&!e.passwordDoesMatch)}}function v(t,n){if(1&t&&(o.Pb(0,"button",18),o.lc(1," Send Reset Email "),o.Ob()),2&t){var e=o.Zb();o.dc("disabled",e.loading)}}function w(t,n){if(1&t&&(o.Pb(0,"button",19),o.lc(1," Login "),o.Ob()),2&t){var e=o.Zb();o.dc("disabled",e.form.invalid||e.loading)}}function y(t,n){if(1&t&&(o.Pb(0,"button",20),o.lc(1," Create Account "),o.Ob()),2&t){var e=o.Zb();o.dc("disabled",e.form.invalid||!e.passwordDoesMatch||e.loading)}}function P(t,n){if(1&t){var e=o.Qb();o.Pb(0,"div",21),o.lc(1," Already have account? "),o.Pb(2,"span",16),o.Xb("click",(function(){return o.hc(e),o.Zb().changeType("login")})),o.lc(3,"Login"),o.Ob(),o.Ob()}}function k(t,n){if(1&t){var e=o.Qb();o.Pb(0,"div",21),o.lc(1," Don't have account? "),o.Pb(2,"span",16),o.Xb("click",(function(){return o.hc(e),o.Zb().changeType("signup")})),o.lc(3,"Signup"),o.Ob(),o.Ob()}}var O,C,I=[{path:"",component:(O=function(){function t(n,e,i){_classCallCheck(this,t),this.authService=n,this.fb=e,this.router=i,this.type="signup",this.loading=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=this.fb.group({email:["",[s.j.required,s.j.email]],password:["",[s.j.minLength(6),s.j.required]],passwordConfirm:["",[]]})}},{key:"changeType",value:function(t){this.type=t,this.serverMessage="",this.form.reset()}},{key:"onSubmit",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.loading=!0,n=this.email.value,e=this.password.value,t.prev=2,t.t0=this.isLogin,!t.t0){t.next=7;break}return t.next=7,this.authService.signIn(n,e).then((function(){i.router.navigate([""])}));case 7:if(t.t1=this.isSignup,!t.t1){t.next=11;break}return t.next=11,this.authService.signUp(n,e).then((function(){i.router.navigate([""])}));case 11:if(t.t2=this.isPasswordReset,!t.t2){t.next=16;break}return t.next=15,this.authService.passwordReset(n);case 15:this.serverMessage="Check Your Email";case 16:t.next=21;break;case 18:t.prev=18,t.t3=t.catch(2),this.serverMessage=t.t3;case 21:this.loading=!1;case 22:case"end":return t.stop()}}),t,this,[[2,18]])})))}},{key:"isLogin",get:function(){return"login"===this.type}},{key:"isSignup",get:function(){return"signup"===this.type}},{key:"isPasswordReset",get:function(){return"reset"===this.type}},{key:"email",get:function(){return this.form.get("email")}},{key:"password",get:function(){return this.form.get("password")}},{key:"passwordConfirm",get:function(){return this.form.get("passwordConfirm")}},{key:"passwordDoesMatch",get:function(){return"signup"!==this.type||this.password.value===this.passwordConfirm.value}}]),t}(),O.\u0275fac=function(t){return new(t||O)(o.Kb(a.a),o.Kb(s.b),o.Kb(c.c))},O.\u0275cmp=o.Eb({type:O,selectors:[["app-login"]],decls:20,vars:14,consts:[[1,"login-form"],[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-control"],["formControlName","email","type","email","autocomplete","off"],["class","err",4,"ngIf"],["class","form-control",4,"ngIf"],["style","text-align: right; font-weight: 400; font-size: .8em; margin-bottom: 5px;",4,"ngIf"],[1,"err"],["class","btn btn-full-width","mat-stroked-button","","type","submit",3,"disabled",4,"ngIf"],["class","btn btn-full-width","type","submit","mat-flat-button","","color","primary",3,"disabled",4,"ngIf"],["class","btn btn-full-width","mat-flat-button","","color","primary","type","submit",3,"disabled",4,"ngIf"],["style","text-align: center; margin: 1em 0em; color: rgba(255,255,255, 0.7);",4,"ngIf"],[1,"btn","btn-small","dark",3,"click"],["formControlName","password","type","password","autocomplete","off"],[2,"text-align","right","font-weight","400","font-size",".8em","margin-bottom","5px"],[2,"color","#a0a0a0","cursor","pointer",3,"click"],["formControlName","passwordConfirm","type","password","autocomplete","off"],["mat-stroked-button","","type","submit",1,"btn","btn-full-width",3,"disabled"],["type","submit","mat-flat-button","","color","primary",1,"btn","btn-full-width",3,"disabled"],["mat-flat-button","","color","primary","type","submit",1,"btn","btn-full-width",3,"disabled"],[2,"text-align","center","margin","1em 0em","color","rgba(255,255,255, 0.7)"]],template:function(t,n){1&t&&(o.Pb(0,"div",0),o.kc(1,b,3,0,"div",1),o.kc(2,l,3,0,"div",1),o.kc(3,u,5,0,"div",1),o.Pb(4,"form",2),o.Xb("ngSubmit",(function(){return n.onSubmit()})),o.Pb(5,"div",3),o.Pb(6,"label"),o.lc(7,"Email Address"),o.Ob(),o.Lb(8,"input",4),o.kc(9,f,2,0,"span",5),o.Ob(),o.kc(10,g,5,1,"div",6),o.kc(11,p,3,0,"div",7),o.kc(12,h,5,1,"div",6),o.Pb(13,"span",8),o.lc(14),o.Ob(),o.kc(15,v,2,1,"button",9),o.kc(16,w,2,1,"button",10),o.kc(17,y,2,1,"button",11),o.kc(18,P,4,0,"div",12),o.kc(19,k,4,0,"div",12),o.Ob(),o.Ob()),2&t&&(o.Ab(1),o.dc("ngIf",n.isSignup),o.Ab(1),o.dc("ngIf",n.isLogin),o.Ab(1),o.dc("ngIf",n.isPasswordReset),o.Ab(1),o.dc("formGroup",n.form),o.Ab(5),o.dc("ngIf",n.email.invalid&&n.email.dirty),o.Ab(1),o.dc("ngIf",!n.isPasswordReset),o.Ab(1),o.dc("ngIf",n.isLogin),o.Ab(1),o.dc("ngIf",n.isSignup),o.Ab(2),o.mc(n.serverMessage),o.Ab(1),o.dc("ngIf",n.isPasswordReset),o.Ab(1),o.dc("ngIf",!n.isPasswordReset&&!n.isSignup),o.Ab(1),o.dc("ngIf",!n.isPasswordReset&&!n.isLogin),o.Ab(1),o.dc("ngIf",n.isSignup),o.Ab(1),o.dc("ngIf",n.isLogin))},directives:[i.k,s.k,s.g,s.d,s.a,s.f,s.c],styles:[".login-form[_ngcontent-%COMP%]{padding:1em;max-width:600px;margin:0 auto}.form-control[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.err[_ngcontent-%COMP%]{color:#c80000;font-size:smaller;margin-top:-5px;margin-bottom:10px}"]}),O),pathMatch:"full"}],x=((C=function t(){_classCallCheck(this,t)}).\u0275mod=o.Ib({type:C}),C.\u0275inj=o.Hb({factory:function(t){return new(t||C)},imports:[[i.c,s.i,c.e.forChild(I)]]}),C)}}]);