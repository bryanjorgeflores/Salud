import { Injectable } from "@angular/core";
import { AlertController, ToastController, LoadingController } from "ionic-angular";

@Injectable()

export class AlertPersonalized {
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,

  ) { }

  alertAccept(
    title: string,
    subTitle: string,
    buttons: Array<string>,

  ) {
    let alertAccept = this.alertCtrl.create({
      title,
      subTitle,
      buttons,

    });
    alertAccept.present();
  }

  toastDegradable(
    message: string,
    duration: number,

  ) {
    let toastDegradable = this.toastCtrl.create({
      message,
      duration,

    });
    toastDegradable.present();
  }

  simpleLoading(
    content: string,
    duration: number,

  ) {
    let simpleLoading = this.loadingCtrl.create({
      content,
      duration,

    })
    simpleLoading.present();
  }

  customLoading(
    spinner: string,
    duration: number,
    content: string,
    showBackdrop: boolean,
    cssClass: string,

  ) {
    let customLoading = this.loadingCtrl.create({
      spinner,
      duration,
      content,
      showBackdrop,
      cssClass,

    });
    customLoading.present();
  }
}