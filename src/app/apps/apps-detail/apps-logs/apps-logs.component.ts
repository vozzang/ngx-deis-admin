import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppsService } from '../../apps.service';

@Component({
  selector: 'app-apps-logs',
  templateUrl: './apps-logs.component.html',
  styleUrls: ['./apps-logs.component.scss']
})
export class AppsLogsComponent implements OnInit {
  id;
  logs;

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
    this.appsService.getAppLogs(this.id)
    .subscribe(r => {
      this.logs = r;
    });
  }

}
