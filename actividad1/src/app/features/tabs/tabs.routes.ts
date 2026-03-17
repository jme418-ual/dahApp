import { Routes } from '@angular/router';
import { authGuard } from '../../shared/guards/auth.guard';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        canActivate: [authGuard],
        loadComponent: () =>
          import('../clients/clients.page').then((m) => m.ClientsPage),
      },
      {
        path: 'reservations',
        canActivate: [authGuard],
        loadComponent: () =>
          import('../reservations/reservations.page').then((m) => m.ReservationsPage),
      },
      {
        path: 'products',
        canActivate: [authGuard],
        loadComponent: () =>
          import('../products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: '',
        redirectTo: 'reservations',
        pathMatch: 'full',
      },
    ],
  },
];
