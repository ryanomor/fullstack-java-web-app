import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pageNotFound.component';
import { LoginComponent } from './components/login.component';
import { TaskComponent } from './components/task.component';

import { UserService } from './shared/services/user.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: TaskComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
