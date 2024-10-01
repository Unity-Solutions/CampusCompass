import { Component } from '@angular/core'
import { AuthService } from '../../application/modules/autorisation/services/auth.service'

@Component({
  selector: 'app-nav',
  template: `
    <section class="nav">
      <img class="nav-logo" src="/favicon.ico" />
      <a class="nav-link" href="">Головна</a>
      <a class="nav-link" href="">News</a>
      <a class="nav-link" href="">Students</a>
      <a class="nav-link" href="">Univercities</a>
      <a class="nav-link" href="">Jobs</a>
      <a class="nav-link" href="">Proforientation</a>
      <div *ngIf="!(user$ | async)">
        <a class="nav-button left-btn" href="/auth/login">Login</a>
        <a class="nav-button" href="/auth/">Register</a>
      </div>
      <ng-container *ngIf="user$ | async">
        <b>Logged in as {{ (user$ | async)?.email }}</b>
        <button (click)="logout()">Logout</button>
      </ng-container>
      <a class="nav-button">Lang</a>
      <a class="nav-button">T</a>
    </section>
  `,
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  public get user$() {
    return this._authService.user$
  }

  constructor(private readonly _authService: AuthService) {}

  public logout() {
    this._authService.logOut()
  }
}
