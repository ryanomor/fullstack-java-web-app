import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { PageNotFoundComponent } from './components/pageNotFound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks/:username', component: TaskComponent },
  { path: ':username/friends', component: FriendsListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
