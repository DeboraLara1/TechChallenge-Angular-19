import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-card-payment-card-view',
  imports: [NgStyle],
  templateUrl: './card-payment-card-view.component.html',
  styleUrl: './card-payment-card-view.component.css'
})
export class CardPaymentCardViewComponent {
  @Input() nameCard!: string;
  @Input() typeCard!: string;
  @Input() nameResponsibleCard!: string;
  @Input() numbercard!: string;
  @Input() customStyle!: { [key: string]: string };
}
