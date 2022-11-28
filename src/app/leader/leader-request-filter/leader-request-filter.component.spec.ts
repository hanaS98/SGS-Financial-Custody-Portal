import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderRequestFilterComponent } from './leader-request-filter.component';

describe('LeaderRequestFilterComponent', () => {
  let component: LeaderRequestFilterComponent;
  let fixture: ComponentFixture<LeaderRequestFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderRequestFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderRequestFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
