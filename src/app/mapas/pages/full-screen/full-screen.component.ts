import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; /*Con este codigo remplaza esto:  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js'); */
import { environment } from '../../../../environments/environment';

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
    (mapboxgl as any).accessToken = environment.mapboxToken;

    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

}
