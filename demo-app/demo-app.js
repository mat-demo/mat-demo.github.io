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
var overlay_1 = require("@angular/cdk/overlay");
var core_1 = require("@angular/core");
/**
 * The entry app for demo site. Routes under `accessibility` will use AccessibilityDemo component,
 * while other demos will use `DemoApp` component. Since DemoApp and AccessibilityDemo use
 * different templates (DemoApp has toolbar and sidenav), we use this EntryApp in index.html
 * as our entry point.
 */
var EntryApp = /** @class */ (function () {
    function EntryApp() {
    }
    EntryApp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'entry-app',
            template: '<router-outlet></router-outlet>',
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        })
    ], EntryApp);
    return EntryApp;
}());
exports.EntryApp = EntryApp;
/**
 * Home component for welcome message in DemoApp.
 */
var Home = /** @class */ (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <p>Welcome to the development demos for Angular Material!</p>\n    <p>Open the sidenav to select a demo.</p>\n  "
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
/**
 * DemoApp with toolbar and sidenav.
 */
var DemoApp = /** @class */ (function () {
    function DemoApp(_element, _overlayContainer) {
        this._element = _element;
        this._overlayContainer = _overlayContainer;
        this.dark = false;
        this.navItems = [
            { name: 'Autocomplete', route: '/autocomplete' },
            { name: 'Button Toggle', route: '/button-toggle' },
            { name: 'Button', route: '/button' },
            { name: 'Card', route: '/card' },
            { name: 'Checkbox', route: '/checkbox' },
            { name: 'Chips', route: '/chips' },
            { name: 'Datepicker', route: '/datepicker' },
            { name: 'Dialog', route: '/dialog' },
            { name: 'Drawer', route: '/drawer' },
            { name: 'Expansion Panel', route: '/expansion' },
            { name: 'Focus Origin', route: '/focus-origin' },
            { name: 'Gestures', route: '/gestures' },
            { name: 'Grid List', route: '/grid-list' },
            { name: 'Icon', route: '/icon' },
            { name: 'Input', route: '/input' },
            { name: 'List', route: '/list' },
            { name: 'Live Announcer', route: '/live-announcer' },
            { name: 'Menu', route: '/menu' },
            { name: 'Overlay', route: '/overlay' },
            { name: 'Platform', route: '/platform' },
            { name: 'Portal', route: '/portal' },
            { name: 'Progress Bar', route: '/progress-bar' },
            { name: 'Progress Spinner', route: '/progress-spinner' },
            { name: 'Radio', route: '/radio' },
            { name: 'Ripple', route: '/ripple' },
            { name: 'Screen Type', route: '/screen-type' },
            { name: 'Select', route: '/select' },
            { name: 'Sidenav', route: '/sidenav' },
            { name: 'Slide Toggle', route: '/slide-toggle' },
            { name: 'Slider', route: '/slider' },
            { name: 'Snack Bar', route: '/snack-bar' },
            { name: 'Stepper', route: '/stepper' },
            { name: 'Table', route: '/table' },
            { name: 'Tabs', route: '/tabs' },
            { name: 'Toolbar', route: '/toolbar' },
            { name: 'Tooltip', route: '/tooltip' },
            { name: 'Typography', route: '/typography' }
        ];
    }
    DemoApp.prototype.toggleFullscreen = function () {
        var elem = this._element.nativeElement.querySelector('.demo-content');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullScreen) {
            elem.msRequestFullScreen();
        }
    };
    DemoApp.prototype.toggleTheme = function () {
        var darkThemeClass = 'unicorn-dark-theme';
        this.dark = !this.dark;
        if (this.dark) {
            this._element.nativeElement.classList.add(darkThemeClass);
            this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
        }
        else {
            this._element.nativeElement.classList.remove(darkThemeClass);
            this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
        }
    };
    DemoApp = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo-app',
            templateUrl: 'demo-app.html',
            styleUrls: ['demo-app.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            overlay_1.OverlayContainer])
    ], DemoApp);
    return DemoApp;
}());
exports.DemoApp = DemoApp;
//# sourceMappingURL=demo-app.js.map