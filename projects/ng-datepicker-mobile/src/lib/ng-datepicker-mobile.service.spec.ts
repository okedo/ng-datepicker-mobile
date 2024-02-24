import { TestBed } from '@angular/core/testing';

import { NgDatepickerMobileService } from './ng-datepicker-mobile.service';

describe('NgDatepickerMobileService', () => {
  let service: NgDatepickerMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDatepickerMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
