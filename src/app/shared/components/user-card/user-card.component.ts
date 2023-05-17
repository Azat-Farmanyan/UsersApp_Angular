import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Output() onDelete = new EventEmitter();

  @Input() user: User = {
    avatar: '',
    email: 'undefined',
    first_name: 'undefined',
    id: 0,
    last_name: 'undefined',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickAbout() {
    console.log('onClickAbout');
    this.router.navigate(['user-page'], {
      queryParams: { id: this.user.id },
    });
  }

  onClickDelete() {
    this.onDelete.emit();
  }
}
