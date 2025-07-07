import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentiComponent } from './docenti.component';

describe('Docenti', () => {
  let component: DocentiComponent;
  let fixture: ComponentFixture<DocentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
