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
var LikesComponent = (function () {
    function LikesComponent() {
        this.totalLikes = 0;
        this.iLike = false;
    }
    LikesComponent.prototype.onClick = function () {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    };
    return LikesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikesComponent.prototype, "totalLikes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LikesComponent.prototype, "iLike", void 0);
LikesComponent = __decorate([
    core_1.Component({
        selector: 'likes',
        template: "\n    <i class=\"\n      glyphicon glyphicon-thumbs-up\"\n      [class.highlighted]=\"iLike\"\n      (click)=\"onClick()\"\n      ></i>\n    <span>{{ totalLikes }}</span>\n  ",
        styles: ["\n    .glyphicon-thumbs-up {\n      color: #ccc;\n      cursor: pointer;\n    }\n\n    .highlighted {\n      color: blue;\n    }\n  "]
    })
], LikesComponent);
exports.LikesComponent = LikesComponent;
//# sourceMappingURL=likes.component.js.map