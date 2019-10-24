import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProjectsViewComponent } from './active-projects-view.component';

describe('ActiveProjectsViewComponent', () => {
  let component: ActiveProjectsViewComponent;
  let fixture: ComponentFixture<ActiveProjectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveProjectsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
