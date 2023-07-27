import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

   {path:'', redirectTo:'navigation',pathMatch:"full"},
   {path:"navigation",component:NavigationComponent},
   { path:"login", component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
   }
