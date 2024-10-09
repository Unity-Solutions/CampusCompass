import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-pers-news',
  templateUrl: './pers-news.component.html',
  styleUrl: './pers-news.component.scss',
})
export class PersNewsComponent {
  constructor(private router: Router) {}
  redirectToLogin(): void {
    this.router.navigate(['/login'])
  }
}
