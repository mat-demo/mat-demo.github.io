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
var SliderAccessibilityDemo = /** @class */ (function () {
    function SliderAccessibilityDemo() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }
    Object.defineProperty(SliderAccessibilityDemo.prototype, "swatchBackground", {
        get: function () {
            return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
        },
        enumerable: true,
        configurable: true
    });
    SliderAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'slider-a11y',
            templateUrl: 'slider-a11y.html',
            styleUrls: ['slider-a11y.css'],
        })
    ], SliderAccessibilityDemo);
    return SliderAccessibilityDemo;
}());
exports.SliderAccessibilityDemo = SliderAccessibilityDemo;
//# sourceMappingURL=slider-a11y.js.map