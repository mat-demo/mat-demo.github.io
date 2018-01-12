"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = require("@angular/cdk/collections");
var merge_1 = require("rxjs/observable/merge");
var map_1 = require("rxjs/operators/map");
var PersonDataSource = /** @class */ (function (_super) {
    __extends(PersonDataSource, _super);
    function PersonDataSource(_peopleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._peopleDatabase = _peopleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        return _this;
    }
    PersonDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._paginator.page,
            this._sort.sortChange,
            this._peopleDatabase.dataChange
        ];
        return merge_1.merge.apply(void 0, displayDataChanges).pipe(map_1.map(function () {
            var data = _this.getSortedData();
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        }));
    };
    PersonDataSource.prototype.disconnect = function () {
        // No-op
    };
    /** Returns a sorted copy of the database data. */
    PersonDataSource.prototype.getSortedData = function () {
        var _this = this;
        var data = this._peopleDatabase.data.slice();
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return PersonDataSource;
}(collections_1.DataSource));
exports.PersonDataSource = PersonDataSource;
//# sourceMappingURL=person-data-source.js.map