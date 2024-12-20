import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeatureListItemComponent } from './product-feature-list-item.component';

describe('ProductFeatureListItemComponent', () => {
  let component: ProductFeatureListItemComponent;
  let fixture: ComponentFixture<ProductFeatureListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFeatureListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFeatureListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
