import { createSelector } from '@ngrx/store';
import { AppState } from './../app.state';

export const selectMovies = (state: AppState) => state.movies;
export const selectFilter = (state: AppState) => state.filter;

export const getVisibleMovies = createSelector(
  selectMovies,
  movies => movies
);

export const getSelectedMovies = createSelector(
  selectMovies,
  selectFilter,
  (movies, filter) => {
    if (filter.filter === 'SHOW_SELECTED') {
      return movies.filter( movie => movie.id === filter.idMovie);
    }
    return movies;
  }
);
