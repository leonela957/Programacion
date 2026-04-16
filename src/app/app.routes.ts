import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';

export const routes: Routes = [
    { path: 'inicio', redirectTo: 'inicio', pathMatch: 'full' }, 
    { path: 'inicio', component: Inicio },
    { path: 'registro', component: Registro },
    { path: 'carrito', component: Carrito },
    { path: 'favoritos', component: Favoritos },
    { path: 'contacto', component: Contacto },
    { path: 'inicioS', component: InicioSesion },
    { path: 'ofertas', component: Ofertas },
    { path: 'productos', component: Productos },
    { path: '**', redirectTo: 'inicio' },

];
