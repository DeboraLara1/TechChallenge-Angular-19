import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-rectangular',
  imports: [],
  templateUrl: './card-rectangular.component.html',
  styleUrl: './card-rectangular.component.css'
})
export class CardRectangularComponent {
  @Input() valueInvestment!: string;
  @Input() title!: string;
}
