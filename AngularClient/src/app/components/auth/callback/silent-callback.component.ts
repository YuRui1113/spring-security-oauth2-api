import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-silent-callback',
  template: ''
})
export class SilentCallbackComponent implements OnInit {

  constructor(
    private readonly authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.silentSignInAuthentication();
  }
}
