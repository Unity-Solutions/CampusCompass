import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../../shared";
import {UniLandingComponent, MapBlockUniversitiesComponent} from "../";


@Component({
  selector: 'app-universities-page',
  standalone: true,
  imports: [
    NavComponent,
    InfoComponent,
    UniLandingComponent,
    MapBlockUniversitiesComponent
  ],
  templateUrl: './universities-page.component.html',
  styleUrl: './universities-page.component.scss'
})
export class UniversitiesPageComponent {

}
