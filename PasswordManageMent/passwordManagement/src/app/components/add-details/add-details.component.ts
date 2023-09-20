import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServiceService } from 'src/user-data-service.service';
import { UserData } from 'src/userData';
 
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss'],

})
export class AddDetailsComponent implements OnInit {

  
  userData:UserData = new UserData();
  public id=1;

  constructor(private UserDataService:UserDataServiceService,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.getUserId();
  }
  getUserId()
  {
    this.http.get("http://localhost:8080/userid").subscribe((resultData:any)=>
    {
      
        console.log(resultData.userid);
       this.id =  resultData.userid;
    });
  }
  add(id:number)
  {
   
     this.UserDataService.putDataToCurrentUser(this.id,this.userData).subscribe(data =>
      {
        alert("added successfull");
      })
     this.router.navigate(['/dashboard',this.id]);
  }


}


