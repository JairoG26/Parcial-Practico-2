import { RestauranteService } from './../restaurante.service';
import { Component, OnInit } from '@angular/core';
import { RestauranteDetail } from '../restaurante-detail/restaurante-detail';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {

  maxRating: number = 0;
  maxNombre: String = "";
  restaurantes: Array<RestauranteDetail>=[]
  selectedRestaurante!:RestauranteDetail;
  selected:boolean=false;

  constructor(private restauranteService: RestauranteService) { }

  getMax() {
    let rating: number = 0;
    this.restaurantes.forEach(restaurante => {
      if (restaurante.rating > rating) {
        rating = restaurante.rating
        this.maxRating = restaurante.rating;
        this.maxNombre = restaurante.name;
      }
    });
  }

  getRestaurantes(){
    this.restauranteService.getRestaurantes().subscribe(apiData=>{
      this.restaurantes=apiData;
      this.getMax();
    })
  }
  selectRestaurante(restaurante:RestauranteDetail){
    this.selected=true;
    this.selectedRestaurante = restaurante;
  }

  ngOnInit() {
    this.getRestaurantes();
  }

}
