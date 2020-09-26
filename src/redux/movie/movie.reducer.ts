import { Movie } from './movie.model';

import { AllActions, MOVIE_ADD, MOVIE_REMOVE } from './movie.actions';

export function MoviesReducer(oldState: Movie[] = [], action: AllActions): Movie[] {
  switch (action.type) {
    case MOVIE_ADD: {
      return [
        ...oldState,
        action.newMovie
      ];
    }
    case MOVIE_REMOVE: {
      return oldState.filter((todo) => {
        return todo.id !== action.id;
      });
    }
    default: {
      return oldState;
    }
  }
}
