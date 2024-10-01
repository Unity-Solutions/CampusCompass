import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UniLandingComponent, MapBlockUniversitiesComponent, UniversitiesPageComponent} from "./";
import {SharedModule} from "../../../../shared/shared.module";


@NgModule({
  declarations: [UniversitiesPageComponent,
    UniLandingComponent,
    MapBlockUniversitiesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UniversitiesPageComponent,
  UniversitiesPageComponent,
  MapBlockUniversitiesComponent],
})
export class UniversitiesPageModule { }
