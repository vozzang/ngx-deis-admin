import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;

  constructor(
    private authService: AuthService
  ) {
    this.username = authService.auth.value.username;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
