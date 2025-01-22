import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInvestmentsComponent } from './card-investments.component';

describe('CardInvestmentsComponent', () => {
  let component: CardInvestmentsComponent;
  let fixture: ComponentFixture<CardInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInvestmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
