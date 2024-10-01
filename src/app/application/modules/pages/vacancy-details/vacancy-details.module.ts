import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetLandingComponent, JobDetInfoComponent, JobDetCompanyComponent, JobDetSubComponent} from "./";
import {VacancyDetailComponent} from "./"


@NgModule({
  declarations: [VacancyDetailComponent,
    JobDetInfoComponent,
    JobDetCompanyComponent,
    JobDetSubComponent,
    JobDetLandingComponent],
  imports: [
    CommonModule,
  ],
  exports:[VacancyDetailComponent,
    JobDetInfoComponent,
    JobDetCompanyComponent,
    JobDetSubComponent,
    JobDetLandingComponent]
})
export class VacancyDetailsModule { }
