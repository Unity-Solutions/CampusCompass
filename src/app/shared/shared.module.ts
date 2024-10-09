import { NgModule } from '@angular/core'
import { CommonModule, NgIf } from '@angular/common'
import { InfoComponent } from './info/info.component'
import { MapComponent } from './map/map.component'
import { NavComponent } from './nav/nav.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [InfoComponent, MapComponent, NavComponent],
  imports: [CommonModule, NgIf, RouterModule],
  exports: [InfoComponent, MapComponent, NavComponent, RouterModule],
})
export class SharedModule {}
