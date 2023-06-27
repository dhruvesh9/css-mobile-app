import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemisationUsagePage } from './itemisation-usage.page';

const routes: Routes = [
  {
    path: '',
    component: ItemisationUsagePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemisationUsagePageRoutingModule {}
