import { Component, inject, resource, signal } from '@angular/core';
import { CarouselComponent, carouselProps, movie } from '../carousel/carousel.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  imports: [CarouselComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  public dataService: DataService = inject(DataService);
  public carousels = signal<carouselProps[] | null>(null);

  constructor(){
    this.dataService.ObtainFilmsByCategories()
      .subscribe({
        next: (success) =>{
          let data = success.data;
          let resp = data.map(category =>({
            title: category.name,
            movies: category.films.map(movie =>({
              id: movie.referenceId,
              name: movie.title,
              link: ''
            }))
          }));
          console.log(success);
          this.carousels.set(resp)
        },
        error: (error) =>{
          console.error(error)
        }
      })
  }
}
