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

  @Input() name: string;
  @Input() address: string;
  @Input() phoneNumber: number;
  @Input() nextOfKin: string;
  @Input() numOfNOK: number;
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
  updatePatient() {
    console.log(`Information to be Updated \n\nname: ${this.name}\naddress: ${this.address}\nphone Number: ${this.phoneNumber}\nNext of Kin: ${this.nextOfKin}\nNOK Number: ${this.numOfNOK}`);
    // tslint:disable-next-line:max-line-length
    this.patientService.updatePatient(this.id, this.name, this.address, this.phoneNumber, this.nextOfKin, this.numOfNOK);
  }
}
