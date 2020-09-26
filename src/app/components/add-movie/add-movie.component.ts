import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { MovieAddAction } from 'src/redux/movie/movie.actions';

@Component({
  selector: 'mgmovapp-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  saveMovie(): void {
    const action = new MovieAddAction({
      id: Math.random().toString(),
      title: 'Mi bella dama',
      release: new Date(),
      description: 'Pelicula de 2005',
      image: 'aca debe ir la imagen en base64'
    });
    this.store.dispatch(action);
  }

}
