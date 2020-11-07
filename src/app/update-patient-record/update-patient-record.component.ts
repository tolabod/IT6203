import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-update-patient-record',
  templateUrl: './update-patient-record.component.html',
  styleUrls: ['./update-patient-record.component.css']
})
export class UpdatePatientRecordComponent implements OnInit {

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
  updatePatient(_id: any) {
    // console.log(this.patientId);
  }
}
