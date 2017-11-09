import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { AppsService } from '../../apps.service';

import * as moment from 'moment';

@Component({
  selector: 'app-apps-domains',
  templateUrl: './apps-domains.component.html',
  styleUrls: ['./apps-domains.component.scss']
})
export class AppsDomainsComponent implements OnInit {
  id;
  domains;
  private apiAppsUrl = 'http://deis.' + environment.deis.cluster + '/' + environment.deis.apiVersion + '/apps';

  constructor(
    private route: ActivatedRoute,
    private appsService: AppsService,
    public snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.parent.params.id;
  }

  ngOnInit() {
    this.appsService.getAppDomains(this.id)
    .subscribe(r => {
      console.log(r);
      r.results.forEach(e => {
        e.created = moment(e.created).format('LLL');
        e.updated = moment(e.updated).format('LLL');
      });
      this.domains = r.results;
    });
  }

  deleteDomain(domain) {
    this.appsService.deleteDomain(this.id, domain)
    .subscribe(r => {
      this.snackBar.open('Removed.', 'Dance', {
        duration: 2000,
      });
    });
  }

}
