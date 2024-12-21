import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentBlockComponent } from './user-comment-block.component';

describe('UserCommentBlockComponent', () => {
  let component: UserCommentBlockComponent;
  let fixture: ComponentFixture<UserCommentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCommentBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCommentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
