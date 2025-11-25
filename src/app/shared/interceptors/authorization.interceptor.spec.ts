import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';

import { authorizationInterceptor } from './authorization.interceptor';
import { provideHttpClientTesting } from '@angular/common/http/testing';


describe('authorizationInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) => TestBed.runInInjectionContext(() => authorizationInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      authorizationInterceptor,
      provideHttpClient(withInterceptors([interceptor])),
      provideHttpClientTesting(),]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
