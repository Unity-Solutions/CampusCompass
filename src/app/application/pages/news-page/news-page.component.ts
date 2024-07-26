import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../shared/";
import {PersNewsComponent} from "../../components/pers-news/pers-news.component";
import {NewsMainComponent} from "../../components/news-main/news-main.component";
import {MoreNewsComponent} from "../../components/more-news/more-news.component";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    NavComponent,
    PersNewsComponent,
    NewsMainComponent,
    MoreNewsComponent,
    InfoComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
