import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pageNotFound.component';
import { AppRoutingModule } from './/app-routing.module';

import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { FriendsListComponent } from './components/friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    PageNotFoundComponent,
    FriendsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [
    UserService,
    TaskService,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
