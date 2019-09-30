import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  base_url = 'https://api.darksky.net/forecast/';
  api_key = '3bcd43868369fa1578b01e261a2e7664';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public getWeatherData(): Observable<any> {
    return this.httpClient.get<any>(`https://api.darksky.net/forecast/${this.api_key}/36.185101,-94.138519`).map();
  }
}
