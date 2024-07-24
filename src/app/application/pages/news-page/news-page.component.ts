import { Component } from '@angular/core';
import {NavComponent} from "../../../shared/";
import {PersNewsComponent} from "../../components/pers-news/pers-news.component";

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [
    NavComponent,
    PersNewsComponent
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
