import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route
import { UserRoutingModule } from './app-routing.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

// PrimeNG Modules
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { StepsModule } from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PasswordModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    InputMaskModule,
    StepsModule,
    TooltipModule,
  ],
  exports: [UserComponent],
})
export class UserModule {}
