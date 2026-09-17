import { Component } from '@angular/core';
import { Registro } from '../../components/registro/registro';

@Component({
  imports: [Registro],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

// Administrador del template de home, es el encargado de manejar la logica de la vista
export class Home {
  nombre: string = 'Gestión de productos';
  cantidad: number = 3;
  precioPorProducto: number = 1000;

  aumentarCantidad() {
    this.cantidad++;
  }
}
