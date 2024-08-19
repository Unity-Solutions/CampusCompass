import { Component } from '@angular/core';
import {MapComponent} from "../../../shared/map/map.component";

@Component({
  selector: 'app-map-block-universities',
  standalone: true,
    imports: [
        MapComponent
    ],
  templateUrl: './map-block-universities.component.html',
  styleUrl: './map-block-universities.component.scss'
})
export class MapBlockUniversitiesComponent {

}
