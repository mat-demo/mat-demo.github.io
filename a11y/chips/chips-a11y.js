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
var ChipsAccessibilityDemo = /** @class */ (function () {
    function ChipsAccessibilityDemo(snackBar) {
        this.snackBar = snackBar;
        this.visible = true;
        this.color = '';
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.message = '';
        this.people = [
            { name: 'Kara' },
            { name: 'Jeremy' },
            { name: 'Topher' },
            { name: 'Elad' },
            { name: 'Kristiyan' },
            { name: 'Paul' }
        ];
        this.availableColors = [
            { name: 'none', color: '' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsAccessibilityDemo.prototype.displayMessage = function (message) {
        this.message = message;
    };
    ChipsAccessibilityDemo.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our person
        if ((value || '').trim()) {
            var name_1 = value.trim();
            this.people.push({ name: name_1 });
            this.snackBar.open(name_1 + " added", '', { duration: 2000 });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsAccessibilityDemo.prototype.remove = function (person) {
        var index = this.people.indexOf(person);
        if (index >= 0) {
            this.people.splice(index, 1);
            this.snackBar.open(person.name + " deleted", '', { duration: 2000 });
        }
    };
    ChipsAccessibilityDemo.prototype.toggleVisible = function () {
        this.visible = false;
    };
    ChipsAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chips-a11y',
            templateUrl: 'chips-a11y.html',
            styleUrls: ['chips-a11y.css'],
        }),
        __metadata("design:paramtypes", [material_1.MatSnackBar])
    ], ChipsAccessibilityDemo);
    return ChipsAccessibilityDemo;
}());
exports.ChipsAccessibilityDemo = ChipsAccessibilityDemo;
//# sourceMappingURL=chips-a11y.js.map