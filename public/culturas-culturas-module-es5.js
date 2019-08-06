(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["culturas-culturas-module"],{

/***/ "./node_modules/ng2-truncate/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ng2-truncate/dist/index.js ***!
  \*************************************************/
/*! exports provided: TruncateModule, TRUNCATE_PIPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truncate_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncate.module */ "./node_modules/ng2-truncate/dist/truncate.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruncateModule", function() { return _truncate_module__WEBPACK_IMPORTED_MODULE_0__["TruncateModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRUNCATE_PIPES", function() { return _truncate_module__WEBPACK_IMPORTED_MODULE_0__["TRUNCATE_PIPES"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-truncate/dist/truncate-characters.pipe.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-truncate/dist/truncate-characters.pipe.js ***!
  \********************************************************************/
/*! exports provided: TruncateCharactersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateCharactersPipe", function() { return TruncateCharactersPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TruncateCharactersPipe = (function () {
    function TruncateCharactersPipe() {
    }
    TruncateCharactersPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        if (!value) {
            value = '';
        }
        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
        }
        else {
            return value.length > limit ? value.substring(0, limit) + trail : value;
        }
    };
    TruncateCharactersPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'truncate'
                },] },
    ];
    /** @nocollapse */
    TruncateCharactersPipe.ctorParameters = function () { return []; };
    return TruncateCharactersPipe;
}());

//# sourceMappingURL=truncate-characters.pipe.js.map

/***/ }),

/***/ "./node_modules/ng2-truncate/dist/truncate-words.pipe.js":
/*!***************************************************************!*\
  !*** ./node_modules/ng2-truncate/dist/truncate-words.pipe.js ***!
  \***************************************************************/
/*! exports provided: TruncateWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateWordsPipe", function() { return TruncateWordsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TruncateWordsPipe = (function () {
    function TruncateWordsPipe() {
    }
    TruncateWordsPipe.prototype.transform = function (value, limit, trail) {
        if (limit === void 0) { limit = 40; }
        if (trail === void 0) { trail = '…'; }
        var result = value || '';
        if (value) {
            var words = value.split(/\s+/);
            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = trail + words.slice(words.length - limit, words.length).join(' ');
                }
                else {
                    result = words.slice(0, limit).join(' ') + trail;
                }
            }
        }
        return result;
    };
    TruncateWordsPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'words'
                },] },
    ];
    /** @nocollapse */
    TruncateWordsPipe.ctorParameters = function () { return []; };
    return TruncateWordsPipe;
}());

//# sourceMappingURL=truncate-words.pipe.js.map

/***/ }),

/***/ "./node_modules/ng2-truncate/dist/truncate.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-truncate/dist/truncate.module.js ***!
  \***********************************************************/
/*! exports provided: TRUNCATE_PIPES, TruncateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUNCATE_PIPES", function() { return TRUNCATE_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateModule", function() { return TruncateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truncate-characters.pipe */ "./node_modules/ng2-truncate/dist/truncate-characters.pipe.js");
/* harmony import */ var _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./truncate-words.pipe */ "./node_modules/ng2-truncate/dist/truncate-words.pipe.js");



var TRUNCATE_PIPES = [_truncate_characters_pipe__WEBPACK_IMPORTED_MODULE_1__["TruncateCharactersPipe"], _truncate_words_pipe__WEBPACK_IMPORTED_MODULE_2__["TruncateWordsPipe"]];
var TruncateModule = (function () {
    function TruncateModule() {
    }
    TruncateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [TRUNCATE_PIPES],
                    exports: [TRUNCATE_PIPES]
                },] },
    ];
    /** @nocollapse */
    TruncateModule.ctorParameters = function () { return []; };
    return TruncateModule;
}());

//# sourceMappingURL=truncate.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/culturas/culturas.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/culturas/culturas.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n\r\n      Ayllu Llakta\r\n      <img class=\"alineado\" height=\"50\" src=\"../../assets/img/Logolenguas.png\">     \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n        <ion-fab-button color=\"danger\" (click)=\"mostrarModal()\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n  <ion-searchbar (ionInput)=\"filterList($event)\" placeholder=\"Buscar...\" color=\"white\"></ion-searchbar>\r\n  <ion-card *ngFor=\"let cultura of culturas | filter:textoBuscar\">\r\n    <ion-item>\r\n      <ion-icon name=\"logo-freebsd-devil\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{cultura.titulo}}</ion-label>\r\n      <ion-button fill=\"outline\" (click)=\"enviarParametros(cultura.id)\" slot=\"end\">Mas..</ion-button>\r\n    </ion-item>\r\n    <img src=\"{{cultura.imagen}}\" />\r\n\r\n    <ion-card-content>\r\n      {{cultura.descripcion| words : 25}}\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/culturas/culturas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/culturas/culturas.module.ts ***!
  \*********************************************/
/*! exports provided: CulturasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturasPageModule", function() { return CulturasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _culturas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./culturas.page */ "./src/app/culturas/culturas.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ng2_truncate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-truncate */ "./node_modules/ng2-truncate/dist/index.js");









var routes = [
    {
        path: '',
        component: _culturas_page__WEBPACK_IMPORTED_MODULE_6__["CulturasPage"]
    }
];
var CulturasPageModule = /** @class */ (function () {
    function CulturasPageModule() {
    }
    CulturasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng2_truncate__WEBPACK_IMPORTED_MODULE_8__["TruncateModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_culturas_page__WEBPACK_IMPORTED_MODULE_6__["CulturasPage"]]
        })
    ], CulturasPageModule);
    return CulturasPageModule;
}());



/***/ }),

/***/ "./src/app/culturas/culturas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/culturas/culturas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  text-align: center;\n}\n\nimg.alineado {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VsdHVyYXMvQzpcXFVzZXJzXFxKb3NzZVxcRG9jdW1lbnRzXFxDdWFydG8gc2VtZXN0cmVcXFByb2plY3RvIExlbmd1YSBhbmNlc3RyYWxcXEFwcE5hdGl2aWRhZExlbmd1YXNFY3VhZG9yL3NyY1xcYXBwXFxjdWx0dXJhc1xcY3VsdHVyYXMucGFnZS5zY3NzIiwic3JjL2FwcC9jdWx0dXJhcy9jdWx0dXJhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENFO0VBQ0Usc0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2N1bHR1cmFzL2N1bHR1cmFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gIH1cclxuICBpbWcuYWxpbmVhZG97XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH0iLCJpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZy5hbGluZWFkbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/culturas/culturas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/culturas/culturas.page.ts ***!
  \*******************************************/
/*! exports provided: CulturasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturasPage", function() { return CulturasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/data-api.service */ "./src/app/services/data-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");






var CulturasPage = /** @class */ (function () {
    function CulturasPage(ApiService, route, nav, modalCtrl) {
        this.ApiService = ApiService;
        this.route = route;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.textoBuscar = '';
        this.culturas = [];
        this.cultura = '';
        this.prev = [];
    }
    CulturasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiService.getAllCulturas().subscribe(function (culturas) {
            _this.prev = culturas;
            _this.culturas = culturas;
        });
    };
    CulturasPage.prototype.mostrarModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__["ModalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CulturasPage.prototype.filterList = function (name) {
        var searchItems = name.srcElement.value;
        if (!searchItems) {
            this.culturas = this.prev;
        }
        console.log(this.culturas);
        var elementos = [];
        this.culturas.filter(function (actual) {
            if (actual.titulo && searchItems) {
                if (actual.titulo.toLowerCase().indexOf(searchItems.toLowerCase()) > -1) {
                    elementos.push(actual);
                    return true;
                }
                return false;
            }
        });
        this.culturas = elementos;
    };
    CulturasPage.prototype.enviarParametros = function (idPublicacion) {
        this.route.navigate(['/cultura-descripcion', { publicacion: idPublicacion }]);
    };
    CulturasPage.ctorParameters = function () { return [
        { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    CulturasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-culturas',
            template: __webpack_require__(/*! raw-loader!./culturas.page.html */ "./node_modules/raw-loader/index.js!./src/app/culturas/culturas.page.html"),
            styles: [__webpack_require__(/*! ./culturas.page.scss */ "./src/app/culturas/culturas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_api_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], CulturasPage);
    return CulturasPage;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (parroquias, texto) {
        if (texto.length === 0) {
            return parroquias;
        }
        texto = texto.toLowerCase();
        return parroquias.filter(function (parroquia) {
            return parroquia.nombreParroquia.toLowerCase().includes(texto);
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/pipes/filter.pipe.ts");



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]],
            exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ })

}]);
//# sourceMappingURL=culturas-culturas-module-es5.js.map