import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopUpContent, PopUpType, PopUpWindowComponent } from './pop-up-window/pop-up-window.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopUpWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sakila_pjt';
  public isSuggestionWindowActive = signal<boolean>(false);
  public activePopUp = signal<boolean>(false);

  defaultContent : PopUpContent = {
    reason: 'PopUpWindow Active!',
    description: 'It is just a tests for popUp, example: error'
  };

  defaulType = PopUpType.Info;
}
