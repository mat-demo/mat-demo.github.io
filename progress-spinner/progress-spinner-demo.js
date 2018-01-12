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
var ProgressSpinnerDemo = /** @class */ (function () {
    function ProgressSpinnerDemo() {
        this.progressValue = 60;
        this.color = 'primary';
        this.isDeterminate = true;
    }
    ProgressSpinnerDemo.prototype.step = function (val) {
        this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
    };
    ProgressSpinnerDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'progress-spinner-demo',
            templateUrl: 'progress-spinner-demo.html',
            styleUrls: ['progress-spinner-demo.css'],
        })
    ], ProgressSpinnerDemo);
    return ProgressSpinnerDemo;
}());
exports.ProgressSpinnerDemo = ProgressSpinnerDemo;
//# sourceMappingURL=progress-spinner-demo.js.map