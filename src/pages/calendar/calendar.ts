import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponent } from "ionic2-calendar/calendar";

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  eventSource: any[] = [];
  viewTitle;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    showEventDetail: false,
    autoSelect: false
  };


  onTimeSelected(inEvent) {
    let date = new Date(inEvent.selectedTime);

    // Add 1 to the day for the endTime. Otherwise the calendar doesn't recognize it as an event
    let clickedEvent = {
      title: '',
      startTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)),
      endTime: new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1, 0, 0, 0)),
      allDay: true
    };

    let keepElements: any = [];
    if (this.eventSource.length == 0) {
      keepElements.push(clickedEvent);
    } else {
      //Source not empty. Looping source to see if event is already in source
      let clickedItemFound = false;
      for (let i = 0; i < this.eventSource.length; i++) {
        let currentEvent = this.eventSource[i];

        if (clickedEvent.startTime.getTime() != currentEvent.startTime.getTime()) {
          keepElements.push(currentEvent);
        } else {
          clickedItemFound = true;
        }
      }

      if (!clickedItemFound) {
        keepElements.push(clickedEvent);
      }

    }

    this.eventSource = keepElements;
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
}
