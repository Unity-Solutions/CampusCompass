import { Component } from '@angular/core';
import {InfoComponent} from "../../../shared";
import {RegLandingComponent} from "../../components/reg-landing/reg-landing.component";
import {RegBlockComponent} from "../../components/reg-block/reg-block.component";


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    InfoComponent,
    RegLandingComponent,
    RegBlockComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
