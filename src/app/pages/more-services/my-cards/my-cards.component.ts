import { Component } from '@angular/core';
import { CardCenterComponent } from "../../../components/cards/card-center/card-center.component";
import { CardMyCardComponent } from "../../../components/cards/card-my-card/card-my-card.component";

@Component({
  selector: 'app-my-cards',
  imports: [CardCenterComponent, CardMyCardComponent],
  templateUrl: './my-cards.component.html',
  styleUrl: './my-cards.component.css'
})
export class MyCardsComponent {

}
