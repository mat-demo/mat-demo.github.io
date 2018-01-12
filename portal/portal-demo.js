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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var portal_1 = require("@angular/cdk/portal");
var core_1 = require("@angular/core");
var PortalDemo = /** @class */ (function () {
    function PortalDemo() {
    }
    Object.defineProperty(PortalDemo.prototype, "programmingJoke", {
        get: function () {
            return this.templatePortals.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemo.prototype, "mathJoke", {
        get: function () {
            return this.templatePortals.last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemo.prototype, "scienceJoke", {
        get: function () {
            return new portal_1.ComponentPortal(ScienceJoke);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChildren(portal_1.CdkPortal),
        __metadata("design:type", core_1.QueryList)
    ], PortalDemo.prototype, "templatePortals", void 0);
    PortalDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'portal-demo',
            templateUrl: 'portal-demo.html',
            styleUrls: ['portal-demo.css'],
        })
    ], PortalDemo);
    return PortalDemo;
}());
exports.PortalDemo = PortalDemo;
var ScienceJoke = /** @class */ (function () {
    function ScienceJoke() {
    }
    ScienceJoke = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'science-joke',
            template: "<p> 100 kilopascals go into a bar. </p>"
        })
    ], ScienceJoke);
    return ScienceJoke;
}());
exports.ScienceJoke = ScienceJoke;
//# sourceMappingURL=portal-demo.js.map