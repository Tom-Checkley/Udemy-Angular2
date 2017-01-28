import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';
import { CoursesComponent }   from './courses.component';
import { AuthorComponent }    from './author.component';
import { FavouriteComponent } from './favourite.component';
import { LikesComponent }     from './likes.component';
import { BindingComponent }   from './binding.component';
import { VotesComponent }     from './votes.component';
import { SwitchComponent }    from './switch.component';
import { AccordianComponent } from './accordian.component';

import { CourseService }      from './course.service';
import { AuthorService }      from './author.service';

import { AutoGrowDirective }  from './auto-grow.directive';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule
                ],
  declarations: [
                  AppComponent,
                  CoursesComponent,
                  AuthorComponent,
                  FavouriteComponent,
                  AutoGrowDirective,
                  LikesComponent,
                  BindingComponent,
                  VotesComponent,
                  SwitchComponent,
                  AccordianComponent
                ],
  providers:    [
                  AuthorService,
                  CourseService
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
