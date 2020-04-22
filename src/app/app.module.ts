import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes =[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(ROUTES)
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
