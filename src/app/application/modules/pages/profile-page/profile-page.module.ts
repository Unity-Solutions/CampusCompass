import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent, ProfBlockComponent, ProfLandingComponent} from "./";

@NgModule({
  declarations: [ProfileComponent,
    ProfLandingComponent,
    ProfBlockComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileComponent,
    ProfLandingComponent,
    ProfBlockComponent]
})
export class ProfilePageModule { }
