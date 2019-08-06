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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
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
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\n  border: 0px solid #fff !important;\n}\n\n.btn-social {\n  position: relative;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  border-color: rgba(0, 0, 0, 0.2);\n}\n\n.btn-facebook {\n  background: #3b5998;\n}\n\n.btn-google {\n  background: #dd4b39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxKb3NzZVxcRG9jdW1lbnRzXFxDdWFydG8gc2VtZXN0cmVcXFByb2plY3RvIExlbmd1YSBhbmNlc3RyYWxcXEFwcE5hdGl2aWRhZExlbmd1YXNFY3VhZG9yL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBRENFO0VBQ0UsbUJBQUE7QUNFSjs7QURBRTtFQUNFLG1CQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRuLXNvY2lhbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29re1xyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICB9XHJcbiAgLmJ0bi1nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gIH0iLCIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xuICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc29jaWFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xufVxuXG4uYnRuLWdvb2dsZSB7XG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(alert, router, authService, storage, menu, route, fb) {
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
    RegisterPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
    };
    RegisterPage.prototype.regresar = function () {
        this.route.navigate(['/login']);
    };
    RegisterPage.prototype.add = function () {
        var _this = this;
        this.authService.registerUser(this.myForm.value.email, this.myForm.value.password)
            .then(function (res) {
            _this.alert.create({
                header: 'Registrado exitosamente',
                message: 'Bienvenido a la comunidad :)',
                buttons: ['Aceptar']
            }).then(function (alert) {
                alert.present();
            });
            _this.router.navigate(['/culturas']);
            _this.menu.enable(true);
        }).catch(function (err) {
            _this.alert.create({
                header: 'Ha fallado el registro',
                message: 'Revise los campos campos',
                buttons: ['Aceptar']
            }).then(function (alert) {
                alert.present();
            });
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
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
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map