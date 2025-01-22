import { Component } from '@angular/core';
import { CardCenterComponent } from "../../components/cards/card-center/card-center.component";
import { CardInvestmentsComponent } from "../../components/cards/card-investments/card-investments.component";

@Component({
  selector: 'app-investments',
  imports: [CardCenterComponent, CardInvestmentsComponent],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent {

}
