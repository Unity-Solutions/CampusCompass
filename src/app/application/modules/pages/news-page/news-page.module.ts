import { NgModule } from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {NewsMainComponent, MoreNewsComponent, NewsEndingBarComponent, PersNewsComponent, NewsPageComponent} from "./";
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {routes} from "./news.routes";


@NgModule({
  declarations: [NewsPageComponent,
    NewsMainComponent,
    NewsEndingBarComponent,
    MoreNewsComponent,
    PersNewsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [NewsPageComponent]
})
export class NewsPageModule { }
