import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestsListComponent } from './employee-requests-list.component';

describe('EmployeeRequestsListComponent', () => {
  let component: EmployeeRequestsListComponent;
  let fixture: ComponentFixture<EmployeeRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
