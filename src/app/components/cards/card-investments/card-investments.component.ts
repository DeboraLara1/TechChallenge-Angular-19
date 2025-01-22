import { Component } from '@angular/core';
import { CardLargeComponent } from "../card-large/card-large.component";
import { CardRectangularComponent } from "../card-rectangular/card-rectangular.component";

@Component({
  selector: 'app-card-investments',
  imports: [CardLargeComponent, CardRectangularComponent],
  templateUrl: './card-investments.component.html',
  styleUrl: './card-investments.component.css'
})
export class CardInvestmentsComponent {

}
