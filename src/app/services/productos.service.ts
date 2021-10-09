import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  cargando = true;
  productos: any;
  productosFiltrado: Producto[] = [];

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

  getProductio(id: string){
    return this.http.get(`https://angular-catalogo-98f71-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProdcuto( termino: string){
    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });
    console.log(this.productosFiltrado);
  }
} // Fin ProductosService
