import { Component, OnInit } from '@angular/core';
import { moviesService } from '../movies.service';
import { Movie } from '../shared/movie.model';
import { style, transition, trigger, animate, query, keyframes, stagger } from '@angular/animations';
import { AuthService } from '../shared/auth.service.service';


@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.scss'],
  animations: [

    trigger( 'loungeMovies', [

      transition( ':enter', [

          query( '*', stagger( '300ms', [

                animate( '0.5s ease-in', keyframes([
                  style( { opacity: 0, transform: 'translateY(0%)', offset: 0}),
                  style( { opacity: 1, transform: 'translateX(0)', offset: 1}),
                ]))
            ]), { optional: true} ),
        ] )
    ] ),
  ]

})

export class LoungeComponent implements OnInit{

  todosOsFilmes: Movie[];

  isLoading: boolean;

  constructor(private myMoviesService: moviesService, private myAuthService: AuthService) {}

  ngOnInit(): void {

    this.isLoading = false;

    this.myAuthService.userLoggedOut.subscribe((data: boolean) => {
      this.isLoading = data;

    })


    this.todosOsFilmes = this.myMoviesService.getMovies();
    
    // FILMES FILTRADOS onkeyup input e onchange select
    this.myMoviesService.filmesQueForamFiltrados.subscribe((bananaFilme: Movie[]) =>{
      this.todosOsFilmes = bananaFilme;
    })
    // FILMES FILTRADOS onkeyup input e onchange select

  }

}


