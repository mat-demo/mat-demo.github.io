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
var map_1 = require("rxjs/operators/map");
var PersonDetailDataSource = /** @class */ (function (_super) {
    __extends(PersonDetailDataSource, _super);
    function PersonDetailDataSource(_personDataSource) {
        var _this = _super.call(this) || this;
        _this._personDataSource = _personDataSource;
        return _this;
    }
    PersonDetailDataSource.prototype.connect = function () {
        return this._personDataSource.connect().pipe(map_1.map(function (data) {
            var rows = [];
            // Interweave a detail data object for each row data object that will be used for displaying
            // row details. Contains the row data.
            data.forEach(function (person) { return rows.push(person, { detailRow: true, data: person }); });
            return rows;
        }));
    };
    PersonDetailDataSource.prototype.disconnect = function () {
        // No-op
    };
    return PersonDetailDataSource;
}(collections_1.DataSource));
exports.PersonDetailDataSource = PersonDetailDataSource;
//# sourceMappingURL=person-detail-data-source.js.map