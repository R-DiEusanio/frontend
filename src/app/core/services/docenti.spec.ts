import { TestBed } from '@angular/core/testing';

import { DocentiService } from './docenti.service';

describe('Docenti', () => {
  let service: DocentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
