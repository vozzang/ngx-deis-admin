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

  changePassword(values) {
    const url = this.apiAppsUrl + 'auth/passwd';
    return this.http.post(url, {password: values.password, new_password: values.new_password}, { headers: this.headers })
    .map(res => res.json());
  }

  createUser(values) {
    const register = this.http.post(`http://deis.${environment.deis.cluster}/${environment.deis.apiVersion}/auth/register/`, {
      username: values.username,
      email: values.email,
      password: values.password
    })
    .map(res => res.json());

    return register;
  }

}
