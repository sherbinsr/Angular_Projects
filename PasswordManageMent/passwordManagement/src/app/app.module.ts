import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/homepage/login/login.component';
import { RegisterComponent } from './components/homepage/register/register.component';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddDetailsComponent } from './components/add-details/add-details.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBar } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AddDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatMenuModule,
      MatIconModule,
      MatDialogModule,
      MatFormFieldModule,

      ReactiveFormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
