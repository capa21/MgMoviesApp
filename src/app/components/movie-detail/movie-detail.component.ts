import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { Movie } from '@redux/movie/movie.model';
import { getSelectedMovies } from '@redux/movie/movie.selectors';

@Component({
  selector: 'mgmovapp-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private store: Store<AppState>) {
    this.store.select(getSelectedMovies)
    .subscribe(movies => [this.movie] = movies);
   }

  ngOnInit(): void {
  }

}
