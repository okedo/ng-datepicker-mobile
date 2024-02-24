import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatepickerMobileComponent } from './ng-datepicker-mobile.component';

describe('NgDatepickerMobileComponent', () => {
  let component: NgDatepickerMobileComponent;
  let fixture: ComponentFixture<NgDatepickerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDatepickerMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgDatepickerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
