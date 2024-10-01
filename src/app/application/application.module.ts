import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './modules/pages/main-page/main-page.component';
import { AppComponent } from '../app.component';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './modules/pages/pages.module';
import { RouterModule } from '@angular/router';
import { routes } from './application.routes';
import { AutorisationModule } from './modules/autorisation/autorisation.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
    AutorisationModule,
    RouterModule.forChild(routes),
  ],
})
export class ApplicationModule {}
