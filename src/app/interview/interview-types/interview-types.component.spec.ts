import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTypesComponent } from './interview-types.component';

describe('InterviewTypesComponent', () => {
  let component: InterviewTypesComponent;
  let fixture: ComponentFixture<InterviewTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
