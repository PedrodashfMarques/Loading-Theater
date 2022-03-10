import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { moviesService } from 'src/app/movies.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss']
})
export class SearchFiltersComponent implements OnInit {
  
  @ViewChild('movieTitle') movieTitle: ElementRef;
  @ViewChild('movieGenre') movieGenre: ElementRef;


  filmePesquisado: string = '';

  generoFilmePesquisado: string = "";

  arrayFilmesPesquisados: Movie[];


  constructor(private myMoviesService: moviesService) { }

  ngOnInit(): void {
  }

  pesquisarFilme(){

    this.filmePesquisado = this.movieTitle.nativeElement.value.toLowerCase();
    this.generoFilmePesquisado = this.movieGenre.nativeElement.value.toLowerCase();
    
    this.myMoviesService.pesquisarFilme(this.filmePesquisado, this.generoFilmePesquisado).subscribe((data: Movie[]) =>{
      this.arrayFilmesPesquisados = data;
    })

    this.myMoviesService.filmesQueForamFiltrados.next(this.arrayFilmesPesquisados);
  }


}
