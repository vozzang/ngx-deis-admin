import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-releases',
  templateUrl: './apps-releases.component.html',
  styleUrls: ['./apps-releases.component.scss']
})
export class AppsReleasesComponent implements OnInit {
  id;
  releases;

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
    });
  }

}
