import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-custom',
  imports: [NgStyle],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.css'
})
export class ButtonCustomComponent {
  @Input() descriptionButton!: string;
  @Input() customStyle!: { [key: string]: string };
}
