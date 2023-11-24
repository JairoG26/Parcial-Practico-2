import { SerieService } from './../serie.service';
import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe({next: apiData => this.series = apiData , error: e => console.error(e)});
  }

  ngOnInit() {
    this.getSeries();
  }

}
