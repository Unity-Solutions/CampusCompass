import { Component } from '@angular/core'
import { VarSharedService } from '../../../../services'

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrl: './news-content.component.scss',
})
export class NewsContentComponent {
  constructor(public sharedService: VarSharedService) {}
}
