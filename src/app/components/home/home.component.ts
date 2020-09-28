import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { Movie } from '@redux/movie/movie.model';
import { getVisibleMovies } from '@redux/movie/movie.selectors';

@Component({
  selector: 'mgmovapp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private store: Store<AppState>,
              private route: Router) {
    this.store.select(getVisibleMovies)
    .subscribe(movies => this.movies = movies);
  }

  ngOnInit(): void {
  }

  get thereAreMovies(): boolean {
    return this.movies.length > 0;
  }

  goAddMovie(): void {
    this.route.navigate(['/add-movie']);
  }
}
