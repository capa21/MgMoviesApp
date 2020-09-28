import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mgmovapp-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  addMovie(): void {
    this.route.navigateByUrl('/add-movie');
  }

}
