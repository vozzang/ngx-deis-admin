import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  entryComponents: [
    RegisterComponent
  ]
})
export class LoginModule { }
