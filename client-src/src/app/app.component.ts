import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { environment } from 'environments/environment';
import { AuthApi } from './api';

export const ROOT_SELECTOR = 'app';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: ROOT_SELECTOR,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    public authApi: AuthApi
  ) {}

  public ngOnInit() {
  }

  onLogout() {
    this.authApi.logout();
  }

}
