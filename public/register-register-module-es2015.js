(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title text-center>Registrate!</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button fill=\"outline\" size=\"small\" (click)=\"regresar()\">\r\n    <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n    Regresar\r\n  </ion-button>\r\n  <img src=\"../../assets/img/Logolenguas.png\">\r\n  <form [formGroup]=\"myForm\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Correo Electrónico</ion-label>\r\n      <ion-input type=\"text\" maxlength=\"100\" [(ngModel)]=\"email\" required formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"myForm.get('email').errors && myForm.get('email').dirty\">\r\n      <span color=\"danger\" ion-text>Por favor ingrese un correo válido</span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input [(ngModel)]=\"password\" type=\"password\" id=\"password\" formControlName=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"myForm.get('password').errors && myForm.get('password').dirty\">\r\n      <p color=\"danger\" ion-text *ngIf=\"myForm.get('password').hasError('required')\">Field is required</p>\r\n      <p color=\"danger\" ion-text *ngIf=\"myForm.get('password').hasError('pattern')\">It is not a strong password</p>\r\n    </ion-item>\r\n  </form>\r\n\r\n  <br>\r\n  <ion-button (click)=\"add()\" expand=\"block\">Registrarse</ion-button>\r\n  <ion-button (click)=\"onLoginGoogle()\" expand=\"block\">Entrar con Google</ion-button>\r\n  <ion-button (click)=\"onLoginFacebook()\" expand=\"block\">Entrar con Facebook</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\n  border: 0px solid #fff !important; }\n\n.btn-social {\n  position: relative;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  border-color: rgba(0, 0, 0, 0.2); }\n\n.btn-facebook {\n  background: #3b5998; }\n\n.btn-google {\n  background: #dd4b39; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxBbHlcXERlc2t0b3BcXFByb3llY3RvIEludGVncmFkb3JcXEFwcE5hdGl2aWRhZExlbmd1YXNFY3VhZG9yL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0NBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLXNvY2lhbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICB9XHJcbiAgLmJ0bi1nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RegisterPage = class RegisterPage {
    constructor(alert, router, authService, storage, menu, route, fb) {
        this.alert = alert;
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.menu = menu;
        this.route = route;
        this.fb = fb;
        this.myForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[a-z0-9_-]{6,18}$/)]],
        });
    }
    ngOnInit() {
        this.menu.enable(false);
    }
    regresar() {
        this.route.navigate(['/login']);
    }
    add() {
        this.authService.registerUser(this.myForm.value.email, this.myForm.value.password)
            .then(res => {
            this.alert.create({
                header: 'Registrado exitosamente',
                message: 'Bienvenido a la comunidad :)',
                buttons: ['Aceptar']
            }).then(alert => {
                alert.present();
            });
            this.router.navigate(['/culturas']);
            this.menu.enable(true);
        }).catch(err => {
            this.alert.create({
                header: 'Ha fallado el registro',
                message: 'Revise los campos campos',
                buttons: ['Aceptar']
            }).then(alert => {
                alert.present();
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map