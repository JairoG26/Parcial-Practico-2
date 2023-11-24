import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestauranteDetail } from './restaurante-detail/restaurante-detail';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private apiUrl: string = "https://gist.githubusercontent.com/t-montes/5ebece61782d6a06656b71a155ef0698/raw/international-restaurants.json";

  constructor(private http: HttpClient) {
  }
    getRestaurantes(): Observable<RestauranteDetail[]>{
      return this.http.get<RestauranteDetail[]>(this.apiUrl);
    }
    getRestaurante(id:string): Observable<RestauranteDetail>{
      return this.http.get<RestauranteDetail>(this.apiUrl + "/" + id);
    }

}
