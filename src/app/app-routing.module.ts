import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseSelectComponent } from './course-select/course-select.component';
import { HoleComponent } from './hole/hole.component';

const routes: Routes = [
  {
    path: 'card',
    component: HoleComponent,
  },
  {
    path: 'courseSelect',
    component: CourseSelectComponent
  },
  {
    path: '**',
    component: CourseSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
