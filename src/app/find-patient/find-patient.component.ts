import { Component, OnInit, Input } from '@angular/core';
import {PatientService} from '../patient.service';

@Component({
  selector: 'app-find-patient',
  templateUrl: './find-patient.component.html',
  styleUrls: ['./find-patient.component.css']
})
export class FindPatientComponent implements OnInit {
  @Input() searchPatient: string;
  public patients;

  constructor(private patientService: PatientService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  findPrescription() {
    this.patientService.findPrescription(this.searchPatient).subscribe(
      data => {this.patients = data; },
      err => console.log(err),
      () => console.log('Search Item Available')
    );
  }
}
