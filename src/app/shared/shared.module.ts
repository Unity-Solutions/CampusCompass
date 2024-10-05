import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [InfoComponent, MapComponent, NavComponent],
  imports: [CommonModule, NgIf],
  exports: [InfoComponent, MapComponent, NavComponent],
})
export class SharedModule {}
