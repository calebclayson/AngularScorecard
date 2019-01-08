import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  constructor(private apiGetter: ApiGetterService) { }

  holes = this.apiGetter.getCourses();

  ngOnInit() {
    console.log(this.holes);
  }

}
