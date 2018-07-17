import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { RoutingModule } from './routing/routing.module';
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

import { DashboardComponent } from './views/dashboard';
import { LoginComponent } from './views/login';
import { PopulationComponent } from './views/population';
import { NoContentComponent } from './views/no-content';

import { InputFieldComponent } from './components/InputField';
import { SelectComponent } from './components/Select';
import { ButtonComponent } from './components/Button';
import { BarChartComponent } from './components/BarChart';
import { SnackbarComponent } from './components/Snackbar';

import { MessagesService } from './services';

import {
  AuthApi, CountryApi, PopulationApi,
  httpInterceptorProviders
} from './api';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AuthApi,
  CountryApi,
  PopulationApi,
  MessagesService
];

interface StoreType {
  state: InternalStateType;
  restoreInputValues: () => void;
  disposeOldHosts: () => void;
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,

    // Views
    DashboardComponent,
    LoginComponent,
    PopulationComponent,
    NoContentComponent,

    // Basic Components
    InputFieldComponent,
    SelectComponent,
    ButtonComponent,
    BarChartComponent,
    SnackbarComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    NgxChartsModule,
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS,
    httpInterceptorProviders
  ]
})
export class AppModule {}
