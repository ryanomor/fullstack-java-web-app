import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/services/tasks.service';

@Component({
  template: `
    <div>
      <h2>Tasks</h2>

      <div>
        <div [hidden]="tasks.length">No tasks yet!</div>
        <task-list *ngFor="let task of tasks">
          <p> {{task.task}} </p>
          <p> {{task.completed ? Task completed : Task incomplete}} </p>
        </task-list>
      </div>

    </div>
  `
})
export class TaskComponent implements OnInit {
  tasks = [];
  username: string = "Ryry";

  constructor(private service: TasksService) { }

  ngOnInit() {
    this.service.getTasks(this.username)
      .map(res => res.json())
      .subscribe(tasks => this.tasks = tasks);
  }
}
