import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload';
import { AuthenticationService } from 'src/shared/authentication-service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
})
export class UploadFormComponent  implements OnInit {
  selectedFiles!: FileList;
  currentFileUpload!: FileUpload;
  percentage!: number;
  user:any
  constructor(private uploadService: FileUploadService, public authService: AuthenticationService) {

   }

  ngOnInit() :void{
    this.user = this.authService.userData.uid
    console.log(this.user)
  }
  selectFile(event:any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0)!;
    this.selectedFiles = undefined!;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage!);
      },
      error => {
        console.log(error);
      }
    );
  }
}
