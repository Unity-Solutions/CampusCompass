import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapBlockStudentsComponent, StudentsPageComponent, StudLandingComponent} from "./";


@NgModule({
  declarations: [StudentsPageComponent,
  MapBlockStudentsComponent,
  StudentsPageComponent,],
  imports: [
    CommonModule],
  exports: [StudentsPageComponent,
  MapBlockStudentsComponent,
  StudentsPageComponent,],
})
export class StudentsPageModule { }
