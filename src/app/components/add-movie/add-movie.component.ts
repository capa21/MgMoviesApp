import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '@redux/movie/movie.model';
import { AppState } from 'src/redux/app.state';
import { MovieAddAction } from 'src/redux/movie/movie.actions';

@Component({
  selector: 'mgmovapp-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  form: FormGroup;
  urlImgStringBase64: string;

  constructor(private store: Store<AppState>,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: ['',  [Validators.required]],
      release: ['', [Validators.required]],
      description: [''],
      image: ['', [Validators.required]]
    });
  }

  get titleField(): AbstractControl {
    return this.form.get('title');
  }

  get titleFieldIsValid(): boolean {
    return this.titleField.touched && this.titleField.valid;
  }

  get titleFieldIsInvalid(): boolean {
    return this.titleField.touched && this.titleField.invalid;
  }

  get dateField(): AbstractControl {
    return this.form.get('release');
  }

  get dateFieldIsValid(): boolean {
    return this.dateField.touched && this.dateField.valid;
  }

  get dateFieldIsInvalid(): boolean {
    return this.dateField.touched && this.dateField.invalid;
  }

  get imageField(): AbstractControl {
    return this.form.get('image');
  }

  get imageFieldIsValid(): boolean {
    return this.imageField.touched && this.imageField.valid;
  }

  get imageFieldIsInvalid(): boolean {
    return this.imageField.touched && this.imageField.invalid;
  }

  get descriptionField(): AbstractControl {
    return this.form.get('description');
  }
  save(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const infoMovie: Movie = this.form.value;
      this.saveMovie(infoMovie);
    } else {
      this.form.markAllAsTouched();
    }
  }

  previewImage(files: FileList): void {
    const preview = document.querySelector('#imgMovie');
    const file = files.item(0);
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.urlImgStringBase64 = reader.result.toString();
      preview.setAttribute('src', reader.result.toString());
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  private saveMovie(infoMovie: Movie): void {
    const {title, description, release } = infoMovie;
    const objectAction: Movie = {
      id: Math.random().toString(),
      title,
      description,
      release,
      image: this.urlImgStringBase64
    };
    const action = new MovieAddAction(objectAction);
    this.store.dispatch(action);
    this.router.navigateByUrl('/home');
  }
}
