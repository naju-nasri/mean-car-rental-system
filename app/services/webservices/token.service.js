"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("angular2-cookie/core");
var TokenService = (function () {
    function TokenService(cookieService) {
        this.cookieService = cookieService;
    }
    TokenService.prototype.save = function (username, role) {
        this.cookieService.put("userinfo", username);
        this.cookieService.put("role", role);
    };
    TokenService.prototype.get = function () {
        return this.cookieService.getAll();
    };
    TokenService.prototype.remove = function () {
        this.cookieService.removeAll();
    };
    return TokenService;
}());
TokenService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map