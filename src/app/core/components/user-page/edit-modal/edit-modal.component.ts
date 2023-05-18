import { User } from './../../../interfaces/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface UpdatedUser {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter<UpdatedUser>();

  @Input() user: User = {
    avatar: '',
    email: '',
    first_name: '',
    id: 0,
    last_name: '',
  };

  editForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.editForm = new FormGroup({
      firstName: new FormControl(this.user.first_name, Validators.required),
      lastName: new FormControl(this.user.last_name, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  cancel() {
    setTimeout(() => {
      this.onCancel.emit();
    }, 0);
  }
  save() {
    // console.log(this.editForm.value);

    const newUser: UpdatedUser = this.editForm.value;

    setTimeout(() => {
      this.onSave.emit(newUser);
    }, 0);
  }
}
