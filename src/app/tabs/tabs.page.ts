import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private activatedRoute: ActivatedRoute) {}

  isLoginPage(): boolean {
    return this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'login';
  }
}
