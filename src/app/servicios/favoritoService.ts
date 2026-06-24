import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { CarritoService } from './carritoService';
import { Productos } from '../paginas/productos/productos';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
    favorito: Producto[]=[];
    constructor(
      private carritoService: CarritoService
    ){}
  
  agregarAFavorito(p: Producto) {
    // Buscamos si el producto ya está en el carrito
    const productito = this.favorito.find(prod => prod.id === p.id);
  
      if (productito){
        // si existe el producto no hace nada
        console.log(productito)
        return
      }else{
      // Si no existe, lo agregamos al array
      this.favorito.push(p);
      console.log("Se agrego a favoritos")
      }
  }

  obtenerProducto(){
    return this.favorito
  }

    borrarProducto(id:number){
    this.favorito = this.favorito.filter(p => p.id !== id);
  }

    vaciarFavorito(){
    this.favorito = []
  }

  agregarCarrito(p: Producto){
    this.carritoService.agregarACarrito(p)
  }


}
