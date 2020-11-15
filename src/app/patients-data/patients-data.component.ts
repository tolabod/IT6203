import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.css']
})
export class PatientsDataComponent implements OnInit {

  public patients;

  constructor(private patientService: PatientService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getPrescription();
  }

  // tslint:disable-next-line:typedef
  private getPrescription() {
    this.patientService.getPatients().subscribe(
      data => {this.patients = data; },
      err => console.log(err),
      () => console.log('finished loading')
    );
  }
}
