import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  public patients;

  constructor(private patientService: PatientService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getPatients();
  }

  // tslint:disable-next-line:typedef
  private getPatients() {
    this.patientService.getPatients().subscribe(
      data => {this.patients = data},
      err => console.log(err),
      () => console.log('finished loading')
    );
  }

  // tslint:disable-next-line:typedef variable-name
  deletePatient(_id: string) {
    this.patientService.deletePrescription(_id);
  }
}
