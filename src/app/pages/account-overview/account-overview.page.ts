import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { Toast } from '@capacitor/toast';

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

   }

  async doTopUp() {
    this.showToastMessages('Topup Successful')
    Haptics.impact({ style: ImpactStyle.Medium });
    await Haptics.vibrate();
  }

  async doAddOns() {
    this.showToastMessages('Requested Addons')
    Haptics.impact({ style: ImpactStyle.Light });
    await Haptics.vibrate();
  }

  async showToastMessages(message: string){
    await Toast.show({
      text: message
    });
  }

  
}
