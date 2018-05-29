import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authUrl: string = 'http://localhost:8080/tasks/user/';
  private loggedIn: boolean = false;
  public tasks = [];

  constructor(private http: Http) { }

  /**
   * Log the user in
   */
  login(username: string): Observable<string> {
    return this.http.get(`${this.authUrl}` +  username )
      .map(res => res.json())
      .do(res => {
        this.tasks = res;
        this.loggedIn = true;
      })
      .catch(this.handleError);
  }

  /**
   * Log the user out
   */
  logout() {
    this.loggedIn = false;
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}