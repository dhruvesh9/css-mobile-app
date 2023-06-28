import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemisationUsagePage } from './itemisation-usage.page';
import { ChartModule } from 'primeng/chart';
import { ItemisationUsagePageRoutingModule } from './itemisation-usage-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ItemisationUsagePageRoutingModule,
    TableModule, 
    InputTextModule, 
    ButtonModule, 
    DropdownModule, 
    PaginatorModule,
    ChartModule
  ],
  declarations: [ItemisationUsagePage]
})
export class ItemisationUsagePageModule { }
