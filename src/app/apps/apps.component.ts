import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AppsService } from './apps.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { AppsCreateComponent } from './apps-create/apps-create.component';

import * as moment from 'moment';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {
  displayedColumns = ['cmd', 'id', 'owner', 'created'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private appsService: AppsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.appsService.getApps()
    .subscribe(r => {
      console.log(r);

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dateNow: any = new Date(year, month, day);
      const cMonth = 24 * 60 * 60 * 1000 * 30;

      r.results.forEach(e => {
        const createdL = e.created.substring(0, 10).split('-');
        const dateCreated: any = new Date(createdL[0], createdL[1], createdL[2]);
        if ((dateNow - dateCreated) / cMonth > 0.7) {
          e.created = moment(e.created).format('L');
        } else {
          e.created = moment(e.created).fromNow();
        }
      });

      this.dataSource = new MatTableDataSource(r.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  goDetail(id) {
    this.router.navigate(['/apps/' + id + '/config']);
    return false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppsCreateComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result !== 'cancel') {
        this.appsService.createApp(result)
        .subscribe(r => {
          console.log(r);
          this.router.navigate(['/apps', r.id]);
        });
      }
    });
  }
}
