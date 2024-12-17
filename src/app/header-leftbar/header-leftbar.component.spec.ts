import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeftbarComponent } from './header-leftbar.component';

describe('HeaderLeftbarComponent', () => {
  let component: HeaderLeftbarComponent;
  let fixture: ComponentFixture<HeaderLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLeftbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
