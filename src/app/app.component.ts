import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { BotonAtrasComponent } from './boton-atras/boton-atras.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BotonAtrasComponent,NavBarComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLoginPage = false
  title = 'Libertadnt-FrontEnd'

  constructor(private router:Router){}

ngOnInit(){
  this.router.events.subscribe(()=>{
    this.isLoginPage = this.router.url === '/log-in';
  })
}
}
