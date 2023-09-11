import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro-clase',
  templateUrl: './registro-clase.page.html',
  styleUrls: ['./registro-clase.page.scss'],
})
export class RegistroClasePage implements OnInit {
  qrData!: string;
  currentTimestamp!: string;
  nombre!: string;
  apellido!: string;
  rut!: string;

  constructor(private activatedRoute: ActivatedRoute, private storage: Storage) {}

  ngOnInit() {
    const state = window.history.state;
    if (state && state.qrData) {
      console.log('Funcionando');
      
      this.qrData = state.qrData;
    } else {
      // Manejar el caso en el que qrData no esté disponible en el estado de la página
    }

    // Obtén el timestamp con la hora actual en formato de horas y minutos
    const now = new Date();
    this.currentTimestamp = `${this.padZero(now.getHours())}:${this.padZero(now.getMinutes())}`;

    // Intenta cargar los datos del usuario registrado previamente
    const userDataJson = localStorage.getItem('userData');
    if (userDataJson) {
      const userData = JSON.parse(userDataJson);
      this.nombre = userData.nombre;
      this.apellido = userData.apellido;
      this.rut = userData.rut;
    }
   
  }

  mostrarAlerta() {
    // Puedes personalizar la alerta según tus necesidades
    // Por ejemplo:
    const mensaje = '¡Asistencia registrada correctamente!';
    alert(mensaje);
  }

  // Función para agregar un cero delante de un número si es menor que 10
  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
