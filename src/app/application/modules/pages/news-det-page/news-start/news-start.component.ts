import { Component } from '@angular/core'
import { VarSharedService } from '../var-shared.service'

@Component({
  selector: 'app-news-start',
  templateUrl: './news-start.component.html',
  styleUrl: './news-start.component.scss',
})
export class NewsStartComponent {
  constructor(public sharedService: VarSharedService) {}
}
