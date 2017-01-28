"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.post = {
            title: 'Title',
            isFavourite: true,
            votes: 10,
            myVote: 0,
        };
        this.tweet = {
            totalLikes: 9,
            iLike: false
        };
    }
    AppComponent.prototype.onVote = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.onFavouriteChange = function ($event) {
        console.log($event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>Hello Angular</h1>\n    <accordian title=\"Courses\">\n      <binding-buttons></binding-buttons>\n      <courses></courses>\n    </accordian>\n    <accordian title=\"Authors\">\n      <authors></authors>\n    </accordian>\n\n    <div class=\"col-md-4\">\n      <switch></switch>\n      <div style=\"display: flex; justify-content: space-around; align-items: center;\">\n        <likes\n          [totalLikes]=\"tweet.totalLikes\"\n          [iLike]=\"tweet.iLike\" >\n        </likes>\n        <favourite\n          [isFavourite]=\"post.isFavourite\"\n          (change)=\"onFavouriteChange($event)\">\n        </favourite>\n        <votes\n          [votes]=\"post.votes\"\n          [myVote]=\"post.myVote\"\n          (vote)=\"onVote($event)\"\n        ></votes>\n      </div>\n    </div>\n\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map