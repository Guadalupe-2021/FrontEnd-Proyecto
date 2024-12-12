import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

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
constructor(private router:Router, private route:ActivatedRoute){
 // let butt = document.getElementById("myBtnTop")
 //  window.addEventListener("scroll",function(){
 //   console.log("scroll")
  //  console.log(butt)
  //    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //      if(butt!=null)butt.style.display = "block";
  //    } else { if(butt!=null)butt.style.display = "none"; }
  // })
}
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


}
