import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTrackingComponent } from './request-tracking.component';

describe('RequestTrackingComponent', () => {
  let component: RequestTrackingComponent;
  let fixture: ComponentFixture<RequestTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
