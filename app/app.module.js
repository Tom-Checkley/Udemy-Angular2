"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var courses_component_1 = require("./courses.component");
var author_component_1 = require("./author.component");
var favourite_component_1 = require("./favourite.component");
var likes_component_1 = require("./likes.component");
var binding_component_1 = require("./binding.component");
var votes_component_1 = require("./votes.component");
var switch_component_1 = require("./switch.component");
var accordian_component_1 = require("./accordian.component");
var course_service_1 = require("./course.service");
var author_service_1 = require("./author.service");
var auto_grow_directive_1 = require("./auto-grow.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            courses_component_1.CoursesComponent,
            author_component_1.AuthorComponent,
            favourite_component_1.FavouriteComponent,
            auto_grow_directive_1.AutoGrowDirective,
            likes_component_1.LikesComponent,
            binding_component_1.BindingComponent,
            votes_component_1.VotesComponent,
            switch_component_1.SwitchComponent,
            accordian_component_1.AccordianComponent
        ],
        providers: [
            author_service_1.AuthorService,
            course_service_1.CourseService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map