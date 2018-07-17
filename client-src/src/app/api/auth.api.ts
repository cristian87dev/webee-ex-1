import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import * as API_CONFIG from './api.config.json';

const MODEL_NAME = 'Users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface UserType {
  email: string;
  password: string;
}

@Injectable()
export class AuthApi {
  public isLoggedIn: boolean = false;
  public redirectUrl: string;

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  public post(userData: UserType) {
    return this.http.post(`${API_CONFIG.BASE_URL}/${MODEL_NAME}`, userData, httpOptions);
  }

  public login(userData: UserType) {
    this.http.post(`${API_CONFIG.BASE_URL}/${MODEL_NAME}/login`, userData, httpOptions)
      .subscribe( (data: any) => {
        this.setToken(data.id);
        this.router.navigate(['/population']);
      });
  }

  public logout() {
    this.removeToken();
    this.router.navigate(['/login']);
  }

  private setToken(token) {
    localStorage.setItem('id_token', token);
    this.isLoggedIn = true;
  }

  private removeToken() {
    localStorage.removeItem('id_token');
    this.isLoggedIn = false;
  }
}
