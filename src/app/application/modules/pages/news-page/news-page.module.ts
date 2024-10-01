import { NgModule } from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {NewsMainComponent, MoreNewsComponent, NewsEndingBarComponent, PersNewsComponent, NewsPageComponent} from "./";


@NgModule({
  declarations: [NewsPageComponent,
    NewsEndingBarComponent,
    MoreNewsComponent,
    PersNewsComponent],
  imports: [
    CommonModule,
    NgIf,
    NgFor
  ],
  exports: [NewsPageComponent]
})
export class NewsPageModule { }
