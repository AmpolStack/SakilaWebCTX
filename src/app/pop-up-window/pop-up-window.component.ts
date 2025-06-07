import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-pop-up-window',
  imports: [],
  templateUrl: './pop-up-window.component.html',
  styleUrl: './pop-up-window.component.css',
  host: {
    '[style.--principalColor]' : 'color()',
    '(keydown.tab)' : "onTab($event)"
  }
})
export class PopUpWindowComponent {
  public type = input.required<PopUpType>();
  public content = input.required<PopUpContent>();
  public isActive = output<boolean>();
  public focused = signal<boolean>(true);

  public color = computed(() => {
    switch (this.type()) {
      case PopUpType.Error:   return 'var(--errorColor)';
      case PopUpType.Info:    return 'var(--bgLink)';
      case PopUpType.Success: return 'var(--successColor)';
      default:                return '#444';
    }
  });

  public OffPop(){
    this.isActive.emit(false);
  }

  public OnTab(event: KeyboardEvent){
    event.preventDefault();
    event.stopPropagation();

    this.focused.set(true);
  }

}

export enum PopUpType{
  Info,
  Error,
  Success
}

export interface PopUpContent{
  reason: string;
  description: string;
}