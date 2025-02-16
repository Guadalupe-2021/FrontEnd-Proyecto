import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import { AltaGuardiaComponent } from './guardias/alta-guardia/alta-guardia.component.js';
import { AppComponent } from './app.component.js';
import { BrowserModule } from '@angular/platform-browser';
import { MenuActividadComponent } from './menu/menu-actividad/menu-actividad.component.js';
import { MenuGuardiaComponent } from './guardias/menu-guardia/menu-guardia.component.js';
import { FormsModule, NgModel } from '@angular/forms';
import { BuscarReclusosComponent } from './reclusos/buscar-reclusos/buscar-reclusos.component.js';


@NgModule({
  declarations: [AppComponent,
     AltaGuardiaComponent,
     MenuActividadComponent,
     MenuGuardiaComponent,
    BuscarReclusosComponent],
  imports: [NgModel,
    NgFor,
    NgIf,
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
