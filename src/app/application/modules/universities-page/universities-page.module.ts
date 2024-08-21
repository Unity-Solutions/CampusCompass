import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent} from "../../../shared";
import {UniLandingComponent, MapBlockUniversitiesComponent, UniversitiesPageComponent} from "./";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    UniLandingComponent,
    UniversitiesPageComponent,
    MapBlockUniversitiesComponent
  ]
})
export class UniversitiesPageModule { }
