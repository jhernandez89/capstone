import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiStructuredQuestionFormatComponent } from './semi-structured-question-format.component';

describe('SemiStructuredQuestionFormatComponent', () => {
  let component: SemiStructuredQuestionFormatComponent;
  let fixture: ComponentFixture<SemiStructuredQuestionFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiStructuredQuestionFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiStructuredQuestionFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
