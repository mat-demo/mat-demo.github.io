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
var people_database_1 = require("./people-database");
var person_data_source_1 = require("./person-data-source");
var material_1 = require("@angular/material");
var person_detail_data_source_1 = require("./person-detail-data-source");
var animations_1 = require("@angular/animations");
var collections_1 = require("@angular/cdk/collections");
var distinctUntilChanged_1 = require("rxjs/operators/distinctUntilChanged");
var debounceTime_1 = require("rxjs/operators/debounceTime");
var fromEvent_1 = require("rxjs/observable/fromEvent");
var properties = ['id', 'name', 'progress', 'color'];
var TableDemo = /** @class */ (function () {
    function TableDemo(_peopleDatabase) {
        var _this = this;
        this._peopleDatabase = _peopleDatabase;
        this.matTableDataSource = new material_1.MatTableDataSource();
        this.displayedColumns = [];
        this.trackByStrategy = 'reference';
        this.changeReferences = false;
        this.progressSortingDisabled = false;
        this.highlights = new Set();
        this.wasExpanded = new Set();
        this.matTableDataSourceColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.selection = new collections_1.SelectionModel(true, []);
        this.dynamicColumnDefs = [];
        this.dynamicColumnIds = [];
        this.isDetailRow = function (_index, row) { return row.hasOwnProperty('detailRow'); };
        this.userTrackBy = function (index, item) {
            switch (_this.trackByStrategy) {
                case 'id': return item.id;
                case 'reference': return item;
                case 'index': return index;
            }
        };
        this.matTableDataSource.sortingDataAccessor = function (data, property) {
            switch (property) {
                case 'userId': return +data.id;
                case 'userName': return data.name;
                case 'progress': return +data.progress;
                case 'color': return data.color;
                default: return '';
            }
        };
        this.matTableDataSource.filterPredicate =
            function (data, filter) { return data.name.indexOf(filter) != -1; };
    }
    TableDemo.prototype.ngAfterViewInit = function () {
        // Needs to be set up after the view is initialized since the data source will look at the sort
        // and paginator's initial values to know what data should be rendered.
        this.matTableDataSource.paginator = this.paginatorForDataSource;
        this.matTableDataSource.sort = this.sortForDataSource;
    };
    TableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.connect();
        fromEvent_1.fromEvent(this.filter.nativeElement, 'keyup')
            .pipe(debounceTime_1.debounceTime(150), distinctUntilChanged_1.distinctUntilChanged()).subscribe(function () {
            _this.paginatorForDataSource.pageIndex = 0;
            _this.matTableDataSource.filter = _this.filter.nativeElement.value;
        });
    };
    /** Whether all filtered rows are selected. */
    TableDemo.prototype.isAllFilteredRowsSelected = function () {
        var _this = this;
        return this.matTableDataSource.filteredData.every(function (data) { return _this.selection.isSelected(data); });
    };
    /** Whether the selection it totally matches the filtered rows. */
    TableDemo.prototype.isMasterToggleChecked = function () {
        return this.selection.hasValue() &&
            this.isAllFilteredRowsSelected() &&
            this.selection.selected.length >= this.matTableDataSource.filteredData.length;
    };
    /**
     * Whether there is a selection that doesn't capture all the
     * filtered rows there are no filtered rows displayed.
     */
    TableDemo.prototype.isMasterToggleIndeterminate = function () {
        return this.selection.hasValue() &&
            (!this.isAllFilteredRowsSelected() || !this.matTableDataSource.filteredData.length);
    };
    /** Selects all filtered rows if they are not all selected; otherwise clear selection. */
    TableDemo.prototype.masterToggle = function () {
        var _this = this;
        if (this.isMasterToggleChecked()) {
            this.selection.clear();
        }
        else {
            this.matTableDataSource.filteredData.forEach(function (data) { return _this.selection.select(data); });
        }
    };
    TableDemo.prototype.addDynamicColumnDef = function () {
        var nextProperty = properties[this.dynamicColumnDefs.length];
        this.dynamicColumnDefs.push({
            id: nextProperty.toUpperCase(),
            property: nextProperty,
            headerText: nextProperty
        });
        this.dynamicColumnIds = this.dynamicColumnDefs.map(function (columnDef) { return columnDef.id; });
    };
    TableDemo.prototype.removeDynamicColumnDef = function () {
        this.dynamicColumnDefs.pop();
        this.dynamicColumnIds.pop();
    };
    TableDemo.prototype.connect = function () {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.dataSource = new person_data_source_1.PersonDataSource(this._peopleDatabase, this.paginator, this.sort);
        this.dataSourceWithDetails = new person_detail_data_source_1.PersonDetailDataSource(this.dataSource);
        this._peopleDatabase.initialize();
        this.matTableDataSource.data = this._peopleDatabase.data.slice();
    };
    TableDemo.prototype.disconnect = function () {
        this.dataSource = null;
        this.displayedColumns = [];
    };
    TableDemo.prototype.getOpacity = function (progress) {
        var distanceFromMiddle = Math.abs(50 - progress);
        return distanceFromMiddle / 50 + .3;
    };
    TableDemo.prototype.toggleColorColumn = function () {
        var colorColumnIndex = this.displayedColumns.indexOf('color');
        if (colorColumnIndex == -1) {
            this.displayedColumns.push('color');
        }
        else {
            this.displayedColumns.splice(colorColumnIndex, 1);
        }
    };
    TableDemo.prototype.toggleHighlight = function (property, enable) {
        enable ? this.highlights.add(property) : this.highlights.delete(property);
    };
    __decorate([
        core_1.ViewChild('filter'),
        __metadata("design:type", core_1.ElementRef)
    ], TableDemo.prototype, "filter", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], TableDemo.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], TableDemo.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('paginatorForDataSource'),
        __metadata("design:type", material_1.MatPaginator)
    ], TableDemo.prototype, "paginatorForDataSource", void 0);
    __decorate([
        core_1.ViewChild('sortForDataSource'),
        __metadata("design:type", material_1.MatSort)
    ], TableDemo.prototype, "sortForDataSource", void 0);
    TableDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-demo',
            templateUrl: 'table-demo.html',
            styleUrls: ['table-demo.css'],
            animations: [
                animations_1.trigger('detailExpand', [
                    animations_1.state('collapsed', animations_1.style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    animations_1.state('expanded', animations_1.style({ height: '*', visibility: 'visible' })),
                    animations_1.transition('expanded <=> collapsed', animations_1.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [people_database_1.PeopleDatabase])
    ], TableDemo);
    return TableDemo;
}());
exports.TableDemo = TableDemo;
//# sourceMappingURL=table-demo.js.map