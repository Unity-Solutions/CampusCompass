import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-pers-news',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './pers-news.component.html',
  styleUrl: './pers-news.component.scss'
})
export class PersNewsComponent {
  constructor(private router: Router, public authService: AuthService) {}

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }



}
