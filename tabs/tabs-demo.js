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
var Observable_1 = require("rxjs/Observable");
var TabsDemo = /** @class */ (function () {
    function TabsDemo() {
        var _this = this;
        // Nav bar demo
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        this.tabNavBackground = undefined;
        // Standard tabs demo
        this.tabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        // Dynamic tabs demo
        this.activeTabIndex = 0;
        this.addTabPosition = 0;
        this.gotoNewTabAfterAdding = false;
        this.createWithLongContent = false;
        this.dynamicTabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.asyncTabs = Observable_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
    }
    TabsDemo.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabsDemo.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabsDemo.prototype.swapTabLinks = function () {
        var temp = this.tabLinks[0];
        this.tabLinks[0] = this.tabLinks[1];
        this.tabLinks[1] = temp;
    };
    TabsDemo.prototype.addToLabel = function () {
        this.tabLinks.forEach(function (link) { return link.label += 'extracontent'; });
    };
    TabsDemo.prototype.toggleBackground = function () {
        this.tabNavBackground = this.tabNavBackground ? undefined : 'primary';
    };
    TabsDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs-demo',
            templateUrl: 'tabs-demo.html',
            styleUrls: ['tabs-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [])
    ], TabsDemo);
    return TabsDemo;
}());
exports.TabsDemo = TabsDemo;
var SunnyTabContent = /** @class */ (function () {
    function SunnyTabContent() {
    }
    SunnyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sunny-routed-content',
            template: 'This is the routed body of the sunny tab.',
        })
    ], SunnyTabContent);
    return SunnyTabContent;
}());
exports.SunnyTabContent = SunnyTabContent;
var RainyTabContent = /** @class */ (function () {
    function RainyTabContent() {
    }
    RainyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rainy-routed-content',
            template: 'This is the routed body of the rainy tab.',
        })
    ], RainyTabContent);
    return RainyTabContent;
}());
exports.RainyTabContent = RainyTabContent;
var FoggyTabContent = /** @class */ (function () {
    function FoggyTabContent() {
    }
    FoggyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foggy-routed-content',
            template: 'This is the routed body of the foggy tab.',
        })
    ], FoggyTabContent);
    return FoggyTabContent;
}());
exports.FoggyTabContent = FoggyTabContent;
//# sourceMappingURL=tabs-demo.js.map