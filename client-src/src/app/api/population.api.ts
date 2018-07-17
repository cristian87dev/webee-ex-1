import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as API_CONFIG from './api.config.json';

const MODEL_NAME = 'populations';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface PopulationType {
  id?: string,
  countryId?: string,
  amount?: number
}

@Injectable()
export class PopulationApi {

  constructor(
    public http: HttpClient
  ) { }

  public get() {
    return this.http.get(`${API_CONFIG.BASE_URL}/${MODEL_NAME}`);
  }

  public post(populationData: PopulationType) {
    const data = {
      countryId: populationData.countryId,
      amount: populationData.amount
    };
    return this.http.post(`${API_CONFIG.BASE_URL}/${MODEL_NAME}`, data, httpOptions);
  }

  public patch(populationData: PopulationType) {
    const data = {
      id: populationData.id,
      countryId: populationData.countryId,
      amount: populationData.amount
    };
    return this.http.patch(`${API_CONFIG.BASE_URL}/${MODEL_NAME}`, data, httpOptions);
  }
}
