import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemistructureConfidentialityComponent } from './semistructure-confidentiality.component';

describe('SemistructureConfidentialityComponent', () => {
  let component: SemistructureConfidentialityComponent;
  let fixture: ComponentFixture<SemistructureConfidentialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemistructureConfidentialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemistructureConfidentialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
