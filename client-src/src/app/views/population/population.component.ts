import {
  ViewChild,
  ElementRef,
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { CountryApi, PopulationApi, PopulationType } from '../../api';

import { single, single2 } from './data';

@Component({
  selector: 'population',
  styleUrls: ['./population.component.scss'],
  templateUrl: './population.component.html'
})
export class PopulationComponent implements OnInit {

  chartData: any[] = [];

  population: PopulationType[] = [];
  countries: any[] = [];

  populationData: PopulationType = {
    id: null,
    countryId: null,
    amount: null,
  };

  constructor(
    public route: ActivatedRoute,
    public countryApi: CountryApi,
    public populationApi: PopulationApi
  ) {}

  public ngOnInit() {

      // setTimeout(() => {
      //   this.chartData = single;
      // }, 3000);
      //
      // setTimeout(() => {
      //   this.chartData = [
      //     ...single,
      //     ...single2,
      //   ];
      // }, 5000);

      this.getCountries();
      this.getPopulation();
  }

  public submit() {
    this.populationApi.post(this.populationData).subscribe(() => this.getPopulation());
  }

  public eraseForm() {
    this.populationData = {
      id: null,
      countryId: null,
      amount: null,
    };
  }

  public onInputChange($event) {
    const { name, value } = $event.target;
    this.populationData[name] = value;
  }

  getPopulation() {
    this.populationApi.get().subscribe(
      (data: PopulationType[]) => {
        this.population = data;
        this.chartData = this.sanitazePopulationChartData(data);
      }
    );
  }

  getCountries() {
    this.countryApi.get().subscribe(
      (data: any) => {
        this.countries = data;
      }
    );
  }

  sanitazePopulationChartData(data: PopulationType[]) {
    return data.map(item => {
      const country = this.countries.find(country => country.id === item.countryId) || {};
      const value = item.amount;

      return { name: country.name, value }
    });
  }

  countriesToAdd(countries: any[] = []) {
    const usedCountries = this.population.map(item => item.countryId);
    return countries.filter(item => usedCountries.indexOf(item.id) === -1);
  }
}
