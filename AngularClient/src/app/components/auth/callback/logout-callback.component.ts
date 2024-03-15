import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-logout-callback',
  template: ''
})
export class LogoutCallbackComponent implements OnInit {

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.authService.completeLogout();

    this.router.navigate(
      ['/']
    );
  }
}
