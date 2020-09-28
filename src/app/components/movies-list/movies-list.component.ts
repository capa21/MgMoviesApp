import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';

import { Movie } from '@redux/movie/movie.model';
import { getVisibleMovies } from '@redux/movie/movie.selectors';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'mgmovapp-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent   {

  movies: Movie[];

  childrens: Array<MovieItemComponent>;

  constructor(private store: Store<AppState>) {
    this.readMoviesState();
  }

  private readMoviesState(): void {
    this.store.select(getVisibleMovies)
      .subscribe( movies => this.movies = movies );
  }
}
