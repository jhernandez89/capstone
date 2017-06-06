import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiStructuredInterviewComponent } from './semi-structured-interview.component';

describe('SemiStructuredInterviewComponent', () => {
  let component: SemiStructuredInterviewComponent;
  let fixture: ComponentFixture<SemiStructuredInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiStructuredInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiStructuredInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
