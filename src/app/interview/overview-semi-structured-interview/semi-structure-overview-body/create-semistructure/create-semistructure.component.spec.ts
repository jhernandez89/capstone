import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSemistructureComponent } from './create-semistructure.component';

describe('CreateSemistructureComponent', () => {
  let component: CreateSemistructureComponent;
  let fixture: ComponentFixture<CreateSemistructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSemistructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSemistructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
