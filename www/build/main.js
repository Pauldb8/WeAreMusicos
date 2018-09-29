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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(201);
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
            selector: 'page-profile',template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar hideBackButton >\n\n      <button ion-button menuToggle>\n        <ion-icon name="more"></ion-icon>\n      </button>\n      <ion-searchbar\n        [(ngModel)]="myInput"\n        [showCancelButton]="shouldShowCancel"\n        (ionCancel)="onCancel($event)">\n      </ion-searchbar>\n      <!-- (ionInput)="onInput($event)" -->\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-style">\n  <ion-row margin-bottom>\n    <ion-col col-12 no-padding padding-left>\n      <ion-item no-lines class="no-borders">\n        <ion-avatar item-start>\n            <img src="../../assets/imgs/allan_profile.jpg"/>\n        </ion-avatar>\n        <h1>Allan François</h1>\n        <p>allan.françois@wearemusicos.com</p>\n        <ion-badge>WAM PARTNER ♦</ion-badge>\n        <ion-badge>Recording Studio</ion-badge>\n        <br />\n        <ion-badge color="primary">Guitariste</ion-badge>\n        <ion-badge>...</ion-badge>\n      </ion-item>\n    </ion-col>\n    <ion-col col-12 no-padding>\n      <p text-center>Ceci est une introduction éditable.</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class="wam_menu" margin-bottom>\n    <ion-col text-center>\n      <ion-icon name="create" color="primary" ></ion-icon><br>\n      <p>Publier</p>\n    </ion-col>\n    <ion-col text-center>\n      <ion-icon name="person"></ion-icon><br>\n      <p>Modifier le profil</p>\n    </ion-col>\n    <ion-col text-center>\n      <ion-icon name="list"></ion-icon><br>\n      <p>Historique personnel</p>\n    </ion-col>\n    <ion-col text-center>\n    <ion-icon name="musical-notes"></ion-icon><br>\n      <p>Playlists</p>\n    </ion-col>\n    <ion-col text-center>\n      <ion-icon name="more"></ion-icon><br>\n        <p>Plus</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class="bg-style" margin-left>\n      Toutes les photos\n    </ion-col>\n  </ion-row>\n  <ion-scroll scrollX="true" >\n      <ion-col>\n        <img src="../../assets/imgs/photo.jpg">\n      </ion-col>\n      <ion-col>\n        <img src="../../assets/imgs/photo1.png">\n      </ion-col>\n      <ion-col>\n        <img src="../../assets/imgs/photo2.jpg">\n      </ion-col>\n      <ion-col>\n        <img src="../../assets/imgs/photo3.jpg">\n      </ion-col>\n      <ion-col>\n        <img src="../../assets/imgs/photo4.jpg">\n      </ion-col>\n  </ion-scroll>\n  <ion-row margin-top>\n    <ion-col class="bg-style" margin-left>\n      Publications\n    </ion-col>\n  </ion-row>\n  <ion-row class="post">\n    <ion-col col-12 no-padding padding-left>\n      <ion-item no-lines class="no-borders">\n        <ion-avatar item-start no-margin>\n            <img src="../../assets/imgs/allan_profile.jpg"/>\n        </ion-avatar>\n        <ion-col no-padding>\n          Allan François\n        </ion-col>\n        <ion-col class="light">\n          17:53 08/08/201\n        </ion-col>\n        <ion-col class="light">\n          <ion-icon name="globe"></ion-icon>\n          La Hulpe, BE\n        </ion-col>\n        <h2>Les frelons se repèrent dans leurs déplacements grâce à la lumière de la lune</h2>\n        <ion-col class="light"><ion-icon name="thumbs-up"></ion-icon> 43 565 889</ion-col>\n        <ion-col class="light">Commenter</ion-col>\n        <ion-col class="light">Partager</ion-col>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="post" no-margin *ngFor="let comment of comments; let last = last;">\n      <ion-col no-margin no-padding padding-top>\n        <ion-row class="comment">\n            <ion-col>\n            Anonymous\n            <span class="light"> | 18:29 09/08/2019</span>\n          </ion-col>\n        </ion-row>\n        <ion-row class="comment">\n          <ion-col>\n            {{ comment.comment }}\n          </ion-col>\n        </ion-row>\n        <ion-row class="comment" justify-content-end>\n          <ion-col>\n            <ion-icon name="thumbs-up"></ion-icon> 3\n          </ion-col>\n          <ion-col>Commenter</ion-col>\n          <ion-col>Partager</ion-col>\n        </ion-row>\n        <ion-row class="comment" margin-top margin-bottom *ngIf="last">\n          <ion-col text-right>\n            <form (ngSubmit)="saveComment()">\n              <ion-input placeholder="Commenter" type="text" [(ngModel)]="newcomment.comment" name="comment">Commenter</ion-input>\n              <ion-col>\n                <button big ion-button clear (click)="chooseFile()"><ion-icon name="camera"></ion-icon></button>\n              </ion-col>\n              <ion-col>\n                <button small ion-button type="submit" clear >Send</button> \n              </ion-col>\n            </form>  \n          </ion-col>       \n        </ion-row>\n      </ion-col>\n    </ion-row> \n</ion-content>\n'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(202);
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
            selector: 'page-sign-in',template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/sign-in/sign-in.html"*/'<ion-header no-border>\n  <ion-navbar color="transparent"> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n      <p text-center> \n        <img src="../../assets/imgs/wamlogo_black.svg" height="75" style="fill: red;" > \n      </p> \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col no-padding>\n      <h1 text-center>\n        WE ARE MUSICOS<br> \n        <span>Listen, develop, share, promote</span>\n      </h1>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row class="fill">\n      <ion-col no-padding>\n        <h2 text-center>\n          <br>\n          Découvrez vos nouveaux outils<br>\n          pour booster vos projets musicaux.\n        </h2>\n        <button ion-button full (click)="loginWithFB()" color="facebook" icon-start>\n          <ion-icon name="logo-facebook" style="color:white;" ></ion-icon> \n          Se connecter avec Facebook \n        </button>\n        <br>\n        <button ion-button full color="email" icon-start>\n          <ion-icon name="mail" style="color: white;"></ion-icon> \n          Se connecter avec un email\n        </button>\n        <br>\n        <div class="myflexcontainer">\n          <div class="myflex">\n            <hr class="small" float-left>\n            <p text-center style="color:white;" float-left>Ou</p>\n            <hr class="small">   \n          </div>\n        </div>\n        <br>\n        <button ion-button color="dark" full icon-start>\n          <ion-icon name="create" style="color: white;"></ion-icon>\n          Créez votre compte\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row style="height: 150px;">\n      <ion-col no-padding align-self-center>\n        <ion-card *ngIf="userData" no-margin> \n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{ userData.picture }}">\n            </ion-avatar>\n            <h2> {{ userData.username }} </h2>\n            <p>{{ userData.email }}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/sign-in/sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(281);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button [menuToggle]="activeMenu">\n      <ion-icon name="menu" color="white"></ion-icon>\n    </button>\n    <ion-title text-center>\n      WE ARE MUSICOS\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="white">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<offline-menu></offline-menu>\n\n<ion-content>\n  <ion-grid class="search" no-padding hidden>\n    <ion-row padding>\n      <ion-col col-12>\n        <h2><ion-icon name="search"></ion-icon> Rechercher</h2>\n        <p>Destination / Type de service / <br>Nom de l\'établissement :</p>\n        <ion-list>\n          <ion-item> \n            <ion-input type="text" placeholder="Rechercher" no-margin>\n            </ion-input>\n            <button ion-button clear color="dark" type="button" item-right (click)="managePassword()"> <ion-icon big name="locate"> </ion-icon> </button>\n          </ion-item>\n        </ion-list>\n        <ion-list>\n          <ion-item>\n            <ion-label>Catégorie</ion-label>\n            <ion-select>\n              <ion-option value="all">Toutes</ion-option>\n              <ion-option value="n64">Guitare</ion-option>\n              <ion-option value="ps">Basse</ion-option>\n              <ion-option value="genesis">Batterie</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <ion-row>\n          <ion-col col-6 no-padding padding-right>\n            <ion-input type="text" placeholder="Code postal"></ion-input>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <ion-range>\n              <span range-left>0Km</span>\n              <span range-right>100Km</span>\n            </ion-range>\n          </ion-col>         \n        </ion-row>\n        <ion-row radio-group margin-bottom>\n          <ion-col col-6 no-margin no-padding padding-right>\n            <ion-item>\n              <ion-label class="label" >Loisir</ion-label>\n              <ion-radio checked="true" value="loisir"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 no-margin no-padding> \n            <ion-item>\n              <ion-label>Professionnel</ion-label>\n              <ion-radio value="pro"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <button ion-button color="red" class="center" full (click)="openProfile()">Rechercher</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 no-padding no-margin>\n        <img src="../../assets/imgs/map.png">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class="search">\n    <ion-col>\n      <p text-center>\n        <img src="../../assets/imgs/wamlogo.svg" height="33" (click)="openProfile()">\n      </p>\n      <p text-center>\n        Bienvenue à la communauté, ici vous trouverez lorem ipsum. Dolore sit amer como estas margarita\n        Avec ceci cela, comme ci comme ça, ton père ta mère, ma fille.<br>\n        <br>\n        <a (click)="login()">Se connecter</a>\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row padding-top>\n    <ion-col col-12 padding-left>\n      <span class="hastag" margin-right>\n        <ion-icon name="globe"></ion-icon>\n        Offres privées\n      </span>\n      <span class="hastag" margin-right>\n        <ion-icon name="add"></ion-icon>\n        Proposer une offre\n      </span>\n      <span class="hastag">\n        <ion-icon name="funnel"></ion-icon>\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-card *ngFor="let service of services">\n    <ion-row>\n      <ion-col col-6 no-padding>\n        <img src="http://debuck.info:3000/{{ service.image }}">\n      </ion-col>\n      <ion-col col-6>\n        <h2>{{ service.title }}</h2>\n        <h3>Durée 3 mois</h3>\n        <p>\n          {{ service.description | slice:0:80 }}...\n        </p>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <p text-right float-right>1254 avis</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <!--ion-card>\n    <ion-row>\n      <ion-col col-6 no-padding>\n        <img src="../../assets/imgs/son.png">\n      </ion-col>\n      <ion-col col-6>\n        <h2>Formation ingénieur du son</h2>\n        <h3>Durée: 3 mois</h3>\n        <p>\n          Il reste 3 places<br />\n          5km, La Hulpe\n        </p>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <ion-icon name="star-outline"></ion-icon>\n        <p text-right float-right>1254 avis</p>\n        \n      </ion-col>\n    </ion-row>\n  </ion-card-->\n</ion-content>\n\n<ion-footer>\n  <footer-toolbar [page]="home"></footer-toolbar> \n</ion-footer>\n'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__node_modules_angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_in_sign_in__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_footer_toolbar_footer_toolbar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_offline_menu_offline_menu__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_category_category__ = __webpack_require__(281);
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

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__ = __webpack_require__(104);
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
            selector: 'footer-toolbar',template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/components/footer-toolbar/footer-toolbar.html"*/'<!-- Generated template for the FooterToolbarComponent component -->\n<ion-toolbar color="white" class="toolbar-footer" no-padding> \n  <ion-buttons>\n    <button ion-button class="text-on-bottom active" [class.active]="page == \'home\'">\n      <img src="assets/imgs/wamlogo_dark_grey.svg" height="24">   \n      Accueil\n    </button>\n    <button ion-button class="text-on-bottom" [class.active]="page == \'login\'" (click)="login()">\n      <ion-icon name="person"></ion-icon>\n      Se connecter\n    </button>\n    <button ion-button class="text-on-bottom" [class.active]="page == \'projects\'"> \n      <ion-icon name="filing"></ion-icon>\n      Projet\n    </button>\n    <button ion-button class="text-on-bottom" [class.active]="page == \'notifications\'">\n      <ion-icon name="globe"></ion-icon>\n      Notifications\n    </button>\n    <button ion-button class="text-on-bottom" [class.active]="page == \'more\'">\n      <ion-icon name="more"></ion-icon>\n      Plus\n    </button>\n  </ion-buttons>\n</ion-toolbar>'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/components/footer-toolbar/footer-toolbar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */]])
    ], FooterToolbarComponent);
    return FooterToolbarComponent;
}());

//# sourceMappingURL=footer-toolbar.js.map

/***/ }),

/***/ 280:
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
            selector: 'offline-menu',template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/components/offline-menu/offline-menu.html"*/'<ion-nav #offline_menu [root]="rootPage"></ion-nav>\n\n<ion-menu [content]="offline_menu">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title text-center>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/wamlogo_dark_grey.svg"></ion-col>\n        <ion-col align-self-center>Actualités</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/profil.svg"></ion-col>\n        <ion-col align-self-center>Profil</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n        <ion-col align-self-center>Publier</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/messagerie.svg"></ion-col>\n        <ion-col align-self-center>Messagerie</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/service.svg"></ion-col>\n        <ion-col align-self-center>Proposer des services</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/vendre.svg"></ion-col>\n        <ion-col align-self-center>Vendre du matons</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n        <ion-col align-self-center>Question à la communauté</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/calendrier.svg"></ion-col>\n        <ion-col align-self-center>Événements de la communauté</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/musique.svg"></ion-col>\n        <ion-col align-self-center>Musique</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/activite.svg"></ion-col>\n        <ion-col align-self-center>Accéder à mes activités</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/profile_as.svg"></ion-col>\n        <ion-col align-self-center>Voir son profil en tant que...</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n        <ion-col align-self-center>Paramètres du compte</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n</ion-menu>'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/components/offline-menu/offline-menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OfflineMenuComponent);
    return OfflineMenuComponent;
}());

//# sourceMappingURL=offline-menu.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
            selector: 'page-category',template:/*ion-inline-start:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>categorie guitare</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-grid no-padding>\n\n\n        <h3>Catégories</h3>\n\n      \n        <ion-row>\n            <ion-col align-self-center>Guitare</ion-col>\n          <ion-col col-auto align-self-center>\n            <ion-avatar item-start>  \n              <img src="/assets/imgs/studio.png"></ion-avatar></ion-col>\n            \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Basse</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/profil.svg"></ion-col>\n          \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Batterie</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n          \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Piano</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/messagerie.svg"></ion-col>\n         \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Synthétiseur</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/service.svg"></ion-col>\n         \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Clavier</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/vendre.svg"></ion-col>\n          \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Instruments à vent</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/publier.svg"></ion-col>\n          \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Sonorisation</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/calendrier.svg"></ion-col>\n         \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Pro audio</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/musique.svg"></ion-col>\n         \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>DJ</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/activite.svg"></ion-col>\n         \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Informatique</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/profile_as.svg"></ion-col>\n         \n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Éclairage</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Autres instruments</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Librairie</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n        </ion-row>\n        <ion-row>\n            <ion-col align-self-center>Accessoires</ion-col>\n          <ion-col col-auto align-self-center><img src="/assets/imgs/parametres.svg"></ion-col>\n\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/wamhouse/Desktop/AppWam/Ionic/WeAreMusicos/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map