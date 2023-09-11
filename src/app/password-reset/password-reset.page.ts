import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-password-reset',
  templateUrl: 'password-reset.page.html',
  styleUrls: ['password-reset.page.scss'],
})
export class PasswordResetPage {
  user: string;
  newPassword: string;

  constructor(private navCtrl: NavController, private storage: Storage) {
    this.user = '';
    this.newPassword = '';
  }

  resetPassword() {
    // Verifica si el nombre de usuario existe en el LocalStorage
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      alert('El nombre de usuario no existe.');
      return;
    }

    // Parsea los datos del usuario desde el LocalStorage
    const userData = JSON.parse(userDataString);

    // Verifica si el nombre de usuario proporcionado coincide
    if (userData.usuario !== this.user) {
      alert('El nombre de usuario no es válido.');
      return;
    }

    // Actualiza la contraseña en los datos del usuario
    userData.contrasena = this.newPassword;

    // Almacena los datos del usuario actualizados en el LocalStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Contraseña actualizada con éxito. Puede iniciar sesión con su nueva contraseña.');
    this.navCtrl.navigateForward('/login'); // Redirige a la página de inicio de sesión.
  }
}
