import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  nombre: string;
  apellido: string;
  rut: string;
  carrera: string;
  usuario: string;
  contrasena: string;
  repetirContrasena: string;

  constructor(private navCtrl: NavController, private storage: Storage) {
  this.nombre = '';
  this.apellido = '';
  this.rut = '';
  this.carrera = '';
  this.usuario = '';
  this.contrasena = '';
  this.repetirContrasena = '';
  }

  isValidForm(): boolean {
    const validations = [
      this.nombre && this.nombre.length >= 4,
      this.apellido && this.apellido.length >= 4,
      this.rut && this.rut.length >= 9 && this.rut.length <= 12,
      this.contrasena && this.contrasena.length >= 3,
      this.usuario && this.usuario.length >= 4
    ];
  
    return validations.every(valid => valid === true);
  }
  
  

  register() {
    // Verifica si las contraseñas coinciden
  if (this.contrasena !== this.repetirContrasena) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Guarda los datos en el LocalStorage
  const userData = {
    nombre: this.nombre,
    apellido: this.apellido,
    rut: this.rut,
    carrera: this.carrera,
    usuario: this.usuario,
    contrasena: this.contrasena,
  };

  // Convierte los datos a una cadena JSON y almacénalos en el LocalStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  alert('Registro exitoso. Puede iniciar sesión.');
  this.navCtrl.navigateForward('/login');
  // Puedes navegar a la página de inicio de sesión u otras vistas aquí si es necesario.
  }
  forgotPassword() {
    // Implementa la recuperación de contraseña según tus necesidades.
    this.navCtrl.navigateForward('/password-reset')
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
  login() {
    this.navCtrl.navigateForward('/login');
  }
}
