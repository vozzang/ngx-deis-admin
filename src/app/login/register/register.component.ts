import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  submitted: Boolean = false;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
    this.username = this.form.controls['username'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
  }

  onCloseConfirm(values): void {
    this.submitted = true;
    this.authService.register(values)
    .subscribe(r => {
      console.log(r);

      this.dialogRef.close();
    });
  }
  onCloseCancel(): void {
    this.dialogRef.close('cancel');
  }

}
