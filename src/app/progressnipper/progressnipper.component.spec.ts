import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressnipperComponent } from './progressnipper.component';

describe('ProgressnipperComponent', () => {
  let component: ProgressnipperComponent;
  let fixture: ComponentFixture<ProgressnipperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressnipperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressnipperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
