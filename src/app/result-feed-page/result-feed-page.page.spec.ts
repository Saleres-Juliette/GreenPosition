import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultFeedPagePage } from './result-feed-page.page';

describe('ResultFeedPagePage', () => {
  let component: ResultFeedPagePage;
  let fixture: ComponentFixture<ResultFeedPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultFeedPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultFeedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
