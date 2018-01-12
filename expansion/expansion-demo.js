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
var ExpansionDemo = /** @class */ (function () {
    function ExpansionDemo() {
        this.displayMode = 'default';
        this.multi = false;
        this.hideToggle = false;
        this.disabled = false;
        this.showPanel3 = true;
    }
    ExpansionDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'expansion-demo',
            styleUrls: ['expansion-demo.css'],
            templateUrl: 'expansion-demo.html',
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        })
    ], ExpansionDemo);
    return ExpansionDemo;
}());
exports.ExpansionDemo = ExpansionDemo;
//# sourceMappingURL=expansion-demo.js.map