import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/shared/authentication-service";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { IonLoaderService } from '../services/ion-loader.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],

})
export class DashboardPage implements OnInit {
  fileName:any
  reader = new FileReader()
  message:any
  user:any


  constructor(
    public authService: AuthenticationService,
    private ionLoaderService: IonLoaderService,

  ) {

   }
  async ngOnInit() {
    
  }
  loadImageFromDevice(event: { target: { files: any[]; }; }) {

    const file = event.target.files[0];

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    this.message=this.reader.result


  };



    this.reader.onerror = (error) => {

      //handle errors

    };
  };
  clickInput(){
    document.getElementById("file-input")?.click()
  }
  async uploadFile(){
    this.ionLoaderService.autoLoader();
    const storage = getStorage();
    const storageRef = ref(storage, 'TestFiles/');
    uploadBytes(storageRef,this.message).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

  }
  refresh(){
    window.location.reload();
  }
}
