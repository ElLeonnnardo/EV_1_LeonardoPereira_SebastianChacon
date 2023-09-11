import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToLoginPage() {
    this.router.navigate(['/login']); // Cambia 'login' por la ruta de tu página de inicio de sesión
  }
}

