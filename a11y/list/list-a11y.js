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
var ListAccessibilityDemo = /** @class */ (function () {
    function ListAccessibilityDemo() {
        this.items = [
            'Pepper',
            'Salt',
            'Paprika'
        ];
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/generated/images/bios/julie-ralph.jpg'
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/generated/images/bios/juleskremer.jpg'
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/generated/images/bios/jelbourn.jpg'
            }
        ];
        this.links = [
            { name: 'Inbox' },
            { name: 'Outbox' },
            { name: 'Spam' },
            { name: 'Trash' }
        ];
        this.folders = [
            { name: 'Imported', updated: 'Miles' },
            { name: 'Important', updated: 'Tina' },
            { name: 'Unread', updated: 'Jeremy' },
        ];
        this.notes = [
            { name: 'Update screenshots', updated: 'Kara' },
            { name: 'Install new application', updated: 'Andrew' },
        ];
    }
    ListAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-a11y',
            templateUrl: 'list-a11y.html',
            styleUrls: ['list-a11y.css']
        })
    ], ListAccessibilityDemo);
    return ListAccessibilityDemo;
}());
exports.ListAccessibilityDemo = ListAccessibilityDemo;
//# sourceMappingURL=list-a11y.js.map