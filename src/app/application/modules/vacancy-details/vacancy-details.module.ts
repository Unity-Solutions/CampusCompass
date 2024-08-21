import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoComponent, NavComponent} from "../../../shared";
import {JobDetLandingComponent, JobDetInfoComponent, JobDetCompanyComponent, JobDetSubComponent} from "./";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    JobDetInfoComponent,
    JobDetCompanyComponent,
    JobDetSubComponent,
    JobDetLandingComponent
  ]
})
export class VacancyDetailsModule { }
