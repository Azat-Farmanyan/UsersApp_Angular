import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [UserCardComponent, BtnComponent],
  imports: [CommonModule],
  exports: [UserCardComponent, BtnComponent],
})
export class SharedModule {}
