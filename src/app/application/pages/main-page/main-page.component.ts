import { Component } from '@angular/core';
import {NavComponent} from "../../../shared/";
import {MapBlockComponent} from "../../components/map-block/map-block.component";
import {PartnersComponent} from "../../components/partners/partners.component";
import {PhotoCarouselComponent} from "../../components/photo-carousel/photo-carousel.component";
import {AboutUsComponent} from "../../components/about-us/about-us.component";
import {SloganComponent} from "../../components/slogan/slogan.component";
import {InfoComponent} from "../../../shared/";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NavComponent,
    MapBlockComponent,
    PartnersComponent,
    PhotoCarouselComponent,
    AboutUsComponent,
    SloganComponent,
    InfoComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
