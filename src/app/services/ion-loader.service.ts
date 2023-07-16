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
  return this.loadingController.create({
    message: 'Loading...',
    duration: 1000
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
      console.log('Loader dismissed', response);
    });
  });
}
}
