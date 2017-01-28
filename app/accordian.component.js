"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AccordianComponent = (function () {
    function AccordianComponent() {
        this.isExpanded = false;
    }
    AccordianComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    return AccordianComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordianComponent.prototype, "title", void 0);
AccordianComponent = __decorate([
    core_1.Component({
        selector: 'accordian',
        template: "\n    <div class=\"accordian panel panel-default\">\n      <div class=\"accordian-title panel-heading\" (click)=\"toggle()\">\n        <strong>{{ title }}</strong>\n        <i\n          class=\"pull-right glyphicon\"\n          [ngClass]=\"{\n            'glyphicon-chevron-down': !isExpanded,\n            'glyphicon-chevron-up': isExpanded\n          }\"\n        ></i>\n      </div>\n      <div *ngIf=\"isExpanded\" class=\"accordian-content panel-body\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  "
    })
], AccordianComponent);
exports.AccordianComponent = AccordianComponent;
//# sourceMappingURL=accordian.component.js.map