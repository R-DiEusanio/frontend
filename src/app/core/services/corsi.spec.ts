import { TestBed } from '@angular/core/testing';

import { CorsiService } from './corsi.service';

describe('Corsi', () => {
  let service: CorsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
