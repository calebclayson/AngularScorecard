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
    console.log(this.details);
    this.apiGetter.getCourseById(this.details.courseId).subscribe(res => {
      this.holes = res.data.holes;
      console.log(this.holes);
    });
  }

}
