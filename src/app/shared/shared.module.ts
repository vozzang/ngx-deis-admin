import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class SharedModule { }
