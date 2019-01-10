import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  constructor(private apiGetter: ApiGetterService) { }

  holes = [{id: 1}];

  @Input() event: Event;

  ngOnInit() {
  }

}
