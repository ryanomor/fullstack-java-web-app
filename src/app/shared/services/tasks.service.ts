import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private hostUrl: string = `http://localhost:8080/tasks/user/`;

  constructor(private http: Http) { }

  getTasks(username: string): Observable<String[]> {
    return (
      this.http
          .get(this.hostUrl + username)
    );
  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      const body = err.json() || '';
      const error = body.error || JSON.stringify(body);

      errMessage = `${err.status} - ${error.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }
}
