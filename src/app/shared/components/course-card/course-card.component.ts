import {Component, Input, OnInit} from '@angular/core';
import {CourseInterface} from 'src/app/shared/types/course.interface';

@Component({
  selector: 'kbtu-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: CourseInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
