import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit, OnChanges {
  @Input() btnTitle: string = '';
  @Input() btnDisabled: boolean = false;
  @Output() onClickBtn = new EventEmitter();
  btnIconFolderPAth = '../../../../assets/icons/';

  icon = '';
  title = '';
  color = '';

  buttons: {
    iconPath: string;
    title: string;
    color: string;
  }[] = [
    {
      iconPath: this.btnIconFolderPAth + 'cancel.svg',
      title: 'Cancel',
      color: '#8f8f8f',
    },
    {
      iconPath: this.btnIconFolderPAth + 'delete.svg',
      title: 'Delete',
      color: '#EA2A00',
    },
    {
      iconPath: this.btnIconFolderPAth + 'edit.svg',
      title: 'Edit',
      color: '#6700EA',
    },
    {
      iconPath: this.btnIconFolderPAth + 'enter.svg',
      title: 'About',
      color: '#007AEA',
    },
    {
      iconPath: this.btnIconFolderPAth + 'log-out.svg',
      title: 'Log Out',
      color: '#EA2A00',
    },
    {
      iconPath: this.btnIconFolderPAth + 'save.svg',
      title: 'Save',
      color: '#009B3E',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.getBtnByTitle(this.btnTitle);
  }

  getBtnByTitle = (title: string) => {
    const currentBtn = this.buttons.filter((el) => el.title === title);
    if (currentBtn.length > 0) {
      this.icon = currentBtn[0]!.iconPath;
      this.title = currentBtn[0]!.title;
      this.color = currentBtn[0]!.color;
    }
  };

  click() {
    this.onClickBtn.emit();
  }
}
