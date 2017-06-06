import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredInterviewComponent } from './structured-interview.component';

describe('StructuredInterviewComponent', () => {
  let component: StructuredInterviewComponent;
  let fixture: ComponentFixture<StructuredInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuredInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuredInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
