import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookappoinmentsComponent } from './bookappoinments/bookappoinments.component';
import { ContactComponent } from './contact/contact.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
   {path:'login', component:LoginComponent},
   {path:'signup', component:SignupComponent},
   {path:'dasboard', component:DasboardComponent},
   {path:'about', component:AboutComponent},
   {path:'contact', component:ContactComponent},
   {path:'ourservice',component:OurserviceComponent},
   {path:'location', component:LocationComponent},
   {path:'bookappoinments',component:BookappoinmentsComponent},
   {path:'doctorlist',component:DoctorlistComponent},
   {path:'payment',component:PaymentComponent}

     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {   }
