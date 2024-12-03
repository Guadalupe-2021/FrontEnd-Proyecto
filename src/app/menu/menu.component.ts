import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(public route: ActivatedRoute){}
  usuario_administrador : boolean | undefined 

}
