import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route
import { FavoritesRoutingModule } from './favorites-routing.module';

// Components
import { FavoritesComponent } from './favorites.component';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
