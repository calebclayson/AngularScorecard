import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { PasserService } from '../passer.service';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss']
})
export class CourseSelectComponent implements OnInit {

  courses;

  constructor(private apiGetter: ApiGetterService, private passer: PasserService) { }

  ngOnInit() {
    this.apiGetter.getCourses().subscribe(res => {
      this.courses = res.courses
      console.log(this.courses);
    });
  }

  passCourse(id) {
    this.passer.setCourseId(id);
  }

}
