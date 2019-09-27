import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderFileComponent } from './tender-file.component';

describe('TenderFileComponent', () => {
  let component: TenderFileComponent;
  let fixture: ComponentFixture<TenderFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
