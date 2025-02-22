import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractMenuComponent } from './extract-menu.component';

describe('ExtractMenuComponent', () => {
  let component: ExtractMenuComponent;
  let fixture: ComponentFixture<ExtractMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
