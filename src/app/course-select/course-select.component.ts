import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { PasserService } from '../passer.service';
import { Details } from '../classesAndInterfaces';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss']
})
export class CourseSelectComponent implements OnInit {

  courses;
  course;
  teeBoxes;
  isSubmitted = false;
  model = new Details;

  constructor(private apiGetter: ApiGetterService, private passer: PasserService) { }

  ngOnInit() {
    this.apiGetter.getCourses().subscribe(res => {
      this.courses = res.courses;
    });
  }

  passCourse() {
    this.apiGetter.getCourseById(this.model.courseId).subscribe(res => {
      this.course = res.data;
      this.teeBoxes = this.course.holes[0].teeBoxes;
    });
  }

  passDetails() {
    let i:number = 1;
    while(this.model.playerNames.length < this.model.numPlayers) {
      this.model.playerNames.push('Player ' + i);
      i++;
    }
    this.passer.setDetails(this.model);
    this.isSubmitted = true;
  }

  appendName(e) {
    this.model.playerNames.push(e.path[0].value);
  }

}
