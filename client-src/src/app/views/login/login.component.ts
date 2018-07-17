import {
  ViewChild,
  ElementRef,
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthApi, UserType } from '../../api';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginData: UserType = {
    email: null,
    password: null
  };

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public authApi: AuthApi,
  ) {}

  public ngOnInit() { }

  public submit() {
    this.authApi.login(this.loginData);
    this.eraseData();
  }

  public eraseData() {
    this.loginData = {
      email: null,
      password: null
    };
  }

  public onInputChange($event) {
    const { name, value } = $event.target;
    this.loginData[name] = value;
  }
}
