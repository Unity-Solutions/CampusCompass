import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule, NgOptimizedImage } from "@angular/common";

import {
  MainPageComponent,
  MapBlockComponent,
  SloganComponent,
  AboutUsComponent,
  PhotoCarouselComponent,
  PartnersComponent,
} from './'
import { SharedModule } from '../../../../shared/shared.module'
@NgModule({
  declarations: [
    MainPageComponent,
    SloganComponent,
    PhotoCarouselComponent,
    AboutUsComponent,
    MapBlockComponent,
    PartnersComponent,
  ],
  imports: [CommonModule, SharedModule, NgOptimizedImage],
  exports: [
    MainPageComponent,
    SloganComponent,
    PhotoCarouselComponent,
    AboutUsComponent,
    MapBlockComponent,
    PartnersComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainPageModule {}
