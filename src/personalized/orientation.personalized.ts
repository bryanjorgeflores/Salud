import { Injectable } from "@angular/core";
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { Platform } from "ionic-angular";

@Injectable()

export class OrientationPersonalized {
  constructor(
    private screenOrientation: ScreenOrientation,
    public platform: Platform,

  ) { }

  orientationPortrait = () => {
    this.platform.ready()
      .then(() => {
        this.screenOrientation.unlock();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      })
      .catch(err => console.error(err));
  }

  orientationLandscape = () => {
    this.platform.ready()
      .then(() => {
        this.screenOrientation.unlock();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      })
      .catch(err => console.error(err));
  }
}