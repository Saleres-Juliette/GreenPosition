import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssaiPage } from './essai.page';

describe('EssaiPage', () => {
  let component: EssaiPage;
  let fixture: ComponentFixture<EssaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
