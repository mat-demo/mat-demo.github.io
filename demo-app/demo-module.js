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
var overlay_1 = require("@angular/cdk/overlay");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var autocomplete_demo_1 = require("../autocomplete/autocomplete-demo");
var baseline_demo_1 = require("../baseline/baseline-demo");
var button_toggle_demo_1 = require("../button-toggle/button-toggle-demo");
var button_demo_1 = require("../button/button-demo");
var card_demo_1 = require("../card/card-demo");
var checkbox_demo_1 = require("../checkbox/checkbox-demo");
var chips_demo_1 = require("../chips/chips-demo");
var datepicker_demo_1 = require("../datepicker/datepicker-demo");
var demo_material_module_1 = require("../demo-material-module");
var dialog_demo_1 = require("../dialog/dialog-demo");
var drawer_demo_1 = require("../drawer/drawer-demo");
var expansion_demo_1 = require("../expansion/expansion-demo");
var focus_origin_demo_1 = require("../focus-origin/focus-origin-demo");
var gestures_demo_1 = require("../gestures/gestures-demo");
var grid_list_demo_1 = require("../grid-list/grid-list-demo");
var icon_demo_1 = require("../icon/icon-demo");
var input_demo_1 = require("../input/input-demo");
var list_demo_1 = require("../list/list-demo");
var live_announcer_demo_1 = require("../live-announcer/live-announcer-demo");
var menu_demo_1 = require("../menu/menu-demo");
var overlay_demo_1 = require("../overlay/overlay-demo");
var platform_demo_1 = require("../platform/platform-demo");
var portal_demo_1 = require("../portal/portal-demo");
var progress_bar_demo_1 = require("../progress-bar/progress-bar-demo");
var progress_spinner_demo_1 = require("../progress-spinner/progress-spinner-demo");
var radio_demo_1 = require("../radio/radio-demo");
var ripple_demo_1 = require("../ripple/ripple-demo");
var select_demo_1 = require("../select/select-demo");
var sidenav_demo_1 = require("../sidenav/sidenav-demo");
var slide_toggle_demo_1 = require("../slide-toggle/slide-toggle-demo");
var slider_demo_1 = require("../slider/slider-demo");
var snack_bar_demo_1 = require("../snack-bar/snack-bar-demo");
var stepper_demo_1 = require("../stepper/stepper-demo");
var screen_type_demo_1 = require("../screen-type/screen-type-demo");
var layout_1 = require("@angular/cdk/layout");
var tabs_demo_1 = require("../tabs/tabs-demo");
var toolbar_demo_1 = require("../toolbar/toolbar-demo");
var tooltip_demo_1 = require("../tooltip/tooltip-demo");
var typography_demo_1 = require("../typography/typography-demo");
var demo_app_1 = require("./demo-app");
var routes_1 = require("./routes");
var table_demo_module_1 = require("../table/table-demo-module");
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(routes_1.DEMO_APP_ROUTES),
                demo_material_module_1.DemoMaterialModule,
                layout_1.LayoutModule,
                table_demo_module_1.TableDemoModule,
            ],
            declarations: [
                autocomplete_demo_1.AutocompleteDemo,
                baseline_demo_1.BaselineDemo,
                button_demo_1.ButtonDemo,
                button_toggle_demo_1.ButtonToggleDemo,
                card_demo_1.CardDemo,
                checkbox_demo_1.CheckboxDemo,
                chips_demo_1.ChipsDemo,
                dialog_demo_1.ContentElementDialog,
                datepicker_demo_1.DatepickerDemo,
                demo_app_1.DemoApp,
                dialog_demo_1.DialogDemo,
                drawer_demo_1.DrawerDemo,
                expansion_demo_1.ExpansionDemo,
                focus_origin_demo_1.FocusOriginDemo,
                tabs_demo_1.FoggyTabContent,
                gestures_demo_1.GesturesDemo,
                grid_list_demo_1.GridListDemo,
                demo_app_1.Home,
                icon_demo_1.IconDemo,
                dialog_demo_1.IFrameDialog,
                input_demo_1.InputDemo,
                dialog_demo_1.JazzDialog,
                overlay_demo_1.KeyboardTrackingPanel,
                list_demo_1.ListDemo,
                live_announcer_demo_1.LiveAnnouncerDemo,
                checkbox_demo_1.MatCheckboxDemoNestedChecklist,
                menu_demo_1.MenuDemo,
                overlay_demo_1.OverlayDemo,
                platform_demo_1.PlatformDemo,
                portal_demo_1.PortalDemo,
                progress_bar_demo_1.ProgressBarDemo,
                progress_spinner_demo_1.ProgressSpinnerDemo,
                radio_demo_1.RadioDemo,
                tabs_demo_1.RainyTabContent,
                ripple_demo_1.RippleDemo,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                screen_type_demo_1.ScreenTypeDemo,
                select_demo_1.SelectDemo,
                sidenav_demo_1.SidenavDemo,
                slider_demo_1.SliderDemo,
                slide_toggle_demo_1.SlideToggleDemo,
                snack_bar_demo_1.SnackBarDemo,
                overlay_demo_1.SpagettiPanel,
                stepper_demo_1.StepperDemo,
                tabs_demo_1.SunnyTabContent,
                tabs_demo_1.TabsDemo,
                toolbar_demo_1.ToolbarDemo,
                tooltip_demo_1.TooltipDemo,
                typography_demo_1.TypographyDemo,
            ],
            providers: [
                { provide: overlay_1.OverlayContainer, useClass: overlay_1.FullscreenOverlayContainer },
            ],
            entryComponents: [
                dialog_demo_1.ContentElementDialog,
                demo_app_1.DemoApp,
                dialog_demo_1.IFrameDialog,
                dialog_demo_1.JazzDialog,
                overlay_demo_1.KeyboardTrackingPanel,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                overlay_demo_1.SpagettiPanel,
            ],
        })
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo-module.js.map