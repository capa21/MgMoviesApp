import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { MoviesReducer } from './movie/movie.reducer';

export const AppReducer: ActionReducerMap<AppState>  = {
  movies: MoviesReducer
};
