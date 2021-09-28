import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; /*Con este codigo remplaza esto:  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js'); */


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa{
        width:100%;
        height :100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*
     originalmente esta asi: mapboxgl.accessToken = 'pk.eyJ1IjoibmVmdGE5OSIsImEiOiJja3RvZmMyNngwYnllMndwcTAydjlpaTdmIn0.sqCP0yqARtweCSqF9EZbYQ';
     para solverntarlo dado que marca error se tiene que agrega asi (mapboxgl as any).accessToken
    */
    

    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-75.921029433568,45.28719674822362],
    zoom: 18
    });
  }

}
