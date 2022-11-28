import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestsFilterComponent } from './employee-requests-filter.component';

describe('EmployeeRequestsFilterComponent', () => {
  let component: EmployeeRequestsFilterComponent;
  let fixture: ComponentFixture<EmployeeRequestsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
