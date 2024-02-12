import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primer aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio',
  ];
  name = 'Esteban';
  age = 30;
  disabled = true;
  img = 'https://i.ibb.co/y8HvR0H/mr-peanutbutter.webp';

  person = {
    name: 'Esteban',
    age: 18,
    avatar: 'https://i.ibb.co/y8HvR0H/mr-peanutbutter.webp'
  }
}
