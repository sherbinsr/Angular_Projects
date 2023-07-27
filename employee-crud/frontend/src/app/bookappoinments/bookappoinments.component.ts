import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookappoinments',
  templateUrl: './bookappoinments.component.html',
  styleUrls: ['./bookappoinments.component.css']
})
export class BookappoinmentsComponent implements OnInit {
   
    constructor(private routes:Router){}
    ngOnInit(): void {
     
    }
  
    submit(){
    alert("we will call you");
    this.routes.navigate(['dasboard'])
    }

}
