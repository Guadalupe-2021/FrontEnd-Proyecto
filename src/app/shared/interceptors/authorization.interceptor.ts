import { HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
    //console.log('Intercepted Request Headers:', req.headers);
    const token = localStorage.getItem('jwtToken')
    
    const requestWithAuthorization = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(requestWithAuthorization);
};
