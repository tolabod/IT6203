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
    return this.http.get('http://localhost:3000/api/v1/prescription/get');
  }


  // tslint:disable-next-line:typedef max-line-length
  addPrescription(patient: string, prescription: string, dosage: number, usageInterval: number, pharmacy: string, manufacturer: string, presidingDoctor: string) {
    // tslint:disable-next-line:max-line-length
    this.http.post('http://localhost:3000/api/v1/prescription/add', {patient, prescription, dosage, usageInterval, pharmacy, manufacturer, presidingDoctor})
      .subscribe((responseData) => {
        console.log(responseData);
      });
    location.reload();
  }


  // tslint:disable-next-line:typedef
  deletePrescription(prescriptionId: string) {
    this.http.delete('http://localhost:3000/api/v1/prescription/delete/' + prescriptionId)
      .subscribe(() => console.log(`Deleted: ${prescriptionId}`));
    location.reload();
  }

  // tslint:disable-next-line:typedef
  updatePrescription(id: string, patient: string, prescription: string, dosage: number, usageInterval: number, pharmacy: string, manufacturer: string, presidingDoctor: string) {
    this.http.put('http://localhost:3000/api/v1/prescription/update/' + id, {patient, prescription, dosage, usageInterval, pharmacy, manufacturer, presidingDoctor})
      .subscribe(() => {
        console.log(`Updated: ${id}`);
      });
    location.reload();
  }

  // tslint:disable-next-line:typedef
  findPrescription(searchItem: string) {
    return this.http.get('http://localhost:3000/api/v1/prescription/find/' + searchItem);
  }
}
