import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGetterService {

  constructor(private http: HttpClient) {}
  private golfUrl = 'https://golf-courses-api.herokuapp.com/courses/';

  getCourses(): any {
    return this.http.get(this.golfUrl);
  }

  getCourseById(id: number): any {
    console.log(this.golfUrl + id);
    return this.http.get(this.golfUrl + id);
  }

}