import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {SafePipe} from 'src/app/pipes/safe.pipe';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

const routes = [
  {
    path: 'course/:id',
    component: CourseComponent
  }
]

@NgModule({
  declarations: [
    CourseComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class CourseModule {

}
