import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {CourseCardComponent} from 'src/app/shared/components/course-card/course-card.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppRoutingModule
  ]
})
export class HomeModule { }
