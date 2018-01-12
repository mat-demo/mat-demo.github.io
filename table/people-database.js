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
var names_1 = require("../dataset/names");
var colors_1 = require("../dataset/colors");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
exports.LATEST_ID = 0;
var PeopleDatabase = /** @class */ (function () {
    function PeopleDatabase() {
        this.dataChange = new BehaviorSubject_1.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(PeopleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    PeopleDatabase.prototype.initialize = function () {
        exports.LATEST_ID = 0;
        this.dataChange.next([]);
        for (var i = 0; i < 100; i++) {
            this.addPerson();
        }
    };
    PeopleDatabase.prototype.shuffle = function (changeReferences) {
        var copiedData = this.data.slice();
        for (var i = copiedData.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [copiedData[j], copiedData[i - 1]], copiedData[i - 1] = _a[0], copiedData[j] = _a[1];
        }
        if (changeReferences) {
            copiedData = copiedData.map(function (userData) {
                return {
                    id: userData.id,
                    name: userData.name,
                    progress: userData.progress,
                    color: userData.color
                };
            });
        }
        this.dataChange.next(copiedData);
        var _a;
    };
    PeopleDatabase.prototype.addPerson = function () {
        var name = names_1.NAMES[Math.round(Math.random() * (names_1.NAMES.length - 1))] + ' ' +
            names_1.NAMES[Math.round(Math.random() * (names_1.NAMES.length - 1))].charAt(0) + '.';
        var copiedData = this.data.slice();
        copiedData.push({
            id: (++exports.LATEST_ID).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: colors_1.COLORS[Math.round(Math.random() * (colors_1.COLORS.length - 1))]
        });
        this.dataChange.next(copiedData);
    };
    PeopleDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PeopleDatabase);
    return PeopleDatabase;
}());
exports.PeopleDatabase = PeopleDatabase;
//# sourceMappingURL=people-database.js.map