import { TestBed } from '@angular/core/testing';

import { FormResourceService } from './form-resource.service';

describe('FormResourceService', () => {
  let service: FormResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
