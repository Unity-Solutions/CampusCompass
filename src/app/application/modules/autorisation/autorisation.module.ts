import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent, InfoComponent} from "../../../shared";
import {RegLandingComponent, RegBlockComponent, LoginBlockComponent, LoginLandingComponent, RegistrationComponent, LogInComponent} from "./"


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    InfoComponent,
    RegLandingComponent,
    RegBlockComponent,
    LoginBlockComponent,
    LoginLandingComponent,
    RegistrationComponent,
    LogInComponent

  ]
})
export class AutorisationModule { }
