webpackJsonp([0],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInEmailPageModule", function() { return SignInEmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_email__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInEmailPageModule = /** @class */ (function () {
    function SignInEmailPageModule() {
    }
    SignInEmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in_email__["a" /* SignInEmailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in_email__["a" /* SignInEmailPage */]),
            ],
        })
    ], SignInEmailPageModule);
    return SignInEmailPageModule;
}());

//# sourceMappingURL=sign-in-email.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignInEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInEmailPage = /** @class */ (function () {
    function SignInEmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignInEmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInEmailPage');
    };
    SignInEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in-email',template:/*ion-inline-start:"/home/pauldb/IonicProjects/WeAreMusicos/src/pages/sign-in-email/sign-in-email.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <p text-center> \n        <img src="../../assets/imgs/wamlogo_black.svg" height="75" style="fill: red;" > \n      </p> \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col no-padding>\n      <h1 text-center>\n        WE ARE MUSICOS<br> \n        <span>Listen, develop, share, promote</span>\n      </h1>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row class="fill">\n      <ion-col no-padding>\n        <h2 text-center>\n          <br>\n          Découvrez vos nouveaux outils<br>\n          pour booster vos projets musicaux.\n        </h2>\n        <button ion-button full (click)="loginWithFB()" color="facebook" icon-start>\n          <ion-icon name="logo-facebook" style="color:white;" ></ion-icon> \n          Se connecter avec Facebook \n        </button>\n        <br>\n        <button ion-button full color="email" icon-start>\n          <ion-icon name="mail" style="color: white;"></ion-icon> \n          Se connecter avec un email\n        </button>\n        <br>\n        <div class="myflexcontainer">\n          <div class="myflex">\n            <hr class="small" float-left>\n            <p text-center style="color:white;" float-left>Ou</p>\n            <hr class="small">   \n          </div>\n        </div>\n        <br>\n        <button ion-button color="dark" full icon-start>\n          <ion-icon name="create" style="color: white;"></ion-icon>\n          Créez votre compte\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row style="height: 150px;">\n      <ion-col no-padding align-self-center>\n        <ion-card *ngIf="userData" no-margin> \n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{ userData.picture }}">\n            </ion-avatar>\n            <h2> {{ userData.username }} </h2>\n            <p>{{ userData.email }}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>'/*ion-inline-end:"/home/pauldb/IonicProjects/WeAreMusicos/src/pages/sign-in-email/sign-in-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SignInEmailPage);
    return SignInEmailPage;
}());

//# sourceMappingURL=sign-in-email.js.map

/***/ })

});
//# sourceMappingURL=0.js.map