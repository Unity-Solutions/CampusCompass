import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../../shared";
import {PersNewsComponent, NewsMainComponent, MoreNewsComponent, NewsEndingBarComponent} from "../";


@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    NavComponent,
    PersNewsComponent,
    NewsMainComponent,
    MoreNewsComponent,
    InfoComponent,
    NewsEndingBarComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
