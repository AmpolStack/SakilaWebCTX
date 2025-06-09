import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  public title : InputSignal<string | undefined> = input<string>();
  public movies = input.required<movie[]>();
  public isVertical = input<boolean>(false);
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