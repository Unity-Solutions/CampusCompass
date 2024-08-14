import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NewsPageComponent} from "./application/pages/news-page/news-page.component";
import {MainPageComponent} from "./application/pages/main-page/main-page.component";
import {StudentsPageComponent} from "./application/pages/students-page/students-page.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'students', component: StudentsPageComponent},
];
