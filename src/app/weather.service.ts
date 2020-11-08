import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  private API_KEY: string = environment.OPENWEATHERMAP_API_KEY;
  private API_URL: string = environment.OPENWEATHERMAP_URL;

  getCurrentWeather(locationQuery) {
    return this.httpClient.get(this.API_URL + 'weather' + '?q=' + locationQuery + '&units=imperial' + '&appid=' + this.API_KEY);
  }
}
