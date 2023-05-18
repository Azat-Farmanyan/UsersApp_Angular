import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BtnComponent } from './components/btn/btn.component';
import { ConfirmDeleteModalComponent } from './components/confirm-delete-modal/confirm-delete-modal.component';

@NgModule({
  declarations: [UserCardComponent, BtnComponent, ConfirmDeleteModalComponent],
  imports: [CommonModule],
  exports: [UserCardComponent, BtnComponent, ConfirmDeleteModalComponent],
})
export class SharedModule {}
