import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login-callback',
  template: ''
})
export class LoginCallbackComponent implements OnInit {

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) {
    console.info('LoginCallbackComponent was constructed.');
  }

  async ngOnInit(): Promise<void> {
    console.info('LoginCallbackComponent ngOnInit.' + this.authService.getReturnUrl());

    await this.authService.completeAuthentication();
    console.info('LoginCallbackComponent completeAuthentication.');
    this.router.navigateByUrl(this.authService.getReturnUrl());
  }
}
