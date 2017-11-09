import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-builds',
  templateUrl: './apps-builds.component.html',
  styleUrls: ['./apps-builds.component.scss']
})
export class AppsBuildsComponent implements OnInit {
  id;
  builds;

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
    this.appsService.getAppBuilds(this.id)
    .subscribe(r => {
      console.log(r);
      this.builds = r.results;
    });
  }

}
