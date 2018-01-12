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
var forms_1 = require("@angular/forms");
var DatepickerDemo = /** @class */ (function () {
    function DatepickerDemo() {
        var _this = this;
        this.dateFilter = function (date) { return date.getMonth() % 2 == 1 && date.getDate() % 2 == 0; };
        this.onDateInput = function (e) { return _this.lastDateInput = e.value; };
        this.onDateChange = function (e) { return _this.lastDateChange = e.value; };
        this.dateCtrl = new forms_1.FormControl();
    }
    DatepickerDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datepicker-demo',
            templateUrl: 'datepicker-demo.html',
            styleUrls: ['datepicker-demo.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        })
    ], DatepickerDemo);
    return DatepickerDemo;
}());
exports.DatepickerDemo = DatepickerDemo;
//# sourceMappingURL=datepicker-demo.js.map