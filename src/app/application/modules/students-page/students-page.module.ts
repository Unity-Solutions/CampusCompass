import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent, MapComponent} from "../../../shared";
import {MapBlockStudentsComponent, StudentsPageComponent, StudLandingComponent} from "./";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    MapComponent,
    MapBlockStudentsComponent,
    StudentsPageComponent,
    StudLandingComponent
  ]
})
export class StudentsPageModule { }
