import { NgModule } from '@angular/core';
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

import { AppsRoutingModule } from './apps-routing.module';
import { AppsService } from './apps.service';
import { AppsComponent } from './apps.component';
import { AppsDetailComponent } from './apps-detail/apps-detail.component';
import { AppsLogsComponent } from './apps-detail/apps-logs/apps-logs.component';
import { AppsConfigComponent } from './apps-detail/apps-config/apps-config.component';
import { AppsBuildsComponent } from './apps-detail/apps-builds/apps-builds.component';
import { AppsReleasesComponent } from './apps-detail/apps-releases/apps-releases.component';
import { AppsDomainsComponent } from './apps-detail/apps-domains/apps-domains.component';
import { AppsCreateComponent } from './apps-create/apps-create.component';
import { AppsPodsComponent } from './apps-detail/apps-pods/apps-pods.component';



@NgModule({
  imports: [
    SharedModule,
    AppsRoutingModule,
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
    AppsComponent,
    AppsDetailComponent,
    AppsLogsComponent,
    AppsConfigComponent,
    AppsBuildsComponent,
    AppsReleasesComponent,
    AppsDomainsComponent,
    AppsCreateComponent,
    AppsPodsComponent
  ],
  entryComponents: [
    AppsCreateComponent
  ],
  providers: [
    AppsService
  ]
})
export class AppsModule { }
