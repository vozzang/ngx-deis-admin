import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  password: AbstractControl;
  new_password: AbstractControl;
  submitted: Boolean = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {
    this.form = fb.group({
      password: ['', Validators.compose([Validators.required])],
      new_password: ['', Validators.compose([Validators.required])]
    });
    this.password = this.form.controls['password'];
    this.new_password = this.form.controls['new_password'];
  }

  ngOnInit() {
  }

  onSubmit(values): void {
    this.submitted = true;
    this.userService.changePassword(values)
    .subscribe(r => {
      console.log(r);


    });
  }
}
