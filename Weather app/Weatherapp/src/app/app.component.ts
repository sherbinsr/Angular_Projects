import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './Service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Weatherapp';
  locations="Mankad";
  temperatures=29;
  AirCondition="Good";
  AqiDescription="Air Quality is Suitable for outdoor activity";
  weatherData:any;

  SearchForm!:FormGroup

  constructor(private forbuilder:FormBuilder, private weatherservice:WeatherService){}

  ngOnInit()
  {
       this.SearchForm = this.forbuilder.group({
        city:[null,Validators.required]
       })

       this.searchWeather();

       
  }
  searchWeather()
  {
    this.weatherservice.SearchWeatherByArea(this.SearchForm.get(['city'])!.value).subscribe((res)=>{

      this.weatherData=res.data;
      console.log(res);
    
    })
  }
  

}
