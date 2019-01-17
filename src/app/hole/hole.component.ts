import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { PasserService } from '../passer.service';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  holes: Object[];
  details = this.passer.getDetails();

  constructor(private apiGetter: ApiGetterService, private passer: PasserService) { }

  ngOnInit() {
    this.apiGetter.getCourseById(this.details.courseId).subscribe(res => {
      this.holes = res.data.holes;
    });
  }

  pushScore(e) {
    var someText: string = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].innerText;
    var index: number = Number(someText.slice(5)) - 1;
    var playerIndex: number = Number(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.className.slice(1,2)) - 1;
    this.details.scores[playerIndex][index] = Number(e.target.value);
  }

}
