webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.apiUrl = 'http://api.wearemusicos.debuck.info:3000';
    }
    ApiProvider.prototype.getServices = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/services').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getTestComment = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/test_comment').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.saveComment = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/test_comment', data)
                .subscribe(function (res) {
                resolve(res);
                _this.getTestComment();
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(51);
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
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, facebook, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.statusBar = statusBar;
        //userData = { email: "test", username: "test", picture: "ok.jpg"};
        this.userData = null;
        statusBar.hide();
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.ionViewWillLeave = function () {
        this.statusBar.show();
    };
    SignInPage.prototype.loginWithFB = function () {
        var _this = this;
        this.facebook.login(['email', 'public_profile']).then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { email: profile['email'], first_name: profile['first_name'],
                    picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\sign-in\sign-in.html"*/'<ion-header no-border>\n\n  <ion-navbar color="transparent"> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col>\n\n      <p text-center> \n\n        <img src="../../assets/imgs/wamlogo_black.svg" height="75" style="fill: red;" > \n\n      </p> \n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col no-padding>\n\n      <h1 text-center>\n\n        WE ARE MUSICOS<br> \n\n        <span>Listen, develop, share, promote</span>\n\n      </h1>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-grid>\n\n    <ion-row class="fill">\n\n      <ion-col no-padding>\n\n        <h2 text-center>\n\n          <br>\n\n          Découvrez vos nouveaux outils<br>\n\n          pour booster vos projets musicaux.\n\n        </h2>\n\n        <button ion-button full (click)="loginWithFB()" color="facebook" icon-start>\n\n          <ion-icon name="logo-facebook" style="color:white;" ></ion-icon> \n\n          Se connecter avec Facebook \n\n        </button>\n\n        <br>\n\n        <button ion-button full color="email" icon-start>\n\n          <ion-icon name="mail" style="color: white;"></ion-icon> \n\n          Se connecter avec un email\n\n        </button>\n\n        <br>\n\n        <div class="myflexcontainer">\n\n          <div class="myflex">\n\n            <hr class="small" float-left>\n\n            <p text-center style="color:white;" float-left>Ou</p>\n\n            <hr class="small">   \n\n          </div>\n\n        </div>\n\n        <br>\n\n        <button ion-button color="dark" full icon-start>\n\n          <ion-icon name="create" style="color: white;"></ion-icon>\n\n          Créez votre compte\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row style="height: 150px;">\n\n      <ion-col no-padding align-self-center>\n\n        <ion-card *ngIf="userData" no-margin> \n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="{{ userData.picture }}">\n\n            </ion-avatar>\n\n            <h2> {{ userData.username }} </h2>\n\n            <p>{{ userData.email }}</p>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpClient, apiProvider, statusBar) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.apiProvider = apiProvider;
        this.statusBar = statusBar;
        this.services = [];
        this.recherche = "gone";
        this.getServices();
        console.log(this.services);
        statusBar.show();
    }
    HomePage.prototype.getServices = function () {
        var _this = this;
        this.apiProvider.getServices().then(function (data) {
            _this.services = data['services'];
            console.log(_this.services);
        });
    };
    HomePage.prototype.openProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */]);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__["a" /* SignInPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.statusBar.show();
    };
    HomePage.prototype.ShowHideSearch = function () {
        if (this.recherche == "gone") {
            this.recherche = "visible";
        }
        else {
            this.recherche = "gone";
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button [menuToggle]="activeMenu">\n\n      <ion-icon name="menu" color="white"></ion-icon>\n\n    </button>\n\n    <ion-title text-center>\n\n      WE ARE MUSICOS\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="white">\n\n        <ion-icon name="search" (click)="ShowHideSearch"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<offline-menu></offline-menu>\n\n\n\n<ion-content>\n\n  <ion-grid class="search" no-padding [style.visibility]="recherche">\n\n    <ion-row padding>\n\n      <ion-col col-12>\n\n        <h2><ion-icon name="search"></ion-icon> Rechercher</h2>\n\n        <p>Destination / Type de service / <br>Nom de l\'établissement :</p>\n\n        <ion-list>\n\n          <ion-item> \n\n            <ion-input type="text" placeholder="Rechercher" no-margin>\n\n            </ion-input>\n\n            <button ion-button clear color="dark" type="button" item-right (click)="managePassword()"> <ion-icon big name="locate"> </ion-icon> </button>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>Catégorie</ion-label>\n\n            <ion-select>\n\n              <ion-option value="all">Toutes</ion-option>\n\n              <ion-option value="n64">Guitare</ion-option>\n\n              <ion-option value="ps">Basse</ion-option>\n\n              <ion-option value="genesis">Batterie</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-row>\n\n          <ion-col col-6 no-padding padding-right>\n\n            <ion-input type="text" placeholder="Code postal"></ion-input>\n\n          </ion-col>\n\n          <ion-col col-6 no-padding>\n\n            <ion-range>\n\n              <span range-left>0Km</span>\n\n              <span range-right>100Km</span>\n\n            </ion-range>\n\n          </ion-col>         \n\n        </ion-row>\n\n        <ion-row radio-group margin-bottom>\n\n          <ion-col col-6 no-margin no-padding padding-right>\n\n            <ion-item>\n\n              <ion-label class="label" >Loisir</ion-label>\n\n              <ion-radio checked="true" value="loisir"></ion-radio>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6 no-margin no-padding> \n\n            <ion-item>\n\n              <ion-label>Professionnel</ion-label>\n\n              <ion-radio value="pro"></ion-radio>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <button ion-button color="red" class="center" full (click)="openProfile()">Rechercher</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 no-padding no-margin>\n\n        <img src="../../assets/imgs/map.png">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-row class="search">\n\n    <ion-col>\n\n      <p text-center>\n\n        <img src="../../assets/imgs/wamlogo.svg" height="33" (click)="openProfile()">\n\n      </p>\n\n      <p text-center>\n\n        Bienvenue à la communauté, ici vous trouverez lorem ipsum. Dolore sit amer como estas margarita\n\n        Avec ceci cela, comme ci comme ça, ton père ta mère, ma fille.<br>\n\n        <br>\n\n        <a (click)="login()">Se connecter</a>\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row padding-top>\n\n    <ion-col col-12 padding-left>\n\n      <span class="hastag" margin-right>\n\n        <ion-icon name="globe"></ion-icon>\n\n        Offres privées\n\n      </span>\n\n      <span class="hastag" margin-right>\n\n        <ion-icon name="add"></ion-icon>\n\n        Proposer une offre\n\n      </span>\n\n      <span class="hastag">\n\n        <ion-icon name="funnel"></ion-icon>\n\n      </span>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-card *ngFor="let service of services">\n\n    <ion-row>\n\n      <ion-col col-6 no-padding>\n\n        <img src="http://debuck.info:3000/{{ service.image }}">\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <h2>{{ service.title }}</h2>\n\n        <h3>Durée 3 mois</h3>\n\n        <p>\n\n          {{ service.description | slice:0:80 }}...\n\n        </p>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <p text-right float-right>1254 avis</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <!--ion-card>\n\n    <ion-row>\n\n      <ion-col col-6 no-padding>\n\n        <img src="../../assets/imgs/son.png">\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <h2>Formation ingénieur du son</h2>\n\n        <h3>Durée: 3 mois</h3>\n\n        <p>\n\n          Il reste 3 places<br />\n\n          5km, La Hulpe\n\n        </p>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <ion-icon name="star-outline"></ion-icon>\n\n        <p text-right float-right>1254 avis</p>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card-->\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <footer-toolbar [page]="home"></footer-toolbar> \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\category\category.html"*/'<!--\n\n  Generated template for the CategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>categorie guitare</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n    <ion-grid no-padding>\n\n\n\n\n\n        <h3>Catégories</h3>\n\n\n\n      \n\n        <ion-row>\n\n            <ion-col align-self-center>Guitare</ion-col>\n\n          <ion-col col-auto align-self-center>\n\n            <ion-avatar item-start>  \n\n              <img src="/assets/imgs/studio.png" class="round"></ion-avatar></ion-col>\n\n            \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Basse</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/photo4.jpg" class="round"></ion-col> \n\n          \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Batterie</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n\n          \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Piano</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/messagerie.svg"></ion-col>\n\n         \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Synthétiseur</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/service.svg"></ion-col>\n\n         \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Clavier</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/vendre.svg"></ion-col>\n\n          \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Instruments à vent</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n\n          \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Sonorisation</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/calendrier.svg"></ion-col>\n\n         \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Pro audio</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/musique.svg"></ion-col>\n\n         \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>DJ</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/activite.svg"></ion-col>\n\n         \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Informatique</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/profile_as.svg"></ion-col>\n\n         \n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Éclairage</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Autres instruments</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Librairie</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col align-self-center>Accessoires</ion-col>\n\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n\n\n        </ion-row>\n\n      </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, apiProvider, fileChooser, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.fileChooser = fileChooser;
        this.platform = platform;
        this.comments = [];
        this.newcomment = { comment: '' };
        this.getTestComments();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getTestComments = function () {
        var _this = this;
        this.apiProvider.getTestComment()
            .then(function (data) {
            console.log("getting here");
            _this.comments = data['comment'];
            console.log(_this.comments);
        });
    };
    ProfilePage.prototype.saveComment = function () {
        var _this = this;
        this.apiProvider.saveComment(this.newcomment).then(function (result) {
            console.log(result);
            _this.getTestComments();
            _this.newcomment = { comment: '' };
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.chooseFile = function () {
        if (this.platform.is('android')) {
            this.fileChooser.open()
                .then(function (uri) { return console.log(uri); })
                .catch(function (e) { return console.log(e); });
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton >\n\n\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n      <ion-searchbar\n\n        [(ngModel)]="myInput"\n\n        [showCancelButton]="shouldShowCancel"\n\n        (ionCancel)="onCancel($event)">\n\n      </ion-searchbar>\n\n      <!-- (ionInput)="onInput($event)" -->\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-style">\n\n  <ion-row margin-bottom>\n\n    <ion-col col-12 no-padding padding-left>\n\n      <ion-item no-lines class="no-borders">\n\n        <ion-avatar item-start>\n\n            <img src="../../assets/imgs/allan_profile.jpg"/>\n\n        </ion-avatar>\n\n        <h1>Allan François</h1>\n\n        <p>allan.françois@wearemusicos.com</p>\n\n        <ion-badge>WAM PARTNER ♦</ion-badge>\n\n        <ion-badge>Recording Studio</ion-badge>\n\n        <br />\n\n        <ion-badge color="primary">Guitariste</ion-badge>\n\n        <ion-badge>...</ion-badge>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col col-12 no-padding>\n\n      <p text-center>Ceci est une introduction éditable.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="wam_menu" margin-bottom>\n\n    <ion-col text-center>\n\n      <ion-icon name="create" color="primary" ></ion-icon><br>\n\n      <p>Publier</p>\n\n    </ion-col>\n\n    <ion-col text-center>\n\n      <ion-icon name="person"></ion-icon><br>\n\n      <p>Modifier le profil</p>\n\n    </ion-col>\n\n    <ion-col text-center>\n\n      <ion-icon name="list"></ion-icon><br>\n\n      <p>Historique personnel</p>\n\n    </ion-col>\n\n    <ion-col text-center>\n\n    <ion-icon name="musical-notes"></ion-icon><br>\n\n      <p>Playlists</p>\n\n    </ion-col>\n\n    <ion-col text-center>\n\n      <ion-icon name="more"></ion-icon><br>\n\n        <p>Plus</p>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col class="bg-style" margin-left>\n\n      Toutes les photos\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-scroll scrollX="true" >\n\n      <ion-col>\n\n        <img src="../../assets/imgs/photo.jpg">\n\n      </ion-col>\n\n      <ion-col>\n\n        <img src="../../assets/imgs/photo1.png">\n\n      </ion-col>\n\n      <ion-col>\n\n        <img src="../../assets/imgs/photo2.jpg">\n\n      </ion-col>\n\n      <ion-col>\n\n        <img src="../../assets/imgs/photo3.jpg">\n\n      </ion-col>\n\n      <ion-col>\n\n        <img src="../../assets/imgs/photo4.jpg">\n\n      </ion-col>\n\n  </ion-scroll>\n\n  <ion-row margin-top>\n\n    <ion-col class="bg-style" margin-left>\n\n      Publications\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="post">\n\n    <ion-col col-12 no-padding padding-left>\n\n      <ion-item no-lines class="no-borders">\n\n        <ion-avatar item-start no-margin>\n\n            <img src="../../assets/imgs/allan_profile.jpg"/>\n\n        </ion-avatar>\n\n        <ion-col no-padding>\n\n          Allan François\n\n        </ion-col>\n\n        <ion-col class="light">\n\n          17:53 08/08/201\n\n        </ion-col>\n\n        <ion-col class="light">\n\n          <ion-icon name="globe"></ion-icon>\n\n          La Hulpe, BE\n\n        </ion-col>\n\n        <h2>Les frelons se repèrent dans leurs déplacements grâce à la lumière de la lune</h2>\n\n        <ion-col class="light"><ion-icon name="thumbs-up"></ion-icon> 43 565 889</ion-col>\n\n        <ion-col class="light">Commenter</ion-col>\n\n        <ion-col class="light">Partager</ion-col>\n\n      </ion-item>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row class="post" no-margin *ngFor="let comment of comments; let last = last;">\n\n      <ion-col no-margin no-padding padding-top>\n\n        <ion-row class="comment">\n\n            <ion-col>\n\n            Anonymous\n\n            <span class="light"> | 18:29 09/08/2019</span>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="comment">\n\n          <ion-col>\n\n            {{ comment.comment }}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row class="comment" justify-content-end>\n\n          <ion-col>\n\n            <ion-icon name="thumbs-up"></ion-icon> 3\n\n          </ion-col>\n\n          <ion-col>Commenter</ion-col>\n\n          <ion-col>Partager</ion-col>\n\n        </ion-row>\n\n        <ion-row class="comment" margin-top margin-bottom *ngIf="last">\n\n          <ion-col text-right>\n\n            <form (ngSubmit)="saveComment()">\n\n              <ion-input placeholder="Commenter" type="text" [(ngModel)]="newcomment.comment" name="comment">Commenter</ion-input>\n\n              <ion-col>\n\n                <button big ion-button clear (click)="chooseFile()"><ion-icon name="camera"></ion-icon></button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button small ion-button type="submit" clear >Send</button> \n\n              </ion-col>\n\n            </form>  \n\n          </ion-col>       \n\n        </ion-row>\n\n      </ion-col>\n\n    </ion-row> \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_toolbar_footer_toolbar__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_offline_menu_offline_menu__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_category_category__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_guitar_guitar__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            // Add page here
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_footer_toolbar_footer_toolbar__["a" /* FooterToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_offline_menu_offline_menu__["a" /* OfflineMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */],
                Guita,
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            //and here
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_guitar_guitar__["a" /* GuitarPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            if (platform.is('ios')) {
                statusBar.overlaysWebView(true);
            }
            statusBar.backgroundColorByHexString('#C6392C');
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__ = __webpack_require__(103);
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
 * Generated class for the FooterToolbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterToolbarComponent = /** @class */ (function () {
    function FooterToolbarComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FooterToolbarComponent.prototype.openProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__["a" /* ProfilePage */]);
    };
    FooterToolbarComponent.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__["a" /* SignInPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FooterToolbarComponent.prototype, "page", void 0);
    FooterToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer-toolbar',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\components\footer-toolbar\footer-toolbar.html"*/'<!-- Generated template for the FooterToolbarComponent component -->\n\n<ion-toolbar color="white" class="toolbar-footer" no-padding> \n\n  <ion-buttons>\n\n    <button ion-button class="text-on-bottom active" [class.active]="page == \'home\'">\n\n      <img src="assets/imgs/wamlogo_dark_grey.svg" height="24">   \n\n      Accueil\n\n    </button>\n\n    <button ion-button class="text-on-bottom" [class.active]="page == \'login\'" (click)="login()">\n\n      <ion-icon name="person"></ion-icon>\n\n      Se connecter\n\n    </button>\n\n    <button ion-button class="text-on-bottom" [class.active]="page == \'projects\'"> \n\n      <ion-icon name="filing"></ion-icon>\n\n      Projet\n\n    </button>\n\n    <button ion-button class="text-on-bottom" [class.active]="page == \'notifications\'">\n\n      <ion-icon name="globe"></ion-icon>\n\n      Notifications\n\n    </button>\n\n    <button ion-button class="text-on-bottom" [class.active]="page == \'more\'">\n\n      <ion-icon name="more"></ion-icon>\n\n      Plus\n\n    </button>\n\n  </ion-buttons>\n\n</ion-toolbar>'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\components\footer-toolbar\footer-toolbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], FooterToolbarComponent);
    return FooterToolbarComponent;
}());

//# sourceMappingURL=footer-toolbar.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the OfflineMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OfflineMenuComponent = /** @class */ (function () {
    function OfflineMenuComponent() {
    }
    OfflineMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'offline-menu',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\components\offline-menu\offline-menu.html"*/'<ion-nav #offline_menu [root]="rootPage"></ion-nav>\n\n\n\n<ion-menu [content]="offline_menu">\n\n\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title text-center>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/wamlogo_dark_grey.svg"></ion-col>\n\n        <ion-col align-self-center>Actualités</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/profil.svg"></ion-col>\n\n        <ion-col align-self-center>Profil</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n\n        <ion-col align-self-center>Publier</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/messagerie.svg"></ion-col>\n\n        <ion-col align-self-center>Messagerie</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/service.svg"></ion-col>\n\n        <ion-col align-self-center>Proposer des services</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/vendre.svg"></ion-col>\n\n        <ion-col align-self-center>Vendre du matons</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n\n        <ion-col align-self-center>Question à la communauté</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/calendrier.svg"></ion-col>\n\n        <ion-col align-self-center>Événements de la communauté</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/musique.svg"></ion-col>\n\n        <ion-col align-self-center>Musique</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/activite.svg"></ion-col>\n\n        <ion-col align-self-center>Accéder à mes activités</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/profile_as.svg"></ion-col>\n\n        <ion-col align-self-center>Voir son profil en tant que...</ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n        <ion-col align-self-center>Paramètres du compte</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n</ion-menu>'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\components\offline-menu\offline-menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OfflineMenuComponent);
    return OfflineMenuComponent;
}());

//# sourceMappingURL=offline-menu.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuitarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the GuitarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuitarPage = /** @class */ (function () {
    function GuitarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GuitarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuitarPage');
    };
    GuitarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guitar',template:/*ion-inline-start:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\guitar\guitar.html"*/'<!--\n\n  Generated template for the GuitarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Guitar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\buckron\IonicProjects\WeAreMusicos\src\pages\guitar\guitar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], GuitarPage);
    return GuitarPage;
}());

//# sourceMappingURL=guitar.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map