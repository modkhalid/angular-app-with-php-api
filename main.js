(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kjhsjkds';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/auth-guard.service */ "./src/app/common/auth-guard.service.ts");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _common_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/login.service */ "./src/app/common/login.service.ts");
/* harmony import */ var _common_comment_servie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/comment.servie */ "./src/app/common/comment.servie.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _get_get_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get/get.component */ "./src/app/get/get.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"],
                _get_get_component__WEBPACK_IMPORTED_MODULE_13__["GetComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_18__["CommentComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_19__["ViewComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    {
                        path: "home",
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
                    },
                    {
                        path: "post",
                        component: _post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"]
                    },
                    {
                        path: 'comment/:userid',
                        component: _comment_comment_component__WEBPACK_IMPORTED_MODULE_18__["CommentComponent"]
                    },
                    {
                        path: 'admin',
                        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                        canActivate: [_common_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
                    },
                    {
                        path: 'view/:userid',
                        component: _view_view_component__WEBPACK_IMPORTED_MODULE_19__["ViewComponent"]
                    },
                    {
                        path: 'update/:userid',
                        component: _update_update_component__WEBPACK_IMPORTED_MODULE_17__["UpdateComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
                    },
                    {
                        path: '**',
                        component: _get_get_component__WEBPACK_IMPORTED_MODULE_13__["GetComponent"]
                    }
                ])
            ],
            providers: [
                _common_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                _common_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"],
                _common_comment_servie__WEBPACK_IMPORTED_MODULE_4__["CommentService"],
                _common_login_service__WEBPACK_IMPORTED_MODULE_3__["LogiService"],
                _common_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.css":
/*!***********************************************!*\
  !*** ./src/app/comment/comment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" [formGroup]=\"form\"(ngSubmit)=\"postComment()\" >\n  <div class=\"form-group \">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"name\"\n      formControlName=\"name\"\n      required\n      class=\"form-control\"\n      id=\"exampleInputEmail1\" \n      aria-describedby=\"emailHelp\" \n      placeholder=\"Enter email\">  \n  </div>\n\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <textarea\n      class=\"form-control\"\n      required \n      formControlName=\"content\"\n      id=\"exampleInputPassword1\" \n      cols=\"30\" rows=\"10\"\n      placeholder=\"comment\">\n    </textarea>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!form.valid'>Submit</button>\n</form>"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_comment_servie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/comment.servie */ "./src/app/common/comment.servie.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var CommentComponent = /** @class */ (function () {
    function CommentComponent(service, route, fb) {
        this.service = service;
        this.route = route;
        this.fb = fb;
        this.article = this.route.snapshot.paramMap.get('userid');
        this.form = fb.group({
            name: [],
            content: [],
            id: [this.article]
            // check:[true]
        });
    }
    CommentComponent.prototype.postComment = function () {
        console.log(this.form.value);
        this.service.create(JSON.stringify(this.form.value))
            .subscribe(function (response) {
            console.log(response);
        });
    };
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/comment/comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_comment_servie__WEBPACK_IMPORTED_MODULE_1__["CommentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/common/all.service.ts":
/*!***************************************!*\
  !*** ./src/app/common/all.service.ts ***!
  \***************************************/
/*! exports provided: AllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllService", function() { return AllService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_bad_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/bad-error */ "./src/app/common/bad-error.ts");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/app-error */ "./src/app/common/app-error.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








// corsproxy
var AllService = /** @class */ (function () {
    function AllService(url, http) {
        this.url = url;
        this.http = http;
    }
    AllService.prototype.get = function (args) {
        if (args) {
            return this.http.get(this.url + "get/" + args);
        }
        else {
            return this.http.get(this.url + "get/");
        }
    };
    AllService.prototype.getPost = function (post) {
        return this.http.post(this.url + "get/", post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.ErrorHandlerMethod), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            if (response[0].token) {
                localStorage.setItem('token', response[0].token);
                return true;
            }
            return false;
        }));
    };
    AllService.prototype.create = function (post) {
        // console.log("e")
        return this.http.post(this.url + "post/", post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.ErrorHandlerMethod));
    };
    AllService.prototype.update = function (post) {
        return this.http.post(this.url + "/update", post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.ErrorHandlerMethod));
    };
    AllService.prototype.delete = function (post) {
        return this.http.delete(this.url + "/delete/" + post.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.ErrorHandlerMethod));
    };
    AllService.prototype.ErrorHandlerMethod = function (error) {
        if (error.status === 404) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"](error));
        }
        if (error.status === 400) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(new _common_bad_error__WEBPACK_IMPORTED_MODULE_1__["BadError"](error));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_2__["AppError"](error));
    };
    AllService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AllService);
    return AllService;
}());



/***/ }),

/***/ "./src/app/common/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/common/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.service */ "./src/app/common/all.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ApiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApiService, _super);
    function ApiService(http) {
        return _super.call(this, 'http://localhost:1337/khalid/article/', http) || this;
    }
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}(_all_service__WEBPACK_IMPORTED_MODULE_1__["AllService"]));

// import { AllService } from './all-service';
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// @Injectable()
// export class PhpService extends AllService {
//   constructor(http: HttpClient) {
//     super('http://localhost:1337/khalid/help/', http);
//   }
// }


/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(OriginalError) {
        this.OriginalError = OriginalError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/common/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(route, service) {
        this.route = route;
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function (state) {
        if (this.service.isLogin()) {
            return true;
        }
        this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/common/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/common/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _all_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all.service */ "./src/app/common/all.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var AuthService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthService, _super);
    function AuthService(htt, route) {
        var _this = _super.call(this, 'http://localhost:1337/khalid/login/', htt) || this;
        _this.route = route;
        return _this;
    }
    // @over
    AuthService.prototype.get = function (post) {
        return this.http.post(this.url + "get/", post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.ErrorHandlerMethod), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response[0].token) {
                localStorage.setItem('token', response[0].token);
                return true;
            }
            return false;
        }));
    };
    AuthService.prototype.isLogin = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.route.navigate(['/home']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}(_all_service__WEBPACK_IMPORTED_MODULE_3__["AllService"]));



/***/ }),

/***/ "./src/app/common/bad-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-error.ts ***!
  \*************************************/
/*! exports provided: BadError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadError", function() { return BadError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");


var BadError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BadError, _super);
    function BadError(err) {
        return _super.call(this, err) || this;
    }
    return BadError;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));



/***/ }),

/***/ "./src/app/common/comment.servie.ts":
/*!******************************************!*\
  !*** ./src/app/common/comment.servie.ts ***!
  \******************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.service */ "./src/app/common/all.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CommentService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommentService, _super);
    function CommentService(http) {
        return _super.call(this, 'http://18.217.122.64/comment/', http) || this;
    }
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommentService);
    return CommentService;
}(_all_service__WEBPACK_IMPORTED_MODULE_1__["AllService"]));



/***/ }),

/***/ "./src/app/common/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/common/login.service.ts ***!
  \*****************************************/
/*! exports provided: LogiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogiService", function() { return LogiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _all_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.service */ "./src/app/common/all.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LogiService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogiService, _super);
    function LogiService(http) {
        return _super.call(this, 'http://localhost:1337/khalid/login/', http) || this;
    }
    LogiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogiService);
    return LogiService;
}(_all_service__WEBPACK_IMPORTED_MODULE_1__["AllService"]));



/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");


var NotFoundError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotFoundError, _super);
    function NotFoundError(err) {
        return _super.call(this, err) || this;
    }
    return NotFoundError;
}(_app_error__WEBPACK_IMPORTED_MODULE_1__["AppError"]));



/***/ }),

/***/ "./src/app/get/get.component.css":
/*!***************************************!*\
  !*** ./src/app/get/get.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC9nZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/get/get.component.html":
/*!****************************************!*\
  !*** ./src/app/get/get.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Error!</h1>\n<hr>\n<p>The webpage is Not available <a routerLink=\"/home\" >Clicke here</a> </p>"

/***/ }),

/***/ "./src/app/get/get.component.ts":
/*!**************************************!*\
  !*** ./src/app/get/get.component.ts ***!
  \**************************************/
/*! exports provided: GetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetComponent", function() { return GetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetComponent = /** @class */ (function () {
    function GetComponent() {
    }
    GetComponent.prototype.ngOnInit = function () {
    };
    GetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get',
            template: __webpack_require__(/*! ./get.component.html */ "./src/app/get/get.component.html"),
            styles: [__webpack_require__(/*! ./get.component.css */ "./src/app/get/get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetComponent);
    return GetComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n\n  \n  \n    <li \n      *ngFor=\"let item of posts\"\n      class=\"list-group-item\">\n      <!-- <button class=\"btn btn-default btn-sm\"\n        (click)=(updatePost(item))\n      >Update</button>  -->\n      \n      \n      <b>{{item.header}}</b>\n      <br>\n      {{item.body}}\n      <br>\n      <button class=\"btn btn-danger btn-sm\"\n        (click)=\"deletePost(item)\"\n      >delete</button>\n      <button class=\"mr-auto btn-warning btn\"><a [routerLink]=\"['../update',item.id]\">update</a></button>\n<br>\n      <button class=\"mr-auto btn-light btn \"><a [routerLink]=\"['/comment',item.id]\">Comment</a></button>\n      <button class=\"mr-auto btn-light btn \"><a [routerLink]=\"['/view',item.id]\">View more</a></button>\n    </li>\n  <!-- </ng-template> -->\n</ul>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.get()
            .subscribe(function (response) {
            console.log(response);
            _this.posts = response;
        });
    };
    HomeComponent.prototype.deletePost = function (item) {
        this.posts.splice(this.posts.indexOf(item), 1);
        this.service.delete(item).subscribe(function (response) {
            console.log(response);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"container\" [formGroup]=\"form\"(ngSubmit)=\"login()\" >\n    <div class=\"form-group \">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\"\n        formControlName=\"email\"\n        required\n        class=\"form-control\"\n        id=\"exampleInputEmail1\" \n        aria-describedby=\"emailHelp\" \n        placeholder=\"Enter email\">  \n    </div>\n  \n  \n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input\n        type=\"pwd\"\n        class=\"form-control\"\n        required \n        formControlName=\"password\"\n        id=\"exampleInputPassword1\" \n        cols=\"30\" rows=\"10\"\n        placeholder=\"comment\"/>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"!isLogin\">\n      alert Please provide valid email\n    </div>\n  \n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]='!form.valid'>Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import { LogiService } from './../common/login.service';


// import { Route } from '@angular/compiler/src/core';

var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, fb, service) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.isLogin = true;
        this.form = fb.group({
            email: [],
            password: []
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.get(JSON.stringify(this.form.value))
            .subscribe(function (res) {
            if (res) {
                var url = _this.router.snapshot.queryParamMap.get('returnUrl');
                _this.route.navigate([url || '/home']);
            }
            else {
                _this.isLogin = false;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  \n  <li class=\"nav-item\">\n    <a class=\"nav-link \" routerLinkActive=\"active current\" routerLink=\"home\"\n    >Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link \" routerLinkActive=\"active current\" routerLink=\"post\">Post</a>\n  </li>\n\n  <li class=\"nav-item\" >\n    <a class=\"nav-link \" routerLinkActive=\"active current\" routerLink=\"admin\">Admin</a>\n  </li>\n  \n  <li class=\"nav-item\" *ngIf=\"!service.isLogin()\">\n    <a class=\"nav-link \" routerLinkActive=\"active current\" routerLink=\"login\">Login</a>\n  </li>\n  <li class=\"nav-item\"  *ngIf=\"service.isLogin()\">\n    <a class=\"nav-link \" routerLinkActive=\"active current\" (click)=\"service.logout()\">Logout</a>\n  </li>\n \n\n  \n</ul>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/auth.service */ "./src/app/common/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(service) {
        this.service = service;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit(myForm)\">\n      <div class=\"form-group\">\n        <label for=\"email\">Heading:</label>\n        <input type=\"text\"\n          name=\"title\"\n          #email=\"ngModel\" \n          ngModel \n          required\n          class=\"form-control\" >\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        \n          <textarea \n            name=\"body\"  \n            ngModel\n            #text=\"ngModel\"\n            required\n            minlength\n            cols=\"30\" rows=\"10\"\n            class=\"form-control\"\n            >\n\n          </textarea>\n      </div>\n      <!-- <div class=\"checkbox\">\n        <label><input type=\"checkbox\"> Remember me</label>\n      </div> -->\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PostComponent = /** @class */ (function () {
    function PostComponent(service) {
        this.service = service;
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.onSubmit = function (data) {
        // console.log(JSON.parse(JSON.stringify(data.value)));
        console.log(JSON.stringify(data.value));
        this.service.create(JSON.stringify(data.value))
            .subscribe(function (response) {
            console.log(response);
        });
        data.reset();
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <form [formGroup]=\"form\" class=\"container\" (ngSubmit)=\"update()\">\n \n<div class=\"form-group\">\n    <label for=\"header\">Header</label>\n    <input \n        formControlName=\"header\"\n        id=\"header\" \n        type=\"text\" \n        class=\"form-control\">\n</div>\n      \n<div class=\"form-group\">\n    <label for=\"body\">body</label>\n    <textarea \n        formControlName=\"body\"\n        id=\"body\" \n        cols=\"30\" rows=\"10\"\n        class=\"form-control\">\n    </textarea>\n</div>\n\n<button class=\"btn btn-primary\" [disabled]=\"!form.valid\" type=\"submit\">Sign Up</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UpdateComponent = /** @class */ (function () {
    // form;
    function UpdateComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            header: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        this.route.paramMap.subscribe(function (response) {
            _this.userid = response.get('userid');
        });
        this.service.get(this.userid)
            .subscribe(function (response) {
            _this.articles = response;
            // console.log(this.articles)
            _this.form.get('header').setValue(_this.articles[0].header);
            _this.form.get('body').setValue(_this.articles[0].body);
            _this.form.get('id').setValue(_this.articles[0].id);
        });
    }
    UpdateComponent.prototype.update = function () {
        // console.log(this.articles)
        // console.log(this.form.value)
        this.service.update(JSON.stringify(this.form.value))
            .subscribe(function (response) {
            console.log(response);
        });
    };
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _common_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let post of posts\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Article\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{post.header}}</h5>\n      <p class=\"card-text\">{{post.body}}</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-2\"></div>\n    <div class=\"col-10\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"\n          *ngFor=\"let comment of comments\">\n          <h5><b>{{comment.name}}</b></h5>\n          <p>{{comment.comment}}</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../common/api.service */ "./src/app/common/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_comment_servie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/comment.servie */ "./src/app/common/comment.servie.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var ViewComponent = /** @class */ (function () {
    function ViewComponent(service, route, api) {
        this.service = service;
        this.route = route;
        this.api = api;
        this.article = this.route.snapshot.paramMap.get('userid');
        console.log(this.article);
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get(this.article)
            .subscribe(function (response) {
            console.log(response);
            _this.posts = response;
        });
        this.service.getPost(JSON.stringify({ 'article': this.article }))
            .subscribe(function (res) {
            // console.log(res)
            _this.comments = res;
        });
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_comment_servie__WEBPACK_IMPORTED_MODULE_3__["CommentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/khalid/Desktop/angular/apiHandler/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map