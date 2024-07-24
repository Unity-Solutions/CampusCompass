import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ApplicationModule} from "./application/application.module";
import {MainPageComponent} from "./application/pages/main-page/main-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApplicationModule, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'proj01';
}
