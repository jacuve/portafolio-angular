import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
equipo: any[] = [{"frase":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.","nombre":"Jose C","subtitulo":"Programador","twitter":"@jacuve","url":"https://firebasestorage.googleapis.com/v0/b/angular-html-e587a.appspot.com/o/team-1.jpg?alt=media&token=6df638a5-de45-4ed8-8987-4d0114eca68c"},{"frase":"Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit","nombre":"Melinda","subtitulo":"Ingeniera de sistemas","twitter":"@melin","url":"https://firebasestorage.googleapis.com/v0/b/angular-html-e587a.appspot.com/o/team-2.jpg?alt=media&token=7cf6ffe3-fe7b-4d2c-9e3c-febed421cb29"},{"frase":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","nombre":"Hernando Vallejo","subtitulo":"Master en Marketing","twitter":"@hernando123","url":"https://firebasestorage.googleapis.com/v0/b/angular-html-e587a.appspot.com/o/team-3.jpg?alt=media&token=9a930fca-47fa-45e6-a8b9-b38da758f435"}];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){

    console.log('Servicio de Info Pagina listo');
    // leer el archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
    });

  }

  private cargarEquipo(){
    this.http.get('https://angular-html-e587a.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
        this.cargada = true;
        this.equipo = resp;
        console.log( resp );
    });

  }
}
