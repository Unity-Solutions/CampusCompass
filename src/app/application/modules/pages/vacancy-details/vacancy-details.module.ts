import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetLandingComponent, JobDetInfoComponent, JobDetCompanyComponent, JobDetSubComponent} from "./";
import {VacancyDetailComponent} from "./"
import {SharedModule} from "../../../../shared/shared.module";


@NgModule({
  declarations: [VacancyDetailComponent,
    JobDetInfoComponent,
    JobDetCompanyComponent,
    JobDetSubComponent,
    JobDetLandingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[VacancyDetailComponent,
    JobDetInfoComponent,
    JobDetCompanyComponent,
    JobDetSubComponent,
    JobDetLandingComponent]
})
export class VacancyDetailsModule { }
