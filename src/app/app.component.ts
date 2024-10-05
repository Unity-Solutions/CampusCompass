import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationModule } from './application/application.module';
import { MainPageComponent } from './application/modules/pages/main-page/main-page.component';
import { AutorisationModule } from './application/modules/autorisation/autorisation.module';
import { PagesModule } from './application/modules/pages/pages.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proj01';
}
