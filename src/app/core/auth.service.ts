import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

export interface Auth {
  username: string;
  password?: string;
  email?: string;
  token?: string;
}

@Injectable()
export class AuthService {
  isLoggedIn = false;
  localStorageAuth = JSON.parse(localStorage.getItem('auth'));
  auth: BehaviorSubject<Auth> = new BehaviorSubject<Auth>(null);

  constructor(
    private http: Http,
    private router: Router
  ) {
    if (this.localStorageAuth) {
      this.auth.next(<Auth>this.localStorageAuth);
      this.isLoggedIn = true;
    }
  }

  login(values) {
    const login = this.http.post(`http://deis.${environment.deis.cluster}/${environment.deis.apiVersion}/auth/login/`, {
      username: values.username,
      password: values.password
    })
    .map(res => res.json());

    login.subscribe(data => {
      this.isLoggedIn = true;
      this.auth.next({
        username: values.username,
        token: data.token
      });
      localStorage.setItem('auth', JSON.stringify({
        username: values.username,
        token: data.token
      }));
    });

    return login;
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.next(<Auth>null);
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  register(values) {
    const register = this.http.post(`http://deis.${environment.deis.cluster}/${environment.deis.apiVersion}/auth/register/`, {
      username: values.username,
      email: values.email,
      password: values.password
    })
    .map(res => res.json());

    return register;
  }



}
