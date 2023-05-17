import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal/confirm-delete-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UsersPageComponent, ConfirmDeleteModalComponent],
  imports: [CommonModule, UsersPageRoutingModule, SharedModule],
})
export class UsersPageModule {}
