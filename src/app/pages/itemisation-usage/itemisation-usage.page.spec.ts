import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { ItemisationUsagePage } from './itemisation-usage.page';

describe('Tab2Page', () => {
  let component: ItemisationUsagePage;
  let fixture: ComponentFixture<ItemisationUsagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemisationUsagePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemisationUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
