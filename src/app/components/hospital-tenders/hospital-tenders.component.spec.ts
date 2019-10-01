import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalTendersComponent } from './hospital-tenders.component';

describe('HospitalTendersComponent', () => {
  let component: HospitalTendersComponent;
  let fixture: ComponentFixture<HospitalTendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalTendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
