import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.page.html',
  styleUrls: ['./feed-page.page.scss'],
})
export class FeedPagePage {

  reponses1 = [
    { name: 'About 3/4', isChecked: false },
    { name: 'About 1/2', isChecked: true },
    { name: 'About 1/4', isChecked: false },
  ];



 reponses2 = [
    { name: 'Never (veganism)', isChecked: false },
    { name: '1 to 2 times a day', isChecked: true },
    { name: '2 to 4 times a day' , isChecked: false },
  ];





  myBoolean = true;

  onMyBooleanChange() {
    console.log(this.myBoolean);
  }

}
