import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiathermyFileComponent } from './diathermy-file.component';

describe('DiathermyFileComponent', () => {
  let component: DiathermyFileComponent;
  let fixture: ComponentFixture<DiathermyFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiathermyFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiathermyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
