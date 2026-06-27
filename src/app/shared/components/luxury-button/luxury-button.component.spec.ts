import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryButtonComponent } from './luxury-button.component';

describe('LuxuryButtonComponent', () => {
  let component: LuxuryButtonComponent;
  let fixture: ComponentFixture<LuxuryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxuryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
