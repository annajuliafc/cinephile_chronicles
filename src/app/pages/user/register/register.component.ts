import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  items!: MenuItem[];
  activeIndex: any = 0;

  constructor() {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        command: (event) => this.changeStep(event),
      },
      {
        label: 'Account',
        command: (event) => this.changeStep(event),
      },
    ];
  }

  changeStep(event: MenuItemCommandEvent) {
    this.activeIndex = event.index;
  }

  onChangeStep() {
    this.activeIndex = 1;
  }
}
