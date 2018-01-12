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
var portal_1 = require("@angular/cdk/portal");
var core_1 = require("@angular/core");
var filter_1 = require("rxjs/operators/filter");
var tap_1 = require("rxjs/operators/tap");
var OverlayDemo = /** @class */ (function () {
    function OverlayDemo(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
        this.isMenuOpen = false;
        this.tortelliniFillings = ['cheese and spinach', 'mushroom and broccoli'];
    }
    OverlayDemo.prototype.openRotiniPanel = function () {
        var config = new overlay_1.OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new portal_1.ComponentPortal(RotiniPanel, this.viewContainerRef));
    };
    OverlayDemo.prototype.openFusilliPanel = function () {
        var config = new overlay_1.OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
    };
    OverlayDemo.prototype.openSpaghettiPanel = function () {
        // TODO(jelbourn): separate overlay demo for connected positioning.
        var strategy = this.overlay.position()
            .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        var config = new overlay_1.OverlayConfig({ positionStrategy: strategy });
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new portal_1.ComponentPortal(SpagettiPanel, this.viewContainerRef));
    };
    OverlayDemo.prototype.openTortelliniPanel = function () {
        var strategy = this.overlay.position()
            .connectedTo(this.tortelliniOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' });
        var config = new overlay_1.OverlayConfig({ positionStrategy: strategy });
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.tortelliniTemplate);
    };
    OverlayDemo.prototype.openPanelWithBackdrop = function () {
        var config = new overlay_1.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: this.overlay.position().global().centerHorizontally()
        });
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(function () { return overlayRef.detach(); });
    };
    OverlayDemo.prototype.openKeyboardTracking = function () {
        var config = new overlay_1.OverlayConfig();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        var componentRef = overlayRef
            .attach(new portal_1.ComponentPortal(KeyboardTrackingPanel, this.viewContainerRef));
        overlayRef.keydownEvents()
            .pipe(tap_1.tap(function (e) { return componentRef.instance.lastKeydown = e.key; }), filter_1.filter(function (e) { return e.key === 'Escape'; })).subscribe(function () { return overlayRef.detach(); });
    };
    __decorate([
        core_1.ViewChildren(portal_1.CdkPortal),
        __metadata("design:type", core_1.QueryList)
    ], OverlayDemo.prototype, "templatePortals", void 0);
    __decorate([
        core_1.ViewChild(overlay_1.CdkOverlayOrigin),
        __metadata("design:type", overlay_1.CdkOverlayOrigin)
    ], OverlayDemo.prototype, "_overlayOrigin", void 0);
    __decorate([
        core_1.ViewChild('tortelliniOrigin'),
        __metadata("design:type", overlay_1.CdkOverlayOrigin)
    ], OverlayDemo.prototype, "tortelliniOrigin", void 0);
    __decorate([
        core_1.ViewChild('tortelliniTemplate'),
        __metadata("design:type", portal_1.CdkPortal)
    ], OverlayDemo.prototype, "tortelliniTemplate", void 0);
    OverlayDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overlay-demo',
            templateUrl: 'overlay-demo.html',
            styleUrls: ['overlay-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            preserveWhitespaces: false,
        }),
        __metadata("design:paramtypes", [overlay_1.Overlay, core_1.ViewContainerRef])
    ], OverlayDemo);
    return OverlayDemo;
}());
exports.OverlayDemo = OverlayDemo;
/** Simple component to load into an overlay */
var RotiniPanel = /** @class */ (function () {
    function RotiniPanel() {
        this.value = 9000;
    }
    RotiniPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rotini-panel',
            template: '<p class="demo-rotini">Rotini {{value}}</p>'
        })
    ], RotiniPanel);
    return RotiniPanel;
}());
exports.RotiniPanel = RotiniPanel;
/** Simple component to load into an overlay */
var SpagettiPanel = /** @class */ (function () {
    function SpagettiPanel() {
        this.value = 'Omega';
    }
    SpagettiPanel = __decorate([
        core_1.Component({
            selector: 'spagetti-panel',
            template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
        })
    ], SpagettiPanel);
    return SpagettiPanel;
}());
exports.SpagettiPanel = SpagettiPanel;
/** Simple component to load into an overlay */
var KeyboardTrackingPanel = /** @class */ (function () {
    function KeyboardTrackingPanel() {
        this.lastKeydown = '';
    }
    KeyboardTrackingPanel = __decorate([
        core_1.Component({
            selector: 'keyboard-panel',
            template: '<div class="demo-keyboard">Last Keydown: {{ lastKeydown }}</div>'
        })
    ], KeyboardTrackingPanel);
    return KeyboardTrackingPanel;
}());
exports.KeyboardTrackingPanel = KeyboardTrackingPanel;
//# sourceMappingURL=overlay-demo.js.map