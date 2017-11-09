import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

import { UsersComponent } from './users.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UsersCreateComponent } from './users-create/users-create.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule
  ],
  declarations: [
    UsersComponent,
    ChangePasswordComponent,
    UsersCreateComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
