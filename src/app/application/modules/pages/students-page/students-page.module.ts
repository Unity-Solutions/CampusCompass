import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  MapBlockStudentsComponent,
  StudentsPageComponent,
  StudLandingComponent,
} from './'
import { SharedModule } from '../../../../shared/shared.module'

@NgModule({
  declarations: [
    StudentsPageComponent,
    MapBlockStudentsComponent,
    StudLandingComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    StudentsPageComponent,
    MapBlockStudentsComponent,
    StudentsPageComponent,
  ],
})
export class StudentsPageModule {}
