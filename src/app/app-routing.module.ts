import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { HomeComponent } from './components/home/home.component';
import { Top5MoviesComponent } from './top5movies/components/top5-movies/top5-movies.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-movie',
    component: AddMovieComponent
  },
  {
    path: 'top5',
    component: Top5MoviesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
