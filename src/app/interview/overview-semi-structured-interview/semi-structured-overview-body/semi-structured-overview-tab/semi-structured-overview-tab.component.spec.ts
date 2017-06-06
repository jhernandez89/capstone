import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiStructuredOverviewTabComponent } from './semi-structured-overview-tab.component';

describe('SemiStructuredOverviewTabComponent', () => {
  let component: SemiStructuredOverviewTabComponent;
  let fixture: ComponentFixture<SemiStructuredOverviewTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiStructuredOverviewTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiStructuredOverviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
