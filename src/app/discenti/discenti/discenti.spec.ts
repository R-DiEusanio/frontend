import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscentiComponent } from './discenti.component';

describe('Discenti', () => {
  let component: DiscentiComponent;
  let fixture: ComponentFixture<DiscentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
