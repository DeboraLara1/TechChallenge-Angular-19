import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaymentCardViewComponent } from './card-payment-card-view.component';

describe('CardPaymentCardViewComponent', () => {
  let component: CardPaymentCardViewComponent;
  let fixture: ComponentFixture<CardPaymentCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPaymentCardViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPaymentCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
