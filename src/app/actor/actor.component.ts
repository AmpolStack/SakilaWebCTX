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
      { id: (1).toString(), name: 'Movie Name', link: ''},
      { id: (2).toString(), name: 'Movie Name', link: ''},
      { id: (3).toString(), name: 'Movie Name', link: ''},
      { id: (4).toString(), name: 'Movie Name', link: ''},
      { id: (5).toString(), name: 'Movie Name', link: ''},
      { id: (6).toString(), name: 'Movie Name', link: ''},
      { id: (7).toString(), name: 'Movie Name', link: ''},
      { id: (8).toString(), name: 'Movie Name', link: ''},
      { id: (9).toString(), name: 'Movie Name', link: ''},
      { id: (10).toString(), name: 'Movie Name', link: ''},
    ]
  
    public defaultCarrousels : carouselProps= {
      title: 'Participates in:',
      movies: this.defaultMovies
    }
}
