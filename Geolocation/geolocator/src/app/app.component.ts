import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'geolocator';
  location:any;
  latitude:any;
  
  constructor(private api:ApiService){}
  //via api
  ngOnInit(): void {
   
    this.api.getLocation().subscribe((res)=>{
      console.log(res);
      this.location=res;
    })
  }
  locate(){
  //via fuction
    navigator.geolocation.getCurrentPosition((position)=>{

      console.log(position);
      this.latitude= position.coords.latitude;
      console.log(this.latitude);
    })
  }
}

