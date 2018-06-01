import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private usersUrl: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
