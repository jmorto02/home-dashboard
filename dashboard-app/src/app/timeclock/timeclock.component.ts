import { Component, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.scss']
})

export class TimeclockComponent implements OnInit {

  subscription: Subscription;
  source = interval(1000);
  currentTime;

  ngOnInit() {
    this.subscription = this.source.subscribe(val => this.setCurrentTime());
    this.currentTime = new Date();
  }

  setCurrentTime() {
    this.currentTime = new Date();
  }

}
