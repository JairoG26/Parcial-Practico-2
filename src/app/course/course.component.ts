import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Array<Course> = [];
  constructor() { }
  getCourseList(): Array<Course> {
    return dataCourses;
  }
  ngOnInit() {
    this.courses = this.getCourseList();
  }
}
