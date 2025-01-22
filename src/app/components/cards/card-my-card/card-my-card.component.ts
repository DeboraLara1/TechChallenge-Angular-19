import { Component } from '@angular/core';
import { CardPaymentCardViewComponent } from "../card-payment-card-view/card-payment-card-view.component";
import { ButtonCustomComponent } from "../../buttons/button-custom/button-custom.component";

@Component({
  selector: 'app-card-my-card',
  imports: [CardPaymentCardViewComponent, ButtonCustomComponent],
  templateUrl: './card-my-card.component.html',
  styleUrl: './card-my-card.component.css'
})
export class CardMyCardComponent {

}
