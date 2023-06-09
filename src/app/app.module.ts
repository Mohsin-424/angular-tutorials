import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
// Create App Routes Here (an array of objects)
const appRoutes: Routes = [
  { path : '' , component:HomeComponent} ,
  // To tell the synamic route data
  // { path : 'users/1/leela' , component:UserComponent} ,
  
  { path : 'users/:id/:name' , component:UserComponent} ,
  { path : 'categories' , component:CategoriesComponent} ,
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    // Routes is an array  of javascript objects only  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
