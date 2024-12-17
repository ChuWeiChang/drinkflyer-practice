import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPopupComponent } from './discount-popup.component';

describe('DiscountPopupComponent', () => {
  let component: DiscountPopupComponent;
  let fixture: ComponentFixture<DiscountPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
