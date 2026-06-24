import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../../servicios/favoritoService';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoService';


@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favorito implements OnInit{
favorito: Producto[] = [];
constructor(
  private favoritoService: FavoritoService,
  private carritoService: CarritoService


) { }

  ngOnInit() {
    this.favorito = this.favoritoService.obtenerProducto();
  }

    borrarProducto(id: number) {
    this.favoritoService.borrarProducto(id)
    this.favorito = this.favoritoService.obtenerProducto();
  }

    vaciarFavorito() {
    this.favoritoService.vaciarFavorito();
    this.favorito = []
  }
  
    agregarCarrito(p: Producto){
    this.carritoService.agregarACarrito(p)
  }
}

