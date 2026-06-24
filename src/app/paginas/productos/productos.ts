import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoService } from '../../servicios/carritoService';
import { FavoritoService } from '../../servicios/favoritoService';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  constructor(
    private carritoService: CarritoService,
    private favoritoService: FavoritoService
  ){}


  Productos: Producto[]=[
    {
    id: 1,
    disponibilidad: true,
    talle: 37,
    color: "negro",
    img: "assets/zapatos1.jpg",
    precio: 1150,
    marca: "Louis Vuitton",
    cantidad: 1
    },

    {
    id: 2,
    disponibilidad: true,
    talle: 35,
    color: "negro",
    img: "assets/zapatos2-dior.jfif",
    precio: 1115,
    marca: "Christian Dior",
    cantidad: 1
    },

    {
    id: 3,
    disponibilidad: true,
    talle: 38,
    color: "gris",
    img: "assets/zapatos3-chanel.jpg",
    precio: 1580,
    marca: "Chanel",
    cantidad: 1
    },

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
      id: 8,
      disponibilidad: true,
      talle: 36,
      color: "bordo edición peluche",
      img: "assets/zapatos9.LB.jpg",
      precio: 1900,
      marca: "Christian Louboutin",
      cantidad: 1
    },

    {
      id: 9,
      disponibilidad: true,
      talle: 38,
      color: "nude con tachas",
      img: "assets/zapatos10.LB.jpg",
      precio: 1300,
      marca: "Christian Louboutin",
      cantidad: 1
    },
    {
      id: 10,
      disponibilidad: true,
      talle: 37,
      color: "negro suela roja",
      img: "assets/zapatos11.LB.png",
      precio: 1100,
      marca: "Christian Louboutin",
      cantidad: 1
    },
    {
      id: 11,
      disponibilidad: true,
      talle: 35,
      color: "nude",
      img: "assets/zapatos11.SF.jpg",
      precio: 1200,
      marca: "Salvatore Ferragamo",
      cantidad: 1
    },
    {
      id: 12,
      disponibilidad: true,
      talle: 37,
      color: "negro",
      img: "assets/zapatos13.JC.jpg",
      precio: 1250,
      marca: "Jimmy Choo",
      cantidad: 1
    },
    {
      id: 13,
      disponibilidad: true,
      talle: 36,
      color: "dorado edición glitter",
      img: "assets/zapatos14.JC.jpg",
      precio: 1300,
      marca: "Jimmy Choo",
      cantidad: 1
    },
    {
      id: 14,
      disponibilidad: true,
      talle: 35,
      color: "negro edición strass",
      img: "assets/zapatos15.JC.jpg",
      precio: 1500,
      marca: "Jimmy Choo",
      cantidad: 1
    },
    {
      id: 15,
      disponibilidad: true,
      talle: 39,
      color: "rojo",
      img: "assets/zapatos17.CO.jpg",
      precio: 1400,
      marca: "Charlotte Olympia",
      cantidad: 1
    },
    {
      id: 16,
      disponibilidad: true,
      talle: 36,
      color: "negro",
      img: "assets/zapatos18.CO.jpg",
      precio: 1200,
      marca: "Charlotte Olympia",
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
      id: 19,
      disponibilidad: true,
      talle: 39,
      color: "blanco",
      img: "assets/zapatos26.CC.jpg",
      precio: 1300,
      marca: "Chanel",
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
      id: 25,
      disponibilidad: true,
      talle: 37,
      color: "plateado edición pedreria",
      img: "assets/zapatos31.V.jpg",
      precio: 1250,
      marca: "Versace",
      cantidad: 1
    },
    {
      id: 26,
      disponibilidad: true,
      talle: 39,
      color: "negro",
      img: "assets/zapatos32.V.jpg",
      precio: 1100,
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
