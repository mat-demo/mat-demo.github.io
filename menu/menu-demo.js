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
var MenuDemo = /** @class */ (function () {
    function MenuDemo() {
        this.selected = '';
        this.items = [
            { text: 'Refresh' },
            { text: 'Settings' },
            { text: 'Help', disabled: true },
            { text: 'Sign Out' }
        ];
        this.iconItems = [
            { text: 'Redial', icon: 'dialpad' },
            { text: 'Check voicemail', icon: 'voicemail', disabled: true },
            { text: 'Disable alerts', icon: 'notifications_off' }
        ];
    }
    MenuDemo.prototype.select = function (text) { this.selected = text; };
    MenuDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu-demo',
            templateUrl: 'menu-demo.html',
            styleUrls: ['menu-demo.css'],
        })
    ], MenuDemo);
    return MenuDemo;
}());
exports.MenuDemo = MenuDemo;
//# sourceMappingURL=menu-demo.js.map