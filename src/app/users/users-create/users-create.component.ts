import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  form: FormGroup;
  username: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  submitted: Boolean = false;

  constructor(
    fb: FormBuilder,
    private userService: UsersService,
    private dialogRef: MatDialogRef<UsersCreateComponent>,
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
    this.userService.createUser(values)
    .subscribe(r => {
      console.log(r);

      this.dialogRef.close();
    });
  }
  onCloseCancel(): void {
    this.dialogRef.close('cancel');
  }
}
