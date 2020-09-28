import { Action } from '@ngrx/store';

import { Movie } from './movie.model';

export const MOVIE_ADD = '[Movies] add';
export const MOVIE_REMOVE = '[Movies] remove';
export const MOVIE_SELECTED = '[Movies] selected';

export class MovieAddAction implements Action {
  readonly type = MOVIE_ADD;

  constructor(
    public newMovie: Movie
  ) {}
}

export class MovieRemoveAction implements Action {
  readonly type = MOVIE_REMOVE;

  constructor(
    public id: string
  ) {}
}

export class MovieSelectedAction implements Action {
  readonly type = MOVIE_SELECTED;

  constructor(
    public id: string
  ) {}
}

export type AllActions =
  MovieAddAction |
  MovieRemoveAction |
  MovieSelectedAction;
