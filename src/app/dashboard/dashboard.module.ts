import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { UploadFormComponent } from '../components/upload-form/upload-form.component';
import { UploadListComponent } from '../components/upload-list/upload-list.component';
import { UploadDetailsComponent } from '../components/upload-details/upload-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,

  ],
  declarations: [DashboardPage,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent],
    
})
export class DashboardPageModule {}
