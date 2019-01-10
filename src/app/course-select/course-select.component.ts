import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss']
})
export class CourseSelectComponent implements OnInit {

  constructor(private apiGetter: ApiGetterService) { }

  courses;

  @Output() eventClicked = new EventEmitter<Event>();

  ngOnInit() {
    this.apiGetter.getCourses().subscribe(res => {
      this.courses = res.courses
      console.log(this.courses);
    });
  }

  eventActivated(event: Event) {
    this.eventClicked.emit(event);
    console.log(event);
  }

}
