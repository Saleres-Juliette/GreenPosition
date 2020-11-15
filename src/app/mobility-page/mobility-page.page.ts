import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobility-page',
  templateUrl: './mobility-page.page.html',
  styleUrls: ['./mobility-page.page.scss'],
})
export class MobilityPagePage {

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




