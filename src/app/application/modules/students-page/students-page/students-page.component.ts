import { Component } from '@angular/core';
import {InfoComponent, NavComponent} from "../../../../shared";
import {StudLandingComponent, MapBlockStudentsComponent} from "../";


@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [
    NavComponent,
    InfoComponent,
    StudLandingComponent,
    MapBlockStudentsComponent
  ],
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {

}
