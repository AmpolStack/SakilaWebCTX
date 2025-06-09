import { Component } from '@angular/core';
import { CarouselComponent, carouselProps, movie } from '../carousel/carousel.component';

@Component({
  selector: 'app-search',
  imports: [CarouselComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
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
}
