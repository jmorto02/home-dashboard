import { Component, OnInit, Injectable } from '@angular/core';
import { WeatherService } from '../weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [ WeatherService ]
})

export class WeatherComponent implements OnInit {

  weatherData;
  weatherService;

  constructor(weatherService: WeatherService) {
    this.weatherService = weatherService;
   }

  ngOnInit() {
  }

  setWeatherData() {
    this.weatherData = this.weatherService.getWeatherData();
    console.log(this.weatherData);
  }

}
