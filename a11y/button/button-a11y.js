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
var ButtonAccessibilityDemo = /** @class */ (function () {
    function ButtonAccessibilityDemo(snackBar) {
        this.snackBar = snackBar;
        this.counter = 0;
    }
    ButtonAccessibilityDemo.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', {
            duration: 2000,
        });
    };
    ButtonAccessibilityDemo.prototype.increase = function () {
        this.counter++;
        this.openSnackBar("Click counter is set to " + this.counter);
    };
    ButtonAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'button-a11y',
            templateUrl: 'button-a11y.html',
            styleUrls: ['button-a11y.css'],
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], ButtonAccessibilityDemo);
    return ButtonAccessibilityDemo;
}());
exports.ButtonAccessibilityDemo = ButtonAccessibilityDemo;
//# sourceMappingURL=button-a11y.js.map