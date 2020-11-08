import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  private API_KEY: string = environment.OPENWEATHERMAP_API_KEY;
  private API_URL: string = environment.OPENWEATHERMAP_URL;

  getWeather(locationQuery) {
    let currentWeather = this.httpClient.get(
      this.API_URL + 'weather' + '?q=' + locationQuery + '&units=imperial' + '&appid=' + this.API_KEY);
    let forecast = this.httpClient.get(
      this.API_URL + 'forecast/daily' + '?q=' + locationQuery + '&cnt=5' + '&units=imperial' + '&appid=' + this.API_KEY);

    return forkJoin([currentWeather, forecast]);
  }
}
