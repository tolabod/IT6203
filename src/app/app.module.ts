import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PatientsDataComponent } from './patients-data/patients-data.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientRecordComponent } from './update-patient-record/update-patient-record.component';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import {PatientService} from './patient.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { PatientUpdateInformtionComponent } from './patient-update-informtion/patient-update-informtion.component';
import { FindPatientComponent } from './find-patient/find-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    PatientsDataComponent,
    AddPatientComponent,
    UpdatePatientRecordComponent,
    DeletePatientComponent,
    PatientUpdateInformtionComponent,
    FindPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
