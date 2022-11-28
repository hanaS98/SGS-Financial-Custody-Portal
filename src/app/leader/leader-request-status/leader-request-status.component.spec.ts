import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderRequestStatusComponent } from './leader-request-status.component';

describe('LeaderRequestStatusComponent', () => {
  let component: LeaderRequestStatusComponent;
  let fixture: ComponentFixture<LeaderRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderRequestStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
