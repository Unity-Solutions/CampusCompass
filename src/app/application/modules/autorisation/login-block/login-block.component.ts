import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrl: './login-block.component.scss',
})
export class LoginBlockComponent {
  public fg = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
  })

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  public handleLogin() {
    this._authService
      .logIn(this.fg.value.password ?? '', this.fg.value.email ?? '')
      .subscribe((res) => {
        this._router.navigate(['/'])
      })
  }
}
