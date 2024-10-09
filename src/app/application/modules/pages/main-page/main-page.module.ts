import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
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
  imports: [CommonModule, SharedModule],
  exports: [
    MainPageComponent,
    SloganComponent,
    PhotoCarouselComponent,
    AboutUsComponent,
    MapBlockComponent,
    PartnersComponent,
  ],
})
export class MainPageModule {}
