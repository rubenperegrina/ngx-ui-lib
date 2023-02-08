import { TestBed } from '@angular/core/testing';

import { NgxUiLibraryService } from './ngx-ui-library.service';

describe('NgxUiLibraryService', () => {
  let service: NgxUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
