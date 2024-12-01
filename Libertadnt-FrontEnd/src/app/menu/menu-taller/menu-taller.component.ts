import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink, ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-menu-taller',
  standalone: true,
  imports: [RouterOutlet ,RouterLink],
  templateUrl: './menu-taller.component.html',
  styleUrl: './menu-taller.component.css'
})
export class MenuTallerComponent {
constructor(private router: Router, private route: ActivatedRoute){}
goBack(): void {
  this.router.navigate(['../'], { relativeTo: this.route });
}
}
