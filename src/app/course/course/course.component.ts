import { Component, OnInit } from '@angular/core';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {ActivatedRoute} from '@angular/router';
import {MockedDataCourses} from 'src/app/shared/data/mockedData';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: CourseInterface | undefined;
  mockedCourses = MockedDataCourses;

  constructor(route: ActivatedRoute) {
    const id: string = route.snapshot.params['id'];
    this.course = this.mockedCourses.find(v => v.id === Number(id));
  }

  ngOnInit(): void {

  }

}
