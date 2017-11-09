import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-pods',
  templateUrl: './apps-pods.component.html',
  styleUrls: ['./apps-pods.component.scss']
})
export class AppsPodsComponent implements OnInit {
  id;
  pods;

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
    });
  }

}
