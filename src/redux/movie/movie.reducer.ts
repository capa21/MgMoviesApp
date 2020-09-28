import { Movie } from './movie.model';

import { AllActions, MOVIE_ADD, MOVIE_REMOVE, MOVIE_SELECTED } from './movie.actions';

export function moviesReducer(oldState: Movie[] = [], action: AllActions): Movie[] {
  switch (action.type) {
    case MOVIE_ADD: {
      return [
        ...oldState,
        action.newMovie
      ];
    }
    case MOVIE_REMOVE: {
      return oldState.filter((movie) => {
        return movie.id !== action.id;
      });
    }
    case MOVIE_SELECTED: {
      return oldState.filter((movie) => {
        return movie.id === action.id;
      });
    }
    default: {
      return oldState;
    }
  }
}
