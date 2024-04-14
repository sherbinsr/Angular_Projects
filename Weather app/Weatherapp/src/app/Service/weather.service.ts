import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private key='d0be71ee26mshff0563a3b1a6634p12fafcjsnb0a50c3284f7';
  private url='https://the-weather-api.p.rapidapi.com/api/weather';

  constructor(private http:HttpClient){ }

  SearchWeatherByArea(city:String):Observable<any>
  {

    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key",this.key)
    .set("X-RapidAPI-Host","the-weather-api.p.rapidapi.com");

    const options= { headers};

    return this.http.get(`${this.url}/${city}`,options)
  }
  
}
