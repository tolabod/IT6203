import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientsDataComponent} from './patients-data/patients-data.component';
import {AddPatientComponent} from './add-patient/add-patient.component';
import {UpdatePatientRecordComponent} from './update-patient-record/update-patient-record.component';
import {DeletePatientComponent} from './delete-patient/delete-patient.component';
import {PatientUpdateInformtionComponent} from './patient-update-informtion/patient-update-informtion.component';

const routes: Routes = [
  {path: 'patients', component: PatientsDataComponent},
  {path: 'addPatient', component: AddPatientComponent},
  {path: 'updateRecords', component: UpdatePatientRecordComponent},
  {path: 'deletePatient', component: DeletePatientComponent},
  {path: 'updateInformation/:_id', component: PatientUpdateInformtionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
