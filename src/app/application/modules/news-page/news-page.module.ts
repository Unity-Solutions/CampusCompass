import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent} from "../../../shared";
import {NewsMainComponent, MoreNewsComponent, NewsEndingBarComponent, PersNewsComponent, NewsPageComponent} from "./";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    NewsPageComponent,
    NewsEndingBarComponent,
    NewsMainComponent,
    MoreNewsComponent,
    PersNewsComponent
  ]
})
export class NewsPageModule { }
