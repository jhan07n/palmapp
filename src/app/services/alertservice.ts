import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class Alertservice {

  public showingMessage = ""

  constructor(
    public alertController: AlertController
  ) {}

  async presentAlert(header,message,subtitle = null) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  //
  // showAlert(message) {
  //   // Check this message is showing or not
  //   if (message === this.showingMessage) {
  //     return
  //   }
  //
  //   this.showingMessage = message
  //   this.alertController.create({
  //     title: "APP_NAME",
  //     message: message,
  //     buttons: [{
  //       text: "OK",
  //       handler: () => {
  //         this.showingMessage = ""
  //       }
  //     }]
  //   }).present()
  // }
}