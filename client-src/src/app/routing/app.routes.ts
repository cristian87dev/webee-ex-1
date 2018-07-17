import { Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { DashboardComponent } from '../views/dashboard';
import { LoginComponent } from '../views/login';
import { PopulationComponent } from '../views/population';
import { NoContentComponent } from '../views/no-content';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'population', component: PopulationComponent, canActivate: [AuthGuard] },
  { path: '**', component: NoContentComponent },
];
