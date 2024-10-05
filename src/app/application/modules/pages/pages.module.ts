import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent, InfoComponent, MapComponent } from '../../../shared';
import {
  MainPageComponent,
  MapBlockComponent,
  SloganComponent,
  AboutUsComponent,
  PhotoCarouselComponent,
  PartnersComponent,
} from '.';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';

@NgModule({
  declarations: [
    MainPageComponent,
    MapBlockComponent,
    PartnersComponent,
    PhotoCarouselComponent,
    SloganComponent,
    AboutUsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [
    MainPageComponent,
    MapBlockComponent,
    PartnersComponent,
    PhotoCarouselComponent,
    SloganComponent,
    AboutUsComponent,
  ],
})
export class PagesModule {}
