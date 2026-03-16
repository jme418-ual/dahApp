import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'clients',
        loadComponent: () =>
          import('../clients/clients.page').then((m) => m.ClientsPage),
      },
      {
        path: 'reservations',
        loadComponent: () =>
          import('../reservations/reservations.page').then((m) => m.ReservationsPage),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../products/products.page').then((m) => m.ProductsPage),
      },
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
    ],
  },
];
