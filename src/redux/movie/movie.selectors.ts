import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';

export const selectMovies = (state: AppState) => state.movies;

export const getVisibleMovies = createSelector(
  selectMovies,
  movies => movies
);
