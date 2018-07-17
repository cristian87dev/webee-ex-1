import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { PopulationComponent } from './population.component';

describe('Population', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      PopulationComponent
    ]
  }));

  it('should log ngOnInit', inject([PopulationComponent], (population: PopulationComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    population.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
