import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }       from './app.component';
import { CoursesComponent }   from './courses.component';
import { AuthorComponent }    from './author.component';
import { FavouriteComponent } from './favourite.component';

import { CourseService }      from './course.service';
import { AuthorService }      from './author.service';

import { AutoGrowDirective }  from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                  AppComponent,
                  CoursesComponent,
                  AuthorComponent,
                  FavouriteComponent,
                  AutoGrowDirective
                ],
  providers: [
                AuthorService,
                CourseService
              ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
