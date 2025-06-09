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
    { id: 1, name: 'Movie Name', link: ''},
    { id: 2, name: 'Movie Name', link: ''},
    { id: 3, name: 'Movie Name', link: ''},
    { id: 4, name: 'Movie Name', link: ''},
    { id: 5, name: 'Movie Name', link: ''},
    { id: 6, name: 'Movie Name', link: ''},
    { id: 7, name: 'Movie Name', link: ''},
    { id: 8, name: 'Movie Name', link: ''},
    { id: 9, name: 'Movie Name', link: ''},
  ]

  public defaultCarrousels : carouselProps[] = [
    {title: 'Similar Movies', movies: this.defaultMovies},
    {title: 'Recommended Movies', movies: this.defaultMovies},
  ]
}
