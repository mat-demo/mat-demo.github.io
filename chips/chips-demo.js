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
var keycodes_1 = require("@angular/cdk/keycodes");
var core_1 = require("@angular/core");
var ChipsDemo = /** @class */ (function () {
    function ChipsDemo() {
        this.tabIndex = 0;
        this.visible = true;
        this.color = '';
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.message = '';
        // Enter, comma, semi-colon
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA, 186];
        this.selectedPeople = null;
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
        this.selectedColors = ['Primary', 'Warn'];
        this.selectedColor = 'Accent';
    }
    ChipsDemo.prototype.displayMessage = function (message) {
        this.message = message;
    };
    ChipsDemo.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our person
        if ((value || '').trim()) {
            this.people.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsDemo.prototype.remove = function (person) {
        var index = this.people.indexOf(person);
        if (index >= 0) {
            this.people.splice(index, 1);
        }
    };
    ChipsDemo.prototype.removeColor = function (color) {
        var index = this.availableColors.indexOf(color);
        if (index >= 0) {
            this.availableColors.splice(index, 1);
        }
        index = this.selectedColors.indexOf(color.name);
        if (index >= 0) {
            this.selectedColors.splice(index, 1);
        }
    };
    ChipsDemo.prototype.toggleVisible = function () {
        this.visible = false;
    };
    ChipsDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chips-demo',
            templateUrl: 'chips-demo.html',
            styleUrls: ['chips-demo.css']
        })
    ], ChipsDemo);
    return ChipsDemo;
}());
exports.ChipsDemo = ChipsDemo;
//# sourceMappingURL=chips-demo.js.map