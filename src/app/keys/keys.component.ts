import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { KeysService } from './keys.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import * as moment from 'moment';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {
  displayedColumns = ['id', 'owner', 'public', 'created'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private keysService: KeysService
  ) { }

  ngOnInit() {
    this.keysService.getKeys()
    .subscribe(r => {
      console.log(r);
      r.results.forEach(e => {
        e.created = moment(e.created).format('L');
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

  }
}
