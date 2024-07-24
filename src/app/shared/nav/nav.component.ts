import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
    <section class="nav">
      <img class="nav-logo" src="/favicon.ico">
      <a class="nav-link" href="">Головна</a>
      <a class="nav-link" href="">News</a>
      <a class="nav-link" href="">Students</a>
      <a class="nav-link" href="">Univercities</a>
      <a class="nav-link" href="">Jobs</a>
      <a class="nav-link" href="">Proforientation</a>
      <button class="nav-button left-btn">Login</button>
      <button class="nav-button">Register</button>
      <button class="nav-button">Lang</button>
      <button class="nav-button">T</button>
    </section>

  `,
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
