import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSemistructureQuestionsComponent } from './create-semistructure-questions.component';

describe('CreateSemistructureQuestionsComponent', () => {
  let component: CreateSemistructureQuestionsComponent;
  let fixture: ComponentFixture<CreateSemistructureQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSemistructureQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSemistructureQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
