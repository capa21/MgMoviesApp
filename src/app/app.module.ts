import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { Top5MoviesComponent } from './components/top5-movies/top5-movies.component';
import { NavigationBarComponent } from './components/shared/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';
import { MaterialModule } from '@material/material.module';
import { HomeMainComponent } from './components/home-main/home-main.component';

import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../redux/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMovieComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesListComponent,
    Top5MoviesComponent,
    NavigationBarComponent,
    HomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
