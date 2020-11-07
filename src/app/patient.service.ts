import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class PatientService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  getPatients() {
    return this.http.get('http://localhost:3000/patients/getPatients');
  }


  // tslint:disable-next-line:typedef max-line-length
  addPatients(name: string, address: string, phoneNumber: number, nextOfKin: string, numOfNOK: number) {
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/patients/addPatient', {name, address, phoneNumber, nextOfKin, numOfNOK})
      .subscribe((responseData) => {
        console.log(responseData);
      });
    // location.reload();
  }


  // tslint:disable-next-line:typedef
  deletePrescription(prescriptionId: string) {
    this.http.delete('http://localhost:3000/patients/removePrescription/' + prescriptionId)
      .subscribe(() => console.log(`Deleted: ${prescriptionId}`));
    location.reload();
  }

  // tslint:disable-next-line:typedef
  removePatient(patientId: string) {
    this.http.delete('http://localhost:3000/patients/removePatient/' + patientId)
      .subscribe(() => console.log(`Deleted Patient with the ID of ${patientId}`));
    location.reload();
  }

  // tslint:disable-next-line:typedef
  updatePatient(id: string, name: string, address: string, phoneNumber: number, nextOfKin: string, numOfNOK: number) {
    this.http.put('http://localhost:3000/patients/updatePatient/' + id, {name, address, phoneNumber, nextOfKin, numOfNOK})
      .subscribe(() => {
        console.log(`Updated: ${id}`);
      });
    location.reload();
  }
}
