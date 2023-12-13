import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  RedirectToHome(){
    this.router.navigate(['/marcar-asistencia'])
  }

  RedirectToPerfil(){
    this.router.navigate(['/perfil'])
  }

  RedirectToList(){
    this.router.navigate(['/registro-asistencia'])
  }

  

}
