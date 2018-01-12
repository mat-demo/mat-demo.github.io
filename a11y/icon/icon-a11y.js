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
var material_1 = require("@angular/material");
var IconAccessibilityDemo = /** @class */ (function () {
    function IconAccessibilityDemo(snackBar) {
        this.snackBar = snackBar;
    }
    IconAccessibilityDemo.prototype.deleteIcon = function () {
        this.snackBar.open('Item deleted', '', { duration: 2000 });
    };
    IconAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'icon-a11y',
            templateUrl: 'icon-a11y.html',
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], IconAccessibilityDemo);
    return IconAccessibilityDemo;
}());
exports.IconAccessibilityDemo = IconAccessibilityDemo;
//# sourceMappingURL=icon-a11y.js.map