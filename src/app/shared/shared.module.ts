import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CarouselComponent } from './components/carousel/carousel.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';

@NgModule({
  declarations: [CarouselComponent, MoviesListComponent, TabViewComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, MoviesListComponent, TabViewComponent],
})
export class SharedModule {}
