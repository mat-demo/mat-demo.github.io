"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var table_demo_1 = require("./table-demo");
var custom_table_1 = require("./custom-table/custom-table");
exports.TABLE_DEMO_ROUTES = [
    { path: '', redirectTo: 'main-demo', pathMatch: 'full' },
    { path: 'main-demo', component: table_demo_1.TableDemo },
    { path: 'custom-table', component: custom_table_1.CustomTableDemo },
];
//# sourceMappingURL=routes.js.map