import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestBtnComponent } from './employee-request-btn.component';

describe('EmployeeRequestBtnComponent', () => {
  let component: EmployeeRequestBtnComponent;
  let fixture: ComponentFixture<EmployeeRequestBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
