import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { API_URL } from '../app.config';
import { prominentItem, ProminentsListComponent } from './prominents-list/prominents-list.component';
import { AssociatorComponent } from './associator/associator.component';

@Component({
  selector: 'app-landing',
  imports: [RouterModule, ProminentsListComponent, AssociatorComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  public API_URL : string = inject(API_URL)
  public FRONT_URL : string = 'http://localhost:4200'


  public asidesContent: asideItem[] = [
  {
    title: 'Most Searched Actors',
    prominent: [
      {
        name: 'Riley Keough',
        description: 'Granddaughter of Elvis Presley, she has carved a strong path in indie cinema with emotionally rich roles in films like *The Lodge* and *Zola*. Known for her intense, grounded performances.'
      },
      {
        name: 'Lakeith Stanfield',
        description: 'A versatile actor with standout performances in *Sorry to Bother You* and *The Photograph*. He often takes on roles that challenge traditional narratives and genre boundaries.'
      },
      {
        name: 'Tilda Cobham-Hervey',
        description: 'An Australian actress praised for her portrayal of Helen Reddy in *I Am Woman*. She moves effortlessly between biographical drama and introspective indie films.'
      },
      {
        name: 'Joe Cole',
        description: 'Recognized for his role in *Peaky Blinders*, he delivered a visceral performance in *A Prayer Before Dawn*, playing a British boxer imprisoned in Thailand. Raw and gripping.'
      },
      {
        name: 'Eliza Scanlen',
        description: 'An emotionally compelling young actress who emerged in *Sharp Objects* and starred in *Babyteeth*. Known for her deep sensitivity and presence in dramatic roles.'
      }
    ]
  },
  {
    title: 'Most Rented Movies',
    prominent: [
      {
        name: 'Columbus',
        description: 'A visually poetic film by Kogonada, exploring architecture and emotional stillness through a quiet story of unexpected connection in a modernist town.'
      },
      {
        name: 'The Fits',
        description: 'A hypnotic coming-of-age drama following a young girl navigating identity and belonging within a tight-knit dance team. Minimalist and deeply symbolic.'
      },
      {
        name: 'Blue Ruin',
        description: 'A gritty, slow-burning revenge thriller that subverts genre expectations. Directed by Jeremy Saulnier, it focuses on a man driven by personal justice rather than heroism.'
      },
      {
        name: 'First Reformed',
        description: 'A stark, introspective character study from Paul Schrader, starring Ethan Hawke as a troubled priest wrestling with faith, guilt, and environmental despair.'
      },
      {
        name: 'Wendy and Lucy',
        description: 'A quiet portrait of poverty and companionship, starring Michelle Williams. A deeply human film about loss, survival, and the bond between a woman and her dog.'
      },
      {
        name: 'The Rider',
        description: 'A neo-Western drama blending reality and fiction, following a rodeo rider dealing with the aftermath of a traumatic injury. Beautifully shot and emotionally resonant.'
      },
      {
        name: 'Upstream Color',
        description: 'A complex sci-fi romance by Shane Carruth, known for its enigmatic narrative and haunting visuals. A story about identity, control, and interconnection.'
      }
    ]
  }
];

}

interface asideItem{
  title : string;
  prominent : prominentItem[];
}
