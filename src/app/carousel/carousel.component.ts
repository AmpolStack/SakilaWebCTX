import { Component, input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  public title = input.required<string>();
  public movies = input.required<movie[]>();
}

export interface movie{
  id : number;
  name : string;
  link : string;
}

export interface carouselProps{
  title : string,
  movies : movie[]
}