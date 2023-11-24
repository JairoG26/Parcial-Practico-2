import { Restaurante } from "../restaurante";

export class RestauranteDetail extends Restaurante {
  rating:number;
  description:string;
  image:string;
  constructor(id:number, name:string, opening_year:number, country:string, cuisine:string, rating:number, description:string, image:string){
    super(id, name, opening_year, country, cuisine);
    this.rating=rating;
    this.description=description;
    this.image=image;
  }
}
