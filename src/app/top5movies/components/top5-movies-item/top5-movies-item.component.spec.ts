import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5MoviesItemComponent } from './top5-movies-item.component';

describe('Top5MoviesItemComponent', () => {
  let component: Top5MoviesItemComponent;
  let fixture: ComponentFixture<Top5MoviesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5MoviesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5MoviesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.movie = {
      "title": "Home Alone 2",
      "release": "11/20/1992",
      "description": "One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.",
      "image": "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
