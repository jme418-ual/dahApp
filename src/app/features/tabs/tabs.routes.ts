import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'list',
        loadComponent: () =>
          import('../list/list.page').then((m) => m.ListPage),
      },
      {
        path: 'action',
        loadComponent: () =>
          import('../action/action.page').then((m) => m.ActionPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
