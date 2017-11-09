import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

}
