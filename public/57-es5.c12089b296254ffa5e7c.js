(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"0+Bq":function(e,t,i){"use strict";i.r(t),i.d(t,"ion_modal",function(){return m});var o=i("mrSG"),r=i("24pd"),n=(i("lSdy"),i("bjU6"),i("XIrJ")),a=i("aEGo"),s=i("6WfQ"),d=i("uoaX"),l=function(e,t){var i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".modal-wrapper")),r.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),o.fromTo("opacity",.01,.4),Promise.resolve(i.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(o).add(r))},c=function(e,t){var i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e,n=t.querySelector(".modal-wrapper");r.addElement(n);var a=n.getBoundingClientRect();return r.beforeStyles({opacity:1}).fromTo("translateY","0%",t.ownerDocument.defaultView.innerHeight-a.top+"px"),o.fromTo("opacity",.4,0),Promise.resolve(i.addElement(t).easing("ease-out").duration(250).add(o).add(r))},h=function(e,t){var i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".modal-wrapper")),r.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),o.fromTo("opacity",.01,.32),Promise.resolve(i.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(o).add(r))},p=function(e,t){var i=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e,n=t.querySelector(".modal-wrapper");return r.addElement(n),r.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),o.fromTo("opacity",.32,0),Promise.resolve(i.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(o).add(r))},m=function(){function e(e){Object(r.m)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.didPresent=Object(r.d)(this,"ionModalDidPresent",7),this.willPresent=Object(r.d)(this,"ionModalWillPresent",7),this.willDismiss=Object(r.d)(this,"ionModalWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionModalDidDismiss",7)}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,n.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,i=u[e.type];if(t&&i){var o=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}},e.prototype.present=function(){return o.b(this,void 0,void 0,function(){var e,t,i;return o.e(this,function(o){switch(o.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".modal-wrapper")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{modal:this.el}),i=this,[4,Object(s.a)(this.delegate,e,this.component,["ion-page"],t)];case 1:return i.usersElement=o.sent(),[4,Object(d.a)(this.usersElement)];case 2:return o.sent(),[2,Object(n.e)(this,"modalEnter",l,h)]}})})},e.prototype.dismiss=function(e,t){return o.b(this,void 0,void 0,function(){var i;return o.e(this,function(o){switch(o.label){case 0:return[4,Object(n.f)(this,e,t,"modalLeave",c,p)];case 1:return(i=o.sent())?[4,Object(s.b)(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,i]}})})},e.prototype.onDidDismiss=function(){return Object(n.g)(this.el,"ionModalDidDismiss")},e.prototype.onWillDismiss=function(){return Object(n.g)(this.el,"ionModalWillDismiss")},e.prototype.hostData=function(){var e,t=Object(r.e)(this);return{"no-router":!0,"aria-modal":"true",class:Object.assign((e={},e[t]=!0,e),Object(a.b)(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}},e.prototype.__stencil_render=function(){var e,t=Object(r.e)(this),i=((e={})["modal-wrapper"]=!0,e[t]=!0,e);return[Object(r.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(r.i)("div",{role:"dialog",class:i})]},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(e,"style",{get:function(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}"},enumerable:!0,configurable:!0}),e}(),u={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}]);