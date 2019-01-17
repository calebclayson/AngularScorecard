import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { PasserService } from '../passer.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  details = this.passer.getDetails();
  course;
  p1score = {
    id: 0,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  p2score = {
    id: 1,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  p3score = {
    id: 2,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  p4score = {
    id: 3,
    total: 0,
    in: 0,
    out: 0,
    relToPar: 0
  };
  winner;
  second;
  third;
  fourth;
  parTotal = 0;
  yardTotal = 0;


  constructor(private apiGetter: ApiGetterService, private passer: PasserService) { }

  ngOnInit() {
    this.apiGetter.getCourseById(this.details.courseId).subscribe(res => {
      this.course = res.data;
      this.calcTotals();
    });
  }

  calcTotals() {
    for(let i = 0; i < this.details.scores[0].length; i++) {
      this.p1score.total += this.details.scores[0][i];
    }
    for(let i = 0; i < Math.round(this.details.scores[0].length/2); i++) {
      this.p1score.in += this.details.scores[0][i];
    }
    for(let i = Math.round(this.details.scores[0].length/2); i < this.details.scores[0].length; i++) {
      this.p1score.out += this.details.scores[0][i];
    }
    for(let i = 0; i < this.details.scores[1].length; i++) {
      this.p2score.total += this.details.scores[1][i];
    }
    for(let i = 0; i < Math.round(this.details.scores[1].length/2); i++) {
      this.p2score.in += this.details.scores[1][i];
    }
    for(let i = Math.round(this.details.scores[1].length/2); i < this.details.scores[1].length; i++) {
      this.p2score.out += this.details.scores[1][i];
    }
    for(let i = 0; i < this.details.scores[2].length; i++) {
      this.p3score.total += this.details.scores[2][i];
    }
    for(let i = 0; i < Math.round(this.details.scores[2].length/2); i++) {
      this.p3score.in += this.details.scores[2][i];
    }
    for(let i = Math.round(this.details.scores[2].length/2); i < this.details.scores[2].length; i++) {
      this.p3score.out += this.details.scores[2][i];
    }
    for(let i = 0; i < this.details.scores[3].length; i++) {
      this.p4score.total += this.details.scores[3][i];
    }
    for(let i = 0; i < Math.round(this.details.scores[3].length/2); i++) {
      this.p4score.in += this.details.scores[3][i];
    }
    for(let i = Math.round(this.details.scores[3].length/2); i < this.details.scores[3].length; i++) {
      this.p4score.out += this.details.scores[3][i];
    }
    for(let i = 0; i < this.course.holes.length; i++) {
      this.parTotal += Number(this.course.holes[i].teeBoxes[this.details.tee].par);
    }
    for(let i = 0; i < this.course.holes.length; i++) {
      this.yardTotal += Number(this.course.holes[i].teeBoxes[this.details.tee].yards);
    }
    this.calculateRelToPar();
  }

  calculateRelToPar() {
    this.p1score.relToPar = this.parTotal - this.p1score.total;
    this.p2score.relToPar = this.parTotal - this.p2score.total;
    this.p3score.relToPar = this.parTotal - this.p3score.total;
    this.p4score.relToPar = this.parTotal - this.p4score.total;
  }

  setPlacings() {
    
  }

}
