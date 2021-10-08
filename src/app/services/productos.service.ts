import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  cargando = true;
  productos: any;

  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-catalogo-98f71-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto) => {
      this.cargando = false;
      this.productos = resp;
    });
  }
} // Fin ProductosService
