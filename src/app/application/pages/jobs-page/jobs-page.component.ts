import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../shared";
import {JobsLandingComponent} from "../../components/jobs-landing/jobs-landing.component";
import {VacanciesBlockComponent} from "../../components/vacancies-block/vacancies-block.component";

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [
    NavComponent,
    InfoComponent,
    JobsLandingComponent,
    VacanciesBlockComponent
  ],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss'
})
export class JobsPageComponent {

}
