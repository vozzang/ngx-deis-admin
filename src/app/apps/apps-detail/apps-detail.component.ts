import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { AppsService } from '../apps.service';

import * as moment from 'moment';

@Component({
  selector: 'app-apps-detail',
  templateUrl: './apps-detail.component.html',
  styleUrls: ['./apps-detail.component.scss']
})
export class AppsDetailComponent implements OnInit {
  id;
  app;
  appsDetailLinks = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appsService: AppsService,
    public snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params.id;
    this.appsDetailLinks = [
      {
        path: '/apps/' + this.id + '/config',
        label: 'Config'
      },
      {
        path: '/apps/' + this.id + '/pods',
        label: 'Pods'
      },
      {
        path: '/apps/' + this.id + '/builds',
        label: 'Builds'
      },
      {
        path: '/apps/' + this.id + '/releases',
        label: 'Releases'
      },    {
        path: '/apps/' + this.id + '/domains',
        label: 'Domains'
      },
      {
        path: '/apps/' + this.id + '/logs',
        label: 'Logs'
      }
    ];
  }

  ngOnInit() {
    this.appsService.getApp(this.id)
    .subscribe(r => {
      console.log(r);
      r.created = moment(r.created).format('LLL');
      this.app = r;
    });
  }

  deleteApp() {
    this.appsService.deleteApp(this.id)
    .subscribe(r => {
      this.snackBar.open('Removed.', 'Dance', {
        duration: 2000,
      });
      this.router.navigate(['/apps']);
    });
  }

}
