import { Component, input } from '@angular/core';

@Component({
  selector: 'app-prominents-list',
  imports: [],
  templateUrl: './prominents-list.component.html',
  styleUrl: './prominents-list.component.css'
})
export class ProminentsListComponent {
  public itemList = input<prominentItem[]>([]);
  public title = input<string>('');

  // TODO: Implements logic to obtain itemList by API
}

export interface prominentItem{
  name : string;
  description : string;
}
