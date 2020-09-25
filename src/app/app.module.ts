import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { Top5MoviesComponent } from './components/top5-movies/top5-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMovieComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesListComponent,
    Top5MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
