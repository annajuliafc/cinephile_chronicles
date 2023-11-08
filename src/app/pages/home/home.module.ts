import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route
import { HomeRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
