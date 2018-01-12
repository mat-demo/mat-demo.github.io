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
var TableHeaderDemo = /** @class */ (function () {
    function TableHeaderDemo() {
        this.shiftColumns = new core_1.EventEmitter();
        this.toggleColorColumn = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableHeaderDemo.prototype, "shiftColumns", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableHeaderDemo.prototype, "toggleColorColumn", void 0);
    TableHeaderDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-header-demo',
            templateUrl: 'table-header-demo.html',
            styleUrls: ['table-header-demo.css'],
        })
    ], TableHeaderDemo);
    return TableHeaderDemo;
}());
exports.TableHeaderDemo = TableHeaderDemo;
//# sourceMappingURL=table-header-demo.js.map