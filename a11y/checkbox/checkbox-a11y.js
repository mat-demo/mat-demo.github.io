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
var CheckboxAccessibilityDemo = /** @class */ (function () {
    function CheckboxAccessibilityDemo() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular', completed: false }
                ]
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false }
                ]
            }
        ];
    }
    CheckboxAccessibilityDemo.prototype.allComplete = function (task) {
        var subtasks = task.subtasks;
        if (!subtasks) {
            return false;
        }
        return subtasks.every(function (t) { return t.completed; });
    };
    CheckboxAccessibilityDemo.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    CheckboxAccessibilityDemo.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    CheckboxAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkbox-a11y',
            templateUrl: 'checkbox-a11y.html',
            styleUrls: ['checkbox-a11y.css'],
        })
    ], CheckboxAccessibilityDemo);
    return CheckboxAccessibilityDemo;
}());
exports.CheckboxAccessibilityDemo = CheckboxAccessibilityDemo;
//# sourceMappingURL=checkbox-a11y.js.map