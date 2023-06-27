import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Toast } from '@capacitor/toast';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-user-details',
  templateUrl: 'user-details.page.html',
  styleUrls: ['user-details.page.scss']
})
export class UserDetailsPage {

  toastMessage: string = "";
  currentCoordinates: Position | null = null;

  constructor() { }

  showStatusBar = async () => {
    await StatusBar.show();
  };

  hideStatusBar = async () => {
    await StatusBar.hide();
  };

  async showToastMessages() {
    await Toast.show({
      text: this.toastMessage
    });
  }

  async printCurrentPosition() {
    this.currentCoordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', this.currentCoordinates);
  };

}
