import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGetterService {

  result: any;

  constructor(private http: HttpClient) {}
  private golfUrl = 'https://golf-courses-api.herokuapp.com/courses/';

  getCourses(): any {
    let parent = this;
    this.http.get(this.golfUrl).subscribe(
      function(res) {
        parent.setResult(res);
      }
    );
    return this.result;

  }

  getCourseById(id: number): any {
    let parent = this;
    this.http.get(this.golfUrl + id).subscribe(
      function(res) {
        parent.setResult(res);
      }
    );
    return this.result;
  }

  setResult(res: any) {
    this.result = res;
  }
}