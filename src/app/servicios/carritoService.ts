import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  
  carrito: Producto[]=[];

agregarACarrito(p: Producto) {
  // Buscamos si el producto ya está en el carrito
  const productito = this.carrito.find(prod => prod.id === p.id);

  if (productito) {
    // Si existe, simplemente aumentamos su cantidad
    productito.cantidad++;
  } else {
    // Si no existe, lo agregamos al array
    this.carrito.push(p);
  }
}

  obtenerProductos(){
    return this.carrito
  }

  aumentarCantidad(id:number){
    const productito = this.carrito.find(p=> p.id === id);
    if(productito){
      productito.cantidad++;
    }
  }

  disminuirCantidad(id:number){
    const productito = this.carrito.find(p=> p.id === id);
    if (productito && productito.cantidad>1){
      productito.cantidad--;
    }
  }

  borrarProducto(id:number){
    this.carrito = this.carrito.filter(p => p.id !== id);
  }

  vaciarCarrito(){
    this.carrito = []
  }
}
