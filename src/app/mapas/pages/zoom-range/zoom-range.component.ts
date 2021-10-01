import { AfterViewInit, Component, ElementRef,  OnDestroy,  ViewChild } from '@angular/core';
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
        width:400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit ,OnDestroy {

  @ViewChild('mapa') divMapa! : ElementRef;
  mapa! : mapboxgl.Map;
  zooLevel : number =10;
  center :[number,number] =[-75.921029433568,45.28719674822362] ;

  constructor() { 
    
  }
  ngOnDestroy(): void {
    
    /*
    Regla de oro, siemmpre que creemos eventos tenemos que destruirlos
     */
    this.mapa.off('zoom',()=>{});
    this.mapa.off('zoomed',()=>{});
    this.mapa.off('move',()=>{});
  }
 

  ngAfterViewInit(): void {
    
    

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zooLevel
      });

      //
      this.mapa.on('zoom',(ev)=>{        
        this.zooLevel = this.mapa.getZoom();
      })

      this.mapa.on('zoomend',(ev)=>{
        if(this.mapa.getZoom() > 18){
          this.mapa.zoomTo(18);
        }
      })


      //movimiento del mapa
      this.mapa.on('move',(event)=>{
        const target = event.target;
        const {lng, lat} = target.getCenter();
        this.center =[lng,lat];
        
      })
  }


  zoomOut(){
    //console.log('Zoomout');
    this.mapa.zoomOut();
  
  }
  zoomIn(){
    this.mapa.zoomIn();
    
  }

  zoomCambio(valor : string){
    //console.log(valor);
    this.mapa.zoomTo( Number(valor))
  }

}

