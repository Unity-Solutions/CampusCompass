import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../shared";
import {JobsLandingComponent} from "../../components/jobs-landing/jobs-landing.component";
import {VacanciesBlockComponent} from "../../components/vacancies-block/vacancies-block.component";
import {JobDetLandingComponent} from "../../components/job-det-landing/job-det-landing.component";
import {JobDetInfoComponent} from "../../components/job-det-info/job-det-info.component";
import {JobDetCompanyComponent} from "../../components/job-det-company/job-det-company.component";
import {JobDetSubComponent} from "../../components/job-det-sub/job-det-sub.component";

@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [
    InfoComponent,
    JobsLandingComponent,
    NavComponent,
    VacanciesBlockComponent,
    JobDetLandingComponent,
    JobDetInfoComponent,
    JobDetCompanyComponent,
    JobDetSubComponent
  ],
  templateUrl: './vacancy-detail.component.html',
  styleUrl: './vacancy-detail.component.scss'
})
export class VacancyDetailComponent {

}
