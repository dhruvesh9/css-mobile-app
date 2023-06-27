import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

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

  ngOnInit() { }

  async doTopUp() {
    Haptics.impact({ style: ImpactStyle.Medium });
    await Haptics.vibrate();
  }

  async doAddOns() {
    Haptics.impact({ style: ImpactStyle.Light });
    await Haptics.vibrate();
  }
}
