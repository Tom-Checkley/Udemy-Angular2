import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    <h3>{{title}}</h3>
    <input type="text" autoGrow />

    <ul>
      <li *ngFor="let course of courses">
      {{ course }}
      </li>
    </ul>
    `
})

export class CoursesComponent {
  title: string = 'Courses Available';
  courses: string[];

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
