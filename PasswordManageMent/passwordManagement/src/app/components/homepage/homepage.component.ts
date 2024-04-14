import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserData } from 'src/userData';
import { UserDataServiceService } from 'src/user-data-service.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddDetailsComponent } from '../add-details/add-details.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
  
})

export class HomepageComponent  implements OnInit{

  id!:number;
  usersData!: UserData[];
  constructor(private route:ActivatedRoute,private router:Router,private userDataService:UserDataServiceService,public dialog: MatDialog){}
  ngOnInit(): void {
   this.getuserdata();
  }
  getuserdata()
  {
    this.id = this.route.snapshot.params['id'];
    this.userDataService.getUserDataByUserId(this.id).subscribe(data=>{
      this.usersData=data;
      console.log(this.usersData);
    });
  }
  openDialog(id:number)
  {
    this.dialog.open(AddDetailsComponent);
    this.router.navigate(['/add',this.id])
  }
  deleteData(userDataId:number)
  {
    this.userDataService.deleteUserData(userDataId).subscribe(data=>{
      console.log(data);
     
    }
    , err => {
      console.log(err.message);
  });
  alert("deleted successfull please refresh your page");
  }
  
}
