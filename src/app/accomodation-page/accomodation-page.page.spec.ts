import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccomodationPagePage } from './accomodation-page.page';

describe('AccomodationPagePage', () => {
  let component: AccomodationPagePage;
  let fixture: ComponentFixture<AccomodationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccomodationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
