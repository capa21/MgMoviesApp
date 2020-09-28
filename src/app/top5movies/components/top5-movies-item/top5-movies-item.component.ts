import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@redux/movie/movie.model';

@Component({
  selector: 'mgmovapp-top5-movies-item',
  templateUrl: './top5-movies-item.component.html',
  styleUrls: ['./top5-movies-item.component.scss']
})
export class Top5MoviesItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
