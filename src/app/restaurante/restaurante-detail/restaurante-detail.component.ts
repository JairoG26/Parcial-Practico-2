import { Component, Input, OnInit } from '@angular/core';
import { RestauranteDetail } from './restaurante-detail';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.css']
})
export class RestauranteDetailComponent implements OnInit {

  restauranteID!:string;
  @Input() restauranteDetail!: RestauranteDetail;
  constructor(private restauranteService: RestauranteService) { }

  getRestaurante(){
    this.restauranteService.getRestaurante(this.restauranteID).subscribe(Apidata=>{
      this.restauranteDetail=Apidata;
    })
  }

  ngOnInit() {
    if (this.restauranteID) {
      this.getRestaurante();
    }
  }
}
