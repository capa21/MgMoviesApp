import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { moviesReducer } from './movie/movie.reducer';
import { filterReducer } from './filter/filter.reducer';

export const AppReducer: ActionReducerMap<AppState>  = {
  movies: moviesReducer,
  filter: filterReducer
};
