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
var StepperDemo = /** @class */ (function () {
    function StepperDemo(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isNonLinear = false;
        this.isNonEditable = false;
        this.steps = [
            { label: 'Confirm your name', content: 'Last name, First name.' },
            { label: 'Confirm your contact information', content: '123-456-7890' },
            { label: 'Confirm your address', content: '1600 Amphitheater Pkwy MTV' },
            { label: 'You are now done', content: 'Finished!' }
        ];
    }
    Object.defineProperty(StepperDemo.prototype, "formArray", {
        /** Returns a FormArray with the name 'formArray'. */
        get: function () { return this.formGroup.get('formArray'); },
        enumerable: true,
        configurable: true
    });
    StepperDemo.prototype.ngOnInit = function () {
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    firstNameFormCtrl: ['', forms_1.Validators.required],
                    lastNameFormCtrl: ['', forms_1.Validators.required],
                }),
                this._formBuilder.group({
                    emailFormCtrl: ['', forms_1.Validators.email]
                }),
            ])
        });
        this.nameFormGroup = this._formBuilder.group({
            firstNameCtrl: ['', forms_1.Validators.required],
            lastNameCtrl: ['', forms_1.Validators.required],
        });
        this.emailFormGroup = this._formBuilder.group({
            emailCtrl: ['', forms_1.Validators.email]
        });
    };
    StepperDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stepper-demo',
            templateUrl: 'stepper-demo.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], StepperDemo);
    return StepperDemo;
}());
exports.StepperDemo = StepperDemo;
//# sourceMappingURL=stepper-demo.js.map