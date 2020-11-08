import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nathan-openweathermap';

  searchCityForm: FormGroup;
  foundCurrentWeather: any[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchCityForm = new FormGroup({
      cityQuery: new FormControl('')
    });
  }

  searchWeather() {
    const query = this.searchCityForm.value.cityQuery;

    return this.weatherService.getCurrentWeather(query).subscribe(
      data => this.handleSearchWeatherSuccess(data),
      error => this.handleError(error)
    );
  }

  handleSearchWeatherSuccess(data) {
    this.foundCurrentWeather = data;
    console.log(this.foundCurrentWeather);    
  }

  handleError(error) {
    console.log(error);
  }
}
