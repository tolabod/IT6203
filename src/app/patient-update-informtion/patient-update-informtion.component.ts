import {Component, Input, OnInit} from '@angular/core';
import { PatientService } from '../patient.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-patient-update-informtion',
  templateUrl: './patient-update-informtion.component.html',
  styleUrls: ['./patient-update-informtion.component.css']
})
export class PatientUpdateInformtionComponent implements OnInit {

  private id: string;

  // tslint:disable-next-line:variable-name
  constructor(private patientService: PatientService, public route: ActivatedRoute, private router: Router) { }

  @Input() patient: string;
  @Input() prescription: string;
  @Input() dosage: number;
  @Input() usageInterval: number;
  @Input() pharmacy: string;
  @Input() manufacturer: string;
  @Input() presidingDoctor: string;
  // tslint:disable-next-line:typedef variable-name


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.id = paramMap.get('_id');
      } else {
        this.id = null;
      }
    });
  }

  // tslint:disable-next-line:typedef
  updatePrescription() {
    // tslint:disable-next-line:max-line-length
    this.patientService.updatePrescription(this.id, this.patient, this.prescription, this.dosage, this.usageInterval, this.pharmacy, this.manufacturer, this.presidingDoctor);
  }
}
