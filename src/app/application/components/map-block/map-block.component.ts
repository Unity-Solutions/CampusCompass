import { Component } from '@angular/core';
import {MapComponent} from "../../../shared/map/map.component";

@Component({
  selector: 'app-map-block',
  standalone: true,
  imports: [
    MapComponent
  ],
  templateUrl: './map-block.component.html',
  styleUrl: './map-block.component.scss'
})
export class MapBlockComponent {

}
