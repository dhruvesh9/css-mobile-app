import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Toast } from '@capacitor/toast';
import { BiometryType, NativeBiometric } from "capacitor-native-biometric";

@Component({
  selector: 'app-account-overview',
  templateUrl: 'account-overview.page.html',
  styleUrls: ['account-overview.page.scss']
})
export class AccountOverviewPage implements OnInit {
  nextBillDate: Date = new Date(); // Set the initial value for next bill date
  isBillPaid: boolean = true; // Set the initial value for bill payment status


  constructor() {

  }

  ngOnInit() {
    const tabBar = window.document.getElementById('tab-bar-id');
    if (tabBar) {
      tabBar.style.removeProperty('display');
    }
    // this.performBiometricVerificatin();
  }

  async doTopUp() {
    this.showToastMessages('Topup Successful')
    await Haptics.vibrate();
  }

  async doAddOns() {
    this.showToastMessages('Requested Addons')
    await Haptics.vibrate();
  }

  async showToastMessages(message: string) {
    await Toast.show({
      text: message
    });
  }

  async performBiometricVerificatin() {
    try {
      const result = await NativeBiometric.isAvailable();

      if (!result.isAvailable) return;

      const isFaceID = result.biometryType == BiometryType.FACE_ID;

      const verified = await NativeBiometric.verifyIdentity({
        reason: "For easy log in",
        title: "Log in",
        subtitle: "Maybe add subtitle here?",
        description: "Maybe a description too?",
      })
        .then(() => true)
        .catch(() => false);

      if (!verified) return;
      this.showToastMessages('Is this verified? ' + verified)
      const credentials = await NativeBiometric.getCredentials({
        server: "www.example.com",
      });
      this.showToastMessages('credentials ' + credentials);
    } catch (err) {
      if (err instanceof Error) {
        this.showToastMessages('Catch error ' + err.message);
        console.error(err.message);
      } else {
        console.error('An unknown error occurred.');
      }
      console.log('Biometric not available');
    }
  }
}
