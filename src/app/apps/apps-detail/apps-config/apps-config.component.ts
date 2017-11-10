import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { AppsConfigFormComponent } from './apps-config-form/apps-config-form.component';

@Component({
  selector: 'app-apps-config',
  templateUrl: './apps-config.component.html',
  styleUrls: ['./apps-config.component.scss']
})
export class AppsConfigComponent implements OnInit {
  id;
  config = [];
  displayedColumns = ['key', 'value', 'action'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService,
    private dialog: MatDialog
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
    this.getAppConfig();
  }

  getAppConfig() {
    this.config = [];
    this.appsService.getAppConfig(this.id)
    .subscribe(r => {
      console.log(r);

      Object.keys(r.values).forEach(e => {
        console.log(e + ':' + r.values[e]);
        const key = e;
        const value = r.values[e];
        const arr = {key, value};
        this.config.push(arr);
      });
      console.log(this.config);
      this.dataSource = new MatTableDataSource(this.config);

    });
  }

  openAdd() {
    const dialogRef = this.dialog.open(AppsConfigFormComponent, {
      width: '500px',
      data: {id: this.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result !== 'cancel') {
        this.appsService.createApp(result)
        .subscribe(r => {
          console.log(r);
          this.getAppConfig();
        });
      }
    });
  }
  openEdit(key) {
    const dialogRef = this.dialog.open(AppsConfigFormComponent, {
      width: '500px',
      data: {id: this.id, key: key}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result !== 'cancel') {
        this.appsService.createApp(result)
        .subscribe(r => {
          console.log(r);
          this.getAppConfig();
        });
      }
    });
  }
  delete(key) {
    const data = { [key]: null };
    this.appsService.createAppConfig(this.id, data)
    .subscribe(r => {
      this.getAppConfig();
    });
  }
}
