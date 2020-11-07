import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUpdateInformtionComponent } from './patient-update-informtion.component';

describe('PatientUpdateInformtionComponent', () => {
  let component: PatientUpdateInformtionComponent;
  let fixture: ComponentFixture<PatientUpdateInformtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientUpdateInformtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientUpdateInformtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
