import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Serie } from './serie';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl + 'categorias';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl).pipe(
      catchError((err) => throwError(() => new Error('error en el servicio')))
    );
  }

  getSerie(id: string): Observable<Serie> {
    return this.http.get<Serie>(this.apiUrl + '/' + id);
  }

}
