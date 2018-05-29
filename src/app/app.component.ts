import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { User } from './components/users.component';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) {}

/**
 * Gets users on app initialization
 */
  ngOnInit() {
    this.service.getUsers()
      .subscribe(users => this.users = users);
  }
}
