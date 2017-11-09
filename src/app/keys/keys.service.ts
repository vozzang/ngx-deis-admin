import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthService } from '../core/auth.service';

@Injectable()
export class KeysService {
  private headers = new Headers();
  private apiKeysUrl = 'http://deis.' + environment.deis.cluster + '/' + environment.deis.apiVersion + '/keys';

  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.headers.append(`Authorization`, `token ${this.authService.auth.value.token}`);
    console.log(this.authService.auth);
  }

  getKeys() {
    const url = this.apiKeysUrl;
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }

}
