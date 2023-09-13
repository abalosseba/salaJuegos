import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch: 'full' },
  {path:"login",component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"quiensoy", component: QuiensoyComponent},
  {path:"signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
