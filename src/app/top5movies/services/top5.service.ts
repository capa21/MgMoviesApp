import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@redux/movie/movie.model';
import { Observable } from 'rxjs';
import { ResponseTop5Movies } from '../model/top5-response.model';
import { map } from 'rxjs/operators';

@Injectable()
export class Top5Service {

  url = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
  constructor(private http: HttpClient) { }


  getTop5Movies(): Observable<Movie[]> {
    return this.http.get<ResponseTop5Movies>(this.url)
    .pipe(
        map( response => response.movies)
      );
  }
}
