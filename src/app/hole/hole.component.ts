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

  constructor(private apiGetter: ApiGetterService, private passer: PasserService) { }

  ngOnInit() {
    this.apiGetter.getCourseById(this.passer.getCourseId()).subscribe(res => {
      this.holes = res.holes
      console.log(this.holes);
    });
  }

}
