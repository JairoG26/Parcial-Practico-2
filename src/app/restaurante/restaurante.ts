export class Restaurante {
  id:number;
  name:string;
  opening_year:number;
  country:string;
  cuisine:string;
  constructor(id:number, name:string, opening_year:number, country:string, cuisine:string){
      this.id=id;
      this.name=name;
      this.opening_year=opening_year;
      this.country=country;
      this.cuisine=cuisine;
  }
}
