import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-apps-releases',
  templateUrl: './apps-releases.component.html',
  styleUrls: ['./apps-releases.component.scss']
})
export class AppsReleasesComponent implements OnInit {
  id;
  releases;
  displayedColumns = ['version', 'summary', 'created', 'failed', 'owner'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
    this.appsService.getAppReleases(this.id)
    .subscribe(r => {
      console.log(r);
      this.releases = r.results;
      this.dataSource = new MatTableDataSource(this.releases);
    });
  }

}
