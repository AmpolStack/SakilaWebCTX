import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { API_URL } from '../app.config';

@Component({
  selector: 'app-landing',
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  public API_URL : string = inject(API_URL)
  public FRONT_URL : string = 'http://localhost:4200'
}
