import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSemistructureBiographicalComponent } from './create-semistructure-biographical.component';

describe('CreateSemistructureBiographicalComponent', () => {
  let component: CreateSemistructureBiographicalComponent;
  let fixture: ComponentFixture<CreateSemistructureBiographicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSemistructureBiographicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSemistructureBiographicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
