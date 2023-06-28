import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'selfcare',
    component: TabsPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'account-overview',
        loadChildren: () => import('../pages/account-overview/account-overview.module').then(m => m.AccountOverviewPageModule)
      },
      {
        path: 'itemisation-usage',
        loadChildren: () => import('../pages/itemisation-usage/itemisation-usage.module').then(m => m.ItemisationUsagePageModule)
      },
      {
        path: 'user-details',
        loadChildren: () => import('../pages/user-details/user-details.module').then(m => m.UserDetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/selfcare/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/selfcare/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
