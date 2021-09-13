import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverAnimationComponent } from './hover-animation.component';

describe('HoverAnimationComponent', () => {
  let component: HoverAnimationComponent;
  let fixture: ComponentFixture<HoverAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
