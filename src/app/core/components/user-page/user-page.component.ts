import { User } from './../../interfaces/user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  user: User = {
    avatar: '',
    email: 'undefined',
    first_name: 'undefined',
    id: 0,
    last_name: 'undefined',
  };

  constructor(
    private router: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.loading = true;
    this.paramsSubscription = this.router.queryParams.subscribe((res: any) => {
      this.usersService.getUserById(+res.id).subscribe((user: any) => {
        this.user = user.data;
        this.loading = false;
      });
    });
  }

  onClickEdit() {}
  onClickDelete() {}

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
    if (this.userSubs) this.userSubs.unsubscribe();
  }
}
