(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cultura-descripcion-cultura-descripcion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cultura-descripcion/cultura-descripcion.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cultura-descripcion/cultura-descripcion.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-header translucent>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>{{titulo}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>,\r\n  <ion-content fullscreen>\r\n    <ion-button fill=\"outline\" size=\"small\" (click)=\"regresar()\">\r\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n      Regresar\r\n    </ion-button>\r\n    <ion-card>\r\n      <img src=\"{{imagen}}\"/>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>{{provincia}}</ion-card-subtitle>\r\n        <ion-card-title>{{titulo}}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        {{descripcion}}\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-content>\r\n</ion-app>"

/***/ }),

/***/ "./src/app/cultura-descripcion/cultura-descripcion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cultura-descripcion/cultura-descripcion.module.ts ***!
  \*******************************************************************/
/*! exports provided: CulturaDescripcionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturaDescripcionPageModule", function() { return CulturaDescripcionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cultura_descripcion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cultura-descripcion.page */ "./src/app/cultura-descripcion/cultura-descripcion.page.ts");







var routes = [
    {
        path: '',
        component: _cultura_descripcion_page__WEBPACK_IMPORTED_MODULE_6__["CulturaDescripcionPage"]
    }
];
var CulturaDescripcionPageModule = /** @class */ (function () {
    function CulturaDescripcionPageModule() {
    }
    CulturaDescripcionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cultura_descripcion_page__WEBPACK_IMPORTED_MODULE_6__["CulturaDescripcionPage"]]
        })
    ], CulturaDescripcionPageModule);
    return CulturaDescripcionPageModule;
}());



/***/ }),

/***/ "./src/app/cultura-descripcion/cultura-descripcion.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/cultura-descripcion/cultura-descripcion.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1bHR1cmEtZGVzY3JpcGNpb24vY3VsdHVyYS1kZXNjcmlwY2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cultura-descripcion/cultura-descripcion.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cultura-descripcion/cultura-descripcion.page.ts ***!
  \*****************************************************************/
/*! exports provided: CulturaDescripcionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturaDescripcionPage", function() { return CulturaDescripcionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data-api.service */ "./src/app/services/data-api.service.ts");




var CulturaDescripcionPage = /** @class */ (function () {
    function CulturaDescripcionPage(activedRoute, route, ApiService) {
        this.activedRoute = activedRoute;
        this.route = route;
        this.ApiService = ApiService;
    }
    CulturaDescripcionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.idPublicacion = this.activedRoute.snapshot.params.publicacion;
        this.ApiService.getOneCultura(this.idPublicacion).subscribe(function (Response) {
            _this.titulo = Response.titulo;
            _this.provincia = Response.provincia;
            _this.imagen = Response.imagen;
            _this.descripcion = Response.descripcion;
        });
    };
    CulturaDescripcionPage.prototype.regresar = function () {
        this.route.navigate(['/culturas']);
    };
    CulturaDescripcionPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"] }
    ]; };
    CulturaDescripcionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cultura-descripcion',
            template: __webpack_require__(/*! raw-loader!./cultura-descripcion.page.html */ "./node_modules/raw-loader/index.js!./src/app/cultura-descripcion/cultura-descripcion.page.html"),
            styles: [__webpack_require__(/*! ./cultura-descripcion.page.scss */ "./src/app/cultura-descripcion/cultura-descripcion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"]])
    ], CulturaDescripcionPage);
    return CulturaDescripcionPage;
}());



/***/ })

}]);
//# sourceMappingURL=cultura-descripcion-cultura-descripcion-module-es5.js.map