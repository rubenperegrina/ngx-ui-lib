import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUiLibraryComponent } from './ngx-ui-library.component';

describe('NgxUiLibraryComponent', () => {
  let component: NgxUiLibraryComponent;
  let fixture: ComponentFixture<NgxUiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxUiLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
