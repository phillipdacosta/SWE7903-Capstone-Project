import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProjectsViewComponent } from './completed-projects-view.component';

describe('CompletedProjectsViewComponent', () => {
  let component: CompletedProjectsViewComponent;
  let fixture: ComponentFixture<CompletedProjectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedProjectsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
