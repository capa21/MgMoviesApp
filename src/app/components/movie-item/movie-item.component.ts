import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { SetFilterAction } from '@redux/filter/filter.actions';
import { Filter } from '@redux/filter/filter.model';
import { MovieRemoveAction } from '@redux/movie/movie.actions';
import { Movie } from 'src/redux/movie/movie.model';

@Component({
  selector: 'mgmovapp-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent{
  @Input() movie: Movie;
  @Output() emitMovieSelected = new EventEmitter<string>();

  movieSelected = false;

  constructor(private store: Store<AppState>) { }

  deleteMovie(): void {
    const action = new MovieRemoveAction(this.movie.id);
    this.store.dispatch(action);
  }

  selectedMovie(): void {
    this.movieSelected = true;
    const filterMovieSelected: Filter = {
      filter: 'SHOW_SELECTED',
      idMovie: this.movie.id
    };
    const action = new SetFilterAction(filterMovieSelected);
    this.store.dispatch(action);
    this.emitMovieSelected.emit(this.movie.id);
  }
}
