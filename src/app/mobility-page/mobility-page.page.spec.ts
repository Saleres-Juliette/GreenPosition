import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilityPagePage } from './mobility-page.page';

describe('MobilityPagePage', () => {
  let component: MobilityPagePage;
  let fixture: ComponentFixture<MobilityPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilityPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilityPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
