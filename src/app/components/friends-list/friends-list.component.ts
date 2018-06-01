import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';
import { LoginComponent } from '../login/login.component';
import { User } from '../../models/user';
import { Task } from '../../models/task';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  private users: User[];
  private friends: User[];
  private friendsTasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private taskService: TaskService,
    private userService: UserService,
    private login: LoginComponent
  ) { }

  ngOnInit() {
    if (!this.login.loggedIn) {
      this.router.navigate([`/`]);
    }

    let username = this.route.snapshot.paramMap.get('username');
    this.getFriends(username);
    this.getFriendsTask(this.friends);
  }

  getFriends(username: string) {
    this.userService.getUsers()
      .subscribe(users => {
        this.friends = users.filter(user => user.username !== username)
        console.log(this.friends);
      });
  }

  getFriendsTask(users: User[]) {
    for (let friend of this.friends) {
      this.taskService.getTasks(friend.username)
        .subscribe(tasks => {
          this.friendsTasks.concat(tasks);
          console.log(this.friendsTasks);
        });
    }
  }
}
