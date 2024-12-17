import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryHeroBannerComponent } from './secondary-hero-banner.component';

describe('SecondaryHeroBannerComponent', () => {
  let component: SecondaryHeroBannerComponent;
  let fixture: ComponentFixture<SecondaryHeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryHeroBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
