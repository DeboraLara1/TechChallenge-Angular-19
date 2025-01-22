import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewTransactionComponent } from './card-new-transaction.component';

describe('CardNewTransactionComponent', () => {
  let component: CardNewTransactionComponent;
  let fixture: ComponentFixture<CardNewTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNewTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNewTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
