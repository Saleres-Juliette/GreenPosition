import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedPagePage } from './feed-page.page';

describe('FeedPagePage', () => {
  let component: FeedPagePage;
  let fixture: ComponentFixture<FeedPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
