import { Component, input } from '@angular/core';

@Component({
  selector: 'app-associator',
  imports: [],
  templateUrl: './associator.component.html',
  styleUrl: './associator.component.css'
})
export class AssociatorComponent {
  public title = input.required<string>();
  public path = input.required<string>();
}
