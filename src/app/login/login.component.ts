import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../core/auth.service';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  localStorageAuth = JSON.parse(localStorage.getItem('auth'));
  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  submitted: Boolean = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    if (this.localStorageAuth) {
      this.router.navigate(['/apps']);
    }
  }

  onSubmit(values) {
    this.submitted = true;
    this.authService.login(values)
    .subscribe(r => {
      console.log(r);
      this.router.navigate(['/apps']);
    });
  }

  openRegister() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '500px'
    });
  }
}
