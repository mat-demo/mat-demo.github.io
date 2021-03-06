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
var ProgressBarAccessibilityDemo = /** @class */ (function () {
    function ProgressBarAccessibilityDemo() {
        this.surveyProgress = 30;
        this.videoPlayValue = 20;
        this.videoBufferValue = 60;
    }
    ProgressBarAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'progress-bar-a11y',
            templateUrl: 'progress-bar-a11y.html',
        })
    ], ProgressBarAccessibilityDemo);
    return ProgressBarAccessibilityDemo;
}());
exports.ProgressBarAccessibilityDemo = ProgressBarAccessibilityDemo;
//# sourceMappingURL=progress-bar-a11y.js.map