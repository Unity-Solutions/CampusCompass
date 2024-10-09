import { Component } from '@angular/core'

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  profilePage() {
    console.log('Button clicked!')
  }
  langSwitch() {
    console.log('Button clicked!')
  }
  modeSwitch() {
    console.log('Button clicked!')
  }
}
