import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent} from "../../../shared";
import {ProfileComponent, ProfBlockComponent, ProfLandingComponent} from "./";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    ProfLandingComponent,
    ProfileComponent,
    ProfBlockComponent
  ]
})
export class ProfilePageModule { }
