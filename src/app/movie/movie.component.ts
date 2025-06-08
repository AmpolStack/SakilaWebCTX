import { Component } from '@angular/core';
import { CarouselComponent, carouselProps, movie } from '../carousel/carousel.component';

@Component({
  selector: 'app-movie',
  imports: [CarouselComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
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
    {title: 'Similar Movies', movies: this.defaultMovies},
    {title: 'Recommended Movies', movies: this.defaultMovies},
  ]
}
