import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  // Check if the request is for the login endpoint
  if (req.url.includes('/login')) {
    return next(req); // Skip the interceptor logic
  }

  const token = localStorage.getItem('userToken');
  if (token) {
    const cloneRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(cloneRequest);
  } else {
    // No token found. Redirect to login.
    router.navigate(['/login']);
    return next(req);
  }
};
