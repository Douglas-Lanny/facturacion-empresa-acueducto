import { TestBed } from '@angular/core/testing';

import { ResidentialAreaService } from './residential-area.service';

describe('ResidentialAreaService', () => {
  let service: ResidentialAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidentialAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
