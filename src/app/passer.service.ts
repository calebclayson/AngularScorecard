import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasserService {

  details: any;

  constructor() { }

  setDetails(info) {
    this.details = info;
  }

  getDetails() {
    return this.details;
  }

}
