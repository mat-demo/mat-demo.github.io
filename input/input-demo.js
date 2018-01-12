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
var forms_1 = require("@angular/forms");
var max = 5;
var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var InputDemo = /** @class */ (function () {
    function InputDemo() {
        var _this = this;
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.placeholderTestControl = new forms_1.FormControl('', forms_1.Validators.required);
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new forms_1.FormControl('hello', forms_1.Validators.required);
        this.emailFormControl = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(EMAIL_REGEX)]);
        this.delayedFormControl = new forms_1.FormControl('');
        this.model = 'hello';
        this.customErrorStateMatcher = {
            isErrorState: function (control) {
                if (control) {
                    var hasInteraction = control.dirty || control.touched;
                    var isInvalid = control.invalid;
                    return !!(hasInteraction && isInvalid);
                }
                return false;
            }
        };
        setTimeout(function () { return _this.delayedFormControl.setValue('hello'); }, 100);
    }
    InputDemo.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputDemo.prototype.togglePlaceholderTestValue = function () {
        this.placeholderTestControl.setValue(this.placeholderTestControl.value === '' ? 'Value' : '');
    };
    InputDemo.prototype.togglePlaceholderTestTouched = function () {
        this.placeholderTestControl.touched ?
            this.placeholderTestControl.markAsUntouched() :
            this.placeholderTestControl.markAsTouched();
    };
    InputDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'input-demo',
            templateUrl: 'input-demo.html',
            styleUrls: ['input-demo.css'],
        }),
        __metadata("design:paramtypes", [])
    ], InputDemo);
    return InputDemo;
}());
exports.InputDemo = InputDemo;
//# sourceMappingURL=input-demo.js.map