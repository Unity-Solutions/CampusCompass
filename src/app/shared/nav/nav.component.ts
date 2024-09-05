import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./nav.component.scss'], 
  templateUrl: './nav.component.html'
})
export class NavComponent {
  profilePage() {
    console.log('Button clicked!');
    
  }
  langSwitch() {
    console.log('Button clicked!');
    
  }
  modeSwitch() {
    console.log('Button clicked!');
    
  }
}
