import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultMobilityPagePage } from './result-mobility-page.page';

describe('ResultMobilityPagePage', () => {
  let component: ResultMobilityPagePage;
  let fixture: ComponentFixture<ResultMobilityPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMobilityPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultMobilityPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
