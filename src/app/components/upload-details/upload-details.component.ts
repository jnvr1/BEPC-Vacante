import { Component, Input, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload';
import { AuthenticationService } from 'src/shared/authentication-service';


@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss'],
})
export class UploadDetailsComponent  implements OnInit {
  @Input() fileUpload= FileUpload;
  user:any
  constructor(private uploadService: FileUploadService,public authService: AuthenticationService) {

   }

  ngOnInit(): void {
    this.user = this.authService.userData.uid
  }

  deleteFileUpload(fileUpload: any): void {
    this.uploadService.deleteFile(fileUpload);
  }
}
