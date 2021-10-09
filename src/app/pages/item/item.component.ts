import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto.descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto : ProductoDescripcion = {};
  id: any;

  constructor( private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      this.productoService.getProductio(parametros['id'])
      .subscribe( (producto: ProductoDescripcion) => {
        this.id = parametros['id'];
        this.producto = producto;
      })
    });
  }

}
