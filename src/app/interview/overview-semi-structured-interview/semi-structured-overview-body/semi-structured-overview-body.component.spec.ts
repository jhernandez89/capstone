import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiStructuredOverviewBodyComponent } from './semi-structured-overview-body.component';

describe('SemiStructuredOverviewBodyComponent', () => {
  let component: SemiStructuredOverviewBodyComponent;
  let fixture: ComponentFixture<SemiStructuredOverviewBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiStructuredOverviewBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiStructuredOverviewBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
