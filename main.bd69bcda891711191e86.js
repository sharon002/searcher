(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sharon/git-search/src/main.ts */"zUnb");


/***/ }),

/***/ "1C/s":
/*!*****************************************!*\
  !*** ./src/app/repo/repo.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "1dwn":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/repo/repo.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card2 card-default mt-5\">\n    <div class=\"card card2 card-heading pt-2\">\n      <h3 class=\" card2 card-title ml-5 \">Repositories</h3>\n    </div>\n    <div class=\"card2 card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div *ngFor=\"let repo of repos\">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <h4><a href=\"{{repo.html_url}}\" target=\"_blank\">{{repo.name}}</a></h4>\n                <p>{{repo.description}}</p>\n              </div>\n              <div class=\"col-md-3\">\n                <span class=\"badge badge-default\">{{repo.watchers}} Watchers</span>\n                <span class=\"badge badge-primary\">{{repo.forks}} Forks</span>\n              </div>\n            </div>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AFWc":
/*!****************************************!*\
  !*** ./src/app/repo/repo.component.ts ***!
  \****************************************/
/*! exports provided: RepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoComponent", function() { return RepoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_repo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./repo.component.html */ "1dwn");
/* harmony import */ var _repo_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repo.component.css */ "1C/s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _git_git_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../git/git.service */ "y73+");





let RepoComponent = class RepoComponent {
    constructor(gitService) {
        this.gitService = gitService;
        this.users = [];
        this.repos = [];
    }
    ngOnInit() {
        this.gitService.gitProfile()
            .subscribe(res => {
            //console.log(res)
            this.users = res;
        });
        this.gitService.gitRepos()
            .subscribe(data => {
            //console.log(data)
            this.repos = data;
        });
    }
    searchUser() {
        this.gitService.updateUser(this.username);
        this.gitService.gitProfile()
            .subscribe(res => {
            //console.log(res)
            this.users = res;
        });
        this.gitService.gitRepos()
            .subscribe(data => {
            //console.log(data)
            this.repos = data;
        });
    }
};
RepoComponent.ctorParameters = () => [
    { type: _git_git_service__WEBPACK_IMPORTED_MODULE_4__["GitService"] }
];
RepoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-repo',
        template: _raw_loader_repo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_repo_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RepoComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiKey: "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",
};


/***/ }),

/***/ "CO2p":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"git\" routerLinkActive=\"active\">Git-Users<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/repo\" routeLinkActive=\"/active\">Repositories</a>\n        </li>\n  \n  \n      </ul>\n    </div>\n  </nav>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { GitService } from './git/git.service'
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Git-Search';
        // constructor(private gitService: GitService) {}
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "VziJ":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "XwO1":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/git/git.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n    <div class=\"container mt-4\">\n      <form>\n        <div class=\"form-group\">\n    \n          <input type=\"text\" class=\"form-control\" name=\"name\" id=\"gitSearch\" aria-describedby=\"emailHelp\" placeholder=\"User-name\" [(ngModel)]=\"username\"(keyup)=\"searchUser()\" >\n          <small id=\"emailHelp\" class=\"form-text text-muted\">Enter your search here.</small>\n        </div>\n      </form>\n    </div>\n    <!--Users-->\n    <div class=\"container mt-5\" *ngIf=\"users\">\n      <div class=\"card card-default  p-4\">\n        <div class=\"card-heading\">\n          <h3 class=\"card-title mr-3\">{{users.name}}</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <p><strong>Profile Picture</strong></p>\n              <img class=\"\" src=\"{{users.avatar_url}}\">\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"stats\">\n                <span class=\"badge badge-secondary\">{{users.public_repos}} Public Repos</span>\n                <span class=\"badge badge-primary\">{{users.public_gists}} Public Gists</span>\n                <span class=\"badge badge-success\">{{users.followers}} Followers</span>\n                <span class=\"badge badge-info\">{{users.following}} Following</span>\n              </div>\n              <br>\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\"><strong>usersname: </strong>{{users.login}}</li>\n                <li class=\"list-group-item\"><strong>Location: </strong>{{users.location}}</li>\n                <li class=\"list-group-item\"><strong>Email: </strong>{{users.email}}</li>\n                <li class=\"list-group-item\"><strong>Blog: </strong>{{users.blog}}</li>\n                <li class=\"list-group-item\"><strong>Member Since: </strong>{{users.created_at|date}}</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  </body>\n    \n\n\n\n\n\n\n\n  ");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-progressbar/core */ "8sKn");
/* harmony import */ var _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-progressbar/http-client */ "gmZF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _git_git_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./git/git.component */ "x4zL");
/* harmony import */ var _git_git_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./git/git.service */ "y73+");
/* harmony import */ var _repo_repo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./repo/repo.component */ "AFWc");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");














const routes = [
    { path: "git", component: _git_git_component__WEBPACK_IMPORTED_MODULE_8__["GitComponent"] },
    { path: "repo", component: _repo_repo_component__WEBPACK_IMPORTED_MODULE_10__["RepoComponent"] },
];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _git_git_component__WEBPACK_IMPORTED_MODULE_8__["GitComponent"],
            _repo_repo_component__WEBPACK_IMPORTED_MODULE_10__["RepoComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_5__["NgProgressModule"].forRoot(),
            _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_6__["NgProgressHttpClientModule"]
        ],
        providers: [_git_git_service__WEBPACK_IMPORTED_MODULE_9__["GitService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "e1nU":
/*!***************************************!*\
  !*** ./src/app/git/git.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* body{\n    background-image: url(../../assets/wp3082255.jpg);\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6ImdpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3dwMzA4MjI1NS5qcGcpO1xufSAqLyJdfQ== */");

/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "CO2p");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.css */ "xkNh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent.ctorParameters = () => [];
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavBarComponent);



/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "s2In");
/* harmony import */ var _not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.css */ "VziJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ "s2In":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_repo_repo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/repo/repo.component */ "AFWc");
/* harmony import */ var _app_git_git_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/git/git.component */ "x4zL");
/* harmony import */ var _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/not-found/not-found.component */ "nod/");






const routes = [
    { path: 'repo', component: _app_repo_repo_component__WEBPACK_IMPORTED_MODULE_3__["RepoComponent"] },
    { path: 'git', component: _app_git_git_component__WEBPACK_IMPORTED_MODULE_4__["GitComponent"] },
    { path: '', component: _app_git_git_component__WEBPACK_IMPORTED_MODULE_4__["GitComponent"] },
    { path: '**', component: _app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '', redirectTo: '/git', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "x4zL":
/*!**************************************!*\
  !*** ./src/app/git/git.component.ts ***!
  \**************************************/
/*! exports provided: GitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitComponent", function() { return GitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_git_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./git.component.html */ "XwO1");
/* harmony import */ var _git_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./git.component.css */ "e1nU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _git_git_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../git/git.service */ "y73+");





let GitComponent = class GitComponent {
    constructor(gitService) {
        this.gitService = gitService;
        this.users = [];
        this.repos = [];
    }
    ngOnInit() {
        this.gitService.gitProfile()
            .subscribe(res => {
            //console.log(res)
            this.users = res;
        });
        this.gitService.gitRepos()
            .subscribe(data => {
            //console.log(data)
            this.repos = data;
        });
    }
    searchUser() {
        this.gitService.updateUser(this.username);
        this.gitService.gitProfile()
            .subscribe(res => {
            //console.log(res)
            this.users = res;
        });
        this.gitService.gitRepos()
            .subscribe(data => {
            //console.log(data)
            this.repos = data;
        });
    }
};
GitComponent.ctorParameters = () => [
    { type: _git_git_service__WEBPACK_IMPORTED_MODULE_4__["GitService"] }
];
GitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-git',
        template: _raw_loader_git_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_git_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GitComponent);



/***/ }),

/***/ "xkNh":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "y73+":
/*!************************************!*\
  !*** ./src/app/git/git.service.ts ***!
  \************************************/
/*! exports provided: GitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitService", function() { return GitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let GitService = class GitService {
    constructor(http) {
        this.http = http;
        this.apiUrl = "https://api.github.com/users/";
        console.log("GitService Ready");
        this.username = "sharon002";
    }
    gitProfile() {
        return this.http.get(this.apiUrl + this.username);
    }
    //Git Repos
    gitRepos() {
        return this.http.get(this.apiUrl + this.username + "/repos" + "?access_token=");
    }
    updateUser(username) {
        this.username = username;
    }
};
GitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], GitService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.bd69bcda891711191e86.js.map