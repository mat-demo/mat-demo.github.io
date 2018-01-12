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
var SelectAccessibilityDemo = /** @class */ (function () {
    function SelectAccessibilityDemo() {
        this.colors = [
            { value: 'red', label: 'Red' },
            { value: 'green', label: 'Green' },
            { value: 'blue', label: 'Blue' },
            { value: 'cyan', label: 'Cyan' },
            { value: 'magenta', label: 'Magenta' },
            { value: 'yellow', label: 'Yellow' },
            { value: 'black', label: 'Black' },
        ];
        this.toppings = [
            { value: 'pepperoni', label: 'Pepperoni' },
            { value: 'mushrooms', label: 'Mushrooms' },
            { value: 'onions', label: 'Onions' },
            { value: 'sausage', label: 'Sausage' },
            { value: 'bacon', label: 'Bacon' },
            { value: 'cheese', label: 'Cheese' },
            { value: 'olives', label: 'Olives' },
            { value: 'peppers', label: 'Peppers' },
            { value: 'pineapple', label: 'Pineapple' },
            { value: 'spinach', label: 'Spinach' },
        ];
        this.pokemon = [
            {
                label: 'Grass',
                pokemon: [
                    { value: 'bulbasaur', label: 'Bulbasaur' },
                    { value: 'oddish', label: 'Oddish' },
                    { value: 'bellsprout', label: 'Bellsprout' }
                ]
            },
            {
                label: 'Water',
                pokemon: [
                    { value: 'squirtle', label: 'Squirtle' },
                    { value: 'psyduck', label: 'Psyduck' },
                    { value: 'horsea', label: 'Horsea' }
                ]
            },
            {
                label: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander', label: 'Charmander' },
                    { value: 'vulpix', label: 'Vulpix' },
                    { value: 'flareon', label: 'Flareon' }
                ]
            },
            {
                label: 'Psychic',
                pokemon: [
                    { value: 'mew', label: 'Mew' },
                    { value: 'mewtwo', label: 'Mewtwo' }
                ]
            }
        ];
    }
    SelectAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-a11y',
            templateUrl: 'select-a11y.html',
            styleUrls: ['select-a11y.css'],
        })
    ], SelectAccessibilityDemo);
    return SelectAccessibilityDemo;
}());
exports.SelectAccessibilityDemo = SelectAccessibilityDemo;
//# sourceMappingURL=select-a11y.js.map