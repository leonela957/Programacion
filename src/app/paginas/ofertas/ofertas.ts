import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoService';
import { FavoritoService } from '../../servicios/favoritoService';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {
  constructor(
    private carritoService: CarritoService,
    private favoritoService: FavoritoService
  ){}

  Ofertas: Producto[]=[
    {
    id: 4,
    disponibilidad: true,
    talle: 36,
    color: "rosado",
    img: "assets/zapatos4-versace.jpg",
    precio: 1000,
    marca: "Versace",
    cantidad: 1
    },
    {
    id: 5,
    disponibilidad: true,
    talle: 39,
    color: "verde",
    img: "assets/zapatos5-CO.jpg",
    precio: 700,
    marca: "Charlotte Olympia",
    cantidad: 1      
    },
    {
    id: 6,
    disponibilidad: true,
    talle: 37,
    color: "rojo",
    img: "assets/zapatos6-LB.jpg",
    precio: 90,
    marca: "Christian Louboutin",
    cantidad: 1      
    },
    {
      id: 7,
      disponibilidad: true,
      talle: 35,
      color: "azul petroleo",
      img: "assets/zapatos8.LB.jpg",
      precio: 700,
      marca: "Christian Louboutin",
      cantidad: 1      
    },
    {
      id: 17,
      disponibilidad: true,
      talle: 38,
      color: "blanco edición pin-up",
      img: "assets/zapatos19.CO.jpg",
      precio: 950,
      marca: "Charlotte Olympia",
      cantidad: 1      
    },
    {
      id: 18,
      disponibilidad: true,
      talle: 35,
      color: "blanco",
      img: "assets/zapatos25.CD.jpg",
      precio: 1000,
      marca: "Dior",
      cantidad: 1
    },
    {
      id: 20,
      disponibilidad: true,
      talle: 35,
      color: "blanco",
      img: "assets/zapatos27.CC.jpg",
      precio: 850,
      marca: "Chanel",
      cantidad: 1
    },
    {
      id: 21,
      disponibilidad: true,
      talle: 37,
      color: "negro",
      img: "assets/zapatos28.CC.jpg",
      precio: 1000,
      marca: "Chanel",
      cantidad: 1
    },
    {
      id: 22,
      disponibilidad: true,
      talle: 34,
      color: "vino",
      img: "assets/zapatos28.V.jpg",
      precio: 950,
      marca: "Versace",
      cantidad: 1
    },
    {
      id: 23,
      disponibilidad: true,
      talle: 38,
      color: "negro",
      img: "assets/zapatos29.SF.png",
      precio: 900,
      marca: "Salvatore Ferragamo",
      cantidad: 1
    },
    {
      id: 24,
      disponibilidad: true,
      talle: 37,
      color: "blanco",
      img: "assets/zapatos30.V.jpg",
      precio: 950,
      marca: "Versace",
      cantidad: 1
    },
    {
      id: 27,
      disponibilidad: true,
      talle: 35,
      color: "blanco",
      img: "assets/zapatos33.V.jpg",
      precio: 1000,
      marca: "Versace",
      cantidad: 1
    },
    {
      id: 28,
      disponibilidad: true,
      talle: 38,
      color: "dorado",
      img: "assets/zapatos34.V.jpg",
      precio: 950,
      marca: "Versace",
      cantidad: 1
    },
    {
      id: 29,
      disponibilidad: true,
      talle: 34,
      color: "negro",
      img: "assets/zapatos35.V.jpg",
      precio: 1000,
      marca: "Versace",
      cantidad: 1
    }
  ]

  agregarACarrito(p:Producto){
    this.carritoService.agregarACarrito(p);
  }

    agregarAFavorito(p:Producto){
    this.favoritoService.agregarAFavorito(p);
  }
}
