import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  events = [
    { title: 'event 1', date: '2019-09-30' },
    { title: 'event 2', date: '2019-10-01' }

  ];

  

  calendarPlugins = [dayGridPlugin];
}
