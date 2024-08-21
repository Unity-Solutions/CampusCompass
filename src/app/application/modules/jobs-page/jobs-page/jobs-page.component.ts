import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../../shared";
import {JobsLandingComponent, VacanciesBlockComponent} from "../";

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
