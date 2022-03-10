import { Component, OnInit } from '@angular/core';
import { moviesService } from '../movies.service';
import { Movie } from '../shared/movie.model';
import { style, transition, trigger, animate, query, keyframes, stagger } from '@angular/animations';
import { AuthService } from '../shared/auth.service.service';


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
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
export class MyListComponent implements OnInit {

  minhaListaDeFilmes: Movie[];

  isLoading: boolean;


  constructor(private myMoviesService: moviesService, private myAuthService: AuthService) { }

  ngOnInit(): void {
    this.minhaListaDeFilmes = this.myMoviesService.getFavouriteMovies();

    this.isLoading = false;

    this.myAuthService.userLoggedOut.subscribe((data: boolean) => {
      this.isLoading = data; 
    })

  }
}
