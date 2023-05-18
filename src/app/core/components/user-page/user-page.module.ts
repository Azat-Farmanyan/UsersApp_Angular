import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserPageComponent, EditModalComponent],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UserPageModule {}
