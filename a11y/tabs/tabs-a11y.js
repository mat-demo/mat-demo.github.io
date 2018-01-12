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
var TabsAccessibilityDemo = /** @class */ (function () {
    function TabsAccessibilityDemo() {
        // Nav bar demo
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        // Standard tabs demo
        this.tabs = [
            {
                label: 'German Shepherd',
                content: "The German Shepherd is a breed of medium to large-sized working dog that originated\n          in Germany. The breed's officially recognized name is German Shepherd Dog in the\n          English language. The breed is also known as the Alsatian in Britain and Ireland."
            }, {
                label: 'Labrador Retriever',
                extraContent: true,
                content: "The Labrador Retriever, also Labrador, is a type of retriever-gun dog. The Labrador\n          is one of the most popular breeds of dog in the United Kingdom and the United States."
            }, {
                label: 'Rottweiler',
                disabled: true,
                content: "The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.\n          The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs,\n          because their main use was to ..."
            }, {
                label: 'Beagle',
                content: "The Beagle is a breed of small hound, similar in appearance to the much larger\n          foxhound. The beagle is a scent hound, developed primarily for hunting hare."
            },
        ];
    }
    TabsAccessibilityDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs-a11y',
            templateUrl: 'tabs-a11y.html',
            styleUrls: ['tabs-a11y.css'],
        })
    ], TabsAccessibilityDemo);
    return TabsAccessibilityDemo;
}());
exports.TabsAccessibilityDemo = TabsAccessibilityDemo;
var SunnyTabContent = /** @class */ (function () {
    function SunnyTabContent() {
    }
    SunnyTabContent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sunny-routed-content',
            template: 'Having a lot of light from the sun.',
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
            template: 'A rainy period of time is one when it rains a lot',
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
            template: 'If the weather is foggy, there is fog',
        })
    ], FoggyTabContent);
    return FoggyTabContent;
}());
exports.FoggyTabContent = FoggyTabContent;
//# sourceMappingURL=tabs-a11y.js.map