import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-scorecard';

    public clickedEvent: Event;

    childEventClicked(event: Event) {
      this.clickedEvent = event;
    }
}
