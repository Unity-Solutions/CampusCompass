import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../shared";
import {UniLandingComponent} from "../../components/uni-landing/uni-landing.component";
import {MapBlockStudentsComponent} from "../../components/map-block-students/map-block-students.component";
import {MapBlockUniversitiesComponent} from "../../components/map-block-universities/map-block-universities.component";

@Component({
  selector: 'app-universities-page',
  standalone: true,
  imports: [
    NavComponent,
    InfoComponent,
    UniLandingComponent,
    MapBlockStudentsComponent,
    MapBlockUniversitiesComponent
  ],
  templateUrl: './universities-page.component.html',
  styleUrl: './universities-page.component.scss'
})
export class UniversitiesPageComponent {

}
