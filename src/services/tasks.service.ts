import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor(private http: Http) { }

  getTasks() {
    return (
      this.http
          .get(`https://jsonplaceholder.typicode.com/todos`) // change to the localhost route that serves tasks table
          .map(res => res.json())
    );
  }
}
