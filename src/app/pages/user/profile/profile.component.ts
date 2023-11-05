import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string = 'Anna';
  changePassword: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onChangePassword() {
    this.changePassword = true;
  }
}
