import { NgModule } from '@angular/core'
import { CommonModule, NgFor, NgOptimizedImage } from '@angular/common'
import {
  MainPageComponent,
  MapBlockComponent,
  SloganComponent,
  AboutUsComponent,
  PhotoCarouselComponent,
  PartnersComponent,
} from './'
import { SharedModule } from '../../../../shared/shared.module'
import {
  CarouselComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
  CarouselControlComponent,
} from '@coreui/angular'
import { RouterLink } from '@angular/router'

@NgModule({
  declarations: [
    MainPageComponent,
    SloganComponent,
    PhotoCarouselComponent,
    AboutUsComponent,
    MapBlockComponent,
    PartnersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ThemeDirective,
    RouterLink,
    CarouselControlComponent,
    NgFor,
    NgOptimizedImage,
  ],
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
