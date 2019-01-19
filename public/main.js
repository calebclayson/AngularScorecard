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

/***/ "./src/app/api-getter.service.ts":
/*!***************************************!*\
  !*** ./src/app/api-getter.service.ts ***!
  \***************************************/
/*! exports provided: ApiGetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiGetterService", function() { return ApiGetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { Observable } from 'rxjs';
var ApiGetterService = /** @class */ (function () {
    function ApiGetterService(http) {
        this.http = http;
        this.golfUrl = 'https://golf-courses-api.herokuapp.com/courses/';
    }
    ApiGetterService.prototype.getCourses = function () {
        return this.http.get(this.golfUrl);
    };
    ApiGetterService.prototype.getCourseById = function (id) {
        return this.http.get(this.golfUrl + id);
    };
    ApiGetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiGetterService);
    return ApiGetterService;
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
/* harmony import */ var _course_select_course_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-select/course-select.component */ "./src/app/course-select/course-select.component.ts");
/* harmony import */ var _hole_hole_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hole/hole.component */ "./src/app/hole/hole.component.ts");
/* harmony import */ var _total_total_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./total/total.component */ "./src/app/total/total.component.ts");






var routes = [
    {
        path: 'card',
        component: _hole_hole_component__WEBPACK_IMPORTED_MODULE_4__["HoleComponent"],
    },
    {
        path: 'total',
        component: _total_total_component__WEBPACK_IMPORTED_MODULE_5__["TotalComponent"]
    },
    {
        path: 'courseSelect',
        component: _course_select_course_select_component__WEBPACK_IMPORTED_MODULE_3__["CourseSelectComponent"]
    },
    {
        path: '**',
        component: _course_select_course_select_component__WEBPACK_IMPORTED_MODULE_3__["CourseSelectComponent"]
    }
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'angular-scorecard';
    }
    AppComponent.prototype.childEventClicked = function (event) {
        this.clickedEvent = event;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hole_hole_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hole/hole.component */ "./src/app/hole/hole.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _total_total_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./total/total.component */ "./src/app/total/total.component.ts");
/* harmony import */ var _course_select_course_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./course-select/course-select.component */ "./src/app/course-select/course-select.component.ts");
/* harmony import */ var _api_getter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-getter.service */ "./src/app/api-getter.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _passer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./passer.service */ "./src/app/passer.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _duplicate_names_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duplicate-names.pipe */ "./src/app/duplicate-names.pipe.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hole_hole_component__WEBPACK_IMPORTED_MODULE_5__["HoleComponent"],
                _total_total_component__WEBPACK_IMPORTED_MODULE_8__["TotalComponent"],
                _course_select_course_select_component__WEBPACK_IMPORTED_MODULE_9__["CourseSelectComponent"],
                _duplicate_names_pipe__WEBPACK_IMPORTED_MODULE_17__["DuplicateNamesPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"]
            ],
            providers: [_api_getter_service__WEBPACK_IMPORTED_MODULE_10__["ApiGetterService"], _passer_service__WEBPACK_IMPORTED_MODULE_13__["PasserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classesAndInterfaces.ts":
/*!*****************************************!*\
  !*** ./src/app/classesAndInterfaces.ts ***!
  \*****************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
var Details = /** @class */ (function () {
    function Details() {
        this.playerNames = [];
        this.scores = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
    }
    return Details;
}());



/***/ }),

/***/ "./src/app/course-select/course-select.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-select/course-select.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form (ngSubmit)=\"passDetails()\" #empForm=\"ngForm\">\n    <mat-select name=\"course\" matSelect placeholder=\"Course\" required [(ngModel)]=\"model.courseId\" (selectionChange)=\"passCourse()\">\n      <mat-option *ngFor=\"let course of courses\" [value]=\"course.id\">{{course.name}}</mat-option>\n    </mat-select>\n    <mat-select name=\"tee\" matSelect placeholder=\"Tee\" required [(ngModel)]=\"model.tee\" *ngIf=\"teeBoxes != undefined\">\n      <mat-option *ngFor=\"let tee of teeBoxes;let i=index\" [value]=\"i\">{{tee.teeType}}</mat-option>\n    </mat-select>\n    <mat-select name=\"players\" matSelect placeholder=\"Players\" required [(ngModel)]=\"model.numPlayers\" *ngIf=\"teeBoxes != undefined\">\n      <mat-option value=\"1\">1</mat-option>\n      <mat-option value=\"2\">2</mat-option>\n      <mat-option value=\"3\">3</mat-option>\n      <mat-option value=\"4\">4</mat-option>\n    </mat-select>\n    <div class=\"input-container\" *ngIf=\"model.numPlayers != undefined\">\n        <mat-form-field>\n            <input matInput placeholder=\"Player 1 Name\" type=\"string\" (change)=\"appendName($event)\"/>\n        </mat-form-field>\n        <mat-form-field *ngIf=\"model.numPlayers > 1 && model.playerNames.length > 0\">\n            <input matInput placeholder=\"Player 2 Name\" type=\"string\" (change)=\"appendName($event)\"/>\n        </mat-form-field>\n        <mat-form-field *ngIf=\"model.numPlayers > 2 && model.playerNames.length > 1\">\n            <input matInput placeholder=\"Player 3 Name\" type=\"string\" (change)=\"appendName($event)\"/>\n        </mat-form-field>\n        <mat-form-field *ngIf=\"model.numPlayers > 3 && model.playerNames.length > 2\">\n            <input matInput placeholder=\"Player 4 Name\" type=\"string\" (change)=\"appendName($event)\"/>\n        </mat-form-field>\n    </div>\n    <button *ngIf=\"teeBoxes != undefined\" mat-raised-button color=\"primary\" [disabled]=\"empForm.invalid\">Submit</button>\n  </form>\n</mat-card>\n<mat-card>\n  <button routerLink=\"/card\" mat-raised-button color=\"primary\" [disabled]=\"!isSubmitted\">Next</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/course-select/course-select.component.scss":
/*!************************************************************!*\
  !*** ./src/app/course-select/course-select.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 75vw;\n  margin: 0 auto;\n  margin-top: 4em; }\n\nmat-select {\n  padding: .5em; }\n\n.input-container {\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWxlYmNsYXlzb24vRG9jdW1lbnRzL1Byb2plY3RzL2FuZ3VsYXItc2NvcmVjYXJkL3NyYy9hcHAvY291cnNlLXNlbGVjdC9jb3Vyc2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY291cnNlLXNlbGVjdC9jb3Vyc2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICAgIHdpZHRoOiA3NXZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDRlbTtcbn1cblxubWF0LXNlbGVjdCB7XG4gICAgcGFkZGluZzogLjVlbTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/course-select/course-select.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-select/course-select.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseSelectComponent", function() { return CourseSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-getter.service */ "./src/app/api-getter.service.ts");
/* harmony import */ var _passer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passer.service */ "./src/app/passer.service.ts");
/* harmony import */ var _classesAndInterfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classesAndInterfaces */ "./src/app/classesAndInterfaces.ts");





var CourseSelectComponent = /** @class */ (function () {
    function CourseSelectComponent(apiGetter, passer) {
        this.apiGetter = apiGetter;
        this.passer = passer;
        this.isSubmitted = false;
        this.model = new _classesAndInterfaces__WEBPACK_IMPORTED_MODULE_4__["Details"];
    }
    CourseSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiGetter.getCourses().subscribe(function (res) {
            _this.courses = res.courses;
        });
    };
    CourseSelectComponent.prototype.passCourse = function () {
        var _this = this;
        this.apiGetter.getCourseById(this.model.courseId).subscribe(function (res) {
            _this.course = res.data;
            _this.teeBoxes = _this.course.holes[0].teeBoxes;
        });
    };
    CourseSelectComponent.prototype.passDetails = function () {
        var i = 1;
        while (this.model.playerNames.length < this.model.numPlayers) {
            this.model.playerNames.push('Player ' + i);
            i++;
        }
        this.passer.setDetails(this.model);
        this.isSubmitted = true;
    };
    CourseSelectComponent.prototype.appendName = function (e) {
        this.model.playerNames.push(e.path[0].value);
    };
    CourseSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-select',
            template: __webpack_require__(/*! ./course-select.component.html */ "./src/app/course-select/course-select.component.html"),
            styles: [__webpack_require__(/*! ./course-select.component.scss */ "./src/app/course-select/course-select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_getter_service__WEBPACK_IMPORTED_MODULE_2__["ApiGetterService"], _passer_service__WEBPACK_IMPORTED_MODULE_3__["PasserService"]])
    ], CourseSelectComponent);
    return CourseSelectComponent;
}());



/***/ }),

/***/ "./src/app/duplicate-names.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/duplicate-names.pipe.ts ***!
  \*****************************************/
/*! exports provided: DuplicateNamesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateNamesPipe", function() { return DuplicateNamesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _passer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passer.service */ "./src/app/passer.service.ts");



var DuplicateNamesPipe = /** @class */ (function () {
    function DuplicateNamesPipe(pass) {
        this.pass = pass;
        this.constantNumber = 1;
    }
    DuplicateNamesPipe.prototype.transform = function (value, args) {
        var copyAry = [];
        for (var i = 0; i < this.pass.getDetails().playerNames.length; i++) {
            if (value == this.pass.getDetails().playerNames[i]) {
                copyAry.push(i);
            }
        }
        if (copyAry.length > 1) {
            var name_1 = value;
            for (var i = 0; i < this.constantNumber; i++) {
                name_1 = name_1 + 'x';
            }
            this.constantNumber++;
            return name_1;
        }
        else {
            this.constantNumber++;
            return value;
        }
    };
    DuplicateNamesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'duplicateNames'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_passer_service__WEBPACK_IMPORTED_MODULE_2__["PasserService"]])
    ], DuplicateNamesPipe);
    return DuplicateNamesPipe;
}());



/***/ }),

/***/ "./src/app/hole/hole.component.html":
/*!******************************************!*\
  !*** ./src/app/hole/hole.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hole-wrapper\">\n  <mat-card class=\"hole\" *ngFor=\"let hole of holes\">\n    <mat-card-title>Hole {{hole.hole}}</mat-card-title>\n    <mat-card-subtitle>This hole is {{hole.teeBoxes[details.tee].yards}} yards</mat-card-subtitle>\n    <mat-card-subtitle>{{hole.teeBoxes[details.tee].par}} is par</mat-card-subtitle>\n    <mat-card-subtitle>{{hole.teeBoxes[details.tee].hcp}} is the handicap</mat-card-subtitle>\n    <div class=\"p1\">{{details.playerNames[0] | duplicateNames}}: <mat-form-field><input type=\"number\" matInput (change)=\"pushScore($event)\" /></mat-form-field></div>\n    <div class=\"p2\" *ngIf=\"details.numPlayers > 1\">{{details.playerNames[1] | duplicateNames}}: <mat-form-field><input type=\"number\" matInput (change)=\"pushScore($event)\" /></mat-form-field></div>\n    <div class=\"p3\" *ngIf=\"details.numPlayers > 2\">{{details.playerNames[2] | duplicateNames}}: <mat-form-field><input type=\"number\" matInput (change)=\"pushScore($event)\"/></mat-form-field></div>\n    <div class=\"p4\" *ngIf=\"details.numPlayers > 3\">{{details.playerNames[3] | duplicateNames}}: <mat-form-field><input type=\"number\" matInput (change)=\"pushScore($event)\"/></mat-form-field></div>\n  </mat-card>\n</div>\n<mat-card class=\"finish\">\n    <button mat-raised-button color=\"primary\" (click)=\"saveData()\">Save</button>\n    <button routerLink=\"/total\" mat-raised-button color=\"primary\" >Finish</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/hole/hole.component.scss":
/*!******************************************!*\
  !*** ./src/app/hole/hole.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hole {\n  width: 20em;\n  margin: 1em; }\n\n.hole-wrapper {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\nmat-card-title {\n  text-align: center; }\n\n.finish {\n  margin: 2em;\n  width: 4.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWxlYmNsYXlzb24vRG9jdW1lbnRzL1Byb2plY3RzL2FuZ3VsYXItc2NvcmVjYXJkL3NyYy9hcHAvaG9sZS9ob2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGNBQWE7RUFDYixZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbGUvaG9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xlIHtcbiAgICB3aWR0aDogMjBlbTtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLmhvbGUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpbmlzaCB7XG4gICAgbWFyZ2luOiAyZW07XG4gICAgd2lkdGg6IDQuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hole/hole.component.ts":
/*!****************************************!*\
  !*** ./src/app/hole/hole.component.ts ***!
  \****************************************/
/*! exports provided: HoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoleComponent", function() { return HoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-getter.service */ "./src/app/api-getter.service.ts");
/* harmony import */ var _passer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passer.service */ "./src/app/passer.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");





var HoleComponent = /** @class */ (function () {
    function HoleComponent(apiGetter, passer, db) {
        this.apiGetter = apiGetter;
        this.passer = passer;
        this.db = db;
        this.details = this.passer.getDetails();
        this.detailsFire = this.db.object('/data');
    }
    HoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiGetter.getCourseById(this.details.courseId).subscribe(function (res) {
            _this.holes = res.data.holes;
        });
    };
    HoleComponent.prototype.pushScore = function (e) {
        var someText = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].innerText;
        var index = Number(someText.slice(5)) - 1;
        var playerIndex = Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.className.slice(1, 2)) - 1;
        this.details.scores[playerIndex][index] = Number(e.target.value);
    };
    HoleComponent.prototype.saveData = function () {
        this.detailsFire.set(this.details);
    };
    HoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hole',
            template: __webpack_require__(/*! ./hole.component.html */ "./src/app/hole/hole.component.html"),
            styles: [__webpack_require__(/*! ./hole.component.scss */ "./src/app/hole/hole.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_getter_service__WEBPACK_IMPORTED_MODULE_2__["ApiGetterService"], _passer_service__WEBPACK_IMPORTED_MODULE_3__["PasserService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], HoleComponent);
    return HoleComponent;
}());



/***/ }),

/***/ "./src/app/passer.service.ts":
/*!***********************************!*\
  !*** ./src/app/passer.service.ts ***!
  \***********************************/
/*! exports provided: PasserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasserService", function() { return PasserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PasserService = /** @class */ (function () {
    function PasserService() {
    }
    PasserService.prototype.setDetails = function (info) {
        this.details = info;
    };
    PasserService.prototype.getDetails = function () {
        return this.details;
    };
    PasserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PasserService);
    return PasserService;
}());



/***/ }),

/***/ "./src/app/total/total.component.html":
/*!********************************************!*\
  !*** ./src/app/total/total.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h1>The winner is {{details.playerNames[places[0].id]}}</h1>\n  <h2>{{(places[0].relToPar > 0) ? places[0].relToPar + \" under par\" : places[0].relToPar*-1 + \" over par\"}}</h2>\n  <h3 *ngIf=\"places.length > 1\">Second place is {{details.playerNames[places[1].id]}} with {{(places[1].relToPar > 0) ? places[1].relToPar + \" under par\" : places[1].relToPar*-1 + \" over par\"}}</h3>\n  <h3 *ngIf=\"places.length > 2\">Third place is {{details.playerNames[places[2].id]}} with {{(places[2].relToPar > 0) ? places[2].relToPar + \" under par\" : places[2].relToPar*-1 + \" over par\"}}</h3>\n  <h3 *ngIf=\"places.length > 3\">Fourth place is {{details.playerNames[places[3].id]}} with {{(places[3].relToPar > 0) ? places[3].relToPar + \" under par\" : places[3].relToPar*-1 + \" over par\"}}</h3>\n  <h2>The total yards was {{yardTotal}}</h2>\n  <h2>The total par was {{parTotal}}</h2>\n</mat-card>"

/***/ }),

/***/ "./src/app/total/total.component.scss":
/*!********************************************!*\
  !*** ./src/app/total/total.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin: 5em;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWxlYmNsYXlzb24vRG9jdW1lbnRzL1Byb2plY3RzL2FuZ3VsYXItc2NvcmVjYXJkL3NyYy9hcHAvdG90YWwvdG90YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdG90YWwvdG90YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiA1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/total/total.component.ts":
/*!******************************************!*\
  !*** ./src/app/total/total.component.ts ***!
  \******************************************/
/*! exports provided: TotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalComponent", function() { return TotalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-getter.service */ "./src/app/api-getter.service.ts");
/* harmony import */ var _passer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passer.service */ "./src/app/passer.service.ts");




var TotalComponent = /** @class */ (function () {
    function TotalComponent(apiGetter, passer) {
        this.apiGetter = apiGetter;
        this.passer = passer;
        this.details = this.passer.getDetails();
        this.p1score = {
            id: 0,
            total: 0,
            in: 0,
            out: 0,
            relToPar: 0
        };
        this.p2score = {
            id: 1,
            total: 0,
            in: 0,
            out: 0,
            relToPar: 0
        };
        this.p3score = {
            id: 2,
            total: 0,
            in: 0,
            out: 0,
            relToPar: 0
        };
        this.p4score = {
            id: 3,
            total: 0,
            in: 0,
            out: 0,
            relToPar: 0
        };
        this.parTotal = 0;
        this.yardTotal = 0;
    }
    TotalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiGetter.getCourseById(this.details.courseId).subscribe(function (res) {
            _this.course = res.data;
            _this.calcTotals();
        });
    };
    TotalComponent.prototype.sort = function (list) {
        var sort = true;
        var changeIndexArray = [];
        while (sort) {
            sort = false;
            for (var i = list.length - 2; i >= 0; i--) {
                var tmp = list[i + 1].total;
                if (list[i].total > tmp) {
                    changeIndexArray.push(i);
                    sort = true;
                }
            }
            if (sort) {
                for (var i = 0; i < changeIndexArray.length; i++) {
                    var tmp = list[changeIndexArray[i]];
                    list[changeIndexArray[i]] = list[changeIndexArray[i] + 1];
                    list[changeIndexArray[i] + 1] = tmp;
                    changeIndexArray = [];
                }
                // sort = false;
            }
        }
        return list;
    };
    TotalComponent.prototype.calcTotals = function () {
        for (var i = 0; i < this.details.scores[0].length; i++) {
            this.p1score.total += this.details.scores[0][i];
        }
        for (var i = 0; i < Math.round(this.details.scores[0].length / 2); i++) {
            this.p1score.in += this.details.scores[0][i];
        }
        for (var i = Math.round(this.details.scores[0].length / 2); i < this.details.scores[0].length; i++) {
            this.p1score.out += this.details.scores[0][i];
        }
        for (var i = 0; i < this.details.scores[1].length; i++) {
            this.p2score.total += this.details.scores[1][i];
        }
        for (var i = 0; i < Math.round(this.details.scores[1].length / 2); i++) {
            this.p2score.in += this.details.scores[1][i];
        }
        for (var i = Math.round(this.details.scores[1].length / 2); i < this.details.scores[1].length; i++) {
            this.p2score.out += this.details.scores[1][i];
        }
        for (var i = 0; i < this.details.scores[2].length; i++) {
            this.p3score.total += this.details.scores[2][i];
        }
        for (var i = 0; i < Math.round(this.details.scores[2].length / 2); i++) {
            this.p3score.in += this.details.scores[2][i];
        }
        for (var i = Math.round(this.details.scores[2].length / 2); i < this.details.scores[2].length; i++) {
            this.p3score.out += this.details.scores[2][i];
        }
        for (var i = 0; i < this.details.scores[3].length; i++) {
            this.p4score.total += this.details.scores[3][i];
        }
        for (var i = 0; i < Math.round(this.details.scores[3].length / 2); i++) {
            this.p4score.in += this.details.scores[3][i];
        }
        for (var i = Math.round(this.details.scores[3].length / 2); i < this.details.scores[3].length; i++) {
            this.p4score.out += this.details.scores[3][i];
        }
        for (var i = 0; i < this.course.holes.length; i++) {
            this.parTotal += Number(this.course.holes[i].teeBoxes[this.details.tee].par);
        }
        for (var i = 0; i < this.course.holes.length; i++) {
            this.yardTotal += Number(this.course.holes[i].teeBoxes[this.details.tee].yards);
        }
        this.calculateRelToPar();
    };
    TotalComponent.prototype.calculateRelToPar = function () {
        this.p1score.relToPar = this.parTotal - this.p1score.total;
        this.p2score.relToPar = this.parTotal - this.p2score.total;
        this.p3score.relToPar = this.parTotal - this.p3score.total;
        this.p4score.relToPar = this.parTotal - this.p4score.total;
        this.setPlacings();
    };
    TotalComponent.prototype.setPlacings = function () {
        var scoreArray = [];
        if (this.p1score.total > 0) {
            scoreArray.push(this.p1score);
        }
        if (this.p2score.total > 0) {
            scoreArray.push(this.p2score);
        }
        if (this.p3score.total > 0) {
            scoreArray.push(this.p3score);
        }
        if (this.p4score.total > 0) {
            scoreArray.push(this.p4score);
        }
        this.places = this.sort(scoreArray);
        console.log(this.places);
    };
    TotalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-total',
            template: __webpack_require__(/*! ./total.component.html */ "./src/app/total/total.component.html"),
            styles: [__webpack_require__(/*! ./total.component.scss */ "./src/app/total/total.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_getter_service__WEBPACK_IMPORTED_MODULE_2__["ApiGetterService"], _passer_service__WEBPACK_IMPORTED_MODULE_3__["PasserService"]])
    ], TotalComponent);
    return TotalComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyCWNq6zuiWS3mxTgIUoN6Bw3lrdk3QaSSU",
        authDomain: "angularscorecard-a93a5.firebaseapp.com",
        databaseURL: "https://angularscorecard-a93a5.firebaseio.com",
        projectId: "angularscorecard-a93a5",
        storageBucket: "angularscorecard-a93a5.appspot.com",
        messagingSenderId: "395257136068"
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/calebclayson/Documents/Projects/angular-scorecard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map