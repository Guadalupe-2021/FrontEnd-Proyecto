import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideToastr } from 'ngx-toastr';
import { provideRouter, withComponentInputBinding } from '@angular/router';

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [
      provideRouter([], withComponentInputBinding()),
      provideHttpClient(),
      provideHttpClientTesting(),
      provideToastr(),
    ],
  });
});