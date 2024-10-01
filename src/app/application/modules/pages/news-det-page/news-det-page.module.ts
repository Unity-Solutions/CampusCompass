import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetPageComponent} from "./det-page/det-page.component";
import {SharedModule} from "../../../shared/shared.module";
import {NewsStartComponent} from "./news-start/news-start.component";
import {NewsContentComponent} from "./news-content/news-content.component";
import {NewsEndComponent} from "./news-end/news-end.component";


@NgModule({
  declarations: [DetPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    NewsStartComponent,
    NewsContentComponent,
    NewsEndComponent
  ]
})
export class NewsDetPageModule { }
