import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-apps-pods',
  templateUrl: './apps-pods.component.html',
  styleUrls: ['./apps-pods.component.scss']
})
export class AppsPodsComponent implements OnInit {
  id;
  pods;
  displayedColumns = ['name', 'release', 'started', 'state', 'type'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
    this.appsService.getAppPods(this.id)
    .subscribe(r => {
      console.log(r);
      this.pods = r.results;
      this.dataSource = new MatTableDataSource(this.pods);
    });
  }

}
