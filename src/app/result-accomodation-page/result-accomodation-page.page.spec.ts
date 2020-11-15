import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultAccomodationPagePage } from './result-accomodation-page.page';

describe('ResultAccomodationPagePage', () => {
  let component: ResultAccomodationPagePage;
  let fixture: ComponentFixture<ResultAccomodationPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAccomodationPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultAccomodationPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
