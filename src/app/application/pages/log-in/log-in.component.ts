import { Component } from '@angular/core';
import {InfoComponent} from "../../../shared";
import {LoginLandingComponent} from "../../components/login-landing/login-landing.component";
import {LoginBlockComponent} from "../../components/login-block/login-block.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    InfoComponent,
    LoginLandingComponent,
    LoginBlockComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

}
