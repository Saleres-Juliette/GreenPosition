import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdviceFeedPagePage } from './advice-feed-page.page';

describe('AdviceFeedPagePage', () => {
  let component: AdviceFeedPagePage;
  let fixture: ComponentFixture<AdviceFeedPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceFeedPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdviceFeedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
