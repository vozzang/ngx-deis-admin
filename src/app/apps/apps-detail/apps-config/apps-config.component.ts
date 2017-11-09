import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-config',
  templateUrl: './apps-config.component.html',
  styleUrls: ['./apps-config.component.scss']
})
export class AppsConfigComponent implements OnInit {
  id;
  config = [];

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
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

    });
  }

}
