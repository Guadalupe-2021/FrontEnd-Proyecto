import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {HostListener} from '@angular/core';

@Component({
  selector: 'app-boton-atras',    // <app-boton-atras></app-boton-atras>
  standalone: true,
  imports: [NgIf],
  templateUrl: './boton-atras.component.html',
  styleUrl: './boton-atras.component.css'
})
export class BotonAtrasComponent{
  boton:any|undefined
  butt:HTMLElement|undefined
  url = ""
  url_arr: string[]|undefined
  last_element:string|undefined
  mostrar_boton=true
constructor(private router:Router, private route:ActivatedRoute){}
volverAtras():void {
  this.url = this.router.url
  this.url_arr = this.url.split("/")
  this.last_element = this.url_arr.splice(-1)[0]
  if(this.last_element === 'detalle-sector'||this.last_element === 'modificar')this.url_arr.splice(-1)
    this.router.navigate(this.url_arr,{relativeTo:this.route})
}

volverArriba():void{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}

  @HostListener('window:scroll', ['$event']) onScroll(){
const button = document.getElementById("myBtnTop")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if(button!=null)button.style.display = "block";
  } else { if(button!=null)button.style.display = "none"; }
}



}
