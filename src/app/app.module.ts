import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaGuardiaComponent } from './guardias/alta-guardia/alta-guardia.component.js';
import { AppComponent } from './app.component.js';


@NgModule({
  declarations: [AppComponent, AltaGuardiaComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(), 
  ],
  providers:[provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
