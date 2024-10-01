import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProfileComponent, ProfBlockComponent, ProfLandingComponent } from './'
import { SharedModule } from '../../../../shared/shared.module'

@NgModule({
  declarations: [ProfileComponent, ProfLandingComponent, ProfBlockComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileComponent, ProfLandingComponent, ProfBlockComponent],
})
export class ProfilePageModule {}
