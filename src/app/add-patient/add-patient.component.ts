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

  @Input() patient: string;
  @Input() prescription: string;
  @Input() dosage: number;
  @Input() usageInterval: number;
  @Input() pharmacy: string;
  @Input() manufacturer: string;
  @Input() presidingDoctor: string;
  // tslint:disable-next-line:typedef variable-name


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addPrescription() {
    // tslint:disable-next-line:max-line-length
    this._patient.addPrescription(this.patient, this.prescription, this.dosage, this.usageInterval, this.pharmacy, this.manufacturer, this.presidingDoctor);
  }
}
