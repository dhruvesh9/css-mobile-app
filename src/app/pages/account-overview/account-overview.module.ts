import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountOverviewPage } from './account-overview.page';

import { AccountOverviewPageRoutingModule } from './account-overview-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SpinnerModule } from 'primeng/spinner';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AccountOverviewPageRoutingModule,
    CalendarModule,
    ButtonModule,
    PanelModule,
    ChipModule,
    AccordionModule,
    BreadcrumbModule,
    CardModule,
    TooltipModule,
    MenubarModule,
    CarouselModule,
    ProgressBarModule,
    SpinnerModule
  ],
  declarations: [AccountOverviewPage]
})
export class AccountOverviewPageModule {}
