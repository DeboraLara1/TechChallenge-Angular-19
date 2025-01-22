import { Component } from '@angular/core';
import { CardCenterComponent } from "../../components/cards/card-center/card-center.component";
import { CardNewTransactionComponent } from "../../components/cards/card-new-transaction/card-new-transaction.component";

@Component({
  selector: 'app-dashboard',
  imports: [CardCenterComponent, CardNewTransactionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
