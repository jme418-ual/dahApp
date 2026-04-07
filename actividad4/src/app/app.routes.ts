import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'add-product',
    loadComponent: () =>
      import('./features/add-product/add-product.page').then((m) => m.AddProductPage),
  },
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail.page').then((m) => m.ProductDetailPage),
  },
  {
    path: 'public-products/:userId',
    loadComponent: () =>
      import('./features/public-products/public-products.page').then((m) => m.PublicProductsPage),
  },
];
