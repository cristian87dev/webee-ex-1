import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApi } from '../../api';

@Component({
  selector: 'dashbard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(
    public router: Router,
    public authApi: AuthApi
  ) { }

  goTo() {
    const nextRoute = this.authApi.isLoggedIn ? 'population' : 'login';
    this.router.navigate([`/${nextRoute}`]);
  }
}
