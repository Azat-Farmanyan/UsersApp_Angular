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
  // users: User[] = [];

  usersSubs: Subscription;
  deleteUserSubs: Subscription;

  loading = false;
  deletedUserId: number | null = 0;
  pageNumber = 1;
  openDeleteModal = false;
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  // clicked() {
  //   console.log('clicked');
  // }

  fetchUsers() {
    this.loading = true;
    this.usersSubs = this.usersService
      .getUsers(this.usersService.activePage)
      .subscribe((el: any) => {
        this.usersService.users = el.data;
        this.loading = false;
        // console.log(this.users);
      });
  }

  deleteUser() {
    this.deleteUserSubs = this.usersService
      .deleteUser(this.deletedUserId as number)
      .subscribe(() => {
        this.usersService.users = this.usersService.users.filter(
          (user) => +user.id !== this.deletedUserId
        );
        this.closeDeleteModal();
      });
  }

  showDeleteModal(userId: number) {
    this.openDeleteModal = true;
    this.deletedUserId = userId;
  }
  closeDeleteModal() {
    this.openDeleteModal = false;
  }
  changePage(pageNum: number) {
    this.usersService.activePage = pageNum;
    this.pageNumber = this.usersService.activePage;
    this.fetchUsers();
  }

  ngOnDestroy(): void {
    if (this.usersSubs) this.usersSubs.unsubscribe;
    if (this.deleteUserSubs) this.deleteUserSubs.unsubscribe();
  }
}
