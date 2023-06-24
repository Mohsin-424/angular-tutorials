import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Create App Routes Here (an array of objects)
const appRoutes: Routes = [
  { path : '' , component:HomeComponent} ,
   
  // To tell the synamic route data
  // { path : 'users/1/leela' , component:UserComponent} ,

  { path : 'users', 
  // To add path of child user components we il change it like this
  component : UsersComponent,
children: [
  {path: ':id/:name' ,component: UserComponent},
 
  { path: ':id/:name/edit' ,component: EditUserComponent},],
},

  { path : 'categories' , component:CategoriesComponent},
  { path : 'not-found' ,
   component: PageNotFoundComponent},
  //  User here can write anything and if password does not match it will be redirected
    { path : '**', redirectTo : ' not-found '},
];
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
