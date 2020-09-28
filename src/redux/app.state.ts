import { Filter } from './filter/filter.model';
import { Movie } from './movie/movie.model';

export interface AppState {
  movies: Movie[];
  filter: Filter;
}
