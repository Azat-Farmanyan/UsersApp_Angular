import { User } from './../../interfaces/user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';
import { UpdatedUser } from './edit-modal/edit-modal.component';

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
  openEditModal = false;

  deleteUserSubs: Subscription;
  updateUserSubs: Subscription;

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
    // console.log('fetch');
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
  updateUser(updatedUser: UpdatedUser) {
    // console.log('update', updatedUser);
    this.updateUserSubs = this.usersService
      .updateUser(this.user.id, updatedUser)
      .subscribe((updatedUserResponse: any) => {
        console.log(updatedUserResponse);
        this.closeEditModal();
        this.user.first_name = updatedUserResponse!.firstName;
        this.user.last_name = updatedUserResponse!.lastName;
        this.user.email = updatedUserResponse!.email;
        // this.fetchUser();
      });
  }

  onClickEdit() {
    this.showEditModal();
  }
  onClickDelete() {
    this.showDeleteModal();
  }

  showDeleteModal() {
    this.openDeleteModal = true;
  }
  closeDeleteModal() {
    this.openDeleteModal = false;
  }

  showEditModal() {
    this.openEditModal = true;
  }
  closeEditModal() {
    this.openEditModal = false;
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
    if (this.userSubs) this.userSubs.unsubscribe();
    if (this.deleteUserSubs) this.deleteUserSubs.unsubscribe();
    if (this.updateUserSubs) this.updateUserSubs.unsubscribe();
  }
}
