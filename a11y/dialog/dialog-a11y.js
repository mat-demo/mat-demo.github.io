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
var DialogAccessibilityDemo = /** @class */ (function () {
    function DialogAccessibilityDemo(dialog) {
        this.dialog = dialog;
        this.fruitSelectedOption = '';
    }
    DialogAccessibilityDemo.prototype.openFruitDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogFruitExampleDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.fruitSelectedOption = result;
        });
    };
    DialogAccessibilityDemo.prototype.openWelcomeDialog = function () {
        this.dialog.open(DialogWelcomeExampleDialog);
    };
    DialogAccessibilityDemo.prototype.openNeptuneDialog = function () {
        this.dialog.open(DialogNeptuneExampleDialog);
    };
    DialogAccessibilityDemo.prototype.openAddressDialog = function () {
        this.dialog.open(DialogAddressFormDialog);
    };
    DialogAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-a11y',
            templateUrl: 'dialog-a11y.html',
            styleUrls: ['dialog-a11y.css'],
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], DialogAccessibilityDemo);
    return DialogAccessibilityDemo;
}());
exports.DialogAccessibilityDemo = DialogAccessibilityDemo;
var DialogFruitExampleDialog = /** @class */ (function () {
    function DialogFruitExampleDialog() {
    }
    DialogFruitExampleDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-fruit-a11y',
            templateUrl: 'dialog-fruit-a11y.html'
        })
    ], DialogFruitExampleDialog);
    return DialogFruitExampleDialog;
}());
exports.DialogFruitExampleDialog = DialogFruitExampleDialog;
var DialogWelcomeExampleDialog = /** @class */ (function () {
    function DialogWelcomeExampleDialog() {
    }
    DialogWelcomeExampleDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-welcome-a11y',
            templateUrl: 'dialog-welcome-a11y.html'
        })
    ], DialogWelcomeExampleDialog);
    return DialogWelcomeExampleDialog;
}());
exports.DialogWelcomeExampleDialog = DialogWelcomeExampleDialog;
var DialogNeptuneExampleDialog = /** @class */ (function () {
    function DialogNeptuneExampleDialog(dialog) {
        this.dialog = dialog;
    }
    DialogNeptuneExampleDialog.prototype.showInStackedDialog = function () {
        this.dialog.open(DialogNeptuneIFrameDialog);
    };
    DialogNeptuneExampleDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-neptune-a11y-dialog',
            templateUrl: './dialog-neptune-a11y.html'
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], DialogNeptuneExampleDialog);
    return DialogNeptuneExampleDialog;
}());
exports.DialogNeptuneExampleDialog = DialogNeptuneExampleDialog;
var DialogNeptuneIFrameDialog = /** @class */ (function () {
    function DialogNeptuneIFrameDialog() {
    }
    DialogNeptuneIFrameDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-neptune-iframe-dialog',
            styles: [
                "iframe {\n      width: 800px;\n    }"
            ],
            templateUrl: './dialog-neptune-iframe-a11y.html'
        })
    ], DialogNeptuneIFrameDialog);
    return DialogNeptuneIFrameDialog;
}());
exports.DialogNeptuneIFrameDialog = DialogNeptuneIFrameDialog;
var DialogAddressFormDialog = /** @class */ (function () {
    function DialogAddressFormDialog() {
    }
    DialogAddressFormDialog = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-address-form-a11y',
            templateUrl: 'dialog-address-form-a11y.html'
        })
    ], DialogAddressFormDialog);
    return DialogAddressFormDialog;
}());
exports.DialogAddressFormDialog = DialogAddressFormDialog;
//# sourceMappingURL=dialog-a11y.js.map