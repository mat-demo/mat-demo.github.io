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
var layout_1 = require("@angular/cdk/layout");
var ScreenTypeDemo = /** @class */ (function () {
    function ScreenTypeDemo(mqm) {
        this.mqm = mqm;
        this.isHandset = this.mqm.observe([layout_1.Breakpoints.HandsetLandscape,
            layout_1.Breakpoints.HandsetPortrait]);
        this.isTablet = this.mqm.observe(layout_1.Breakpoints.Tablet);
        this.isWeb = this.mqm.observe([layout_1.Breakpoints.WebLandscape, layout_1.Breakpoints.WebPortrait]);
        this.isPortrait = this.mqm.observe('(orientation: portrait)');
        this.isLandscape = this.mqm.observe('(orientation: landscape)');
    }
    ScreenTypeDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'screen-type',
            templateUrl: 'screen-type-demo.html',
            styleUrls: ['screen-type-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [layout_1.BreakpointObserver])
    ], ScreenTypeDemo);
    return ScreenTypeDemo;
}());
exports.ScreenTypeDemo = ScreenTypeDemo;
//# sourceMappingURL=screen-type-demo.js.map