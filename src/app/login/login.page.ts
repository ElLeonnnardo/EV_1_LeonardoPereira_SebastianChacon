import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  user: string;
  password: string;

  constructor(private navCtrl: NavController, private storage: Storage) {
    this.user = '';
    this.password = '';
  }

  login() {
    // Recuperar los datos del usuario almacenados en el LocalStorage
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);

    // Verificar las credenciales
    if (userData.usuario === this.user && userData.contrasena === this.password) {
      alert('Inicio de sesión exitoso.');
      this.navCtrl.navigateForward('/leer-qr');
      // Puedes navegar a la página principal u otras vistas aquí si es necesario.
    } else {
      alert('Credenciales incorrectas.');
    }
  } else {
    alert('Usuario no encontrado. Regístrese primero.');
  }

   /*  // Recuperar los datos del usuario del LocalStorage
  this.storage.get('user_' + this.user).then((userData) => {
    if (userData) {
      const userObject = JSON.parse(userData);
      if (userObject.usuario === this.user && userObject.contrasena === this.password) {
        alert('Inicio de sesión exitoso.');
        this.navCtrl.navigateForward('/leer-qr');
        // Puedes navegar a la página principal u otras vistas aquí si es necesario.
      } else {
        alert('Credenciales incorrectas.');
      }
    } else {
      alert('Usuario no encontrado. Regístrese primero.');
    }
  }); */
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  forgotPassword() {
    // Implementa la recuperación de contraseña según tus necesidades.
    this.navCtrl.navigateForward('/password-reset')
  }
}
