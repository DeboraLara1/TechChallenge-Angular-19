import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicesAvailableComponent } from './card-services-available.component';

describe('CardServicesAvailableComponent', () => {
  let component: CardServicesAvailableComponent;
  let fixture: ComponentFixture<CardServicesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServicesAvailableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardServicesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
