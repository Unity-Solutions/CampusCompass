import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../../shared";
import {JobDetLandingComponent, JobDetInfoComponent, JobDetCompanyComponent, JobDetSubComponent} from "../";


@Component({
  selector: 'app-vacancy-detail',
  standalone: true,
  imports: [
    InfoComponent,
    NavComponent,
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
