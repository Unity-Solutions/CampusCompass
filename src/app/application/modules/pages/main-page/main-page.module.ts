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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' //Fucking animations that eats my PC

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
    // BrowserAnimationsModule, //Fucking animations that eats my PC
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
