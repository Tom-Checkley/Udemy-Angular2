"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BindingComponent = (function () {
    function BindingComponent() {
        this.title = 'Angular App';
    }
    return BindingComponent;
}());
BindingComponent = __decorate([
    core_1.Component({
        selector: 'binding-buttons',
        template: "\n    <input type=\"text\" [(ngModel)]=\"title\" />\n    <input value=\"Clear\" class=\"btn btn-primary\" type=\"button\" (click)=\"title = ''\" />\n    Preview: {{ title }}\n  "
    })
], BindingComponent);
exports.BindingComponent = BindingComponent;
//# sourceMappingURL=binding.component.js.map