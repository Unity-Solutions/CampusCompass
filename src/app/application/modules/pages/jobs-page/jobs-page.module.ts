import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobsPageComponent, VacanciesBlockComponent, JobsLandingComponent} from "./";
import {SharedModule} from "../../../../shared/shared.module";


@NgModule({
  declarations: [JobsPageComponent,
    VacanciesBlockComponent,
    JobsLandingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [JobsPageComponent,
    VacanciesBlockComponent,
    JobsLandingComponent]
})
export class JobsPageModule { }
