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
var core_1 = require("@angular/core");
var snack_bar_1 = require("@angular/material/snack-bar");
var SidenavDualAccessibilityDemo = /** @class */ (function () {
    function SidenavDualAccessibilityDemo(_snackbar) {
        this._snackbar = _snackbar;
    }
    SidenavDualAccessibilityDemo.prototype.play = function (list) {
        this._snackbar.open("Playing \"" + list + "\"", '', { duration: 1000 });
    };
    SidenavDualAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dual-sidenav-a11y',
            templateUrl: 'dual-sidenav-a11y.html',
            styleUrls: ['shared.css', 'dual-sidenav-a11y.css'],
            host: { 'class': 'a11y-demo-sidenav-app' },
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [snack_bar_1.MatSnackBar])
    ], SidenavDualAccessibilityDemo);
    return SidenavDualAccessibilityDemo;
}());
exports.SidenavDualAccessibilityDemo = SidenavDualAccessibilityDemo;
//# sourceMappingURL=dual-sidenav-a11y.js.map