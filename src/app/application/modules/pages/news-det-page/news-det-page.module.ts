import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DetPageComponent } from './det-page/det-page.component'
import { NewsContentComponent } from './news-content/news-content.component'
import { NewsStartComponent } from './news-start/news-start.component'
import { SharedModule } from '../../../../shared/shared.module'

@NgModule({
  declarations: [DetPageComponent, NewsContentComponent, NewsStartComponent],
  imports: [CommonModule, SharedModule],
  exports: [DetPageComponent, NewsContentComponent, NewsStartComponent],
})
export class NewsDetPageModule {}
