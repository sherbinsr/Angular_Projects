import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerFrom!:FormGroup

  userName:string="";
  emailId:string="";
  password:string="";

  constructor(private http:HttpClient ,private router:Router,private formBuilder:FormBuilder){}

  ngOnInit()
  {
    this.registerFrom = this.formBuilder.group({
      fullName:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }


  register()
  { 
    if(this.registerFrom.valid)
    {
    let bodyData =
    {
      "userName":this.userName,
      "emailId":this.emailId,
      "password":this.password
    };
    this.http.post("http://localhost:8080/user",bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("user registered successfully");
    });

    this.router.navigate(['/login'])

  }
  else
  {
    alert("Enter the data to register");
  
  }

  }}


