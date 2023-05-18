import { User } from './../../interfaces/user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  userSubs: Subscription;

  loading = false;
  openDeleteModal = false;

  deleteUserSubs: Subscription;

  user: User = {
    avatar: '',
    email: 'undefined',
    first_name: 'undefined',
    id: 0,
    last_name: 'undefined',
  };

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.loading = true;
    this.paramsSubscription = this.route.queryParams.subscribe((res: any) => {
      this.usersService.getUserById(+res.id).subscribe((user: any) => {
        this.user = user.data;
        this.loading = false;
      });
    });
  }

  deleteUser() {
    this.deleteUserSubs = this.usersService
      .deleteUser(this.user.id)
      .subscribe((deletedUser: any) => {
        this.router.navigate(['/users-page']);
      });
  }

  onClickEdit() {}
  onClickDelete() {
    this.showDeleteModal();
  }

  showDeleteModal() {
    this.openDeleteModal = true;
  }
  closeDeleteModal() {
    this.openDeleteModal = false;
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
    if (this.userSubs) this.userSubs.unsubscribe();
    if (this.deleteUserSubs) this.deleteUserSubs.unsubscribe();
  }
}
