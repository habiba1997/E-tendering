import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderNotificationsComponent } from './tender-notifications.component';

describe('TenderNotificationsComponent', () => {
  let component: TenderNotificationsComponent;
  let fixture: ComponentFixture<TenderNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
