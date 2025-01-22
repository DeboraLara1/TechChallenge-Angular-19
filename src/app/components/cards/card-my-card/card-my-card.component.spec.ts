import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyCardComponent } from './card-my-card.component';

describe('CardMyCardComponent', () => {
  let component: CardMyCardComponent;
  let fixture: ComponentFixture<CardMyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
