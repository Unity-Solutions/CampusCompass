import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent, MapComponent} from "../../../shared";
import {MainPageComponent, MapBlockComponent, SloganComponent, AboutUsComponent, PhotoCarouselComponent, PartnersComponent} from "./";

@NgModule({
  declarations: [],
  imports: [
    InfoComponent,
    NavComponent,
    CommonModule,
    MainPageComponent,
    SloganComponent,
    PhotoCarouselComponent,
    AboutUsComponent,
    MapBlockComponent,
    PartnersComponent,
    MapComponent
  ]
})
export class MainPageModule { }
