import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { authGuard } from './core/Services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    // loadComponent: () =>
    //   import('./core/dashboard/dashboard.component').then(
    //     (c) => c.DashboardComponent
    //   ),
  },
  {
    path: 'Drivers',
    loadComponent: () =>
      import('./core/drivers/drivers.component').then(
        (c) => c.DriversComponent
      ),
    canActivate: [authGuard],
    canDeactivate: [],
  },
  {
    path: 'Vehicles',
    loadComponent: () =>
      import('./core/vehicles/vehicles.component').then(
        (c) => c.VehiclesComponent
      ),
    canDeactivate: [],
  },
];
