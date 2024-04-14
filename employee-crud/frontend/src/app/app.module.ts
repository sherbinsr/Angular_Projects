import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { LocationComponent } from './location/location.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BookappoinmentsComponent } from './bookappoinments/bookappoinments.component'
import { ToastrModule } from 'ngx-toastr';
import { DoctorlistComponent } from './doctorlist/doctorlist.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DasboardComponent,
    AboutComponent,
    ContactComponent,
    OurserviceComponent,
    LocationComponent,
    BookappoinmentsComponent,
    DoctorlistComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
