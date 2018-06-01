import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private userTaskUrl: string = `http://localhost:8080/tasks/user/`;
  private hostUrl: string = `http://localhost:8080/tasks`;

  constructor(private http: HttpClient) { }

  getTasks(username: string): Observable<Task[]> {
    return this.http.get<Task[]>(this.userTaskUrl + username);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.hostUrl);
  }
}
