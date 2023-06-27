import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { AccountOverviewPage } from './account-overview.page';

describe('Tab1Page', () => {
  let component: AccountOverviewPage;
  let fixture: ComponentFixture<AccountOverviewPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountOverviewPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
