(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recursos-recursos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recursos/recursos.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recursos/recursos.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Ayllu Llakta\r\n      <img class=\"alineado\" height=\"50\" src=\"../../assets/img/Logolenguas.png\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <ion-card>\r\n    <ion-item (click)=\"testClick()\">\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          Avatar Start, Button Item\r\n        </ion-label>\r\n      </ion-item>\r\n      \r\n </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/recursos/recursos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/recursos/recursos.module.ts ***!
  \*********************************************/
/*! exports provided: RecursosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursosPageModule", function() { return RecursosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recursos.page */ "./src/app/recursos/recursos.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.page */ "./src/app/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _recursos_page__WEBPACK_IMPORTED_MODULE_6__["RecursosPage"]
    }
];
var RecursosPageModule = /** @class */ (function () {
    function RecursosPageModule() {
    }
    RecursosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recursos_page__WEBPACK_IMPORTED_MODULE_6__["RecursosPage"]]
        })
    ], RecursosPageModule);
    return RecursosPageModule;
}());



/***/ }),

/***/ "./src/app/recursos/recursos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/recursos/recursos.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3Vyc29zL3JlY3Vyc29zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recursos/recursos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/recursos/recursos.page.ts ***!
  \*******************************************/
/*! exports provided: RecursosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursosPage", function() { return RecursosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.page */ "./src/app/login/login.page.ts");



var RecursosPage = /** @class */ (function () {
    function RecursosPage(login) {
        this.login = login;
    }
    RecursosPage.prototype.ngOnInit = function () {
        console.log(this.login);
    };
    RecursosPage.ctorParameters = function () { return [
        { type: _login_login_page__WEBPACK_IMPORTED_MODULE_2__["LoginPage"] }
    ]; };
    RecursosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recursos',
            template: __webpack_require__(/*! raw-loader!./recursos.page.html */ "./node_modules/raw-loader/index.js!./src/app/recursos/recursos.page.html"),
            styles: [__webpack_require__(/*! ./recursos.page.scss */ "./src/app/recursos/recursos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_page__WEBPACK_IMPORTED_MODULE_2__["LoginPage"]])
    ], RecursosPage);
    return RecursosPage;
}());



/***/ })

}]);
//# sourceMappingURL=recursos-recursos-module-es5.js.map