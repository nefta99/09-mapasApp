import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; /*Con este codigo remplaza esto:  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js'); */

interface MarcadorColor {
  color: string;
  marker : mapboxgl.Marker;
}


@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .map-container{
      width:100%;
      height :100%;
    }
    .list-group{
      position: fixed;
      top:20px;
      right : 20px;
      z-index:999;
    }

    li{
      cursor: pointer;
    }
    
  `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa! : ElementRef;
  mapa! : mapboxgl.Map;
  zooLevel : number =15;
  center :[number,number] =[-75.921029433568,45.28719674822362] ;

  //Arreglo de marcadores
  marcadores: MarcadorColor[] = [];

  constructor() { }
  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zooLevel
      });


      // const markertHtml : HTMLElement = document.createElement('div');
      // markertHtml.innerHTML = 'Hola mundo';

      // //Para crear un marcador
      // const marker = new mapboxgl.Marker()
      // .setLngLat(this.center)
      // .addTo(this.mapa);



      /**Esto es para agregar un palabra 
      const marker = new mapboxgl.Marker({
        element : markertHtml
      })
      .setLngLat(this.center)
      .addTo(this.mapa);
      */
  }

  //Metodos
  irMarcador(){

  }

  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true, 
      color 
    })
    .setLngLat(this.center)
    .addTo(this.mapa)


    this.marcadores.push({
      color,
      marker : nuevoMarcador
    });
  }

  

}
