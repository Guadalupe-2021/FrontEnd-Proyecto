import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import { AltaGuardiaComponent } from './guardias/alta-guardia/alta-guardia.component.js';
import { AppComponent } from './app.component.js';
import { BrowserModule } from '@angular/platform-browser';
import { MenuActividadComponent } from './menu/menu-actividad/menu-actividad.component.js';
import { MenuGuardiaComponent } from './menu/menu-guardia/menu-guardia.component.js';
import { FormsModule, NgModel } from '@angular/forms';


@NgModule({
  declarations: [AppComponent,
     AltaGuardiaComponent,
     MenuActividadComponent,
     MenuGuardiaComponent],
  imports: [NgModel,
    NgFor,
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({positionClass: 'toast-top-right',}), // ToastrModule added
  ],
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule { }
