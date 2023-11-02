import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'User',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-user-edit',
            routerLink: '',
          },
          {
            label: 'Logout',
            icon: 'pi pi-times',
            routerLink: '',
          },
        ],
      },
    ];
  }
}
