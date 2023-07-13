import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {
  constructor(
    public loadingController: LoadingController
  ) { }
  simpleLoader() {
    this.loadingController.create({
        message: 'Loading...'
    }).then((response) => {
        response.present();
    });
}
autoLoader() {
  this.loadingController.create({
    message: 'Loader hides after 4 seconds',
    duration: 4000
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
      console.log('Loader dismissed', response);
    });
  });
}   
}
