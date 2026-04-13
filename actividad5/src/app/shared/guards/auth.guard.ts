import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    return true;
  }
  // Redirect to login if no token
  const router = inject(Router);
  return router.createUrlTree(['/login']);
};