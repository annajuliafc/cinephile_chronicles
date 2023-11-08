import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route
import { NotFoundRoutingModule } from './not-found-routing.module';

// Components
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
