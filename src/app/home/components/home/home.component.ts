import { Component, OnInit } from '@angular/core';
import {CourseInterface} from 'src/app/shared/types/course.interface';
import {MockedDataCourses} from 'src/app/shared/data/mockedData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  categories = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  lastUploadedCourses: CourseInterface[] = MockedDataCourses;

  ngOnInit(): void {
  }

}
