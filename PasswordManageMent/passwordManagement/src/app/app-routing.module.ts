import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/homepage/login/login.component';
import { RegisterComponent } from './components/homepage/register/register.component';
import { AddDetailsComponent } from './components/add-details/add-details.component';

const routes: Routes = [

 
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'dashboard/:id',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'add/:id',component:AddDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
