import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [CommonModule, UsersPageRoutingModule, SharedModule],
})
export class UsersPageModule {}
