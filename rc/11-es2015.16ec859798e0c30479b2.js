(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{DH2E:function(l,n,u){"use strict";u.r(n);var t=u("kZht");class e{}var a=u("C9Ky"),r=u("HFsR"),o=u("P4/0"),s=u("iwai"),i=u("NxuZ"),p=u("ENSU"),b=u("1VvW");class c{constructor(){}}var d=t.pb({encapsulation:2,styles:[],data:{}});function g(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,10,"wiz-wizard",[["title","SEB ng-wizard"]],null,null,null,r.b,r.a)),t.qb(1,49152,null,0,o.h,[t.j,o.f,o.g],{title:[0,"title"],hideCloseButton:[1,"hideCloseButton"]},null),(l()(),t.rb(2,0,null,0,5,"div",[["class","wizard-actions"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,4,"a",[["class","btn btn-secondary d-flex justify-content-between"],["href","https://github.com/sebgroup/ng-wizard"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" View on Github "])),(l()(),t.rb(5,0,null,null,2,"fa-icon",[["class","ml-2 ng-fa-icon"]],[[1,"title",0],[8,"innerHTML",1]],null,null,s.d,s.c)),t.qb(6,573440,null,0,i.c,[p.b,i.a,i.d,[2,i.i]],{icon:[0,"icon"]},null),t.Eb(7,2),(l()(),t.rb(8,0,null,1,2,"div",[["class","wizard-main col-12 col-lg order-1 order-md-0 mr-lg-3"]],null,null,null,null,null)),(l()(),t.rb(9,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.qb(10,212992,null,0,b.q,[b.b,t.M,t.j,[8,null],t.h],null,null)],(function(l,n){l(n,1,0,"SEB ng-wizard",!0);var u=l(n,7,0,"fab","github");l(n,6,0,u),l(n,10,0)}),(function(l,n){l(n,5,0,t.Db(n,6).title,t.Db(n,6).renderedIconHTML)}))}function m(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-take-over",[],null,null,null,g,d)),t.qb(1,49152,null,0,c,[],null,null)],null,null)}var h=t.nb("app-take-over",c,m,{},{},[]);class f{constructor(){}ngOnInit(){}}var v=t.pb({encapsulation:2,styles:[],data:{}});function L(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" This is a wizard component built for angular. It uses routes and route guards to control steps and it relies on Bootstrap for markup and styling as well as Font Awesome for icons.\n"])),(l()(),t.rb(2,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Requirements"])),(l()(),t.rb(4,0,null,null,24,"ul",[["class","list-group list-group-check"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,3,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Angular"])),(l()(),t.Lb(-1,null,[" - This component is built for Angular and tested with version 8+. "])),(l()(),t.rb(9,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["A route for each step"])),(l()(),t.Lb(-1,null,[" - Each step in the wizard is a route with an optional route guard using "])),(l()(),t.rb(13,0,null,null,1,"a",[["class","external"],["href","https://angular.io/api/router/CanActivate"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["CanActivate"])),(l()(),t.Lb(-1,null,[" (for protected steps). Step controls are provided using route data objects. "])),(l()(),t.rb(16,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Bootstrap"])),(l()(),t.Lb(-1,null,[" - This component relies on styles provided by SEB:s Bootstrap theme: "])),(l()(),t.rb(20,0,null,null,1,"a",[["class","external"],["href","https://github.com/sebgroup/bootstrap"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["@sebgroup/bootstrap"])),(l()(),t.Lb(-1,null,[". "])),(l()(),t.rb(23,0,null,null,5,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.rb(24,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Font Awesome"])),(l()(),t.Lb(-1,null,[" - This component uses Font Awesome regular icons (dependency might be removed in a future release). "])),(l()(),t.rb(27,0,null,null,1,"div",[["class","alert alert-warning alert-icon mt-3 mx-n5 mx-sm-0"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Note that you need to have a pro license for Font Awesome or use SEB:s internal npm registry to install this package. "]))],null,null)}function w(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-introduction",[],null,null,null,L,v)),t.qb(1,114688,null,0,f,[],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.nb("app-introduction",f,w,{},{},[]),x=u("i9Na"),S=u("uYEV");class z{constructor(){this.importModule="// app.module.ts\nimport { SebNgWizardModule, WizardStepsService } from '@sebgroup/ng-wizard'; // <-- Add this line\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // <-- Add this line to get animations\nimport { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // <-- Add this line to use correct icons\n\n@NgModule({\n  imports: [\n    AppRoutingModule, // holds wizard steps as routes\n    BrowserAnimationsModule, // <-- Add this line to get animations\n    SebNgWizardModule.forRoot(),  // <-- Add wizard (pass optional config)\n    FontAwesomeModule //  <-- Add this line to get correct icons\n  ],\n  providers: [WizardStepsService] // <-- Add wizard steps service\n})\nexport class AppModule {\n  constructor(library: FaIconLibrary) {\n    // add icons that should be available in the app/module\n    library.addIcons(\n      faCalendarAlt\n    );\n  }\n}",this.addComponent='\x3c!-- app.component.html --\x3e\n<wiz-wizard title="SEB ng-wizard">\n  <div class="wizard-main col-12 col-lg">\n    <router-outlet></router-outlet>\n  </div>\n</wiz-wizard>',this.addRoutes="// app-routing.module.ts\nimport { NgModule } from '@angular/core';\nimport { RouterModule } from '@angular/router';\nimport { WizardSteps } from '@sebgroup/ng-wizard';\nimport { StepOneComponent } from './components/step-one/step-one.component';\nimport { StepTwoComponent } from './components/step-two/step-two.component';\n\nconst routes: WizardSteps = [\n  {\n    path: '',\n    redirectTo: 'step-one'\n  }, {\n    path: 'step-one',\n    component: StepOneComponent,\n    data: {\n      heading: 'Step one',\n      controls: [{\n        type: 'next'\n      }]\n    }\n  }, {\n    path: 'step-two',\n    component: StepTwoComponent,\n    data: {\n      heading: 'Step two',\n      controls: [{\n        type: 'prev'\n      }, {\n        name: 'Save',\n        path: 'step-completed',\n        type: 'save'\n      }]\n    },\n  }, {\n    path: '**',\n    redirectTo: 'step-one',\n    pathMatch: 'full'\n  }\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule],\n})\nexport class AppRoutingModule {}\n"}ngOnInit(){}}var k=t.pb({encapsulation:2,styles:[],data:{}});function N(l){return t.Nb(0,[t.Fb(0,x.a,[]),(l()(),t.rb(1,0,null,null,36,"ol",[["class","list-group list-group-ordered"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,5,"li",[["class","list-group-item pr-0"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Install"])),(l()(),t.Lb(-1,null,[" - Install using npm with: "])),(l()(),t.rb(6,0,null,null,1,"code",[["class","text-nowrap"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["npm install @sebgroup/ng-wizard --save"])),(l()(),t.rb(8,0,null,null,9,"li",[["class","list-group-item pr-0"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Import module(s)"])),(l()(),t.Lb(-1,null,[" - Import "])),(l()(),t.rb(12,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SebNgWizardModule"])),(l()(),t.Lb(-1,null,[" and other required modules like this: "])),(l()(),t.rb(15,0,null,null,2,"div",[["class","ml-n5 mr-n3 mx-sm-0"],["markdown",""]],null,null,null,S.b,S.a)),t.qb(16,4767744,null,0,x.b,[t.k,x.d],{data:[0,"data"]},null),t.Hb(17,2),(l()(),t.rb(18,0,null,null,9,"li",[["class","list-group-item pr-0"]],null,null,null,null,null)),(l()(),t.rb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Add/use component"])),(l()(),t.Lb(-1,null,[" - Use "])),(l()(),t.rb(22,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["SebNgWizardComponent"])),(l()(),t.Lb(-1,null,[" in template like this: "])),(l()(),t.rb(25,0,null,null,2,"div",[["class","ml-n5 mr-n3 mx-sm-0"],["markdown",""]],null,null,null,S.b,S.a)),t.qb(26,4767744,null,0,x.b,[t.k,x.d],{data:[0,"data"]},null),t.Hb(27,2),(l()(),t.rb(28,0,null,null,9,"li",[["class","list-group-item pr-0"]],null,null,null,null,null)),(l()(),t.rb(29,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Add steps (routes)"])),(l()(),t.Lb(-1,null,[" - Add steps to "])),(l()(),t.rb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["AppRoutingModule"])),(l()(),t.Lb(-1,null,[" like this: "])),(l()(),t.rb(35,0,null,null,2,"div",[["class","ml-n5 mr-n3 mx-sm-0"],["markdown",""]],null,null,null,S.b,S.a)),t.qb(36,4767744,null,0,x.b,[t.k,x.d],{data:[0,"data"]},null),t.Hb(37,2)],(function(l,n){var u=n.component,e=t.Mb(n,16,0,l(n,17,0,t.Db(n,0),u.importModule,"typescript"));l(n,16,0,e);var a=t.Mb(n,26,0,l(n,27,0,t.Db(n,0),u.addComponent,"markup"));l(n,26,0,a);var r=t.Mb(n,36,0,l(n,37,0,t.Db(n,0),u.addRoutes,"typescript"));l(n,36,0,r)}),null)}function B(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-getting-started",[],null,null,null,N,k)),t.qb(1,114688,null,0,z,[],null,null)],(function(l,n){l(n,1,0)}),null)}var A=t.nb("app-getting-started",z,B,{},{},[]);class I{constructor(){}ngOnInit(){}}var q=t.pb({encapsulation:2,styles:[],data:{}});function M(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Inputs"])),(l()(),t.rb(3,0,null,null,42,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["@Input"])),(l()(),t.rb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Description"])),(l()(),t.rb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Default"])),(l()(),t.rb(12,0,null,null,33,"tbody",[],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["title"])),(l()(),t.rb(17,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["The title/heading in the top navbar, e.g. this example uses 'SEB ng-wizard' as title."])),(l()(),t.rb(19,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["n/a"])),(l()(),t.rb(21,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(23,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["hideCloseButton"])),(l()(),t.rb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Hide close button in modal header."])),(l()(),t.rb(27,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["false"])),(l()(),t.rb(30,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),t.rb(31,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["lang"])),(l()(),t.rb(34,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,['Language used in the wizard, currently supported values are "en" and "sv".'])),(l()(),t.rb(36,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["'en'"])),(l()(),t.rb(38,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),t.rb(39,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(40,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["routerOutletName"])),(l()(),t.rb(42,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Custom routerOutlet to be used with the wizard."])),(l()(),t.rb(44,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["n/a"])),(l()(),t.rb(46,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Config"])),(l()(),t.rb(48,0,null,null,17,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.rb(49,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.rb(50,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(51,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Property"])),(l()(),t.rb(53,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Description"])),(l()(),t.rb(55,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Default"])),(l()(),t.rb(57,0,null,null,8,"tbody",[],null,null,null,null,null)),(l()(),t.rb(58,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),t.rb(59,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.rb(60,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["markPassedAsSuccess"])),(l()(),t.rb(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Mark passed steps as completed/finished."])),(l()(),t.rb(64,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["true"]))],null,null)}function C(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-options",[],null,null,null,M,q)),t.qb(1,114688,null,0,I,[],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.nb("app-options",I,C,{},{},[]);class H{constructor(){this.examples=[{title:"Basic example",description:"A basic example with two routes and custom action in modal footer.",path:"/basic"},{title:"Using route guards",description:"A wizard using reactive forms, form validation and route guards to prevent user from navigating to steps unless previous step has been completed.",path:"/form-and-route-guard"},{title:"Secondary content (right content)",description:"Coming soon...",path:""},{title:"With language and translations",description:"Use the wizard with different languages and pass translations. This example uses transloco but you could use any library or custom setup as long as it can return translations as key value pairs.",path:"/language"}]}ngOnInit(){}}var T=t.pb({encapsulation:2,styles:[],data:{}});function E(l){return t.Nb(0,[(l()(),t.rb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.qb(1,212992,null,0,b.q,[b.b,t.M,t.j,[8,null],t.h],null,null)],(function(l,n){l(n,1,0)}),null)}function F(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-examples",[],null,null,null,E,T)),t.qb(1,114688,null,0,H,[],null,null)],(function(l,n){l(n,1,0)}),null)}var D=t.nb("app-examples",H,F,{},{},[]);class j{constructor(){}ngOnInit(){}}var R=t.pb({encapsulation:2,styles:[],data:{}});function W(l){return t.Nb(0,[(l()(),t.Lb(-1,null,["Coming soon\n"]))],null,null)}function P(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-examples",[],null,null,null,W,R)),t.qb(1,114688,null,0,j,[],null,null)],(function(l,n){l(n,1,0)}),null)}var U=t.nb("app-examples",j,P,{},{},[]),G=u("An66");class ${constructor(l){this.wizardStepService=l,this.states=["info","success","warning","danger",null]}setState(l){this.wizardStepService.setState(l)}setIntroState(l){this.wizardStepService.setState(l,"/wizard/introduction")}ngOnInit(){}}var _=t.pb({encapsulation:2,styles:[],data:{}});function J(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","col-12 col-sm-auto mb-3"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"button",[["class","btn btn-outline-primary w-100"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setState(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Lb(2,null,[" "," state "]))],null,(function(l,n){l(n,2,0,n.context.$implicit?"Set "+n.context.$implicit:"Clear")}))}function K(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","col-12 col-sm-auto mb-3"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"button",[["class","btn btn-outline-primary w-100"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.setIntroState(l.context.$implicit)&&t),t}),null,null)),(l()(),t.Lb(2,null,[" "," state "]))],null,(function(l,n){l(n,2,0,n.context.$implicit?"Set "+n.context.$implicit:"Clear")}))}function V(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"p",[["class","lead"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Use the status property of a step to highlight and clarify wizard progress - completed steps, errors etc.\n"])),(l()(),t.rb(2,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" By default steps will be marked as finished or complete when you've passed them. If you want to handle step states manually it's possible to do so using the "])),(l()(),t.rb(4,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["markPassedAsSuccess"])),(l()(),t.Lb(-1,null,[" config option. It's also possible to set other states using the "])),(l()(),t.rb(7,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["setState"])),(l()(),t.Lb(-1,null,[" method.\n"])),(l()(),t.rb(10,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Set state for active step"])),(l()(),t.rb(12,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Set state for active step using the "])),(l()(),t.rb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["setState"])),(l()(),t.Lb(-1,null,[" method."])),(l()(),t.rb(17,0,null,null,2,"div",[["class","form-row mb-3"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,J)),t.qb(19,278528,null,0,G.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Set state for step based on route path"])),(l()(),t.rb(22,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Set state of any step by passing the route path to the "])),(l()(),t.rb(24,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["setState"])),(l()(),t.Lb(-1,null,[" method."])),(l()(),t.rb(27,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,6,"div",[["class","col-12 col-sm-auto"]],null,null,null,null,null)),(l()(),t.rb(29,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.rb(30,0,null,null,1,"label",[["for","pathInput"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Route path"])),(l()(),t.rb(32,0,null,null,0,"input",[["aria-describedby","pathHelp"],["class","form-control"],["disabled",""],["id","pathInput"],["placeholder","Enter route path"],["type","text"]],null,null,null,null,null)),(l()(),t.rb(33,0,null,null,1,"small",[["class","form-text text-muted"],["id","pathHelp"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Enter valid route path for step you wish to update state for."])),(l()(),t.rb(35,0,null,null,2,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,K)),t.qb(37,278528,null,0,G.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,19,0,u.states),l(n,37,0,u.states)}),null)}function Z(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-step-states",[],null,null,null,V,_)),t.qb(1,114688,null,0,$,[o.f],null,null)],(function(l,n){l(n,1,0)}),null)}var Y=t.nb("app-step-states",$,Z,{},{},[]);class Q{constructor(){}ngOnInit(){}}var X=t.pb({encapsulation:2,styles:[],data:{}});function ll(l){return t.Nb(0,[(l()(),t.Lb(-1,null,["Coming soon\n"]))],null,null)}function nl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-secondary-content",[],null,null,null,ll,X)),t.qb(1,114688,null,0,Q,[],null,null)],(function(l,n){l(n,1,0)}),null)}var ul=t.nb("app-secondary-content",Q,nl,{},{},[]);class tl{constructor(){}ngOnInit(){}}var el=t.pb({encapsulation:2,styles:[],data:{}});function al(l){return t.Nb(0,[(l()(),t.Lb(-1,null,["Coming soon\n"]))],null,null)}function rl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-prevent-navigation",[],null,null,null,al,el)),t.qb(1,114688,null,0,tl,[],null,null)],(function(l,n){l(n,1,0)}),null)}var ol=t.nb("app-prevent-navigation",tl,rl,{},{},[]);class sl{constructor(){}ngOnInit(){}}var il=t.pb({encapsulation:2,styles:[],data:{}});function pl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"p",[["class","mb-1"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Use the wizard with different languages and pass translations. This example uses transloco but you could use any library or custom setup as long as it returns translations as key value pairs.\n"])),(l()(),t.rb(2,0,null,null,2,"a",[["class","external"],["routerLink","/language"],["target","_blank"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Db(l,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.qb(3,671744,null,0,b.o,[b.l,b.a,G.i],{target:[0,"target"],routerLink:[1,"routerLink"]},null),(l()(),t.Lb(-1,null,["Show example"]))],(function(l,n){l(n,3,0,"_blank","/language")}),(function(l,n){l(n,2,0,t.Db(n,3).target,t.Db(n,3).href)}))}function bl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-language",[],null,null,null,pl,il)),t.qb(1,114688,null,0,sl,[],null,null)],(function(l,n){l(n,1,0)}),null)}var cl=t.nb("app-language",sl,bl,{},{},[]);class dl{constructor(){}ngOnInit(){}}var gl=t.pb({encapsulation:2,styles:[],data:{}});function ml(l){return t.Nb(0,[(l()(),t.Lb(-1,null,["Coming soon\n"]))],null,null)}function hl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-sub-steps",[],null,null,null,ml,gl)),t.qb(1,114688,null,0,dl,[],null,null)],(function(l,n){l(n,1,0)}),null)}var fl=t.nb("app-sub-steps",dl,hl,{},{},[]);class vl{constructor(){}ngOnInit(){}ngOnDestroy(){}}var Ll=t.pb({encapsulation:2,styles:[],data:{}});function wl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,7,"div",[["class","alert alert-info mx-n3 mx-md-0"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,1,"h4",[["class","alert-heading"]],null,null,null,null,null)),(l()(),t.Lb(2,null,["",""])),(l()(),t.rb(3,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" Please create an "])),(l()(),t.rb(5,0,null,null,1,"a",[["class","external"],["href","https://github.com/sebgroup/ng-wizard/issues"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["issue in Github"])),(l()(),t.Lb(-1,null,[" if you have questions or if you miss something. "]))],null,(function(l,n){l(n,2,0,n.component.data.heading)}))}function yl(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-more-examples",[],null,null,null,wl,Ll)),t.qb(1,245760,null,0,vl,[],null,null)],(function(l,n){l(n,1,0)}),null)}var xl=t.nb("app-more-examples",vl,yl,{data:"data"},{},[]),Sl=u("3kIJ"),zl=u("6uGs");const kl={heading:"Introduction",controls:[{name:"Get started",type:"next"}]},Nl={heading:"Get started",pageHeading:"Install, setup and use the wizard",controls:[{name:"Introduction",type:"prev"},{name:"Options and configuration",type:"next"}]},Bl={heading:"Options and configuration",pageHeading:"Customize the wizard",controls:[{name:"Get started",type:"prev"},{name:"Examples",type:"next"}]},Al={heading:"Examples",pageHeading:"How to use the wizard",controls:[{name:"Options and configuration",path:"options-and-configuration",type:"prev"},{name:"Options and configuration",path:"examples/step-states",type:"next"}],subSteps:["step-states","secondary-content","prevent-navigation","language","sub-steps"],secondaryContent:{component:vl,class:"col-12 col-lg-auto order-last ml-lg-3 mb-3",data:{heading:"Want more examples?"}}},Il={pageHeading:"Set a state for a step",state:"info",heading:"Step states",controls:[{path:"examples",type:"prev"},{path:"examples/secondary-content",type:"next"}]},ql={pageHeading:"Add additional content",heading:"Secondary content",controls:[{path:"examples/step-states",type:"prev"},{path:"examples/prevent-navigation",type:"next"}]},Ml={heading:"Prevent navigation",pageHeading:"Use route guards to prevent navigation",controls:[{path:"examples/secondary-content",type:"prev"},{path:"examples/language",type:"next"}]},Cl={heading:"Language",pageHeading:"Support different languages and translations",controls:[{path:"examples/prevent-navigation",type:"prev"},{path:"examples/sub-steps",type:"next"}]},Ol={heading:"Sub steps",pageHeading:"Use sub steps when you need to drill down",controls:[{path:"examples/language",type:"prev"}]};class Hl{}var Tl=u("PCNd");u.d(n,"WizardTutorialModuleNgFactory",(function(){return El}));var El=t.ob(e,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[a.a,h,y,A,O,D,U,Y,ul,ol,cl,fl,s.b,s.a,xl]],[3,t.j],t.v]),t.Bb(4608,G.n,G.m,[t.s,[2,G.w]]),t.Bb(4608,o.e,o.e,[]),t.Bb(4608,Sl.u,Sl.u,[]),t.Bb(4608,Sl.g,Sl.g,[]),t.Bb(4608,x.d,x.d,[t.z,[2,zl.c],p.b,x.e]),t.Bb(4608,o.g,o.a,[]),t.Bb(4608,o.f,o.f,[b.l]),t.Bb(1073742336,G.c,G.c,[]),t.Bb(1073742336,b.p,b.p,[[2,b.u],[2,b.l]]),t.Bb(1073742336,Hl,Hl,[]),t.Bb(1073742336,i.j,i.j,[]),t.Bb(1073742336,o.c,o.c,[i.d]),t.Bb(1073742336,Sl.t,Sl.t,[]),t.Bb(1073742336,Sl.j,Sl.j,[]),t.Bb(1073742336,Sl.q,Sl.q,[]),t.Bb(1073742336,x.c,x.c,[]),t.Bb(1073742336,Tl.a,Tl.a,[i.d]),t.Bb(1073742336,e,e,[]),t.Bb(1024,b.j,(function(){return[[{path:"",component:c,children:[{path:"",redirectTo:"introduction"},{path:"introduction",component:f,data:kl},{path:"getting-started",component:z,data:Nl},{path:"options-and-configuration",component:I,data:Bl},{path:"examples",component:H,data:Al,children:[{path:"",component:j},{path:"step-states",component:$,data:Il},{path:"secondary-content",component:Q,data:ql},{path:"prevent-navigation",component:tl,data:Ml},{path:"language",component:sl,data:Cl},{path:"sub-steps",component:dl,data:Ol}]}]}],[]]}),[]),t.Bb(256,x.e,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[]),t.Bb(256,o.b,{markPassedAsSuccess:!0,translations:{en:{next:"Next",prev:"Back",save:"Save",close:"Close"},sv:{next:"N\xe4sta",prev:"Tillbaka",save:"Spara",close:"St\xe4ng"}}},[])])}))}}]);