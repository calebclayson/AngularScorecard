import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hole-card',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  holes = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    }
  ]

}
