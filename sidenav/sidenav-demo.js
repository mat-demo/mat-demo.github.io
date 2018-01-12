"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SidenavDemo = /** @class */ (function () {
    function SidenavDemo() {
        this.isLaunched = false;
        this.fillerContent = Array(30);
        this.fixed = false;
        this.coverHeader = false;
        this.showHeader = false;
        this.showFooter = false;
        this.modeIndex = 0;
    }
    Object.defineProperty(SidenavDemo.prototype, "mode", {
        get: function () { return ['side', 'over', 'push'][this.modeIndex]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidenavDemo.prototype, "fixedTop", {
        get: function () { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidenavDemo.prototype, "fixedBottom", {
        get: function () { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; },
        enumerable: true,
        configurable: true
    });
    SidenavDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidenav-demo',
            templateUrl: 'sidenav-demo.html',
            styleUrls: ['sidenav-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        })
    ], SidenavDemo);
    return SidenavDemo;
}());
exports.SidenavDemo = SidenavDemo;
//# sourceMappingURL=sidenav-demo.js.map