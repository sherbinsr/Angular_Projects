import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  emailId:string="";
  password:string="";

  user!:User[];

 public uId=1;

 @Output() timeEvent = new EventEmitter();


  constructor(private http:HttpClient ,private router:Router ,private userservice:UserService){}
  
  ngOnInit(): void {
   
   this.getAllUsers();
  }
    private getAllUsers(){
    this.userservice.getAllUsers().subscribe(data =>{
      this.user=data;

    });
  }
  login()
  { let bodyData =
    {
      "emailId":this.emailId,
      "password":this.password
    };
    this.http.post("http://localhost:8080/login",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      if(resultData.message =="Email Not exists")
      {
        alert("Email Not exists");
      }
      else if(resultData.message =="Login Success")
      {
        console.log(resultData.userid);
          this.uId =  resultData.userid;
         this.gotodashboard(this.uId)
      }
      else
      {
        alert("incorrect email or password");
      }
    });
  }
  userDataId()
  {
    return this.uId;
  }
  gotodashboard(id:number)
  {
    this.router.navigate(['/dashboard',this.uId]);
  }


}
