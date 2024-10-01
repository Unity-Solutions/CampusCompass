import { Component } from '@angular/core';
import {VarSharedService} from "../var-shared.service";

@Component({
  selector: 'app-news-content',
  standalone: true,
  imports: [],
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss'
})
export class NewsContentComponent {
  constructor(public sharedService: VarSharedService) {
  }

}
