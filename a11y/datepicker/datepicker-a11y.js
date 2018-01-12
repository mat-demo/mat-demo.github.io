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
var DatepickerAccessibilityDemo = /** @class */ (function () {
    function DatepickerAccessibilityDemo() {
        this.maxBirthday = new Date();
        this.paymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
        this.minPaymentDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
        this.minTripDate = new Date();
        this.maxTripDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        this.startTripDate = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000);
        this.minAppointmentDate = new Date();
        this.maxAppointmentDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
        this.weekdaysOnly = function (d) { return d.getDay() != 0 && d.getDay() != 6; };
    }
    DatepickerAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datepicker-a11y',
            templateUrl: 'datepicker-a11y.html',
            styleUrls: ['datepicker-a11y.css'],
        })
    ], DatepickerAccessibilityDemo);
    return DatepickerAccessibilityDemo;
}());
exports.DatepickerAccessibilityDemo = DatepickerAccessibilityDemo;
//# sourceMappingURL=datepicker-a11y.js.map