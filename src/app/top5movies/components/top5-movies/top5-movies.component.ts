import { Component, OnInit } from '@angular/core';
import { Movie } from '@redux/movie/movie.model';
import { Top5Service } from '../../services/top5.service';


@Component({
  selector: 'mgmovapp-top5-movies',
  templateUrl: './top5-movies.component.html',
  styleUrls: ['./top5-movies.component.scss']
})
export class Top5MoviesComponent implements OnInit {

  movies: Movie[];

  constructor( private top5Service: Top5Service) {
  }

  ngOnInit(): void {
    this.top5Service.getTop5Movies()
     .subscribe( movies => this.movies = movies);
  }




}
