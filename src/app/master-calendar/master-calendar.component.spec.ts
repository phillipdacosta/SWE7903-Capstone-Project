import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCalendarComponent } from './master-calendar.component';

describe('MasterCalendarComponent', () => {
  let component: MasterCalendarComponent;
  let fixture: ComponentFixture<MasterCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
