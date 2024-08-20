import { Component } from '@angular/core';
import {MapComponent} from "../../../shared/map/map.component";

@Component({
  selector: 'app-map-block-students',
  standalone: true,
  imports: [
    MapComponent
  ],
  templateUrl: './map-block-students.component.html',
  styleUrl: './map-block-students.component.scss'
})
export class MapBlockStudentsComponent {

}
