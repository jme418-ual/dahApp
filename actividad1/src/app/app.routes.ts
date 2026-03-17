import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'client-detail/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./features/client-detail/client-detail.page').then(m => m.ClientDetailPage)
  },
  {
    path: 'new-reservation',
    canActivate: [authGuard],
    loadComponent: () => import('./features/new-reservation/new-reservation.page').then(m => m.NewReservationPage)
  },
  {
    path: 'tabs',
    canActivate: [authGuard],
    loadChildren: () => import('./features/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];
