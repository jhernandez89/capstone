import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSemiStructuredInterviewComponent } from './overview-semi-structured-interview.component';

describe('OverviewSemiStructuredInterviewComponent', () => {
  let component: OverviewSemiStructuredInterviewComponent;
  let fixture: ComponentFixture<OverviewSemiStructuredInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewSemiStructuredInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSemiStructuredInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
