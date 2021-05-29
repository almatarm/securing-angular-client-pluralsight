import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth-service.component';

@Component({
  selector: 'app-signout-redirect-callback',
  template: `
    <p>
      signout-redirect-callback works!
    </p>
  `,
  styles: [
  ]
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService,
    private _router: Router) { }

    ngOnInit() {
      this._authService.completeLogout().then(_ => {
        this._router.navigate(['/'], { replaceUrl: true });
      })
    }
}
