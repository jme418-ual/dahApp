import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'new-incident',
    loadComponent: () =>
      import('./features/incident-create/incident-create.page').then(
        (m) => m.IncidentCreatePage
      ),
  },
  {
    path: 'incidents',
    loadComponent: () =>
      import('./features/incident-list/incident-list.page').then(
        (m) => m.IncidentListPage
      ),
  },
];