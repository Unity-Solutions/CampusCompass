import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NewsPageComponent} from "./application/modules/news-page/news-page/news-page.component";
import {MainPageComponent} from "./application/modules/main-page/main-page/main-page.component";
import {StudentsPageComponent} from "./application/modules/students-page/students-page/students-page.component";
import {UniversitiesPageComponent} from "./application/modules/universities-page/universities-page/universities-page.component";
import {MapBlockStudentsComponent} from "./application/modules/students-page/map-block-students/map-block-students.component";
import {JobsPageComponent} from "./application/modules/jobs-page/jobs-page/jobs-page.component";
import {VacancyDetailComponent} from "./application/modules/vacancy-details/vacancy-detail/vacancy-detail.component";
import {LogInComponent} from "./application/modules/autorisation/log-in/log-in.component";
import {RegistrationComponent} from "./application/modules/autorisation/registration/registration.component";
import {ProfileComponent} from "./application/modules/profile-page/profile/profile.component";

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
