import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth-service.component';

@Component({
  selector: 'app-signin-redirect-callback',
  template: `
    <p>
      signin-redirect-callback works!
    </p>
  `,
  styles: [
  ]
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router : Router) { }

  ngOnInit(): void {
    this._authService.completeLogin().then(user => {
      this._router.navigate(['/'], {replaceUrl: true});
    })
  }

}
