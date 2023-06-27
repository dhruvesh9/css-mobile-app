import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemisation-usage',
  templateUrl: 'itemisation-usage.page.html',
  styleUrls: ['itemisation-usage.page.scss']
})
export class ItemisationUsagePage implements OnInit {
  itemizationData: any[] = [
    { serviceNumber: '12345', startTime: '10:00 AM', endTime: '10:30 AM', duration: '30 minutes', remainingBalance: '$20' },
    { serviceNumber: '54321', startTime: '11:00 AM', endTime: '11:15 AM', duration: '15 minutes', remainingBalance: '$15' },
    { serviceNumber: '67890', startTime: '12:00 PM', endTime: '12:45 PM', duration: '45 minutes', remainingBalance: '$18' },
    { serviceNumber: '09876', startTime: '1:00 PM', endTime: '1:30 PM', duration: '30 minutes', remainingBalance: '$22' },
    { serviceNumber: '54321', startTime: '2:00 PM', endTime: '2:15 PM', duration: '15 minutes', remainingBalance: '$19' },
    { serviceNumber: '12345', startTime: '3:00 PM', endTime: '3:30 PM', duration: '30 minutes', remainingBalance: '$17' },
    { serviceNumber: '67890', startTime: '4:00 PM', endTime: '4:45 PM', duration: '45 minutes', remainingBalance: '$21' },
    { serviceNumber: '09876', startTime: '5:00 PM', endTime: '5:30 PM', duration: '30 minutes', remainingBalance: '$16' },
    { serviceNumber: '54321', startTime: '6:00 PM', endTime: '6:15 PM', duration: '15 minutes', remainingBalance: '$14' },
    { serviceNumber: '12345', startTime: '7:00 PM', endTime: '7:30 PM', duration: '30 minutes', remainingBalance: '$19' },
    { serviceNumber: '67890', startTime: '8:00 PM', endTime: '8:45 PM', duration: '45 minutes', remainingBalance: '$23' },
    { serviceNumber: '09876', startTime: '9:00 PM', endTime: '9:30 PM', duration: '30 minutes', remainingBalance: '$18' },
    { serviceNumber: '54321', startTime: '10:00 PM', endTime: '10:15 PM', duration: '15 minutes', remainingBalance: '$16' },
    { serviceNumber: '12345', startTime: '11:00 PM', endTime: '11:30 PM', duration: '30 minutes', remainingBalance: '$15' },
    { serviceNumber: '67890', startTime: '12:00 AM', endTime: '12:45 AM', duration: '45 minutes', remainingBalance: '$20' },
    { serviceNumber: '09876', startTime: '1:00 AM', endTime: '1:30 AM', duration: '30 minutes', remainingBalance: '$19' },
    { serviceNumber: '54321', startTime: '2:00 AM', endTime: '2:15 AM', duration: '15 minutes', remainingBalance: '$17' },
    { serviceNumber: '12345', startTime: '3:00 AM', endTime: '3:30 AM', duration: '30 minutes', remainingBalance: '$21' },
    { serviceNumber: '67890', startTime: '4:00 AM', endTime: '4:45 AM', duration: '45 minutes', remainingBalance: '$18' },
    { serviceNumber: '09876', startTime: '5:00 AM', endTime: '5:30 AM', duration: '30 minutes', remainingBalance: '$16' }
  ];


  filterText: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor() { }

  getFilteredData(): any[] {
    if (this.filterText) {
      return this.itemizationData.filter(item =>
        item.serviceNumber.toLowerCase().includes(this.filterText.toLowerCase()) ||
        item.startTime.toLowerCase().includes(this.filterText.toLowerCase()) ||
        item.endTime.toLowerCase().includes(this.filterText.toLowerCase()) ||
        item.duration.toLowerCase().includes(this.filterText.toLowerCase()) ||
        item.remainingBalance.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      return this.itemizationData;
    }
  }

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.getFilteredData().slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
  }

  ngOnInit(): void {

  }
}

