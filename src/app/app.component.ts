import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchCityForm: FormGroup;
  foundCurrentWeather: any;
  foundForecast: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchCityForm = new FormGroup({
      cityQuery: new FormControl('')
    });
  }

  searchWeather() {
    const query = this.searchCityForm.value.cityQuery;

    return this.weatherService.getWeather(query).subscribe(
      data => this.handleSearchWeatherSuccess(data),
      error => this.handleError(error)
    );
  }

  handleSearchWeatherSuccess(data) {
    this.foundCurrentWeather = data[0];
    this.foundForecast = data[1];
    console.log(this.foundCurrentWeather);
    console.log(this.foundForecast);
  }

  handleError(error) {
    console.log(error);
    alert('Location not found, please try again');
  }

}
