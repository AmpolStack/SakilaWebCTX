import { Component } from '@angular/core';
import { CarouselComponent, carouselProps, movie } from '../carousel/carousel.component';

@Component({
  selector: 'app-actor',
  imports: [CarouselComponent],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent {
    public defaultMovies : movie[] = [
      { id: 1, name: 'Movie Name', link: ''},
      { id: 2, name: 'Movie Name', link: ''},
      { id: 3, name: 'Movie Name', link: ''},
      { id: 4, name: 'Movie Name', link: ''},
      { id: 5, name: 'Movie Name', link: ''},
      { id: 6, name: 'Movie Name', link: ''},
      { id: 7, name: 'Movie Name', link: ''},
      { id: 8, name: 'Movie Name', link: ''},
      { id: 9, name: 'Movie Name', link: ''},
      { id: 10, name: 'Movie Name', link: ''},
    ]
  
    public defaultCarrousels : carouselProps= {
      title: 'Participates in:',
      movies: this.defaultMovies
    }
}
