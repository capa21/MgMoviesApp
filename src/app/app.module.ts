import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NavigationBarComponent } from './components/shared/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../redux/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeMainComponent } from './components/home-main/home-main.component';
import { Top5MoviesComponent } from './top5movies/components/top5-movies/top5-movies.component';
import { Top5MoviesItemComponent } from './top5movies/components/top5-movies-item/top5-movies-item.component';
import { Top5Service } from './top5movies/services/top5.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMovieComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesListComponent,
    NavigationBarComponent,
    HomeMainComponent,
    Top5MoviesComponent,
    Top5MoviesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    ReactiveFormsModule

  ],
  providers: [ Top5Service ],
  bootstrap: [AppComponent],
})
export class AppModule { }
