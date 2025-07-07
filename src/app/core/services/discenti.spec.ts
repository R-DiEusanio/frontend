import { TestBed } from '@angular/core/testing';

import { DiscentiService } from './discent.service';

describe('Discenti', () => {
  let service: DiscentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
