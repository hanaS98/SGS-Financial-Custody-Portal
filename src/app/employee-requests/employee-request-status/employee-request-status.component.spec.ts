import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestStatusComponent } from './employee-request-status.component';

describe('EmployeeRequestStatusComponent', () => {
  let component: EmployeeRequestStatusComponent;
  let fixture: ComponentFixture<EmployeeRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
