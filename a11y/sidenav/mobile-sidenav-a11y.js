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
var layout_1 = require("@angular/cdk/layout");
var core_1 = require("@angular/core");
var SidenavMobileAccessibilityDemo = /** @class */ (function () {
    function SidenavMobileAccessibilityDemo(changeDetectorRef, media) {
        this.filler = Array(20).fill(0);
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavMobileAccessibilityDemo.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavMobileAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mobile-sidenav-a11y',
            templateUrl: 'mobile-sidenav-a11y.html',
            styleUrls: ['shared.css', 'mobile-sidenav-a11y.css'],
            host: { 'class': 'a11y-demo-sidenav-app' },
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, layout_1.MediaMatcher])
    ], SidenavMobileAccessibilityDemo);
    return SidenavMobileAccessibilityDemo;
}());
exports.SidenavMobileAccessibilityDemo = SidenavMobileAccessibilityDemo;
//# sourceMappingURL=mobile-sidenav-a11y.js.map