import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoService';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  carrito: Producto[] = [];
  constructor(
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.carrito = this.carritoService.obtenerProductos();
  }

  aumentarCantidad(id: number) {
    this.carritoService.aumentarCantidad(id);
  }

  disminuirCantidad(id: number) {
    this.carritoService.disminuirCantidad(id);
  }

  borrarProducto(id: number) {
    this.carritoService.borrarProducto(id)
    this.carrito = this.carritoService.obtenerProductos();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.carrito = []
  }
}
