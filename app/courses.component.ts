import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    <h3>{{title}}</h3>
    <ul>
      <li *ngFor="let course of courses">
      {{ course }}
      </li>
    </ul>
    `,
  providers: [ CourseService ]
})

export class CoursesComponent {
  title: string = 'Courses Available';
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
