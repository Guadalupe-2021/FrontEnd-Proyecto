import { Component, OnInit } from '@angular/core';
import { SentenciasService } from '../sentencias.service.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-sentenias',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mostrar-sentenias.component.html',
  styleUrl: './mostrar-sentenias.component.css'
})
export class MostrarSenteniasComponent {
 
  constructor (public service : SentenciasService){}
  id = '';
  ban = false;
  
  
  uno = {name:'',};
  validarband(){
    if(this.id !!= ''){
      this.ban = true;
    }
    console.log(this.id)
  }
  
  buscarSentencias(){
    this.service.getSentencias().subscribe({
      next: (respuesta)=> {this.service.sentencia = respuesta},
      error: (e) => {console.log(e)}
    })
    
  }

  buscarUnaSentencia(id:any){
    this.service.getOneSentencias(id).subscribe({
      next: (respuesta)=> {this.uno = respuesta},
      error: (e) => {console.log(e)}}
    )

  }

}
