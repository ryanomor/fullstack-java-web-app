import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public credentials = { username: '' };
  public users: User[];
  private user: User;
  public loggedIn: boolean;
  private errorMessage: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() { 
    this.service.getUsers().subscribe(users => this.users = users);
  }

  /**
   * Login a user
   */
  login(): void {
    this.errorMessage = '';

    this.user = this.users.find(user => user.username === this.credentials.username);

    if (this.user) {
      this.loggedIn = true;
      console.log("Login Compoenent", this.loggedIn);
      this.router.navigate([`tasks/${this.user.username}`]);
    } else {
      this.errorMessage = "Incorrect username";
      this.credentials.username = '';
    }
  }

  getUser(): User {
    return this.user;
  }

}
