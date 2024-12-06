import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boton-atras',
  standalone: true,
  imports: [],
  templateUrl: './boton-atras.component.html',
  styleUrl: './boton-atras.component.css'
})
export class BotonAtrasComponent{
  boton:any|undefined
constructor(private router:Router, private route:ActivatedRoute){}

volverAtras() {
      this.router.navigate(["../"], {relativeTo:this.route})
    }
}
