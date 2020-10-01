import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedtextComponent } from './animatedtext.component';

describe('AnimatedtextComponent', () => {
  let component: AnimatedtextComponent;
  let fixture: ComponentFixture<AnimatedtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
