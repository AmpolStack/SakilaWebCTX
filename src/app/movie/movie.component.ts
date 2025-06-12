import { Component, inject, Inject, signal } from '@angular/core';
import { CarouselComponent, carouselProps, movie } from '../carousel/carousel.component';
import { ActivatedRoute } from '@angular/router';
import { DataService, Expensefilm } from '../data.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  imports: [CarouselComponent, TitleCasePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  private router = inject(ActivatedRoute);
  private service = inject(DataService);
  public movie = signal<Expensefilm | null>(null)

  constructor(){
    this.router.paramMap.subscribe(params =>{
      const referenceId = params.get('referenceId');
      let response = this.service.ObtainFilmByReferenceId(referenceId!)
        .subscribe({
          next: (success) =>{
            this.movie.set(success.data);
            console.log(success);
          },
          error: (error) =>{
            console.error(error)
          }
        })
    })
  }

  public defaultMovies : movie[] = [
      { id: (0).toString(), name: 'Movie Name', link: ''},
      { id: (1).toString(), name: 'Movie Name', link: ''},
      { id: (2).toString(), name: 'Movie Name', link: ''},
      { id: (3).toString(), name: 'Movie Name', link: ''},
      { id: (4).toString(), name: 'Movie Name', link: ''},
      { id: (5).toString(), name: 'Movie Name', link: ''},
      { id: (6).toString(), name: 'Movie Name', link: ''},
      { id: (7).toString(), name: 'Movie Name', link: ''},
      { id: (8).toString(), name: 'Movie Name', link: ''},
      { id: (9).toString(), name: 'Movie Name', link: ''},
    ]

    public defaultCarrousels : carouselProps[] = [
      {title: 'Similar Movies', movies: this.defaultMovies},
      {title: 'Recommended Movies', movies: this.defaultMovies},
    ]
}
