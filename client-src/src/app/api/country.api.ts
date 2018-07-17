import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import * as API_CONFIG from './api.config.json';
import * as COUNTRIES from './countries.data.json';

const MODEL_NAME = 'countries';

@Injectable()
export class CountryApi {

  constructor(
    public http: HttpClient
  ) { }

  public get() {
    return this.http.get(`${API_CONFIG.BASE_URL}/${MODEL_NAME}`).pipe(map(
      data => {
        return Array.isArray(data) && data.length ? data : COUNTRIES.countries;
      }
    ));
  }
}
