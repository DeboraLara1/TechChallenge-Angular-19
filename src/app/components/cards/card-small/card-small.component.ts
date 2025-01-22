import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-small',
  imports: [],
  templateUrl: './card-small.component.html',
  styleUrl: './card-small.component.css',
})
export class CardSmallComponent {
  @Input() iconCard!: string;
  @Input() titleCardSmall!: string;

  @Output() cardClick = new EventEmitter<void>();

  onCardClick() {
    this.cardClick.emit();
  }
}
