import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestUpdateComponent } from './employee-request-update.component';

describe('EmployeeRequestUpdateComponent', () => {
  let component: EmployeeRequestUpdateComponent;
  let fixture: ComponentFixture<EmployeeRequestUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
