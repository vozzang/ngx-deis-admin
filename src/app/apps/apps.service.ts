import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthService } from '../core/auth.service';

@Injectable()
export class AppsService {

  private headers = new Headers();
  private apiAppsUrl = 'http://deis.' + environment.deis.cluster + '/' + environment.deis.apiVersion + '/apps';

  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.headers.append(`Authorization`, `token ${this.authService.auth.value.token}`);
    console.log(this.authService.auth);
  }

  getApps() {
    const url = this.apiAppsUrl;
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getApp(id) {
    const url = this.apiAppsUrl + '/' + id;
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getAppLogs(id) {
    const url = this.apiAppsUrl + '/' + id + '/logs';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.text());
  }
  getAppConfig(id) {
    const url = this.apiAppsUrl + '/' + id + '/config';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getAppDomains(id) {
    const url = this.apiAppsUrl + '/' + id + '/domains';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getAppBuilds(id) {
    const url = this.apiAppsUrl + '/' + id + '/builds';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getAppReleases(id) {
    const url = this.apiAppsUrl + '/' + id + '/releases';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getAppPerms(id) {
    const url = this.apiAppsUrl + '/' + id + '/perms';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }
  getAppPods(id) {
    const url = this.apiAppsUrl + '/' + id + '/pods';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }

  createApp(id) {
    const url = this.apiAppsUrl;
    return this.http.post(url, {id: id}, { headers: this.headers })
    .map(res => res.json());
  }
  createAppConfig(id, values) {
    const url = this.apiAppsUrl + '/' + id + '/config';
    return this.http.post(url, {
      values: values
    }, { headers: this.headers })
    .map(res => res.json());
  }
  deleteApp(id) {
    const url = this.apiAppsUrl + '/' + id;
    return this.http.delete(url, { headers: this.headers })
    .map(res => res.json());
  }
  deleteDomain(id, domain) {
    const url = this.apiAppsUrl + '/' + id + '/domains' + domain;
    return this.http.delete(url, { headers: this.headers })
    .map(res => res.json());
  }
}
