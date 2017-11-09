import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { KeysRoutingModule } from './keys-routing.module';

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

import { KeysService } from './keys.service';
import { KeysComponent } from './keys.component';

@NgModule({
  imports: [
    SharedModule,
    KeysRoutingModule,
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
  declarations: [KeysComponent],
  providers: [
    KeysService
  ]
})
export class KeysModule { }
