import { Component } from '@angular/core';
import { CardCenterComponent } from "../../../components/cards/card-center/card-center.component";
import { CardServicesAvailableComponent } from "../../../components/cards/card-services-available/card-services-available.component";

@Component({
  selector: 'app-other-services',
  imports: [CardCenterComponent, CardServicesAvailableComponent],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.css'
})
export class OtherServicesComponent {

}
