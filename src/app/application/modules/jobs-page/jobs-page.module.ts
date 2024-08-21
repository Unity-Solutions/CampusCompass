import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent} from "../../../shared";
import {JobsPageComponent, VacanciesBlockComponent, JobsLandingComponent} from "./";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    JobsPageComponent,
    VacanciesBlockComponent,
    JobsLandingComponent
  ]
})
export class JobsPageModule { }
