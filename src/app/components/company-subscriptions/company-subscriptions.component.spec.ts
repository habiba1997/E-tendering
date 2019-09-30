import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySubscriptionsComponent } from './company-subscriptions.component';

describe('CompanySubscriptionsComponent', () => {
  let component: CompanySubscriptionsComponent;
  let fixture: ComponentFixture<CompanySubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
