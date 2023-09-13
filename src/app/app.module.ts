import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuiensoyComponent,
    NavigationbarComponent,
    FooterComponent,
    SignupComponent,
  ],
  imports: [
    MdbCheckboxModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
