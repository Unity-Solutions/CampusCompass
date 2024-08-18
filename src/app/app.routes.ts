import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NewsPageComponent} from "./application/pages/news-page/news-page.component";
import {MainPageComponent} from "./application/pages/main-page/main-page.component";
import {StudentsPageComponent} from "./application/pages/students-page/students-page.component";
import {UniversitiesPageComponent} from "./application/pages/universities-page/universities-page.component";
import {MapBlockStudentsComponent} from "./application/components/map-block-students/map-block-students.component";
import {JobsPageComponent} from "./application/pages/jobs-page/jobs-page.component";
import {VacancyDetailComponent} from "./application/pages/vacancy-detail/vacancy-detail.component";
import {LogInComponent} from "./application/pages/log-in/log-in.component";
import {RegistrationComponent} from "./application/pages/registration/registration.component";
import {ProfileComponent} from "./application/pages/profile/profile.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'news', component: NewsPageComponent},
  {path: 'students', component: StudentsPageComponent},
  {path: 'universities', component: UniversitiesPageComponent},
  {path: 'jobs', component: JobsPageComponent},
  {path: 'jobs/:id', component: VacancyDetailComponent},
  {path: 'login', component: LogInComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'prof', component: ProfileComponent},
];
