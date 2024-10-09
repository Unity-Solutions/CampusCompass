import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  JobsPageComponent,
  VacanciesBlockComponent,
  JobsLandingComponent,
} from './'
import { SharedModule } from '../../../../shared/shared.module'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    JobsPageComponent,
    VacanciesBlockComponent,
    JobsLandingComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [JobsPageComponent, VacanciesBlockComponent, JobsLandingComponent],
})
export class JobsPageModule {}
