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
var VotesComponent = (function () {
    function VotesComponent() {
        this.votes = 0;
        this.myVote = 0;
        this.vote = new core_1.EventEmitter();
    }
    VotesComponent.prototype.upVote = function () {
        if (this.myVote == 1) {
            return;
        }
        this.myVote++;
        this.vote.emit({ myVote: this.myVote });
    };
    VotesComponent.prototype.downVote = function () {
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.vote.emit({ myVote: this.myVote });
    };
    return VotesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VotesComponent.prototype, "votes", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], VotesComponent.prototype, "myVote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], VotesComponent.prototype, "vote", void 0);
VotesComponent = __decorate([
    core_1.Component({
        selector: 'votes',
        template: "\n    <div class=\"holder\">\n      <i\n        class=\"glyphicon glyphicon-menu-up\"\n        [class.voted]=\"myVote == 1\"\n        (click)=\"upVote()\"\n      ></i>\n      <span>{{ votes + myVote }} </span>\n      <i\n        class=\"glyphicon glyphicon-menu-down\"\n        [class.voted]=\"myVote == -1\"\n        (click)=\"downVote()\"\n      ></i>\n    </div>\n  ",
        styles: ["\n    .glyphicon {\n      color: #ccc;\n      font-size: 1.5em;\n      cursor: pointer;\n    }\n    .holder {\n      width: 20px;\n      text-align: center;\n      display: inline-block;\n    }\n    .voted {\n      color: orange;\n      font-size: 2em;\n    }\n  "]
    })
], VotesComponent);
exports.VotesComponent = VotesComponent;
//# sourceMappingURL=votes.component.js.map