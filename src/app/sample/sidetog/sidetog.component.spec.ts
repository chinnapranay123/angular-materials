import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidetogComponent } from './sidetog.component';

describe('SidetogComponent', () => {
  let component: SidetogComponent;
  let fixture: ComponentFixture<SidetogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidetogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidetogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
