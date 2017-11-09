import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from './users.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';

import { UsersCreateComponent } from './users-create/users-create.component';

import * as moment from 'moment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['email', 'username', 'active', 'staff', 'superuser', 'date joined'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private userService: UsersService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(r => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dateNow: any = new Date(year, month, day);
      const cMonth = 24 * 60 * 60 * 1000 * 30;
      console.log(r);
      r.results.forEach(e => {
        const joinedL = e.date_joined.substring(0, 10).split('-');
        const dateJoined: any = new Date(joinedL[0], joinedL[1], joinedL[2]);
        if ((dateNow - dateJoined) / cMonth > 0.7) {
          e.date_joined = moment(e.date_joined).format('L');
        } else {
          e.date_joined = moment(e.date_joined).fromNow();
        }
      });
      this.dataSource = new MatTableDataSource(r.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialog() {
    const dialogRef = this.dialog.open(UsersCreateComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result !== 'cancel') {
        /*
        this.userService.createUser(result)
        .subscribe(r => {
          console.log(r);
          this.router.navigate(['/apps', r.id]);
        });
        */
      }
    });
  }
}
