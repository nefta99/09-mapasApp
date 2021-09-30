import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; /*Con este codigo remplaza esto:  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js'); */

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container{
        width:100%;
        height :100%;
      }

      .row{
        background-color: white;
        border-radius:5px;
        bottom: 50px;
        left:50px;
        padding:10px;
        position: fixed;
        z-index : 999;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa! : ElementRef;
  mapa! : mapboxgl.Map;
  zooLevel : number =10;


  constructor() { 
    
  }
 

  ngAfterViewInit(): void {
    
    

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.921029433568,45.28719674822362],
      zoom: this.zooLevel
      });

      //
      this.mapa.on('zoom',(ev)=>{        
        this.zooLevel = this.mapa.getZoom();
      })
  }


  zoomOut(){
    //console.log('Zoomout');
    this.mapa.zoomOut();
  
  }
  zoomIn(){
    this.mapa.zoomIn();
    
  }

}

