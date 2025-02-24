import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  no_mostrar = false
  constructor(private router:Router, private route: ActivatedRoute){}
ngOnInit(){
  this.route
  this.router
  //if(this.route.url.includes()
}

logOut(){
  localStorage.removeItem('jwtToken')
  this.router.navigate(['log-in'])
}
}
