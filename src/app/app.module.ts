import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},// Will be selected when localhost:4200
  {path: "users", component: UsersComponent}, //when localhost:4200/users
  {path: "servers", component: ServersComponent} // when localhost:4200/servers
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * To register the routes in our angular app, we need to make a constant of type "Routes". It will be an array as we will have multiple routes and each route will be a javascript object.
 * 
 * These objects have to follow a specific pattern to make Angular undertstand. According this structure, each object in the array will have two keys.
 * 
 * 1. path: a string (without slash)
 *  The string you will mention here will be attached after the domain name.
 * 
 * 2. component: the component need to be loaded in view when the corresponding path is reached.
 * 
 * For ex: {path: 'users', component: UsersComponent}
 * 
 * The string we mentioned for path here will help Angular determine which route from the array of routes should get selected, If the user enter something in URL or clicked on any link in our app.
 * 
 * The 2nd key component helps Angular to decide what action need to be taken or which component it needs to load when that particular route is selected.
 * 
 * After making the routes array, to make our routing set up complete or to make angular know about the routes, we need to register it in imports array; like:
 * RouterModule.forRoot(array of routes object); 
 * 
 * One last step for setting up route will be in app.component.html 
 */