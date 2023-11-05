import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { ProfileComponent } from './profile/profile.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    InputMaskModule,
    StepsModule,
    TooltipModule
  ],
  exports: [LoginComponent, RegisterComponent, ProfileComponent],
})
export class UserModule {}
