import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourProjectComponent } from './your-project.component';
import { HttpClientModule } from '@angular/common/http';

describe('YourProjectComponent', () => {
  let component: YourProjectComponent;
  let fixture: ComponentFixture<YourProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ YourProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
