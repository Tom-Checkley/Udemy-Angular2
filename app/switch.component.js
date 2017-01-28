"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SwitchComponent = (function () {
    function SwitchComponent() {
        this.viewMode = 'map';
    }
    return SwitchComponent;
}());
SwitchComponent = __decorate([
    core_1.Component({
        selector: 'switch',
        template: "\n    <div [ngSwitch]=\"viewMode\">\n      <ul class=\"nav nav-pills\">\n        <li [class.active]=\"viewMode == 'map'\">\n          <a (click)=\"viewMode = 'map'\">Map View</a>\n        </li>\n        <li [class.active]=\"viewMode == 'list'\">\n          <a (click)=\"viewMode = 'list'\">List View</a>\n        </li>\n      </ul>\n\n      <ng-container *ngSwitchCase=\"'map'\">\n        <p>Map View Content</p>\n        <img src=\"http://lorempixel.com/400/200\" />\n      </ng-container>\n      <ng-container *ngSwitchCase=\"'list'\">\n        <p>List View Content</p>\n        <img src=\"http://lorempixel.com/400/200\" />\n      </ng-container>\n    </div>\n  "
    })
], SwitchComponent);
exports.SwitchComponent = SwitchComponent;
//# sourceMappingURL=switch.component.js.map