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
var bidi_1 = require("@angular/cdk/bidi");
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var SnackBarDemo = /** @class */ (function () {
    function SnackBarDemo(snackBar, dir) {
        this.snackBar = snackBar;
        this.dir = dir;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 10000;
        this.addExtraClass = false;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    SnackBarDemo.prototype.open = function () {
        var config = new material_1.MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        config.panelClass = this.addExtraClass ? ['party'] : undefined;
        config.direction = this.dir.value;
        this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
    };
    SnackBarDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'snack-bar-demo',
            styleUrls: ['snack-bar-demo.css'],
            templateUrl: 'snack-bar-demo.html',
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar, bidi_1.Dir])
    ], SnackBarDemo);
    return SnackBarDemo;
}());
exports.SnackBarDemo = SnackBarDemo;
//# sourceMappingURL=snack-bar-demo.js.map