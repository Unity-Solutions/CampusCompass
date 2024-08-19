import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../shared";
import {ProfLandingComponent} from "../../components/prof-landing/prof-landing.component";
import {ProfBlockComponent} from "../../components/prof-block/prof-block.component";

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
