import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import { PasserService } from '../passer.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  public detailsFire: AngularFireObject<any>;

  holes: Object[];
  details = this.passer.getDetails();

  constructor(private apiGetter: ApiGetterService, private passer: PasserService, private db: AngularFireDatabase) {
    this.detailsFire = this.db.object<any>('/data');
   }

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

  saveData() {
    this.detailsFire.set(this.details);
  }

}
