import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './app/components/login.component.html'
})
export class LoginComponent implements OnInit {
  credentials = { username: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit() { }

  /**
   * Login a user
   */
  login() {
    this.errorMessage = '';

    this.service.login(this.credentials.username)
      .subscribe(
      data => {
        this.router.navigate(['home']);
        console.log(data);
      },
      err => {
        this.errorMessage = err;
        console.error(err);
      }
      );
  }

}