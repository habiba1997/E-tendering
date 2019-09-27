import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectRequestsComponent } from './direct-requests.component';

describe('DirectRequestsComponent', () => {
  let component: DirectRequestsComponent;
  let fixture: ComponentFixture<DirectRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
