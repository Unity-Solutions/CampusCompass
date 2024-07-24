import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NewsPageComponent} from "./application/pages/news-page/news-page.component";
import {MainPageComponent} from "./application/pages/main-page/main-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
];
