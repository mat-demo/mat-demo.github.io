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
var GridListAccessibilityDemo = /** @class */ (function () {
    function GridListAccessibilityDemo() {
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
        this.tiles = [
            { text: 'Cappuccino', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Mocha', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Latte', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Iced coffee', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridListAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid-list-a11y',
            templateUrl: 'grid-list-a11y.html',
            styleUrls: ['grid-list-a11y.css'],
        })
    ], GridListAccessibilityDemo);
    return GridListAccessibilityDemo;
}());
exports.GridListAccessibilityDemo = GridListAccessibilityDemo;
//# sourceMappingURL=grid-list-a11y.js.map