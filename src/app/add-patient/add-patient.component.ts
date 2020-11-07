import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _patient: PatientService) { }

  @Input() name: string;
  @Input() address: string;
  @Input() phoneNumber: number;
  @Input() nextOfKin: string;
  @Input() numOfNOK: number;
  // tslint:disable-next-line:typedef variable-name


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addPatient() {
    console.log(`name: ${this.name}\naddress: ${this.address}\nphone Number: ${this.phoneNumber}\nNext of Kin: ${this.nextOfKin}\nNOK Number: ${this.numOfNOK}`);
    // tslint:disable-next-line:max-line-length
    this._patient.addPatients(this.name, this.address, this.phoneNumber, this.nextOfKin, this.numOfNOK);
  }
}
