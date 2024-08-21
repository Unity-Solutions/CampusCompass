import { Component } from '@angular/core';
import {NavComponent, InfoComponent} from "../../../../shared";
import {ProfBlockComponent, ProfLandingComponent} from "../";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    InfoComponent,
    ProfLandingComponent,
    ProfBlockComponent,
    NavComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
