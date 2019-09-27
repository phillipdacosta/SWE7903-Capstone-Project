import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserEditsComponent } from './manager-user-edits.component';

describe('ManagerUserEditsComponent', () => {
  let component: ManagerUserEditsComponent;
  let fixture: ComponentFixture<ManagerUserEditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserEditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserEditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
