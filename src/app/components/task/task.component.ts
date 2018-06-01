import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { TaskService } from '../../services/task.service';
import { User } from '../../models/user';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private username: string;
  private userTasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: TaskService,
    private router: Router,
    private login: LoginComponent
  ) { }

  ngOnInit() {
    // if (this.login.loggedIn === false) {
    //   this.router.navigate([`/`]);
    // }
    this.username = this.route.snapshot.paramMap.get('username');
    this.getTasks();

    console.log("Task Component", this.login);
  }

  /**
   * Get user's tasks
   */
  getTasks() {
    this.service.getTasks(this.username).subscribe(tasks => this.userTasks = tasks);
  }

  /**
   * Logout
   */
  logout(): void {
    this.login.loggedIn = false;
    this.router.navigate([`/`]);
  }

  /**
   * Update task's completed key
   */
  handleCheckbox(task: Task): void {
    this.userTasks.find(userTask => userTask.id === task.id);

    if (task.completed) {
      task.completed = 0;
    } else {
      task.completed = 1;
    }
  }
}
