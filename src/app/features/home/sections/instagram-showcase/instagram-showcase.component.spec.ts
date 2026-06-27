import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramShowcaseComponent } from './instagram-showcase.component';

describe('InstagramShowcaseComponent', () => {
  let component: InstagramShowcaseComponent;
  let fixture: ComponentFixture<InstagramShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
