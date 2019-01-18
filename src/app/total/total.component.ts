import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { PasserService } from '../passer.service';
import { PlayerScore } from '../classesAndInterfaces';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  details = this.passer.getDetails();
  course;
  p1score: PlayerScore = {
    id: 0,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  p2score: PlayerScore = {
    id: 1,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  p3score: PlayerScore = {
    id: 2,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  p4score: PlayerScore = {
    id: 3,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  places;
  parTotal = 0;
  yardTotal = 0;


  constructor(private apiGetter: ApiGetterService, private passer: PasserService) { }

  ngOnInit() {
    this.apiGetter.getCourseById(this.details.courseId).subscribe(res => {
      this.course = res.data;
      this.calcTotals();
    });
  }

  sort(list) {
    let sort = true;
    let changeIndexArray = [];
    while (sort) {
      sort = false;
      for (let i = list.length - 2; i >= 0; i--) {
        let tmp = list[i + 1].total;
        if (list[i].total > tmp) {
          changeIndexArray.push(i);
          sort = true;
        }
      }
      if (sort) {
        for (let i = 0; i < changeIndexArray.length; i++) {
          let tmp = list[changeIndexArray[i]];
          list[changeIndexArray[i]] = list[changeIndexArray[i] + 1];
          list[changeIndexArray[i] + 1] = tmp;
          changeIndexArray = [];
        }
        // sort = false;
      }
    }

    return list;
  }

  calcTotals() {
    for (let i = 0; i < this.details.scores[0].length; i++) {
      this.p1score.total += this.details.scores[0][i];
    }
    for (let i = 0; i < Math.round(this.details.scores[0].length / 2); i++) {
      this.p1score.in += this.details.scores[0][i];
    }
    for (let i = Math.round(this.details.scores[0].length / 2); i < this.details.scores[0].length; i++) {
      this.p1score.out += this.details.scores[0][i];
    }
    for (let i = 0; i < this.details.scores[1].length; i++) {
      this.p2score.total += this.details.scores[1][i];
    }
    for (let i = 0; i < Math.round(this.details.scores[1].length / 2); i++) {
      this.p2score.in += this.details.scores[1][i];
    }
    for (let i = Math.round(this.details.scores[1].length / 2); i < this.details.scores[1].length; i++) {
      this.p2score.out += this.details.scores[1][i];
    }
    for (let i = 0; i < this.details.scores[2].length; i++) {
      this.p3score.total += this.details.scores[2][i];
    }
    for (let i = 0; i < Math.round(this.details.scores[2].length / 2); i++) {
      this.p3score.in += this.details.scores[2][i];
    }
    for (let i = Math.round(this.details.scores[2].length / 2); i < this.details.scores[2].length; i++) {
      this.p3score.out += this.details.scores[2][i];
    }
    for (let i = 0; i < this.details.scores[3].length; i++) {
      this.p4score.total += this.details.scores[3][i];
    }
    for (let i = 0; i < Math.round(this.details.scores[3].length / 2); i++) {
      this.p4score.in += this.details.scores[3][i];
    }
    for (let i = Math.round(this.details.scores[3].length / 2); i < this.details.scores[3].length; i++) {
      this.p4score.out += this.details.scores[3][i];
    }
    for (let i = 0; i < this.course.holes.length; i++) {
      this.parTotal += Number(this.course.holes[i].teeBoxes[this.details.tee].par);
    }
    for (let i = 0; i < this.course.holes.length; i++) {
      this.yardTotal += Number(this.course.holes[i].teeBoxes[this.details.tee].yards);
    }
    this.calculateRelToPar();
  }

  calculateRelToPar() {
    this.p1score.relToPar = this.parTotal - this.p1score.total;
    this.p2score.relToPar = this.parTotal - this.p2score.total;
    this.p3score.relToPar = this.parTotal - this.p3score.total;
    this.p4score.relToPar = this.parTotal - this.p4score.total;
    this.setPlacings();
  }

  setPlacings() {
    let scoreArray = [];
    if(this.p1score.total > 0) {
      scoreArray.push(this.p1score);
    }
    if(this.p2score.total > 0) {
      scoreArray.push(this.p2score);
    }
    if(this.p3score.total > 0) {
      scoreArray.push(this.p3score);
    }
    if(this.p4score.total > 0) {
      scoreArray.push(this.p4score);
    }
    this.places = this.sort(scoreArray);
    console.log(this.places);
  }

}
