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
  
    public defaultCarrousels : carouselProps= {
      title: 'Participates in:',
      movies: this.defaultMovies
    }
}
