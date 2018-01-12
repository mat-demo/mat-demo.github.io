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
var element_data_1 = require("../element-data");
var CustomTableDemo = /** @class */ (function () {
    function CustomTableDemo() {
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        this.simpleTableDataSource = new material_1.MatTableDataSource(element_data_1.ELEMENT_DATA);
        this.wrapperTableDataSource = new material_1.MatTableDataSource(element_data_1.ELEMENT_DATA);
        this.getWeight = function (data) { return '~' + data.weight; };
    }
    CustomTableDemo.prototype.ngAfterViewInit = function () {
        this.simpleTableDataSource.sort = this.simpleTableSort;
        this.wrapperTableDataSource.sort = this.wrapperTableSort;
    };
    __decorate([
        core_1.ViewChild('simpleTableSort'),
        __metadata("design:type", material_1.MatSort)
    ], CustomTableDemo.prototype, "simpleTableSort", void 0);
    __decorate([
        core_1.ViewChild('wrapperTableSort'),
        __metadata("design:type", material_1.MatSort)
    ], CustomTableDemo.prototype, "wrapperTableSort", void 0);
    CustomTableDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'custom-table.html',
            styleUrls: ['custom-table.css'],
        })
    ], CustomTableDemo);
    return CustomTableDemo;
}());
exports.CustomTableDemo = CustomTableDemo;
//# sourceMappingURL=custom-table.js.map