import { Component } from '@angular/core';
import {NavComponent, InfoComponent} from "../../../../shared";
import {MapBlockComponent, PartnersComponent, SloganComponent, AboutUsComponent, PhotoCarouselComponent} from "../";

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
