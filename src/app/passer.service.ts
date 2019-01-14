import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasserService {

  courseId: any;
  courseBeenChosen: boolean;

  constructor() { }

  setCourseId(id: any) {
    this.courseId = id;
  }

  getCourseId() {
    return this.courseId;
  }

  courseBeenChosenToggle() {
    this.courseBeenChosen = !this.courseBeenChosen;
  } 

}
