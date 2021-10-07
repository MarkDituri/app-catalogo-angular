import { HttpClient, HttpClientModule } from '@angular/common/http';

import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  //equipo = any[] = [];

  constructor( private http: HttpClient) {
    this.cargarInfo;
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-catalogo-98f71-default-rtdb.firebaseio.com/equipo.json')
    .subscribe( (resp:any) => {
      this.equipo = resp;
    });
  }

} // Fin class InfoPaginaService
