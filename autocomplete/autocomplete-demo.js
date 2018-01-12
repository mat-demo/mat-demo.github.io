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
var forms_1 = require("@angular/forms");
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
var AutocompleteDemo = /** @class */ (function () {
    function AutocompleteDemo() {
        var _this = this;
        this.currentState = '';
        this.currentGroupedState = '';
        this.topHeightCtrl = new forms_1.FormControl(0);
        this.tdDisabled = false;
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'AK', name: 'Alaska' },
            { code: 'AZ', name: 'Arizona' },
            { code: 'AR', name: 'Arkansas' },
            { code: 'CA', name: 'California' },
            { code: 'CO', name: 'Colorado' },
            { code: 'CT', name: 'Connecticut' },
            { code: 'DE', name: 'Delaware' },
            { code: 'FL', name: 'Florida' },
            { code: 'GA', name: 'Georgia' },
            { code: 'HI', name: 'Hawaii' },
            { code: 'ID', name: 'Idaho' },
            { code: 'IL', name: 'Illinois' },
            { code: 'IN', name: 'Indiana' },
            { code: 'IA', name: 'Iowa' },
            { code: 'KS', name: 'Kansas' },
            { code: 'KY', name: 'Kentucky' },
            { code: 'LA', name: 'Louisiana' },
            { code: 'ME', name: 'Maine' },
            { code: 'MD', name: 'Maryland' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'MI', name: 'Michigan' },
            { code: 'MN', name: 'Minnesota' },
            { code: 'MS', name: 'Mississippi' },
            { code: 'MO', name: 'Missouri' },
            { code: 'MT', name: 'Montana' },
            { code: 'NE', name: 'Nebraska' },
            { code: 'NV', name: 'Nevada' },
            { code: 'NH', name: 'New Hampshire' },
            { code: 'NJ', name: 'New Jersey' },
            { code: 'NM', name: 'New Mexico' },
            { code: 'NY', name: 'New York' },
            { code: 'NC', name: 'North Carolina' },
            { code: 'ND', name: 'North Dakota' },
            { code: 'OH', name: 'Ohio' },
            { code: 'OK', name: 'Oklahoma' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'RI', name: 'Rhode Island' },
            { code: 'SC', name: 'South Carolina' },
            { code: 'SD', name: 'South Dakota' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'TX', name: 'Texas' },
            { code: 'UT', name: 'Utah' },
            { code: 'VT', name: 'Vermont' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WA', name: 'Washington' },
            { code: 'WV', name: 'West Virginia' },
            { code: 'WI', name: 'Wisconsin' },
            { code: 'WY', name: 'Wyoming' },
        ];
        this.tdStates = this.states;
        this.stateCtrl = new forms_1.FormControl({ code: 'CA', name: 'California' });
        this.reactiveStates = this.stateCtrl.valueChanges
            .pipe(startWith_1.startWith(this.stateCtrl.value), map_1.map(function (val) { return _this.displayFn(val); }), map_1.map(function (name) { return _this.filterStates(name); }));
        this.filteredGroupedStates = this.groupedStates = this.states.reduce(function (groups, state) {
            var group = groups.find(function (g) { return g.letter === state.name[0]; });
            if (!group) {
                group = { letter: state.name[0], states: [] };
                groups.push(group);
            }
            group.states.push({ code: state.code, name: state.name });
            return groups;
        }, []);
    }
    AutocompleteDemo.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    AutocompleteDemo.prototype.filterStates = function (val) {
        return val ? this._filter(this.states, val) : this.states;
    };
    AutocompleteDemo.prototype.filterStateGroups = function (val) {
        var _this = this;
        if (val) {
            return this.groupedStates
                .map(function (group) { return ({ letter: group.letter, states: _this._filter(group.states, val) }); })
                .filter(function (group) { return group.states.length > 0; });
        }
        return this.groupedStates;
    };
    AutocompleteDemo.prototype._filter = function (states, val) {
        var filterValue = val.toLowerCase();
        return states.filter(function (state) { return state.name.toLowerCase().startsWith(filterValue); });
    };
    __decorate([
        core_1.ViewChild(forms_1.NgModel),
        __metadata("design:type", forms_1.NgModel)
    ], AutocompleteDemo.prototype, "modelDir", void 0);
    AutocompleteDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'autocomplete-demo',
            templateUrl: 'autocomplete-demo.html',
            styleUrls: ['autocomplete-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteDemo);
    return AutocompleteDemo;
}());
exports.AutocompleteDemo = AutocompleteDemo;
//# sourceMappingURL=autocomplete-demo.js.map