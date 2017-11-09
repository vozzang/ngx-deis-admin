import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthService } from '../core/auth.service';

@Injectable()
export class UsersService {
  private headers = new Headers();
  private apiAppsUrl = 'http://deis.' + environment.deis.cluster + '/' + environment.deis.apiVersion + '/';

  constructor(
    private http: Http,
    private authService: AuthService
  ) {
    this.headers.append(`Authorization`, `token ${this.authService.auth.value.token}`);
    console.log(this.authService.auth);
  }

  getUsers() {
    const url = this.apiAppsUrl + 'users';
    return this.http.get(url, { headers: this.headers })
    .map(res => res.json());
  }

}