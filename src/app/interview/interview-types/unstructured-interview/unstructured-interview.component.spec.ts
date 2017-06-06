import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstructuredInterviewComponent } from './unstructured-interview.component';

describe('UnstructuredInterviewComponent', () => {
  let component: UnstructuredInterviewComponent;
  let fixture: ComponentFixture<UnstructuredInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnstructuredInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstructuredInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
