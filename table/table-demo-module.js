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
var table_demo_1 = require("./table-demo");
var table_header_demo_1 = require("./table-header-demo");
var people_database_1 = require("./people-database");
var table_demo_page_1 = require("./table-demo-page");
var custom_table_1 = require("./custom-table/custom-table");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/cdk/table");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var wrapper_table_1 = require("./custom-table/wrapper-table");
var simple_column_1 = require("./custom-table/simple-column");
var TableDemoModule = /** @class */ (function () {
    function TableDemoModule() {
    }
    TableDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                table_1.CdkTableModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatMenuModule,
                material_1.MatPaginatorModule,
                material_1.MatRadioModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                router_1.RouterModule,
            ],
            declarations: [
                custom_table_1.CustomTableDemo,
                table_demo_1.TableDemo,
                table_demo_page_1.TableDemoPage,
                table_header_demo_1.TableHeaderDemo,
                wrapper_table_1.WrapperTable,
                simple_column_1.SimpleColumn,
            ],
            providers: [
                people_database_1.PeopleDatabase
            ],
        })
    ], TableDemoModule);
    return TableDemoModule;
}());
exports.TableDemoModule = TableDemoModule;
//# sourceMappingURL=table-demo-module.js.map