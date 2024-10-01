import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniLandingComponent, MapBlockUniversitiesComponent, UniversitiesPageComponent} from "./";


@NgModule({
  declarations: [UniversitiesPageComponent,
    UniLandingComponent,
    MapBlockUniversitiesComponent],
  imports: [
    CommonModule,
  ],
  exports: [UniversitiesPageComponent,
  UniversitiesPageComponent,
  MapBlockUniversitiesComponent],
})
export class UniversitiesPageModule { }
