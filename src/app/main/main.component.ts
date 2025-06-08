import { Component } from '@angular/core';
import { CarouselComponent, carouselProps, movie } from '../carousel/carousel.component';

@Component({
  selector: 'app-main',
  imports: [CarouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public defaultMovies : movie[] = [
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
    { id: 0, name: 'Movie Name', link: ''},
  ]

  public defaultCarrousels : carouselProps[] = [
    {title: 'Movie Category', movies: this.defaultMovies},
    {title: 'Movie Category', movies: this.defaultMovies},
    {title: 'Movie Category', movies: this.defaultMovies},
    {title: 'Movie Category', movies: this.defaultMovies},
    {title: 'Movie Category', movies: this.defaultMovies}
  ]
}
