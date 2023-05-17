import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users: User[] = [];

  usersSubs: Subscription;

  loading = false;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  clicked() {
    console.log('clicked');
  }

  fetchUsers() {
    this.loading = true;
    this.usersSubs = this.usersService.getUsers().subscribe((el: any) => {
      this.users = el.data;
      this.loading = false;
      // console.log(this.users);
    });
  }

  ngOnDestroy(): void {
    if (this.usersSubs) this.usersSubs.unsubscribe;
  }
}
