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
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var IconDemo = /** @class */ (function () {
    function IconDemo(iconRegistry, sanitizer) {
        iconRegistry
            .addSvgIcon('thumb-up', sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/thumbup-icon.svg'))
            .addSvgIconSetInNamespace('core', sanitizer.bypassSecurityTrustResourceUrl('/icon/assets/core-icon-set.svg'))
            .registerFontClassAlias('fontawesome', 'fa');
    }
    IconDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mat-icon-demo',
            templateUrl: 'icon-demo.html',
            styleUrls: ['icon-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [material_1.MatIconRegistry, platform_browser_1.DomSanitizer])
    ], IconDemo);
    return IconDemo;
}());
exports.IconDemo = IconDemo;
//# sourceMappingURL=icon-demo.js.map