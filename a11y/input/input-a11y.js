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
var USD_TO_JPY = 110.29;
var InputAccessibilityDemo = /** @class */ (function () {
    function InputAccessibilityDemo() {
        this.showPassword = false;
        this.commentMax = 200;
    }
    Object.defineProperty(InputAccessibilityDemo.prototype, "passwordType", {
        get: function () { return this.showPassword ? 'text' : 'password'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputAccessibilityDemo.prototype, "passwordToggleLabel", {
        get: function () { return this.showPassword ? 'Hide password' : 'Reveal password'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputAccessibilityDemo.prototype, "passwordToggleIcon", {
        get: function () { return this.showPassword ? 'visibility_off' : 'visibility'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputAccessibilityDemo.prototype, "jpy", {
        get: function () { return this.usd ? this.usd * USD_TO_JPY : this.usd; },
        set: function (value) { this.usd = value ? value / USD_TO_JPY : value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputAccessibilityDemo.prototype, "commentCount", {
        get: function () { return this.comment ? this.comment.length : 0; },
        enumerable: true,
        configurable: true
    });
    InputAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-a11y',
            templateUrl: 'input-a11y.html',
        })
    ], InputAccessibilityDemo);
    return InputAccessibilityDemo;
}());
exports.InputAccessibilityDemo = InputAccessibilityDemo;
//# sourceMappingURL=input-a11y.js.map